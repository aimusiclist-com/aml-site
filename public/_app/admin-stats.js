/* public/_app/admin-stats.js — 관리 화면 "통계" 탭 (채팅 3-12). 탭을 처음 열 때만 받는다(admin.js statsTab).
 * -----------------------------------------------------------------------------
 * 데이터: GET /api/admin/stats → { sum(하루 1번 cron 이 만든 저장본), rank(인기 순위), aml(우리사이트 2-S 저장본), today(오늘, 5분 보관), setup }
 *   sum.days  = [[날짜, 방문, 재생 시작, aimusiclist 화면에서 온 재생, 방명록 글], …]  (UTC, 400일)
 *   sum.dims  = { cc|dev|lang|ref|refd: [[키, 7일, 30일, 90일], …] }   sum.hours = { v|p: [[시, 7일, 30일, 90일] ×24] }
 *   sum.tracks = [[곡 id, 재생 7·30·90일, aimusiclist 화면 재생 7·30·90일], …]
 * 서버는 계산하지 않는다 — 기간 합계·이전 기간 대비·앨범별·CSV 는 모두 이 브라우저가 계산한다.
 * 그래프는 SVG 직접(외부 라이브러리 0). 받은 글자(곡 이름·도메인 등)는 모두 esc() 로 글자로만 넣는다.
 * Workers판·PHP판·meshmelo 같은 파일 (server·setup 값으로 안내만 다르다).
 * 3-14 [지금 새로 고침]: POST /api/admin/stats/refresh (setup.refresh.on 일 때만 버튼, 1분에 1번) → 내 사이트 숫자(오늘 포함)를 바로 다시 센다.
 *      aimusiclist 숫자는 하루 1번 그대로(우리사이트도 하루 1번 만든다). 통계를 셀 수 없는 사이트는 버튼 대신 지금의 안내.
 * -----------------------------------------------------------------------------
 */
(function () {
  'use strict';
  var AML = window.AML, t = AML.t, A = AML.admin, S = A.S, esc = A.esc;
  var P = { days: 30, data: null, at: 0, loading: null, err: null, rmsg: null, tick: 0 };
  var PERIODS = [7, 30, 90];
  var COL = { 7: 1, 30: 2, 90: 3 };
  var C_PLAY = 'var(--st-play)', C_VISIT = 'var(--st-visit)';

  function $(id) { return document.getElementById(id); }
  function n(x) { return A.fmtNum(Math.round(+x || 0)); }
  function approx(x) { return t('stats.approx', { n: n(x) }); }
  function ymdAdd(d, k) { var x = new Date(d + 'T00:00:00Z'); x.setUTCDate(x.getUTCDate() + k); return x.toISOString().slice(0, 10); }
  function todayUtc() { return new Date().toISOString().slice(0, 10); }
  function trackOf(id) { return (S.state.tracks || []).filter(function (x) { return x.id === id; })[0]; }
  function fmtDay(d) {
    var x = new Date(d + 'T00:00:00Z');
    try { return x.toLocaleDateString(AML.lang, { month: 'numeric', day: 'numeric', timeZone: 'UTC' }); } catch (e) { return d.slice(5); }
  }
  function regionName(cc) {
    if (cc === 'XX' || cc === 'T1') return t('stats.unknown');
    try { return new Intl.DisplayNames([AML.lang], { type: 'region' }).of(cc) || cc; } catch (e) { return cc; }
  }
  function langName(c) {
    if (!c || c === 'xx') return t('stats.unknown');
    try { return new Intl.DisplayNames([AML.lang], { type: 'language' }).of(c) || c; } catch (e) { return c; }
  }
  function mvText(mv) {
    if (mv === 'new') return { cls: 'up', txt: 'NEW' };
    if (mv === 're') return { cls: 'same', txt: 'RE' };
    if (typeof mv === 'number' && mv > 0) return { cls: 'up', txt: '▲' + mv };
    if (typeof mv === 'number' && mv < 0) return { cls: 'down', txt: '▼' + (-mv) };
    if (mv === 0) return { cls: 'same', txt: '–' };
    return null;
  }

  // ── 불러오기 (5분 보관 — 탭을 오가도 다시 받지 않음) ──
  function load(force) {
    if (!force && P.data && Date.now() - P.at < 5 * 60 * 1000) return Promise.resolve(P.data);
    if (P.loading) return P.loading;
    P.loading = A.api('GET', '/api/admin/stats').then(function (r) { P.data = r; P.at = Date.now(); P.err = null; return r; })
      .catch(function (e) { P.err = e; return null; })
      .then(function (r) { P.loading = null; return r; });
    return P.loading;
  }
  function open() {
    P.rmsg = null;
    if (!S.usage) A.loadUsage(false);
    var root = $('stats-root'); if (!root) return;
    if (P.data) draw(); else root.innerHTML = '<section class="card"><p class="muted">' + esc(t('admin.loading')) + '</p></section>';
    load(false).then(function () { if (S.tab === 'stats') draw(); });
  }

  // ── 기간 합계 ──
  function dayRows(sum) {
    var m = {};
    ((sum && sum.days) || []).forEach(function (r) { if (Array.isArray(r) && typeof r[0] === 'string') m[r[0]] = r; });
    return m;
  }
  function lastDay(sum) { return sum && sum.d ? ymdAdd(sum.d, -1) : ymdAdd(todayUtc(), -1); }
  function series(sum, days, idx, end) {
    var m = dayRows(sum), out = [];
    for (var i = days - 1; i >= 0; i--) { var d = ymdAdd(end, -i); out.push([d, m[d] ? +m[d][idx] || 0 : 0]); }
    return out;
  }
  function total(sum, days, idx, offset) {
    var m = dayRows(sum), end = ymdAdd(lastDay(sum), -(offset || 0)), s = 0, has = false;
    for (var i = 0; i < days; i++) { var r = m[ymdAdd(end, -i)]; if (r) { s += +r[idx] || 0; has = true; } }
    return { s: s, has: has };
  }
  function delta(cur, prev) {
    if (!prev.has || !prev.s) return '<span class="st-d muted">' + esc(t('stats.no_prev')) + '</span>';
    var p = Math.round((cur - prev.s) / prev.s * 100);
    var cls = p > 0 ? 'up' : p < 0 ? 'down' : 'same';
    var ar = p > 0 ? '▲' : p < 0 ? '▼' : '–';
    return '<span class="st-d st-' + cls + '">' + ar + ' ' + Math.abs(p) + '% <span class="muted">' + esc(t('stats.vs_prev', { n: P.days })) + '</span></span>';
  }
  function amlDays(r) { return r && r.aml && r.aml.data && Array.isArray(r.aml.data.days) ? r.aml.data.days : []; }
  function amlTotal(r, key, days, offset, end) {
    var m = {}, s = 0, has = false;
    amlDays(r).forEach(function (x) { m[x.d] = x; });
    var last = ymdAdd(end, -(offset || 0));
    for (var i = 0; i < days; i++) { var x = m[ymdAdd(last, -i)]; if (x) { s += +x[key] || 0; has = true; } }
    return { s: s, has: has };
  }

  // ── 그래프 (SVG 막대, 하나에 한 가지 숫자 — 두 숫자를 한 축에 섞지 않는다) ──
  var CW = 640;   // 그래프 너비 = 화면 폭에 맞춘 SVG 좌표 (글자가 휴대폰에서 작아지지 않게)
  function barChart(rows, color, label) {
    var W = CW, H = W < 500 ? 140 : 150, L = 34, R = 6, T = 10, B = 22;
    var max = 0; rows.forEach(function (r) { if (r[1] > max) max = r[1]; });
    var top = max <= 4 ? 4 : niceMax(max);
    var cw = (W - L - R) / rows.length, bw = Math.max(1, cw - (rows.length > 60 ? 1 : 2));
    var y = function (v) { return T + (H - T - B) * (1 - v / top); };
    var g = '<line class="st-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(top) + '" y2="' + y(top) + '"/>' +
      '<line class="st-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(top / 2) + '" y2="' + y(top / 2) + '"/>' +
      '<line class="st-axis" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0) + '" y2="' + y(0) + '"/>' +
      '<text class="st-tick" x="' + (L - 6) + '" y="' + (y(top) + 4) + '" text-anchor="end">' + esc(n(top)) + '</text>' +
      '<text class="st-tick" x="' + (L - 6) + '" y="' + (y(top / 2) + 4) + '" text-anchor="end">' + esc(n(top / 2)) + '</text>' +
      '<text class="st-tick" x="' + (L - 6) + '" y="' + (y(0) + 4) + '" text-anchor="end">0</text>';
    var bars = rows.map(function (r, i) {
      var x = L + i * cw + (cw - bw) / 2, h = Math.max(0, y(0) - y(r[1]));
      var tip = (r[2] || fmtDay(r[0])) + ' · ' + n(r[1]);
      return '<g class="st-bar"><rect class="st-hit" x="' + (L + i * cw).toFixed(1) + '" y="' + T + '" width="' + cw.toFixed(1) + '" height="' + (H - T - B) + '"/>' +
        (r[1] > 0 ? '<rect x="' + x.toFixed(1) + '" y="' + y(r[1]).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="' + Math.min(3, bw / 2).toFixed(1) + '" fill="' + color + '"/>' : '') +
        '<title>' + esc(tip) + '</title></g>';
    }).join('');
    var lab = function (i) {   // 처음 = 왼쪽 맞춤, 끝 = 오른쪽 맞춤 (가장자리에서 잘리지 않게)
      var r = rows[i]; if (!r) return '';
      var a = rows.length > 2 && i === 0 ? 'start' : rows.length > 2 && i === rows.length - 1 ? 'end' : 'middle';
      var x = a === 'start' ? L + i * cw : a === 'end' ? L + (i + 1) * cw : L + i * cw + cw / 2;
      return '<text class="st-tick" x="' + x.toFixed(1) + '" y="' + (H - 6) + '" text-anchor="' + a + '">' + esc(r[2] || fmtDay(r[0])) + '</text>';
    };
    var xl = rows.length > 2 ? lab(0) + lab(Math.floor((rows.length - 1) / 2)) + lab(rows.length - 1) : rows.map(function (_, i) { return lab(i); }).join('');
    return '<svg class="st-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(label) + '">' + g + bars + xl + '</svg>';
  }
  function niceMax(v) { var p = Math.pow(10, Math.floor(Math.log10(v))), f = v / p; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p; }
  function listBars(rows, label, fmtKey) {
    if (!rows.length) return '<p class="muted">' + esc(t('stats.empty')) + '</p>';
    var max = rows[0][1] || 1, sumAll = rows.reduce(function (a, r) { return a + r[1]; }, 0) || 1;
    return '<ul class="st-list" aria-label="' + esc(label) + '">' + rows.map(function (r) {
      return '<li><span class="st-k">' + esc(fmtKey ? fmtKey(r[0]) : r[0]) + '</span><span class="st-v">' + esc(n(r[1])) + ' <span class="muted">' + Math.round(r[1] / sumAll * 100) + '%</span></span>' +
        '<span class="st-lb"><span style="width:' + (r[1] / max * 100).toFixed(1) + '%"></span></span></li>';
    }).join('') + '</ul>';
  }
  function dimRows(sum, name, limit) {
    var c = COL[P.days];
    return (((sum && sum.dims) || {})[name] || []).map(function (r) { return [r[0], +r[c] || 0]; })
      .filter(function (r) { return r[1] > 0; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, limit || 10);
  }

  // ── 그리기 ──
  function draw() {
    var root = $('stats-root'); if (!root) return;
    CW = Math.max(300, Math.min(760, (root.clientWidth || 680) - 40));
    var r = P.data, sum = r && r.sum, setup = (r && r.setup) || {};
    var head = '<div class="row"><h2 class="grow" style="margin:0;white-space:nowrap" data-help="help.stats.title">' + esc(t('stats.title')) + '</h2><span class="st-seg" role="group" data-help="help.stats.period" data-help-name="' + esc(t('stats.period')) + '" aria-label="' + esc(t('stats.period')) + '">' +
      PERIODS.map(function (d) { return '<button type="button" class="small' + (d === P.days ? ' primary' : '') + '" data-st="days" data-v="' + d + '"' + (d === P.days ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + esc(t('stats.days', { n: d })) + '</button>'; }).join('') +
      '</span>' + refreshBtn(setup) + '</div>';
    if (!r) {
      root.innerHTML = '<section class="card">' + head + '<p class="msg err">' + esc(t('stats.err', { reason: AML.errText(P.err) })) + '</p></section>';
      return;
    }
    var slot = setup.slot != null ? ('0' + setup.slot).slice(-2) : '';
    var when = sum && sum.at ? t('stats.updated', { time: A.fmtClock(sum.at), mm: slot }) : t('stats.never', { mm: slot });
    var notes = [];
    // [글, ? 표시] — ? 키는 글자 그대로 써 둔다(검사기가 찾을 수 있게)
    if (setup.mode === 'disk') notes.push([t('stats.setup.disk'), ' data-help="help.stats.note.off"']);
    else if (setup.mode === 'media_worker') notes.push([t('stats.setup.media_worker'), ' data-help="help.stats.note.off"']);
    else if (setup.mode === 'mm_off') notes.push([t('stats.setup.mm_off'), ' data-help="help.stats.note.off"']);
    else if (setup.dataset === false) notes.push([t('stats.setup.dataset'), ' data-help="help.stats.note.dataset"']);
    else if (setup.token === false) notes.push([t('stats.setup.token'), ' data-help="help.stats.note.token"']);
    if (setup.visits === false) notes.push([t('stats.setup.no_visits'), ' data-help="help.stats.note.no_visits"']);
    if (sum && sum.error && setup.token !== false && setup.dataset !== false && setup.mode !== 'disk' && setup.mode !== 'media_worker' && setup.mode !== 'mm_off') notes.push([t('stats.err', { reason: AML.errText(sum.error) }) + (sum.stale ? ' ' + t('stats.stale') : ''), ' data-help="help.stats.note.error"']);
    var todayAt = r.today && r.today_at ? ' ' + t('stats.today_at', { time: A.fmtClock(r.today_at) }) : '';
    var html = '<section class="card st">' + head + '<p class="muted" style="margin:6px 0 0" data-help="help.stats.updated">' + esc(when + todayAt) + ' ' + esc(t('stats.approx_note')) + '</p>' +
      (P.rmsg ? '<p class="msg' + (P.rmsg.err ? ' err' : ' ok') + '" id="st-rmsg" role="status" style="margin:6px 0 0">' + esc(P.rmsg.text) + '</p>' : '') +
      notes.map(function (x) { return '<p class="notice row" style="margin:10px 0 0"' + x[1] + '>' + esc(x[0]) + '</p>'; }).join('') +
      kpis(r, sum, setup) + trends(r, sum, setup) + '</section>' +
      tracksCard(r, sum) + albumsCard(r, sum) + audienceCard(sum, setup) + amlCard(r) + freeCard(r) +
      '<section class="card"><div class="row"><button type="button" class="small" data-st="csv-days" data-help="help.stats.csv.days">' + esc(t('stats.csv.days')) + '</button>' +
      '<button type="button" class="small" data-st="csv-tracks" data-help="help.stats.csv.tracks">' + esc(t('stats.csv.tracks')) + '</button><span class="muted">' + esc(t('stats.csv.note', { n: P.days })) + '</span></div></section>';
    root.innerHTML = STYLE + html;
    tickWait();
  }

  // 3-14 [지금 새로 고침]: 셀 수 있는 사이트만 (아니면 버튼 없이 위 안내)
  function refreshInfo(setup) { return (setup && setup.refresh) || { on: false }; }
  function refreshBtn(setup) {
    var rf = refreshInfo(setup);
    if (!rf.on) return '';
    var wait = waitLeft(rf);
    return '<button type="button" class="small primary" data-st="refresh" id="st-refresh" data-help="help.stats.refresh" data-help-name="' + esc(t('stats.refresh_now')) + '" title="' + esc(rf.left <= 0 ? t('err.stats.too_many', { max: rf.max }) : t('stats.refresh_help')) + '"' + (wait > 0 || rf.left <= 0 ? ' disabled' : '') + '>' +
      esc(wait > 0 ? t('stats.refresh_wait', { n: wait }) : t('stats.refresh_now')) + '</button>';
  }
  function waitLeft(rf) { return rf.wait > 0 ? Math.max(0, Math.ceil(rf.wait - (Date.now() - P.at) / 1000)) : 0; }
  // 1분이 지나면 버튼을 다시 켠다 (숫자만 바꾼다 — 다시 그리지 않음)
  function tickWait() {
    clearTimeout(P.tick);
    var rf = refreshInfo(P.data && P.data.setup), b = $('st-refresh');
    if (!b || !rf.on || S.tab !== 'stats') return;
    var w = waitLeft(rf);
    b.textContent = w > 0 ? t('stats.refresh_wait', { n: w }) : t('stats.refresh_now');
    b.disabled = w > 0 || rf.left <= 0;
    if (w > 0) P.tick = setTimeout(tickWait, 1000);
  }
  function refreshNow(b) {
    b.disabled = true; b.textContent = t('admin.loading');
    A.api('POST', '/api/admin/stats/refresh').then(function (r) {
      P.data = r; P.at = Date.now(); P.err = null;
      P.rmsg = { text: t('stats.refreshed', { time: A.fmtClock(r.today_at || new Date().toISOString()) }) };
      if (A.loadPlays) A.loadPlays();   // 곡 목록 "재생" 칸도 같은 숫자로
    }).catch(function (e) {
      P.rmsg = { err: true, text: AML.errText(e) };
      if (e && e.code === 'err.stats.too_soon' && P.data && P.data.setup && P.data.setup.refresh) { P.data.setup.refresh.wait = +(e.params && e.params.wait) || 60; P.at = Date.now(); }
    }).then(function () { if (S.tab === 'stats') draw(); });
  }

  function kpis(r, sum, setup) {
    var td = r.today || null;
    var items = [];
    if (setup.visits !== false) items.push({ k: 'stats.k.visits', idx: 1, today: td && td.v, approx: true, h: ' data-help="help.stats.tile.visits"' });
    items.push({ k: 'stats.k.plays', idx: 2, today: td && td.p, h: ' data-help="help.stats.tile.plays"' });
    items.push({ k: 'stats.k.plays_aml', idx: 3, today: td && td.pa, help: 'stats.k.plays_aml_help', h: ' data-help="help.stats.tile.plays_aml"' });
    items.push({ k: 'stats.k.gb', idx: 4, today: td && td.g, h: ' data-help="help.stats.tile.gb"' });
    return '<div class="st-kpis">' + items.map(function (it) {
      var cur = total(sum, P.days, it.idx, 0), prev = total(sum, P.days, it.idx, P.days);
      return '<div class="st-kpi"><span class="st-kl"' + it.h + ' data-help-name="' + esc(t(it.k)) + '">' + esc(t(it.k)) + (it.help ? ' <span class="muted" title="' + esc(t(it.help)) + '">ⓘ</span>' : '') + '</span>' +
        '<b class="st-kv">' + esc(it.approx ? approx(cur.s) : n(cur.s)) + '</b>' +
        '<span class="muted">' + esc(t('stats.total', { n: P.days })) + '</span>' + delta(cur.s, prev) +
        '<span class="st-today">' + esc(t('stats.today')) + ' <b>' + (it.today == null ? '–' : esc(n(it.today))) + '</b></span></div>';
    }).join('') + '</div>';
  }
  function trends(r, sum, setup) {
    var end = lastDay(sum), out = '';
    var plays = series(sum, P.days, 2, end);
    out += '<h3 data-help="help.stats.trend">' + esc(t('stats.trend.plays')) + '</h3>' + barChart(plays, C_PLAY, t('stats.trend.plays'));
    if (setup.visits !== false) {
      var visits = series(sum, P.days, 1, end);
      out += '<h3 data-help="help.stats.trend">' + esc(t('stats.trend.visits')) + '</h3>' + barChart(visits, C_VISIT, t('stats.trend.visits'));
    }
    var m = dayRows(sum);
    var rows = series(sum, P.days, 2, end).slice().reverse().map(function (x) {
      var d = m[x[0]] || [x[0], 0, 0, 0, 0];
      return '<tr><td>' + esc(x[0]) + '</td>' + (setup.visits !== false ? '<td class="num">' + esc(n(d[1])) + '</td>' : '') + '<td class="num">' + esc(n(d[2])) + '</td><td class="num">' + esc(n(d[3])) + '</td><td class="num">' + esc(n(d[4])) + '</td></tr>';
    }).join('');
    out += '<details class="guide" style="margin-top:8px"><summary data-help="help.stats.table_view">' + esc(t('stats.table_view')) + '</summary><div class="st-scroll"><table><thead><tr><th data-help="help.stats.col.date">' + esc(t('stats.col.date')) + '</th>' +
      (setup.visits !== false ? '<th data-help="help.stats.tile.visits">' + esc(t('stats.k.visits')) + '</th>' : '') + '<th data-help="help.stats.tile.plays">' + esc(t('stats.k.plays')) + '</th><th data-help="help.stats.tile.plays_aml">' + esc(t('stats.k.plays_aml')) + '</th><th data-help="help.stats.tile.gb">' + esc(t('stats.k.gb')) + '</th></tr></thead><tbody>' + rows + '</tbody></table></div></details>';
    return out;
  }

  // 곡별: 내 사이트 재생(기간) · 인기 순위·변동 · aimusiclist(7일·차트 순위·장르 순위)
  function trackRows(r, sum) {
    var c = COL[P.days], rk = {}, aml = {}, rows = {};
    ((r.rank && r.rank.list) || []).forEach(function (x) { rk[x[0]] = x; });
    ((r.aml && r.aml.data && r.aml.data.tracks) || []).forEach(function (x) { aml[x.id] = x; });
    ((sum && sum.tracks) || []).forEach(function (x) { rows[x[0]] = { id: x[0], p: +x[c] || 0, pa: +x[c + 3] || 0 }; });
    Object.keys(aml).forEach(function (id) { if (!rows[id]) rows[id] = { id: id, p: 0, pa: 0 }; });
    Object.keys(rk).forEach(function (id) { if (!rows[id]) rows[id] = { id: id, p: 0, pa: 0 }; });
    var lk = r.likes && r.likes.cum && typeof r.likes.cum === 'object' ? r.likes.cum : {};   // 3-18 내 사이트 ♥ (누적)
    Object.keys(lk).forEach(function (id) { if (!rows[id] && +lk[id] > 0) rows[id] = { id: id, p: 0, pa: 0 }; });
    return Object.keys(rows).map(function (id) { var o = rows[id]; o.rk = rk[id]; o.aml = aml[id]; o.lk = +lk[id] || 0; o.tr = trackOf(id); return o; })
      .filter(function (o) { return o.tr; })
      .sort(function (a, b) { return ((a.rk ? a.rk[1] : 1e9) - (b.rk ? b.rk[1] : 1e9)) || (b.p - a.p) || ((b.aml ? b.aml.plays7 : 0) - (a.aml ? a.aml.plays7 : 0)); });
  }
  // (2-X) aimusiclist 모든 곡 순위: "3,251위 ▲120 / 최고 812위" (순위가 없으면 –)
  function allRank(a) {
    if (!a || !a.all_rank) return '<span class="muted">–</span>';
    var m = a.all_rank_move, d = m === 'up' || m === 'down' || m === 'same' ? (a.all_rank_prev || a.all_rank) - a.all_rank : m;
    var mv = mvText(d);
    if (mv && typeof d === 'number' && d !== 0) mv.txt = (d > 0 ? '▲' : '▼') + n(Math.abs(d));
    return esc(t('stats.all_rank.now', { n: n(a.all_rank) })) + (mv ? ' <span class="st-' + mv.cls + '">' + esc(mv.txt) + '</span>' : '') +
      '<br><span class="muted">' + esc(t('stats.all_rank.best', { n: n(a.all_rank_best || a.all_rank) })) + '</span>';
  }
  function tracksCard(r, sum) {
    var list = trackRows(r, sum), hasAml = !!(r.aml && r.aml.data && r.aml.data.tracks && r.aml.data.tracks.length);
    var hasAll = hasAml && r.aml.data.tracks.some(function (x) { return x.all_rank; });
    var hasLk = !!(r.likes && r.likes.cum && Object.keys(r.likes.cum).length);   // 3-18
    var basis = r.rank && r.rank.basis ? 'stats.rank_basis.' + r.rank.basis : 'stats.rank_basis.none';
    var body = list.length ? '<div class="st-scroll"><table><thead><tr><th data-help="help.stats.col.rank">' + esc(t('stats.col.rank')) + '</th><th>' + esc(t('stats.col.title')) + '</th><th data-help="help.stats.col.plays">' + esc(t('stats.col.plays', { n: P.days })) + '</th><th data-help="help.stats.col.plays_aml">' + esc(t('stats.col.plays_aml')) + '</th>' +
      (hasLk ? '<th data-help="help.stats.col.likes" title="' + esc(t('stats.likes.help')) + '">' + esc(t('stats.col.likes')) + '</th>' : '') +
      (hasAml ? '<th data-help="help.stats.col.aml_plays7">' + esc(t('stats.col.aml_plays7')) + '</th><th data-help="help.stats.col.aml_valid7">' + esc(t('stats.col.aml_valid7')) + '</th><th data-help="help.stats.col.chart">' + esc(t('stats.col.chart')) + '</th><th data-help="help.stats.col.genre_rank">' + esc(t('stats.col.genre_rank')) + '</th>' +
        (hasAll ? '<th data-help="help.stats.col.all_rank" data-help-name="' + esc(t('stats.col.all_rank')) + '" title="' + esc(t('stats.all_rank.help')) + '">' + esc(t('stats.col.all_rank')) + ' <span class="muted">ⓘ</span></th>' : '') : '') +
      '</tr></thead><tbody>' + list.slice(0, 100).map(function (o) {
        var mv = o.rk ? mvText(o.rk[2]) : null;
        var a = o.aml, ch = '';
        if (a && a.chart_rank) {
          var d = a.chart_rank_prev ? a.chart_rank_prev - a.chart_rank : 'new';
          var m2 = mvText(d);
          ch = '#' + n(a.chart_rank) + (m2 ? ' <span class="st-' + m2.cls + '">' + esc(m2.txt) + '</span>' : '');
        }
        return '<tr><td class="st-rk">' + (o.rk ? '<b>' + o.rk[1] + '</b>' + (mv ? ' <span class="st-' + mv.cls + '">' + esc(mv.txt) + '</span>' : '') : '<span class="muted">–</span>') + '</td>' +
          '<td><b>' + esc(o.tr.title) + '</b><br><span class="muted">' + esc(A.artistName(o.tr)) + '</span></td>' +
          '<td class="num">' + esc(n(o.p)) + '</td><td class="num">' + esc(n(o.pa)) + '</td>' +
          (hasLk ? '<td class="num">' + (o.lk ? esc(n(o.lk)) : '<span class="muted">–</span>') + '</td>' : '') +
          (hasAml ? '<td class="num">' + (a ? esc(n(a.plays7)) : '–') + '</td><td class="num">' + (a ? esc(n(a.valid7)) : '–') + '</td><td>' + (ch || '<span class="muted">–</span>') + '</td><td class="num">' + (a && a.genre_rank ? '#' + esc(n(a.genre_rank)) : '–') + '</td>' +
            (hasAll ? '<td class="st-all">' + allRank(a) + '</td>' : '') : '') +
          '</tr>';
      }).join('') + '</tbody></table></div>' : '<p class="muted">' + esc(t('stats.empty')) + '</p>';
    return '<section class="card"><h2 data-help="help.stats.tracks">' + esc(t('stats.tracks')) + '</h2><p class="muted" style="margin:-6px 0 8px" data-help="help.stats.rank_basis">' + esc(t(basis)) + '</p>' +
      (hasAll ? '<p class="muted" style="margin:0 0 8px">' + esc(t('stats.all_rank.slogan')) + '</p>' : '') + body + '</section>';
  }
  function albumsCard(r, sum) {
    var albums = S.state.albums || [];
    if (!albums.length) return '';
    var c = COL[P.days], p = {}, aml = {};
    ((sum && sum.tracks) || []).forEach(function (x) { p[x[0]] = (+x[c] || 0) + (+x[c + 3] || 0); });
    ((r.aml && r.aml.data && r.aml.data.tracks) || []).forEach(function (x) { aml[x.id] = x.plays7 || 0; });
    var rows = albums.map(function (a) {
      var s = 0, s2 = 0; (a.track_ids || []).forEach(function (id) { s += p[id] || 0; s2 += aml[id] || 0; });
      return { a: a, s: s, s2: s2 };
    }).sort(function (x, y) { return y.s - x.s || y.s2 - x.s2; });
    return '<section class="card"><h2 data-help="help.stats.albums">' + esc(t('stats.albums')) + '</h2><div class="st-scroll"><table><thead><tr><th>' + esc(t('stats.col.album')) + '</th><th>' + esc(t('stats.col.songs')) + '</th><th data-help="help.stats.album.plays">' + esc(t('stats.col.plays', { n: P.days })) + '</th><th data-help="help.stats.album.aml_plays7">' + esc(t('stats.col.aml_plays7')) + '</th></tr></thead><tbody>' +
      rows.map(function (o) { return '<tr><td><b>' + esc(o.a.title) + '</b></td><td class="num">' + (o.a.track_ids || []).length + '</td><td class="num">' + esc(n(o.s)) + '</td><td class="num">' + esc(n(o.s2)) + '</td></tr>'; }).join('') +
      '</tbody></table></div></section>';
  }
  function audienceCard(sum, setup) {
    var hrs = hoursBlock(sum, setup);
    var devKey = function (k) { var s = t('stats.dev.' + k); return s === 'stats.dev.' + k ? k : s; };
    if (setup.visits === false) {   // PHP판·meshmelo: 방문은 못 세고, 나라·기기·언어는 재생 기준
      var dims = sum && sum.dims && (sum.dims.cc || sum.dims.dev || sum.dims.lang);
      if (!hrs && !dims) return '';
      return '<section class="card"><h2 data-help="help.stats.listeners">' + esc(t('stats.listeners')) + '</h2>' + (dims ? '<div class="st-grid2">' +
        '<div><h3 data-help="help.stats.countries">' + esc(t('stats.countries')) + '</h3>' + listBars(dimRows(sum, 'cc', 10), t('stats.countries'), regionName) + '</div>' +
        '<div><h3 data-help="help.stats.devices">' + esc(t('stats.devices')) + '</h3>' + listBars(dimRows(sum, 'dev', 4), t('stats.devices'), devKey) + '</div>' +
        '<div><h3 data-help="help.stats.langs">' + esc(t('stats.langs')) + '</h3>' + listBars(dimRows(sum, 'lang', 10), t('stats.langs'), langName) + '</div></div>' : '') + hrs + '</section>';
    }
    var refKey = function (k) { var s = t('stats.ref.' + k); return s === 'stats.ref.' + k ? k : s; };
    return '<section class="card"><h2 data-help="help.stats.audience">' + esc(t('stats.audience')) + '</h2><div class="st-grid2">' +
      '<div><h3 data-help="help.stats.countries">' + esc(t('stats.countries')) + '</h3>' + listBars(dimRows(sum, 'cc', 10), t('stats.countries'), regionName) + '</div>' +
      '<div><h3 data-help="help.stats.refs">' + esc(t('stats.refs')) + '</h3>' + listBars(dimRows(sum, 'ref', 8), t('stats.refs'), refKey) + '</div>' +
      '<div><h3 data-help="help.stats.domains">' + esc(t('stats.domains')) + '</h3>' + listBars(dimRows(sum, 'refd', 10), t('stats.domains')) + '</div>' +
      '<div><h3 data-help="help.stats.devices">' + esc(t('stats.devices')) + '</h3>' + listBars(dimRows(sum, 'dev', 4), t('stats.devices'), devKey) + '</div>' +
      '<div><h3 data-help="help.stats.langs">' + esc(t('stats.langs')) + '</h3>' + listBars(dimRows(sum, 'lang', 10), t('stats.langs'), langName) + '</div>' +
      '</div>' + hrs + '</section>';
  }
  // 시간대: 저장은 UTC, 보여 줄 때 내 컴퓨터 시각으로 옮긴다(30분 단위 시간대는 UTC 그대로)
  function hoursBlock(sum, setup) {
    if (!sum || !sum.hours) return '';
    var c = COL[P.days], off = -new Date().getTimezoneOffset() / 60;
    if (off !== Math.round(off)) off = 0;
    var mk = function (arr) {
      var v = new Array(24).fill(0);
      (arr || []).forEach(function (r) { var h = ((+r[0] + off) % 24 + 24) % 24; v[h] += +r[c] || 0; });
      return v.map(function (x, h) { return [String(h), x, (h < 10 ? '0' : '') + h + ':00']; });
    };
    var label = off ? t('stats.hours', { off: (off > 0 ? '+' : '') + off }) : t('stats.hours_utc');
    var out = '<h3 data-help="help.stats.hours">' + esc(label) + ' · ' + esc(t('stats.k.plays')) + '</h3>' + barChart(mk(sum.hours.p), C_PLAY, label);
    if (setup.visits !== false) out += '<h3 data-help="help.stats.hours">' + esc(label) + ' · ' + esc(t('stats.k.visits')) + '</h3>' + barChart(mk(sum.hours.v), C_VISIT, label);
    return out;
  }
  function amlCard(r) {
    var st = r.aml;
    var h = '<section class="card"><h2 data-help="help.stats.aml.title">' + esc(t('stats.aml.title')) + '</h2>';
    if (!st || !st.data) {
      var why = st && st.error === 'err.aml.not_ready' ? t('stats.aml.wait') : t('stats.aml.none');
      return h + '<p class="muted">' + esc(why) + ' ' + esc(t('stats.aml.daily')) + '</p></section>';
    }
    var end = lastDay(r.sum);   // 내 사이트 숫자와 같은 날까지 (UTC 어제)
    var keys = [['plays', 'stats.aml.plays', ' data-help="help.stats.aml.plays"'], ['valid', 'stats.aml.valid', ' data-help="help.stats.aml.valid"'], ['likes', 'stats.aml.likes', ' data-help="help.stats.aml.likes"'], ['adds', 'stats.aml.adds', ' data-help="help.stats.aml.adds"']];
    var tiles = '<div class="st-kpis">' + keys.map(function (k) {
      var cur = amlTotal(r, k[0], P.days, 0, end), prev = amlTotal(r, k[0], P.days, P.days, end);
      return '<div class="st-kpi"><span class="st-kl"' + k[2] + '>' + esc(t(k[1])) + '</span><b class="st-kv">' + esc(n(cur.s)) + '</b><span class="muted">' + esc(t('stats.total', { n: P.days })) + '</span>' + delta(cur.s, prev) + '</div>';
    }).join('') + '</div>';
    var m = {}; amlDays(r).forEach(function (x) { m[x.d] = x; });
    var rows = []; for (var i = P.days - 1; i >= 0; i--) { var d = ymdAdd(end, -i); rows.push([d, m[d] ? +m[d].plays || 0 : 0]); }
    var cc = (st.data.countries || []).slice(0, 10).map(function (x) { return [x[0], x[1]]; });
    return h + '<p class="muted" style="margin:-6px 0 0">' + esc(t('stats.aml.updated', { time: A.fmtClock(st.ok_at || st.at) })) + ' ' + esc(t('stats.aml.daily')) + '</p>' + tiles +
      '<h3 data-help="help.stats.aml.trend">' + esc(t('stats.aml.plays')) + '</h3>' + barChart(rows, C_PLAY, t('stats.aml.plays')) +
      (cc.length ? '<h3 data-help="help.stats.aml.countries">' + esc(t('stats.countries')) + '</h3>' + listBars(cc, t('stats.countries'), regionName) : '') + '</section>';
  }
  // 무료 한도: 맨 위 사용량(GET /api/admin/usage)과 같은 숫자 + 통계 기록(Analytics Engine) 오늘 줄 수
  function freeCard(r) {
    var u = S.usage, items = u && (u.ok ? u.items : u.last && u.last.items);
    var bar = function (label, used, limit, bytes, hk) {   // hk = ' data-help="…"' (? 표시)
      var pct = limit ? Math.min(100, used / limit * 100) : 0;
      var cls = pct >= 90 ? ' danger' : pct >= 70 ? ' warn' : '';
      return '<div class="ubar' + cls + '"><div class="lbl"><span' + (hk || '') + '>' + esc(label) + '</span><b>' + (pct < 0.1 && used ? '<0.1' : pct.toFixed(pct < 10 ? 1 : 0)) + '%</b></div>' +
        '<div class="track"><div class="fill" style="width:' + pct.toFixed(1) + '%"></div></div><span class="num">' + esc((bytes ? A.fmtBytes(used) + ' / ' + A.fmtBytes(limit) : n(used) + ' / ' + n(limit))) + '</span></div>';
    };
    var bars = '';
    if (items && items.r2_storage) {
      bars += bar(t('usage.r2_storage'), items.r2_storage.used, items.r2_storage.limit, true, ' data-help="help.stats.free.r2_storage"');
      if (items.workers_requests && !A.isMm()) bars += bar(t('usage.workers'), items.workers_requests.used, items.workers_requests.limit, false, ' data-help="help.stats.free.workers"');
      if (items.r2_class_a) bars += bar(t('usage.r2_class_a'), items.r2_class_a.used, items.r2_class_a.limit, false, ' data-help="help.stats.free.r2_class_a"');
      if (items.r2_class_b) bars += bar(t('usage.r2_class_b'), items.r2_class_b.used, items.r2_class_b.limit, false, ' data-help="help.stats.free.r2_class_b"');
    }
    var td = r.today;
    if (td && r.setup && r.setup.dataset && !A.isMm()) bars += bar(t('stats.free.ae'), (td.v || 0) + (td.p || 0) + (td.pa || 0) + (td.g || 0), 100000, false, ' data-help="help.stats.free.ae"');
    if (!bars) return '';
    return '<section class="card"><h2 data-help="help.stats.free.title">' + esc(t('stats.free.title')) + '</h2><div class="bars">' + bars + '</div><p class="muted" style="margin:10px 0 0">' + esc(t('stats.free.note')) + ' <small>(' + esc(t('free.one')) + ')</small></p></section>';   // M-8
  }

  // ── CSV (이 브라우저에서 만든다, 엑셀용 BOM) ──
  // 숫자(음수 포함)는 그대로, 글자가 = + - @ 로 시작하면 엑셀 수식이 되지 않게 ' 를 붙인다
  function csvCell(v) {
    if (typeof v === 'number') return String(v);
    v = String(v == null ? '' : v);
    if (/^-?\d+(\.\d+)?$/.test(v)) return v;
    if (/^[=+\-@]/.test(v)) v = "'" + v;
    return /[",\n\r]/.test(v) || /^'/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }
  function download(name, rows) {
    var text = '﻿' + rows.map(function (r) { return r.map(csvCell).join(','); }).join('\r\n') + '\r\n';
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  function csvDays() {
    var r = P.data, sum = r && r.sum, end = lastDay(sum), m = dayRows(sum), am = {};
    amlDays(r).forEach(function (x) { am[x.d] = x; });
    var rows = [['date_utc', 'visits', 'plays', 'plays_via_aimusiclist', 'guestbook_posts', 'aimusiclist_plays', 'aimusiclist_valid', 'aimusiclist_likes', 'aimusiclist_adds']];
    for (var i = P.days - 1; i >= 0; i--) {
      var d = ymdAdd(end, -i), x = m[d] || [d, 0, 0, 0, 0], a = am[d] || {};
      rows.push([d, x[1], x[2], x[3], x[4], a.plays || 0, a.valid || 0, a.likes || 0, a.adds || 0]);
    }
    download('stats-days-' + P.days + 'd-' + end + '.csv', rows);
  }
  function csvTracks() {
    var r = P.data, rows = [['track_id', 'title', 'rank', 'rank_move', 'plays_' + P.days + 'd', 'plays_via_aimusiclist_' + P.days + 'd', 'aimusiclist_plays_7d', 'aimusiclist_valid_7d', 'chart_rank', 'chart_rank_prev', 'genre_rank', 'all_rank', 'all_rank_prev', 'all_rank_best']];
    trackRows(r, r.sum).forEach(function (o) {
      rows.push([o.id, o.tr.title, o.rk ? o.rk[1] : '', o.rk && o.rk[2] != null ? o.rk[2] : '', o.p, o.pa,
        o.aml ? o.aml.plays7 : '', o.aml ? o.aml.valid7 : '', o.aml && o.aml.chart_rank || '', o.aml && o.aml.chart_rank_prev || '', o.aml && o.aml.genre_rank || '',
        o.aml && o.aml.all_rank || '', o.aml && o.aml.all_rank_prev || '', o.aml && o.aml.all_rank_best || '']);
    });
    download('stats-tracks-' + P.days + 'd-' + lastDay(r.sum) + '.csv', rows);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-st]');
    if (!b || S.tab !== 'stats') return;
    var k = b.getAttribute('data-st');
    if (k === 'days') { P.days = +b.getAttribute('data-v') || 30; draw(); }
    else if (k === 'refresh') refreshNow(b);   // 3-14
    else if (k === 'csv-days' && P.data) csvDays();
    else if (k === 'csv-tracks' && P.data) csvTracks();
  });

  // 관리 화면 색(--accent 등)을 그대로. 재생 = 강조색, 방문 = 청록 (두 색 모두 색약 구분·대비 검사 통과 — dataviz 검사기)
  var STYLE = '<style>' +
    '#stats-root{--st-play:var(--accent);--st-visit:#00897a}' +
    '@media (prefers-color-scheme:dark){#stats-root{--st-visit:#14a594}}' +
    '.st-seg{display:inline-flex;gap:4px}' +
    '.st-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:14px 0 4px}' +
    '@media (max-width:420px){.st-kpis{grid-template-columns:1fr 1fr}.st-kv{font-size:20px}.st-kpi{padding:10px 12px}}' +
    '.st-kpi{display:flex;flex-direction:column;gap:2px;padding:12px 14px;border-radius:10px;background:var(--bg)}' +
    '.st-kl{font-size:13px;color:var(--muted)}.st-kv{font-size:24px;font-variant-numeric:tabular-nums;letter-spacing:-.01em}' +
    '.st-d{font-size:13px}.st-up{color:var(--ok)}.st-down{color:var(--err)}.st-same{color:var(--muted)}.st-today{font-size:13px;color:var(--muted);margin-top:4px}' +
    '.st-chart{width:100%;height:auto;display:block;margin:4px 0 6px}.st-grid{stroke:var(--line);stroke-width:1}.st-axis{stroke:var(--muted);stroke-width:1;opacity:.5}' +
    '.st-tick{font-size:11px;fill:var(--muted);font-variant-numeric:tabular-nums}.st-hit{fill:transparent}.st-bar:hover .st-hit{fill:color-mix(in srgb,var(--text) 6%,transparent)}' +
    '.st-grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:4px 24px}' +
    '.st-list{list-style:none;margin:0;padding:0}.st-list li{display:grid;grid-template-columns:1fr auto;gap:2px 8px;padding:5px 0;font-size:14px}' +
    '.st-k{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.st-v{font-variant-numeric:tabular-nums}' +
    '.st-lb{grid-column:1/-1;height:4px;border-radius:2px;background:var(--bar);overflow:hidden}.st-lb span{display:block;height:100%;border-radius:2px;background:var(--st-visit)}' +
    '.st-scroll{overflow-x:auto}.st-rk{white-space:nowrap;font-variant-numeric:tabular-nums}' +
    '</style>';

  AML.adminStats = { open: open, _p: P };
})();
