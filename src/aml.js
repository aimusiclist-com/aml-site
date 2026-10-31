// src/aml.js — aimusiclist 자동 등록·주인 확인·ping (연동규약 v1.1 2장·4장, 채팅 3-5)
// -----------------------------------------------------------------------------
// R2 meta/aml.json  (관리자 파일과 따로 둔다 → 비밀번호를 잊어 관리자 파일을 지워도 등록은 그대로)
//   { v, site_secret(64자리 16진수), site_id|null, origin(등록할 주소), status, error, tries, day,
//     last_try_at, next_try_at, ok_at }
//   status: none(아직) · pending(연결 중) · ok(연결됨) · fail(실패, 10분 뒤 재시도) · stopped(재시도 안 함)
// 환경변수 AML_SITE_ID + AML_SITE_SECRET 이 둘 다 있으면 그것을 우선 쓴다(1단계 방식으로 설치한 사이트 호환).
// -----------------------------------------------------------------------------
import { KEY, apiBase, fail, getJson, hmacHex, nowIso, randomHex, sleep, PAGE_GEN } from './common.js';

const RETRY_MS = 10 * 60 * 1000;   // 실패하면 10분 뒤
const MAX_TRIES_PER_DAY = 20;       // 하루 20회까지
const MEMO_MS = 30 * 1000;
// 다시 시도해도 소용없는 오류 → 재시도 멈춤 (관리 화면의 "다시 연결"로만 재시도)
const PERMANENT = new Set(['err.site.suspended', 'err.site.url_invalid']);

let memo = null; // { at, data, etag }

export async function loadAml(env, fresh) {
  if (!fresh && memo && Date.now() - memo.at < MEMO_MS) return memo;
  const { data, etag } = await getJson(env, KEY.aml);
  memo = { at: Date.now(), data: data && data.site_secret ? data : null, etag };
  return memo;
}
async function saveAml(env, data) {
  const res = await env.BUCKET.put(KEY.aml, JSON.stringify(data), { httpMetadata: { contentType: 'application/json' } });
  memo = { at: Date.now(), data, etag: res.etag };
}
// 3-6: 일부 값만 바꿔 저장 (내 도메인 등)
export async function updateAml(env, patch) {
  const { data } = await loadAml(env, true);
  if (!data) return null;
  Object.assign(data, patch);
  await saveAml(env, data);
  return data;
}

// 3-6: 이 사이트의 공식 주소 = SITE_URL(옛 설정) → aimusiclist에 등록한 주소(aml.origin, 내 도메인으로 바꾸면 그 주소) → 요청 주소.
// catalog의 site.url·audio_url 은 항상 이 주소로 만든다(관리 화면을 다른 주소로 열어도 바뀌지 않게).
export async function originOf(env, url) {
  if (env.SITE_URL) return String(env.SITE_URL).replace(/\/+$/, '');
  const { data } = await loadAml(env);
  return String((data && data.origin) || url.origin).replace(/\/+$/, '');
}

// 설치 때 site_secret을 스스로 만든다 (이미 있으면 그대로)
export async function ensureAml(env, origin) {
  const { data } = await loadAml(env, true);
  if (data) {
    if (origin && !data.origin) { data.origin = origin; await saveAml(env, data); }
    return data;
  }
  const fresh = { v: 1, site_secret: randomHex(32), site_id: null, origin: origin || null, status: 'none', error: null, tries: 0, day: '', created_at: nowIso() };
  // 동시에 두 요청이 만들지 않도록 "없을 때만 쓰기"
  const res = await env.BUCKET.put(KEY.aml, JSON.stringify(fresh), { httpMetadata: { contentType: 'application/json' }, onlyIf: { etagDoesNotMatch: '*' } }).catch(() => null);
  if (!res) return (await loadAml(env, true)).data || fresh;
  memo = { at: Date.now(), data: fresh, etag: res.etag };
  return fresh;
}

// 실제로 쓸 site_id·비밀키
export function effective(env, aml) {
  if (env.AML_SITE_ID && env.AML_SITE_SECRET) return { site_id: env.AML_SITE_ID, secret: env.AML_SITE_SECRET, source: 'env' };
  return { site_id: (aml && aml.site_id) || null, secret: (aml && aml.site_secret) || null, source: 'auto' };
}

// 관리 화면에 보여 줄 연결 상태 한 줄
export function statusOf(env, aml) {
  const eff = effective(env, aml);
  if (eff.source === 'env') return { state: 'ok', source: 'env', site_id: eff.site_id };
  if (!aml) return { state: 'none', source: 'auto' };
  return {
    state: aml.status === 'ok' && aml.site_id ? 'ok' : (aml.status || 'none'),
    source: 'auto', site_id: aml.site_id || null, error: aml.error || null,
    next_try_at: aml.status === 'fail' ? aml.next_try_at || null : null, last_try_at: aml.last_try_at || null,
  };
}
// 3-6: 내 도메인 상태 (관리 화면 "내 도메인" 탭)
// 3-7: worker = 실제 Worker 이름 (workers.dev 주소 "이름.계정.workers.dev"의 첫 부분). 모르면 null → 화면은 "내 Worker(사이트 이름)"
export function domainOf(env, aml, requestOrigin) {
  const origin = String(env.SITE_URL || (aml && aml.origin) || requestOrigin).replace(/\/+$/, '');
  return {
    origin, domain: (aml && aml.domain) || null, domain_at: (aml && aml.domain_at) || null,
    from_env: !!env.SITE_URL, workers_dev: /\.workers\.dev$/i.test(new URL(origin).hostname),
    worker: workerName(origin, aml && aml.domain_from, requestOrigin),
  };
}
export function workerName(...origins) {
  for (const o of origins) {
    let h = '';
    try { h = new URL(String(o || '')).hostname; } catch { continue; }
    const m = h.match(/^([a-z0-9][a-z0-9-]{0,62})\.[a-z0-9-]+\.workers\.dev$/i);
    if (m) return m[1].toLowerCase();
  }
  return null;
}

// GET /.well-known/aimusiclist/verify?c={challenge} → {"site_id","proof"}  proof = HMAC(secret, "verify:"+challenge)
// ?c= 가 없으면 v1.0 방식(HMAC(secret, "verify:"+site_id)) — 이미 v1.0으로 등록된 사이트 호환
export async function serveVerify(env, url) {
  const { data } = await loadAml(env);
  const eff = effective(env, data);
  if (!eff.secret) fail(503, 'err.site.not_configured');
  const c = url.searchParams.get('c');
  let proof;
  if (c != null) {
    if (!/^[A-Za-z0-9_-]{8,128}$/.test(c)) fail(400, 'err.request.invalid', { field: 'c' });
    proof = await hmacHex(eff.secret, 'verify:' + c);
  } else {
    if (!eff.site_id) fail(503, 'err.site.not_configured');
    proof = await hmacHex(eff.secret, 'verify:' + eff.site_id);
  }
  return new Response(JSON.stringify({ site_id: eff.site_id || null, proof }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

// ── 자동 등록 POST {api}/sites/auto ─────────────────────────────────────────────
// cron이 볼 표시: R2 meta/todo_register (customMetadata.next = 다음 시도 시각). HEAD 1번으로 확인한다.
function putMarker(env, next) {
  return env.BUCKET.put(KEY.todoRegister, '', { customMetadata: { next: next || nowIso() } });
}
export async function registerDue(env) {
  const h = await env.BUCKET.head(KEY.todoRegister);
  if (!h) return false;
  const next = Date.parse((h.customMetadata && h.customMetadata.next) || '') || 0;
  return next <= Date.now();
}
let inflight = null;
const today = () => new Date().toISOString().slice(0, 10); // UTC 날짜

// 등록이 필요한지 (아직 site_id가 없고, 지금 시도해도 되는지)
export function needsRegister(env, aml, force) {
  if (effective(env, aml).source === 'env') return false;
  if (!aml) return true;
  if (aml.site_id && aml.status === 'ok') return false;
  if (force) return true;
  if (aml.status === 'stopped') return false;
  if (aml.next_try_at && Date.parse(aml.next_try_at) > Date.now()) return false;
  if (aml.day === today() && (aml.tries || 0) >= MAX_TRIES_PER_DAY) return false;
  return true;
}

// info: { origin, name, artist_name, contact_email, default_lang }
// 결과: { ok:true, site_id } 또는 { ok:false, error }
export function register(env, info, force) {
  if (!inflight) inflight = doRegister(env, info, force).finally(() => { inflight = null; });
  return inflight;
}

async function doRegister(env, info, force) {
  const aml = await ensureAml(env, info.origin);
  if (!needsRegister(env, aml, force)) return { ok: aml.status === 'ok', skipped: true, site_id: aml.site_id };
  const origin = info.origin || aml.origin;
  if (aml.day !== today()) { aml.day = today(); aml.tries = 0; }
  aml.tries = (aml.tries || 0) + 1;
  aml.origin = origin;
  if (info.contact_email) aml.contact_email = info.contact_email; // 관리자 파일을 지운 뒤에도 cron이 쓸 수 있게
  aml.status = 'pending'; aml.error = null; aml.last_try_at = nowIso();
  aml.next_try_at = new Date(Date.now() + RETRY_MS).toISOString(); // 중간에 끊겨도 cron이 10분 뒤 다시
  await saveAml(env, aml);
  await putMarker(env, aml.next_try_at);

  let code = null, params, siteId = null;
  try {
    const res = await fetch(apiBase(env) + '/sites/auto', {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        url: origin, name: info.name, artist_name: info.artist_name,
        contact_email: info.contact_email || aml.contact_email || '', default_lang: info.default_lang, site_secret: aml.site_secret,
      }),
      signal: AbortSignal.timeout(20000), // 우리사이트가 그 사이 verify(5초)를 부른다
    });
    let data = null;
    try { data = await res.json(); } catch {}
    if (res.ok && data && data.ok !== false && typeof data.site_id === 'string' && /^[A-Za-z0-9_-]{1,64}$/.test(data.site_id)) {
      siteId = data.site_id;
    } else {
      code = (data && data.error && data.error.code) || (res.status === 404 ? 'err.aml.not_ready' : 'err.aml.http');
      params = (data && data.error && data.error.params) || { status: res.status };
    }
  } catch {
    code = 'err.aml.unreachable';
  }

  const now = Date.now();
  if (siteId) {
    Object.assign(aml, { site_id: siteId, status: 'ok', error: null, next_try_at: null, ok_at: nowIso() });
    await saveAml(env, aml);
    await env.BUCKET.delete(KEY.todoRegister);
    // 3-19: 맨 아래 Powered by 링크가 내 아티스트 페이지로 바뀌도록 다음 방문 때 페이지를 다시 만든다
    try { await env.BUCKET.delete(KEY.page); } catch {}
    PAGE_GEN.n++;
    return { ok: true, site_id: siteId };
  }
  const stop = PERMANENT.has(code);
  Object.assign(aml, {
    status: stop ? 'stopped' : 'fail', error: { code, params: params || {} },
    next_try_at: stop ? null : new Date(now + RETRY_MS).toISOString(),
  });
  await saveAml(env, aml);
  if (stop) await env.BUCKET.delete(KEY.todoRegister);
  else await putMarker(env, aml.next_try_at); // cron이 10분 뒤 다시
  return { ok: false, error: aml.error };
}

// ping 결과가 "비밀키 틀림/없는 사이트"이면 자동 등록을 다시 하도록 표시 (재설치·R2 초기화 대비, 연동규약 2-2)
async function markReRegister(env, code) {
  const { data } = await loadAml(env, true);
  if (!data || effective(env, data).source === 'env') return;
  Object.assign(data, { status: 'fail', error: { code, params: {} }, next_try_at: nowIso() });
  await saveAml(env, data);
  await putMarker(env, data.next_try_at);
}

// ── ping (연동규약 4장) ─────────────────────────────────────────────────────────
// 바로 1번 → 실패하면 10초 뒤 1번 → 또 실패하면 cron이 약 1분 뒤 1번
export async function schedulePing(env, ctx) {
  const { data } = await loadAml(env);
  const eff = effective(env, data);
  if (!eff.site_id || !eff.secret) return 'skipped'; // 아직 등록 전 (등록되면 그때 보냄)
  ctx.waitUntil((async () => {
    if (await sendPing(env)) return;
    await sleep(10 * 1000);
    if (await sendPing(env)) return;
    await env.BUCKET.put(KEY.ping, nowIso());
  })());
  return 'sending';
}

export async function sendPing(env) {
  const { data } = await loadAml(env);
  const eff = effective(env, data);
  if (!eff.site_id || !eff.secret) return true; // 보낼 곳 없음 = 할 일 없음
  try {
    const res = await fetch(apiBase(env) + '/ping', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + eff.secret, 'content-type': 'application/json' },
      body: JSON.stringify({ site_id: eff.site_id }),
      signal: AbortSignal.timeout(5000),
    });
    if (res.status === 401 || res.status === 404) {
      let code = res.status === 401 ? 'err.auth.invalid_secret' : 'err.site.not_found';
      try { const d = await res.json(); if (d && d.error && d.error.code) code = d.error.code; } catch {}
      await markReRegister(env, code);
      return true; // 같은 비밀키로 다시 보내도 소용없음 → 재등록이 끝나면 다시 보낸다
    }
    return res.ok || res.status === 429; // 429(너무 자주)는 우리사이트가 곧 가져가므로 성공으로 친다
  } catch {
    return false;
  }
}

export async function retryPendingPing(env) {
  const pending = await env.BUCKET.head(KEY.ping);
  if (!pending) return;
  if (Date.now() - pending.uploaded.getTime() < 40 * 1000) return; // 아직 이르면 다음 분에
  await env.BUCKET.delete(KEY.ping); // 재시도는 1번만 (그 뒤는 우리사이트 6시간 정기 가져가기)
  await sendPing(env);
}
