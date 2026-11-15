// src/common.js — 여러 파일이 함께 쓰는 도구 (채팅 3-5)
// 오류 응답은 문장 없이 코드만: {"ok":false,"error":{"code":"err.xxx","params":{...}}}

export const KEY = {
  db: 'meta/db.json',             // 모든 곡·앨범 (내 사이트용 원본)
  catalog: 'meta/catalog.json',   // aimusiclist 공개분 (우리사이트가 가져감)
  admin: 'meta/admin.json',       // 관리자 계정 (비밀번호를 잊으면 이 파일 1개만 지운다)
  aml: 'meta/aml.json',           // aimusiclist 연결 정보 (site_secret·site_id) — 지우지 않는다
  usage: 'meta/usage.json',       // 사용량 10분 캐시
  ui: 'meta/ui.json',             // 스킨·메뉴 (3-2)
  page: 'meta/page.html',         // 미리 만든 방문자 페이지 (3-2)
  ping: 'meta/ping_pending',      // ping 재시도 표시 (있을 때만)
  todoRegister: 'meta/todo_register', // 자동 등록 재시도 표시 (있을 때만)
  todoCommit: 'meta/todo_commit',     // 여러 곡 업로드 뒤 반영이 빠졌을 때 cron이 대신 반영
  todoAlbumPub: 'meta/todo_albumpub', // 3-24 예약 공개 앨범이 있을 때만. customMetadata at = 가장 이른 공개 시각(UTC) — cron 이 HEAD 1번으로 본다
  loginFail: (ipHash) => `meta/login_fail/${ipHash}.json`,
  audio: (id) => `audio/${id}`,
  cover: (id) => `covers/${id}`,
  // 3-6
  trackImg: (id) => `images/${id}`,  // 곡 이미지 100×100 WebP (직접 올린 것만)
  trackImgL: (id) => `images-l/${id}`, // 3-16 곡 큰 그림 200~400px 정사각 WebP (같은 자르기에서 함께 만든 것, 있을 때만) — /i/{id}?s=l
  lyrics: (id) => `lyrics/${id}`,    // 가사 .srt 원문 (UTF-8)
  banner: 'site/banner',             // 상단 배너 (최대 1600×400 WebP)
  profile: 'site/profile',           // 프로필 이미지 400×400 WebP (3.31, 전 200×200)
  gbMeta: 'gb/meta.json',            // 방명록 목록표 (파일별 글 수, 오늘 IP별 글 수)
  gbFile: (k) => `gb/${k}.json`,     // 방명록 글 (월별 파일, 200개마다 나눔: 202610.json, 202610_2.json …)
};

// 3-6 이미지 규칙 (연동규약 5장): 브라우저가 줄여서 WebP로 올린다. 서버는 형식·크기·가로세로만 확인한다.
export const IMAGE_RULES = {
  track: { maxBytes: 50 * 1024, maxW: 100, maxH: 100 },
  trackLg: { maxBytes: 60 * 1024, maxW: 400, maxH: 400, minW: 200, square: true },   // 3-16 큰 그림 (aimusiclist 1~3위 카드·내 사이트 큰 재생 화면)
  cover: { maxBytes: 100 * 1024, maxW: 200, maxH: 200 },
  banner: { maxBytes: 300 * 1024, maxW: 1600, maxH: 400 },
  profile: { maxBytes: 150 * 1024, maxW: 400, maxH: 400 },   // 3.31: 400×400·150KB (전 200·100KB — 예전 그림도 그대로 받음)
};

// WebP 파일의 가로·세로 (RIFF 머리글만 읽는다). WebP가 아니면 null.
export function webpSize(buf) {
  if (!buf || buf.length < 30) return null;
  const s = (a, b) => String.fromCharCode(...buf.slice(a, b));
  if (s(0, 4) !== 'RIFF' || s(8, 12) !== 'WEBP') return null;
  const chunk = s(12, 16);
  if (chunk === 'VP8X') {
    return { w: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)), h: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)) };
  }
  if (chunk === 'VP8 ') {                       // 손실 압축: 시작 코드 9d 01 2a 뒤에 14비트 가로·세로
    if (buf[23] !== 0x9d || buf[24] !== 0x01 || buf[25] !== 0x2a) return null;
    return { w: (buf[26] | (buf[27] << 8)) & 0x3fff, h: (buf[28] | (buf[29] << 8)) & 0x3fff };
  }
  if (chunk === 'VP8L') {                       // 무손실: 0x2f 뒤 14비트씩
    if (buf[20] !== 0x2f) return null;
    const b = buf[21] | (buf[22] << 8) | (buf[23] << 16) | (buf[24] << 24);
    return { w: 1 + (b & 0x3fff), h: 1 + ((b >>> 14) & 0x3fff) };
  }
  return null;
}

// 올린 이미지 본문 읽기 + 검사 → { buf, w, h, v(내용 해시 8자리) }
export async function readWebp(request, rule) {
  const type = (request.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  if (type !== 'image/webp') fail(415, 'err.upload.type_invalid', { allowed: 'webp' });
  if (Number(request.headers.get('content-length') || 0) > rule.maxBytes) fail(413, 'err.upload.too_large', { max_kb: rule.maxBytes / 1024 });
  const buf = new Uint8Array(await request.arrayBuffer());
  if (!buf.length) fail(411, 'err.upload.length_required');
  if (buf.length > rule.maxBytes) fail(413, 'err.upload.too_large', { max_kb: rule.maxBytes / 1024 });
  const size = webpSize(buf);
  if (!size) fail(415, 'err.upload.type_invalid', { allowed: 'webp' });
  if (size.w < 1 || size.h < 1 || size.w > rule.maxW || size.h > rule.maxH) fail(422, 'err.image.size', { max_w: rule.maxW, max_h: rule.maxH, w: size.w, h: size.h });
  if ((rule.minW && size.w < rule.minW) || (rule.square && size.w !== size.h)) fail(422, 'err.image.size', { max_w: rule.maxW, max_h: rule.maxH, w: size.w, h: size.h });
  const v = hex(await crypto.subtle.digest('SHA-256', buf)).slice(0, 8);
  return { buf, w: size.w, h: size.h, v };
}

// 3-6: db.json을 저장하면 숫자를 올린다 → 같은 Worker의 방문자 페이지 메모리(30초)를 바로 버린다 (광고 끄기 등 즉시 반영)
export const PAGE_GEN = { n: 0 };

export const DEFAULT_API = 'https://aimusiclist.com/api/v1';
export const ALLOWED_ORIGINS = ['https://aimusiclist.com', 'https://www.aimusiclist.com'];

export class ApiError extends Error {
  constructor(status, code, params) { super(code); this.status = status; this.code = code; this.params = params; }
}
export function fail(status, code, params) { throw new ApiError(status, code, params); }

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers },
  });
}
export function errorResponse(e, headers = {}) {
  const error = { code: e.code };
  if (e.params) error.params = e.params;
  return json({ ok: false, error }, e.status, headers);
}

export const nowIso = () => new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const charLen = (s) => [...s].length;
export const apiBase = (env) => String(env.AML_API_BASE || DEFAULT_API).replace(/\/+$/, '');

const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
export async function sha256Hex(text) {
  return hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)));
}
export async function hmacHex(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, enc.encode(message)));
}
export function randomHex(bytes) { return hex(crypto.getRandomValues(new Uint8Array(bytes))); }

// 같은 길이로 맞춰 비교 (시간차 공격 방지)
export async function safeEqual(a, b) {
  const enc = new TextEncoder();
  const [x, y] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(String(a))),
    crypto.subtle.digest('SHA-256', enc.encode(String(b))),
  ]);
  return crypto.subtle.timingSafeEqual(x, y);
}

export async function readJson(request, maxBytes = 64 * 1024, optional = false) {
  if (Number(request.headers.get('content-length') || 0) > maxBytes) fail(413, 'err.request.too_large');
  const text = await request.text();
  if (text.length > maxBytes) fail(413, 'err.request.too_large');
  if (!text && optional) return {};
  try {
    const v = JSON.parse(text);
    if (v && typeof v === 'object' && !Array.isArray(v)) return v;
  } catch {}
  fail(400, 'err.request.invalid', { field: 'body' });
}

export async function getJson(env, key) {
  const obj = await env.BUCKET.get(key);
  if (!obj) return { data: null, etag: null };
  try { return { data: await obj.json(), etag: obj.etag }; } catch { return { data: null, etag: obj.etag }; }
}
export async function putJson(env, key, data, etag) {
  const opts = { httpMetadata: { contentType: 'application/json' } };
  if (etag) opts.onlyIf = { etagMatches: etag };
  const res = await env.BUCKET.put(key, JSON.stringify(data), opts);
  if (!res) fail(409, 'err.conflict');
  return res;
}

// 사이트 주소: SITE_URL(내 도메인) → 요청 주소
export function siteOrigin(env, url) {
  return String(env.SITE_URL || url.origin).replace(/\/+$/, '');
}
