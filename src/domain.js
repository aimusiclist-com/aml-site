// src/domain.js — 내 도메인 연결 (연동규약 2-4, 결정사항 D-21, 채팅 3-6)
// -----------------------------------------------------------------------------
// 순서 (관리 화면 "내 도메인" → POST /api/admin/domain {domain})
//   1) 주소 정리: "mymusic.com" → "https://mymusic.com" (경로·쿼리 없는 주소만)
//   2) 그 주소로 이 Worker가 응답하는지 확인: {새 주소}/.well-known/aimusiclist/verify?c=무작위 를 불러
//      HMAC(site_secret, "verify:"+c) 가 맞는지 본다. (관리 화면을 새 주소로 열었으면 확인 생략)
//   3) aimusiclist에 등록된 사이트면 POST {api}/sites/{site_id}/url (Bearer site_secret) → 우리사이트가 새 주소에서 다시 확인
//   4) 성공하면 meta/aml.json 의 origin·domain 을 새 주소로 → catalog 다시 만들기 + ping (index.js)
//   5) 그 뒤 workers.dev 로 오는 방문자 화면(/)만 새 주소로 301. /a/ /c/ /i/ /l/ /p, 관리 화면은 옛 주소에서도 그대로.
// -----------------------------------------------------------------------------
import { apiBase, fail, hmacHex, randomHex } from './common.js';
import { loadAml } from './aml.js';

const HOST_RE = /^(?=.{4,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{2,63}|xn--[a-z0-9-]{1,59})$/;

// 로컬 시험(우리사이트 주소가 http://)일 때만 http://127.0.0.1:8787 같은 주소를 받는다
export function normalizeDomain(input, env) {
  let s = String(input == null ? '' : input).trim();
  if (!s) fail(400, 'err.domain.invalid');
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(s)) s = 'https://' + s;
  let u;
  try { u = new URL(s); } catch { fail(400, 'err.domain.invalid'); }
  const dev = apiBase(env).startsWith('http://');
  if (u.protocol !== 'https:' && !(dev && u.protocol === 'http:')) fail(400, 'err.domain.invalid');
  if (u.username || u.password || (u.pathname && u.pathname !== '/') || u.search || u.hash) fail(400, 'err.domain.invalid');
  if (!dev && (u.port || !HOST_RE.test(u.hostname))) fail(400, 'err.domain.invalid');
  return u.origin;
}

// 새 주소가 이 Worker로 오는지 확인. 결과 { ok:true } 또는 { ok:false, code }
export async function reachCheck(env, newOrigin, requestOrigin, secret) {
  if (newOrigin === requestOrigin) return { ok: true, same: true };
  const c = randomHex(16);
  let res;
  try {
    res = await fetch(newOrigin + '/.well-known/aimusiclist/verify?c=' + c, {
      redirect: 'manual', headers: { accept: 'application/json' }, signal: AbortSignal.timeout(8000),
    });
  } catch {
    return { ok: false, code: 'err.domain.not_reached' };
  }
  let data = null;
  try { data = await res.json(); } catch {}
  if (!res.ok || !data || typeof data.proof !== 'string') return { ok: false, code: 'err.domain.not_reached', params: { status: res.status } };
  if (data.proof !== await hmacHex(secret, 'verify:' + c)) return { ok: false, code: 'err.domain.other_site' };
  return { ok: true };
}

// 우리사이트에 주소 변경 요청. 결과 { ok:true, changed } 또는 { ok:false, code, params }
export async function requestUrlChange(env, siteId, secret, newOrigin) {
  let res, data = null;
  try {
    res = await fetch(apiBase(env) + '/sites/' + encodeURIComponent(siteId) + '/url', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + secret, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({ url: newOrigin }),
      signal: AbortSignal.timeout(20000), // 우리사이트가 그 사이 새 주소의 verify(5초)를 부른다
    });
  } catch {
    return { ok: false, code: 'err.aml.unreachable', params: {} };
  }
  try { data = await res.json(); } catch {}
  if (res.ok && data && data.ok !== false) return { ok: true, changed: data.changed !== false };
  return {
    ok: false,
    code: (data && data.error && data.error.code) || (res.status === 404 ? 'err.aml.not_ready' : 'err.aml.http'),
    params: (data && data.error && data.error.params) || { status: res.status },
  };
}

// 방문자 화면 301: 내 도메인을 연결한 뒤 workers.dev 주소로 / 를 열면 새 주소로 보낸다.
// (로컬 시험용으로 AML_DEV_OLD_HOST 에 적은 호스트도 "옛 주소"로 친다)
export async function visitorRedirect(env, url) {
  const { data } = await loadAml(env);
  if (!data || !data.domain) return null;
  let target;
  try { target = new URL(data.domain); } catch { return null; }
  if (target.host === url.host || /\.workers\.dev$/i.test(target.hostname)) return null;
  const old = /\.workers\.dev$/i.test(url.hostname) || (env.AML_DEV_OLD_HOST && url.host === env.AML_DEV_OLD_HOST);
  if (!old) return null;
  return new Response(null, { status: 301, headers: { location: target.origin + url.pathname + url.search, 'cache-control': 'public, max-age=3600' } });
}
