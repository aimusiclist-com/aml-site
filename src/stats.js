// src/stats.js — 내 사이트 통계·인기 순위 (채팅 3-12, Workers판)
// -----------------------------------------------------------------------------
// [세기] 방문자 요청에서 Cloudflare Workers Analytics Engine(AE)에 "한 줄"만 남긴다 — writeDataPoint 는 기다리지 않는
//        기록이라 Worker 요청·R2 쓰기·CPU 가 늘지 않는다 (2026-10-29 Cloudflare 문서 확인: 무료 요금제 하루 10만 줄 쓰기,
//        1만 번 읽기, 3개월 보관, 요청 1번에 250줄까지). 한 줄 = 묶음 6칸(src/stats-rules.js) + 숫자 1, 색인 = 내 주소(host).
//          재생 시작: GET /a/{id} 처음부터 받는 요청  →  ['p', 나라, 기기, 언어, 출처(site|aml|x), 곡 id]
//          방문:      GET / (방문자 페이지)          →  ['v', 나라, 기기, 언어, 유입 묶음, 유입 도메인]   (STATS_VISITS)
//          방명록 글: POST /api/gb 성공               →  ['g', 나라, 기기, 언어, '', '']
//        바인딩(wrangler.toml [[analytics_engine_datasets]] AML_STATS)이 없으면 아무것도 하지 않는다(옛 설치본 그대로 동작).
// [읽기] cron 이 하루 1번(UTC 0시 뒤, 사이트마다 다른 분 00:05~00:59 — 실패하면 매시 다시) AE SQL API 에 8번 묻는다.
//        토큰 = 이미 있는 사용량 토큰(Account → Account Analytics → Read, AE SQL API 가 요구하는 권한과 같음).
//        결과 → R2 meta/stats/sum.json (관리 화면용) · meta/stats/rank.json (방문자 화면 인기순) · meta/stats/aml.json (우리사이트 2-S)
//        관리 화면은 이 파일만 읽는다. "오늘" 숫자만 관리 화면을 열 때 AE 에 1번 묻는다(5분 보관).
// [순위] 최근 7일 내 사이트 재생 시작 수(aimusiclist 화면에서 온 재생은 빼고) → 같으면 aimusiclist 유효 재생(2-S) → 최근 업로드.
//        AE 를 못 쓰거나 90일 동안 내 사이트 재생이 하나도 없으면 aimusiclist 재생 수(2-S)로. 둘 다 없으면 순위 없음(방문자 화면에 정렬 버튼이 생기지 않는다).
//        하루 1번 계산, 변동은 바로 앞 계산(보통 전날)과 비교. 결과는 page.html 데이터 D.tracks[].rk·mv 로 → 방문자 요청 추가 0.
// [3-14] 곡마다 내 사이트 재생 횟수(aimusiclist 화면에서 온 재생은 빼고):
//        meta/stats/plays.json = { cum_d, cum:{id: n} (cum_d 전날까지 전체 누적), d7:{id: n} (지난 7일, 어제까지) } — cron 이 하루 1번
//          (처음엔 AE 가 가진 90일로 시작, 그 뒤 날마다 "아직 더하지 않은 날"만 AE 에 1번 물어 더한다 → 90일보다 오래돼도 누적이 남는다)
//        meta/stats/now.json   = [지금 새로 고침] 결과 { d, at, today:{v,p,pa,g,hv,hp}, t:{id: 오늘 재생}, rf:{at, d, n} } (1분에 1번, 하루 REFRESH_DAY_MAX 번)
//        방문자에게 보여 주기를 켠 곡(site.plays_pub + 곡 plays_hide 아님)의 누적만 page 데이터 D.tracks[].pl 로 → 방문 요청 +0.
//        숫자가 바뀌는 때 = 하루 1번 cron · [지금 새로 고침] (보이는 숫자가 바뀌었을 때만 page.html 다시 만들기).
// [3-18] 방문자 인기순 = 사이트 누적 재생 순(popOrder → page 데이터 D.tracks[].po, 순서값만). ▲▼·100위 제한·aimusiclist 대신 쓰기 없음.
//        (관리 통계 탭·분석 탭의 rank.json(7일)은 그대로.) 순서가 바뀌면 page.html 다시 만들기.
//        좋아요 ♥: POST /api/like {id, on} → AE 1줄 ['l', 나라, 기기, 언어, '1'|'0', 곡 id, IP 해시(그날 소금 — 다음 날 다른 값)] + double2 = 누른 시각(ms).
//        하루 집계 때 1문 더(likesQuery) → (IP 해시 + 곡 + 날짜) 그날 마지막 누름이 on 이면 1, IP 해시당 하루 LIKE_DAY_MAX 곡까지,
//        음원 있는 곡만 → meta/stats/likes.json {cum_d, cum:{id:n}} 에 누적(줄지 않는다). 하루 AE 질문 +1.
//        page 데이터: D.site.likes(버튼 보이기 — 끄지 않았고 셀 수 있을 때) · D.lkd(= cum_d) · D.tracks[].lk(1 이상). 우리사이트와는 주고받지 않는다.
// [3-15] 하루 집계 끝에 분석 탭 기록(곡별 하루 1줄, src/insights.js histWrite) — 누적용 질문을 날짜별로 받아 그날 곡별 재생으로도 쓴다.
//        처음 하루 집계에만 어제 곡별 1문이 더 있다 (그래서 하루 AE 질문 = 9번, 첫날부터).
// -----------------------------------------------------------------------------
import { KEY, apiBase, nowIso, ALLOWED_ORIGINS, fail, json, PAGE_GEN, readJson } from './common.js';
import { loadAdmin } from './auth.js';
import { loadAml, effective } from './aml.js';
import { loadDb } from './db.js';
import { slotOf } from './fields.js';
import { stPlayBlobs, stVisitBlobs, stSkip, stDevice, stCountry, stLang } from './stats-rules.js';
import { histRow, histWrite } from './insights.js';

// #31(방문자 통계 결정)을 글자 그대로 적용하려면 false: 방문은 세지 않고 재생만 센다(관리 화면은 방문 칸을 숨긴다).
export const STATS_VISITS = true;
export const DATASET = 'aml_site_stats';
export const SK = { sum: 'meta/stats/sum.json', rank: 'meta/stats/rank.json', aml: 'meta/stats/aml.json', plays: 'meta/stats/plays.json', now: 'meta/stats/now.json', likes: 'meta/stats/likes.json' };
export const LIKE_DAY_MAX = 200;      // 3-18 IP 해시 하나가 하루에 인정받는 좋아요 최대 (곡 수)
const RANK_MAX = 100;
const REFRESH_MS = 60 * 1000;          // [지금 새로 고침] 1분에 1번
export const REFRESH_DAY_MAX = 200;    // 하루 최대 (AE 읽기 무료 한도 하루 1만 번 — 1번에 2~3번 읽는다)
const DAYS_KEEP = 400;
const TODAY_MS = 5 * 60 * 1000;
const cfBase = (env) => String(env.AML_CF_API_BASE || 'https://api.cloudflare.com/client/v4').replace(/\/+$/, '');

// ── 1. 세기 (방문자 요청 안 — 실패해도 응답에 영향 없음) ────────────────────────────
function write(env, ctx, host, blobs, doubles) {
  if (!blobs) return;
  const point = { indexes: [String(host || '').slice(0, 96)], blobs, doubles: doubles || [1] };
  try { if (env.AML_STATS) env.AML_STATS.writeDataPoint(point); } catch (_) { /* 기록 실패는 무시 (재생이 먼저) */ }
  // 내 컴퓨터 시험 전용: 가짜 AE 로 같은 줄을 보낸다 (127.0.0.1·localhost 주소만)
  const tee = String(env.AML_STATS_TEE || '');
  if (tee && /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?\//.test(tee) && ctx) {
    ctx.waitUntil(fetch(tee, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(point) }).catch(() => {}));
  }
}
export function statsPlay(request, env, ctx, id) {
  try { write(env, ctx, new URL(request.url).hostname, stPlayBlobs(request, new URL(request.url).hostname, id, ALLOWED_ORIGINS)); } catch (_) { /* */ }
}
export function statsVisit(request, env, ctx) {
  if (!STATS_VISITS) return;
  try { write(env, ctx, new URL(request.url).hostname, stVisitBlobs(request, new URL(request.url).hostname)); } catch (_) { /* */ }
}
export function statsGuestbook(request, env, ctx) {
  try {
    if (stSkip(request)) return;
    const dev = stDevice(request.headers.get('user-agent'));
    if (dev !== 'bot') write(env, ctx, new URL(request.url).hostname, ['g', stCountry(request), dev, stLang(request.headers.get('accept-language')), '', '']);
  } catch (_) { /* */ }
}

// 3-18 좋아요 1번 (방문자 POST /api/like). 봇·관리자 본인은 세지 않는다. 응답은 본문 없이 204.
const enc = new TextEncoder();
export async function likeHash(ip, day, salt) {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(day + '|' + String(ip || '') + '|' + String(salt || '')));
  return [...new Uint8Array(buf).slice(0, 8)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
export async function likeBlobs(request, salt, id, on) {
  if (stSkip(request)) return null;
  const dev = stDevice(request.headers.get('user-agent'));
  if (dev === 'bot') return null;
  const ip = request.headers.get('cf-connecting-ip') || '';
  return ['l', stCountry(request), dev, stLang(request.headers.get('accept-language')), on ? '1' : '0', id, await likeHash(ip, ymd(new Date()), salt)];
}
export async function likePost(request, env, ctx, url) {
  if (request.method !== 'POST') fail(405, 'err.method_not_allowed');
  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) fail(403, 'err.auth.origin');
  const b = await readJson(request, 512);
  if (!b || typeof b.id !== 'string' || !/^[a-z0-9_-]{1,64}$/.test(b.id) || typeof b.on !== 'boolean') fail(400, 'err.request.invalid');
  try { const blobs = await likeBlobs(request, url.hostname, b.id, b.on); if (blobs) write(env, ctx, url.hostname, blobs, [1, Date.now()]); } catch (_) { /* 기록 실패는 무시 */ }   // double2 = 누른 시각(ms) — 그날 마지막 누름을 고른다
  return new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });
}

// ── 2. 순위 계산 (Workers·PHP 같은 규칙 — php/app/lib/stats.php Stats::computeRank) ───────────
// tracks: [{id, created_at, has_audio}] / own: {id: 7일 재생} 또는 null(내 사이트 기록 없음) / aml: {id: {p: plays7, v: valid7}} 또는 null
// prev: 앞 계산 {d, list:[[id,rk,mv]], prev:{id:rk}, prev_d} 또는 null / today: 'YYYY-MM-DD'(UTC)
// 결과: {d, basis:'own'|'aml'|null, list:[[id, rk, mv]], prev:{id: rk}, prev_d}  mv = 오른 칸 수(+)·내린 칸 수(-)·0 / 'new' / 첫 계산이면 null
export function computeRank(tracks, own, aml, prev, today) {
  const basis = own ? 'own' : (aml ? 'aml' : null);
  let pmap = {}, prevD = null, first = true;
  if (prev && Array.isArray(prev.list)) {
    if (prev.d === today) { pmap = prev.prev && typeof prev.prev === 'object' ? prev.prev : {}; prevD = prev.prev_d || null; first = !prevD; }
    else if (prev.list.length) { for (const r of prev.list) if (Array.isArray(r)) pmap[r[0]] = r[1]; prevD = prev.d || null; first = false; }   // 앞 순위가 비어 있으면 첫 계산과 같다
  }
  const score = (id) => (basis === 'own' ? +(own[id] || 0) : basis === 'aml' ? +((aml[id] && aml[id].p) || 0) : 0);
  const valid = (id) => +((aml && aml[id] && aml[id].v) || 0);
  const cand = (tracks || []).filter((t) => t && t.has_audio && score(t.id) > 0);
  cand.sort((a, b) => (score(b.id) - score(a.id)) || (valid(b.id) - valid(a.id))
    || (String(b.created_at || '') < String(a.created_at || '') ? -1 : String(b.created_at || '') > String(a.created_at || '') ? 1 : 0)
    || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const list = cand.slice(0, RANK_MAX).map((t, i) => {
    const rk = i + 1;
    const mv = first ? null : (pmap[t.id] ? pmap[t.id] - rk : 'new');
    return [t.id, rk, mv];
  });
  return { d: today, basis, list, prev: pmap, prev_d: prevD };
}

// page.html 데이터용 {id: [rk, mv]} — 방문자 화면이 쓰는 모양 (src/ui.js·php page.php 가 같은 방식으로 넣는다)
export function rankMap(rank) {
  const m = {};
  if (rank && Array.isArray(rank.list)) for (const r of rank.list) if (Array.isArray(r) && typeof r[0] === 'string' && Number.isInteger(r[1]) && r[1] >= 1 && r[1] <= RANK_MAX) m[r[0]] = [r[1], r[2]];
  return m;
}
export async function loadRank(env) {
  try { const o = await env.BUCKET.get(SK.rank); return o ? await o.json() : null; } catch (_) { return null; }
}

// ── 2b. 곡별 재생 횟수 (3-14, Workers·PHP 같은 규칙 — php Stats::playTotals·pubPlays) ──────────
// plays: {cum_d, cum, d7} / now: [지금 새로 고침] 저장본 {d, t} / today: 'YYYY-MM-DD'(UTC)
// 결과 {id: [전체 누적, 지난 7일(어제까지), 오늘]} — 0 인 곡은 넣지 않는다.
//   전체 누적 = cum + (새로 고침한 날이 아직 cum 에 더해지지 않았으면 그날 숫자). 오늘 = 새로 고침한 날이 오늘일 때만.
const cnt = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) && n > 0 ? Math.min(n, 1e12) : 0; };
export function playTotals(plays, now, today) {
  const cum = plays && plays.cum && typeof plays.cum === 'object' ? plays.cum : {};
  const d7 = plays && plays.d7 && typeof plays.d7 === 'object' ? plays.d7 : {};
  const nt = now && now.t && typeof now.t === 'object' ? now.t : {};
  const nd = now && typeof now.d === 'string' ? now.d : '';
  const inCum = !!nd && nd >= String((plays && plays.cum_d) || '');
  const isToday = !!nd && nd === today;
  const out = {};
  for (const id of new Set([...Object.keys(cum), ...Object.keys(d7), ...Object.keys(nt)])) {
    if (!/^[a-z0-9_-]{1,64}$/.test(id)) continue;
    const td = isToday ? cnt(nt[id]) : 0;
    const total = cnt(cum[id]) + (inCum ? cnt(nt[id]) : 0);
    const w = cnt(d7[id]);
    if (total || w || td) out[id] = [total, w, td];
  }
  return out;
}
// 방문자에게 보일 숫자 {id: 누적}: 전체 스위치(site.plays_pub) 켜짐 + 곡 plays_hide 아님 + 음원 있음 + 1 이상
export function pubPlays(db, totals) {
  const out = {};
  if (!db || !db.site || db.site.plays_pub !== true) return out;
  for (const t of Object.values(db.tracks || {})) {
    if (!t || !t.has_audio || t.plays_hide === true) continue;
    const x = totals && totals[t.id];
    if (x && x[0] > 0) out[t.id] = x[0];
  }
  return out;
}
// 3-18 방문자 인기순 (Workers·PHP 같은 규칙 — php Stats::popOrder): 음원 있는 곡 중 누적 1 이상 → 많은 순 → 같으면 최신 곡(created_at) 먼저 → id.
// 결과 {id: 1..N} = 순서값만(숫자는 넣지 않는다 — 방문자에게 숨긴 재생 횟수가 새지 않게). 0회 곡은 넣지 않는다(화면이 맨 아래 최신순으로).
export function popOrder(db, totals) {
  const c = [];
  for (const t of Object.values((db && db.tracks) || {})) {
    if (!t || !t.has_audio) continue;
    const n = cnt(totals && totals[t.id] ? totals[t.id][0] : 0);
    if (n > 0) c.push([String(t.id), n, String(t.created_at || '')]);
  }
  c.sort((a, b) => (b[1] - a[1]) || (b[2] < a[2] ? -1 : b[2] > a[2] ? 1 : 0) || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const out = {};
  c.forEach((r, i) => { out[r[0]] = i + 1; });
  return out;
}
// 3-18 좋아요 집계 (AE 줄 → 곡별 수). rows = likesQuery 결과 {d, k, h, s, t}. ok(id) = 셀 곡인가(음원 있음).
//   (날짜 + 곡 + IP 해시) 하루 1번: 그날 마지막 누름(t 가 같으면 취소 쪽)이 on 이면 1. IP 해시당 하루 LIKE_DAY_MAX 곡(먼저 누른 순)까지.
export function likesFromRows(rows, ok, max) {
  max = max || LIKE_DAY_MAX;
  const last = new Map();
  for (const x of rows || []) {
    const d = String(x.d || '').slice(0, 10), id = String(x.k || ''), h = String(x.h || ''), t = Number(x.t) || 0;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || !/^[a-z0-9_-]{1,64}$/.test(id) || !/^[0-9a-f]{16}$/.test(h)) continue;
    const on = String(x.s) === '1', key = d + '|' + id + '|' + h, cur = last.get(key);
    if (!cur || t > cur.t || (t === cur.t && !on)) last.set(key, { d, id, h, on, t });
  }
  const per = new Map();
  for (const v of last.values()) {
    if (!v.on || (ok && !ok(v.id))) continue;
    const k = v.d + '|' + v.h;
    (per.get(k) || per.set(k, []).get(k)).push(v);
  }
  const out = {};
  for (const list of per.values()) {
    list.sort((a, b) => (a.t - b.t) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    for (const v of list.slice(0, max)) out[v.id] = (out[v.id] || 0) + 1;
  }
  return out;
}
export function nextLikes(old, add, today) {
  const cum = old && old.cum && typeof old.cum === 'object' ? { ...old.cum } : {};
  for (const [id, n] of Object.entries(add || {})) cum[id] = cnt(cum[id]) + cnt(n);
  return { schema: 'site-likes-1', d: today, cum_d: today, cum };
}
// 방문자에게 보일 좋아요 수 {id: n}: 버튼을 끄지 않았고(site.likes_off 아님) 음원 있는 곡 · 1 이상
export function pubLikes(db, likes) {
  const out = {};
  if (!db || !db.site || db.site.likes_off === true) return out;
  const cum = likes && likes.cum && typeof likes.cum === 'object' ? likes.cum : {};
  for (const t of Object.values(db.tracks || {})) {
    if (!t || !t.has_audio) continue;
    const n = cnt(cum[t.id]);
    if (n > 0) out[t.id] = n;
  }
  return out;
}
export async function loadLikes(env) { return getJson(env, SK.likes); }
async function getJson(env, key) {
  try { const o = await env.BUCKET.get(key); return o ? await o.json() : null; } catch (_) { return null; }
}
export async function loadPlayTotals(env) {
  const [plays, now] = await Promise.all([getJson(env, SK.plays), getJson(env, SK.now)]);
  return playTotals(plays, now, ymd(new Date()));
}
const sameMap = (a, b) => JSON.stringify(Object.keys(a).sort().map((k) => [k, a[k]])) === JSON.stringify(Object.keys(b).sort().map((k) => [k, b[k]]));

// ── 3. AE SQL (읽기) ────────────────────────────────────────────────────────────
const sqlStr = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const DAY0 = 'toStartOfDay(NOW())';
const since = (n) => `${DAY0} - INTERVAL '${n}' DAY`;
function hostWhere(hosts) { return '(' + hosts.map((h) => 'index1 = ' + sqlStr(h)).join(' OR ') + ')'; }
// 질문 8개 (어제까지 90일, UTC). n7·n30·n90 = 최근 7·30·90일 합.
export function statsQueries(hosts, visits) {
  const base = `FROM ${DATASET} WHERE ${hostWhere(hosts)} AND timestamp >= ${since(90)} AND timestamp < ${DAY0}`;
  const win = `sumIf(_sample_interval, timestamp >= ${since(7)}) AS n7, sumIf(_sample_interval, timestamp >= ${since(30)}) AS n30, SUM(_sample_interval) AS n90`;
  const q = {
    days: `SELECT toDate(timestamp) AS d, blob1 AS t, blob5 AS s, SUM(_sample_interval) AS n ${base} GROUP BY d, t, s ORDER BY d LIMIT 5000`,
    hours: `SELECT toHour(timestamp) AS k, blob1 AS t, ${win} ${base} AND (blob1 = 'v' OR (blob1 = 'p' AND blob5 != 'aml')) GROUP BY k, t LIMIT 100`,
    tracks: `SELECT blob6 AS k, blob5 AS s, ${win} ${base} AND blob1 = 'p' GROUP BY k, s ORDER BY n90 DESC LIMIT 5000`,
  };
  if (visits) {
    for (const [name, col] of [['cc', 'blob2'], ['dev', 'blob3'], ['lang', 'blob4'], ['ref', 'blob5'], ['refd', 'blob6']]) {
      q[name] = `SELECT ${col} AS k, ${win} ${base} AND blob1 = 'v'${name === 'refd' ? " AND blob6 != ''" : ''} GROUP BY k ORDER BY n90 DESC LIMIT 30`;
    }
  }
  return q;
}
// 3-14 곡별 내 사이트 재생: 오늘(지금까지) / 지난 k일(어제까지) — aimusiclist 화면에서 온 재생(blob5 = 'aml')은 뺀다
export function playsTodayQuery(hosts) {
  return `SELECT blob6 AS k, SUM(_sample_interval) AS n FROM ${DATASET} WHERE ${hostWhere(hosts)} AND timestamp >= ${DAY0} AND blob1 = 'p' AND blob5 != 'aml' GROUP BY k LIMIT 5000`;
}
// 3-15: 날짜(d)별로 나눠 받는다 — 누적은 합만 쓰고(playsFromRows), 분석 탭 기록(history)은 날마다(playsByDay)
export function playsSinceQuery(hosts, k) {
  return `SELECT toDate(timestamp) AS d, blob6 AS k, SUM(_sample_interval) AS n FROM ${DATASET} WHERE ${hostWhere(hosts)} AND timestamp >= ${since(k)} AND timestamp < ${DAY0} AND blob1 = 'p' AND blob5 != 'aml' GROUP BY d, k LIMIT 100000`;
}
// 3-18 좋아요 줄 (날짜·곡·IP 해시·on/off 별 마지막 시각) — 지난 k일(어제까지)
export function likesQuery(hosts, k) {
  return `SELECT toDate(timestamp) AS d, blob6 AS k, blob7 AS h, blob5 AS s, max(double2) AS t FROM ${DATASET} WHERE ${hostWhere(hosts)} AND timestamp >= ${since(k)} AND timestamp < ${DAY0} AND blob1 = 'l' GROUP BY d, k, h, s LIMIT 100000`;
}
export function playsByDay(rows) {
  const o = {};
  for (const x of rows || []) {
    const d = String(x.d || '').slice(0, 10), id = String(x.k || ''), n = num(x.n);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || !/^[a-z0-9_-]{1,64}$/.test(id)) continue;
    const m = o[d] || (o[d] = {});
    if (n) m[id] = (m[id] || 0) + n;
  }
  return o;
}
export function playsFromRows(rows) {
  const o = {};
  for (const x of rows || []) { const id = String(x.k || ''); const n = num(x.n); if (n && /^[a-z0-9_-]{1,64}$/.test(id)) o[id] = (o[id] || 0) + n; }
  return o;
}
// cron: 누적 장부 고치기. 처음이면 AE 90일(sum.tracks 의 90일 칸)로 시작, 그 뒤엔 cum_d ~ 어제를 더한다(최대 90일).
export function nextPlays(old, sumTracks, since, today) {
  const d7 = {}, n90 = {};
  for (const t of sumTracks || []) { if (t[1] > 0) d7[t[0]] = t[1]; if (t[3] > 0) n90[t[0]] = t[3]; }
  if (!old || !old.cum_d || typeof old.cum !== 'object') return { schema: 'site-plays-1', d: today, cum_d: today, cum: n90, d7 };
  const cum = { ...old.cum };
  if (old.cum_d < today) for (const [id, n] of Object.entries(since || {})) cum[id] = cnt(cum[id]) + n;
  return { schema: 'site-plays-1', d: today, cum_d: old.cum_d < today ? today : old.cum_d, cum, d7 };
}
export const dayGap = (from, to) => Math.round((Date.parse(to + 'T00:00:00Z') - Date.parse(from + 'T00:00:00Z')) / 86400000);
export function todayQuery(hosts) {
  return `SELECT blob1 AS t, blob5 AS s, toHour(timestamp) AS h, SUM(_sample_interval) AS n FROM ${DATASET} WHERE ${hostWhere(hosts)} AND timestamp >= ${DAY0} GROUP BY t, s, h LIMIT 500`;
}
async function aeSql(env, cf, sql) {
  let res;
  try {
    res = await fetch(`${cfBase(env)}/accounts/${cf.account_id}/analytics_engine/sql`, {
      method: 'POST', headers: { authorization: 'Bearer ' + cf.token, 'content-type': 'text/plain' }, body: sql, signal: AbortSignal.timeout(10000),
    });
  } catch (_) { fail(502, 'err.stats.unreachable'); }
  if (res.status === 401 || res.status === 403) fail(400, 'err.cf.permission');
  if (!res.ok) { await res.body?.cancel?.(); fail(502, 'err.stats.query', { status: res.status }); }
  let d = null; try { d = await res.json(); } catch (_) { /* */ }
  if (!d || !Array.isArray(d.data)) fail(502, 'err.stats.query', { status: res.status });
  return d.data;
}
const num = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) && n > 0 ? n : 0; };

// AE 결과 → sum 의 days·dims·hours·tracks (php Stats 가 DB 로 만드는 것과 같은 모양)
export function sumFromRows(r, oldDays, today) {
  const byDay = {};
  for (const x of r.days || []) {
    const d = String(x.d || '').slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || d >= today) continue;
    const o = byDay[d] || (byDay[d] = [0, 0, 0, 0]);
    const n = num(x.n);
    if (x.t === 'v') o[0] += n; else if (x.t === 'p') { if (x.s === 'aml') o[2] += n; else o[1] += n; } else if (x.t === 'g') o[3] += n;
  }
  const cut = addDays(today, -90);                // AE 가 다시 알려 준 90일은 바꾸고, 그보다 옛날 칸은 저장본 그대로 (400일 보관)
  const days = (Array.isArray(oldDays) ? oldDays : []).filter((x) => Array.isArray(x) && x[0] < cut);
  for (const d of Object.keys(byDay)) days.push([d, ...byDay[d]]);
  days.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const dims = {};
  for (const name of ['cc', 'dev', 'lang', 'ref', 'refd']) {
    if (!r[name]) continue;
    dims[name] = r[name].map((x) => [String(x.k || '').slice(0, 64), num(x.n7), num(x.n30), num(x.n90)]).filter((x) => x[0] && x[3] > 0).slice(0, 30);
  }
  const hours = { v: zeros24(), p: zeros24() };
  for (const x of r.hours || []) {
    const h = Number(x.k);
    if (Number.isInteger(h) && h >= 0 && h < 24 && (x.t === 'v' || x.t === 'p')) hours[x.t][h] = [h, num(x.n7), num(x.n30), num(x.n90)];
  }
  const tr = {};
  for (const x of r.tracks || []) {
    const id = String(x.k || '');
    if (!/^[a-z0-9_-]{1,64}$/.test(id)) continue;
    const o = tr[id] || (tr[id] = [id, 0, 0, 0, 0, 0, 0]);
    const off = x.s === 'aml' ? 4 : 1;
    o[off] += num(x.n7); o[off + 1] += num(x.n30); o[off + 2] += num(x.n90);
  }
  const tracks = Object.values(tr).sort((a, b) => (b[3] + b[6]) - (a[3] + a[6]) || (a[0] < b[0] ? -1 : 1));
  return { days: days.slice(-DAYS_KEEP), dims, hours, tracks };
}
function zeros24() { const a = []; for (let h = 0; h < 24; h++) a.push([h, 0, 0, 0]); return a; }
export function todayFromRows(rows) {
  const o = { v: 0, p: 0, pa: 0, g: 0, hv: new Array(24).fill(0), hp: new Array(24).fill(0) };
  for (const x of rows || []) {
    const n = num(x.n), h = Number(x.h);
    if (x.t === 'v') { o.v += n; if (h >= 0 && h < 24) o.hv[h] += n; }
    else if (x.t === 'p') { if (x.s === 'aml') o.pa += n; else { o.p += n; if (h >= 0 && h < 24) o.hp[h] += n; } }
    else if (x.t === 'g') o.g += n;
  }
  return o;
}

// ── 4. 우리사이트 "내 곡 통계" (2-S: GET {api}/sites/{site_id}/stats?days=90, Bearer site_secret, ETag) ────
// 모양(지시문 2-S 6번): {schema:"site-stats-1", generated, days:[{d,plays,valid,likes,adds}], tracks:[{id,plays7,valid7,chart_rank,chart_rank_prev,genre_rank}], countries:[[cc,n]]}
// (2-X) tracks[] 에 all_rank·all_rank_prev·all_rank_best·all_rank_move(up|down|same|new|re) — 모든 곡 순위, 순위가 있을 때만
// 글자는 화면에서 항상 이스케이프. 모르는 키는 버리고 숫자만 남긴다(받은 파일을 그대로 믿지 않는다).
export function cleanAmlStats(d) {
  if (!d || typeof d !== 'object' || d.schema !== 'site-stats-1') return null;
  const n = (v) => (Number.isFinite(+v) && +v >= 0 ? Math.round(+v) : 0);
  const rk = (v) => (Number.isInteger(v) && v >= 1 && v <= 100000 ? v : null);
  const rkAll = (v) => (Number.isInteger(v) && v >= 1 && v <= 4294967295 ? v : null);
  const out = { schema: 'site-stats-1', generated: typeof d.generated === 'string' ? d.generated.slice(0, 40) : '', days: [], tracks: [], countries: [] };
  for (const x of Array.isArray(d.days) ? d.days.slice(0, 400) : []) {
    if (x && /^\d{4}-\d{2}-\d{2}$/.test(String(x.d))) out.days.push({ d: x.d, plays: n(x.plays), valid: n(x.valid), likes: n(x.likes), adds: n(x.adds) });
  }
  for (const x of Array.isArray(d.tracks) ? d.tracks.slice(0, 1000) : []) {
    if (!x || !/^[a-z0-9_-]{1,64}$/.test(String(x.id))) continue;
    const o = { id: x.id, plays7: n(x.plays7), valid7: n(x.valid7), chart_rank: rk(x.chart_rank), chart_rank_prev: rk(x.chart_rank_prev), genre_rank: rk(x.genre_rank) };
    if (x.genre != null && /^[a-z0-9_-]{1,32}$/.test(String(x.genre))) o.genre = String(x.genre);
    if (x.likes != null) o.likes = n(x.likes);
    if (x.adds != null) o.adds = n(x.adds);
    if (x.likes7 != null) o.likes7 = n(x.likes7);   // 3-15 지난 7일 좋아요·플레이리스트 담기 (분석 탭 기록)
    if (x.adds7 != null) o.adds7 = n(x.adds7);
    // (2-X) 모든 곡 순위 — 상한 없음(1억 위도). 지금 순위가 있을 때만 넣는다
    if (rkAll(x.all_rank)) {
      o.all_rank = x.all_rank; o.all_rank_prev = rkAll(x.all_rank_prev); o.all_rank_best = rkAll(x.all_rank_best) || x.all_rank;
      o.all_rank_move = ['up', 'down', 'same', 'new', 're'].includes(x.all_rank_move) ? x.all_rank_move : null;
    }
    out.tracks.push(o);
  }
  for (const x of Array.isArray(d.countries) ? d.countries.slice(0, 50) : []) {
    if (Array.isArray(x) && /^[A-Z][A-Z0-9]$/.test(String(x[0]))) out.countries.push([x[0], n(x[1])]);
  }
  return out;
}
async function fetchAmlStats(env, eff, old) {
  const st = { at: nowIso(), ok_at: old && old.ok_at || null, etag: old && old.etag || '', error: null, data: old && old.data || null };
  if (!eff.site_id || !eff.secret) { st.error = 'err.aml.not_ready'; return st; }
  let res;
  try {
    const h = { authorization: 'Bearer ' + eff.secret, accept: 'application/json' };
    if (st.etag && st.data) h['if-none-match'] = st.etag;
    res = await fetch(`${apiBase(env)}/sites/${encodeURIComponent(eff.site_id)}/stats?days=90`, { headers: h, redirect: 'manual', signal: AbortSignal.timeout(5000) });
  } catch (_) { st.error = 'err.aml.unreachable'; return st; }
  if (res.status === 304) { st.ok_at = st.at; return st; }
  if (res.status === 404) { await res.body?.cancel?.(); st.error = 'err.stats.aml_none'; st.data = null; return st; }   // 우리사이트에 아직 없음(2-S 전)
  if (!res.ok) { await res.body?.cancel?.(); st.error = 'err.aml.http'; st.status = res.status; return st; }
  const text = await res.text();
  if (text.length > 512 * 1024) { st.error = 'err.stats.aml_bad'; return st; }
  let d = null; try { d = JSON.parse(text); } catch (_) { /* */ }
  const clean = cleanAmlStats(d);
  if (!clean) { st.error = 'err.stats.aml_bad'; return st; }
  st.data = clean; st.etag = res.headers.get('etag') || ''; st.ok_at = st.at;
  return st;
}
export function amlRankInput(amlSt) {
  if (!amlSt || !amlSt.data || !Array.isArray(amlSt.data.tracks) || !amlSt.data.tracks.length) return null;
  const m = {};
  for (const x of amlSt.data.tracks) m[x.id] = { p: x.plays7 || 0, v: x.valid7 || 0 };
  return m;
}

// ── 5. cron (1분마다 부름 — 거의 항상 바로 끝난다) ─────────────────────────────────
const ymd = (d) => d.toISOString().slice(0, 10);
export function addDays(day, n) { const t = new Date(day + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + n); return ymd(t); }
let mem = { done: '', slot: null, slotAt: 0 };
async function statsSlot(env) {
  if (mem.slot !== null && Date.now() - mem.slotAt < 6 * 3600 * 1000) return mem.slot;
  const { data } = await loadAml(env);
  const seed = env.AML_SITE_ID || (data && (data.site_id || data.origin)) || 'aml';
  mem.slot = 5 + (slotOf(seed + ':stats') % 55);   // 00:05 ~ 00:59 UTC (사이트마다 다른 분)
  mem.slotAt = Date.now();
  return mem.slot;
}
export async function cronStats(env, ctx, scheduledTime) {
  const now = new Date(scheduledTime || Date.now());
  const today = ymd(now);
  if (mem.done === today) return null;
  const minute = now.getUTCHours() * 60 + now.getUTCMinutes();
  const slot = await statsSlot(env);
  if (minute < slot || (minute - slot) % 60 !== 0) return null;   // 내 분, 실패했으면 매시 같은 분
  const head = await env.BUCKET.head(SK.sum);
  if (head && head.customMetadata && head.customMetadata.d >= today) { mem.done = today; return null; }   // 오늘 했음 (옛날 날짜로 다시 하지 않는다)
  const r = await rollup(env, ctx, today);
  if (r.complete) mem.done = today;
  return r;
}

// 이 사이트가 남긴 줄의 색인(host) 목록: 등록 주소·내 도메인·옛 주소·SITE_URL
export function hostsOf(env, aml) {
  const out = new Set();
  const add = (u) => { try { if (u) out.add(new URL(/^https?:\/\//.test(u) ? u : 'https://' + u).hostname.toLowerCase()); } catch (_) { /* */ } };
  add(env.SITE_URL);
  if (aml) { add(aml.origin); add(aml.domain); add(aml.domain_from); }
  return [...out].filter((h) => /^[a-z0-9.-]{1,96}$/.test(h));
}
function aeReady(env) { return !!(env.AML_STATS || env.AML_STATS_TEE); }

// 하루 집계 1번: 우리사이트 2-S → AE 8문(+ 누적 1문 + 3-18 좋아요 1문) → sum·rank·aml·plays·likes.json → 보이는 재생 횟수·인기순·좋아요가 바뀌면 page.html 다시 만들기
export async function rollup(env, ctx, today) {
  const [{ data: admin }, { data: aml }, oldSumObj, oldRank, oldAmlObj, oldPlays, nowSnap, dbr, oldLikes] = await Promise.all([
    loadAdmin(env), loadAml(env), env.BUCKET.get(SK.sum), loadRank(env), env.BUCKET.get(SK.aml), getJson(env, SK.plays), getJson(env, SK.now), loadDb(env), getJson(env, SK.likes),
  ]);
  const oldSum = oldSumObj ? await oldSumObj.json().catch(() => null) : null;
  const oldAml = oldAmlObj ? await oldAmlObj.json().catch(() => null) : null;
  const eff = effective(env, aml);
  const amlSt = await fetchAmlStats(env, eff, oldAml);
  const cf = admin && admin.cf || {};
  const hosts = hostsOf(env, aml);
  const sum = { schema: 'site-stats-sum-1', d: today, at: nowIso(), own: 'none', visits: STATS_VISITS, error: null,
    days: oldSum && Array.isArray(oldSum.days) ? oldSum.days : [], dims: {}, hours: null, tracks: [] };
  let complete = true, plays = oldPlays, ownByDay = null, likes = oldLikes;
  if (!aeReady(env)) sum.error = { code: 'err.stats.no_dataset' };
  else if (!cf.token || !cf.account_id) sum.error = { code: 'err.cf.no_token' };
  else if (!hosts.length) sum.error = { code: 'err.aml.no_origin' };
  else {
    try {
      const qs = statsQueries(hosts, STATS_VISITS);
      const rows = {};
      for (const k of Object.keys(qs)) rows[k] = await aeSql(env, cf, qs[k]);   // 차례로 (읽기 한도: 하루 8번)
      Object.assign(sum, sumFromRows(rows, sum.days, today));
      sum.own = 'ae';
      // 3-14 곡별 전체 누적: 아직 더하지 않은 날(cum_d ~ 어제)만 1번 더 묻는다 (처음이면 묻지 않고 90일 칸으로 시작)
      let since = null;
      if (oldPlays && oldPlays.cum_d && oldPlays.cum_d < today) {
        const sr = await aeSql(env, cf, playsSinceQuery(hosts, Math.max(1, Math.min(90, dayGap(oldPlays.cum_d, today)))));
        since = playsFromRows(sr);
        ownByDay = playsByDay(sr);
        for (let d = oldPlays.cum_d; d < today; d = addDays(d, 1)) ownByDay[d] = ownByDay[d] || {};   // 그날 재생 0 인 날도 "셌다"
      } else if (!oldPlays || !oldPlays.cum_d) {
        // 3-15 처음 하루 집계: 누적은 90일 칸으로 시작하지만, 분석 탭 기록에 쓸 어제 하루 곡별 재생은 따로 1문 (처음 한 번만 — 그 뒤엔 위 질문이 날짜별로 준다)
        ownByDay = playsByDay(await aeSql(env, cf, playsSinceQuery(hosts, 1)));
        ownByDay[addDays(today, -1)] = ownByDay[addDays(today, -1)] || {};
      }
      plays = { ...nextPlays(oldPlays, sum.tracks, since, today), at: nowIso() };
      // 3-18 좋아요: 아직 더하지 않은 날(cum_d ~ 어제, 처음이면 AE 가 가진 90일)만 1문. 실패하면 다음 날 그만큼 더 묻는다(통계는 그대로)
      if (!oldLikes || !oldLikes.cum_d || oldLikes.cum_d < today) {
        try {
          const k = oldLikes && oldLikes.cum_d ? Math.max(1, Math.min(90, dayGap(oldLikes.cum_d, today))) : 90;
          const tr = dbr.db.tracks || {};
          likes = { ...nextLikes(oldLikes, likesFromRows(await aeSql(env, cf, likesQuery(hosts, k)), (id) => !!(tr[id] && tr[id].has_audio)), today), at: nowIso() };
        } catch (e) { console.error('likes', e && e.code || e); }
      }
    } catch (e) {
      sum.error = { code: e.code || 'err.stats.query', params: e.params };
      complete = false;                                     // 매시 다시 시도
      if (oldSum && oldSum.own === 'ae') { sum.dims = oldSum.dims || {}; sum.hours = oldSum.hours || null; sum.tracks = oldSum.tracks || []; sum.own = 'ae'; sum.stale = true; }
    }
  }
  // 순위 (오늘 이미 계산했으면 같은 결과 — 하루 1번)
  let rank = oldRank;
  const db = dbr.db;
  if (complete && (!oldRank || oldRank.d !== today)) {
    const tracks = Object.values(db.tracks).map((t) => ({ id: t.id, created_at: t.created_at || '', has_audio: !!t.has_audio }));
    let own = null;
    // 내 사이트 기록이 90일 동안 한 번도 없으면(아직 아무도 안 들음·기록이 꺼져 있었음) aimusiclist 재생 수로
    if (sum.own === 'ae' && sum.tracks.some((t) => t[3] > 0)) { own = {}; for (const t of sum.tracks) own[t[0]] = t[1]; }
    rank = computeRank(tracks, own, amlRankInput(amlSt), oldRank, today);
  }
  const meta = { httpMetadata: { contentType: 'application/json' } };
  const puts = [
    env.BUCKET.put(SK.aml, JSON.stringify(amlSt), meta),
    env.BUCKET.put(SK.sum, JSON.stringify(sum), { ...meta, customMetadata: { d: complete ? today : (oldSum && oldSum.d) || '' } }),
  ];
  if (rank && rank !== oldRank) puts.push(env.BUCKET.put(SK.rank, JSON.stringify(rank), meta));   // 관리 통계 탭·분석 탭용 (3-18: 방문자 화면은 쓰지 않는다)
  // 3-14 방문자에게 보이는 재생 횟수 · 3-18 인기순 순서가 바뀌었나
  let pubChanged = false;
  if (plays !== oldPlays) {
    puts.push(env.BUCKET.put(SK.plays, JSON.stringify(plays), meta));
    const a = playTotals(oldPlays, nowSnap, today), b = playTotals(plays, nowSnap, today);
    pubChanged = !sameMap(pubPlays(db, a), pubPlays(db, b)) || !sameMap(popOrder(db, a), popOrder(db, b));
  }
  if (likes !== oldLikes) {   // 3-18 좋아요 수
    puts.push(env.BUCKET.put(SK.likes, JSON.stringify(likes), meta));
    if (!sameMap(pubLikes(db, oldLikes), pubLikes(db, likes))) pubChanged = true;
  }
  await Promise.all(puts);
  if (pubChanged) { await env.BUCKET.delete(KEY.page); PAGE_GEN.n++; }   // 다음 방문 때 재생 횟수·인기순·좋아요를 넣어 다시 만든다
  // 3-15 분석 탭 기록: 곡별 하루 1줄 (어제 = 2-S·내 사이트 순위의 날). 실패해도 통계는 그대로.
  try { await histWrite(env, histRows(db, ownByDay, rank, amlSt, today)); } catch (e) { console.error('hist', e); }
  return { complete, own: sum.own, ranked: rank ? rank.list.length : 0, page: pubChanged };
}

// 3-15 기록할 줄: 내 사이트 재생을 센 날들(ownByDay — 보통 어제 하루, cron 이 멈췄던 날도) + 어제 줄에 순위·aimusiclist 숫자
//      aimusiclist 숫자는 오늘 받았을 때만(304 포함) 어제 숫자로 적는다 (못 받은 날 옛 숫자를 새 날에 적지 않게)
export function histRows(db, ownByDay, rank, amlSt, today) {
  const yday = addDays(today, -1);
  const ids = Object.keys(db.tracks || {});
  const fresh = amlSt && amlSt.data && amlSt.ok_at && String(amlSt.ok_at).slice(0, 10) === today ? amlSt.data : null;
  const days = new Set(Object.keys(ownByDay || {}).filter((d) => d <= yday && d >= addDays(today, -90)));
  days.add(yday);
  return [...days].sort().map((d) => histRow(d, ids, ownByDay && ownByDay[d] ? ownByDay[d] : null, d === yday && rank && rank.d === today ? rank : null, d === yday ? fresh : null));
}
export async function aeOn(env) {
  const [{ data: admin }, { data: aml }] = await Promise.all([loadAdmin(env), loadAml(env)]);
  const cf = admin && admin.cf || {};
  return aeReady(env) && !!(cf.token && cf.account_id) && hostsOf(env, aml).length > 0;
}

// ── 6. 관리 API: GET /api/admin/stats (저장본 + 오늘) ───────────────────────────────
let todayMemo = null;   // { at, value }
function refreshInfo(env, cf, hosts, snap) {
  const on = aeReady(env) && !!(cf.token && cf.account_id) && hosts.length > 0;
  const rf = snap && snap.rf || {};
  const today = ymd(new Date());
  const n = rf.d === today ? +rf.n || 0 : 0;
  const wait = rf.at ? Math.max(0, Math.ceil((Date.parse(rf.at) + REFRESH_MS - Date.now()) / 1000)) : 0;
  return { on, at: rf.at || null, wait, left: Math.max(0, REFRESH_DAY_MAX - n), max: REFRESH_DAY_MAX };
}
export async function adminStats(env, extra) {
  const [{ data: admin }, { data: aml }, sumObj, rank, amlObj, snap, likes] = await Promise.all([
    loadAdmin(env), loadAml(env), env.BUCKET.get(SK.sum), loadRank(env), env.BUCKET.get(SK.aml), getJson(env, SK.now), getJson(env, SK.likes),
  ]);
  const sum = sumObj ? await sumObj.json().catch(() => null) : null;
  const amlSt = amlObj ? await amlObj.json().catch(() => null) : null;
  const cf = admin && admin.cf || {};
  const hosts = hostsOf(env, aml);
  let today = null, todayErr = null, todayAt = null;
  if (aeReady(env) && cf.token && cf.account_id && hosts.length) {
    // 3-14: [지금 새로 고침] 저장본이 5분 안이면 그 숫자(모든 화면이 같은 숫자)
    if (snap && snap.d === ymd(new Date()) && snap.today && Date.now() - Date.parse(snap.at) < TODAY_MS) { today = snap.today; todayAt = snap.at; }
    else if (todayMemo && Date.now() - todayMemo.at < TODAY_MS) ({ today, todayErr, todayAt } = todayMemo.value);
    else {
      try { today = todayFromRows(await aeSql(env, cf, todayQuery(hosts))); todayAt = nowIso(); } catch (e) { todayErr = { code: e.code || 'err.stats.query' }; }
      todayMemo = { at: Date.now(), value: { today, todayErr, todayAt } };
    }
  }
  const slot = await statsSlot(env);
  return json({
    ok: true, server: 'workers', sum, rank, aml: amlSt, today, today_error: todayErr, today_at: todayAt,
    likes: likes && likes.cum && typeof likes.cum === 'object' ? { d: likes.cum_d || null, cum: likes.cum } : null,   // 3-18 곡별 좋아요 (내 사이트 ♥, 누적)
    ...(extra || {}),
    setup: { mode: aeReady(env) ? 'ae' : 'none', dataset: aeReady(env), token: !!(cf.token && cf.account_id), visits: STATS_VISITS, dims: 'v', slot, refresh: refreshInfo(env, cf, hosts, snap) },
  });
}

// ── 7. 3-14 POST /api/admin/stats/refresh — [지금 새로 고침] (내 사이트 숫자만. aimusiclist 숫자는 하루 1번 그대로) ─────
// 1분에 1번·하루 REFRESH_DAY_MAX 번. 하루 집계를 아직 안 했으면(0시 뒤 내 분 전) 먼저 하고, 오늘 숫자 2문 → now.json.
export async function adminStatsRefresh(env, ctx) {
  const [{ data: admin }, { data: aml }, old] = await Promise.all([loadAdmin(env), loadAml(env), getJson(env, SK.now)]);
  const cf = admin && admin.cf || {};
  const hosts = hostsOf(env, aml);
  const info = refreshInfo(env, cf, hosts, old);
  if (!info.on) fail(409, 'err.stats.refresh_off');
  if (info.wait > 0) fail(429, 'err.stats.too_soon', { wait: info.wait });
  if (info.left <= 0) fail(429, 'err.stats.too_many', { max: REFRESH_DAY_MAX });
  const today = ymd(new Date());
  const rf = { at: nowIso(), d: today, n: REFRESH_DAY_MAX - info.left + 1 };
  const meta = { httpMetadata: { contentType: 'application/json' } };
  await env.BUCKET.put(SK.now, JSON.stringify({ ...(old || {}), rf }), meta);   // 먼저 자리를 잡는다 (두 번 눌러도 1번)
  const head = await env.BUCKET.head(SK.sum);
  if (!(head && head.customMetadata && head.customMetadata.d >= today)) { const r = await rollup(env, ctx, today); if (r.complete) mem.done = today; }
  const [rowsToday, rowsTracks] = [await aeSql(env, cf, todayQuery(hosts)), await aeSql(env, cf, playsTodayQuery(hosts))];
  const snap = { schema: 'site-now-1', d: today, at: nowIso(), today: todayFromRows(rowsToday), t: playsFromRows(rowsTracks), rf };
  const [plays, { db }] = await Promise.all([getJson(env, SK.plays), loadDb(env)]);
  const ta = playTotals(plays, old, today), tb = playTotals(plays, snap, today);
  const changed = !sameMap(pubPlays(db, ta), pubPlays(db, tb)) || !sameMap(popOrder(db, ta), popOrder(db, tb));   // 3-18 인기순도
  await env.BUCKET.put(SK.now, JSON.stringify(snap), meta);
  todayMemo = { at: Date.now(), value: { today: snap.today, todayErr: null, todayAt: snap.at } };
  if (changed) { await env.BUCKET.delete(KEY.page); PAGE_GEN.n++; }
  return adminStats(env, { refreshed: true, page: changed });
}

// ── 8. 3-14 곡별 재생 횟수: GET /api/admin/plays · POST /api/admin/plays {track_ids, show} 는 index.js ─────
export async function adminPlays(env) {
  const [{ data: admin }, { data: aml }, plays, snap, { db }] = await Promise.all([loadAdmin(env), loadAml(env), getJson(env, SK.plays), getJson(env, SK.now), loadDb(env)]);
  const cf = admin && admin.cf || {};
  const on = aeReady(env) && !!(cf.token && cf.account_id) && hostsOf(env, aml).length > 0;
  const today = ymd(new Date());
  return json({
    ok: true, on, d: today, at: on ? (snap && snap.d === today && snap.at) || (plays && plays.at) || null : null,
    pub: !!(db.site && db.site.plays_pub === true), plays: on ? playTotals(plays, snap, today) : {},
    likes: on,   // 3-18 좋아요를 셀 수 있나 (Workers판 = 통계를 켰을 때만)
  });
}
