// src/ui.js — 개인사이트 화면용 서버 코드 (채팅 3-2)
// -----------------------------------------------------------------------------
// index.js의 fetch 맨 첫 줄에서 uiFetch()를 부른다.
//   const ui = await uiFetch(request, env, ctx); if (ui) return ui;
// 이 파일이 맡지 않는 주소면 null을 돌려주므로 3-1 코드는 그대로 동작한다.
//
// [A] 방문자 화면: GET /
//   - 스킨 HTML + db.json(내 사이트의 모든 곡) + 메뉴(ui.json)를 합쳐 "완성된 HTML 1장"을 만든다. (3-5: catalog → db)
//   - 만든 결과는 R2 meta/page.html에 저장해 두고, db·ui가 바뀌었을 때만 다시 만든다.
//   - 방문자 1명이 페이지를 열 때 Worker 요청은 1회뿐이다. (JS·CSS는 정적 파일 = 무료)
//   - 관리자가 아직 없으면(첫 설치) 같은 주소에 "관리자 만들기" 화면을 보여 준다. (3-5)
//   - 페이지 맨 아래에 ⚙ 관리 링크를 스킨과 상관없이 자동으로 붙인다. (3-5)
// [B][C] 관리 API (로그인 쿠키 또는 호환용 Bearer AML_ADMIN_TOKEN — src/auth.js requireAdmin)
//   GET  /api/admin/ui                 스킨·메뉴 상태 + 우리사이트 API 주소
//   PUT  /api/admin/skin               {name, etag}  스킨 선택
//   PUT  /api/admin/skins/{name}       본문 = 스킨 HTML (검사 후 R2 skins/{name}.html)
//   DELETE /api/admin/skins/{name}     올린 스킨 삭제 (쓰던 스킨이면 light로)
//   POST /api/admin/skins/preview      {id}  (3-10) 갤러리 스킨 미리보기 — 저장 안 함 (src/gallery.js)
//   POST /api/admin/skins/install      {id, apply?, overwrite?}  (3-10) 갤러리 스킨 설치·바로 적용 (src/gallery.js)
//   PUT  /api/admin/menus              {menus, etag}  메뉴 전체 저장
//   GET  /api/admin/tracks/{id}/audio  비공개 곡 미리듣기 (관리 화면이 fetch → blob으로 재생)
//   ui.json이 다른 곳에서 바뀌었으면 409 err.conflict → 화면이 다시 불러온다.
// -----------------------------------------------------------------------------

import { KEY, apiBase, PAGE_GEN } from './common.js';
import { loadDb, artistOf } from './db.js';
import { requireAdmin, loadAdmin, legacyToken } from './auth.js';
import { cleanSocials, socialInfo } from './lists.js';
import { loadFields, pageExt } from './fields.js';
import { adminSkinPreview, adminSkinInstall, skinIndexUrl, SKIN_SPEC } from './gallery.js';
import { statsVisit, loadPlayTotals, pubPlays, popOrder, loadLikes, pubLikes, aeOn } from './stats.js';
import { loadAml, effective } from './aml.js';
import { AI_TOOL_RE, loadAiTools, pickAiToolNames } from './aitools.js';

// visitor.js·스킨 처리 방식이 바뀌면 올린다 (페이지 재생성 + 브라우저 캐시 갱신)
// 4 = 3-6: 썸네일·비주얼라이저·가사·방명록·배너·프로필·하단 문구·광고
// 5 = 3-7: SNS 모음 화면(#/links)·{{socials}} 자리표시
// 6 = 3-8: 곡 줄 확장 항목 칩 .aml-ext (fields.json display.track_row)
// 7 = 3-9: 기본 모양을 정적 파일 /_app/base.css(+ kit.css)로, 새 재생 바·{{hero}}·SVG 아이콘·프로필 평균 색
//     (3-12 인기순·순위 표시는 데이터 칸 rk·mv 와 base.css 만 더해 판을 올리지 않는다 — 최신순 화면은 그대로)
//     (3-14 재생 횟수도 데이터 칸 pl(방문자에게 보이기를 켠 곡만)과 base.css .aml-plays 만 — 판 그대로)
export const RENDER_VERSION = '12';  // 3-20: 곡 줄 만든 AI 툴 배지 (3-19 = 11 Powered by, 3-18 = 10, 3-17: 앨범 표지 최대 200px)
// SNS 아이콘 묶음 (정적 파일 1개, Simple Icons CC0). 아이콘을 바꾸면 v를 올린다.
export const SOCIAL_SPRITE = '/_app/socials.svg?v=1';
// 3-9: 사이트 아이콘 묶음(재생·가사·⋯ 등). 아이콘을 바꾸면 v를 올린다.
export const ICON_SPRITE = '/_app/icons.svg?v=2';   // 3-18: heart · heart-fill
const PAGE_KEY = 'meta/page.html';        // 미리 만든 방문자 페이지
const UI_KEY = 'meta/ui.json';            // { skin, menus, skins, skins_meta(3-10), prev_skin(3-10) } — 3-1의 db.json과 따로 둔다. 모르는 키는 보존
const DB_KEY = KEY.db;                    // 내 사이트의 모든 곡·앨범 (3-5부터 방문자 화면의 원본)
export const BUILTIN_SKINS = ['light', 'dark'];
export const MAX_SKINS = 20;              // 올리거나 설치한 스킨 최대 개수 (기본 스킨 제외)
const MEMO_MS = 30_000;                   // Worker 메모리 캐시 30초 (3-1의 catalog 캐시와 같은 기준)
let memo = null;                          // { at, html, etag, ads }
const NONCE = '__AML_NONCE__';            // 3-6: 광고를 켠 페이지는 요청마다 이 자리를 무작위 값(nonce)으로 바꾼다
const ADS_SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

// ── 진입점 ─────────────────────────────────────────────────────────────────────
export async function uiFetch(request, env, ctx) {
  const url = new URL(request.url);
  const m = request.method;
  const p = url.pathname;
  if ((m === 'GET' || m === 'HEAD') && p === '/') {
    // 관리자가 없으면 관리자 만들기 화면 (없음은 기억하지 않는다 → 만들자마자 바로 메인 화면)
    // 단, 1단계 방식으로 이미 운영 중인 사이트(AML_ADMIN_TOKEN 있음)는 방문자 화면을 계속 보여 주고 /admin/ 에서 만든다.
    if (!legacyToken(env) && !(await loadAdmin(env)).data && !(await loadAdmin(env, true)).data) return setupPage(request, env);
    return visitorPage(request, env, ctx);
  }
  if (p === '/admin') return Response.redirect(url.origin + '/admin/', 301);

  // 관리 API: 이 파일이 맡는 주소만 골라낸다 (나머지 /api/admin/* 는 3-1이 처리)
  let r = null;
  if (p === '/api/admin/ui' && m === 'GET') r = () => adminGetUi(env);
  else if (p === '/api/admin/skin' && m === 'PUT') r = () => adminSelectSkin(request, env);
  else if (p === '/api/admin/menus' && m === 'PUT') r = () => adminSaveMenus(request, env);
  else if (p === '/api/admin/skins/preview' && m === 'POST') r = () => adminSkinPreview(request, env);   // 3-10
  else if (p === '/api/admin/skins/install' && m === 'POST') r = () => adminSkinInstall(request, env);   // 3-10
  else if (p.startsWith('/api/admin/skins/') && (m === 'PUT' || m === 'DELETE')) {
    const name = decodeURIComponent(p.slice('/api/admin/skins/'.length));
    r = () => (m === 'PUT' ? adminUploadSkin(request, env, name) : adminDeleteSkin(env, name));
  } else {
    const a = p.match(/^\/api\/admin\/tracks\/([a-z0-9_-]{1,64})\/audio$/);
    if (a && m === 'GET') r = () => adminPreviewAudio(env, a[1]);
  }
  if (!r) return null;
  try { await requireAdmin(request, env); } catch (e) { return jerr(e.code || 'err.auth.required', e.status || 401, e.params || {}); }
  try { return await r(); } catch (e) { return jerr('err.server', 500); }
}

// ── 방문자 페이지 ──────────────────────────────────────────────────────────────
async function visitorPage(request, env, ctx) {
  statsVisit(request, env, ctx);   // 3-12: 방문 1줄 (Analytics Engine, 기다리지 않음 — Worker 요청·R2 쓰기 +0)
  if (!memo || Date.now() - memo.at > MEMO_MS || memo.gen !== PAGE_GEN.n) {
    // R2 확인: head 2회(Class B). 바뀐 게 없으면 저장된 page.html 1회 읽기
    const [cat, ui, page] = await Promise.all([
      env.BUCKET.head(DB_KEY), env.BUCKET.head(UI_KEY), env.BUCKET.get(PAGE_KEY),
    ]);
    const stamp = makeStamp(cat, ui);
    let html;
    if (page && page.customMetadata && page.customMetadata.stamp === stamp) {
      html = await page.text();
    } else {
      if (page) await page.body?.cancel?.();
      const built = await buildPage(env, request);
      html = built.html;
      // 저장은 응답을 늦추지 않도록 뒤에서 한다 (Class A 쓰기는 바뀌었을 때만 발생)
      ctx.waitUntil(env.BUCKET.put(PAGE_KEY, html, {
        httpMetadata: { contentType: 'text/html; charset=utf-8' },
        customMetadata: { stamp: built.stamp },
      }));
    }
    memo = { gen: PAGE_GEN.n, at: Date.now(), html, etag: '"p' + stamp.replace(/[^a-zA-Z0-9]/g, '').slice(0, 60) + '"', ads: html.includes(' nonce="' + NONCE + '"') };
  }
  const imgOrigin = imageOrigin(env);
  if (memo.ads) {
    // 광고를 켠 페이지: 구글 애드센스 권장 방식(nonce + strict-dynamic). 요청마다 새 nonce → 304 없이 매번 보낸다.
    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
    const headers = pageHeaders(null, { ads: true, nonce, imgOrigin });
    return new Response(request.method === 'HEAD' ? null : memo.html.split(NONCE).join(nonce), { status: 200, headers });
  }
  const headers = pageHeaders(memo.etag, { imgOrigin });
  if (request.headers.get('If-None-Match') === memo.etag) return new Response(null, { status: 304, headers });
  return new Response(request.method === 'HEAD' ? null : memo.html, { status: 200, headers });
}

// 연도는 하단 문구(© {year})에 들어가므로 해가 바뀌면 페이지를 다시 만든다
function makeStamp(dbObj, uiObj) {
  return (dbObj ? dbObj.etag : '-') + '|' + (uiObj ? uiObj.etag : '-') + '|v' + RENDER_VERSION + '|y' + new Date().getUTCFullYear();
}
// 기본 곡 이미지가 있는 곳 (우리사이트) — 방문자 화면 CSP img-src 에 넣는다
function imageOrigin(env) { try { return new URL(apiBase(env)).origin; } catch (_) { return 'https://aimusiclist.com'; } }

// 첫 설치 화면: 관리 화면 파일(/admin/index.html)을 그대로 보여 준다. 화면이 /api/auth/status 를 보고 "관리자 만들기"를 띄운다.
async function setupPage(request, env) {
  const r = await env.ASSETS.fetch(new Request(new URL('/admin/', request.url)));
  const headers = new Headers(r.headers);
  headers.set('Cache-Control', 'no-store');
  headers.set('X-Robots-Tag', 'noindex');
  headers.set('Referrer-Policy', 'no-referrer');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Content-Security-Policy', "default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; font-src 'self'; connect-src 'self' https:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'");
  headers.delete('ETag');
  return new Response(request.method === 'HEAD' ? null : r.body, { status: r.ok ? 200 : 503, headers });
}

// 보안 헤더: 스킨에 스크립트가 섞여 들어와도 CSP가 실행을 막는다 (2중 방어)
// - 광고 끔(기본): 우리 스크립트(/_app/*.js)만, 이미지는 내 사이트 + 우리사이트 기본 곡 이미지
// - 광고 켬(3-6): 구글 애드센스가 지원하는 "strict CSP" 그대로 (support.google.com/adsense/answer/16283098, 2026-10-28 확인).
//   스크립트는 nonce가 붙은 것만 실행(+ strict-dynamic: 그 스크립트가 부른 광고 스크립트 허용). 'unsafe-inline'·https: 는
//   nonce를 아는 브라우저에서는 무시되고 옛 브라우저용이다. 구글은 이것보다 더 좁히면 광고가 예고 없이 깨질 수 있다고 안내하므로
//   이미지·프레임 등은 막지 않는다. (스킨의 외부 주소는 업로드 검사에서 이미 막힌다)
export function pageHeaders(etag, o) {
  o = o || {};
  const img = o.imgOrigin && o.imgOrigin !== 'null' ? ' ' + o.imgOrigin : '';
  const csp = o.ads ? [
    "object-src 'none'",
    `script-src 'nonce-${o.nonce}' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:`,
    "base-uri 'none'", "form-action 'none'", "frame-ancestors 'self'",
  ] : [
    "default-src 'none'",
    "script-src 'self'",                 // /_app/*.js 만 실행 (인라인 스크립트 불가)
    "style-src 'self' 'unsafe-inline'",  // 스킨의 <style> 허용
    "img-src 'self' data:" + img,        // 3-6: 기본 곡 이미지(우리사이트)
    "media-src 'self'",                  // /a/{id} 재생
    "font-src 'self' data:",
    "connect-src 'self'",                // 가사·방명록은 같은 사이트
    "base-uri 'none'", "form-action 'none'", "frame-ancestors 'self'", "object-src 'none'",
  ];
  const h = {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': o.ads ? 'no-store' : 'no-cache',
    'Content-Security-Policy': csp.join('; '),
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };
  if (etag) h.ETag = etag;
  return h;
}

// ── 페이지 만들기 ──────────────────────────────────────────────────────────────
export async function buildPage(env, request) {
  const [dbHead, uiObj] = await Promise.all([env.BUCKET.head(DB_KEY), env.BUCKET.get(UI_KEY)]);
  const ui = normalizeUi(uiObj ? safeJson(await uiObj.text()) : null);
  const [skin, pd] = await Promise.all([loadSkin(env, request, ui.skin), buildPageData(env, request, ui)]);
  return {
    html: renderSkin(skin, pd.data, pd.cs),
    stamp: makeStamp(dbHead, uiObj),
  };
}

// 방문자 화면 데이터 (곡·앨범·메뉴·장르 이름). 3-10: 갤러리 스킨 미리보기도 같은 데이터로 그린다(저장 안 함).
export async function buildPageData(env, request, ui) {
  if (!ui) ui = (await readUi(env)).ui;
  const px = pageExt(await loadFields(env));   // 3-8: 곡 줄에 보일 확장 항목 (display.track_row)
  // 3-14 재생 횟수 · 3-18 인기순(누적 재생 순서값) · 좋아요 (모두 하루 1번 cron 이 만든 것 — 방문 요청 +0)
  const [dbr, totals, likes, countable, amlr] = await Promise.all([loadDb(env), loadPlayTotals(env), loadLikes(env), aeOn(env).catch(() => false), loadAml(env, true).catch(() => ({ data: null }))]);   // 3-19 site_id(맨 아래 Powered by 링크)
  const catalog = normalizeCatalog(pageSource(dbr.db, imageOrigin(env) + '/img/default/', px));
  const po = popOrder(dbr.db, totals);   // 3-18 {id: 1..N} 순서값만 (숫자 아님 — 숨긴 재생 횟수가 새지 않게)
  const pl = pubPlays(dbr.db, totals);   // 3-14 방문자에게 보이기를 켠 곡의 내 사이트 재생 누적 (스위치가 꺼져 있으면 빈 값)
  // 3-18 ♥ 버튼: 아티스트가 끄지 않았고(site.likes_off) 셀 수 있을 때(통계 켬 — Analytics Engine + 토큰)
  const likeOn = dbr.db.site.likes_off !== true && !!countable;
  const lk = likeOn ? pubLikes(dbr.db, likes) : {};
  // 3-20 만든 AI 툴 이름: 쓰인 곡이 있을 때만 목록을 받는다(장르와 같이 페이지를 다시 만들 때만 — 방문자 요청 +0)
  const atIds = [...new Set(catalog.tracks.map(t => t.at).filter(Boolean))];
  const [genres, atIdx] = await Promise.all([loadGenreNames(env, request, usedGenreKeys(catalog, ui)), atIds.length ? loadAiTools(env) : null]);

  // 방문자 화면이 쓰는 데이터 (주소는 같은 사이트 상대경로 /a/·/c/ 로 만든다 → CSP·로컬 시험에 안전)
  const cs = catalog.site;
  cs.powered = poweredUrl(imageOrigin(env), effective(env, amlr && amlr.data).site_id);   // 3-19: 등록 후 = 내 아티스트 페이지, 전 = 첫 화면
  const data = {
    v: RENDER_VERSION,
    site: { name: cs.name, artist_name: cs.artist_name, description: cs.description, default_lang: cs.default_lang, guestbook: cs.guestbook, likes: likeOn },
    lkd: likeOn && likes && /^\d{4}-\d{2}-\d{2}$/.test(likes.cum_d || '') ? likes.cum_d : '',   // 3-18 좋아요 수가 이 날 전날까지 센 것
    menus: ui.menus,
    // 3-7: 등록한 SNS (방문자 SNS 모음 화면 #/links 용). 주소는 내 사이트 화면에만 들어간다(catalog에는 키만).
    socials: cs.socials, sprite: SOCIAL_SPRITE, icons: ICON_SPRITE,
    albums: catalog.albums.map(a => ({
      id: a.id, title: a.title, artist: a.artist, has_cover: !!a.cover_url, cover: a.cover_url || '',
      track_ids: a.track_ids, published_at: a.published_at,
    })),
    tracks: catalog.tracks.map(t => {
      const o = {
        id: t.id, title: t.title, artist: t.artist, genres: t.genres,
        duration: t.duration, published_at: t.published_at, // 내 사이트에서는 올린 시각(정렬용)
      };
      if (t.img) o.img = t.img;      // 3-6 곡 이미지 주소 (직접 올린 것 /i/{id}?v= 또는 기본 이미지)
      if (typeof t.il === 'string' && /^[0-9a-f]{8}$/.test(t.il)) o.il = t.il;   // 3-16 큰 그림 버전 (있을 때만) → 큰 재생 화면만 /i/{id}?s=l&v=
      if (t.ly) o.ly = t.ly;         // 3-6 가사 버전 (있을 때만) → /l/{id}?v=
      if (t.ext) o.ext = t.ext;      // 3-8 확장 항목 값 (곡 줄 표시용만, 값 있을 때만)
      if (po[t.id]) o.po = po[t.id];   // 3-18 인기순 순서값 (누적 재생 1 이상인 곡만, 1부터)
      if (pl[t.id]) o.pl = pl[t.id];   // 3-14 재생 횟수 (보이기를 켠 곡·1 이상만)
      if (lk[t.id]) o.lk = lk[t.id];   // 3-18 좋아요 수 (1 이상만)
      if (t.at) o.at = t.at;           // 3-20 만든 AI 툴 id (있을 때만) → 이름은 D.aitools
      return o;
    }),
    genres, // { 키: { en: 'R&B', ko: '알앤비', ... } } — 쓰인 키만
    // 3-8: 곡 줄 칩에 쓰는 항목 이름 { key: { type, label:{en,ko…}, order, opts:{옵션키:{en,ko…}} } } — 쓰인 항목만.
    // 우리사이트에서 받은 글자이므로 visitor.js 가 항상 이스케이프해서 글자로만 넣는다.
    fields: px.fields(),
  };
  if (atIds.length) data.aitools = pickAiToolNames(atIdx, atIds);   // 3-20 { id: 이름 } — 쓰인 것만 ('other' 는 화면이 언어팩 문장으로)
  return { data, cs };
}

// db.json → 방문자 화면용 목록 (catalog와 같은 모양). 음원이 있는 곡은 aml과 상관없이 모두 보인다.
// imgBase: 기본 곡 이미지 폴더 (https://aimusiclist.com/img/default/)
// px(3-8): pageExt() 결과 — 곡마다 곡 줄에 보일 확장 항목 값만 골라 넣는다 (없으면 넣지 않음)
export function pageSource(db, imgBase, px) {
  const s = db.site;
  const tracks = Object.values(db.tracks).filter(t => t.has_audio)
    .map(t => {
      const o = { id: t.id, title: t.title, artist: artistOf(t, s), genres: t.genres, duration: t.duration, published_at: t.created_at || '' };
      if (t.img_v) o.img = '/i/' + t.id + '?v=' + t.img_v;
      else if (imgBase && Number.isInteger(t.img) && t.img > 0) o.img = imgBase + String(t.img).padStart(5, '0') + '.webp';
      if (t.img_v && typeof t.img_lg_v === 'string' && /^[0-9a-f]{8}$/.test(t.img_lg_v)) o.il = t.img_lg_v;   // 3-16 큰 그림 버전
      if (t.lyrics_v) o.ly = t.lyrics_v;
      if (typeof t.ai_tool === 'string' && AI_TOOL_RE.test(t.ai_tool)) o.at = t.ai_tool;   // 3-20
      const ext = px && px.extOf(t);
      if (ext) o.ext = ext;
      return o;
    });
  const ok = new Set(tracks.map(t => t.id));
  const albums = Object.values(db.albums)
    .map(a => ({ id: a.id, title: a.title, artist: artistOf(a, s), cover_url: a.has_cover ? '/c/' + a.id + (a.cover_v ? '?v=' + a.cover_v : '') : null,
      track_ids: a.track_ids.filter(id => ok.has(id)), published_at: a.created_at || '' }))
    .filter(a => a.track_ids.length);
  return {
    site: {
      name: s.name, artist_name: s.artist_name || s.name, description: s.description || '', default_lang: s.default_lang || 'en',
      // 3-6: 배너·프로필·하단 문구·광고·방명록
      banner: s.banner || null, profile_v: s.profile_v || '', footer: s.footer || '', ads: s.ads || null, guestbook: s.guestbook !== false,
      // 3-9: 프로필 평균 색(관리 화면이 올릴 때 계산해 저장) → 머리 영역 바탕
      profile_color: typeof s.profile_color === 'string' && /^#[0-9a-f]{6}$/.test(s.profile_color) ? s.profile_color : '',
      // 3-7: SNS [{key, name, icon, url}] — 관리 화면에서 고른 순서(큰 5개 → 다른 SNS)
      socials: cleanSocials(s.socials).map(x => { const i = socialInfo(x.key); return { key: x.key, name: i.name, icon: i.icon || 'link', url: x.url }; }),
    },
    tracks, albums,
  };
}

// 스킨에 자리표시를 채우고, 데이터·스크립트를 </body> 앞에 넣는다
// site(3-6): { banner:{v,w,h}, profile_v, footer, ads:{client,top,left,on} } — 배너·프로필·하단 문구·광고 자리
export function renderSkin(skin, data, site) {
  skin = String(skin).split(NONCE).join('');   // 스킨 글자에 nonce 자리 표시가 섞여 들어오지 않게
  const s = data.site;
  site = site || {};
  const year = String(new Date().getUTCFullYear());
  const has = (k) => new RegExp('\\{\\{\\s*' + k + '\\s*\\}\\}').test(skin);
  const ads = adsConfig(site.ads);

  // ── 3-6 새 자리 ──
  const banner = site.banner && /^[0-9a-f]{8}$/.test(site.banner.v || '')
    ? `<div class="aml-banner"><img class="aml-banner-img" src="/b?v=${site.banner.v}" alt="" width="${site.banner.w | 0}" height="${site.banner.h | 0}"></div>` : '';
  const profile = /^[0-9a-f]{8}$/.test(site.profile_v || '')
    ? `<img class="aml-profile" src="/p?v=${site.profile_v}" alt="" width="200" height="200">` : '';
  const adUnit = (slot, where) => (ads && slot
    ? `<div class="aml-ad aml-ad-${where}"><ins class="adsbygoogle" style="display:block" data-ad-client="${ads.client}" data-ad-slot="${slot}" data-ad-format="auto" data-full-width-responsive="true"></ins></div>` : '');
  const adTop = adUnit(ads && ads.top, 'top');
  const adLeft = has('ad_left') ? adUnit(ads && ads.left, 'left') : '';   // 왼쪽 광고는 스킨에 자리가 있을 때만
  // 하단 문구 + ⚙ 관리 링크 (글자만. 비어 있으면 "© 연도 사이트이름", {year} 는 올해로 바뀐다)
  const footText = (site.footer ? String(site.footer) : '© {year} ' + s.name).split('{year}').join(year);
  const footer = '<div class="aml-footer"><span class="aml-footer-text">' + esc(footText) + '</span>' +
    poweredHtml(site.powered) +
    '<a class="aml-admin-link" href="/admin/" rel="nofollow">&#9881; <span class="aml-admin-text">Admin</span></a></div>';

  const map = {
    site_name: esc(s.name),
    artist_name: esc(s.artist_name),
    description: esc(s.description || ''),
    lang: esc(s.default_lang || 'en'),
    year,
    menu: '<nav id="aml-menu" class="aml-menu"></nav>',
    content: '<main id="aml-content" class="aml-content"></main>',
    player: '<div id="aml-player" class="aml-player" hidden></div>',
    lang_select: '<div id="aml-lang" class="aml-lang"></div>', // 언어 선택 자리 (visitor.js가 select를 넣는다. 3-3)
    banner, profile, footer, ad_top: adTop, ad_left: adLeft,
    socials: socialsHtml(site.socials),   // 3-7: 스킨에 {{socials}} 가 있을 때만 보인다 (없으면 표시 안 함)
    hero: has('hero') ? heroHtml(s, site, data.tracks.length) : '',   // 3-9: 머리 영역 한 덩어리 (프로필·이름·아티스트·곡 수·소개·SNS·[전체 재생][섞어 재생])
  };
  // 자리가 없을 때: 상단 광고는 배너 바로 아래, 배너는 <body> 바로 뒤, 하단 문구는 맨 아래 (아래 inject)
  let src = skin;
  if (!has('ad_top') && adTop) src = has('banner') ? src.replace(/\{\{\s*banner\s*\}\}/, '{{banner}}{{ad_top}}') : '{{ad_top}}' + src;
  if (!has('banner') && banner) src = '{{banner}}' + src;
  let atBodyStart = '';
  if (!has('banner') || !has('ad_top')) {
    // 위에서 앞에 붙인 자리표시를 <body> 바로 뒤로 옮긴다
    const m = src.match(/^((?:\{\{(?:banner|ad_top)\}\})+)/);
    if (m) { atBodyStart = m[1]; src = src.slice(m[1].length); }
  }
  // 한 번에 바꾼다 (넣은 값 안의 {{ }} 를 다시 바꾸지 않음). 모르는 자리표시는 지운다.
  const fill = (t) => t.replace(/\{\{\s*([a-z_]+)\s*\}\}/g, (_, k) => (k in map ? map[k] : ''));
  let html = fill(src);
  if (atBodyStart) {
    const b = html.match(/<body[^>]*>/i);
    const add = fill(atBodyStart);
    html = b ? html.slice(0, b.index + b[0].length) + add + html.slice(b.index + b[0].length) : add + html;
  }

  // 기본 모양: 정적 파일 /_app/base.css (재생 바·비주얼라이저·가사 창·방명록 등). 스킨의 <style>보다 먼저 넣어서 스킨이 덮어쓸 수 있게 한다.
  // 3-9: 스킨에 {{hero}} 나 <body class="aml-kit"> 가 있으면 기본 디자인 kit.css 도 (스킨은 색 변수만 정하면 된다)
  const kit = has('hero') || /<body[^>]*\bclass\s*=\s*["'][^"']*\baml-kit\b/i.test(skin);
  const base = `<link rel="stylesheet" href="/_app/base.css?v=${encodeURIComponent(RENDER_VERSION)}">` +
    (kit ? `<link rel="stylesheet" href="/_app/kit.css?v=${encodeURIComponent(RENDER_VERSION)}">` : '');
  const head = html.match(/<head[^>]*>/i);
  if (head) html = html.slice(0, head.index + head[0].length) + base + html.slice(head.index + head[0].length);
  else { const st = html.search(/<style\b/i); html = st >= 0 ? html.slice(0, st) + base + html.slice(st) : base + html; }

  const json = JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .split(String.fromCharCode(0x2028)).join('\\u2028')
    .split(String.fromCharCode(0x2029)).join('\\u2029'); // JSON 안의 줄 구분 문자 처리
  const v = encodeURIComponent(RENDER_VERSION);
  const n = ads ? ` nonce="${NONCE}"` : '';     // 광고를 켰을 때만: 요청마다 바뀌는 nonce
  // 하단 문구(⚙ 관리 링크 포함): 스킨에 {{footer}}가 없으면 맨 아래에 자동으로 붙는다. 스킨은 .aml-adminbar / .aml-footer 로 꾸민다.
  const inject = (has('footer') ? '' : '<div class="aml-adminbar">' + footer + '</div>\n') +
    `<script type="application/json" id="aml-data">${json}</script>\n` +
    `<script src="/_app/strings.js?v=${v}"${n}></script>\n` +
    `<script src="/_app/visitor.js?v=${v}"${n}></script>\n`;
  const i = html.toLowerCase().lastIndexOf('</body>');
  html = i >= 0 ? html.slice(0, i) + inject + html.slice(i) : html + inject;
  if (ads) {
    // 애드센스 스크립트: 프로그램이 만든다(코드 붙여넣기 없음). <head> 안에 둔다.
    const tag = `<script async src="${ADS_SRC}?client=${ads.client}" crossorigin="anonymous"${n}></script>`;
    const h = html.toLowerCase().indexOf('</head>');
    html = h >= 0 ? html.slice(0, h) + tag + html.slice(h) : tag + html;
  }
  return html;
}

// ── 3-19 맨 아래 "Powered by aimusiclist.com" (사용 조건 — 끄는 설정 없음. 스킨은 숨길 수 없다: checkSkin) ──
// 링크: aimusiclist 에 등록됨(site_id) → {우리사이트}/artist/{site_id}, 등록 전 → {우리사이트}/ . 같은 탭(target 없음).
// 우리사이트 주소는 AML_API_BASE 의 origin(기본 https://aimusiclist.com). 글자는 모든 언어에서 같은 영어 원문(고유명사).
export const POWERED_TEXT = 'Powered by aimusiclist.com';
export function poweredUrl(origin, siteId) {
  const o = /^https?:\/\/[^/]+$/.test(origin || '') ? origin : 'https://aimusiclist.com';
  return o + '/' + (typeof siteId === 'string' && /^[a-z0-9_-]{1,64}$/.test(siteId) ? 'artist/' + siteId : '');
}
export function poweredHtml(url) {
  return '<a class="aml-powered" href="' + esc(url || 'https://aimusiclist.com/') + '">' + POWERED_TEXT + '</a>';
}

// 광고 설정 검사: 켜져 있고 게시자 ID가 맞을 때만 사용
function adsConfig(a) {
  if (!a || a.on !== true || !/^ca-pub-\d{16}$/.test(a.client || '')) return null;
  const slot = (x) => (/^\d{6,20}$/.test(x || '') ? x : '');
  return { client: a.client, top: slot(a.top), left: slot(a.left) };
}

// 3-9: 예전 BASE_CSS(인라인 <style id="aml-base">)는 public/_app/base.css 로 옮겼다 (브라우저가 1번 받아 두고 다시 쓴다).

// 3-9 머리 영역 {{hero}}. 글자는 모두 이스케이프. 곡 수·버튼 글자는 방문자 언어로 visitor.js 가 채운다.
export function heroHtml(s, site, n) {
  site = site || {};
  const name = String(s.name || '');
  const pic = /^[0-9a-f]{8}$/.test(site.profile_v || '')
    ? `<img class="aml-profile" src="/p?v=${site.profile_v}" alt="" width="200" height="200">`
    : `<span class="aml-profile is-letter" style="--aml-letter-c:${letterColor(name)}" aria-hidden="true">${esc(firstLetter(name))}</span>`;
  const c = /^#[0-9a-f]{6}$/.test(site.profile_color || '') ? site.profile_color : '';
  const artist = s.artist_name && s.artist_name !== name ? `<span class="aml-hero-artist">${esc(s.artist_name)}</span>` : '';
  const desc = s.description ? `<div class="aml-hero-desc"><p>${esc(s.description)}</p><button type="button" class="aml-hero-more"></button></div>` : '';
  const soc = socialsHtml(site.socials);
  return `<header class="aml-hero${soc ? ' has-soc' : ''}"${c ? ` style="--aml-hero-c:${c}"` : ''}><div class="aml-hero-in">${pic}` +
    `<h1 class="aml-hero-name">${esc(name)}</h1><p class="aml-hero-meta">${artist}<span class="aml-hero-count"></span></p>${desc}${soc}` +
    (n ? `<div class="aml-hero-actions" id="aml-hero-actions"></div>` : '') + `</div></header>`;   // 곡이 없으면 버튼 자리도 없음
}
// 프로필이 없을 때: 사이트 이름 첫 글자 동그라미. 색은 이름 해시로 정한 차분한 색 (흰 글자 대비 4.5:1 이상, tools/contrast-check.js)
export function firstLetter(name) { const a = Array.from(String(name).trim()); return a.length ? a[0].toUpperCase() : '♪'; }
export function letterColor(name) {
  let h = 0x811c9dc5;
  for (const ch of String(name)) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return `hsl(${h % 360} 30% 34%)`;
}

// ── 스킨 검사 (B의 스킨 업로드에서 사용. 규격: docs/스킨규격.md) ─────────────────
export const SKIN_MAX_BYTES = 100 * 1024;
export const SKIN_REQUIRED = ['menu', 'content', 'player'];
const SKIN_FORBIDDEN = [
  [/<\s*script\b/i, 'script'],
  [/<[^>]*\son[a-z]+\s*=/i, 'on*='],                        // onclick= 등 이벤트 속성
  [/(javascript|vbscript)\s*:/i, 'javascript:'],
  [/<\s*(iframe|frame|frameset|object|embed|applet)\b/i, 'iframe/object/embed'],
  [/<\s*(form|input|button|textarea|select)\b/i, 'form/input'],
  [/<\s*(base|link)\b/i, 'base/link'],
  [/http-equiv/i, 'meta http-equiv'],
  [/@import/i, '@import'],
  [/url\(\s*['"]?\s*(https?:)?\/\//i, 'external url()'],
  [/\b(src|srcset|poster|data)\s*=\s*['"]?\s*(https?:)?\/\//i, 'external src'],
  [/expression\s*\(/i, 'expression('],
];

// 통과하면 null, 아니면 { code, params } (오류 코드는 연동규약 7장 형식)
export function checkSkin(html) {
  if (typeof html !== 'string' || !html.trim()) return { code: 'err.skin.empty', params: {} };
  const bytes = new TextEncoder().encode(html).length;
  if (bytes > SKIN_MAX_BYTES) return { code: 'err.skin.too_large', params: { max_kb: SKIN_MAX_BYTES / 1024 } };
  for (const k of SKIN_REQUIRED) {
    const n = (html.match(new RegExp('\\{\\{\\s*' + k + '\\s*\\}\\}', 'g')) || []).length;
    if (n !== 1) return { code: 'err.skin.placeholder', params: { name: '{{' + k + '}}' } };
  }
  for (const [re, what] of SKIN_FORBIDDEN) {
    if (re.test(html)) return { code: 'err.skin.forbidden', params: { what } };
  }
  if (hidesPowered(html)) return { code: 'err.skin.forbidden', params: { what: POWERED_HIDDEN } };
  return null;
}

// 3-19: 맨 아래 줄(.aml-footer · .aml-adminbar · .aml-powered)을 숨기는 스킨인지 (php page.php hidesPowered 와 같은 규칙)
// 잡는 것: {{footer}} 를 주석·<head>·<template>·<noscript>·<style>·<title> 안에 둔 것, hidden·display:none 인 요소 바로 안에 둔 것,
// <style> 에서 그 줄을 display:none · visibility:hidden · opacity:0 · font-size:0 으로 만든 것.
// ⚙ 관리 링크·하단 문구 글자만 숨기는 규칙(.aml-admin-link 등을 가리키는 선택자)은 괜찮다. 모든 경우를 잡지는 못한다 — 스킨규격.md "필수".
export const POWERED_HIDDEN = 'hiding "Powered by aimusiclist.com"';
const PW_PLACE = [
  /<!--(?:(?!-->)[\s\S])*\{\{\s*footer\s*\}\}/,
  /<(head|template|noscript|style|title)\b[^>]*>(?:(?!<\/\1\s*>)[\s\S])*\{\{\s*footer\s*\}\}/i,
  /<[a-z][^>]*(\shidden(?=[\s>=/])|\sstyle\s*=\s*["'][^"']*(display\s*:\s*none|visibility\s*:\s*(hidden|collapse)))[^>]*>\s*\{\{\s*footer\s*\}\}/i,
];
const PW_SEL = /\.aml-(footer|adminbar|powered)(?![\w-])([^{}]*)\{([^}]*)\}/gi;
const PW_OK = /aml-admin-link|aml-admin-text|aml-footer-text|aml-mm/i;
const PW_HIDE = /(^|[;{\s])(display\s*:\s*none|visibility\s*:\s*(hidden|collapse)|opacity\s*:\s*(0+(\.0*)?|\.0+)\s*(!\s*important\s*)?(;|$)|font-size\s*:\s*(0+(\.0*)?|\.0+)(px|em|rem|%)?\s*(!\s*important\s*)?(;|$))/i;
export function hidesPowered(html) {
  if (PW_PLACE.some((re) => re.test(html))) return true;
  for (const m of String(html).matchAll(PW_SEL)) {
    if (m[1].toLowerCase() !== 'powered' && PW_OK.test(m[2]) && !/aml-powered/i.test(m[2])) continue;
    if (PW_HIDE.test(m[3])) return true;
  }
  return false;
}

// ── 스킨 불러오기: 기본 스킨은 정적 파일(public/_skins), 직접 올린 스킨은 R2(skins/{이름}.html) ──
async function loadSkin(env, request, name) {
  if (!BUILTIN_SKINS.includes(name)) {
    const obj = await env.BUCKET.get('skins/' + name + '.html');
    if (obj) return obj.text();
    name = 'light'; // 지워졌으면 기본 스킨
  }
  return assetText(env, request, '/_skins/' + name) || '<!doctype html><html><body>{{menu}}{{content}}{{player}}</body></html>';
}

// 정적 파일 읽기 (ASSETS 바인딩). html_handling 기본값 때문에 확장자 없는 주소를 먼저 시도한다.
export async function assetText(env, request, path) {
  for (const p of [path, path + '.html', path + '.json']) {
    try {
      const r = await env.ASSETS.fetch(new Request(new URL(p, request.url)));
      if (r.ok) return await r.text();
    } catch (_) { /* 다음 후보 */ }
  }
  return null;
}

// ── 장르 이름: 우리사이트 genres.json → 실패하면 내장 샘플 ────────────────────────
// 페이지를 다시 만들 때(=catalog·메뉴가 바뀔 때)만 호출되므로 요청 수에 거의 영향이 없다.
async function loadGenreNames(env, request, keys) {
  let idx = null;
  const base = (env.AML_API_BASE || '').replace(/\/+$/, '');
  if (base.startsWith('https://')) {
    try {
      const r = await fetch(base + '/genres.json', { signal: AbortSignal.timeout(3000) });
      if (r.ok) idx = genreIndex(await r.json());
    } catch (_) { /* 샘플로 */ }
  }
  if (!idx) idx = genreIndex(safeJson(await assetText(env, request, '/_app/genres-sample') || 'null'));
  return pickGenreNames(idx, keys);
}

// 우리사이트 GET /api/v1/genres.json 형식 (2-1·2-2에서 확정):
// { "schema":"1.0", "genres":[ { "key":"rnb", "names":{"en":"R&B","ko":"알앤비"},
//     "subs":[ { "key":"soul", "names":{...} } ] } ] }
// → { 키: { names:{언어:이름}, main:메인키, is_main:bool } } 로 펼친다. 형식이 틀리면 null.
// (관리 화면 admin.js의 AML.genreIndex()도 같은 규칙. 형식이 바뀌면 두 곳을 함께 고친다)
export function genreIndex(g) {
  if (!g || !Array.isArray(g.genres) || !g.genres.length) return null;
  const idx = {};
  const names = n => (n && typeof n === 'object' ? n : {});
  for (const m of g.genres) {
    if (!m || !KEY_RE.test(m.key || '')) continue;
    idx[m.key] = { names: names(m.names), main: m.key, is_main: true };
    for (const s of Array.isArray(m.subs) ? m.subs : []) {
      if (s && KEY_RE.test(s.key || '') && !idx[s.key]) idx[s.key] = { names: names(s.names), main: m.key, is_main: false };
    }
  }
  return Object.keys(idx).length ? idx : null;
}

// 페이지에 넣을 이름표: { 키: { en, ko, ... } } — 쓰인 키만
export function pickGenreNames(idx, keys) {
  const out = {};
  for (const k of keys) {
    const n = (idx && idx[k] && idx[k].names) || {};
    out[k] = {};
    for (const lang of Object.keys(n)) if (typeof n[lang] === 'string' && n[lang]) out[k][lang] = n[lang];
    if (!out[k].en) out[k].en = k; // 이름이 없으면 키 그대로
  }
  return out;
}

function usedGenreKeys(catalog, ui) {
  const set = new Set();
  for (const t of catalog.tracks) for (const k of t.genres) set.add(k);
  for (const m of ui.menus) { set.add(m.main); if (m.sub) set.add(m.sub); }
  return [...set];
}

// ── 데이터 정리 (잘못된 값이 와도 화면이 깨지지 않게) ─────────────────────────────
const KEY_RE = /^[a-z0-9_-]{1,64}$/;

export function normalizeCatalog(c) {
  c = c && typeof c === 'object' ? c : {};
  const site = c.site || {};
  const tracks = (Array.isArray(c.tracks) ? c.tracks : [])
    .filter(t => t && KEY_RE.test(t.id) && Array.isArray(t.genres) && t.genres.length)
    .map(t => ({ ...t, genres: t.genres.filter(k => KEY_RE.test(k)).slice(0, 3), duration: t.duration | 0 }));
  const ids = new Set(tracks.map(t => t.id));
  const albums = (Array.isArray(c.albums) ? c.albums : [])
    .filter(a => a && KEY_RE.test(a.id) && Array.isArray(a.track_ids))
    .map(a => ({ ...a, track_ids: a.track_ids.filter(id => ids.has(id)) }));
  return {
    site: {
      name: String(site.name || 'My Music'),
      artist_name: String(site.artist_name || ''),
      description: String(site.description || ''),
      default_lang: /^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(site.default_lang || '') ? site.default_lang : 'en',
      // 3-6 (값이 없으면 그 기능만 빠진다)
      banner: site.banner && typeof site.banner === 'object' ? site.banner : null,
      profile_v: typeof site.profile_v === 'string' ? site.profile_v : '',
      profile_color: typeof site.profile_color === 'string' && /^#[0-9a-f]{6}$/.test(site.profile_color) ? site.profile_color : '',
      footer: typeof site.footer === 'string' ? site.footer.slice(0, 200) : '',
      ads: site.ads && typeof site.ads === 'object' ? site.ads : null,
      guestbook: site.guestbook !== false,
      // 3-7 SNS: 키·주소 형식이 맞는 것만
      socials: (Array.isArray(site.socials) ? site.socials : [])
        .filter(x => x && KEY_RE.test(x.key || '') && /^https:\/\/[^\s"'<>`\\]+$/.test(x.url || '') && KEY_RE.test(x.icon || ''))
        .slice(0, 10).map(x => ({ key: x.key, name: String(x.name || x.key).slice(0, 40), icon: x.icon, url: x.url })),
    },
    tracks, albums,
  };
}

// 3-7: SNS 아이콘 줄 HTML ({{socials}} 자리, 그리고 방문자 화면 #/links 와 같은 모양)
export function socialsHtml(list, tag) {
  if (!list || !list.length) return '';
  const item = (x) => `<a class="aml-social is-${x.key}" href="${esc(x.url)}" target="_blank" rel="noopener" title="${esc(x.name)}">` +
    `<svg class="aml-social-icon" aria-hidden="true" focusable="false"><use href="${SOCIAL_SPRITE}#${x.icon}"></use></svg>` +
    `<span class="aml-social-name">${esc(x.name)}</span></a>`;
  return tag === 'ul'
    ? '<ul class="aml-socials">' + list.map(x => '<li>' + item(x) + '</li>').join('') + '</ul>'
    : '<div class="aml-socials">' + list.map(item).join('') + '</div>';
}

export function normalizeUi(u) {
  u = u && typeof u === 'object' ? u : {};
  const skins = (Array.isArray(u.skins) ? u.skins : []).filter(n => /^[a-z0-9_-]{1,32}$/.test(n));
  const skin = typeof u.skin === 'string' && (BUILTIN_SKINS.includes(u.skin) || skins.includes(u.skin)) ? u.skin : 'light';
  const menus = (Array.isArray(u.menus) ? u.menus : [])
    .filter(m => m && KEY_RE.test(m.id || '') && KEY_RE.test(m.main || '') && (!m.sub || KEY_RE.test(m.sub)))
    .slice(0, 30)
    .map(m => ({ id: m.id, label: String(m.label || '').slice(0, 30), main: m.main, sub: m.sub || '' }));
  // 3-10: 갤러리에서 설치한 스킨 기록 { id: { version, source:"gallery", installed_at, …모르는 키 보존 } } — 목록에 있는 스킨만
  const sm = u.skins_meta && typeof u.skins_meta === 'object' && !Array.isArray(u.skins_meta) ? u.skins_meta : {};
  const skins_meta = {};
  for (const n of skins) {
    const x = sm[n];
    if (x && typeof x === 'object' && !Array.isArray(x) && typeof x.version === 'string' && /^\d{1,6}(\.\d{1,6}){0,3}$/.test(x.version)) skins_meta[n] = { ...x };
  }
  // 3-10: 직전 스킨 ([이전 스킨으로 되돌리기] 한 번 클릭). 없어진 스킨이면 비운다
  const prev_skin = typeof u.prev_skin === 'string' && u.prev_skin !== skin && (BUILTIN_SKINS.includes(u.prev_skin) || skins.includes(u.prev_skin)) ? u.prev_skin : '';
  return { skin, skins, menus, skins_meta, prev_skin };
}

function safeJson(s) { try { return JSON.parse(s); } catch (_) { return null; } }
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}


// ══ 관리 API (B·C) ════════════════════════════════════════════════════════════
const SKIN_NAME_RE = /^[a-z0-9_-]{1,32}$/;

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
export function jerr(code, status, params = {}) { return json({ ok: false, error: { code, params } }, status); }

// raw(3-10) = 저장된 그대로 — 저장할 때 모르는 키(다른 판·P-1이 넣은 값)를 지우지 않으려고 같이 들고 다닌다
export async function readUi(env) {
  const obj = await env.BUCKET.get(UI_KEY);
  const raw = obj ? safeJson(await obj.text()) : null;
  return { ui: normalizeUi(raw), raw: raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {}, etag: obj ? obj.etag : '' };
}

// ui.json 고치기: 화면이 본 etag와 지금 etag가 다르면 409. 저장도 조건부(동시에 두 곳에서 저장 방지).
export async function updateUi(env, clientEtag, change) {
  const cur = await readUi(env);
  if (clientEtag != null && clientEtag !== cur.etag) return { conflict: true };
  const next = change(cur.ui);
  if (next.error) return next;
  const opts = { httpMetadata: { contentType: 'application/json' } };
  if (cur.etag) opts.onlyIf = { etagMatches: cur.etag };
  const put = await env.BUCKET.put(UI_KEY, JSON.stringify({ ...cur.raw, ...next }), opts);   // 3-10: 모르는 키 보존
  if (!put) return { conflict: true };
  memo = null; // 이 Worker에서는 바로 반영 (다른 곳은 최대 30초)
  return { ui: next, etag: put.etag };
}

export function uiResponse(env, ui, etag, extra) {
  return json({
    ok: true, etag, skin: ui.skin, skins: ui.skins, builtin_skins: BUILTIN_SKINS, menus: ui.menus,
    skins_meta: ui.skins_meta, prev_skin: ui.prev_skin,   // 3-10
    // 3-10: 스킨 둘러보기 — 관리 화면 브라우저가 이 목록을 직접 읽는다(Worker 거치지 않음). spec = 이 사이트가 아는 스킨 규격 판
    gallery: { index_url: skinIndexUrl(env), spec: SKIN_SPEC },
    api_base: String(env.AML_API_BASE || '').replace(/\/+$/, ''), // 관리 화면이 장르 목록을 읽을 곳
    limits: { skin_kb: SKIN_MAX_BYTES / 1024, menus: 30, menu_label: 30, skins: MAX_SKINS },
    ...(extra || {}),
  });
}

async function adminGetUi(env) {
  const { ui, etag } = await readUi(env);
  return uiResponse(env, ui, etag);
}

async function readJsonBody(request) {
  try { return await request.json(); } catch (_) { return null; }
}

async function adminSelectSkin(request, env) {
  const b = await readJsonBody(request);
  if (!b || typeof b.name !== 'string') return jerr('err.skin.not_found', 404);
  const r = await updateUi(env, b.etag, ui => {
    if (!BUILTIN_SKINS.includes(b.name) && !ui.skins.includes(b.name)) return { error: 'err.skin.not_found' };
    return { ...ui, skin: b.name, prev_skin: b.name !== ui.skin ? ui.skin : ui.prev_skin };   // 3-10: 직전 스킨 기억 (되돌리기)
  });
  if (r.error) return jerr(r.error, 404);
  if (r.conflict) return jerr('err.conflict', 409);
  return uiResponse(env, r.ui, r.etag);
}

async function adminUploadSkin(request, env, name) {
  if (!SKIN_NAME_RE.test(name)) return jerr('err.skin.name_invalid', 400);
  if (BUILTIN_SKINS.includes(name)) return jerr('err.skin.builtin', 400);
  const len = +(request.headers.get('Content-Length') || 0);
  if (len > SKIN_MAX_BYTES) return jerr('err.skin.too_large', 413, { max_kb: SKIN_MAX_BYTES / 1024 });
  const html = await request.text();
  const bad = checkSkin(html);
  if (bad) return jerr(bad.code, 422, bad.params);
  await env.BUCKET.put('skins/' + name + '.html', html, { httpMetadata: { contentType: 'text/html; charset=utf-8' } });
  // 목록에 이름 추가 (같은 이름이면 덮어쓰기). 쓰고 있는 스킨이면 다음 방문부터 새 내용.
  // 3-10: 직접 올리면 갤러리 기록은 지운다(이제 내 스킨 — 새 버전 안내 없음)
  const r = await updateUi(env, null, ui => {
    const skins_meta = { ...ui.skins_meta }; delete skins_meta[name];
    return { ...ui, skins: ui.skins.includes(name) ? ui.skins : ui.skins.concat(name).slice(0, MAX_SKINS), skins_meta };
  });
  if (r.conflict) return jerr('err.conflict', 409);
  return uiResponse(env, r.ui, r.etag);
}

async function adminDeleteSkin(env, name) {
  if (BUILTIN_SKINS.includes(name)) return jerr('err.skin.builtin', 400);
  if (!SKIN_NAME_RE.test(name)) return jerr('err.skin.not_found', 404);
  const r = await updateUi(env, null, ui => {
    const skins_meta = { ...ui.skins_meta }; delete skins_meta[name];   // 3-10
    return { ...ui, skins: ui.skins.filter(n => n !== name), skin: ui.skin === name ? 'light' : ui.skin, skins_meta,
      prev_skin: ui.prev_skin === name ? '' : ui.prev_skin };
  });
  if (r.conflict) return jerr('err.conflict', 409);
  await env.BUCKET.delete('skins/' + name + '.html');
  return uiResponse(env, r.ui, r.etag);
}

// 메뉴 저장 (C). 장르 키가 우리사이트 목록에 있는지는 화면이 고르게 해서 보장한다(서버는 형식만 검사).
async function adminSaveMenus(request, env) {
  const b = await readJsonBody(request);
  if (!b || !Array.isArray(b.menus)) return jerr('err.menu.invalid', 422);
  if (b.menus.length > 30) return jerr('err.menu.too_many', 422, { max: 30 });
  const seen = new Set();
  for (const m of b.menus) {
    if (!m || !KEY_RE.test(m.id || '') || seen.has(m.id) || !KEY_RE.test(m.main || '') || (m.sub && !KEY_RE.test(m.sub))
        || (m.label != null && (typeof m.label !== 'string' || m.label.length > 30))) {
      return jerr('err.menu.invalid', 422);
    }
    seen.add(m.id);
  }
  const r = await updateUi(env, typeof b.etag === 'string' ? b.etag : null, ui => normalizeUi({ ...ui, menus: b.menus }));
  if (r.conflict) return jerr('err.conflict', 409);
  return uiResponse(env, r.ui, r.etag);
}

// 비공개 곡 미리듣기: 공개 여부와 상관없이 관리자에게만 음원을 준다.
async function adminPreviewAudio(env, id) {
  const obj = await env.BUCKET.get('audio/' + id);
  if (!obj) return jerr('err.track.no_audio', 404);
  return new Response(obj.body, {
    headers: {
      'Content-Type': (obj.httpMetadata && obj.httpMetadata.contentType) || 'audio/mpeg',
      'Content-Length': String(obj.size), 'Cache-Control': 'no-store',
    },
  });
}
