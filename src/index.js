/**
 * aimusiclist 개인사이트 Worker  (연동규약 v1.3 기준, 채팅 3-5 · 3-6 · 3-7 · 3-8)
 * ------------------------------------------------------------
 *   1) 공개 주소 : catalog.json / verify?c= / 음원 /a/{id} / 커버 /c/{id}
 *                  3-6: 곡 이미지 /i/{id} / 가사 /l/{id} / 프로필 /p / 배너 /b / /ads.txt / 방명록 /api/gb
 *   2) 설치·로그인 : /api/setup, /api/auth/*  (src/auth.js)
 *   3) 관리 API   : /api/admin/...  (로그인 쿠키, 호환: Bearer AML_ADMIN_TOKEN)
 *   4) 자동 등록·ping : src/aml.js   5) 사용량 : src/usage.js   6) 화면 : src/ui.js
 *   7) cron(1분)  : ping 재시도 · 자동 등록 재시도(10분 간격, 하루 20회) · 빠진 반영 처리
 *   8) 3-12 통계  : src/stats.js — 재생·방문을 Analytics Engine 에 1줄(요청 +0), 하루 1번 집계·인기 순위
 *
 * 공개는 두 단계 (연동규약 0-7)
 *   - 올린 곡은 내 사이트에 항상 보인다.
 *   - 곡마다 aml(= "aimusiclist에도 공개", 업로드 기본값 true)이 켜진 곡만 catalog에 들어간다.
 *   - 모든 변경은 바로 저장되고 catalog 갱신 + ping (변경 저장 버튼 없음).
 *     여러 곡 업로드는 ?defer=1 로 올린 뒤 POST /api/admin/commit 1번.
 *
 * R2 (버킷 비공개)
 *   meta/db.json  meta/catalog.json  meta/admin.json  meta/aml.json  meta/usage.json  meta/ui.json  meta/page.html
 *   meta/ping_pending  meta/todo_register  meta/todo_commit  meta/login_fail/*  audio/{id}  covers/{id}  skins/*
 *   3-6: images/{id}  lyrics/{id}  site/banner  site/profile  gb/meta.json  gb/{년월}.json
 *
 * 3-7 (catalog 1.2): 곡 언어 tracks[].langs (db 곡 langs), SNS site.socials (db site.socials = [{key,url}], catalog에는 키만)
 *   목록 원본: public/_app/song-langs.json · public/_app/socials.json (src/lists.js 가 묶어 들인다)
 * 3-8 (catalog 1.3): 확장 항목 tracks[].ext · site.ext (db 곡·사이트 ext, 모르는 key도 보관), 사이트 자체 칸 local(catalog로 안 보냄)
 *   항목 목록은 우리사이트 fields.json (src/fields.js — cron 하루 1번, 사이트마다 다른 분) · 새 버전 안내 versions.json
 */
import { uiFetch } from './ui.js';
import {
  KEY, ALLOWED_ORIGINS, ApiError, fail, json, errorResponse, nowIso, charLen, sha256Hex,
  readJson, apiBase, IMAGE_RULES, readWebp,
} from './common.js';
import { authFetch, requireAdmin, loadAdmin, accountInfo } from './auth.js';
import {
  loadAml, ensureAml, effective, statusOf, serveVerify, register, needsRegister, registerDue,
  schedulePing, retryPendingPing, originOf, updateAml, domainOf,
} from './aml.js';
import { listPosts, addPost, deletePost } from './guestbook.js';
import { normalizeDomain, reachCheck, requestUrlChange, visitorRedirect } from './domain.js';
import { getUsage } from './usage.js';
import { loadDb, saveDb, artistOf, pubCount, pubShort, checkMinPublic } from './db.js';
import { vLangs, langsForCatalog, vSocials, cleanSocials, defaultSongLang } from './lists.js';
import { vAiTool, aiToolForCatalog } from './aitools.js';
import { loadFields, mergeExt, extForCatalog, fieldOf, vLocal, refreshFields, cronFields, fieldsState } from './fields.js';
import { statsPlay, statsGuestbook, cronStats, adminStats, adminStatsRefresh, adminPlays, likePost } from './stats.js';
import { cronFeed, adminInsights, feedState } from './insights.js';

// ===== 1. 설정값 (연동규약 3장·5장) =====================================
const LIMITS = {
  audioMaxBytes: 15 * 1024 * 1024,
  lyricsMaxBytes: 100 * 1024, // 3-6 가사 .srt
  footerMax: 200,             // 3-6 하단 문구
  durationMin: 30, durationMax: 900,
  albumMin: 10, albumMax: 30,
  maxPublicTracks: 1000, maxPublicAlbums: 100,
  catalogMaxBytes: 512 * 1024,
  jsonBodyMaxBytes: 64 * 1024,
  maxArtists: 20,          // 가상 아티스트
  uploadBatch: 20,         // 한 번에 올리는 곡 수 (화면에서 지킨다)
};
const AUDIO_TYPES = {
  'audio/mpeg': 'audio/mpeg', 'audio/mp3': 'audio/mpeg',
  'audio/mp4': 'audio/mp4', 'audio/x-m4a': 'audio/mp4', 'audio/m4a': 'audio/mp4',
};
const AML_CACHE_MS = 30 * 1000;           // CORS 판단용 aimusiclist 공개 목록 메모리 보관
const ID_RE = /^[a-z0-9_-]{1,64}$/;
const GENRE_RE = /^[a-z0-9_-]{1,32}$/;
const LANG_RE = /^[a-z]{2}(-[A-Za-z]{2,4})?$/;
const DEFAULT_IMAGE_FALLBACK = 9963;  // default-images.json 을 못 읽으면 이 개수 안에서 고른다
const ADS_CLIENT_RE = /^ca-pub-\d{16}$/;   // 애드센스 게시자 ID
const ADS_SLOT_RE = /^\d{6,20}$/;          // 광고 단위 ID (data-ad-slot)

// ===== 2. 진입점 =========================================================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const isApi = path.startsWith('/api/');
    try {
      if (isApi) {
        const a = await authFetch(request, env, ctx, url, { afterSetup });
        if (a) return a;
      }
      // 3-6: 내 도메인을 연결했으면 workers.dev 의 방문자 화면(/)만 새 주소로 301
      if (path === '/' && (request.method === 'GET' || request.method === 'HEAD')) {
        const r = await visitorRedirect(env, url); if (r) return r;
      }
      const ui = await uiFetch(request, env, ctx); if (ui) return ui; // 방문자 페이지·스킨·메뉴
      if (path.startsWith('/api/admin/')) return await handleAdmin(request, env, ctx, url);
      if (path === '/api/gb') return await guestbookPublic(request, env, url, ctx);
      if (path === '/api/like') return await likePost(request, env, ctx, url);   // 3-18 좋아요 ♥ (AE 1줄, 204)
      if (isApi) fail(404, 'err.not_found');

      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: await corsFor(request, env, path) });
      if (request.method !== 'GET' && request.method !== 'HEAD') fail(405, 'err.method_not_allowed');

      if (path === '/.well-known/aimusiclist/catalog.json') return await serveCatalog(request, env, url);
      if (path === '/.well-known/aimusiclist/verify') return await serveVerify(env, url);
      let m;
      if ((m = path.match(/^\/a\/([a-z0-9_-]{1,64})$/))) return await serveFile(request, env, 'track', m[1], url, ctx);
      if ((m = path.match(/^\/c\/([a-z0-9_-]{1,64})$/))) return await serveFile(request, env, 'album', m[1], url);
      if ((m = path.match(/^\/i\/([a-z0-9_-]{1,64})$/))) return await serveSmall(request, env, url, (url.searchParams.get('s') === 'l' ? KEY.trackImgL : KEY.trackImg)(m[1]), 'image');   // 3-16 ?s=l = 큰 그림 (없으면 404)
      if ((m = path.match(/^\/l\/([a-z0-9_-]{1,64})$/))) return await serveSmall(request, env, url, KEY.lyrics(m[1]), 'lyrics');
      if (path === '/p') return await serveSmall(request, env, url, KEY.profile, 'image');
      if (path === '/b') return await serveSmall(request, env, url, KEY.banner, 'image');
      if (path === '/ads.txt') return await serveAdsTxt(env);
      fail(404, 'err.not_found');
    } catch (e) {
      const headers = isApi ? {} : await corsFor(request, env, path).catch(() => ({}));
      if (e instanceof ApiError) return errorResponse(e, headers);
      console.error(e);
      return errorResponse(new ApiError(500, 'err.server'), headers);
    }
  },

  // cron(1분마다): ping 재시도 · 자동 등록 재시도 · 업로드 뒤 빠진 반영
  async scheduled(event, env, ctx) {
    ctx.waitUntil(Promise.all([
      retryPendingPing(env).catch((e) => console.error(e)),
      cronRegister(env, ctx).catch((e) => console.error(e)),
      cronCommit(env, ctx).catch((e) => console.error(e)),
      cronFields(env, event.scheduledTime).catch((e) => console.error(e)),   // 3-8 fields.json·versions.json (하루 1번, 내 분)
      cronStats(env, ctx, event.scheduledTime).catch((e) => console.error(e)),   // 3-12 통계·인기 순위 (하루 1번, UTC 00:05~00:59 내 분)
      cronFeed(env, event.scheduledTime).catch((e) => console.error(e)),   // 3-15 aimusiclist 분석 자료·소식 (하루 1번, 내 분 — 관리 화면은 저장본만)
    ]));
  },
};

// ===== 3. CORS (연동규약 5장) =============================================
// aimusiclist 공개(aml)인 곡·앨범에만 aimusiclist.com CORS 헤더를 붙인다.
function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers': 'Range, If-None-Match',
    'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges, ETag',
    'Vary': 'Origin',
  };
}
async function corsFor(request, env, path) {
  const origin = request.headers.get('Origin');
  if (!ALLOWED_ORIGINS.includes(origin)) return {};
  let m;
  if ((m = path.match(/^\/[ail]\/([a-z0-9_-]{1,64})$/))) {      // 곡 음원·이미지·가사
    return (await amlSets(env)).tracks.has(m[1]) ? corsHeaders(origin) : { Vary: 'Origin' };
  }
  if ((m = path.match(/^\/c\/([a-z0-9_-]{1,64})$/))) {          // 앨범 커버
    return (await amlSets(env)).albums.has(m[1]) ? corsHeaders(origin) : { Vary: 'Origin' };
  }
  return corsHeaders(origin);                                     // catalog·verify·/p
}

// catalog.json의 aml 곡·앨범 ID를 Worker 메모리에 30초 보관 → aml을 끄면 최대 30초 안에 CORS가 빠진다
let mem = { at: 0, tracks: new Set(), albums: new Set() };
async function amlSets(env) {
  if (Date.now() - mem.at < AML_CACHE_MS) return mem;
  const obj = await env.BUCKET.get(KEY.catalog);
  let cat = { tracks: [], albums: [] };
  if (obj) { try { cat = await obj.json(); } catch {} }
  mem = { at: Date.now(), tracks: new Set((cat.tracks || []).map((t) => t.id)), albums: new Set((cat.albums || []).map((a) => a.id)) };
  return mem;
}

// ===== 4. 공개 주소 ======================================================
async function serveCatalog(request, env, url) {
  const cors = await corsFor(request, env, url.pathname);
  const obj = await env.BUCKET.get(KEY.catalog, { onlyIf: request.headers });
  if (!obj) {
    // 아직 한 번도 반영하지 않음 → 즉석에서 만든다 (저장 안 함)
    const { db } = await loadDb(env);
    const eff = effective(env, (await loadAml(env)).data);
    return json(buildCatalog(db, env, eff, await originOf(env, url), nowIso(), await loadFields(env)), 200, { 'cache-control': 'no-cache', ...cors });
  }
  const headers = { 'content-type': 'application/json; charset=utf-8', etag: obj.httpEtag, 'cache-control': 'no-cache', ...cors };
  if (!('body' in obj)) return new Response(null, { status: 304, headers });
  return new Response(request.method === 'HEAD' ? null : obj.body, { headers });
}

// GET /a/{track_id}, /c/{album_id} — 내 사이트에 있는 것은 모두 재생(Range). CORS는 aml인 것만.
async function serveFile(request, env, kind, id, url, ctx) {
  const isTrack = kind === 'track';
  const key = isTrack ? KEY.audio(id) : KEY.cover(id);
  const notFound = isTrack ? 'err.track.unavailable' : 'err.not_found';
  const headers = new Headers(await corsFor(request, env, (isTrack ? '/a/' : '/c/') + id));
  headers.set('accept-ranges', 'bytes');
  // 커버: 내 사이트 화면은 /c/{id}?v=해시 로 부르므로 오래 보관해도 바꾸면 새 주소가 된다
  headers.set('cache-control', isTrack ? 'no-cache' : (url && url.searchParams.has('v') ? 'public, max-age=31536000, immutable' : 'public, max-age=86400'));

  if (request.method === 'HEAD') {
    const head = await env.BUCKET.head(key);
    if (!head) fail(404, notFound);
    head.writeHttpMetadata(headers);
    headers.set('etag', head.httpEtag);
    headers.set('content-length', String(head.size));
    return new Response(null, { headers });
  }
  const hasRange = request.headers.has('range');
  let obj;
  try { obj = await env.BUCKET.get(key, hasRange ? { range: request.headers } : {}); } catch { fail(416, 'err.range_invalid'); }
  if (!obj) fail(404, notFound);
  if (isTrack) statsPlay(request, env, ctx, id);   // 3-12: 처음부터 받는 재생만 AE 에 1줄 (기다리지 않음, 요청·R2 쓰기 +0)
  obj.writeHttpMetadata(headers);
  headers.set('etag', obj.httpEtag);
  if (hasRange && obj.range) {
    const r = obj.range;
    const length = r.suffix != null ? Math.min(r.suffix, obj.size) : (r.length ?? obj.size - (r.offset || 0));
    const offset = r.suffix != null ? obj.size - length : (r.offset || 0);
    headers.set('content-range', `bytes ${offset}-${offset + length - 1}/${obj.size}`);
    return new Response(obj.body, { status: 206, headers });
  }
  return new Response(obj.body, { headers });
}

// 3-6: 곡 이미지 /i/{id} · 가사 /l/{id} · 프로필 /p · 배너 /b — 작은 파일. ETag(304) 지원.
// ?v=해시 가 붙은 주소(내 사이트 화면·catalog 프로필)는 1년 보관, 없으면 이미지 하루·가사 매번 확인.
// CORS: /i/·/l/ 은 aimusiclist 공개 곡만, /p 는 항상 (corsFor)
async function serveSmall(request, env, url, key, kind) {
  const headers = new Headers(await corsFor(request, env, url.pathname));
  const obj = await env.BUCKET.get(key, { onlyIf: request.headers });
  if (!obj) fail(404, kind === 'lyrics' ? 'err.lyrics.none' : 'err.not_found');
  obj.writeHttpMetadata(headers);
  headers.set('content-type', kind === 'lyrics' ? 'text/plain; charset=utf-8' : 'image/webp');
  headers.set('cache-control', url.searchParams.has('v') ? 'public, max-age=31536000, immutable'
    : (kind === 'lyrics' ? 'no-cache' : 'public, max-age=86400'));
  headers.set('etag', obj.httpEtag);
  headers.set('x-content-type-options', 'nosniff');
  if (!('body' in obj)) return new Response(null, { status: 304, headers });
  headers.set('content-length', String(obj.size));
  return new Response(request.method === 'HEAD' ? null : obj.body, { headers });
}

// 3-6: /ads.txt — 애드센스 게시자 ID를 넣으면 자동으로 생긴다 (구글이 확인하는 파일)
async function serveAdsTxt(env) {
  const { db } = await loadDb(env);
  const ads = db.site.ads || {};
  if (!ADS_CLIENT_RE.test(ads.client || '')) return new Response('', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  const pub = ads.client.replace(/^ca-/, '');
  return new Response(`google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}

// 3-6: 방명록 (방문자). 꺼져 있으면 404.
let gbFlag = { at: 0, on: true };
async function guestbookOn(env) {
  if (Date.now() - gbFlag.at > 30 * 1000) {
    const { db } = await loadDb(env);
    gbFlag = { at: Date.now(), on: db.site.guestbook !== false };
  }
  return gbFlag.on;
}
async function guestbookPublic(request, env, url, ctx) {
  if (!(await guestbookOn(env))) fail(404, 'err.gb.off');
  if (request.method === 'GET') return json(await listPosts(env, Number(url.searchParams.get('page') || 1)));
  if (request.method === 'POST') {
    const r = await addPost(request, env, url);
    if (r.status === 201) statsGuestbook(request, env, ctx);   // 3-12: 방명록 글 수 (AE 1줄)
    return r;
  }
  fail(405, 'err.method_not_allowed');
}

// ===== 5. 데이터(db.json): src/db.js =====================================

// ===== 6. catalog 1.3 만들기 (3-7: 1.1 + tracks[].langs + site.socials / 3-8: + tracks[].ext · site.ext) =====
function amlAlbumsOf(db) { return Object.values(db.albums).filter((a) => a.aml); }
// catalog에 들어갈 곡 = (aml 켜짐 + 음원 있음) + aml 앨범의 곡 (연동규약 0-4)
function liveTrackIds(db) {
  const ids = new Set();
  for (const t of Object.values(db.tracks)) if (t.aml && t.has_audio) ids.add(t.id);
  for (const a of amlAlbumsOf(db)) a.track_ids.forEach((id) => ids.add(id));
  return ids;
}
function checkAlbumReady(db, a) {
  const n = a.track_ids.length;
  if (n < LIMITS.albumMin || n > LIMITS.albumMax) fail(422, 'err.album.track_count', { album_id: a.id, count: n, min: LIMITS.albumMin, max: LIMITS.albumMax });
  for (const id of a.track_ids) if (!db.tracks[id] || !db.tracks[id].has_audio) fail(422, 'err.track.no_audio', { track_id: id });
}
const pad5 = (n) => String(n).padStart(5, '0');
const imgOrigin = (env) => { try { return new URL(apiBase(env)).origin; } catch { return 'https://aimusiclist.com'; } };

// fdoc: 확장 항목 정상본(meta/fields.json, 없으면 null) — ext 는 이 목록에 있는 맞는 값만 보낸다
function buildCatalog(db, env, eff, origin, now, fdoc) {
  const albums = amlAlbumsOf(db);
  for (const a of albums) checkAlbumReady(db, a);
  const ids = liveTrackIds(db);
  if (ids.size > LIMITS.maxPublicTracks) fail(413, 'err.catalog.too_large', { max_tracks: LIMITS.maxPublicTracks });
  if (albums.length > LIMITS.maxPublicAlbums) fail(413, 'err.catalog.too_large', { max_albums: LIMITS.maxPublicAlbums });

  // aimusiclist 공개 시각: 새로 들어가면 지금, 빠지면 지움
  for (const t of Object.values(db.tracks)) { if (ids.has(t.id)) t.published_at ||= now; else delete t.published_at; }
  for (const a of Object.values(db.albums)) { if (a.aml) a.published_at ||= now; else delete a.published_at; }

  const s = db.site;
  const site = { site_id: eff.site_id || '', url: origin, name: s.name, artist_name: s.artist_name || s.name, default_lang: s.default_lang || 'en' };
  if (s.description) site.description = s.description;
  if (s.profile_v) site.profile_url = `${origin}/p?v=${s.profile_v}`;   // 3-6 (catalog 1.1)
  site.socials = cleanSocials(s.socials).map((x) => x.key);              // 3-7 (catalog 1.2): 키만. 주소는 넣지 않는다. 없으면 []
  const sext = extForCatalog(s.ext, fdoc, 'site');                       // 3-8 (catalog 1.3): 값 있는 것만, 2KB. local 은 보내지 않는다
  if (sext) site.ext = sext;
  const img = imgOrigin(env) + '/img/default/';

  const catalog = {
    schema: '1.3',
    generated_at: now,
    site,
    albums: albums.map((a) => ({
      id: a.id, title: a.title, artist: artistOf(a, s),
      cover_url: a.has_cover ? `${origin}/c/${a.id}` : null,
      track_ids: a.track_ids, published_at: a.published_at,
    })),
    tracks: [...ids].map((id) => db.tracks[id])
      .sort((x, y) => (y.published_at.localeCompare(x.published_at)) || x.id.localeCompare(y.id))
      .map((t) => {
        const o = {
          id: t.id, title: t.title, artist: artistOf(t, s), genres: t.genres, duration: t.duration,
          audio_url: `${origin}/a/${t.id}`, published_at: t.published_at,
        };
        if (t.img_v) o.thumb_url = `${origin}/i/${t.id}`;                          // 3-6: 직접 올린 곡 이미지
        else if (Number.isInteger(t.img) && t.img > 0) o.thumb_url = img + pad5(t.img) + '.webp';
        if (t.img_v && t.img_lg_v) o.thumb_lg_url = `${origin}/i/${t.id}?s=l`;      // 3-16: 큰 그림(200~400px, 선택 필드 — 모르는 곳은 무시)
        if (t.lyrics_v) o.lyrics_url = `${origin}/l/${t.id}`;                        // 3-6: 가사
        const langs = langsForCatalog(t.langs);                                       // 3-7: 곡 언어 (없으면 넣지 않음 → 우리사이트가 사이트 기본 언어로 봄)
        if (langs) o.langs = langs;
        const ext = extForCatalog(t.ext, fdoc, 'track');                              // 3-8: 확장 항목 (값 있는 것만, 1KB)
        if (ext) o.ext = ext;
        const ai = aiToolForCatalog(t.ai_tool);                                       // 3-20: 만든 AI 툴 (값 있을 때만, 선택 필드)
        if (ai) o.ai_tool = ai;
        return o;
      }),
  };
  if (new TextEncoder().encode(JSON.stringify(catalog)).length > LIMITS.catalogMaxBytes) fail(413, 'err.catalog.too_large', { max_bytes: LIMITS.catalogMaxBytes });
  return catalog;
}

// 변경 마무리: db 저장 + catalog 갱신 + ping (즉시 반영). defer면 db만 저장하고 나중에 commit 1번.
// 규칙 위반이면 아무것도 저장하지 않고 오류.
// 3-21: 공개 곡이 10곡(곡이 그보다 적으면 전부)보다 적어지는 변경은 거부. 곡 지우기만 예외(allowFewer).
async function finish(env, ctx, db, etag, origin, defer, allowFewer) {
  if (!allowFewer) checkMinPublic(db);
  if (defer) {
    await saveDb(env, db, etag);
    await env.BUCKET.put(KEY.todoCommit, nowIso()); // 화면이 commit을 못 보내고 닫혀도 cron이 2분 뒤 반영
    return { deferred: true };
  }
  let aml = (await loadAml(env)).data;
  if (!aml || !aml.origin) aml = await ensureAml(env, origin); // cron이 쓸 주소를 기억 (site_secret도 이때 생김)
  const eff = effective(env, aml);
  const catalog = buildCatalog(db, env, eff, origin, nowIso(), await loadFields(env));
  await saveDb(env, db, etag);
  const result = await writeCatalog(env, ctx, catalog);
  // 첫 aimusiclist 공개곡이 생기면 자동 등록 (연동규약 2-1)
  if (catalog.tracks.length && needsRegister(env, aml)) ctx.waitUntil(registerAndCommit(env, ctx, origin).catch((e) => console.error(e)));
  return result;
}

// 내용(생성 시각 제외)이 같으면 쓰기·ping 생략
async function writeCatalog(env, ctx, catalog) {
  const { generated_at, ...content } = catalog;
  const hash = await sha256Hex(JSON.stringify(content));
  const head = await env.BUCKET.head(KEY.catalog);
  let changed = false, ping = 'unchanged';
  if (head?.customMetadata?.hash !== hash) {
    await env.BUCKET.put(KEY.catalog, JSON.stringify(catalog), {
      httpMetadata: { contentType: 'application/json; charset=utf-8' },
      customMetadata: { hash },
    });
    mem.at = 0;
    changed = true;
    ping = await schedulePing(env, ctx);
  }
  return { changed, ping, public_tracks: catalog.tracks.length, public_albums: catalog.albums.length };
}

// 지금 db로 다시 반영 (POST /api/admin/commit, cron, 등록 직후)
async function commitNow(env, ctx, origin) {
  await env.BUCKET.delete(KEY.todoCommit);
  const { db, etag } = await loadDb(env);
  return finish(env, ctx, db, etag, origin || await storedOrigin(env), false);
}
async function storedOrigin(env) {
  const { data } = await loadAml(env);
  return String(env.SITE_URL || (data && data.origin) || '').replace(/\/+$/, '');
}

// ===== 7. 자동 등록 연결 ===================================================
async function registerInfo(env, origin) {
  const { db } = await loadDb(env);
  const { data: admin } = await loadAdmin(env);
  return {
    origin, name: db.site.name, artist_name: db.site.artist_name || db.site.name,
    contact_email: admin ? admin.email : '', default_lang: db.site.default_lang || 'en',
  };
}
// 등록 → 성공하면 site_id를 넣어 catalog 다시 만들기 + ping
async function registerAndCommit(env, ctx, origin, force) {
  origin = origin || await storedOrigin(env);
  if (!origin) return { ok: false, error: { code: 'err.aml.no_origin' } };
  const r = await register(env, await registerInfo(env, origin), force);
  if (r.ok && !r.skipped) await commitNow(env, ctx, origin);
  return r;
}
// 관리자 만들기 직후 (auth.js가 부른다)
async function afterSetup(env, ctx, url) {
  const origin = await originOf(env, url);
  ctx.waitUntil(refreshFields(env, {}).catch((e) => console.error(e)));   // 3-8: 처음 설치 때 확장 항목 바로 받기 (실패해도 기본 업로드는 그대로)
  await ensureAml(env, origin);
  if (effective(env, (await loadAml(env, true)).data).source === 'env') return commitNow(env, ctx, origin); // 1단계 설치 사이트
  return registerAndCommit(env, ctx, origin);
}
async function cronRegister(env, ctx) {
  if (!(await registerDue(env))) return;
  const { data } = await loadAml(env, true);
  if (!needsRegister(env, data)) { if (!data || data.status === 'ok' || data.status === 'stopped') await env.BUCKET.delete(KEY.todoRegister); return; }
  await registerAndCommit(env, ctx, null);
}
async function cronCommit(env, ctx) {
  const h = await env.BUCKET.head(KEY.todoCommit);
  if (!h || Date.now() - h.uploaded.getTime() < 2 * 60 * 1000) return;
  const origin = await storedOrigin(env);
  if (!origin) { await env.BUCKET.delete(KEY.todoCommit); return; }
  await commitNow(env, ctx, origin);
}

// ===== 8. 기본 곡 이미지 번호 (우리사이트 default-images.json) ================
let imgMemo = { at: 0, count: 0 };
async function defaultImageCount(env) {
  if (imgMemo.count && Date.now() - imgMemo.at < (imgMemo.ok ? 3600e3 : 600e3)) return imgMemo.count;
  let count = 0;
  try {
    const r = await fetch(apiBase(env) + '/default-images.json', { signal: AbortSignal.timeout(3000) });
    if (r.ok) { const d = await r.json(); if (Number.isInteger(d.count) && d.count > 0 && d.count < 100000) count = d.count; }
  } catch {}
  imgMemo = { at: Date.now(), count: count || DEFAULT_IMAGE_FALLBACK, ok: !!count };
  return imgMemo.count;
}
async function randomImage(env) {
  const n = await defaultImageCount(env);
  return 1 + (crypto.getRandomValues(new Uint32Array(1))[0] % n);
}

// ===== 9. 관리 API ========================================================
function vStr(v, field, min, max) {
  if (typeof v !== 'string') fail(400, 'err.request.invalid', { field });
  v = v.trim();
  if (charLen(v) < min || charLen(v) > max) fail(400, 'err.request.invalid', { field, min, max });
  return v;
}
function vGenres(v) {
  if (!Array.isArray(v) || v.length < 1 || v.length > 3 || new Set(v).size !== v.length ||
      !v.every((g) => typeof g === 'string' && GENRE_RE.test(g))) fail(422, 'err.track.genre_invalid', { min: 1, max: 3 });
  return v;
}
function vDuration(v) {
  if (!Number.isInteger(v) || v < LIMITS.durationMin || v > LIMITS.durationMax) fail(422, 'err.track.duration_invalid', { min: LIMITS.durationMin, max: LIMITS.durationMax });
  return v;
}
// 아티스트: null/'' = 사이트 이름 사용, 문자열 = 그 이름 (가상 아티스트)
function vArtist(v, site) {
  if (v == null || v === '') return null;
  const s = vStr(v, 'artist', 1, 60);
  return s === site.name ? null : s;
}
// 3-9 색: "#rrggbb" (소문자로 저장). null·"" 은 지우기. lenient=true 면 틀린 값은 오류 대신 무시(null).
function vColor(v, lenient) {
  if (v == null || v === '') return null;
  const c = String(v).trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(c)) return c;
  if (lenient) return null;
  fail(400, 'err.request.invalid', { field: 'profile_color' });
}
function vBool(v, field) { if (typeof v !== 'boolean') fail(400, 'err.request.invalid', { field }); return v; }
// 3-6 애드센스: 코드 붙여넣기는 받지 않고 ID만 받는다. 켜려면 게시자 ID 필수.
function vAds(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) fail(400, 'err.request.invalid', { field: 'ads' });
  const s = (x) => (x == null ? '' : String(x).trim());
  const out = { client: s(v.client), top: s(v.top), left: s(v.left), on: v.on === true };
  if (out.client && !ADS_CLIENT_RE.test(out.client)) fail(400, 'err.ads.client', { field: 'client' });
  if (out.top && !ADS_SLOT_RE.test(out.top)) fail(400, 'err.ads.slot', { field: 'top' });
  if (out.left && !ADS_SLOT_RE.test(out.left)) fail(400, 'err.ads.slot', { field: 'left' });
  if (out.on && !out.client) fail(400, 'err.ads.client', { field: 'client' });
  return out;
}
function vTrackIds(v, db) {
  if (!Array.isArray(v) || new Set(v).size !== v.length) fail(400, 'err.request.invalid', { field: 'track_ids' });
  if (v.length > LIMITS.albumMax) fail(422, 'err.album.track_count', { count: v.length, min: LIMITS.albumMin, max: LIMITS.albumMax });
  for (const id of v) if (!db.tracks[id]) fail(404, 'err.not_found', { track_id: id });
  return v;
}
function vArtists(v, site) {
  if (!Array.isArray(v) || v.length > LIMITS.maxArtists) fail(422, 'err.artist.too_many', { max: LIMITS.maxArtists });
  const out = [];
  for (const x of v) {
    const s = vStr(x, 'artists', 1, 60);
    if (s !== site.name && !out.includes(s)) out.push(s);
  }
  return out;
}
const getTrack = (db, id) => db.tracks[id] || fail(404, 'err.not_found', { track_id: id });
const getAlbum = (db, id) => db.albums[id] || fail(404, 'err.not_found', { album_id: id });
const amlAlbumWith = (db, trackId) => amlAlbumsOf(db).find((a) => a.track_ids.includes(trackId));

async function handleAdmin(request, env, ctx, url) {
  const admin = await requireAdmin(request, env);
  const [res, id, sub, extra] = url.pathname.slice('/api/admin/'.length).split('/');
  const M = request.method;
  const origin = await originOf(env, url);
  const defer = url.searchParams.get('defer') === '1';
  if (extra !== undefined || (id !== undefined && !ID_RE.test(id))) fail(404, 'err.not_found');

  if (res === 'state' && !id && M === 'GET') return adminState(env, ctx, origin, admin, url.origin);
  if (res === 'usage' && !id && M === 'GET') return json(await getUsage(env, admin, url.searchParams.get('refresh') === '1'));
  if (res === 'site' && !id && M === 'PUT') return adminSite(request, env, ctx, origin);
  if (res === 'commit' && !id && M === 'POST') return json({ ok: true, ...(await commitNow(env, ctx, origin)) });
  if (res === 'register' && !id && M === 'POST') {
    await ensureAml(env, origin);
    const r = await registerAndCommit(env, ctx, origin, true);
    return json({ ok: true, result: r, aml: statusOf(env, (await loadAml(env, true)).data) });
  }
  if (res === 'publish' && !id && M === 'POST') return adminPublishCompat(request, env, ctx, origin);
  // 3-6: 배너·프로필 이미지 (PUT 본문 = WebP, DELETE = 지우기)
  if (res === 'site' && (id === 'banner' || id === 'profile') && !sub && (M === 'PUT' || M === 'DELETE')) return siteImage(request, env, ctx, id, origin);
  // 3-6: 방명록 (관리자: 꺼져 있어도 보기, 글 지우기)
  if (res === 'gb' && !id && M === 'GET') return json(await listPosts(env, Number(url.searchParams.get('page') || 1)));
  if (res === 'gb' && id && !sub && M === 'DELETE') return deletePost(env, id);
  // 3-6: 내 도메인
  if (res === 'domain' && !id && M === 'POST') return adminDomain(request, env, ctx, url, origin);
  // 3-7: 여러 곡 곡 언어 한꺼번에 바꾸기
  if (res === 'langs' && !id && M === 'POST') return bulkLangs(request, env, ctx, origin);
  // 3-8: [Update fields] 바로 받기 (1분에 1번) · 여러 곡 확장 항목(select·multiselect) 한꺼번에
  if (res === 'fields' && !id && M === 'POST') return adminFieldsUpdate(env);
  if (res === 'ext' && !id && M === 'POST') return bulkExt(request, env, ctx, origin);
  if (res === 'aitool' && !id && M === 'POST') return bulkAiTool(request, env, ctx, origin);   // 3-20
  // 3-12: 통계 탭 (저장본 + 오늘)
  if (res === 'stats' && !id && M === 'GET') return adminStats(env);
  // 3-14: [지금 새로 고침] (1분에 1번) · 곡별 내 사이트 재생 횟수 · 여러 곡 "방문자에게 보이기" 한꺼번에
  if (res === 'stats' && id === 'refresh' && !sub && M === 'POST') return adminStatsRefresh(env, ctx);
  if (res === 'plays' && !id && M === 'GET') return adminPlays(env);
  if (res === 'insights' && !id && M === 'GET') return adminInsights(env, url);   // 3-15 분석 탭 (저장본만 — 우리사이트 요청 0)
  if (res === 'plays' && !id && M === 'POST') return bulkPlays(request, env, ctx, origin);

  if (res === 'tracks') {
    if (!id && M === 'POST') return trackCreate(request, env, ctx, origin, defer);
    if (id && !sub && M === 'PATCH') return trackUpdate(request, env, ctx, id, origin);
    if (id && !sub && M === 'DELETE') return trackDelete(env, ctx, id, origin);
    if (id && sub === 'audio' && M === 'PUT') return trackAudio(request, env, ctx, id, origin, defer);
    if (id && sub === 'image' && (M === 'PUT' || M === 'DELETE')) return trackImage(request, env, ctx, id, origin, url);   // 3-6 (3-16 ?s=l 큰 그림)
    if (id && sub === 'lyrics' && (M === 'PUT' || M === 'DELETE')) return trackLyrics(request, env, ctx, id, origin); // 3-6
  }
  if (res === 'albums') {
    if (!id && M === 'POST') return albumCreate(request, env, ctx, origin);
    if (id && !sub && M === 'PATCH') return albumUpdate(request, env, ctx, id, origin);
    if (id && !sub && M === 'DELETE') return albumDelete(env, ctx, id, origin);
    if (id && sub === 'cover' && (M === 'PUT' || M === 'DELETE')) return albumCover(request, env, ctx, id, origin);
  }
  fail(404, 'err.not_found');
}

// GET /api/admin/state
async function adminState(env, ctx, origin, admin, requestOrigin) {
  const { db } = await loadDb(env);
  const aml = (await loadAml(env)).data;
  const [fs, fst] = await Promise.all([fieldsState(env), feedState(env)]);   // 3-8 확장 항목 정상본 + 받은 기록 + 새 버전 안내 · 3-15 소식 받은 기록(작은 파일)
  // 한 번도 받아 본 적이 없으면(3-7에서 업데이트한 직후 등) 뒤에서 바로 받는다 → 다음 화면부터 "추가 정보"
  if (!fs.fields.checked) ctx.waitUntil(refreshFields(env, {}).catch((e) => console.error(e)));
  return json({
    ok: true,
    site: db.site,
    tracks: Object.values(db.tracks).sort((a, b) => b.created_at.localeCompare(a.created_at)),
    albums: Object.values(db.albums).sort((a, b) => b.created_at.localeCompare(a.created_at)),
    live_track_ids: [...liveTrackIds(db)],
    config: {
      site_url: origin, api_base: apiBase(env), img_base: imgOrigin(env) + '/img/default/',
      upload_batch: LIMITS.uploadBatch, max_artists: LIMITS.maxArtists,
      default_song_lang: defaultSongLang(db.site.default_lang),   // 3-7 업로드 때 곡 언어 기본값
      uploaded_bytes: Object.values(db.tracks).reduce((s, t) => s + (t.has_audio ? t.size || 0 : 0), 0),
    },
    aml: statusOf(env, aml),
    domain: domainOf(env, aml, requestOrigin),   // 3-6 내 도메인
    account: accountInfo(admin),
    fields: fs.fields,   // 3-8: { doc, version, ok_at, tried_at, error }
    app: fs.app,         // 3-8: { version, latest, url, newer }
    news_last: fst && fst.news && fst.news.last || null,   // 3-15 가장 새 소식 {id, date} — 분석 탭 점
  });
}

// PUT /api/admin/site
async function adminSite(request, env, ctx, origin) {
  const body = await readJson(request);
  const { db, etag } = await loadDb(env);
  const s = db.site;
  const oldName = s.name;
  if (body.name !== undefined) s.name = vStr(body.name, 'name', 1, 40);
  if (body.artist_name !== undefined) s.artist_name = vStr(body.artist_name, 'artist_name', 1, 40);
  if (body.default_lang !== undefined) {
    if (typeof body.default_lang !== 'string' || !LANG_RE.test(body.default_lang)) fail(400, 'err.request.invalid', { field: 'default_lang' });
    s.default_lang = body.default_lang;
  }
  if (body.description !== undefined) s.description = vStr(body.description, 'description', 0, 200);
  if (body.artists !== undefined) s.artists = vArtists(body.artists, s);
  // 3-6: 하단 문구(글자만, 한 줄), 방명록 켜기/끄기, 애드센스
  if (body.footer !== undefined) s.footer = vStr(String(body.footer ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' '), 'footer', 0, LIMITS.footerMax);
  if (body.guestbook !== undefined) { s.guestbook = vBool(body.guestbook, 'guestbook'); gbFlag.at = 0; }
  if (body.ads !== undefined) s.ads = vAds(body.ads);
  if (body.socials !== undefined) s.socials = vSocials(body.socials);   // 3-7 SNS (빈 칸은 버림, 큰 5개 → 다른 SNS 순서)
  if (body.ext !== undefined) setOrDelete(s, 'ext', mergeExt(s.ext, body.ext, await loadFields(env), 'site'));   // 3-8 사이트 확장 항목
  if (body.local !== undefined) setOrDelete(s, 'local', vLocal(body.local));                                    // 3-8 사이트 자체 칸 (catalog 제외)
  if (body.profile_color !== undefined) setOrDelete(s, 'profile_color', vColor(body.profile_color) || undefined);            // 3-9 프로필 평균 색 (방문자 머리 영역 바탕, catalog 제외)
  if (body.plays_pub !== undefined) setOrDelete(s, 'plays_pub', vBool(body.plays_pub, 'plays_pub') || undefined);         // 3-14 방문자에게 재생 횟수 보여 주기 (기본 끔, catalog 제외)
  if (body.likes !== undefined) setOrDelete(s, 'likes_off', vBool(body.likes, 'likes') ? undefined : true);                // 3-18 좋아요 버튼 보이기 (기본 켬 — 끌 때만 likes_off, catalog 제외)
  // 사이트 이름을 바꿨는데 기본 아티스트 이름이 옛 사이트 이름 그대로면 함께 바꾼다
  if (s.name !== oldName && body.artist_name === undefined && s.artist_name === oldName) s.artist_name = s.name;
  const result = await finish(env, ctx, db, etag, origin, false);
  return json({ ok: true, site: s, ...result });
}

// (호환) POST /api/admin/publish {"tracks":{"t_x":true},"albums":{"a_y":false}} → aml 값으로 반영
async function adminPublishCompat(request, env, ctx, origin) {
  const body = await readJson(request, LIMITS.jsonBodyMaxBytes, true);
  const { db, etag } = await loadDb(env);
  for (const [id, v] of Object.entries(body.albums || {})) getAlbum(db, id).aml = vBool(v, 'albums.' + id);
  for (const [id, v] of Object.entries(body.tracks || {})) getTrack(db, id).aml = vBool(v, 'tracks.' + id);
  for (const [id, v] of Object.entries(body.tracks || {})) {
    const a = v === false && amlAlbumWith(db, id);
    if (a) fail(409, 'err.track.in_public_album', { track_id: id, album_id: a.id });
  }
  return json({ ok: true, ...(await finish(env, ctx, db, etag, origin, false)) });
}

// --- 곡 ---
// POST /api/admin/tracks[?defer=1]  {"title","artist"?(null=사이트 이름),"genres":[...],"duration":초,"aml"?:true}
async function trackCreate(request, env, ctx, origin, defer) {
  const body = await readJson(request);
  const img = await randomImage(env);
  const { db, etag } = await loadDb(env);
  const t = {
    id: newId('t', db.tracks),
    title: vStr(body.title, 'title', 1, 100),
    artist: vArtist(body.artist, db.site),
    genres: vGenres(body.genres),
    duration: vDuration(body.duration),
    aml: body.aml === undefined ? true : vBool(body.aml, 'aml'),
    has_audio: false,
    img,                       // 기본 곡 이미지 번호 (aimusiclist.com/img/default/{5자리}.webp)
    created_at: nowIso(),
  };
  const langs = vLangs(body.langs);   // 3-7 곡 언어 (보내지 않으면 지정 안 함)
  if (langs) t.langs = langs;
  const aiTool = vAiTool(body.ai_tool);   // 3-20 만든 AI 툴 (업로드 화면에서 고른 것, 보내지 않으면 없음)
  if (aiTool) t.ai_tool = aiTool;
  if (body.ext !== undefined) setOrDelete(t, 'ext', mergeExt(undefined, body.ext, await loadFields(env), 'track'));   // 3-8 업로드 화면 "추가 정보"
  if (body.local !== undefined) setOrDelete(t, 'local', vLocal(body.local));
  db.tracks[t.id] = t;
  // 음원이 아직 없으므로 catalog는 바뀌지 않는다 → db만 저장
  await saveDb(env, db, etag);
  if (defer) await env.BUCKET.put(KEY.todoCommit, nowIso());
  return json({ ok: true, track: t }, 201);
}

// PATCH /api/admin/tracks/{id}  — 보낸 항목만, 바로 반영
async function trackUpdate(request, env, ctx, id, origin) {
  const body = await readJson(request);
  const { db, etag } = await loadDb(env);
  const t = getTrack(db, id);
  if (body.title !== undefined) t.title = vStr(body.title, 'title', 1, 100);
  if (body.artist !== undefined) t.artist = vArtist(body.artist, db.site);
  if (body.genres !== undefined) t.genres = vGenres(body.genres);
  if (body.duration !== undefined) t.duration = vDuration(body.duration);
  if (body.langs !== undefined) { const l = vLangs(body.langs); if (l) t.langs = l; else delete t.langs; }   // 3-7
  if (body.ai_tool !== undefined) setOrDelete(t, 'ai_tool', vAiTool(body.ai_tool) || undefined);   // 3-20 (null·'' = 선택 안 함)
  if (body.ext !== undefined) setOrDelete(t, 'ext', mergeExt(t.ext, body.ext, await loadFields(env), 'track'));   // 3-8 (보낸 key만, 모르는 key 보관)
  if (body.local !== undefined) setOrDelete(t, 'local', vLocal(body.local));
  if (body.plays_hide !== undefined) setOrDelete(t, 'plays_hide', vBool(body.plays_hide, 'plays_hide') || undefined);   // 3-14 이 곡 재생 횟수는 방문자에게 숨김 (catalog 제외)
  if (body.aml !== undefined) {
    t.aml = vBool(body.aml, 'aml');
    const a = !t.aml && amlAlbumWith(db, id);
    if (a) fail(409, 'err.track.in_public_album', { track_id: id, album_id: a.id });
  }
  const result = await finish(env, ctx, db, etag, origin, false);
  return json({ ok: true, track: t, ...result });
}

// PUT /api/admin/tracks/{id}/audio[?defer=1]  — 본문 = 음원 파일 그대로
async function trackAudio(request, env, ctx, id, origin, defer) {
  const type = AUDIO_TYPES[(request.headers.get('content-type') || '').split(';')[0].trim().toLowerCase()];
  if (!type) fail(415, 'err.upload.type_invalid', { allowed: 'mp3,m4a' });
  const size = Number(request.headers.get('content-length') || 0);
  if (!size) fail(411, 'err.upload.length_required');
  if (size > LIMITS.audioMaxBytes) fail(413, 'err.upload.too_large', { max_bytes: LIMITS.audioMaxBytes });
  { const { db } = await loadDb(env); getTrack(db, id); } // 없는 곡이면 파일을 올리기 전에 404
  await env.BUCKET.put(KEY.audio(id), request.body, { httpMetadata: { contentType: type } }); // 메모리에 올리지 않고 흘려보냄
  for (let i = 0; i < 3; i++) {   // 업로드 중 다른 변경이 있었으면 다시 읽어서 기록
    const { db, etag } = await loadDb(env);
    const t = getTrack(db, id);
    Object.assign(t, { has_audio: true, size, type, audio_updated_at: nowIso() });
    // 3-21: 새로 음원이 생긴 곡 때문에 공개 곡이 모자라게 되면 그 곡은 공개로 (곡이 10곡보다 적으면 모두 공개)
    if (!t.aml && pubShort(pubCount(db)) > pubShort(db._pub0)) t.aml = true;
    try {
      const result = await finish(env, ctx, db, etag, origin, defer);
      return json({ ok: true, track: t, ...result });
    } catch (e) { if (!(e instanceof ApiError && e.code === 'err.conflict') || i === 2) throw e; }
  }
}

// DELETE /api/admin/tracks/{id}
async function trackDelete(env, ctx, id, origin) {
  const { db, etag } = await loadDb(env);
  const t = getTrack(db, id);
  for (const a of Object.values(db.albums)) {
    if (!a.track_ids.includes(id)) continue;
    if (a.aml && a.track_ids.length - 1 < LIMITS.albumMin) fail(422, 'err.album.track_count', { album_id: a.id, count: a.track_ids.length - 1, min: LIMITS.albumMin, max: LIMITS.albumMax });
    a.track_ids = a.track_ids.filter((x) => x !== id);
  }
  delete db.tracks[t.id];
  const result = await finish(env, ctx, db, etag, origin, false, true);   // 3-21: 곡 지우기는 언제나 된다
  await env.BUCKET.delete([KEY.audio(id), KEY.trackImg(id), KEY.trackImgL(id), KEY.lyrics(id)]); // 3-6: 곡 이미지·가사도 함께 (3-16 큰 그림도)
  return json({ ok: true, deleted: id, ...result });
}

// 3-7: POST /api/admin/langs {"track_ids":[...], "langs":["ko","en"]|null} — 여러 곡의 곡 언어를 한 번에 (db 1번 저장 + catalog 1번 + ping 1번)
async function bulkLangs(request, env, ctx, origin) {
  const body = await readJson(request);
  const ids = body.track_ids;
  if (!Array.isArray(ids) || !ids.length || ids.length > 2000 || new Set(ids).size !== ids.length || !ids.every((x) => typeof x === 'string' && ID_RE.test(x))) {
    fail(400, 'err.request.invalid', { field: 'track_ids' });
  }
  const langs = vLangs(body.langs);
  const r = await mutate(env, ctx, origin, (db) => {
    for (const id of ids) getTrack(db, id);       // 없는 곡이 있으면 아무것도 바꾸지 않고 404
    for (const id of ids) { if (langs) db.tracks[id].langs = langs.slice(); else delete db.tracks[id].langs; }
    return ids.length;
  });
  return json({ ok: true, ...r.result, count: r.value, langs });
}

// 3-14: POST /api/admin/plays {"track_ids":[...], "show": true|false} — 여러 곡의 "방문자에게 재생 횟수 보이기"를 한 번에 (db 1번 저장)
async function bulkPlays(request, env, ctx, origin) {
  const body = await readJson(request);
  const ids = body.track_ids;
  if (!Array.isArray(ids) || !ids.length || ids.length > 2000 || new Set(ids).size !== ids.length || !ids.every((x) => typeof x === 'string' && ID_RE.test(x))) {
    fail(400, 'err.request.invalid', { field: 'track_ids' });
  }
  const show = vBool(body.show, 'show');
  const r = await mutate(env, ctx, origin, (db) => {
    for (const id of ids) getTrack(db, id);       // 없는 곡이 있으면 아무것도 바꾸지 않고 404
    for (const id of ids) setOrDelete(db.tracks[id], 'plays_hide', show ? undefined : true);
    return ids.length;
  });
  return json({ ok: true, ...r.result, count: r.value, show });
}

// 3-8: POST /api/admin/ext {"track_ids":[...], "key":"mood", "value":["calm"]|null}
// select·multiselect 곡 항목 하나를 여러 곡에 한 번에 (db 1번 저장 + catalog 1번 + ping 1번). 다른 key는 그대로.
async function bulkExt(request, env, ctx, origin) {
  const body = await readJson(request);
  const ids = body.track_ids;
  if (!Array.isArray(ids) || !ids.length || ids.length > 2000 || new Set(ids).size !== ids.length || !ids.every((x) => typeof x === 'string' && ID_RE.test(x))) {
    fail(400, 'err.request.invalid', { field: 'track_ids' });
  }
  const doc = await loadFields(env);
  if (!doc) fail(409, 'err.fields.none');
  const f = typeof body.key === 'string' ? fieldOf(doc, body.key) : null;
  if (!f || f.scope !== 'track' || !f.known || f.status !== 'active' || (f.type !== 'select' && f.type !== 'multiselect')) {
    fail(422, 'err.ext.unknown_field', { key: String(body.key || '').slice(0, 32) });
  }
  const patch = { [f.key]: body.value === undefined ? null : body.value };
  const r = await mutate(env, ctx, origin, (db) => {
    for (const id of ids) getTrack(db, id);       // 없는 곡이 있으면 아무것도 바꾸지 않고 404
    for (const id of ids) { const t = db.tracks[id]; setOrDelete(t, 'ext', mergeExt(t.ext, patch, doc, 'track')); }
    return ids.length;
  });
  return json({ ok: true, ...r.result, count: r.value, key: f.key });
}

// 3-20: POST /api/admin/aitool {"track_ids":[...], "ai_tool":"suno"|null} — 여러 곡의 만든 AI 툴을 한 번에 (db 1번 저장 + catalog 1번 + ping 1번)
async function bulkAiTool(request, env, ctx, origin) {
  const body = await readJson(request);
  const ids = body.track_ids;
  if (!Array.isArray(ids) || !ids.length || ids.length > 2000 || new Set(ids).size !== ids.length || !ids.every((x) => typeof x === 'string' && ID_RE.test(x))) {
    fail(400, 'err.request.invalid', { field: 'track_ids' });
  }
  const ai = vAiTool(body.ai_tool);
  const r = await mutate(env, ctx, origin, (db) => {
    for (const id of ids) getTrack(db, id);       // 없는 곡이 있으면 아무것도 바꾸지 않고 404
    for (const id of ids) setOrDelete(db.tracks[id], 'ai_tool', ai || undefined);
    return ids.length;
  });
  return json({ ok: true, ...r.result, count: r.value, ai_tool: ai });
}

// 3-8: POST /api/admin/fields — [Update fields] 바로 받기 (1분에 1번)
async function adminFieldsUpdate(env) {
  const r = await refreshFields(env, { manual: true });
  if (r.throttled) fail(429, 'err.fields.too_soon', { wait: r.wait });
  const fs = await fieldsState(env);
  return json({ ok: true, result: { changed: r.changed, version: r.version, error: r.error }, fields: fs.fields, app: fs.app });
}
function setOrDelete(o, k, v) { if (v === undefined) delete o[k]; else o[k] = v; }

// --- 앨범 ---
// POST /api/admin/albums {"title","artist"?,"track_ids":[...],"aml"?:false}
async function albumCreate(request, env, ctx, origin) {
  const body = await readJson(request);
  const { db, etag } = await loadDb(env);
  const a = {
    id: newId('a', db.albums),
    title: vStr(body.title, 'title', 1, 100),
    artist: vArtist(body.artist, db.site),
    track_ids: vTrackIds(body.track_ids ?? [], db),
    aml: body.aml === undefined ? false : vBool(body.aml, 'aml'),
    has_cover: false,
    created_at: nowIso(),
  };
  db.albums[a.id] = a;
  const result = await finish(env, ctx, db, etag, origin, false);
  return json({ ok: true, album: a, ...result }, 201);
}

// PATCH /api/admin/albums/{id} {title?, artist?, track_ids?, aml?}
async function albumUpdate(request, env, ctx, id, origin) {
  const body = await readJson(request);
  const { db, etag } = await loadDb(env);
  const a = getAlbum(db, id);
  if (body.title !== undefined) a.title = vStr(body.title, 'title', 1, 100);
  if (body.artist !== undefined) a.artist = vArtist(body.artist, db.site);
  if (body.track_ids !== undefined) a.track_ids = vTrackIds(body.track_ids, db);
  if (body.aml !== undefined) a.aml = vBool(body.aml, 'aml');
  const result = await finish(env, ctx, db, etag, origin, false); // aml 앨범이면 10~30곡·음원 검사
  return json({ ok: true, album: a, ...result });
}

// PUT /api/admin/albums/{id}/cover — 3-6: 브라우저가 200×200 WebP로 만든 것만(100KB). DELETE = 커버만 지우기.
// (3-5 이전에 올린 JPG 커버는 그대로 보인다)
async function albumCover(request, env, ctx, id, origin) {
  if (request.method === 'DELETE') {
    const r = await mutate(env, ctx, origin, (db) => { const a = getAlbum(db, id); a.has_cover = false; delete a.cover_v; return a; });
    await env.BUCKET.delete(KEY.cover(id));
    return json({ ok: true, album: r.value, ...r.result });
  }
  const img = await readWebp(request, IMAGE_RULES.cover);
  { const { db } = await loadDb(env); getAlbum(db, id); }
  await env.BUCKET.put(KEY.cover(id), img.buf, { httpMetadata: { contentType: 'image/webp' } });
  const r = await mutate(env, ctx, origin, (db) => { const a = getAlbum(db, id); a.has_cover = true; a.cover_v = img.v; return a; });
  return json({ ok: true, album: r.value, ...r.result });
}

// ===== 3-6: 이미지·가사 =====================================================
// db를 읽어 고치고(fn) 반영한다. 다른 곳에서 동시에 바꿨으면(409) 다시 읽어서 최대 3번.
async function mutate(env, ctx, origin, fn) {
  for (let i = 0; ; i++) {
    const { db, etag } = await loadDb(env);
    const value = fn(db);
    try {
      const result = await finish(env, ctx, db, etag, origin, false);
      return { value, result };
    } catch (e) { if (!(e instanceof ApiError && e.code === 'err.conflict') || i >= 2) throw e; }
  }
}

// PUT /api/admin/tracks/{id}/image — 100×100 WebP (50KB). DELETE = 기본 이미지로 되돌리기 (큰 그림도 함께 지움)
// 3-16: 큰 그림은 먼저 PUT .../image?s=l (200~400px 정사각, 60KB) 로 창고에만 올리고(db·catalog 그대로) → 내용 해시 v 를 돌려준다.
//   이어서 작은 그림 PUT 에 머리글 X-Aml-Large: v 를 붙이면, 창고의 큰 그림이 그 v 와 같을 때만 img_lg_v 로 함께 저장(반영·ping 1번).
//   머리글이 없거나 다르면 옛 큰 그림을 지운다(작은 그림만 바뀌었는데 예전 큰 그림이 남지 않게).
async function trackImage(request, env, ctx, id, origin, url) {
  if (request.method === 'DELETE') {
    const r = await mutate(env, ctx, origin, (db) => { const t = getTrack(db, id); delete t.img_v; delete t.img_lg_v; return t; });
    await env.BUCKET.delete([KEY.trackImg(id), KEY.trackImgL(id)]);
    return json({ ok: true, track: r.value, ...r.result });
  }
  if (url && url.searchParams.get('s') === 'l') {
    const big = await readWebp(request, IMAGE_RULES.trackLg);
    { const { db } = await loadDb(env); getTrack(db, id); }
    await env.BUCKET.put(KEY.trackImgL(id), big.buf, { httpMetadata: { contentType: 'image/webp' }, customMetadata: { v: big.v } });
    return json({ ok: true, large: { v: big.v, w: big.w, h: big.h } });
  }
  const img = await readWebp(request, IMAGE_RULES.track);
  { const { db } = await loadDb(env); getTrack(db, id); }   // 없는 곡이면 저장 전에 404
  const want = String(request.headers.get('x-aml-large') || '').toLowerCase();
  let lg = '';
  if (/^[0-9a-f]{8}$/.test(want)) {
    const h = await env.BUCKET.head(KEY.trackImgL(id));
    if (h && h.customMetadata && h.customMetadata.v === want) lg = want;
  }
  await env.BUCKET.put(KEY.trackImg(id), img.buf, { httpMetadata: { contentType: 'image/webp' } });
  if (!lg) await env.BUCKET.delete(KEY.trackImgL(id));
  const r = await mutate(env, ctx, origin, (db) => { const t = getTrack(db, id); t.img_v = img.v; if (lg) t.img_lg_v = lg; else delete t.img_lg_v; return t; });
  return json({ ok: true, track: r.value, ...r.result });
}

// PUT /api/admin/tracks/{id}/lyrics — 본문 = .srt 파일 그대로 (UTF-8, 100KB). DELETE = 가사 지우기
async function trackLyrics(request, env, ctx, id, origin) {
  if (request.method === 'DELETE') {
    const r = await mutate(env, ctx, origin, (db) => { const t = getTrack(db, id); delete t.lyrics_v; return t; });
    await env.BUCKET.delete(KEY.lyrics(id));
    return json({ ok: true, track: r.value, ...r.result });
  }
  if (Number(request.headers.get('content-length') || 0) > LIMITS.lyricsMaxBytes) fail(413, 'err.upload.too_large', { max_kb: 100 });
  let buf = new Uint8Array(await request.arrayBuffer());
  if (!buf.length) fail(411, 'err.upload.length_required');
  if (buf.length > LIMITS.lyricsMaxBytes) fail(413, 'err.upload.too_large', { max_kb: 100 });
  if (buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) buf = buf.slice(3);        // BOM 제거
  let text;
  try { text = new TextDecoder('utf-8', { fatal: true }).decode(buf); } catch { fail(422, 'err.lyrics.encoding'); }
  if (!/\d{1,2}:\d{2}:\d{2}[,.]\d{1,3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[,.]\d{1,3}/.test(text)) fail(422, 'err.lyrics.format');
  const v = (await sha256Hex(text)).slice(0, 8);
  { const { db } = await loadDb(env); getTrack(db, id); }
  await env.BUCKET.put(KEY.lyrics(id), text, { httpMetadata: { contentType: 'text/plain; charset=utf-8' } });
  const r = await mutate(env, ctx, origin, (db) => { const t = getTrack(db, id); t.lyrics_v = v; return t; });
  return json({ ok: true, track: r.value, ...r.result });
}

// PUT/DELETE /api/admin/site/banner (최대 1600×400, 300KB) · /api/admin/site/profile (200×200, 100KB)
// 3-9: 프로필은 머리글 X-Aml-Color: #rrggbb (브라우저가 계산한 평균 색, 선택)도 함께 저장한다 → db site.profile_color
async function siteImage(request, env, ctx, which, origin) {
  const key = which === 'banner' ? KEY.banner : KEY.profile;
  if (request.method === 'DELETE') {
    const r = await mutate(env, ctx, origin, (db) => { if (which === 'banner') delete db.site.banner; else { delete db.site.profile_v; delete db.site.profile_color; } return db.site; });
    await env.BUCKET.delete(key);
    return json({ ok: true, site: r.value, ...r.result });
  }
  const img = await readWebp(request, IMAGE_RULES[which]);
  const color = which === 'profile' ? vColor(request.headers.get('x-aml-color'), true) : null;
  await env.BUCKET.put(key, img.buf, { httpMetadata: { contentType: 'image/webp' } });
  const r = await mutate(env, ctx, origin, (db) => {
    if (which === 'banner') db.site.banner = { v: img.v, w: img.w, h: img.h };
    else {
      db.site.profile_v = img.v;          // catalog site.profile_url 의 v
      if (color) db.site.profile_color = color; else delete db.site.profile_color;
    }
    return db.site;
  });
  return json({ ok: true, site: r.value, ...r.result });
}

// ===== 3-6: 내 도메인 (src/domain.js) ========================================
// POST /api/admin/domain {"domain":"mymusic.com"}
async function adminDomain(request, env, ctx, url, origin) {
  if (env.SITE_URL) fail(409, 'err.domain.env');   // 옛 설정 SITE_URL 이 있으면 그 값이 우선이라 여기서 바꿀 수 없다
  const body = await readJson(request);
  const target = normalizeDomain(body.domain, env);
  const aml = await ensureAml(env, origin);
  const eff = effective(env, aml);
  if (target === origin && aml.domain === target) {
    return json({ ok: true, unchanged: true, domain: domainOf(env, (await loadAml(env, true)).data, url.origin) });
  }
  // ① 그 주소로 이 사이트(Worker)가 열리는지
  const reach = await reachCheck(env, target, url.origin, eff.secret);
  if (!reach.ok) fail(422, reach.code, { domain: target, ...(reach.params || {}) });
  // ② aimusiclist에 등록된 사이트면 우리사이트 주소도 바꾼다 (등록 전이면 새 주소로 등록하게 된다)
  let aimusiclist = 'not_registered';
  if (eff.site_id) {
    const r = await requestUrlChange(env, eff.site_id, eff.secret, target);
    if (!r.ok) fail(r.code === 'err.site.url_taken' ? 409 : 502, r.code, { domain: target, ...(r.params || {}) });
    aimusiclist = 'changed';
  }
  // ③ 이 사이트의 공식 주소를 바꾸고 catalog 다시 만들기 + ping
  await updateAml(env, { origin: target, domain: target, domain_at: nowIso(), domain_from: origin });
  let commit = null;
  try { commit = await commitNow(env, ctx, target); } catch (e) { console.error(e); }
  if (!eff.site_id && needsRegister(env, (await loadAml(env, true)).data)) ctx.waitUntil(registerAndCommit(env, ctx, target).catch((e) => console.error(e)));
  return json({ ok: true, aimusiclist, commit, domain: domainOf(env, (await loadAml(env, true)).data, url.origin) });
}

// DELETE /api/admin/albums/{id} — 곡은 남긴다
async function albumDelete(env, ctx, id, origin) {
  const { db, etag } = await loadDb(env);
  getAlbum(db, id);
  delete db.albums[id];
  const result = await finish(env, ctx, db, etag, origin, false);
  await env.BUCKET.delete(KEY.cover(id));
  return json({ ok: true, deleted: id, ...result });
}

function newId(prefix, existing) {
  for (;;) {
    const bytes = crypto.getRandomValues(new Uint8Array(8));
    const id = prefix + '_' + [...bytes].map((b) => (b % 36).toString(36)).join('');
    if (!existing[id]) return id;
  }
}
