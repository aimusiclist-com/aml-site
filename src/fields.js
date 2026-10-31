// src/fields.js — 확장 항목(fields.json) 받기·검사 + 새 버전 안내(versions.json) (연동규약 v1.3 / 확장항목 규격 v1.1, 채팅 3-8)
// -----------------------------------------------------------------------------
// 우리사이트 GET {api}/fields.json   : "어떤 추가 항목이 있는지" (데이터만, 64KB 이하, ETag)
//           GET {api}/versions.json : 개인사이트 최신 버전·업데이트 방법 주소 (없으면 조용히 넘어감)
//
// R2
//   meta/fields.json   마지막으로 받은 "정상본" (검사·정리한 모양으로 저장. 받은 글자는 화면에서 항상 이스케이프)
//   meta/fields_check  빈 파일. customMetadata 에 받은 기록만 둔다 (HEAD 1번으로 확인 → 읽기 비용 최소)
//                      { ok_at, tried_at, error, etag, version, v_latest, v_url, v_min, v_notes, v_at }
//
// 언제 받나 (대량방문 대비 설계원칙 2장 12번)
//   - 하루 1번: 사이트마다 다른 "분"(site_id 해시 → 0~1439분, UTC). 1만 개 사이트가 같은 시각에 몰리지 않는다.
//   - 실패(네트워크·5xx·잘못된 파일)했거나 아직 한 번도 못 받았으면: 그 분(分)과 같은 "매시 n분"에 1시간마다 다시.
//   - 관리 화면 [Update fields] 버튼: 바로 받기 (1분에 1번).
//   - 실패·잘못된 JSON·64KB 초과·모르는 schema(fields-1 아님)·더 낮은 version → 마지막 정상본을 그대로 쓴다.
//   - 우리사이트에 fields.json 이 아직 없으면(404) "항목 없음"으로 보고 다음 날 같은 분에 다시 본다.
// CPU: 받기·검사는 cron/버튼에서 하루 1번 정도. 화면 그리기는 관리 화면 브라우저가 한다(Worker는 저장·검사만).
// -----------------------------------------------------------------------------
import PKG from '../package.json';
import { KEY, apiBase, fail, nowIso, PAGE_GEN } from './common.js';
import { loadAml } from './aml.js';

export const APP_VERSION = String(PKG.version || '0.0.0');   // 내 프로그램 버전 (새 버전 안내와 비교)

export const FIELDS_KEY = 'meta/fields.json';
export const FIELDS_CHECK = 'meta/fields_check';
const PAGE_KEY = 'meta/page.html';

export const FIELDS_SCHEMA = 'fields-1';
export const FIELDS_MAX_BYTES = 64 * 1024;
const MAX_DEPTH = 8;
const MAX_FIELDS = 200;
const MAX_OPTIONS = 50;
export const EXT_MAX = { track: 1024, site: 2048 };   // catalog ext JSON 크기 (규격 3장)
export const LOCAL_MAX = 4096;                        // 사이트 자체 칸(local) — 저장만, catalog로 보내지 않음
export const KNOWN_TYPES = ['text', 'number', 'bool', 'select', 'multiselect'];
const MANUAL_GAP_MS = 60 * 1000;                      // [Update fields] 1분에 1번
const RETRY_AGE_MS = 25 * 3600 * 1000;                // 마지막 성공이 25시간보다 오래되면 매시 다시 시도
const FETCH_TIMEOUT = 5000;

const KEY_RE = /^[a-z][a-z0-9_]{1,31}$/;              // 규격 2장 key·옵션 key
const LANG_RE = /^[a-z]{2,3}(-[a-z0-9]{2,8})?$/;
const SEMVER_RE = /^(\d{1,4})\.(\d{1,4})\.(\d{1,6})$/;

// ── 받은 파일 정리 ────────────────────────────────────────────────────────────
function depthOk(v, d) {
  if (d > MAX_DEPTH) return false;
  if (v && typeof v === 'object') {
    for (const k in v) if (!depthOk(v[k], d + 1)) return false;
  }
  return true;
}
// 글자: 줄바꿈·제어문자 제거, 길이 제한. (HTML로 쓰지 않는다 — 화면에서 항상 이스케이프)
function cleanText(s, max) {
  if (typeof s !== 'string') return '';
  if (/[\u0000-\u001f\u007f\u2028\u2029]|\s\s/.test(s)) s = s.replace(/[\u0000-\u001f\u007f\u2028\u2029]+/g, ' ').replace(/\s+/g, ' ');
  s = s.trim();
  return s.length > max ? [...s].slice(0, max).join('') : s;   // 길 때만 글자 단위로 자른다 (CPU 절약)
}
// { "en": "Mood", "ko": "분위기" } → 언어 코드·글자만 남긴다
function cleanLabels(o, max) {
  const out = {};
  if (!o || typeof o !== 'object' || Array.isArray(o)) return out;
  let n = 0;
  for (const [k, v] of Object.entries(o)) {
    const code = String(k).toLowerCase();
    if (!LANG_RE.test(code)) continue;
    const s = cleanText(v, max);
    if (!s) continue;
    out[code] = s;
    if (++n >= 60) break;
  }
  return out;
}
const finite = (x) => typeof x === 'number' && Number.isFinite(x);
const intIn = (x, lo, hi) => Number.isInteger(x) && x >= lo && x <= hi;

// 항목 하나 정리. 쓸 수 없는 항목은 null (그 항목만 버린다)
function cleanField(f) {
  if (!f || typeof f !== 'object' || Array.isArray(f)) return null;
  if (typeof f.key !== 'string' || !KEY_RE.test(f.key)) return null;
  if (f.scope !== 'track' && f.scope !== 'site') return null;
  if (typeof f.type !== 'string' || !/^[a-z][a-z0-9_-]{0,31}$/.test(f.type)) return null;
  const label = cleanLabels(f.label, 60);
  if (!label.en) return null;                        // en 은 필수
  const d = f.display && typeof f.display === 'object' ? f.display : {};
  const out = {
    key: f.key, scope: f.scope, type: f.type,
    status: f.status === 'deprecated' ? 'deprecated' : 'active',
    label, help: cleanLabels(f.help, 160),
    display: { track_row: d.track_row === true, detail: d.detail === true, filter: d.filter === true, order: intIn(d.order, -9999, 9999) ? d.order : 0 },
    known: KNOWN_TYPES.includes(f.type),
  };
  if (intIn(f.since, 0, 1e9)) out.since = f.since;
  if (!out.known) return out;                        // 모르는 type: 이름·안내만 (관리 화면에 "업데이트 후 사용" 안내)
  if (f.type === 'text') out.max_length = intIn(f.max_length, 1, 200) ? f.max_length : 200;
  if (f.type === 'number') {
    if (finite(f.min)) out.min = f.min;
    if (finite(f.max)) out.max = f.max;
    if (out.min != null && out.max != null && out.min > out.max) { delete out.min; delete out.max; }
    if (f.integer === true) out.integer = true;
  }
  if (f.type === 'select' || f.type === 'multiselect') {
    const seen = new Set(), opts = [];
    for (const o of Array.isArray(f.options) ? f.options : []) {
      if (!o || typeof o.key !== 'string' || !KEY_RE.test(o.key) || seen.has(o.key)) continue;
      const lb = cleanLabels(o.label, 60);
      if (!lb.en) lb.en = o.key;
      seen.add(o.key); opts.push({ key: o.key, label: lb });
      if (opts.length >= MAX_OPTIONS) break;
    }
    if (!opts.length) return null;
    out.options = opts;
    if (f.type === 'multiselect') out.max_select = intIn(f.max_select, 1, 5) ? f.max_select : 5;
  }
  return out;
}

// 받은 글자(text) → { doc } 또는 { error }
export function parseFieldsDoc(text) {
  if (typeof text !== 'string' || !text) return { error: 'err.fields.invalid' };
  if (new TextEncoder().encode(text).length > FIELDS_MAX_BYTES) return { error: 'err.fields.too_large' };
  let raw;
  try { raw = JSON.parse(text); } catch { return { error: 'err.fields.invalid' }; }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || !depthOk(raw, 1)) return { error: 'err.fields.invalid' };
  if (raw.schema !== FIELDS_SCHEMA) return { error: 'err.fields.schema', params: { schema: cleanText(String(raw.schema), 20) } };
  if (!intIn(raw.version, 0, 2e9)) return { error: 'err.fields.invalid' };
  if (!Array.isArray(raw.fields)) return { error: 'err.fields.invalid' };
  const seen = new Set(), fields = [];
  for (const f of raw.fields) {
    const c = cleanField(f);
    if (!c || seen.has(c.key)) continue;
    seen.add(c.key); fields.push(c);
    if (fields.length >= MAX_FIELDS) break;
  }
  const doc = { schema: FIELDS_SCHEMA, version: raw.version, fields };
  if (typeof raw.updated_at === 'string' && /^\d{4}-\d{2}-\d{2}T[\d:.]+Z$/.test(raw.updated_at)) doc.updated_at = raw.updated_at;
  return { doc };
}

// ── 저장된 정상본 (Worker 메모리 60초) ─────────────────────────────────────────
let memo = null;   // { at, doc }
export async function loadFields(env, fresh) {
  if (!fresh && memo && Date.now() - memo.at < 60 * 1000) return memo.doc;
  let doc = null;
  const obj = await env.BUCKET.get(FIELDS_KEY);
  if (obj) { try { const d = await obj.json(); if (d && d.schema === FIELDS_SCHEMA && Array.isArray(d.fields)) doc = d; } catch {} }
  memo = { at: Date.now(), doc };
  return doc;
}
// 정상본 색인 (key → 항목, 항목 → 옵션 key 모음). 곡 1,000개 catalog 에서도 찾기가 빠르게
const IDX = new WeakMap();
function indexOf(doc) {
  let ix = IDX.get(doc);
  if (!ix) {
    ix = new Map();
    for (const f of doc.fields) ix.set(f.key, f);
    IDX.set(doc, ix);
  }
  return ix;
}
const OPTS = new WeakMap();
function optSet(f) {
  let o = OPTS.get(f);
  if (!o) { o = new Set((f.options || []).map((x) => x.key)); OPTS.set(f, o); }
  return o;
}
export function fieldOf(doc, key) { return doc ? indexOf(doc).get(key) || null : null; }

// ── 값 검사 (서버에서도 브라우저와 같은 규칙. 규격 3장 값 형식) ──────────────────
// 반환: { value } (저장할 값) · { clear: true } (지우기) · { error }
export function checkValue(f, v) {
  if (v === null || v === undefined || v === '' || (Array.isArray(v) && !v.length)) return { clear: true };
  switch (f.type) {
    case 'text': {
      if (typeof v !== 'string') return { error: true };
      const s = cleanText(v, 100000);
      if (!s) return { clear: true };
      if ([...s].length > (f.max_length || 200)) return { error: true, too_long: true };
      return { value: s };
    }
    case 'number': {
      if (!finite(v)) return { error: true };
      if (f.integer && !Number.isInteger(v)) return { error: true };
      if ((f.min != null && v < f.min) || (f.max != null && v > f.max)) return { error: true };
      return { value: v };
    }
    case 'bool':
      return typeof v === 'boolean' ? { value: v } : { error: true };
    case 'select':
      return typeof v === 'string' && optSet(f).has(v) ? { value: v } : { error: true };
    case 'multiselect': {
      if (!Array.isArray(v) || new Set(v).size !== v.length || v.length > (f.max_select || 5)) return { error: true };
      const os = optSet(f);
      if (!v.every((x) => typeof x === 'string' && os.has(x))) return { error: true };
      return { value: v.slice() };
    }
    default:
      return { error: true };
  }
}
const jsonBytes = (o) => new TextEncoder().encode(JSON.stringify(o)).length;

// 관리 화면이 보낸 { key: 값|null } 을 저장된 ext 에 합친다 (보낸 key만 바꾸고, 나머지·모르는 key는 그대로 보관)
// scope: 'track' | 'site'. 규칙 위반이면 아무것도 바꾸지 않고 오류.
export function mergeExt(stored, patch, doc, scope) {
  if (patch == null) return stored;
  if (typeof patch !== 'object' || Array.isArray(patch)) fail(400, 'err.request.invalid', { field: 'ext' });
  const keys = Object.keys(patch);
  if (keys.length > 64) fail(400, 'err.request.invalid', { field: 'ext' });
  if (!keys.length) return stored;
  if (!doc) fail(409, 'err.fields.none');
  const out = stored && typeof stored === 'object' && !Array.isArray(stored) ? { ...stored } : {};
  for (const k of keys) {
    const f = fieldOf(doc, k);
    if (!f || f.scope !== scope) fail(422, 'err.ext.unknown_field', { key: String(k).slice(0, 32) });
    if (!f.known) fail(422, 'err.ext.unsupported', { key: k });
    const r = checkValue(f, patch[k]);
    if (r.clear) { delete out[k]; continue; }                 // 지우기는 deprecated 항목도 된다
    if (r.error) fail(422, r.too_long ? 'err.ext.too_long' : 'err.ext.value', { key: k, max: f.max_length || f.max_select || '' });
    // deprecated: 입력란이 없으므로 새 값은 받지 않는다 (있던 값은 그대로 보관·전송)
    if (f.status === 'deprecated' && JSON.stringify(out[k]) !== JSON.stringify(r.value)) fail(422, 'err.ext.deprecated', { key: k });
    out[k] = r.value;
  }
  if (jsonBytes(out) > EXT_MAX[scope]) fail(422, 'err.ext.too_large', { max_kb: EXT_MAX[scope] / 1024 });
  return Object.keys(out).length ? out : undefined;
}

// catalog 에 넣을 ext: 지금 정상본에 있는(알려진 type, 같은 scope) 항목의 맞는 값만. deprecated 도 보낸다.
// 정상본이 없으면(우리사이트가 꺼져 있는 등) 저장할 때 검사한 값을 그대로. 크기를 넘으면 넣지 않는다.
export function extForCatalog(ext, doc, scope) {
  if (!ext || typeof ext !== 'object' || Array.isArray(ext)) return undefined;
  let out = {};
  if (doc) {
    for (const [k, v] of Object.entries(ext)) {
      const f = fieldOf(doc, k);
      if (!f || !f.known || f.scope !== scope) continue;
      const r = checkValue(f, v);
      if (r.value !== undefined) out[k] = r.value;
    }
  } else {
    for (const [k, v] of Object.entries(ext)) if (KEY_RE.test(k) && v !== null && v !== undefined) out[k] = v;
  }
  if (!Object.keys(out).length) return undefined;
  if (jsonBytes(out) > EXT_MAX[scope]) return undefined;
  return out;
}

// 방문자 화면(곡 줄 .aml-ext 칩)에 쓸 것: display.track_row 인 곡 항목만.
// 반환: { fields: { key: {type,label,order,opts?} }, extOf(track) → {key: 값} | undefined }
export function pageExt(doc) {
  const rows = doc ? doc.fields.filter((f) => f.scope === 'track' && f.known && f.display.track_row) : [];
  const used = {};
  return {
    extOf(t) {
      if (!rows.length || !t.ext || typeof t.ext !== 'object') return undefined;
      const out = {};
      for (const f of rows) {
        if (!(f.key in t.ext)) continue;
        const r = checkValue(f, t.ext[f.key]);
        if (r.value === undefined || r.value === false) continue;   // bool 은 "예"일 때만 칩
        out[f.key] = r.value;
        const u = used[f.key] || (used[f.key] = { f, opts: new Set() });   // 쓰인 옵션만 페이지에 넣는다 (페이지를 가볍게)
        if (f.type === 'select') u.opts.add(r.value);
        if (f.type === 'multiselect') r.value.forEach((x) => u.opts.add(x));
      }
      return Object.keys(out).length ? out : undefined;
    },
    fields() {
      const o = {};
      for (const { f, opts } of Object.values(used)) {
        const x = { type: f.type, label: f.label, order: f.display.order };
        if (f.options) {
          x.opts = {};
          for (const op of f.options) if (opts.has(op.key)) x.opts[op.key] = op.label;
        }
        o[f.key] = x;
      }
      return o;
    },
  };
}

// 사이트 자체 칸(local): 아티스트가 자기 사이트에만 쓰는 값. catalog·방문자 화면으로 보내지 않는다 (지금은 화면 없이 구조만)
export function vLocal(v) {
  if (v == null) return undefined;
  if (typeof v !== 'object' || Array.isArray(v)) fail(400, 'err.request.invalid', { field: 'local' });
  const out = {};
  for (const [k, x] of Object.entries(v)) {
    if (!KEY_RE.test(k)) fail(400, 'err.request.invalid', { field: 'local' });
    if (x === null || x === '') continue;
    if (typeof x === 'string') out[k] = x.slice(0, 1000);
    else if (typeof x === 'boolean' || finite(x)) out[k] = x;
    else fail(400, 'err.request.invalid', { field: 'local' });
  }
  if (jsonBytes(out) > LOCAL_MAX) fail(422, 'err.ext.too_large', { max_kb: LOCAL_MAX / 1024 });
  return Object.keys(out).length ? out : undefined;
}

// ── 버전 비교 ─────────────────────────────────────────────────────────────────
export function cmpVersion(a, b) {
  const x = SEMVER_RE.exec(String(a || '')), y = SEMVER_RE.exec(String(b || ''));
  if (!x || !y) return 0;
  for (let i = 1; i <= 3; i++) { const d = Number(x[i]) - Number(y[i]); if (d) return d > 0 ? 1 : -1; }
  return 0;
}
// versions.json 의 업데이트 안내 주소: https + 우리사이트·GitHub 만 (우리사이트가 뚫려도 엉뚱한 곳으로 보내지 않게)
function safeUpdateUrl(env, u) {
  if (typeof u !== 'string' || u.length > 300 || /[\s<>"'`\\]/.test(u)) return '';
  let x;
  try { x = new URL(u); } catch { return ''; }
  if (x.username || x.password) return '';
  let api = '';
  try { api = new URL(apiBase(env)).origin; } catch {}
  const okHost = x.protocol === 'https:' && ['aimusiclist.com', 'www.aimusiclist.com', 'github.com'].includes(x.hostname);
  return okHost || (api && x.origin === api) ? x.href : '';
}

// ── 받기 ──────────────────────────────────────────────────────────────────────
// 응답 본문을 max 바이트까지만 읽는다 (그보다 크면 null)
async function readCapped(res, max) {
  const len = Number(res.headers.get('content-length') || 0);
  if (len > max) { try { await res.body?.cancel(); } catch {} return null; }
  if (!res.body) return '';
  const reader = res.body.getReader();
  const chunks = []; let n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    n += value.length;
    if (n > max) { try { await reader.cancel(); } catch {} return null; }
    chunks.push(value);
  }
  const all = new Uint8Array(n); let o = 0;
  for (const c of chunks) { all.set(c, o); o += c.length; }
  try { return new TextDecoder('utf-8', { fatal: true }).decode(all); } catch { return undefined; }
}

async function readCheck(env) {
  const h = await env.BUCKET.head(FIELDS_CHECK);
  return h ? { exists: true, ...(h.customMetadata || {}) } : { exists: false };
}
async function writeCheck(env, m) {
  const meta = {};
  for (const [k, v] of Object.entries(m)) if (k !== 'exists' && v != null && v !== '') meta[k] = String(v).slice(0, 300);
  await env.BUCKET.put(FIELDS_CHECK, '', { customMetadata: meta });
}

// 방문자 페이지를 다음 방문 때 다시 만들게 한다 (항목 이름·표시 규칙이 바뀌었을 때)
async function bustPage(env) {
  PAGE_GEN.n++;
  try { await env.BUCKET.delete(PAGE_KEY); } catch {}
}

// fields.json 받기. opts.manual = [Update fields] 버튼 (1분에 1번)
// 반환: { ok, changed, version, error?, wait? }
export async function refreshFields(env, opts = {}) {
  const chk = await readCheck(env);
  const now = Date.now();
  if (opts.manual && chk.tried_at && now - Date.parse(chk.tried_at) < MANUAL_GAP_MS) {
    return { ok: false, throttled: true, wait: Math.ceil((MANUAL_GAP_MS - (now - Date.parse(chk.tried_at))) / 1000) };
  }
  const cur = await loadFields(env, true);
  chk.tried_at = nowIso();
  let error = null, params = null, changed = false;
  try {
    const headers = { accept: 'application/json' };
    if (cur && chk.etag) headers['if-none-match'] = chk.etag;
    const res = await fetch(apiBase(env) + '/fields.json', { headers, signal: AbortSignal.timeout(FETCH_TIMEOUT) });
    if (res.status === 304 && cur) {
      chk.ok_at = chk.tried_at;
    } else if (res.status === 404) {
      chk.ok_at = chk.tried_at; error = 'err.fields.none';     // 우리사이트에 아직 없음 (2-9 전) — 실패로 치지 않는다
      try { await res.body?.cancel(); } catch {}
    } else if (!res.ok) {
      error = 'err.fields.http'; params = { status: res.status };
      try { await res.body?.cancel(); } catch {}
    } else {
      const text = await readCapped(res, FIELDS_MAX_BYTES);
      const p = text === null ? { error: 'err.fields.too_large' } : text === undefined ? { error: 'err.fields.invalid' } : parseFieldsDoc(text);
      if (p.error) { error = p.error; params = p.params || null; }
      else if (cur && p.doc.version < cur.version) { error = 'err.fields.stale'; params = { version: p.doc.version, have: cur.version }; }
      else {
        if (!cur || JSON.stringify(cur) !== JSON.stringify(p.doc)) {
          await env.BUCKET.put(FIELDS_KEY, JSON.stringify(p.doc), {
            httpMetadata: { contentType: 'application/json; charset=utf-8' },
            customMetadata: { version: String(p.doc.version) },
          });
          memo = { at: Date.now(), doc: p.doc };
          changed = true;
          await bustPage(env);
        }
        chk.ok_at = chk.tried_at;
        chk.etag = res.headers.get('etag') || '';
        chk.version = p.doc.version;
      }
    }
  } catch {
    error = 'err.fields.unreachable';
  }
  chk.error = error ? error + (params ? ' ' + JSON.stringify(params) : '') : '';
  // 새 버전 안내 (같은 때에 함께, 실패하면 조용히 넘어감)
  await refreshVersions(env, chk);
  await writeCheck(env, chk);
  const doc = memo && memo.doc;
  return { ok: !error || error === 'err.fields.none', changed, version: doc ? doc.version : null, error: error ? { code: error, params: params || {} } : null };
}

// versions.json (2-9 형식, aimusiclist PR #11 확정):
// { "schema":"versions-1", "personal_site": { "latest":"3.8.0", "min_supported":"3.5.0", "update_url":"https://…", "notes_url":"https://…" } }
// update_url 이 없거나 쓸 수 없으면 옛 키 url 도 받는다(하위 호환). 주소는 https + aimusiclist.com·github.com 만. null·빈 값은 "없음".
async function refreshVersions(env, chk) {
  try {
    const res = await fetch(apiBase(env) + '/versions.json', { headers: { accept: 'application/json' }, signal: AbortSignal.timeout(FETCH_TIMEOUT) });
    if (!res.ok) { try { await res.body?.cancel(); } catch {} return; }
    const text = await readCapped(res, 16 * 1024);
    if (!text) return;
    const d = JSON.parse(text);
    const p = d && d.personal_site;
    if (!p || typeof p !== 'object') return;
    const latest = typeof p.latest === 'string' && SEMVER_RE.test(p.latest) ? p.latest : '';
    if (!latest) return;
    chk.v_latest = latest;
    chk.v_url = safeUpdateUrl(env, p.update_url) || safeUpdateUrl(env, p.url);
    chk.v_min = typeof p.min_supported === 'string' && SEMVER_RE.test(p.min_supported) ? p.min_supported : '';
    chk.v_notes = safeUpdateUrl(env, p.notes_url);
    chk.v_at = nowIso();
  } catch { /* 없으면 조용히 */ }
}

// ── cron: 사이트마다 다른 분에 하루 1번 ─────────────────────────────────────────
// FNV-1a 32비트 해시 → 0~1439분
export function slotOf(seed) {
  let h = 0x811c9dc5;
  const s = String(seed || 'aml');
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h % 1440;
}
let slotMemo = null;   // { at, slot }
async function mySlot(env) {
  if (slotMemo && Date.now() - slotMemo.at < 6 * 3600 * 1000) return slotMemo.slot;
  const { data } = await loadAml(env);
  const seed = env.AML_SITE_ID || (data && (data.site_id || data.origin)) || 'aml';
  slotMemo = { at: Date.now(), slot: slotOf(seed) };
  return slotMemo.slot;
}
export async function cronFields(env, scheduledTime) {
  const d = new Date(scheduledTime || Date.now());
  const minute = d.getUTCHours() * 60 + d.getUTCMinutes();
  const slot = await mySlot(env);
  if (minute % 60 !== slot % 60) return null;               // 1시간에 1번만 아래를 본다 (R2 HEAD 1번)
  const chk = await readCheck(env);
  const okAge = chk.ok_at ? d.getTime() - Date.parse(chk.ok_at) : Infinity;   // cron 이 정한 시각 기준
  if (minute !== slot && okAge < RETRY_AGE_MS) return null; // 하루 1번(내 분), 실패 중이면 매시
  return refreshFields(env, {});
}

// 관리 화면용 상태
export async function fieldsState(env) {
  const [doc, chk] = await Promise.all([loadFields(env), readCheck(env)]);
  const err = chk.error ? String(chk.error).split(' ')[0] : null;
  return {
    fields: { doc, version: doc ? doc.version : null, ok_at: chk.ok_at || null, tried_at: chk.tried_at || null, error: err ? { code: err } : null, checked: chk.exists },
    app: {
      version: APP_VERSION, latest: chk.v_latest || null, url: chk.v_url || '', notes_url: chk.v_notes || '',
      min_supported: chk.v_min || null,
      newer: cmpVersion(chk.v_latest, APP_VERSION) > 0,
      required: !!chk.v_min && cmpVersion(APP_VERSION, chk.v_min) < 0,   // 내 버전 < min_supported → 경고색 안내 (강제 아님)
    },
  };
}
