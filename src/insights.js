// src/insights.js — 관리 화면 "분석" 탭 자료 (채팅 3-15, Workers판 — php/app/lib/insights.php 와 같은 규칙·같은 모양)
// -----------------------------------------------------------------------------
// [받기] 하루 1번(사이트마다 다른 분, UTC 00:45~23:59) aimusiclist 공개 파일 2개를 ETag(If-None-Match)로 받는다:
//          {aimusiclist}/feed/insights.json (형식 insights-1) · /feed/news.json (형식 news-1) — 형식: aimusiclist docs/spec/차트분석-소식-v1.md
//        정리한 것만 R2 meta/feed/insights.json · news.json 에 둔다(받은 글자를 그대로 믿지 않음 — 모르는 키·음원/이미지 주소 버림).
//        받은 기록 meta/feed/state.json. 관리 화면은 이 저장본만 읽는다 → 관리 화면을 몇 번 열어도 우리사이트 요청 0.
//        실패·모르는 schema·크기 초과면 마지막 정상본 그대로("어제 것"). 하루에 한 번만 시도한다(실패해도 다음 날).
// [쌓기] 하루 집계(src/stats.js rollup) 때 곡별 하루 1줄 → R2 meta/stats/history/{YYYY-MM}.json (달마다 한 파일, 24달 보관)
//        파일 = 한 줄에 하루: {"d":"YYYY-MM-DD","o":1,"a":1,"t":{"곡id":[p,rk,ar,cr,gr,pa,va,lk,ad]}}
//          d  = 그 숫자의 날(UTC, 보통 어제 — 2-S·내 사이트 순위 모두 "어제까지")
//          o  = 그날 내 사이트 재생을 셌다(없는 곡 = 0). 없으면 p 를 모름
//          a  = 그날 aimusiclist 숫자(2-S)를 받았다
//          p 내 사이트 재생(그날) · rk 내 사이트 인기순 순위 · ar aimusiclist 모든 곡 순위 · cr 주간 차트 순위 · gr 장르 차트 순위
//          pa aimusiclist 재생(지난 7일) · va 유효 재생(지난 7일) · lk 좋아요(지난 7일) · ad 플레이리스트 담기(지난 7일)
//          배열 끝의 null 은 뺀다, 숫자가 하나도 없는 곡은 줄에 넣지 않는다.
//        한 줄씩이라 쓰기는 마지막 줄만 바꾸거나 붙이고(전체를 풀지 않음), 관리 API 는 줄을 쉼표로 이어 보낸다(CPU 거의 0).
// [보기] GET /api/admin/insights?months=N — 저장본만 모아서 (그래프·정렬·새 통계는 모두 브라우저가 계산)
// -----------------------------------------------------------------------------
import { apiBase, nowIso } from './common.js';
import { loadAml } from './aml.js';
import { slotOf } from './fields.js';
import { hostsOf, SK, STATS_VISITS, aeOn } from './stats.js';

export const FK = { ins: 'meta/feed/insights.json', news: 'meta/feed/news.json', st: 'meta/feed/state.json' };
export const HK = { prefix: 'meta/stats/history/', state: 'meta/stats/history/_state.json' };
export const HIST_FIELDS = ['p', 'rk', 'ar', 'cr', 'gr', 'pa', 'va', 'lk', 'ad'];
export const HIST_MONTHS = 24;          // 보관 (이번 달 + 지난 24달)
const MAX_INS = 400 * 1024;             // 받는 크기 한도 (형식 문서: insights 200KB · news 100KB — 여유를 둔다)
const MAX_NEWS = 200 * 1024;

const ymd = (d) => d.toISOString().slice(0, 10);
const addDays = (day, n) => { const t = new Date(day + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + n); return ymd(t); };
async function getJson(env, key) { try { const o = await env.BUCKET.get(key); return o ? await o.json() : null; } catch (_) { return null; } }
async function getText(env, key) { try { const o = await env.BUCKET.get(key); return o ? await o.text() : null; } catch (_) { return null; } }
const META = { httpMetadata: { contentType: 'application/json' } };

// ── 1. 받은 파일 정리 (PHP Insights::cleanInsights·cleanNews 와 같은 결과 — dev/php-test parity "feed") ─────────
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;
const KEY_RE = /^[a-z0-9_-]{1,32}$/;
const LANG_RE = /^[a-z]{2,3}(-[a-z0-9]{2,4})?$/;
// 글자: 제어 문자 → 빈칸, 앞뒤 빈칸 빼기, 글자 수(코드 포인트) 자르기
export function cStr(v, n) {
  if (typeof v !== 'string') return '';
  return Array.from(v.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/^ +| +$/g, '')).slice(0, n).join('');
}
// 주소: http(s) + 눈에 보이는 영어 글자만 (따옴표·<>·\ 와 빈칸·다른 글자 없음). 대소문자 무시(/i)는 쓰지 않는다 — PHP /u 와 섞이면 s·k 가 다른 글자와 같게 취급된다
export function cUrl(v) { return typeof v === 'string' && v.length <= 400 && /^https?:\/\/[^\x00-\x20\x7f-\uffff"'<>\\]+$/.test(v) ? v : null; }
export function cInt(v, min, max) { return typeof v === 'number' && Number.isInteger(v) && v >= min && v <= max ? v : null; }
export function cNum(v) {
  if (typeof v !== 'number' || !Number.isFinite(v) || Math.abs(v) > 1e12) return null;
  const r = Math.round(v * 100) / 100;
  return Object.is(r, -0) ? 0 : r;
}
const MOVES = ['up', 'down', 'same', 'new', 're'];
function cTrack(x) {
  if (!x || typeof x !== 'object' || Array.isArray(x)) return null;
  const id = typeof x.id === 'number' && Number.isInteger(x.id) && x.id > 0 ? String(x.id) : (typeof x.id === 'string' && /^[A-Za-z0-9_-]{1,40}$/.test(x.id) ? x.id : '');
  const title = cStr(x.title, 200);
  if (!id || !title) return null;
  const genres = Array.isArray(x.genres) ? x.genres.filter((g) => typeof g === 'string' && KEY_RE.test(g)).slice(0, 3) : [];
  return { id, title, artist: cStr(x.artist, 200), site: cStr(x.site, 200), site_url: cUrl(x.site_url), page: cUrl(x.page), genres };
}
function cRow(x) {
  if (!x || typeof x !== 'object') return null;
  const track = cTrack(x.track);
  const rank = cInt(x.rank, 1, 1000000);
  if (!track || !rank) return null;
  return {
    rank, prev: cInt(x.prev, 1, 1000000), move: MOVES.includes(x.move) ? x.move : null, jump: cInt(x.jump, -1000000, 1000000),
    listeners: cInt(x.listeners, 0, 1e9), countries: cInt(x.countries, 0, 1000), track,
  };
}
const cRows = (a, n) => (Array.isArray(a) ? a : []).slice(0, n * 2).map(cRow).filter(Boolean).slice(0, n);
export function cleanInsights(d) {
  if (!d || typeof d !== 'object' || d.schema !== 'insights-1') return null;
  const g = d.global && typeof d.global === 'object' ? d.global : {};
  const genres = {};
  const src = d.genres && typeof d.genres === 'object' && !Array.isArray(d.genres) ? d.genres : {};
  for (const k of Object.keys(src).slice(0, 80)) {
    const v = src[k];
    if (!KEY_RE.test(k) || !v || typeof v !== 'object') continue;
    genres[k] = { top: cRows(v.top, 20), rising: cRows(v.rising, 10), tracks: cInt(v.tracks, 0, 1e9) };
  }
  const th = d.threshold && typeof d.threshold === 'object' ? d.threshold : {};
  const to = d.totals && typeof d.totals === 'object' ? d.totals : {};
  const pe = d.period && typeof d.period === 'object' ? d.period : {};
  const day = (v) => (typeof v === 'string' && DAY_RE.test(v) ? v : null);
  return {
    schema: 'insights-1', date: day(d.date), generated_at: typeof d.generated_at === 'string' ? cStr(d.generated_at, 30) : '',
    period: { daily: day(pe.daily), weekly: day(pe.weekly) },
    global: { top: cRows(g.top, 100), rising: cRows(g.rising, 20), new: cRows(g.new, 20) },
    genres,
    threshold: { top100_listeners: cInt(th.top100_listeners, 0, 1e9), rank100_score: cNum(th.rank100_score) },
    totals: { tracks: cInt(to.tracks, 0, 1e12), sites: cInt(to.sites, 0, 1e12), countries: cInt(to.countries, 0, 1000), plays7: cInt(to.plays7, 0, 1e15) },
  };
}
function cLangMap(m, n) {
  const out = {};
  if (!m || typeof m !== 'object' || Array.isArray(m)) return out;
  let c = 0;
  for (const k of Object.keys(m)) {
    if (c >= 20) break;
    const lk = k.toLowerCase();
    const v = cStr(m[k], n);
    if (LANG_RE.test(lk) && v && !(lk in out)) { out[lk] = v; c++; }
  }
  return out;
}
function cChart(c) {
  if (!c || typeof c !== 'object' || !['bar', 'line'].includes(c.type) || !Array.isArray(c.labels) || !Array.isArray(c.series)) return null;
  const labels = c.labels.slice(0, 31).map((x) => cStr(typeof x === 'number' ? String(x) : x, 60));
  if (!labels.length) return null;
  const series = [];
  for (const s of c.series.slice(0, 3)) {
    if (!s || typeof s !== 'object' || !Array.isArray(s.values)) continue;
    const values = labels.map((_, i) => cNum(s.values[i]));
    series.push({ key: typeof s.key === 'string' && /^[a-z0-9_]{1,24}$/.test(s.key) ? s.key : '', label: cLangMap(s.label, 60), values });
  }
  if (!series.length) return null;
  return { type: c.type, labels, series, title: cLangMap(c.title, 120), invert: c.invert === true };
}
export function cleanNews(d) {
  if (!d || typeof d !== 'object' || d.schema !== 'news-1' || !Array.isArray(d.items)) return null;
  const items = [];
  for (const x of d.items.slice(0, 60)) {
    if (items.length >= 30) break;
    if (!x || typeof x !== 'object' || typeof x.id !== 'string' || !/^[A-Za-z0-9_-]{1,64}$/.test(x.id)) continue;
    const title = cLangMap(x.title, 200);
    if (!Object.keys(title).length) continue;
    items.push({
      id: x.id, date: typeof x.date === 'string' && DAY_RE.test(x.date) ? x.date : null, kind: x.kind === 'report' ? 'report' : 'notice',
      title, summary: cLangMap(x.summary, 600), url: cUrl(x.url), chart: cChart(x.chart),
    });
  }
  return { schema: 'news-1', generated_at: typeof d.generated_at === 'string' ? cStr(d.generated_at, 30) : '', items };
}

// ── 2. 받기 (cron 1분마다 부름 — 거의 항상 바로 끝난다) ───────────────────────────────
export const feedBase = (env) => (env.AML_FEED_BASE ? String(env.AML_FEED_BASE) : apiBase(env).replace(/\/api\/v\d+$/, '') + '/feed').replace(/\/+$/, '');
export const feedSlot = (seed) => 45 + (slotOf(String(seed) + ':feed') % (1440 - 45));   // 00:45 ~ 23:59 UTC (aimusiclist 가 00:30 뒤 만든다)
let fmem = { done: '', wait: '', next: 0, slot: null };
async function slotNow(env) {
  if (fmem.slot !== null) return fmem.slot;
  const { data } = await loadAml(env);
  fmem.slot = feedSlot(env.AML_SITE_ID || (data && (data.site_id || data.origin)) || 'aml');
  return fmem.slot;
}
export async function cronFeed(env, scheduledTime, force) {
  const now = new Date(scheduledTime || Date.now());
  const today = ymd(now);
  const minute = now.getUTCHours() * 60 + now.getUTCMinutes();
  if (!force) {
    if (fmem.done === today) return null;
    if (fmem.wait === today && minute < fmem.next) return null;   // 오늘 내 분을 기다리는 중 (R2 를 읽지 않는다)
  }
  const st = (await getJson(env, FK.st)) || {};
  if (!force && st.tried === today) { fmem.done = today; return null; }
  const slot = await slotNow(env);
  const have = !!(st.ins && st.ins.ok_at);
  if (!force && have && minute < slot) { fmem.wait = today; fmem.next = slot; return null; }   // 처음(받은 적 없음)이면 바로
  const out = await refreshFeed(env, st, today);
  fmem.done = today;
  return out;
}
async function getFeed(env, name, old, hasDoc, max, clean) {
  const st = { ok_at: old && old.ok_at || null, etag: old && old.etag || '', error: null };
  let res;
  try {
    const h = { accept: 'application/json' };
    if (st.etag && hasDoc) h['if-none-match'] = st.etag;
    res = await fetch(`${feedBase(env)}/${name}.json`, { headers: h, redirect: 'manual', signal: AbortSignal.timeout(8000) });
  } catch (_) { st.error = 'err.feed.unreachable'; return { st, doc: null }; }
  if (res.status === 304) { st.ok_at = nowIso(); return { st, doc: null }; }
  if (!res.ok) { await res.body?.cancel?.(); st.error = 'err.feed.http'; st.status = res.status; return { st, doc: null }; }
  const len = +(res.headers.get('content-length') || 0);
  if (len > max) { await res.body?.cancel?.(); st.error = 'err.feed.bad'; return { st, doc: null }; }
  const text = await res.text();
  if (text.length > max) { st.error = 'err.feed.bad'; return { st, doc: null }; }
  let d = null; try { d = JSON.parse(text); } catch (_) { /* */ }
  const doc = clean(d);
  if (!doc) { st.error = 'err.feed.bad'; return { st, doc: null }; }
  st.ok_at = nowIso(); st.etag = res.headers.get('etag') || '';
  return { st, doc };
}
// 하루 1번: 두 파일 받기 → 바뀐 것만 R2 에 쓰기 → 받은 기록
export async function refreshFeed(env, oldSt, today) {
  const old = oldSt || (await getJson(env, FK.st)) || {};
  const [hasIns, hasNews] = await Promise.all([env.BUCKET.head(FK.ins), env.BUCKET.head(FK.news)]);
  const a = await getFeed(env, 'insights', old.ins, !!hasIns, MAX_INS, cleanInsights);
  const b = await getFeed(env, 'news', old.news, !!hasNews, MAX_NEWS, cleanNews);
  const puts = [];
  if (a.doc) { a.st.date = a.doc.date; puts.push(env.BUCKET.put(FK.ins, JSON.stringify(a.doc), META)); } else a.st.date = old.ins && old.ins.date || null;
  if (b.doc) { const top = b.doc.items[0]; b.st.last = top ? { id: top.id, date: top.date } : null; puts.push(env.BUCKET.put(FK.news, JSON.stringify(b.doc), META)); }
  else b.st.last = old.news && old.news.last || null;
  const st = { schema: 'site-feed-1', tried: today, at: nowIso(), ins: a.st, news: b.st };
  puts.push(env.BUCKET.put(FK.st, JSON.stringify(st), META));
  await Promise.all(puts);
  return { ins: a.st.error || (a.doc ? 'new' : 'same'), news: b.st.error || (b.doc ? 'new' : 'same') };
}
export async function feedState(env) { return getJson(env, FK.st); }

// ── 3. 쌓기 (PHP Insights::histRow·histMerge 와 같은 규칙 — parity "hist") ───────────────────────────
const nn = (v) => { const n = Math.round(Number(v)); return Number.isFinite(n) && n >= 0 ? Math.min(n, 1e12) : 0; };
// trackIds: 지금 곡 id 목록 / p: {id: 그날 내 사이트 재생} 또는 null(세지 못함) / rank: 내 사이트 순위 {list:[[id,rk,mv]]}·null
// aml: 2-S 정리본(data) 또는 null(그날 받지 못함) → {d, o?, a?, t:{id:[…]}}
export function histRow(day, trackIds, p, rank, aml) {
  const rk = {};
  if (rank && Array.isArray(rank.list)) for (const r of rank.list) if (Array.isArray(r) && Number.isInteger(r[1])) rk[r[0]] = r[1];
  const am = {};
  if (aml && Array.isArray(aml.tracks)) for (const x of aml.tracks) am[x.id] = x;
  const t = {};
  for (const id of trackIds) {
    if (!/^[a-z0-9_-]{1,64}$/.test(id)) continue;
    const x = am[id];
    const v = [p ? nn(p[id]) : null, rk[id] || null,
      x ? x.all_rank || null : null, x ? x.chart_rank || null : null, x ? x.genre_rank || null : null,
      x ? nn(x.plays7) : null, x ? nn(x.valid7) : null, x && x.likes7 != null ? nn(x.likes7) : null, x && x.adds7 != null ? nn(x.adds7) : null];
    while (v.length && v[v.length - 1] === null) v.pop();
    if (v.some((n) => n !== null && n !== 0)) t[id] = v;
  }
  const row = { d: day };
  if (p) row.o = 1;
  if (aml) row.a = 1;
  row.t = t;
  return row;
}
// 같은 날을 다시 쓰면: 새 값이 있는 칸은 새 값, 없는 칸은 옛 값
export function histMerge(old, row) {
  if (!old || old.d !== row.d) return row;
  const t = {};
  const ids = new Set([...Object.keys(old.t || {}), ...Object.keys(row.t || {})]);
  for (const id of ids) {
    const a = (old.t || {})[id] || [], b = (row.t || {})[id] || [];
    const v = [];
    for (let i = 0; i < HIST_FIELDS.length; i++) {
      // 내 사이트 재생은 새로 센 날(o)이면 새 값(없으면 0)이 이긴다, aimusiclist 칸은 새로 받은 날(a)이면 새 값이 이긴다
      const fresh = i === 0 ? row.o : (i === 1 ? true : row.a);
      const nv = b[i] !== undefined ? b[i] : (fresh && i === 0 ? 0 : null);
      v.push(fresh && nv !== null ? nv : (a[i] !== undefined ? a[i] : null));
    }
    while (v.length && v[v.length - 1] === null) v.pop();
    if (v.some((n) => n !== null && n !== 0)) t[id] = v;
  }
  const out = { d: row.d };
  if (old.o || row.o) out.o = 1;
  if (old.a || row.a) out.a = 1;
  out.t = t;
  return out;
}
// 달 파일(한 줄 = 하루, 날짜 순)에 하루 넣기. 글자만 다루고 같은 날·마지막 줄만 푼다.
export function histPut(text, row) {
  const line = JSON.stringify(row);
  if (!text) return line;
  const lines = text.split('\n').filter((x) => x);
  const dayOf = (s) => { const m = /^\{"d":"(\d{4}-\d{2}-\d{2})"/.exec(s); return m ? m[1] : ''; };
  const last = dayOf(lines[lines.length - 1]);
  if (row.d > last) { lines.push(line); return lines.join('\n'); }
  for (let i = lines.length - 1; i >= 0; i--) {
    const d = dayOf(lines[i]);
    if (d === row.d) { let o = null; try { o = JSON.parse(lines[i]); } catch (_) { /* */ } lines[i] = JSON.stringify(histMerge(o, row)); return lines.join('\n'); }
    if (d < row.d) { lines.splice(i + 1, 0, line); return lines.join('\n'); }
  }
  lines.unshift(line);
  return lines.join('\n');
}
export const monthOf = (day) => day.slice(0, 7);
export function monthsBack(today, n) {
  const out = [];
  let y = +today.slice(0, 4), m = +today.slice(5, 7);
  for (let i = 0; i < n; i++) { out.push(y + '-' + String(m).padStart(2, '0')); m--; if (m < 1) { m = 12; y--; } }
  return out;
}
// 하루 집계에서 부른다: rows = [{d, o?, a?, t}] (날짜 순). 달이 바뀌어 새 파일을 만들 때 24달보다 오래된 파일을 지운다.
export async function histWrite(env, rows) {
  if (!rows.length) return { months: [] };
  const st = (await getJson(env, HK.state)) || {};
  const byMonth = {};
  for (const r of rows) (byMonth[monthOf(r.d)] = byMonth[monthOf(r.d)] || []).push(r);
  const made = [];
  for (const m of Object.keys(byMonth).sort()) {
    const key = HK.prefix + m + '.json';
    let text = await getText(env, key);
    if (text === null) made.push(m);
    for (const r of byMonth[m]) text = histPut(text, r);
    await env.BUCKET.put(key, text, { httpMetadata: { contentType: 'text/plain; charset=utf-8' } });
  }
  const days = rows.map((r) => r.d).sort();
  const ns = { schema: 'site-hist-1', first: st.first && st.first < days[0] ? st.first : days[0], last: st.last && st.last > days[days.length - 1] ? st.last : days[days.length - 1], at: nowIso() };
  await env.BUCKET.put(HK.state, JSON.stringify(ns), META);
  if (made.length) await histPrune(env, days[days.length - 1]);
  return { months: Object.keys(byMonth), made };
}
export async function histPrune(env, today) {
  const keep = new Set(monthsBack(today, HIST_MONTHS + 1));
  let cursor;
  const del = [];
  do {
    const l = await env.BUCKET.list({ prefix: HK.prefix, cursor });
    for (const o of l.objects) { const m = /(\d{4}-\d{2})\.json$/.exec(o.key); if (m && !keep.has(m[1])) del.push(o.key); }
    cursor = l.truncated ? l.cursor : undefined;
  } while (cursor);
  if (del.length) await env.BUCKET.delete(del);
  return del;
}

// ── 4. 관리 API: GET /api/admin/insights?months=N (저장본만) ───────────────────────────────
// 응답: {ok, server, d, hist:{first,last}, months:[[하루,…] 새 달 먼저], insights, news, feed:{tried,at,ins,news}, aml(2-S 저장본), hosts, setup}
// 달 파일은 풀지 않고 줄을 쉼표로 이어 붙인다 (Worker CPU 10ms 안 — 2년치여도 글자 붙이기만).
export async function adminInsights(env, url) {
  const today = ymd(new Date());
  let n = parseInt(url.searchParams.get('months') || '4', 10);
  if (!Number.isFinite(n) || n < 1) n = 4;
  n = Math.min(HIST_MONTHS + 1, n);
  const months = monthsBack(today, n);
  const [texts, hs, ins, news, fst, amlTxt, { data: aml }, on] = await Promise.all([
    Promise.all(months.map((m) => getText(env, HK.prefix + m + '.json'))), getText(env, HK.state),
    getText(env, FK.ins), getText(env, FK.news), getJson(env, FK.st), getText(env, SK.aml), loadAml(env), aeOn(env),
  ]);
  const raw = (s) => (typeof s === 'string' && /^\s*[{[]/.test(s) ? s : 'null');
  const arr = (s) => '[' + (s ? s.split('\n').filter((x) => x.charAt(0) === '{').join(',') : '') + ']';
  const feed = fst ? { tried: fst.tried || null, at: fst.at || null, ins: pick(fst.ins), news: pick(fst.news) } : null;
  const hosts = hostsOf(env, aml);
  const body = '{"ok":true,"server":"workers","d":' + JSON.stringify(today) + ',"hist":' + raw(hs) +
    ',"months":[' + texts.map((x) => arr(x)).join(',') + '],"insights":' + raw(ins) + ',"news":' + raw(news) +
    ',"feed":' + JSON.stringify(feed) + ',"aml":' + raw(amlTxt) + ',"hosts":' + JSON.stringify(hosts) +
    ',"setup":' + JSON.stringify({ own: on, visits: STATS_VISITS, months: n, feed_slot: await slotNow(env) }) + '}';
  return new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}
function pick(s) { return s ? { ok_at: s.ok_at || null, error: s.error || null, date: s.date || null, last: s.last || null } : null; }
