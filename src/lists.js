// src/lists.js — 곡 언어·SNS 목록과 검사 (연동규약 v1.2 부록 A·B, 채팅 3-7)
// -----------------------------------------------------------------------------
// 목록 원본은 정적 파일 한 곳: public/_app/song-langs.json, public/_app/socials.json
//   - 서버(이 파일)는 배포 때 함께 묶어 들인다(요청마다 읽지 않음 → CPU·R2 요청 없음).
//   - 관리 화면은 같은 파일을 /_app/… 주소로 읽는다(정적 파일 = 무료).
//   → 언어나 SNS를 늘리려면 그 JSON 파일에 한 줄만 추가하면 된다.
// -----------------------------------------------------------------------------
import SONG_LANGS_FILE from '../public/_app/song-langs.json';
import SOCIALS_FILE from '../public/_app/socials.json';
import COUNTRIES_FILE from '../public/_app/countries.json';   // 3-24 활동하는 나라 (ISO 3166-1 두 글자, 249개)
import { fail } from './common.js';

export const SONG_LANGS = SONG_LANGS_FILE.langs.map((x) => x.code);
const SONG_LANG_SET = new Set(SONG_LANGS);
export const SOCIALS = SOCIALS_FILE.socials;
const SOCIAL_BY_KEY = Object.fromEntries(SOCIALS.map((s) => [s.key, s]));
export const BIG_SOCIALS = SOCIALS.filter((s) => s.big).map((s) => s.key);
export const SOCIAL_MAX_MORE = SOCIALS_FILE.max_more || 5;
export const SOCIAL_MAX_URL = SOCIALS_FILE.max_url || 200;
export const COUNTRY_SET = new Set(COUNTRIES_FILE.codes);

// 사이트 기본 언어(화면 언어) → 곡 언어 기본값: 앞 2글자(pt-br → pt). 목록에 없으면 en. (지시문 3-7)
export function defaultSongLang(siteLang) {
  const c = String(siteLang || '').toLowerCase().split('-')[0];
  return SONG_LANG_SET.has(c) && c !== 'zxx' && c !== 'mis' ? c : 'en';
}

// 곡 언어 검사: null·[] = 지정 안 함(필드 삭제). 1~2개, 목록 안, 중복 없음, zxx(연주곡)는 혼자만.
export function vLangs(v) {
  if (v == null || (Array.isArray(v) && !v.length)) return null;
  if (!Array.isArray(v) || v.length > 2 || new Set(v).size !== v.length || !v.every((c) => typeof c === 'string' && SONG_LANG_SET.has(c))) {
    fail(422, 'err.track.langs_invalid', { max: 2 });
  }
  if (v.length > 1 && v.includes('zxx')) fail(422, 'err.track.langs_zxx');
  return v.slice();
}
// catalog에 넣을 값 (저장된 값이 규칙에 맞을 때만, 아니면 undefined = 필드를 넣지 않는다)
export function langsForCatalog(v) {
  if (!Array.isArray(v) || !v.length || v.length > 2) return undefined;
  if (!v.every((c) => SONG_LANG_SET.has(c)) || new Set(v).size !== v.length) return undefined;
  if (v.length > 1 && v.includes('zxx')) return undefined;
  return v.slice();
}

// SNS 주소 검사: https:// + 허용 호스트(하위 경로 자유), 200자. 맞으면 정리한 주소, 아니면 null.
export function socialUrlOk(key, url) {
  const s = SOCIAL_BY_KEY[key];
  if (!s || typeof url !== 'string') return null;
  url = url.trim();
  if (!url || [...url].length > SOCIAL_MAX_URL || /[\s<>"'`\\]/.test(url)) return null;
  let u;
  try { u = new URL(url); } catch { return null; }
  if (u.protocol !== 'https:' || u.username || u.password || u.port) return null;
  const h = u.hostname.toLowerCase();
  const ok = s.hosts.some((p) => (p.startsWith('*.') ? h.endsWith(p.slice(1)) && h.length > p.length - 1 : h === p));
  return ok ? u.href : null;
}

// 관리 화면이 보낸 SNS 목록 [{key,url}] → 저장할 목록 (큰 5개 고정 순서 → 다른 SNS는 보낸 순서)
// 빈 주소 칸은 버린다. 규칙 위반이면 그 칸을 알려 주는 오류.
export function vSocials(v) {
  if (v == null) return [];
  if (!Array.isArray(v) || v.length > BIG_SOCIALS.length + SOCIAL_MAX_MORE) fail(422, 'err.social.too_many', { max: SOCIAL_MAX_MORE });
  const seen = new Set();
  const big = {}, more = [];
  for (const x of v) {
    if (!x || typeof x !== 'object' || typeof x.key !== 'string' || !SOCIAL_BY_KEY[x.key]) fail(422, 'err.social.unknown', { key: String(x && x.key).slice(0, 20) });
    if (seen.has(x.key)) fail(422, 'err.social.duplicate', { key: x.key, name: SOCIAL_BY_KEY[x.key].name });
    seen.add(x.key);
    const raw = typeof x.url === 'string' ? x.url.trim() : '';
    if (!raw) continue;
    if ([...raw].length > SOCIAL_MAX_URL) fail(422, 'err.social.too_long', { key: x.key, name: SOCIAL_BY_KEY[x.key].name, max: SOCIAL_MAX_URL });
    const url = socialUrlOk(x.key, raw);
    if (!url) fail(422, 'err.social.url', { key: x.key, name: SOCIAL_BY_KEY[x.key].name, example: 'https://' + SOCIAL_BY_KEY[x.key].hosts[0].replace(/^\*\./, 'name.') + '/…' });
    if (SOCIAL_BY_KEY[x.key].big) big[x.key] = url; else more.push({ key: x.key, url });
  }
  if (more.length > SOCIAL_MAX_MORE) fail(422, 'err.social.too_many', { max: SOCIAL_MAX_MORE });
  return BIG_SOCIALS.filter((k) => big[k]).map((k) => ({ key: k, url: big[k] })).concat(more);
}
// 저장된 목록을 다시 확인 (화면·catalog에 쓰기 전. 목록에서 빠진 키·틀린 주소는 버린다)
export function cleanSocials(list) {
  if (!Array.isArray(list)) return [];
  const out = [], seen = new Set();
  for (const x of list) {
    if (!x || seen.has(x.key)) continue;
    const url = socialUrlOk(x.key, x.url);
    if (!url) continue;
    seen.add(x.key);
    out.push({ key: x.key, url });
  }
  return out.slice(0, BIG_SOCIALS.length + SOCIAL_MAX_MORE);
}
export const socialInfo = (key) => SOCIAL_BY_KEY[key] || null;
