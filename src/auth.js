// src/auth.js — 관리자 만들기·로그인·세션 (결정사항 A, 채팅 3-5)
// -----------------------------------------------------------------------------
// R2 meta/admin.json (이 파일 1개를 지우면 다시 "관리자 만들기" 화면이 나온다)
//   { v, email, pw:{alg,iter,salt,hash}, session_key, cf:{token,account_id,account_name}, created_at, updated_at }
// - 비밀번호: WebCrypto PBKDF2-SHA256. 반복 횟수는 무료 플랜 CPU 10ms 안에 들도록 정했다(PBKDF2_ITER).
// - 세션: 쿠키 aml_s = "{만료초}.{HMAC(session_key, 'sess:'+만료초)}"  HttpOnly·Secure·SameSite=Strict·30일.
//   서버에 세션 목록을 두지 않는다. 비밀번호를 바꾸면 session_key가 바뀌어 모든 기기가 로그아웃된다.
// - 잠금: 같은 IP에서 5번 틀리면 15분 잠금 (R2 meta/login_fail/{IP해시}.json)
// - 호환: 환경변수 AML_ADMIN_TOKEN(32자 이상)이 있으면 Authorization: Bearer 로도 관리 API를 쓸 수 있다.
//   그리고 그런 사이트는 관리자 만들기 때 그 값을 한 번 입력해야 한다(이미 설치한 사이트를 남이 가로채지 못하게).
// -----------------------------------------------------------------------------
import { KEY, fail, getJson, hmacHex, json, nowIso, randomHex, readJson, safeEqual, sha256Hex } from './common.js';
import { checkToken, clearUsageMemo } from './usage.js';

export const PBKDF2_ITER = 20000;       // 로컬 workerd 측정: 약 3.6ms (2026-10-28). 10ms 한도 안에 여유를 둔다.
const SESSION_DAYS = 30;
const COOKIE = 'aml_s';
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60 * 1000;
const EMAIL_RE = /^[^\s@<>"']{1,64}@[^\s@<>"']{1,190}\.[A-Za-z]{2,}$/;
const MEMO_MS = 30 * 1000;

let memo = null; // { at, data, etag }
export async function loadAdmin(env, fresh) {
  if (!fresh && memo && Date.now() - memo.at < MEMO_MS) return memo;
  const { data, etag } = await getJson(env, KEY.admin);
  memo = { at: Date.now(), data: data && data.email && data.pw ? data : null, etag };
  return memo;
}
async function saveAdmin(env, data, etag) {
  data.updated_at = nowIso();
  const opts = { httpMetadata: { contentType: 'application/json' } };
  opts.onlyIf = etag ? { etagMatches: etag } : { etagDoesNotMatch: '*' }; // 새로 만들 때는 "없을 때만"
  const res = await env.BUCKET.put(KEY.admin, JSON.stringify(data), opts);
  if (!res) fail(409, 'err.setup.done');
  memo = { at: Date.now(), data, etag: res.etag };
}
export const legacyToken = (env) => (String(env.AML_ADMIN_TOKEN || '').length >= 32 ? String(env.AML_ADMIN_TOKEN) : '');

// ── 비밀번호 해시 ──────────────────────────────────────────────────────────────
const toHex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
const fromHex = (h) => new Uint8Array(h.match(/../g).map((x) => parseInt(x, 16)));
async function pbkdf2(password, saltHex, iter) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  return toHex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: fromHex(saltHex), iterations: iter }, key, 256));
}
export async function hashPassword(password) {
  const salt = randomHex(16);
  return { alg: 'pbkdf2-sha256', iter: PBKDF2_ITER, salt, hash: await pbkdf2(password, salt, PBKDF2_ITER) };
}
async function checkPassword(pw, password) {
  if (!pw || pw.alg !== 'pbkdf2-sha256') return false;
  return safeEqual(await pbkdf2(password, pw.salt, pw.iter), pw.hash);
}

// ── 세션 쿠키 ──────────────────────────────────────────────────────────────────
function cookieOf(request, name) {
  const m = (request.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? m[1] : '';
}
async function makeCookie(admin) {
  const exp = Math.floor(Date.now() / 1000) + SESSION_DAYS * 86400;
  const sig = await hmacHex(admin.session_key, 'sess:' + exp);
  return `${COOKIE}=${exp}.${sig}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_DAYS * 86400}`;
}
const clearCookie = () => `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;

async function sessionValid(request, admin) {
  const v = cookieOf(request, COOKIE);
  const m = v.match(/^(\d{9,12})\.([a-f0-9]{64})$/);
  if (!m || !admin) return false;
  if (+m[1] < Date.now() / 1000) return false;
  return safeEqual(await hmacHex(admin.session_key, 'sess:' + m[1]), m[2]);
}

// 관리 API 인증: 쿠키 세션 → (호환) Bearer AML_ADMIN_TOKEN. 실패하면 401.
// 바꾸는 요청(GET 이외)은 다른 사이트에서 온 것이 아닌지 Origin도 확인한다.
export async function requireAdmin(request, env) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) fail(403, 'err.auth.origin');
  }
  const { data } = await loadAdmin(env);
  if (data && await sessionValid(request, data)) return data;
  const legacy = legacyToken(env);
  const bearer = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (legacy && bearer && await safeEqual(bearer, legacy)) return data || {};
  fail(401, data ? 'err.auth.required' : 'err.auth.no_admin');
}

// ── 로그인 실패 잠금 (IP별) ─────────────────────────────────────────────────────
async function ipKey(request) {
  return KEY.loginFail((await sha256Hex('ip:' + (request.headers.get('cf-connecting-ip') || 'local'))).slice(0, 24));
}
async function checkLock(env, key) {
  const { data } = await getJson(env, key);
  if (data && data.until && Date.parse(data.until) > Date.now()) {
    fail(429, 'err.auth.locked', { minutes: Math.ceil((Date.parse(data.until) - Date.now()) / 60000) });
  }
  return data && !(data.until && Date.parse(data.until) <= Date.now()) ? data : { fails: 0 };
}
async function addFail(env, key, state) {
  const fails = (state.fails || 0) + 1;
  const rec = fails >= MAX_FAILS ? { fails: 0, until: new Date(Date.now() + LOCK_MS).toISOString() } : { fails };
  await env.BUCKET.put(key, JSON.stringify(rec));
  return rec;
}

// ── 주소별 처리 (/api/auth/*, /api/setup*) ──────────────────────────────────────
// 반환: Response 또는 null(이 파일이 맡지 않는 주소)
export async function authFetch(request, env, ctx, url, hooks) {
  const p = url.pathname, M = request.method;
  if (p === '/api/auth/status' && M === 'GET') return status(request, env);
  if (p === '/api/setup/token-check' && M === 'POST') return setupTokenCheck(request, env);
  if (p === '/api/setup' && M === 'POST') return setup(request, env, ctx, url, hooks);
  if (p === '/api/auth/login' && M === 'POST') return login(request, env);
  if (p === '/api/auth/logout' && M === 'POST') return json({ ok: true }, 200, { 'set-cookie': clearCookie() });
  if (p === '/api/admin/account' && M === 'POST') return updateAccount(request, env);
  return null;
}

async function status(request, env) {
  const { data } = await loadAdmin(env, true);
  const logged = !!(data && await sessionValid(request, data));
  return json({
    ok: true, admin_exists: !!data, logged_in: logged,
    legacy_token_required: !data && !!legacyToken(env),
    email: logged ? data.email : undefined,
  });
}

// 설치 전(관리자가 없을 때) 또는 로그인한 관리자만 토큰을 검사할 수 있다
async function setupTokenCheck(request, env) {
  const { data } = await loadAdmin(env);
  if (data && !(await sessionValid(request, data))) fail(401, 'err.auth.required');
  const b = await readJson(request, 4096);
  const r = await checkToken(env, b.token, typeof b.account_id === 'string' ? b.account_id : '');
  if (r.need_choice) return json({ ok: true, need_choice: true, accounts: r.accounts });
  return json({ ok: true, account: r.account, accounts: r.accounts });
}

function vEmail(v) {
  v = typeof v === 'string' ? v.trim() : '';
  if (v.length > 254 || !EMAIL_RE.test(v)) fail(400, 'err.setup.email_invalid');
  return v;
}
function vPassword(v) {
  if (typeof v !== 'string' || [...v].length < 6) fail(400, 'err.setup.password_short', { min: 6 });
  if (v.length > 200) fail(400, 'err.request.invalid', { field: 'password' });
  return v;
}

// POST /api/setup  {email, password, password2, cf_token, account_id?, legacy_token?}
async function setup(request, env, ctx, url, hooks) {
  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) fail(403, 'err.auth.origin');
  const cur = await loadAdmin(env, true);
  if (cur.data) fail(409, 'err.setup.done');
  const b = await readJson(request, 8192);
  const legacy = legacyToken(env);
  if (legacy && !(typeof b.legacy_token === 'string' && await safeEqual(b.legacy_token.trim(), legacy))) fail(401, 'err.setup.legacy_token');
  const email = vEmail(b.email);
  const password = vPassword(b.password);
  if (b.password2 !== undefined && b.password2 !== password) fail(400, 'err.setup.password_mismatch');
  const tk = await checkToken(env, b.cf_token, typeof b.account_id === 'string' ? b.account_id : '');
  if (tk.need_choice) fail(400, 'err.cf.choose_account');

  const admin = {
    v: 1, email, pw: await hashPassword(password), session_key: randomHex(32),
    cf: { token: tk.token, account_id: tk.account.id, account_name: tk.account.name },
    created_at: nowIso(),
  };
  await saveAdmin(env, admin, cur.etag); // 이미 있으면(동시에 다른 사람이 먼저) 409
  clearUsageMemo();
  // site_secret 만들기 + aimusiclist 자동 등록 (응답을 늦추지 않게 뒤에서)
  if (hooks && hooks.afterSetup) ctx.waitUntil(hooks.afterSetup(env, ctx, url, admin).catch((e) => console.error(e)));
  return json({ ok: true, email }, 201, { 'set-cookie': await makeCookie(admin) });
}

// POST /api/auth/login {email, password}
async function login(request, env) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) fail(403, 'err.auth.origin');
  const key = await ipKey(request);
  const state = await checkLock(env, key);
  const b = await readJson(request, 4096);
  const { data } = await loadAdmin(env, true);
  if (!data) fail(409, 'err.auth.no_admin');
  const email = typeof b.email === 'string' ? b.email.trim().toLowerCase() : '';
  const okEmail = email === String(data.email).toLowerCase();
  const okPw = typeof b.password === 'string' && b.password.length <= 200 && await checkPassword(data.pw, b.password); // 이메일이 틀려도 같은 시간이 걸리게
  if (!okEmail || !okPw) {
    const rec = await addFail(env, key, state);
    if (rec.until) fail(429, 'err.auth.locked', { minutes: Math.ceil(LOCK_MS / 60000) });
    fail(401, 'err.auth.wrong_login', { left: MAX_FAILS - rec.fails });
  }
  if (state.fails) await env.BUCKET.delete(key);
  return json({ ok: true, email: data.email }, 200, { 'set-cookie': await makeCookie(data) });
}

// POST /api/admin/account {current_password, email?, new_password?, cf_token?, account_id?}
// 이메일·비밀번호·사용량 토큰 바꾸기. 현재 비밀번호가 맞아야 한다.
async function updateAccount(request, env) {
  await requireAdmin(request, env);
  const { data, etag } = await loadAdmin(env, true);
  if (!data) fail(409, 'err.auth.no_admin');
  const key = await ipKey(request);
  const state = await checkLock(env, key);
  const b = await readJson(request, 8192);
  // M-5: 사용량 키만 넣을 때는 현재 비밀번호가 필요 없다 (읽기 전용 키, 이미 로그인한 관리자). 이메일·비밀번호를 바꿀 때만 확인
  const onlyToken = !!b.cf_token && !b.new_password && !(typeof b.email === 'string' && b.email !== '');
  if (!onlyToken && !(typeof b.current_password === 'string' && await checkPassword(data.pw, b.current_password))) {
    const rec = await addFail(env, key, state);
    if (rec.until) fail(429, 'err.auth.locked', { minutes: Math.ceil(LOCK_MS / 60000) });
    fail(401, 'err.auth.wrong_password', { left: MAX_FAILS - rec.fails });
  }
  const next = { ...data };
  if (b.email !== undefined && b.email !== '') next.email = vEmail(b.email);
  let relog = false;
  if (b.new_password) { next.pw = await hashPassword(vPassword(b.new_password)); next.session_key = randomHex(32); relog = true; }
  if (b.cf_token) {
    const tk = await checkToken(env, b.cf_token, typeof b.account_id === 'string' ? b.account_id : '');
    if (tk.need_choice) fail(400, 'err.cf.choose_account');
    next.cf = { token: tk.token, account_id: tk.account.id, account_name: tk.account.name };
    clearUsageMemo();
  }
  await saveAdmin(env, next, etag);
  // 비밀번호를 바꾸면 다른 기기는 로그아웃, 이 기기는 새 쿠키로 계속
  return json({ ok: true, email: next.email }, 200, relog ? { 'set-cookie': await makeCookie(next) } : {});
}

// 관리 화면에 보여 줄 계정 정보 (토큰 값은 보내지 않는다)
export function accountInfo(admin) {
  if (!admin || !admin.email) return null;
  const tok = admin.cf && typeof admin.cf.token === 'string' ? admin.cf.token : '';
  return { email: admin.email, cf_account: admin.cf ? admin.cf.account_name || admin.cf.account_id : null, cf_set: !!(admin.cf && admin.cf.token),
    cf_hint: tokenHint(tok), r2_account: null };   // M-5 (Workers판은 R2 가 바인딩이라 계정 번호를 모른다)
}
// M-5: 넣어 둔 키를 가려서 보여 준다 (앞 머리 cfut_ 같은 것 + 끝 6자). 값 자체는 보내지 않는다
export function tokenHint(tok) {
  if (typeof tok !== 'string' || tok.length < 16) return null;
  const m = tok.match(/^[A-Za-z]{2,6}_/);
  return (m ? m[0] : '') + '••••••••' + tok.slice(-6);
}
