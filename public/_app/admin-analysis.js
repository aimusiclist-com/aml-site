/* public/_app/admin-analysis.js — 관리 화면 "분석" 탭 (채팅 3-15). 탭을 처음 열 때만 받는다(admin.js analysisTab).
 * -----------------------------------------------------------------------------
 * 데이터: GET /api/admin/insights?months=N → 저장본만 (관리 화면을 몇 번 열어도 aimusiclist 요청 0)
 *   months  = [[하루, …] 달마다, 새 달 먼저]  하루 = {d, o?, a?, t:{곡id:[p, rk, ar, cr, gr, pa, va, lk, ad]}}
 *             p 내 사이트 재생(그날, o 가 있으면 없는 곡 = 0) · rk 내 사이트 순위 · ar aimusiclist 모든 곡 순위 · cr 주간 차트 · gr 장르 차트
 *             pa·va·lk·ad = aimusiclist 재생·유효 재생·좋아요·담기 (지난 7일)
 *   insights(insights-1) · news(news-1) = 하루 1번 받아 둔 aimusiclist 공개 파일 · aml = 2-S 내 곡 통계 저장본 · hosts = 내 주소(내 곡 찾기)
 * 서버는 계산하지 않는다 — 기간·정렬·급상승·새 통계는 모두 이 브라우저가 계산한다.
 * 그래프 = SVG 직접(외부 라이브러리 0). 선마다 색 + 선 모양 + 점 모양을 다르게(색만으로 구분하지 않음).
 * 받은 글자(곡 이름·소식)는 모두 esc() 로 글자로만 넣는다. 이미지는 넣지 않는다(열 때마다 aimusiclist 에 요청이 가지 않게).
 * aimusiclist 곡은 이 화면에서 재생하지 않는다 — 제목을 누르면 aimusiclist 화면이 새 탭으로 열린다.
 * -----------------------------------------------------------------------------
 */
(function () {
  'use strict';
  var AML = window.AML, t = AML.t, A = AML.admin, S = A.S, esc = A.esc;
  var P = { days: 30, months: 4, data: null, at: 0, loading: null, err: null, basis: null, pick: null, sort: 'plays', genre: '' };
  var PERIODS = [7, 30, 90, 0];   // 0 = 전체
  var F = { p: 0, rk: 1, ar: 2, cr: 3, gr: 4, pa: 5, va: 6, lk: 7, ad: 8 };
  var MAX_PICK = 8;
  var CW = 640;

  function $(id) { return document.getElementById(id); }
  function n(x) { return A.fmtNum(Math.round(+x || 0)); }
  function ymdAdd(d, k) { var x = new Date(d + 'T00:00:00Z'); x.setUTCDate(x.getUTCDate() + k); return x.toISOString().slice(0, 10); }
  function todayUtc() { return new Date().toISOString().slice(0, 10); }
  function fmtDay(d) {
    try { return new Date(d + 'T00:00:00Z').toLocaleDateString(AML.lang, { month: 'numeric', day: 'numeric', timeZone: 'UTC' }); } catch (e) { return d.slice(5); }
  }
  function fmtDate(d) {
    try { return new Date(d + 'T00:00:00Z').toLocaleDateString(AML.lang, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }); } catch (e) { return d; }
  }
  function rk(x) { return t('an.rank.n', { n: n(x) }); }
  function lang(m) { if (!m) return ''; return m[AML.lang] || m[String(AML.lang).split('-')[0]] || m.en || m[Object.keys(m)[0]] || ''; }
  function hostOf(u) { try { return new URL(u).hostname.toLowerCase(); } catch (e) { return ''; } }
  function myTracks() { return (S.state.tracks || []).filter(function (x) { return x && x.has_audio; }); }

  // ── 불러오기 (5분 보관) ──
  function load(force, months) {
    months = months || P.months;
    if (!force && P.data && P.data.setup && P.data.setup.months >= months && Date.now() - P.at < 5 * 60 * 1000) return Promise.resolve(P.data);
    if (P.loading) return P.loading;
    P.loading = A.api('GET', '/api/admin/insights?months=' + months).then(function (r) { P.data = prep(r); P.at = Date.now(); P.err = null; P.months = months; return r; })
      .catch(function (e) { P.err = e; return null; })
      .then(function (r) { P.loading = null; return r; });
    return P.loading;
  }
  // 하루 기록을 날짜로 찾게 정리
  function prep(r) {
    var D = {}, days = [];
    (r.months || []).forEach(function (m) { (m || []).forEach(function (x) { if (x && typeof x.d === 'string' && !D[x.d]) { D[x.d] = x; days.push(x.d); } }); });
    days.sort();
    r._D = D; r._days = days;
    var amlT = {};
    ((r.aml && r.aml.data && r.aml.data.tracks) || []).forEach(function (x) { amlT[x.id] = x; });
    r._aml = amlT;
    var hs = {}; (r.hosts || []).forEach(function (h) { hs[String(h).toLowerCase()] = 1; });
    r._hosts = hs;
    return r;
  }
  function open() {
    var root = $('an-root'); if (!root) return;
    markSeen();
    if (P.data) draw(); else root.innerHTML = '<section class="card"><p class="muted">' + esc(t('admin.loading')) + '</p></section>';
    load(false).then(function () { if (S.tab === 'analysis') draw(); });
  }
  function markSeen() {
    var l = S.state && S.state.news_last;
    if (!l || !l.id) return;
    try { localStorage.setItem('aml_news_seen', l.id); } catch (e) { /* 저장 안 되는 브라우저 */ }
    if (A.render && A.drawTabs) A.drawTabs();
  }

  // ── 기록 읽기 ──
  // 값: 기록이 없으면 null. 내 사이트 재생(p)은 그날 셌으면(o) 없는 곡 = 0
  function val(r, d, id, f) {
    var day = r._D[d]; if (!day) return null;
    var v = day.t && day.t[id];
    if (f === 0) return v && v[0] != null ? v[0] : (day.o ? 0 : null);
    return v && v[f] != null ? v[f] : null;
  }
  function lastDay(r) { return r._days.length ? r._days[r._days.length - 1] : ymdAdd(todayUtc(), -1); }
  function range(r) {
    var end = lastDay(r), out = [];
    var start = P.days ? ymdAdd(end, -(P.days - 1)) : (r._days[0] || end);
    for (var d = start; d <= end; d = ymdAdd(d, 1)) out.push(d);
    return out;
  }
  // d 의 값, 없으면 앞 3일 안에서 가장 가까운 값
  function near(r, d, id, f) {
    for (var i = 0; i < 4; i++) { var v = val(r, ymdAdd(d, -i), id, f); if (v != null) return v; }
    return null;
  }
  function hasField(r, f) {
    for (var i = 0; i < r._days.length; i++) { var t0 = r._D[r._days[i]].t || {}; for (var k in t0) if (t0[k][f] != null && t0[k][f] !== 0) return true; }
    return false;
  }
  function anyOwn(r) { for (var i = 0; i < r._days.length; i++) if (r._D[r._days[i]].o) return true; return false; }
  function basis(r) {
    if (P.basis) return P.basis;
    return hasField(r, F.ar) || !hasField(r, F.rk) ? 'ar' : 'rk';
  }
  function rise7(r, id, f) {
    var end = lastDay(r), now = near(r, end, id, f), prev = near(r, ymdAdd(end, -7), id, f);
    if (now == null) return null;
    if (prev == null) return { now: now, prev: null, up: null };
    return { now: now, prev: prev, up: prev - now };
  }

  // ── 그리기 ──
  function draw() {
    var root = $('an-root'); if (!root) return;
    CW = Math.max(300, Math.min(760, (root.clientWidth || 680) - 40));
    var r = P.data;
    var head = '<div class="row"><h2 class="grow" style="margin:0;white-space:nowrap">' + esc(t('an.title')) + '</h2><span class="an-seg" role="group" aria-label="' + esc(t('an.period')) + '">' +
      PERIODS.map(function (d) { var on = d === P.days; return '<button type="button" class="small' + (on ? ' primary' : '') + '" data-an="days" data-v="' + d + '" aria-pressed="' + on + '">' + esc(d ? t('an.days', { n: d }) : t('an.all')) + '</button>'; }).join('') + '</span></div>';
    if (!r) { root.innerHTML = STYLE + '<section class="card">' + head + '<p class="msg err">' + esc(t('an.err', { reason: AML.errText(P.err) })) + '</p></section>'; return; }
    var notes = [];
    if (!r._days.length) notes.push(['notice', t('an.start')]);
    else notes.push(['muted', t('an.since', { date: fmtDate((r.hist && r.hist.first) || r._days[0]) })]);
    var fd = r.feed;
    if (!r.insights) notes.push(['muted', t('an.feed.none')]);
    else {
      notes.push(['muted', t('an.feed.at', { date: fmtDate(r.insights.date || (fd && fd.ins && fd.ins.date) || '') })]);
      if (fd && fd.ins && fd.ins.error && fd.tried === todayUtc()) notes.push(['muted', t('an.feed.old')]);
    }
    root.innerHTML = STYLE + '<section class="card an">' + head + notes.map(function (x) { return x[0] === 'notice' ? '<p class="notice row" style="margin:10px 0 0">' + esc(x[1]) + '</p>' : '<p class="muted" style="margin:6px 0 0">' + esc(x[1]) + '</p>'; }).join('') + '</section>' +
      newsCard(r) + rankCard(r) + tableCard(r) + mineCard(r) + amlCard(r) +
      '<div class="an-stats">' + s1Card(r) + s2Card(r) + s3Card(r) + s4Card(r) + '</div>';
  }

  // 소식 (최근 5개)
  function newsCard(r) {
    var items = ((r.news && r.news.items) || []).slice(0, 5);
    var body = items.length ? '<ul class="an-news">' + items.map(function (x) {
      var ttl = lang(x.title), sm = lang(x.summary);
      return '<li><div class="an-nh"><span class="tag">' + esc(t(x.kind === 'report' ? 'an.news.report' : 'an.news.notice')) + '</span>' +
        (x.date ? '<span class="muted">' + esc(fmtDate(x.date)) + '</span>' : '') + '</div>' +
        '<b class="an-nt">' + esc(ttl) + '</b>' + (sm ? '<p class="an-ns">' + esc(sm) + '</p>' : '') +
        (x.chart ? miniChart(x.chart) : '') +
        (x.url ? '<a class="small an-more" href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer">' + esc(t('an.news.more')) + ' ↗</a>' : '') + '</li>';
    }).join('') + '</ul>' : '<p class="muted">' + esc(t('an.news.empty')) + '</p>';
    return '<section class="card"><h3 style="margin-top:0">' + esc(t('an.news.title')) + '</h3>' + body + '</section>';
  }
  // 소식 그래프 (첫 묶음만 — 막대 또는 선)
  function miniChart(c) {
    var s = c.series && c.series[0]; if (!s) return '';
    var rows = c.labels.map(function (l, i) { return [l, s.values[i]]; });
    var W = CW, H = 130, L = 6, R = 6, T = 18, B = 20;
    var vals = rows.map(function (x) { return x[1]; }).filter(function (v) { return v != null; });
    if (!vals.length) return '';
    var max = Math.max.apply(null, vals.concat([0])), min = Math.min.apply(null, vals.concat([0]));
    if (max === min) max = min + 1;
    var y = function (v) { var k = (v - min) / (max - min); return T + (H - T - B) * (c.invert ? k : 1 - k); };
    var cw = (W - L - R) / rows.length, g = '';
    if (c.type === 'bar') {
      var bw = Math.max(2, Math.min(36, cw - 6));
      g = rows.map(function (x, i) {
        if (x[1] == null) return '';
        var cx = L + i * cw + (cw - bw) / 2, y0 = y(Math.max(min, 0)), y1 = y(x[1]);
        return '<rect x="' + cx.toFixed(1) + '" y="' + Math.min(y0, y1).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + Math.max(1, Math.abs(y0 - y1)).toFixed(1) + '" rx="2" fill="var(--accent)"><title>' + esc(x[0] + ' · ' + n(x[1])) + '</title></rect>' +
          '<text class="an-tick" x="' + (cx + bw / 2).toFixed(1) + '" y="' + (Math.min(y0, y1) - 2).toFixed(1) + '" text-anchor="middle">' + esc(n(x[1])) + '</text>';
      }).join('');
    } else {
      var pts = rows.map(function (x, i) { return x[1] == null ? null : [L + i * cw + cw / 2, y(x[1]), x]; });
      g = pathOf(pts) && '<path d="' + pathOf(pts) + '" fill="none" stroke="var(--accent)" stroke-width="2"/>' + pts.map(function (p) { return p ? '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3" fill="var(--accent)"><title>' + esc(p[2][0] + ' · ' + n(p[2][1])) + '</title></circle>' : ''; }).join('');
    }
    var lab = rows.length <= 8 ? rows.map(function (x, i) { return '<text class="an-tick" x="' + (L + i * cw + cw / 2).toFixed(1) + '" y="' + (H - 5) + '" text-anchor="middle">' + esc(trim(x[0], Math.max(4, Math.floor(cw / 7)))) + '</text>'; }).join('') : '';
    var title = lang(c.title) || lang(s.label);
    return '<svg class="an-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(title) + '">' + g + lab + '</svg>';
  }
  function trim(s, k) { s = String(s); return s.length > k ? s.slice(0, Math.max(1, k - 1)) + '…' : s; }

  // ── 1. 순위 변화 (최대 8곡, 위 = 1위, 순위 없는 날은 끊긴 선) ──
  var SHAPES = ['circle', 'square', 'tri', 'diamond', 'cross', 'tridown', 'plus', 'ring'];
  var DASH = ['', '6 4', '2 3', '10 3 2 3', '', '6 4', '2 3', '10 3 2 3'];
  function color(i) { return 'var(--an-c' + i + ')'; }
  function marker(i, x, y, r) {
    var s = SHAPES[i % 8], c = color(i), xs = x.toFixed(1), ys = y.toFixed(1);
    if (s === 'circle') return '<circle cx="' + xs + '" cy="' + ys + '" r="' + r + '" fill="' + c + '"/>';
    if (s === 'ring') return '<circle cx="' + xs + '" cy="' + ys + '" r="' + r + '" fill="var(--card)" stroke="' + c + '" stroke-width="2"/>';
    if (s === 'square') return '<rect x="' + (x - r).toFixed(1) + '" y="' + (y - r).toFixed(1) + '" width="' + 2 * r + '" height="' + 2 * r + '" fill="' + c + '"/>';
    if (s === 'diamond') return '<path d="M' + xs + ' ' + (y - r - 1).toFixed(1) + 'L' + (x + r + 1).toFixed(1) + ' ' + ys + 'L' + xs + ' ' + (y + r + 1).toFixed(1) + 'L' + (x - r - 1).toFixed(1) + ' ' + ys + 'Z" fill="' + c + '"/>';
    if (s === 'tri') return '<path d="M' + xs + ' ' + (y - r - 1).toFixed(1) + 'L' + (x + r + 1).toFixed(1) + ' ' + (y + r).toFixed(1) + 'L' + (x - r - 1).toFixed(1) + ' ' + (y + r).toFixed(1) + 'Z" fill="' + c + '"/>';
    if (s === 'tridown') return '<path d="M' + xs + ' ' + (y + r + 1).toFixed(1) + 'L' + (x + r + 1).toFixed(1) + ' ' + (y - r).toFixed(1) + 'L' + (x - r - 1).toFixed(1) + ' ' + (y - r).toFixed(1) + 'Z" fill="' + c + '"/>';
    if (s === 'cross') return '<path d="M' + (x - r).toFixed(1) + ' ' + (y - r).toFixed(1) + 'L' + (x + r).toFixed(1) + ' ' + (y + r).toFixed(1) + 'M' + (x + r).toFixed(1) + ' ' + (y - r).toFixed(1) + 'L' + (x - r).toFixed(1) + ' ' + (y + r).toFixed(1) + '" stroke="' + c + '" stroke-width="2.4"/>';
    return '<path d="M' + (x - r - 1).toFixed(1) + ' ' + ys + 'H' + (x + r + 1).toFixed(1) + 'M' + xs + ' ' + (y - r - 1).toFixed(1) + 'V' + (y + r + 1).toFixed(1) + '" stroke="' + c + '" stroke-width="2.4"/>';
  }
  // 점 목록 → 선 (null 이면 끊는다, 혼자인 점은 선 없이 점만)
  function pathOf(pts) {
    var d = '', run = 0;
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      if (!p) { run = 0; continue; }
      d += (run ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1);
      run++;
    }
    return d;
  }
  function rankTracks(r, f, days) {
    return myTracks().filter(function (x) { return days.some(function (d) { return val(r, d, x.id, f) != null; }); });
  }
  function rankCard(r) {
    var b = basis(r), days = range(r);
    var fs = b === 'both' ? [F.ar, F.rk] : [b === 'rk' ? F.rk : F.ar];
    var cand = myTracks().filter(function (x) { return fs.some(function (f) { return days.some(function (d) { return val(r, d, x.id, f) != null; }); }); });
    if (!P.pick) {   // 처음: 지금 순위가 가장 좋은 3곡
      var f0 = fs[0];
      P.pick = cand.map(function (x) { return [x.id, near(r, days[days.length - 1], x.id, f0)]; }).filter(function (x) { return x[1] != null; })
        .sort(function (a, c) { return a[1] - c[1]; }).slice(0, 3).map(function (x) { return x[0]; });
      if (!P.pick.length) P.pick = cand.slice(0, 3).map(function (x) { return x.id; });
    }
    var picked = P.pick.filter(function (id) { return cand.some(function (x) { return x.id === id; }); });
    var seg = '<span class="an-seg" role="group" aria-label="' + esc(t('an.rank.title')) + '">' + [['ar', 'an.rank.aml'], ['rk', 'an.rank.own'], ['both', 'an.rank.both']].map(function (o) {
      var on = o[0] === b; return '<button type="button" class="small' + (on ? ' primary' : '') + '" data-an="basis" data-v="' + o[0] + '" aria-pressed="' + on + '">' + esc(t(o[1])) + '</button>';
    }).join('') + '</span>';
    var html = '<section class="card"><div class="row"><h3 class="grow" style="margin:0">' + esc(t('an.rank.title')) + '</h3>' + seg + '</div>' +
      '<p class="muted" style="margin:6px 0 8px">' + esc(t('an.rank.help')) + '</p>';
    if (!cand.length) return html + '<p class="muted">' + esc(t('an.rank.none')) + '</p></section>';
    html += '<div class="an-pick" role="group" aria-label="' + esc(t('an.rank.pick')) + '">' + cand.map(function (x) {
      var i = picked.indexOf(x.id), on = i >= 0, full = !on && picked.length >= MAX_PICK;
      return '<label class="an-chip' + (on ? ' on' : '') + '"><input type="checkbox" data-an="pick" value="' + esc(x.id) + '"' + (on ? ' checked' : '') + (full ? ' disabled' : '') + '>' +
        (on ? legendMark(i) : '') + '<span>' + esc(x.title) + '</span></label>';
    }).join('') + '</div>' + (picked.length >= MAX_PICK ? '<p class="muted" style="margin:4px 0 0">' + esc(t('an.rank.max')) + '</p>' : '');
    fs.forEach(function (f) {
      if (fs.length > 1) html += '<h4 class="an-sub">' + esc(t(f === F.ar ? 'an.rank.aml' : 'an.rank.own')) + '</h4>';
      html += lineChart(r, days, picked, f);
    });
    return html + '<p class="muted" style="margin:4px 0 0">' + esc(t('an.rank.gap')) + '</p></section>';
  }
  function legendMark(i) {
    return '<svg class="an-lm" viewBox="0 0 28 12" aria-hidden="true"><line x1="1" x2="27" y1="6" y2="6" stroke="' + color(i) + '" stroke-width="2"' + (DASH[i] ? ' stroke-dasharray="' + DASH[i] + '"' : '') + '/>' + marker(i, 14, 6, 3.2) + '</svg>';
  }
  // 순위 선 그래프 (위 = 1위). 큰 순위가 섞이면 로그 눈금
  function lineChart(r, days, ids, f) {
    var W = CW, H = W < 500 ? 200 : 230, L = 58, R = 10, T = 10, B = 22;
    var all = [];
    ids.forEach(function (id) { days.forEach(function (d) { var v = val(r, d, id, f); if (v != null) all.push(v); }); });
    if (!ids.length || !all.length) return '<p class="muted">' + esc(t('an.rank.none')) + '</p>';
    var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
    var log = hi / Math.max(1, lo) > 30;
    var top = 1, bot = log ? Math.pow(10, Math.ceil(Math.log10(Math.max(hi, 10)))) : Math.max(10, niceMax(hi));
    var y = log ? function (v) { return T + (H - T - B) * (Math.log10(v) / Math.log10(bot)); } : function (v) { return T + (H - T - B) * ((v - top) / (bot - top)); };
    var ticks = log ? [] : [1, Math.round(bot / 2), bot];
    if (log) for (var k = 1; k <= bot; k *= 10) ticks.push(k);
    var cw = (W - L - R) / Math.max(1, days.length - 1);
    var x = function (i) { return days.length === 1 ? L + (W - L - R) / 2 : L + i * cw; };
    var g = ticks.map(function (v) { return '<line class="an-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v).toFixed(1) + '" y2="' + y(v).toFixed(1) + '"/><text class="an-tick" x="' + (L - 6) + '" y="' + (y(v) + 4).toFixed(1) + '" text-anchor="end">' + esc(rk(v)) + '</text>'; }).join('');
    var dots = days.length <= 45;
    var lines = ids.map(function (id, i) {
      var tr = myTracks().filter(function (z) { return z.id === id; })[0] || { title: id };
      var pts = days.map(function (d, j) { var v = val(r, d, id, f); return v == null ? null : [x(j), y(v), d, v]; });
      var p = pathOf(pts);
      var ms = pts.map(function (q, j) {
        if (!q) return '';
        var alone = !pts[j - 1] && !pts[j + 1];
        if (!dots && !alone && j !== pts.length - 1) return '';
        return '<g>' + marker(i, q[0], q[1], 3.4) + '<title>' + esc(tr.title + ' · ' + fmtDay(q[2]) + ' · ' + rk(q[3])) + '</title></g>';
      }).join('');
      return (p ? '<path d="' + p + '" fill="none" stroke="' + color(i) + '" stroke-width="2"' + (DASH[i] ? ' stroke-dasharray="' + DASH[i] + '"' : '') + ' stroke-linejoin="round"/>' : '') + ms;
    }).join('');
    var xl = [0, Math.floor((days.length - 1) / 2), days.length - 1].filter(function (v, i, a) { return a.indexOf(v) === i; }).map(function (j, i, a) {
      var anc = a.length > 1 && i === 0 ? 'start' : a.length > 1 && i === a.length - 1 ? 'end' : 'middle';
      return '<text class="an-tick" x="' + x(j).toFixed(1) + '" y="' + (H - 6) + '" text-anchor="' + anc + '">' + esc(fmtDay(days[j])) + '</text>';
    }).join('');
    return '<svg class="an-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(t('an.rank.title')) + '">' + g + lines + xl + '</svg>';
  }
  function niceMax(v) { if (v <= 0) return 1; var p = Math.pow(10, Math.floor(Math.log10(v))), q = v / p; return (q <= 1 ? 1 : q <= 2 ? 2 : q <= 5 ? 5 : 10) * p; }
  function spark(r, id, f, w) {
    var end = lastDay(r), days = []; for (var i = 13; i >= 0; i--) days.push(ymdAdd(end, -i));
    var vals = days.map(function (d) { return val(r, d, id, f); }), have = vals.filter(function (v) { return v != null; });
    if (have.length < 2) return '';
    var lo = Math.min.apply(null, have), hi = Math.max.apply(null, have); if (hi === lo) { hi = lo + 1; }
    var W = w || 120, H = 32, cw = (W - 6) / 13;
    var pts = vals.map(function (v, j) { return v == null ? null : [3 + j * cw, 4 + (H - 8) * ((v - lo) / (hi - lo))]; });
    return '<svg class="an-spark" viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true"><path d="' + pathOf(pts) + '" fill="none" stroke="var(--ok)" stroke-width="2"/></svg>';
  }

  // ── 2. 내 곡 표 (정렬 4가지) ──
  function tableRows(r) {
    var days = range(r), b = basis(r), f = b === 'rk' ? F.rk : F.ar, own = anyOwn(r);
    return myTracks().map(function (x) {
      var plays = null;
      if (own) { plays = 0; days.forEach(function (d) { var v = val(r, d, x.id, F.p); if (v != null) plays += v; }); }
      else { var a = r._aml[x.id]; plays = a ? a.plays7 || 0 : null; }
      var ri = rise7(r, x.id, f);
      return { t: x, plays: plays, time: plays != null && x.duration ? plays * x.duration : null, ar: near(r, lastDay(r), x.id, F.ar), rise: ri };
    });
  }
  function riseKey(ri) { return !ri ? -1e9 : ri.up == null ? -1e8 + 1 : ri.up; }
  function tableCard(r) {
    var rows = tableRows(r), own = anyOwn(r);
    var cmp = {
      plays: function (a, b) { return (b.plays || 0) - (a.plays || 0); },
      time: function (a, b) { return (b.time || 0) - (a.time || 0); },
      rise: function (a, b) { return riseKey(b.rise) - riseKey(a.rise); },
      new: function (a, b) { return String(b.t.created_at || '') < String(a.t.created_at || '') ? -1 : 1; },
    }[P.sort];
    rows.sort(function (a, b) { return cmp(a, b) || String(a.t.title).localeCompare(String(b.t.title)); });
    var seg = '<span class="an-seg" role="group" aria-label="' + esc(t('an.sort')) + '">' + ['plays', 'time', 'rise', 'new'].map(function (k) {
      var on = k === P.sort; return '<button type="button" class="small' + (on ? ' primary' : '') + '" data-an="sort" data-v="' + k + '" aria-pressed="' + on + '">' + esc(t('an.sort.' + k)) + '</button>';
    }).join('') + '</span>';
    var body = rows.slice(0, 200).map(function (x) {
      return '<tr><td class="an-tt">' + esc(x.t.title) + '</td><td class="num">' + (x.plays == null ? '–' : esc(n(x.plays))) + '</td><td class="num">' + esc(dur(x.time)) + '</td>' +
        '<td class="num">' + (x.ar ? esc(rk(x.ar)) : '–') + '</td><td class="num">' + riseTxt(x.rise) + '</td><td class="num an-up">' + esc(x.t.created_at ? fmtDay(String(x.t.created_at).slice(0, 10)) : '') + '</td></tr>';
    }).join('');
    return '<section class="card"><div class="row"><h3 class="grow" style="margin:0">' + esc(t('an.table.title')) + '</h3>' + seg + '</div>' +
      (own ? '' : '<p class="muted" style="margin:6px 0 0">' + esc(t('an.own.off')) + '</p>') +
      '<div class="an-scroll"><table class="an-table"><thead><tr><th>' + esc(t('an.col.song')) + '</th><th>' + esc(t('an.col.plays')) + '</th><th>' + esc(t('an.col.time')) + '</th><th>' + esc(t('an.col.rank')) + '</th><th>' + esc(t('an.col.rise')) + '</th><th class="an-up">' + esc(t('an.col.uploaded')) + '</th></tr></thead><tbody>' + body + '</tbody></table></div>' +
      '<p class="muted" style="margin:6px 0 0">' + esc(t('an.time.note')) + '</p></section>';
  }
  function dur(s) {
    if (s == null) return '–';
    var m = Math.round(s / 60), h = Math.floor(m / 60);
    return h ? t('an.time.hm', { h: n(h), m: m % 60 }) : t('an.time.m', { m: m });
  }
  function riseTxt(ri) {
    if (!ri) return '–';
    if (ri.up == null) return '<span class="an-new">NEW</span>';
    if (ri.up > 0) return '<span class="an-upc">▲' + esc(n(ri.up)) + '</span>';
    if (ri.up < 0) return '<span class="an-dn">▼' + esc(n(-ri.up)) + '</span>';
    return '<span class="muted">–</span>';
  }

  // ── 3. 내 곡 급상승 (이번 주 가장 많이 오른 5곡) ──
  function mineCard(r) {
    var b = basis(r), f = b === 'rk' ? F.rk : F.ar;
    var top = myTracks().map(function (x) { return { t: x, ri: rise7(r, x.id, f) }; }).filter(function (x) { return x.ri && x.ri.up > 0; })
      .sort(function (a, c) { return c.ri.up - a.ri.up; }).slice(0, 5);
    var body = top.length ? '<div class="an-cards">' + top.map(function (x) {
      return '<div class="an-mc"><b class="an-tt">' + esc(x.t.title) + '</b><span class="an-upc an-big">▲' + esc(n(x.ri.up)) + '</span>' +
        '<span class="muted">' + esc(t('an.mine.move', { from: n(x.ri.prev), to: n(x.ri.now) })) + '</span>' + spark(r, x.t.id, f) + '</div>';
    }).join('') + '</div>' : '<p class="muted">' + esc(t('an.mine.none')) + '</p>';
    return '<section class="card"><h3 style="margin:0">' + esc(t('an.mine.title')) + '</h3><p class="muted" style="margin:4px 0 10px">' + esc(t('an.mine.help') + ' · ' + t(f === F.rk ? 'an.rank.own' : 'an.rank.aml')) + '</p>' + body + '</section>';
  }

  // ── 4. aimusiclist 급상승 (장르별) — 제목 = aimusiclist 화면 새 탭 ──
  function isMine(r, tr) { return !!(tr && tr.site_url && r._hosts[hostOf(tr.site_url)]); }
  function amlCard(r) {
    var ins = r.insights;
    var gs = ins && ins.genres ? Object.keys(ins.genres).filter(function (k) { return (ins.genres[k].rising || []).length; }) : [];
    if (P.genre && gs.indexOf(P.genre) < 0) P.genre = '';
    var sel = '<label class="an-inl">' + esc(t('an.aml.genre')) + ' <select data-an="genre"><option value="">' + esc(t('an.aml.all')) + '</option>' +
      gs.map(function (k) { return '<option value="' + esc(k) + '"' + (k === P.genre ? ' selected' : '') + '>' + esc(A.gName(k)) + '</option>'; }).join('') + '</select></label>';
    var rows = !ins ? [] : P.genre ? ins.genres[P.genre].rising : ins.global.rising;
    var body = rows.length ? '<ol class="an-rise">' + rows.map(function (x) {
      var tr = x.track, mine = isMine(r, tr), link = tr.page || tr.site_url;
      var mv = x.move === 'new' || x.jump == null ? '<span class="an-new">NEW</span>' : x.jump > 0 ? '<span class="an-upc">▲' + esc(n(x.jump)) + '</span>' : x.jump < 0 ? '<span class="an-dn">▼' + esc(n(-x.jump)) + '</span>' : '<span class="muted">–</span>';
      return '<li class="' + (mine ? 'mine' : '') + '"><span class="an-rn">' + esc(n(x.rank)) + '</span><span class="an-mv">' + mv + '</span><span class="an-ti">' +
        (link ? '<a href="' + esc(link) + '" target="_blank" rel="noopener noreferrer">' + esc(tr.title) + '</a>' : esc(tr.title)) +
        (mine ? ' <span class="tag an-mine">' + esc(t('an.aml.mine')) + '</span>' : '') +
        '<span class="muted an-ar">' + esc(tr.artist || tr.site) + (x.listeners != null ? ' · ' + esc(t('an.aml.listeners', { n: n(x.listeners) })) : '') + '</span></span></li>';
    }).join('') + '</ol>' : '<p class="muted">' + esc(t(ins ? 'an.aml.none' : 'an.feed.none')) + '</p>';
    return '<section class="card"><div class="row"><h3 class="grow" style="margin:0">' + esc(t('an.aml.title')) + '</h3>' + (ins ? sel : '') + '</div>' +
      '<p class="muted" style="margin:4px 0 10px">' + esc(t('an.aml.help')) + '</p>' + body + '</section>';
  }

  // ── 5-① 신곡 출발 비교: 올린 날부터 7일 동안 내 사이트 재생 누적 ──
  function s1Card(r) {
    var head = '<section class="card"><h3 style="margin:0">' + esc(t('an.s1.title')) + '</h3><p class="muted" style="margin:4px 0 8px">' + esc(t('an.s1.help')) + '</p>';
    if (!anyOwn(r)) return head + '<p class="muted">' + esc(t('an.s1.off')) + '</p></section>';
    var first = r._days[0], end = lastDay(r);
    var list = myTracks().map(function (x) {
      var d0 = String(x.created_at || '').slice(0, 10);
      if (!d0 || d0 < first || d0 > end) return null;
      var cum = 0, vals = [], seen = 0;
      for (var k = 0; k < 7; k++) {
        var d = ymdAdd(d0, k);
        if (d > end) { vals.push(null); continue; }
        var v = val(r, d, x.id, F.p);
        if (v == null) { vals.push(null); continue; }
        cum += v; seen++; vals.push(cum);
      }
      return seen ? { t: x, v: vals, d0: d0 } : null;
    }).filter(Boolean).sort(function (a, b) { return a.d0 < b.d0 ? 1 : -1; }).slice(0, 6);
    if (!list.length) return head + '<p class="muted">' + esc(t('an.s1.none')) + '</p></section>';
    var W = CW, H = 170, L = 40, R = 10, T = 10, B = 22;
    var hi = 1; list.forEach(function (x) { x.v.forEach(function (v) { if (v != null && v > hi) hi = v; }); });
    var top = hi <= 4 ? 4 : niceMax(hi), cw = (W - L - R) / 6;
    var y = function (v) { return T + (H - T - B) * (1 - v / top); };
    var g = [0, top / 2, top].map(function (v) { return '<line class="an-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v).toFixed(1) + '" y2="' + y(v).toFixed(1) + '"/><text class="an-tick" x="' + (L - 6) + '" y="' + (y(v) + 4).toFixed(1) + '" text-anchor="end">' + esc(n(v)) + '</text>'; }).join('');
    var xl = [0, 3, 6].map(function (k, i) { return '<text class="an-tick" x="' + (L + k * cw).toFixed(1) + '" y="' + (H - 6) + '" text-anchor="' + (i === 0 ? 'start' : i === 2 ? 'end' : 'middle') + '">' + esc(t('an.s1.day', { n: k + 1 })) + '</text>'; }).join('');
    var lines = list.map(function (x, i) {
      var pts = x.v.map(function (v, k) { return v == null ? null : [L + k * cw, y(v), k, v]; });
      return '<path d="' + pathOf(pts) + '" fill="none" stroke="' + color(i) + '" stroke-width="2"' + (DASH[i] ? ' stroke-dasharray="' + DASH[i] + '"' : '') + '/>' +
        pts.map(function (q) { return q ? '<g>' + marker(i, q[0], q[1], 3.2) + '<title>' + esc(x.t.title + ' · ' + t('an.s1.day', { n: q[2] + 1 }) + ' · ' + n(q[3])) + '</title></g>' : ''; }).join('');
    }).join('');
    return head + '<svg class="an-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(t('an.s1.title')) + '">' + g + lines + xl + '</svg>' +
      '<ul class="an-leg">' + list.map(function (x, i) { return '<li>' + legendMark(i) + '<span>' + esc(x.t.title) + '</span></li>'; }).join('') + '</ul></section>';
  }

  // ── 5-② Top 100 까지 남은 거리 (추정) ──
  function s2Card(r) {
    var head = '<section class="card"><h3 style="margin:0 0 8px">' + esc(t('an.s2.title')) + '</h3>';
    var th = r.insights && r.insights.threshold, L = th ? th.top100_listeners : null, sc = th ? th.rank100_score : null;
    var cand = myTracks().map(function (x) { return { t: x, a: r._aml[x.id] }; }).filter(function (x) { return x.a && (x.a.valid7 > 0 || x.a.chart_rank); })
      .sort(function (a, b) { return (a.a.chart_rank || 1e9) - (b.a.chart_rank || 1e9) || b.a.valid7 - a.a.valid7; }).slice(0, 5);
    if (!cand.length) return head + '<p class="muted">' + esc(t('an.s2.none')) + '</p></section>';
    var lines = cand.map(function (x) {
      var cr = x.a.chart_rank, txt;
      if (cr && cr <= 100) txt = t('an.s2.in', { n: n(cr) });
      else if (L == null || !r.insights) txt = t('an.s2.open');
      else { var need = Math.max(0, L - (x.a.valid7 || 0)); txt = need > 0 ? t('an.s2.need', { n: n(need) }) : t('an.s2.close', { n: n(L), s: sc == null ? '–' : A.fmtNum(sc) }); }
      return '<li><b class="an-tt">' + esc(x.t.title) + '</b><span>' + esc(txt) + '</span></li>';
    }).join('');
    return head + '<ul class="an-lines">' + lines + '</ul><p class="muted an-small">' + esc(t('an.s2.note')) + '</p></section>';
  }

  // ── 5-③ 담기·좋아요 흐름 (aimusiclist, 2-S) ──
  function s3Card(r) {
    var head = '<section class="card"><h3 style="margin:0 0 8px">' + esc(t('an.s3.title')) + '</h3>';
    var ds = (r.aml && r.aml.data && r.aml.data.days) || [];
    var k = P.days ? Math.min(P.days, 90) : 90;
    ds = ds.slice(-k);
    var tops = myTracks().map(function (x) { var a = r._aml[x.id]; return a ? { t: x, l: a.likes7 || 0, d: a.adds7 || 0 } : null; })
      .filter(function (x) { return x && (x.l || x.d); }).sort(function (a, b) { return (b.l + b.d) - (a.l + a.d); }).slice(0, 5);
    var any = ds.some(function (x) { return x.likes || x.adds; });
    if (!any && !tops.length) return head + '<p class="muted">' + esc(t('an.s3.none')) + '</p></section>';
    return head + '<h4 class="an-sub">' + esc(t('an.s3.likes')) + '</h4>' + bars(ds.map(function (x) { return [x.d, x.likes]; }), 'var(--an-c3)', t('an.s3.likes')) +
      '<h4 class="an-sub">' + esc(t('an.s3.adds')) + '</h4>' + bars(ds.map(function (x) { return [x.d, x.adds]; }), 'var(--an-c1)', t('an.s3.adds')) +
      (tops.length ? '<h4 class="an-sub">' + esc(t('an.s3.top')) + '</h4><ul class="an-lines">' + tops.map(function (x) { return '<li><b class="an-tt">' + esc(x.t.title) + '</b><span class="num">' + esc(t('an.s3.row', { l: n(x.l), a: n(x.d) })) + '</span></li>'; }).join('') + '</ul>' : '') + '</section>';
  }
  function bars(rows, col, label) {
    if (!rows.length) return '<p class="muted">' + esc(t('an.s3.none')) + '</p>';
    var W = CW, H = 100, L = 30, R = 6, T = 8, B = 20, max = 0;
    rows.forEach(function (x) { if (x[1] > max) max = x[1]; });
    var top = max <= 4 ? 4 : niceMax(max), cw = (W - L - R) / rows.length, bw = Math.max(1, cw - (rows.length > 60 ? 1 : 2));
    var y = function (v) { return T + (H - T - B) * (1 - v / top); };
    var g = '<line class="an-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(top) + '" y2="' + y(top) + '"/><text class="an-tick" x="' + (L - 4) + '" y="' + (y(top) + 4) + '" text-anchor="end">' + esc(n(top)) + '</text>' +
      '<line class="an-axis" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0) + '" y2="' + y(0) + '"/><text class="an-tick" x="' + (L - 4) + '" y="' + (y(0) + 4) + '" text-anchor="end">0</text>';
    var b = rows.map(function (x, i) { var h = Math.max(0, y(0) - y(x[1] || 0)); return x[1] > 0 ? '<rect x="' + (L + i * cw + (cw - bw) / 2).toFixed(1) + '" y="' + y(x[1]).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="1.5" fill="' + col + '"><title>' + esc(fmtDay(x[0]) + ' · ' + n(x[1])) + '</title></rect>' : ''; }).join('');
    var xl = '<text class="an-tick" x="' + L + '" y="' + (H - 5) + '">' + esc(fmtDay(rows[0][0])) + '</text><text class="an-tick" x="' + (W - R) + '" y="' + (H - 5) + '" text-anchor="end">' + esc(fmtDay(rows[rows.length - 1][0])) + '</text>';
    return '<svg class="an-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(label) + '">' + g + b + xl + '</svg>';
  }

  // ── 5-④ 내 장르 안 내 위치 ──
  function pct(rank, total) { var p = rank / total * 100; return p < 1 ? (Math.max(0.1, Math.round(p * 10) / 10)).toLocaleString(AML.lang) : String(Math.round(p)); }
  function s4Card(r) {
    var head = '<section class="card"><h3 style="margin:0 0 8px">' + esc(t('an.s4.title')) + '</h3>';
    var ins = r.insights;
    var list = myTracks().map(function (x) { var a = r._aml[x.id]; return a ? { t: x, a: a, g: a.genre || (x.genres && x.genres[0]) || '' } : null; })
      .filter(function (x) { return x && x.g; }).sort(function (a, b) { return (a.a.genre_rank || 1e9) - (b.a.genre_rank || 1e9) || (a.a.all_rank || 1e12) - (b.a.all_rank || 1e12); }).slice(0, 6);
    if (!list.length) return head + '<p class="muted">' + esc(t('an.s2.none')) + '</p></section>';
    var lines = list.map(function (x) {
      var gn = A.gName(x.g), gr = x.a.genre_rank, parts = [];
      var gi = ins && ins.genres && ins.genres[x.g];
      var inTop = gr && gr <= 20 || (gi && (gi.top || []).some(function (z) { return isMine(r, z.track) && z.track.title === x.t.title; }));
      if (gr) parts.push(t('an.s4.rank', { genre: gn, n: n(gr) }) + (inTop ? ' · ' + t('an.s4.top20') : ''));
      if (gr && gi && gi.tracks) parts.push(t('an.s4.pct_genre', { genre: gn, total: n(gi.tracks), p: pct(gr, gi.tracks) }));
      else if (x.a.all_rank && ins && ins.totals && ins.totals.tracks) parts.push(t('an.s4.pct_all', { total: n(ins.totals.tracks), p: pct(Math.min(x.a.all_rank, ins.totals.tracks), ins.totals.tracks) }));
      if (!parts.length) parts.push(t('an.s4.norank', { genre: gn }));
      return '<li><b class="an-tt">' + esc(x.t.title) + '</b><span>' + esc(parts.join(' · ')) + '</span></li>';
    }).join('');
    return head + '<ul class="an-lines">' + lines + '</ul></section>';
  }

  // ── 누르기 ──
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('button[data-an]');
    if (!b || !$('an-root') || !$('an-root').contains(b)) return;
    var k = b.getAttribute('data-an'), v = b.getAttribute('data-v');
    if (k === 'days') {
      P.days = +v;
      if (!P.days && P.months < 25) { draw(); load(true, 25).then(function () { if (S.tab === 'analysis') draw(); }); return; }
    }
    else if (k === 'basis') { P.basis = v; P.pick = null; }
    else if (k === 'sort') P.sort = v;
    draw();
  });
  document.addEventListener('change', function (e) {
    var el = e.target, root = $('an-root');
    if (!root || !root.contains(el) || !el.getAttribute) return;
    var k = el.getAttribute('data-an');
    if (k === 'pick') {
      var id = el.value, i = (P.pick || []).indexOf(id);
      if (el.checked && i < 0 && P.pick.length < MAX_PICK) P.pick.push(id);
      if (!el.checked && i >= 0) P.pick.splice(i, 1);
      draw();
    } else if (k === 'genre') { P.genre = el.value; draw(); }
  });

  var STYLE = '<style>' +
    '#an-root{--an-c0:var(--accent);--an-c1:#0a84a8;--an-c2:#c2410c;--an-c3:#b8326b;--an-c4:#2f7d32;--an-c5:#7a5c00;--an-c6:#5b5bd6;--an-c7:#5f6b7a}' +
    '@media (prefers-color-scheme:dark){#an-root{--an-c1:#4cc2e4;--an-c2:#ff8a4c;--an-c3:#ff6fa8;--an-c4:#5fd068;--an-c5:#e6c14d;--an-c6:#9d9dff;--an-c7:#a7b1be}}' +
    '.an-seg{display:inline-flex;gap:4px;flex-wrap:wrap}#an-root .row{flex-wrap:wrap}#an-root .row>h2,#an-root .row>h3{white-space:nowrap}' +
    '.an-chart{width:100%;height:auto;display:block;margin:4px 0 6px}.an-grid{stroke:var(--line);stroke-width:1}.an-axis{stroke:var(--muted);stroke-width:1;opacity:.5}' +
    '.an-tick{font-size:11px;fill:var(--muted);font-variant-numeric:tabular-nums}' +
    '.an-sub{margin:12px 0 2px;font-size:13px;font-weight:600;color:var(--muted)}' +
    '.an-pick{display:flex;flex-wrap:wrap;gap:6px;max-height:150px;overflow:auto;padding:2px 0}' +
    '.an-chip{display:inline-flex;align-items:center;gap:6px;margin:0;padding:4px 10px;border:1px solid var(--line);border-radius:999px;font-size:13px;color:var(--text);cursor:pointer;max-width:100%}' +
    '.an-chip span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.an-chip.on{border-color:var(--text)}.an-chip input{margin:0}' +
    '.an-lm{width:28px;height:12px;flex:none}' +
    '.an-leg{list-style:none;margin:2px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:4px 14px;font-size:13px}.an-leg li{display:inline-flex;align-items:center;gap:6px;min-width:0}' +
    '.an-scroll{overflow-x:auto;margin-top:8px}.an-table{min-width:100%}.an-table td,.an-table th{white-space:nowrap}.an-table td.an-tt{white-space:normal;min-width:120px;max-width:260px;overflow-wrap:anywhere}' +
    '.an-upc{color:var(--ok);font-variant-numeric:tabular-nums}.an-dn{color:var(--err);font-variant-numeric:tabular-nums}.an-new{color:var(--warn);font-size:12px;font-weight:600}' +
    '.an-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}' +
    '.an-mc{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border-radius:10px;background:var(--bg);min-width:0}.an-big{font-size:22px}' +
    '.an-tt{overflow-wrap:anywhere;min-width:0}.an-spark{width:100%;height:32px;margin-top:4px}' +
    '.an-rise{list-style:none;margin:0;padding:0}.an-rise li{display:grid;grid-template-columns:2.2em 3.4em 1fr;gap:6px;align-items:baseline;padding:6px 0;border-top:1px solid var(--line)}' +
    '.an-rise li:first-child{border-top:0}.an-rise li.mine{background:color-mix(in srgb,var(--accent) 9%,transparent);border-radius:8px}' +
    '.an-rn{text-align:right;font-variant-numeric:tabular-nums;color:var(--muted)}.an-ti{min-width:0;overflow-wrap:anywhere}.an-ar{display:block;font-size:12px}' +
    '.an-mine{border-color:var(--accent);color:var(--accent)}' +
    '.an-inl{display:inline-flex;align-items:center;gap:6px;margin:0}.an-inl select{width:auto;max-width:180px;padding:5px 8px}' +
    '.an-lines{list-style:none;margin:0;padding:0}.an-lines li{display:flex;flex-direction:column;gap:2px;padding:7px 0;border-top:1px solid var(--line);font-size:14px}.an-lines li:first-child{border-top:0}' +
    '.an-small{font-size:12px;margin:6px 0 0}' +
    '.an-news{list-style:none;margin:0;padding:0}.an-news li{padding:10px 0;border-top:1px solid var(--line)}.an-news li:first-child{border-top:0;padding-top:0}' +
    '.an-nh{display:flex;gap:8px;align-items:center;margin-bottom:2px}.an-nt{display:block;overflow-wrap:anywhere}.an-ns{margin:4px 0;font-size:14px;color:var(--muted);overflow-wrap:anywhere}.an-more{font-size:13px}' +
    '@media (max-width:600px){.an-up{display:none}.an-cards{grid-template-columns:1fr 1fr}}' +
    '</style>';

  AML.adminAnalysis = { open: open, _p: P };
})();
