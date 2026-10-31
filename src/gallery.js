// src/gallery.js — 스킨 갤러리 미리보기·설치 (채팅 3-10)
// -----------------------------------------------------------------------------
// 스킨 목록(meshmelo.com/skins/index.json, schema skin-index-1)은 관리 화면 브라우저가 직접 읽는다(Worker 요청 0).
// Worker가 밖을 부르는 것은 관리자가 [미리보기]·[적용]·[업데이트]를 누를 때만이다.
//   POST /api/admin/skins/preview  {id}                     → 받아서 검사 → 저장하지 않고 렌더한 HTML {ok, html, skin}
//   POST /api/admin/skins/install  {id, apply?, overwrite?}  → 받아서 검사 → R2 skins/{id}.html + ui.json skins_meta → (기본) 바로 적용
// 받는 규칙 (SSRF 방지): 스킨 주소는 목록에 적힌 것만, 목록과 같은 프로토콜·호스트(포트 포함)만, 리다이렉트는 따라가지 않음(3xx = 거부),
// 크기 100KB, 시간 5초, sha256 일치, 그다음 업로드 때와 같은 checkSkin(). 오류에는 내부 정보(주소·응답 내용)를 넣지 않는다.
// 형식: docs/스킨규격.md 8장, 서버 약속: docs/개발자_참고.md 7-4 (P-1 PHP판이 같은 것을 구현)
// -----------------------------------------------------------------------------

import { checkSkin, renderSkin, buildPageData, readUi, updateUi, uiResponse, jerr, json, assetText, SKIN_MAX_BYTES, BUILTIN_SKINS, MAX_SKINS } from './ui.js';

export const SKIN_SPEC = '1.5';                                  // 이 사이트가 아는 스킨 규격 판. 이보다 높은 spec 은 설치하지 않는다
export const SKIN_INDEX_DEFAULT = 'https://meshmelo.com/skins/index.json';
const INDEX_MAX = 512 * 1024;                                    // 목록 크기 상한
const TIMEOUT_MS = 5000;
const ID_RE = /^[a-z0-9-]{1,32}$/;                               // 스킨규격 8장 id
const VER_RE = /^\d{1,6}(\.\d{1,6}){0,3}$/;
const LOCAL_HOST = /^(localhost|127\.0\.0\.1|\[::1\])$/;         // 내 컴퓨터 시험용(가짜 스킨 서버)만 http 허용

// 목록 주소: wrangler.toml [vars] SKIN_INDEX_URL (없으면 meshmelo). https 만(내 컴퓨터 시험은 http://localhost 도).
export function skinIndexUrl(env) {
  const raw = String((env && env.SKIN_INDEX_URL) || SKIN_INDEX_DEFAULT).trim();
  try {
    const u = new URL(raw);
    if (u.username || u.password) return '';
    if (u.protocol === 'https:' || (u.protocol === 'http:' && LOCAL_HOST.test(u.hostname))) return u.href;
  } catch (_) { /* 잘못된 주소 */ }
  return '';
}

// "1.10" > "1.9" 처럼 숫자로 비교. 형식이 틀리면 NaN 취급(=비교 불가)
export function cmpVer(a, b) {
  const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] || 0) - (y[i] || 0);
    if (d) return d > 0 ? 1 : -1;
  }
  return 0;
}

class GErr extends Error { constructor(code, status, params) { super(code); this.code = code; this.status = status; this.params = params || {}; } }

// 바깥 주소 1개 받기: 리다이렉트 금지 · 크기 상한 · 5초. 실패하면 GErr(내부 정보 없음)
async function getBytes(url, max, errCode) {
  let r;
  try {
    r = await fetch(url, { method: 'GET', redirect: 'manual', signal: AbortSignal.timeout(TIMEOUT_MS), headers: { Accept: '*/*' } });
  } catch (_) { throw new GErr(errCode, 502); }
  if (r.status >= 300 && r.status < 400) { try { await r.body?.cancel(); } catch (_) { /* */ } throw new GErr('err.gallery.bad_url', 502); }
  if (r.status !== 200 || !r.body) { try { await r.body?.cancel(); } catch (_) { /* */ } throw new GErr(errCode, 502); }
  const tooBig = () => new GErr(max === SKIN_MAX_BYTES ? 'err.skin.too_large' : errCode, max === SKIN_MAX_BYTES ? 413 : 502, max === SKIN_MAX_BYTES ? { max_kb: SKIN_MAX_BYTES / 1024 } : {});
  if (+(r.headers.get('Content-Length') || 0) > max) { try { await r.body.cancel(); } catch (_) { /* */ } throw tooBig(); }
  const reader = r.body.getReader();
  const parts = []; let n = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      n += value.byteLength;
      if (n > max) { try { await reader.cancel(); } catch (_) { /* */ } throw tooBig(); }
      parts.push(value);
    }
  } catch (e) { if (e instanceof GErr) throw e; throw new GErr(errCode, 502); }
  const out = new Uint8Array(n); let o = 0;
  for (const p of parts) { out.set(p, o); o += p.byteLength; }
  return out;
}

async function sha256Hex(bytes) {
  const d = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  return Array.from(d, b => b.toString(16).padStart(2, '0')).join('');
}

// 목록에서 id 한 개 찾기 → 그 스킨 파일을 받아 모든 검사를 통과한 HTML 을 돌려준다
export async function fetchGallerySkin(env, id) {
  const idxUrl = skinIndexUrl(env);
  if (!idxUrl) throw new GErr('err.gallery.unavailable', 503);
  let idx;
  try { idx = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(await getBytes(idxUrl, INDEX_MAX, 'err.gallery.unavailable'))); }
  catch (e) { if (e instanceof GErr) throw e; throw new GErr('err.gallery.unavailable', 502); }
  if (!idx || idx.schema !== 'skin-index-1' || !Array.isArray(idx.skins)) throw new GErr('err.gallery.unavailable', 502);
  const item = idx.skins.find(s => s && s.id === id);
  if (!item) throw new GErr('err.gallery.not_found', 404);
  if (!VER_RE.test(String(item.version || '')) || !/^[0-9a-fA-F]{64}$/.test(String(item.sha256 || ''))) throw new GErr('err.gallery.bad_file', 422);
  if (!VER_RE.test(String(item.spec || '')) || cmpVer(item.spec, SKIN_SPEC) > 0) throw new GErr('err.gallery.spec_newer', 422, { spec: String(item.spec || '').slice(0, 12) });

  // 주소: 목록에 적힌 것만, 목록과 같은 프로토콜·호스트(포트 포함)
  let h;
  try { h = new URL(String(item.html || ''), idxUrl); } catch (_) { throw new GErr('err.gallery.bad_url', 422); }
  const base = new URL(idxUrl);
  if (h.protocol !== base.protocol || h.host !== base.host || h.username || h.password) throw new GErr('err.gallery.bad_url', 422);

  const bytes = await getBytes(h.href, SKIN_MAX_BYTES, 'err.gallery.unavailable');
  if (await sha256Hex(bytes) !== String(item.sha256).toLowerCase()) throw new GErr('err.gallery.hash', 422);
  let html;
  try { html = new TextDecoder('utf-8', { fatal: true }).decode(bytes); } catch (_) { throw new GErr('err.gallery.bad_file', 422); }
  const bad = checkSkin(html);
  if (bad) throw new GErr(bad.code, 422, bad.params);
  return { html, item: { id, version: String(item.version) } };
}

function bodyId(b) {
  const id = b && typeof b.id === 'string' ? b.id : '';
  return ID_RE.test(id) && !BUILTIN_SKINS.includes(id) ? id : '';
}
function gerr(e) { return e instanceof GErr ? jerr(e.code, e.status, e.params) : jerr('err.server', 500); }
async function readBody(request) { try { return await request.json(); } catch (_) { return null; } }

// ── 미리보기: 저장하지 않는다 (R2 쓰기 0). 이 사이트의 실제 곡·프로필로 그린 HTML ──
export async function adminSkinPreview(request, env) {
  const id = bodyId(await readBody(request));
  if (!id) return jerr('err.gallery.not_found', 404);
  try {
    const got = await fetchGallerySkin(env, id);
    const { data, cs } = await buildPageData(env, request);
    // 광고는 미리보기에서 그리지 않는다. 미리보기 표시(관리 화면 iframe 안에서만 보임)
    let html = renderSkin(got.html, data, { ...cs, ads: null });
    // sandbox iframe 은 다른 출처라 아이콘 파일의 <use> 가 막힌다 → 아이콘 묶음 2개를 페이지 안에 넣고(id 앞에 i-·s-) preview.js 가 가리키는 곳을 바꾼다
    const sprite = async (path, pre) => String(await assetText(env, request, path) || '').replace(/<\?xml[^>]*>|<!--[\s\S]*?-->/g, '').replace(/\bid="([^"]+)"/g, `id="${pre}$1"`);
    const inline = '<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">' + await sprite('/_app/icons.svg', 'i-') + await sprite('/_app/socials.svg', 's-') + '</div>\n' +
      '<script src="/_app/preview.js?v=1"></script>\n';
    const at = html.indexOf('<script type="application/json" id="aml-data">');
    html = at >= 0 ? html.slice(0, at) + inline + html.slice(at) : html + inline;
    return json({ ok: true, html, skin: got.item }, 200);
  } catch (e) { return gerr(e); }
}

// ── 설치·적용 (클릭 한 번) ──
export async function adminSkinInstall(request, env) {
  const b = await readBody(request);
  const id = bodyId(b);
  if (!id) return jerr('err.gallery.not_found', 404);
  const apply = !b || b.apply !== false;                // 기본 = 바로 적용
  const overwrite = !!(b && b.overwrite === true);
  // 같은 이름으로 직접 올린 스킨이 있으면 덮어쓰기 전에 확인 (화면이 overwrite:true 로 다시 보낸다)
  const pre = (await readUi(env)).ui;
  const manual = (ui) => ui.skins.includes(id) && !(ui.skins_meta[id] && ui.skins_meta[id].source === 'gallery');
  if (manual(pre) && !overwrite) return jerr('err.skin.exists', 409, { name: id });
  if (!pre.skins.includes(id) && pre.skins.length >= MAX_SKINS) return jerr('err.skin.too_many', 422, { max: MAX_SKINS });
  let got;
  try { got = await fetchGallerySkin(env, id); } catch (e) { return gerr(e); }
  await env.BUCKET.put('skins/' + id + '.html', got.html, { httpMetadata: { contentType: 'text/html; charset=utf-8' } });
  const r = await updateUi(env, null, ui => {
    if (!ui.skins.includes(id) && ui.skins.length >= MAX_SKINS) return { error: 'err.skin.too_many' };
    const skins = ui.skins.includes(id) ? ui.skins : ui.skins.concat(id);
    const skins_meta = { ...ui.skins_meta, [id]: { ...(ui.skins_meta[id] || {}), version: got.item.version, source: 'gallery', installed_at: new Date().toISOString() } };
    const next = { ...ui, skins, skins_meta };
    if (apply && ui.skin !== id) { next.prev_skin = ui.skin; next.skin = id; }
    return next;
  });
  if (r.error) return jerr(r.error, 422, { max: MAX_SKINS });
  if (r.conflict) return jerr('err.conflict', 409);
  return uiResponse(env, r.ui, r.etag, { installed: { id, version: got.item.version, applied: r.ui.skin === id } });
}
