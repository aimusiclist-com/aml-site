// src/guestbook.js — 방명록 (결정사항 D-22, 채팅 3-6)
// -----------------------------------------------------------------------------
// 방문자 (로그인 없음, 같은 사이트 화면에서만 부른다)
//   GET  /api/gb?page=1           글 목록 (새 글 먼저, 20개씩)
//   POST /api/gb {name,text,track?,website}   글쓰기 (website = 숨은 로봇 함정 칸, 비어 있어야 함)
// 관리자 (src/index.js handleAdmin 에서 부른다)
//   GET  /api/admin/gb?page=1     꺼져 있어도 볼 수 있다
//   DELETE /api/admin/gb/{글id}
//
// 저장 (R2, 글 수 제한 없이 계속 보관)
//   gb/meta.json  { v, salt, files:[{k,n}] (오래된 것 → 새 것), total, day, day_total, ips:{IP해시: 오늘 글 수} }
//   gb/{k}.json   [글, 글, …] (오래된 것 → 새 것). k = 년월(202610), 200개가 차면 202610_2, 202610_3 …
//   글 = { id:"{k}-{6자리}", name, text, at, track? }
// 한 번 쓰기 = R2 쓰기 2회(meta + 파일), 한 페이지 보기 = R2 읽기 2~3회.
// -----------------------------------------------------------------------------
import { KEY, fail, json, readJson, nowIso, sha256Hex, randomHex, charLen } from './common.js';

export const GB = { page: 20, perFile: 200, perIpDay: 50, perSiteDay: 2000, nameMax: 20, textMax: 500 };
// 링크 금지: http(s)://, www., 그리고 "도메인 모양"(글자.글자 형태: example.com, abc.co.kr …)
const LINK_RE = /(https?:|ftp:|\/\/|www\.|\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:[a-z]{2,24}|xn--[a-z0-9-]+)\b)/i;
const ID_RE = /^[0-9]{6}(?:_[0-9]{1,4})?-[a-z0-9]{6}$/;
const TRACK_RE = /^[a-z0-9_-]{1,64}$/;

export const hasLink = (s) => LINK_RE.test(String(s || ''));

async function readMeta(env) {
  const obj = await env.BUCKET.get(KEY.gbMeta);
  let data = null;
  if (obj) { try { data = await obj.json(); } catch {} }
  if (!data || !Array.isArray(data.files)) data = { v: 1, salt: randomHex(16), files: [], total: 0, day: '', day_total: 0, ips: {} };
  return { meta: data, etag: obj ? obj.etag : null };
}
async function putCond(env, key, value, etag) {
  const opts = { httpMetadata: { contentType: 'application/json' }, onlyIf: etag ? { etagMatches: etag } : { etagDoesNotMatch: '*' } };
  return env.BUCKET.put(key, JSON.stringify(value), opts); // 조건이 안 맞으면 null
}
async function readFile(env, k) {
  const obj = await env.BUCKET.get(KEY.gbFile(k));
  let posts = [];
  if (obj) { try { const d = await obj.json(); if (Array.isArray(d)) posts = d; } catch {} }
  return { posts, etag: obj ? obj.etag : null };
}
const ym = () => new Date().toISOString().slice(0, 7).replace('-', '');   // UTC 년월
const today = () => new Date().toISOString().slice(0, 10);

// ── 목록 (새 글 먼저) ──────────────────────────────────────────────────────────
export async function listPosts(env, page) {
  const { meta } = await readMeta(env);
  const total = Math.max(0, meta.total | 0);
  const pages = Math.max(1, Math.ceil(total / GB.page));
  page = Math.min(Math.max(1, page | 0 || 1), pages);
  let skip = (page - 1) * GB.page, need = GB.page;
  const out = [];
  for (let i = meta.files.length - 1; i >= 0 && need > 0; i--) {
    const f = meta.files[i];
    if (skip >= f.n) { skip -= f.n; continue; }
    const { posts } = await readFile(env, f.k);
    const newest = posts.slice().reverse();
    const part = newest.slice(skip, skip + need);
    out.push(...part);
    need -= part.length; skip = 0;
  }
  return { ok: true, page, pages, total, posts: out };
}

// ── 글쓰기 ─────────────────────────────────────────────────────────────────────
export async function addPost(request, env, url) {
  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) fail(403, 'err.auth.origin');
  const body = await readJson(request, 8 * 1024);
  // 숨은 칸에 무엇이라도 들어 있으면 로봇으로 보고 거부한다
  if (body.website != null && String(body.website) !== '') fail(422, 'err.gb.rejected');
  const name = String(body.name == null ? '' : body.name).replace(/\s+/g, ' ').trim();
  const text = String(body.text == null ? '' : body.text).replace(/\r\n?/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  if (!name || charLen(name) > GB.nameMax) fail(400, 'err.gb.name', { max: GB.nameMax });
  if (!text || charLen(text) > GB.textMax) fail(400, 'err.gb.text', { max: GB.textMax });
  if (hasLink(name) || hasLink(text)) fail(422, 'err.gb.link');
  let track = null;
  if (body.track != null && body.track !== '') {
    if (typeof body.track !== 'string' || !TRACK_RE.test(body.track)) fail(400, 'err.request.invalid', { field: 'track' });
    track = body.track;
  }
  const ip = request.headers.get('cf-connecting-ip') || 'local';

  // 1) 목록표에 자리 잡기 (하루 제한 확인 포함). 다른 글과 동시에 쓰면 다시 읽어서 한 번 더.
  let post = null, k = null;
  for (let i = 0; i < 5 && !post; i++) {
    const { meta, etag } = await readMeta(env);
    const ipHash = (await sha256Hex(meta.salt + ':' + ip)).slice(0, 16);
    if (meta.day !== today()) { meta.day = today(); meta.day_total = 0; meta.ips = {}; }
    if ((meta.ips[ipHash] || 0) >= GB.perIpDay) fail(429, 'err.gb.daily_limit', { max: GB.perIpDay });
    if ((meta.day_total || 0) >= GB.perSiteDay) fail(429, 'err.gb.busy');
    const last = meta.files[meta.files.length - 1];
    const month = ym();
    if (last && last.k.slice(0, 6) === month && last.n < GB.perFile) k = last.k;
    else {
      const same = meta.files.filter((f) => f.k.slice(0, 6) === month).length;
      k = same ? `${month}_${same + 1}` : month;
      meta.files.push({ k, n: 0 });
    }
    meta.files[meta.files.length - 1].n++;
    meta.total = (meta.total | 0) + 1;
    meta.day_total = (meta.day_total | 0) + 1;
    meta.ips[ipHash] = (meta.ips[ipHash] || 0) + 1;
    const p = { id: `${k}-${randomHex(3)}`, name, text, at: nowIso() };
    if (track) p.track = track;
    if (await putCond(env, KEY.gbMeta, meta, etag)) post = p;
  }
  if (!post) fail(409, 'err.conflict');

  // 2) 글 파일에 붙이기
  for (let i = 0; i < 5; i++) {
    const { posts, etag } = await readFile(env, k);
    posts.push(post);
    if (await putCond(env, KEY.gbFile(k), posts, etag)) return json({ ok: true, post }, 201);
  }
  fail(409, 'err.conflict');
}

// ── 지우기 (관리자) ────────────────────────────────────────────────────────────
export async function deletePost(env, id) {
  if (!ID_RE.test(id)) fail(404, 'err.not_found');
  const k = id.split('-')[0];
  let left = -1;
  for (let i = 0; i < 5 && left < 0; i++) {
    const { posts, etag } = await readFile(env, k);
    if (!etag) fail(404, 'err.not_found');
    const rest = posts.filter((p) => p.id !== id);
    if (rest.length === posts.length) fail(404, 'err.not_found');
    if (rest.length) { if (await putCond(env, KEY.gbFile(k), rest, etag)) left = rest.length; }
    else { await env.BUCKET.delete(KEY.gbFile(k)); left = 0; }
  }
  if (left < 0) fail(409, 'err.conflict');
  for (let i = 0; i < 5; i++) {
    const { meta, etag } = await readMeta(env);
    const f = meta.files.find((x) => x.k === k);
    if (f) {
      if (left === 0 && f !== meta.files[meta.files.length - 1]) meta.files = meta.files.filter((x) => x !== f);
      else f.n = left;
    }
    meta.total = meta.files.reduce((s, x) => s + x.n, 0);
    if (await putCond(env, KEY.gbMeta, meta, etag)) return json({ ok: true, deleted: id, total: meta.total });
  }
  fail(409, 'err.conflict');
}
