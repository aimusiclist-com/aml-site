/* public/_app/visitor.js — 방문자 화면 (홈 / 곡 / 메뉴 / 앨범 / 방명록 / SNS / 재생 바)
 * -----------------------------------------------------------------------------
 * - 데이터는 페이지 안의 <script id="aml-data"> 하나만 쓴다. 화면 이동은 해시 주소라 Worker 요청이 없고 재생이 끊기지 않는다.
 *   #/ 홈(앨범 선반 + 최신 곡) · #/tracks 모든 곡 · #/tracks/top 인기순(3-12) · #/m/{메뉴} · #/albums · #/album/{id} · #/gb[/{곡}] · #/links[/{key}]
 * - 재생: <audio src="/a/{id}"> (preload=none). 서버 약속은 /a/ /l/ /api/gb 와 페이지 응답뿐 (Workers·PHP판 공용, 3-9).
 * - 스킨이 꾸밀 수 있는 클래스: docs/스킨규격.md. 기본 모양은 /_app/base.css (+ kit.css).
 * - 3-6 썸네일·비주얼라이저·가사·방명록·광고 / 3-7 SNS #/links / 3-8 확장 항목 칩 .aml-ext
 * - 3-9 새 재생 바(떠 있는 둥근 막대·음량·가사·진행선) + 휴대폰 전체 화면 재생, 머리 영역 {{hero}}의 [전체 재생][섞어 재생],
 *       곡 줄 오른쪽 둥근 버튼(가사·방명록·⋯ 메뉴), 넓은 비주얼라이저(곡 줄 폭 70%), SVG 아이콘 /_app/icons.svg, Pretendard.
 * - 3-12 모든 곡 화면의 [최신순 | 인기순] (.aml-sort) · 인기순 순위 칸 .aml-rank(.aml-rank-n + .aml-mv.is-up|is-down|is-same|is-new).
 *       순위는 page 데이터 D.tracks[].rk·mv (cron 이 하루 1번). 순위가 없으면 버튼도 없다 — 서버 요청 추가 0.
 * - 3-13 홈 = 앨범 선반 → 곡 목록. 곡 목록(홈·#/tracks·#/m/)은 10곡씩 이어 보기: 목록 끝 .aml-load(표시 요소, IntersectionObserver)
 *       + [더 보기] .aml-load-more. 그리는 양만 줄이고 데이터 D 와 재생 대기열(목록 전체)은 그대로. 앨범 상세는 전부.
 * - 3-14 재생 횟수 .aml-plays (곡 줄 .aml-genres 맨 앞): page 데이터 D.tracks[].pl = 아티스트가 방문자에게 보이기를 켠 곡만(서버 요청 +0).
 *       관리자로 로그인했던 브라우저(관리 화면이 남긴 표시 aml_adm — 비밀 없음)만 관리 API(/api/admin/plays, 세션 쿠키)로 모든 곡 숫자를
 *       한 번 받아 .aml-plays.is-admin 으로 덧붙인다. 표시가 없는 일반 방문자는 요청이 하나도 늘지 않는다.
 * - 3-18 [최신순 | 인기순] 을 모든 곡 목록(홈 · #/tracks · #/m/)에. 인기순 = 사이트 누적 재생 순 — page 데이터 D.tracks[].po
 *       (1,2,3… 순서값만, 숫자 아님 → 아티스트가 숨긴 재생 횟수가 새지 않는다). po 없는 곡(0회)은 맨 아래 최신순. 순위 번호·▲▼ 없음.
 *       고른 정렬은 주소 끝 /top (#/top · #/tracks/top · #/m/{메뉴}/top) — 버튼은 history.replaceState 로 주소만 바꾸고 그 자리에서 다시 그린다.
 *       재생 횟수 .aml-plays 는 곡 줄 맨 오른쪽(재생 시간 .aml-track-time 아래, 줄에 .has-plays) · 0회는 그리지 않는다.
 *       좋아요 ♥ .aml-like (곡 줄 tools 칸 · 재생 바 · 큰 재생 화면): 누를 때만 POST /api/like 1번. 이 기기에서 누른 곡은 localStorage.
 *       숫자 D.tracks[].lk 는 하루 1번 집계(D.lkd = 그날 전까지 셈) — 누른 날이 아직 안 들어갔으면 화면에서만 +1.
 *       재생 안내 한 줄(재생 바 위 알약 .aml-player-notice.is-toast): 곡 줄로 목록 재생을 처음 시작할 때 1번 · "다음에 재생" 때마다.
 *       방명록 쪽 번호 ‹ 1 2 … 10 › (.aml-gb-num · .aml-gb-arrow).
 * - 3-20 만든 AI 툴 배지: 곡 줄 둘째 줄(.aml-genres) 맨 앞 <span class="aml-genre aml-ai">✦ Suno</span> (장르와 같은 글자·색, 구분점도 같은 규칙).
 *       page 데이터 D.tracks[].at = 툴 id, D.aitools = { id: 이름 } (쓰인 것만). 'other' 는 언어팩 문장. 서버 요청 +0.
 * -----------------------------------------------------------------------------
 */
(function () {
  'use strict';
  var AML = window.AML, t = AML.t;
  var D = JSON.parse(document.getElementById('aml-data').textContent);
  AML.data = D;

  var trackById = {};
  D.tracks.forEach(function (tr) { trackById[tr.id] = tr; });
  var byNew = function (a, b) { return String(b.published_at).localeCompare(String(a.published_at)); };
  D.tracks.sort(byNew);
  D.albums.sort(byNew);
  var allIds = function () { return D.tracks.map(function (x) { return x.id; }); };
  // 3-18 인기순: 누적 재생 순서값 po(1부터) → 없는 곡(0회)은 그 뒤에 최신순. 넣는 목록은 이미 최신순이다.
  function byPop(tracks) {
    return tracks.filter(function (x) { return x.po >= 1; }).sort(function (a, b) { return a.po - b.po; })
      .concat(tracks.filter(function (x) { return !(x.po >= 1); }));
  }

  var $menu = document.getElementById('aml-menu');
  var $content = document.getElementById('aml-content');
  var $player = document.getElementById('aml-player');
  var MOBILE = window.matchMedia ? matchMedia('(max-width: 733px)') : { matches: false };
  var RM = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  // ── 도우미 ──────────────────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    return Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2);
  }
  var ICONS = /^\/_app\/icons\.svg(\?v=[0-9a-z]+)?$/.test(D.icons || '') ? D.icons : '/_app/icons.svg';
  function ic(name, cls) {
    return '<svg class="aml-ic' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false"><use href="' + ICONS + '#' + name + '"></use></svg>';
  }
  function empty(text, icon) { return '<p class="aml-empty">' + ic(icon || 'music', 'aml-empty-ic') + esc(text) + '</p>'; }
  AML.genreName = function (key) {
    var g = D.genres[key] || {};
    return g[AML.lang] || g.en || key;
  };
  function menuLabel(m) { return m.label || AML.genreName(m.sub || m.main); }
  // 메뉴에 들어갈 곡: 곡의 장르 3개 중 하나라도 메뉴 장르(세부 장르가 있으면 세부)와 같으면
  function menuTracks(m) {
    var key = m.sub || m.main;
    return D.tracks.filter(function (tr) { return tr.genres.indexOf(key) >= 0; });
  }
  function shuffled(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }

  // ── 곡 목록 ─────────────────────────────────────────────────────────────────
  // 그린 목록을 기억해 두었다가, 누르면 그 목록을 재생 대기열로 쓴다.
  var lists = [];
  var GB_ON = D.site.guestbook !== false;
  var eager = 0; // 화면 위쪽 이미지 6장만 바로 받고 나머지는 lazy
  function imgOf(tr) {
    var s = tr && tr.img;
    return typeof s === 'string' && (/^\/i\/[a-z0-9_-]+\?v=[0-9a-f]{8}$/.test(s) || /^https:\/\/[^\s"'<>]+\.webp$/.test(s) || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?\/[^\s"'<>]+\.webp$/.test(s)) ? s : '';
  }
  // 3-16 큰 재생 화면용 큰 그림 (있는 곡만, 화면을 열었을 때만 받는다 — 목록·작은 재생 바는 그대로 작은 그림)
  function bigOf(tr) {
    return tr && /^[0-9a-f]{8}$/.test(tr.il || '') && imgOf(tr).indexOf('/i/') === 0 ? '/i/' + encodeURIComponent(tr.id) + '?s=l&v=' + tr.il : imgOf(tr);
  }
  function fullArt() {
    var el = $('.aml-fp-art img', $full), tr = pos >= 0 ? trackById[queue[pos]] : null, s = bigOf(tr);
    el.hidden = !s; if (s) { if (el.getAttribute('src') !== s) el.src = s; } else el.removeAttribute('src');
  }
  function thumb(tr) {
    var s = imgOf(tr);
    return s ? '<img class="aml-thumb" src="' + esc(s) + '" alt=""' + (eager++ < 6 ? '' : ' loading="lazy"') + ' decoding="async" width="100" height="100">' : '';
  }
  // 3-8 확장 항목 칩. D.fields = { key: { type, label:{언어:글자}, order, opts:{옵션키:{언어:글자}} } }
  var FIELDS = D.fields && typeof D.fields === 'object' ? D.fields : {};
  var FIELD_KEYS = Object.keys(FIELDS).filter(function (k) { return /^[a-z][a-z0-9_]{1,31}$/.test(k); })
    .sort(function (a, b) { return ((FIELDS[a].order | 0) - (FIELDS[b].order | 0)) || (a < b ? -1 : 1); });
  function lbl(o, fallback) {
    o = o && typeof o === 'object' ? o : {};
    var s = o[AML.lang] || o[String(AML.lang).split('-')[0]] || o.en;
    return typeof s === 'string' && s ? s : fallback;
  }
  function extChips(tr) {
    var x = tr.ext;
    if (!x || typeof x !== 'object' || !FIELD_KEYS.length) return '';
    var out = '';
    FIELD_KEYS.forEach(function (k) {
      if (!(k in x)) return;
      var f = FIELDS[k], v = x[k], name = lbl(f.label, k), texts = [];
      if (f.type === 'multiselect' && Array.isArray(v)) texts = v.map(function (o) { return lbl(f.opts && f.opts[o], o); });
      else if (f.type === 'select' && typeof v === 'string') texts = [lbl(f.opts && f.opts[v], v)];
      else if (f.type === 'text' && typeof v === 'string') texts = [v];
      else if (f.type === 'number' && typeof v === 'number') texts = [name + ' ' + v];
      else if (f.type === 'bool' && v === true) texts = [name];
      texts.forEach(function (s) { out += '<span class="aml-ext is-' + k + '" title="' + esc(name) + '">' + esc(s) + '</span>'; });
    });
    return out;
  }

  // 3-14 재생 횟수: 1만 이상은 언어별 줄임(1.23만 · 12.3K · 1.23 लाख), 나머지는 언어별 숫자 모양(1,234).
  // 그 언어가 천 단위를 줄이지 않으면(독일어 12.345 등) 반올림한 숫자 대신 그대로 보인다.
  var ADM = null;   // 관리자 본인: { id: [누적, 7일, 오늘] } (관리 API 로 받은 것)
  function fmtCount(n) {
    try {
      var plain = new Intl.NumberFormat(AML.lang).format(n);
      if (n < 10000) return plain;
      var c = new Intl.NumberFormat(AML.lang, { notation: 'compact', maximumSignificantDigits: 3 }).format(n);
      return /^[\d\s.,'  ’]+$/.test(c) ? plain : c;
    } catch (e) { return String(n); }
  }
  // 3-18: 0회는 그리지 않는다(방문자·관리자 보기 모두). 자리는 곡 줄 맨 오른쪽 — 재생 시간 아래(kit.css grid-area: plays).
  //       ▶ + 숫자만 보이고, 문장(재생 12회)은 화면 읽기 프로그램용으로 남긴다 — 언어가 길어도 곡 줄 폭이 늘지 않게.
  function playsCell(tr) {
    var a = ADM && ADM[tr.id], n = a ? a[0] : (tr.pl >= 1 ? tr.pl | 0 : 0);
    if (!(n >= 1)) return '';
    var tip = ADM ? t('plays.tip', { w: fmtCount(a ? a[1] : 0), d: fmtCount(a ? a[2] : 0) }) + (tr.pl >= 1 ? '' : ' · ' + t('plays.only_you')) : '';
    var full = AML.tn('plays.count', n, { n: fmtCount(n) });
    return '<span class="aml-plays' + (ADM ? ' is-admin' : '') + '" title="' + esc(tip || full) + '">' + ic('play', 'aml-plays-ic') +
      '<span class="aml-plays-t">' + esc(full) + '</span><span class="aml-plays-n" aria-hidden="true">' + esc(fmtCount(n)) + '</span></span>';
  }
  // 이미 그린 곡 줄에 덧붙이기 (관리자 숫자를 받은 뒤)
  function applyPlays() {
    var rows = $content.querySelectorAll('.aml-track[data-id]');
    for (var i = 0; i < rows.length; i++) {
      var tr = trackById[rows[i].getAttribute('data-id')], tm = rows[i].querySelector('.aml-track-time');
      if (!tr || !tm) continue;
      var old = rows[i].querySelector('.aml-plays');
      if (old) old.parentNode.removeChild(old);
      var h = playsCell(tr);
      if (h) tm.insertAdjacentHTML('afterend', h);
      rows[i].classList.toggle('has-plays', !!h);
    }
  }

  // ── 3-18 좋아요 ♥ (로그인 없이 누구나 · 다시 누르면 취소) ──────────────────────────
  // 이 기기에서 누른 곡 = localStorage aml_likes {id: 누른 날(UTC)}. 막혀 있으면 이 화면에서만 기억한다(화면은 정상).
  // 서버에는 누를 때만 POST /api/like {id, on} 1번(0.7초 안에 여러 번 누르면 마지막 것만). 숫자는 하루 1번 집계라 화면에서만 +1.
  var LIKE_ON = !!(D.site && D.site.likes === true);
  var LK_KEY = 'aml_likes', liked = {}, likeT = {}, likeSent = {};
  var ID_OK = /^[a-z0-9_-]{1,64}$/, DAY_OK = /^\d{4}-\d{2}-\d{2}$/;
  try {
    var lkRaw = JSON.parse(localStorage.getItem(LK_KEY) || '{}');
    if (lkRaw && typeof lkRaw === 'object') Object.keys(lkRaw).forEach(function (k) { if (ID_OK.test(k) && DAY_OK.test(String(lkRaw[k]))) liked[k] = String(lkRaw[k]); });
  } catch (e) { /* 저장소 없음 */ }
  function utcDay() { return new Date().toISOString().slice(0, 10); }
  function likeCount(tr) {
    var n = tr.lk >= 1 ? tr.lk | 0 : 0;
    // 누른 날이 집계(D.lkd 전날까지)에 아직 안 들어갔으면 +1 (같은 날 누르고 취소하면 서버도 0)
    if (liked[tr.id] && !(DAY_OK.test(D.lkd || '') && liked[tr.id] < D.lkd)) n++;
    return n;
  }
  function likeInner(tr) {
    var on = !!liked[tr.id], n = likeCount(tr);
    return ic(on ? 'heart-fill' : 'heart') + (n ? '<span class="aml-like-n">' + esc(fmtCount(n)) + '</span>' : '');
  }
  function likeLabel(tr) {
    var n = likeCount(tr);
    return t(liked[tr.id] ? 'like.remove' : 'like.add', { title: tr.title }) + (n ? ' (' + fmtCount(n) + ')' : '');
  }
  function likeBtn(tr) {
    return '<button type="button" class="aml-tool aml-like' + (liked[tr.id] ? ' is-on' : '') + '" data-like="' + esc(tr.id) + '" aria-label="' + esc(likeLabel(tr)) + '">' + likeInner(tr) + '</button>';
  }
  // 같은 곡의 ♥ 모두(곡 줄 · 재생 바 · 큰 재생 화면)를 다시 칠한다
  function paintLike(id) {
    var tr = trackById[id], els = document.querySelectorAll('.aml-like[data-like]');
    if (!tr) return;
    for (var i = 0; i < els.length; i++) {
      if (els[i].getAttribute('data-like') !== id) continue;
      els[i].classList.toggle('is-on', !!liked[id]);
      els[i].innerHTML = likeInner(tr);
      els[i].setAttribute('aria-label', likeLabel(tr));
    }
  }
  function toggleLike(id) {
    if (!LIKE_ON || !trackById[id]) return;
    if (liked[id]) delete liked[id]; else liked[id] = utcDay();
    try { localStorage.setItem(LK_KEY, JSON.stringify(liked)); } catch (e) { /* 이 화면에서만 기억 */ }
    paintLike(id);
    clearTimeout(likeT[id]);
    likeT[id] = setTimeout(function () {
      var on = !!liked[id];
      if (likeSent[id] === on) return;   // 눌렀다 바로 되돌린 것 — 보낼 것 없음
      likeSent[id] = on;
      try {
        fetch('/api/like', { method: 'POST', credentials: 'same-origin', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id, on: on }) })
          .catch(function () { delete likeSent[id]; });
      } catch (e) { /* 표시는 그대로 */ }
    }, 700);
  }
  // 처음 상태: 이 기기에서 누른 곡은 서버도 on 으로 알고 있다고 본다(같은 것을 다시 보내지 않게)
  Object.keys(liked).forEach(function (k) { likeSent[k] = true; });
  (function adminPlays() {
    var flag = null;
    try { flag = localStorage.getItem('aml_adm'); } catch (e) { /* 저장소 없음 = 일반 방문자 */ }
    if (flag !== '1' || !window.fetch) return;
    fetch('/api/admin/plays', { credentials: 'same-origin', headers: { accept: 'application/json' } }).then(function (r) {
      if (r.status === 401 || r.status === 403) { try { localStorage.removeItem('aml_adm'); } catch (e) { /* */ } return null; }
      return r.ok ? r.json() : null;
    }).then(function (j) {
      if (!j || !j.ok || !j.on || !j.plays || typeof j.plays !== 'object') return;
      ADM = j.plays; applyPlays();
    }).catch(function () { /* 숫자만 안 보일 뿐 */ });
  })();

  // 3-13 이어 보기: 처음 PAGE 곡만 그리고, 끝 표시 요소가 보이거나 [더 보기]를 누르면 PAGE 곡씩 덧붙인다.
  // lists[li] = 목록 전체 id(재생 대기열 — 고른 정렬 순서 그대로), pages[li] = { tracks, shown }.
  var PAGE = 10, pages = [], loadIO = null;
  function trackList(tracks, all) {
    if (!tracks.length) return empty(t('list.empty'));
    var li = lists.push(tracks.map(function (x) { return x.id; })) - 1;
    var n = all ? tracks.length : Math.min(PAGE, tracks.length);
    pages[li] = { tracks: tracks, shown: n };
    return '<ol class="aml-list" data-list="' + li + '">' + rowsHtml(tracks, 0, n) + '</ol>' +
      (n < tracks.length ? loadMoreHtml(li) : '');
  }
  function loadMoreHtml(li) {
    return '<div class="aml-load" data-load="' + li + '"><button type="button" class="aml-load-more" data-load-more="' + li + '">' + esc(t('list.more')) + '</button></div>';
  }
  function loadMore(li, focus) {
    var p = pages[li], ol = $content.querySelector('.aml-list[data-list="' + li + '"]');
    if (!p || !ol || p.shown >= p.tracks.length) return;
    var from = p.shown, to = Math.min(p.tracks.length, from + PAGE);
    ol.insertAdjacentHTML('beforeend', rowsHtml(p.tracks, from, to));
    p.shown = to;
    var box = $content.querySelector('.aml-load[data-load="' + li + '"]');
    if (to >= p.tracks.length && box) { if (loadIO) loadIO.unobserve(box); box.parentNode.removeChild(box); box = null; }
    markPlaying();
    // 키보드로 [더 보기]를 누르면 새로 붙은 첫 곡으로 초점을 옮긴다(목록 순서대로 이어서 들을 수 있게)
    if (focus) { var b = ol.children[from] && ol.children[from].querySelector('.aml-play'); if (b) b.focus(); }
    // 아직 화면 안이면 한 번 더(키 큰 화면). unobserve → observe 는 지금 상태를 다시 알려 준다.
    else if (box && loadIO) { loadIO.unobserve(box); loadIO.observe(box); }
  }
  // 첫 화면은 꼭 10곡: 자동 이어 보기는 방문자가 스크롤(휠·터치 포함)을 시작한 뒤에 켠다(화면 이동 때의 scrollTo 는 무시).
  // 스크롤할 수 없는 짧은 화면은 [더 보기] 버튼으로 더 본다.
  var loadArmAt = 0;
  function armLoads() {
    if (!loadIO || Date.now() < loadArmAt) return;
    armOff();
    var boxes = $content.querySelectorAll('.aml-load');
    for (var i = 0; i < boxes.length; i++) loadIO.observe(boxes[i]);
  }
  function watchLoads() {
    if (loadIO) { loadIO.disconnect(); loadIO = null; }
    armOff();
    if (!$content.querySelector('.aml-load') || !('IntersectionObserver' in window)) return;   // 없으면 [더 보기] 버튼만
    loadIO = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) loadMore(+en.target.getAttribute('data-load'), false); });
    }, { rootMargin: '0px 0px 160px 0px' });
    loadArmAt = Date.now() + 200;
    ARM_EV.forEach(function (ev) { window.addEventListener(ev, armLoads, { passive: true }); });
  }
  var ARM_EV = ['scroll', 'wheel', 'touchmove'];
  function armOff() { ARM_EV.forEach(function (ev) { window.removeEventListener(ev, armLoads); }); }
  function rowsHtml(tracks, from, to) {
    return tracks.slice(from, to).map(function (tr, k) {
      var i = from + k;
      var genres = aiBadge(tr) + tr.genres.map(function (k, gi) {
        return '<span class="aml-genre' + (gi === 0 ? ' is-main' : '') + '">' + esc(AML.genreName(k)) + '</span>';
      }).join('');
      // 오른쪽 둥근 버튼: 가사(있을 때) · 방명록(켰을 때) · ♥(3-18, 켰을 때) · ⋯(다음에 재생 등). 휴대폰은 ♥ · ⋯ 만.
      var n = 1, m = 1, x = 0, tools = '';
      if (tr.ly) { n++; tools += '<button type="button" class="aml-tool aml-lyrics-btn" data-lyrics="' + esc(tr.id) + '" aria-label="' + esc(t('lyrics.open', { title: tr.title })) + '" title="SRT">' + ic('lyrics') + '</button>'; }
      if (GB_ON) { n++; tools += '<button type="button" class="aml-tool aml-gb-btn" data-gb="' + esc(tr.id) + '" aria-label="' + esc(t('gb.about_song', { title: tr.title })) + '">' + ic('chat') + '</button>'; }
      if (LIKE_ON) { n++; m++; x = 14; tools += likeBtn(tr); }   // ♥ 칸은 50px (36 + 14)
      tools += '<button type="button" class="aml-tool aml-more-btn" data-more="' + esc(tr.id) + '" aria-haspopup="menu" aria-label="' + esc(t('track.more', { title: tr.title })) + '">' + ic('more') + '</button>';
      var plays = playsCell(tr);
      return '<li class="aml-track has-tools' + (plays ? ' has-plays' : '') + '" style="--aml-tools-n:' + n + ';--aml-tools-m:' + m + (x ? ';--aml-tools-x:' + x + 'px' : '') + '" data-id="' + esc(tr.id) + '" data-i="' + i + '">' +
        '<button type="button" class="aml-play" aria-label="' + esc(t('track.play', { title: tr.title })) + '">' + thumb(tr) + '</button>' +
        '<span class="aml-track-main">' +
          '<span class="aml-track-title">' + esc(tr.title) + '</span>' +
          '<span class="aml-track-artist">' + esc(tr.artist) + '</span>' +
          '<span class="aml-track-tools">' + tools + '</span>' +
        '</span>' +
        '<span class="aml-genres">' + genres + extChips(tr) + '</span>' +
        '<span class="aml-track-time">' + fmtTime(tr.duration) + '</span>' + plays +
      '</li>';
    }).join('');
  }

  // 3-20 만든 AI 툴 배지 (아이콘 = 글자 ✦, 화면 읽기에는 "Made with Suno")
  function aiBadge(tr) {
    if (!tr.at) return '';
    var n = tr.at === 'other' ? t('ai_tool.other') : ((D.aitools && D.aitools[tr.at]) || tr.at);
    return '<span class="aml-genre aml-ai" title="' + esc(t('ai_tool.label') + ': ' + n) + '"><span class="aml-sr">' + esc(t('ai_tool.label')) + ': </span><span aria-hidden="true">✦ </span>' + esc(n) + '</span>';
  }

  function albumCards(albums) {
    if (!albums.length) return empty(t('albums.empty'), 'album');
    return '<div class="aml-albums">' + albums.map(function (a) {
      return '<a class="aml-album" href="#/album/' + encodeURIComponent(a.id) + '">' +
        (a.has_cover
          ? '<img class="aml-album-cover" loading="lazy" decoding="async" alt="" width="200" height="200" src="/c/' + encodeURIComponent(a.id) + '">'
          : '<span class="aml-album-cover is-empty"></span>') +
        '<span class="aml-album-title">' + esc(a.title) + '</span>' +
        '<span class="aml-album-artist">' + esc(a.artist) + '</span>' +
      '</a>';
    }).join('') + '</div>';
  }

  // ── 3-7 SNS 모음 ────────────────────────────────────────────────────────────
  var SOCIALS = (D.socials || []).filter(function (x) {
    return x && /^[a-z0-9_-]+$/.test(x.key) && /^[a-z0-9_-]+$/.test(x.icon) && /^https:\/\//.test(x.url);
  });
  var SPRITE = /^\/_app\/socials\.svg(\?v=[0-9a-z]+)?$/.test(D.sprite || '') ? D.sprite : '/_app/socials.svg';
  // SNS 이름은 브랜드 이름이라 번역하지 않는다. 언어팩에 social.{key} 가 있으면 그것을 쓴다.
  function socialName(x) { var k = 'social.' + x.key, v = t(k); return v !== k ? v : x.name; }
  function socialItem(x, on) {
    return '<li><a class="aml-social is-' + esc(x.key) + (on ? ' is-highlight' : '') + '" href="' + esc(x.url) + '" target="_blank" rel="noopener">' +
      '<svg class="aml-social-icon" aria-hidden="true" focusable="false"><use href="' + esc(SPRITE + '#' + x.icon) + '"></use></svg>' +
      '<span class="aml-social-name">' + esc(socialName(x)) + '</span></a></li>';
  }
  function linksView(key) {
    var head = '<section class="aml-section aml-view-links"><h2 class="aml-section-title">' + esc(t('links.title')) + '</h2>';
    if (!SOCIALS.length) {
      return head + '<p class="aml-empty">' + ic('link', 'aml-empty-ic') + esc(t('links.empty')) + '<br><a class="aml-links-home" href="#/">' + esc(t('links.home')) + '</a></p></section>';
    }
    var hit = SOCIALS.filter(function (x) { return x.key === key; })[0];
    var list = hit ? [hit].concat(SOCIALS.filter(function (x) { return x !== hit; })) : SOCIALS;
    return head + '<ul class="aml-socials">' + list.map(function (x) { return socialItem(x, x === hit); }).join('') + '</ul></section>';
  }
  // 스킨의 {{socials}} 아이콘 줄: 이름(숨김 글자)을 지금 언어로
  function labelSocialBar() {
    var els = document.querySelectorAll('.aml-socials .aml-social');
    for (var i = 0; i < els.length; i++) {
      if (els[i].closest('.aml-view-links')) continue;
      var m = /\bis-([a-z0-9_-]+)/.exec(els[i].className.replace(/\bis-highlight\b/, ''));
      var x = m && SOCIALS.filter(function (s) { return s.key === m[1]; })[0];
      if (!x) continue;
      var nm = els[i].querySelector('.aml-social-name');
      if (nm) nm.textContent = socialName(x);
      els[i].title = socialName(x);
    }
  }

  // ── 3-9 머리 영역 {{hero}}: 곡 수 · [전체 재생][섞어 재생] · 소개 "더 보기" ──────────────
  function labelHero() {
    var c = document.querySelector('.aml-hero-count');
    if (c) c.textContent = AML.tn('hero.track_count', D.tracks.length);
    var a = document.getElementById('aml-hero-actions');
    if (a) {
      a.innerHTML = D.tracks.length
        ? '<button type="button" class="aml-btn aml-btn-primary" data-hero="play">' + ic('play') + '<span>' + esc(t('hero.play_all')) + '</span></button>' +
          '<button type="button" class="aml-btn" data-hero="shuffle">' + ic('shuffle') + '<span>' + esc(t('hero.shuffle')) + '</span></button>'
        : '';
    }
    var more = document.querySelector('.aml-hero-more');
    if (more) { more.textContent = t('hero.more'); fitDesc(); }
  }
  function fitDesc() {
    var d = document.querySelector('.aml-hero-desc'), p = d && d.querySelector('p');
    if (p && !d.classList.contains('is-open')) d.classList.toggle('has-more', p.scrollHeight > p.clientHeight + 2);
  }
  var fitT = 0;
  window.addEventListener('resize', function () { clearTimeout(fitT); fitT = setTimeout(fitDesc, 150); });
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-hero], .aml-hero-more');
    if (!b) return;
    if (b.classList.contains('aml-hero-more')) { b.parentNode.classList.add('is-open'); return; }
    var ids = allIds();
    if (ids.length) playQueue(b.getAttribute('data-hero') === 'shuffle' ? shuffled(ids) : ids, 0);
  });

  function section(title, body, extraClass, link) {
    return '<section class="aml-section' + (extraClass ? ' ' + extraClass : '') + '">' +
      '<h2 class="aml-section-title"><span>' + esc(title) + '</span>' + (link || '') + '</h2>' + body + '</section>';
  }
  function seeAll(href) { return '<a class="aml-more-link" href="' + href + '">' + esc(t('home.see_all')) + ' &#8250;</a>'; }
  // 3-18 [최신순 | 인기순]: 목록 위 버튼 2개. base = 그 화면 주소(최신순), 인기순 = base + '/top' (홈은 #/top).
  //       누르면 주소만 바꾸고(replaceState — 뒤로 가기 기록이 늘지 않는다) 그 자리에서 다시 그린다(처음 10곡부터).
  function sortBar(top, base) {
    var pop = base === '#/' ? '#/top' : base + '/top';
    var b = function (href, on, key) {
      return '<button type="button" class="aml-sort-btn' + (on ? ' is-on' : '') + '" data-sort="' + esc(href) + '" aria-pressed="' + on + '">' + esc(t(key)) + '</button>';
    };
    return '<span class="aml-sort" role="group" aria-label="' + esc(t('sort.label')) + '">' + b(base, !top, 'sort.latest') + b(pop, top, 'sort.popular') + '</span>';
  }
  // 곡 목록 칸 하나: 제목 옆 정렬 버튼(곡이 있을 때) + 목록. top 이면 누적 재생 순.
  function listSection(title, tracks, cls, top, base, link) {
    return section(title, trackList(top ? byPop(tracks) : tracks), cls + (top ? ' aml-view-top' : ''), (tracks.length ? sortBar(top, base) : '') + (link || ''));
  }
  function resort(href) {
    var y = window.scrollY;
    try { history.replaceState(history.state, '', href); } catch (e) { location.hash = href; return; }
    render(true);
    window.scrollTo(0, y);
    // 다시 그린 뒤에도 누른 버튼이 보이게 + 초점 유지 (목록이 짧아져 화면이 위로 당겨졌을 수 있다)
    var on = $content.querySelector('.aml-sort-btn.is-on');
    if (!on) return;
    var r = on.getBoundingClientRect();
    if (r.top < 0 || r.bottom > window.innerHeight - 100) window.scrollTo(0, Math.max(0, window.scrollY + r.top - 80));
    try { on.focus({ preventScroll: true }); } catch (e) { on.focus(); }
  }

  // ── 화면(라우트) ────────────────────────────────────────────────────────────
  function render(keep) {
    var h = location.hash.replace(/^#\/?/, '').split('/');
    var view = h[0] || '', id = decodeURIComponent(h[1] || '');
    // 3-18 정렬은 주소 끝 /top : #/top(홈) · #/tracks/top · #/m/{메뉴}/top
    var top = false;
    if (view === 'top') { view = ''; top = true; } else if (view === 'tracks') top = h[1] === 'top'; else if (view === 'm') top = h[2] === 'top';
    lists = []; pages = []; eager = 0;
    var html = '', title = D.site.name;

    if (view === 'm') {
      var m = D.menus.filter(function (x) { return x.id === id; })[0];
      if (m) { title = menuLabel(m); html = listSection(title, menuTracks(m), 'aml-view-menu', top, '#/m/' + encodeURIComponent(m.id)); }
      else html = empty(t('menu.not_found'));
    } else if (view === 'tracks') {
      title = t('home.tracks');
      html = listSection(title, D.tracks, 'aml-view-tracks', top, '#/tracks');
    } else if (view === 'albums') {
      title = t('nav.albums');
      html = section(title, albumCards(D.albums), 'aml-view-albums');
    } else if (view === 'album') {
      var a = D.albums.filter(function (x) { return x.id === id; })[0];
      if (a) {
        title = a.title;
        var tracks = a.track_ids.map(function (i) { return trackById[i]; }).filter(Boolean);
        html = '<section class="aml-section aml-view-album"><div class="aml-album-head">' +
          (a.has_cover ? '<img class="aml-album-cover" alt="" width="200" height="200" src="/c/' + encodeURIComponent(a.id) + '">' : '<span class="aml-album-cover is-empty"></span>') +
          '<div class="aml-album-info"><h2 class="aml-section-title">' + esc(a.title) + '</h2>' +
          '<p class="aml-album-artist">' + esc(a.artist) + '</p>' +
          '<p class="aml-album-count">' + esc(AML.tn('album.track_count', tracks.length)) + '</p>' +
          '<button type="button" class="aml-play-all">' + ic('play') + '<span>' + esc(t('album.play_all')) + '</span></button></div></div>' +
          trackList(tracks, true) + '</section>';
      } else html = empty(t('album.not_found'), 'album');
    } else if (view === 'links') {
      title = t('links.title');
      html = linksView(id);
    } else if (view === 'gb' && GB_ON) {
      title = t('gb.title');
      html = gbView(id);
    } else {
      // 3-13 홈: 앨범 선반(12개까지, 4개 넘으면 "모두 보기") → 곡 목록(10곡씩 이어 보기). 곡이 많아도 앨범이 첫 화면에 보이게 앨범이 먼저.
      view = '';
      if (D.albums.length) html += section(t('home.albums'), albumCards(D.albums.slice(0, 12)), 'aml-view-home-albums', D.albums.length > 4 ? seeAll('#/albums') : '');
      html += listSection(t('home.tracks'), D.tracks, 'aml-view-home-tracks', top, '#/', D.tracks.length > PAGE ? seeAll(top ? '#/tracks/top' : '#/tracks') : '');
    }

    $content.innerHTML = html;
    watchLoads();
    document.body.setAttribute('data-aml-view', view && /^[a-z]+$/.test(view) ? view : 'home');   // 3-9: 스킨이 화면별로 꾸밀 수 있게
    document.title = title === D.site.name ? D.site.name : title + ' · ' + D.site.name;
    renderMenu(view, id);
    var adm = document.querySelector('.aml-admin-text');
    if (adm) adm.textContent = t('admin.link');
    labelSocialBar();
    labelHero();
    labelPlayer();
    closePop();
    markPlaying();
    if (view === 'gb' && GB_ON) gbLoad(gb.page || 1);
    // 화면 이동: 머리 영역({{hero}})이 있으면 그 아래(메뉴 막대·본문)부터 보이게. 첫 화면·홈은 맨 위.
    var hero = document.querySelector('.aml-hero');
    if (!keep) window.scrollTo(0, view && hero && rendered ? Math.max(0, hero.getBoundingClientRect().bottom + window.scrollY) : 0);
    rendered = true;
  }
  var rendered = false;

  function renderMenu(view, id) {
    var items = [{ href: '#/', label: t('nav.home'), on: view === '' || view === 'tracks' }];
    D.menus.forEach(function (m) { items.push({ href: '#/m/' + encodeURIComponent(m.id), label: menuLabel(m), on: view === 'm' && id === m.id }); });
    if (D.albums.length) items.push({ href: '#/albums', label: t('nav.albums'), on: view === 'albums' || view === 'album' });
    if (GB_ON) items.push({ href: '#/gb', label: t('gb.title'), on: view === 'gb' });
    if (SOCIALS.length) items.push({ href: '#/links', label: t('nav.links'), on: view === 'links' });
    $menu.innerHTML = items.map(function (x) {
      return '<a class="aml-menu-item' + (x.on ? ' is-active' : '') + '" href="' + x.href + '"' + (x.on ? ' aria-current="page"' : '') + '>' + esc(x.label) + '</a>';
    }).join('');
    var on = $menu.querySelector('.is-active');
    if (on && on.scrollIntoView && $menu.scrollWidth > $menu.clientWidth) { try { on.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } catch (e) { /* */ } }
  }

  // ── 재생 바 (3-9: 우리사이트 재생 바와 같은 모양, 사이트가 그린다 — 스킨은 색 변수만) ──────────
  // 오디오 요소 2개: audioViz 는 비주얼라이저(소리 분석)를 거치고, audioPlain 은 거치지 않는다.
  // 화면이 꺼져 있을 때(휴대폰 잠금) 다음 곡은 audioPlain 으로 — 꺼진 화면에서 분석기가 멈춰 다음 곡이 안 나오는 것을 막는다.
  var audioViz = new Audio(), audioPlain = new Audio(), audio = audioViz;
  audioViz.preload = 'none'; audioPlain.preload = 'none';
  // 두 요소에 같은 일을 걸되, 지금 쓰는 요소(audio)에서 온 것만 처리
  function onAudio(ev, fn) {
    [audioViz, audioPlain].forEach(function (el) { el.addEventListener(ev, function (e) { if (el === audio) fn(e); }); });
  }
  function useEl(el) {
    if (el === audio) return;
    var old = audio; audio = el;
    old.pause(); old.removeAttribute('src'); try { old.load(); } catch (e) { /* */ }
  }
  var queue = [], pos = -1, failStreak = 0, seeking = false, noticeOn = false, volBefore = 1;
  // 끊김 복구: started 이 곡이 소리를 냈나, moved 마지막으로 앞으로 나간 시각, netFn 기다렸다 다시 할 일
  var started = false, retry = 0, moved = 0, lastT = 0, netWait = 0, netFn = null;
  var MINI = '<span class="aml-viz-mini" aria-hidden="true">' + new Array(8).join('<span class="aml-viz-bar"></span>') + '</span>';
  function B(cls, icon) { return '<button type="button" class="aml-player-btn ' + cls + '">' + ic(icon) + '</button>'; }
  $player.innerHTML =
    '<button type="button" class="aml-player-art" data-p="open"><img alt="" width="44" height="44" hidden>' + MINI + '</button>' +
    '<div class="aml-player-info" data-p="open"><span class="aml-player-title"></span><span class="aml-player-artist"></span></div>' +
    (LIKE_ON ? '<button type="button" class="aml-player-btn aml-player-like aml-like" data-like="">' + ic('heart') + '</button>' : '') +   // 3-18 ♥ (휴대폰에서도 보인다)
    '<div class="aml-player-controls">' + B('aml-prev', 'prev') + B('aml-toggle', 'play') + B('aml-next', 'next') + '</div>' +
    '<div class="aml-player-right"><span class="aml-player-time">0:00 / 0:00</span>' + B('aml-player-lyrics', 'lyrics') +
      '<span class="aml-player-vol">' + B('aml-player-mute', 'vol') + '<input class="aml-rng" type="range" min="0" max="100" value="100"></span></div>' +
    '<input class="aml-player-seek aml-player-progress aml-rng" type="range" min="0" max="1000" value="0">' +
    '<span class="aml-player-notice" role="status"></span>';
  $player.setAttribute('role', 'region');
  var $ = function (c, root) { return (root || $player).querySelector(c); };
  var $title = $('.aml-player-title'), $artist = $('.aml-player-artist'), $toggle = $('.aml-toggle'), $art = $('.aml-player-art img');
  var $seek = $('.aml-player-seek'), $time = $('.aml-player-time'), $notice = $('.aml-player-notice');
  var $vol = $('.aml-player-vol input'), $mute = $('.aml-player-mute'), $lyr = $('.aml-player-lyrics');

  // 전체 화면 재생 (휴대폰에서 재생 바를 누르면 위로 올라온다. ⌄·Esc·아래로 끌기로 닫는다)
  var $full = document.createElement('div');
  $full.id = 'aml-fullplayer'; $full.className = 'aml-fullplayer'; $full.hidden = true;
  $full.setAttribute('role', 'dialog'); $full.setAttribute('aria-modal', 'true');
  $full.innerHTML = '<div class="aml-fp-top">' + B('aml-fp-close', 'down') + '<span class="aml-fp-grab" aria-hidden="true"></span><span class="aml-fp-sp"></span></div>' +
    '<div class="aml-fp-art"><img alt="" width="340" height="340" hidden></div>' +
    '<div class="aml-fp-body"><div><div class="aml-fp-title"></div><div class="aml-fp-artist"></div></div>' +
    '<div class="aml-fp-seek"><input class="aml-rng" type="range" min="0" max="1000" value="0"><div class="aml-fp-times"><span class="aml-fp-cur">0:00</span><span class="aml-fp-dur">0:00</span></div></div>' +
    '<div class="aml-fp-ctrl">' + B('aml-prev', 'prev') + B('aml-toggle', 'play') + B('aml-next', 'next') + '</div>' +
    '<div class="aml-fp-more">' + (LIKE_ON ? '<button type="button" class="aml-tool aml-fp-like aml-like" data-like="">' + ic('heart') + '</button>' : '') +
      '<button type="button" class="aml-tool aml-fp-lyrics">' + ic('lyrics') + '</button></div></div>';
  document.body.appendChild($full);
  var $fSeek = $('.aml-fp-seek input', $full), $fToggle = $('.aml-toggle', $full);

  function labelPlayer() {
    $player.setAttribute('aria-label', t('player.label'));
    $full.setAttribute('aria-label', t('player.now'));
    [$player, $full].forEach(function (r) {
      $('.aml-prev', r).setAttribute('aria-label', t('player.prev'));
      $('.aml-next', r).setAttribute('aria-label', t('player.next'));
    });
    $('.aml-player-art').setAttribute('aria-label', t('player.open'));
    $('.aml-fp-close', $full).setAttribute('aria-label', t('player.close'));
    $seek.setAttribute('aria-label', t('player.seek')); $fSeek.setAttribute('aria-label', t('player.seek'));
    $vol.setAttribute('aria-label', t('player.volume'));
    $mute.setAttribute('aria-label', t($vol.value === '0' ? 'player.unmute' : 'player.mute'));
    $lyr.setAttribute('aria-label', t('player.lyrics')); $('.aml-fp-lyrics', $full).setAttribute('aria-label', t('player.lyrics'));
    setToggle(pos >= 0 && !audio.paused);
    if (noticeOn) $notice.textContent = t('player.unavailable');
    if (LIKE_ON && pos >= 0) paintLike(queue[pos]);   // 3-18 ♥ 숨은 이름을 지금 언어로
  }

  // 3-18 재생 안내 한 줄: 재생 바 바로 위 가운데 작은 알약 (기존 알림 칸 .aml-player-notice 재사용 · role=status). 약 2초 뒤 사라진다.
  var toastT = 0, toldFrom = false;
  function toast(text) {
    if (noticeOn) return;   // "재생할 수 없는 곡" 알림이 떠 있으면 그것이 먼저
    clearTimeout(toastT);
    $notice.classList.remove('is-toast'); $notice.textContent = '';
    void $notice.offsetWidth;   // 같은 글을 다시 띄울 때도 처음부터 보이게(애니메이션 다시 시작)
    $notice.classList.add('is-toast'); $notice.textContent = text;
    toastT = setTimeout(clearToast, 2000);
  }
  function clearToast() {
    clearTimeout(toastT);
    if ($notice.classList.contains('is-toast')) { $notice.classList.remove('is-toast'); if (!noticeOn) $notice.textContent = ''; }
  }

  function playQueue(ids, start) {
    queue = ids.slice(); failStreak = 0;
    playAt(start || 0);
  }
  function playAt(i) {
    unwait(); retry = 0; started = false; moved = Date.now(); lastT = 0;
    if (i < 0 || i >= queue.length) { stopUi(); return; }
    pos = i;
    var tr = trackById[queue[i]];
    useEl(document.hidden && viz.mode === 'audio' ? audioPlain : audioViz);
    audio.src = '/a/' + encodeURIComponent(tr.id);
    vizConnect();
    audio.play().catch(function () { /* 오류는 error 이벤트에서 */ });
    if ($player.hidden) { $player.hidden = false; document.body.classList.add('aml-has-player'); }
    var img = imgOf(tr);
    $art.hidden = !img; if (img) $art.src = img; else $art.removeAttribute('src');
    if (!$full.hidden) fullArt();
    $title.textContent = tr.title; $artist.textContent = tr.artist;
    $('.aml-fp-title', $full).textContent = tr.title; $('.aml-fp-artist', $full).textContent = tr.artist;
    $lyr.hidden = !tr.ly; $('.aml-fp-lyrics', $full).hidden = !tr.ly;
    if (LIKE_ON) { [$('.aml-player-like'), $('.aml-fp-like', $full)].forEach(function (b) { b.setAttribute('data-like', tr.id); }); paintLike(tr.id); }
    clearToast(); $notice.textContent = ''; noticeOn = false;
    setProgress(0, tr.duration);
    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({ title: tr.title, artist: tr.artist, album: D.site.name,
          artwork: img ? [{ src: new URL(img, location.href).href, sizes: '100x100', type: 'image/webp' }] : [] });
      } catch (e) { /* 미지원 */ }
    }
    markPlaying();
  }
  function stopUi() { unwait(); pos = -1; setToggle(false); markPlaying(); }
  function setToggle(playing) {
    [$toggle, $fToggle].forEach(function (b) {
      b.innerHTML = ic(playing ? 'pause' : 'play');
      b.setAttribute('aria-label', t(playing ? 'player.pause' : 'player.play'));
    });
    $player.classList.toggle('is-playing', playing);
    $full.classList.toggle('is-playing', playing);
  }
  function setProgress(cur, d) {
    var p = d ? Math.min(1000, Math.round(cur / d * 1000)) : 0;
    if (!seeking) { $seek.value = p; $fSeek.value = p; }
    var pc = (seeking ? $seek.value : p) / 10 + '%';
    $seek.style.setProperty('--p', pc); $fSeek.style.setProperty('--p', pc);
    $time.textContent = fmtTime(cur) + ' / ' + fmtTime(d);
    if (!$full.hidden) { $('.aml-fp-cur', $full).textContent = fmtTime(cur); $('.aml-fp-dur', $full).textContent = fmtTime(d); }
  }
  function curDur() { return audio.duration || (pos >= 0 ? trackById[queue[pos]].duration : 0); }
  // 목록에서 지금 재생 중인 곡 표시 + 비주얼라이저를 그 줄로 옮긴다
  function markPlaying() {
    var cur = pos >= 0 ? queue[pos] : null;
    var rows = $content.querySelectorAll('.aml-track'), host = null;
    for (var i = 0; i < rows.length; i++) {
      var on = rows[i].getAttribute('data-id') === cur;
      rows[i].classList.toggle('is-playing', on);
      if (on && !host) host = rows[i];
    }
    if (host) { if (viz.el.parentNode !== host) host.insertBefore(viz.el, host.firstChild); vizKick(); }
    else if (viz.el.parentNode) viz.el.parentNode.removeChild(viz.el);
    var cards = $content.querySelectorAll('.aml-song-card[data-id]');
    for (var j = 0; j < cards.length; j++) cards[j].classList.toggle('is-playing', cards[j].getAttribute('data-id') === cur && !audio.paused);
  }

  onAudio('play', function () { setToggle(true); markPlaying(); });
  onAudio('pause', function () { setToggle(false); markPlaying(); });
  onAudio('playing', function () { failStreak = 0; retry = 0; started = true; moved = Date.now(); });
  onAudio('ended', function () { playAt(pos + 1); });
  onAudio('timeupdate', function () {
    if (audio.currentTime > lastT) moved = Date.now();
    lastT = audio.currentTime;
    setProgress(audio.currentTime, curDur());
  });
  onAudio('error', function () { if (pos >= 0 && audio.getAttribute('src')) failed(); });
  // 휴대폰 야외 연속 재생: 인터넷이 약해 끊기면 목록을 건너뛰며 다 써 버리지 않고, 같은 곡을 기다렸다 그 자리부터 다시
  function failed() {
    if (started && retry < 2) return recover();          // 곡 중간 끊김: 먼저 같은 자리부터
    if (navigator.onLine === false) return recover();
    var i = pos;
    fetch('/a/' + encodeURIComponent(queue[pos]), { method: 'HEAD', cache: 'no-store' }).then(function (r) {
      if (i !== pos) return;
      if (r.ok && retry < 3) recover(); else skipOne();     // 곡이 없음(비공개 404 등) → 다음 곡
    }, function () { if (i === pos) recover(); });          // 서버에 안 닿음 = 인터넷 문제 → 기다림
  }
  // 같은 곡을 2·4·8·10초 뒤(인터넷이 돌아오면 바로) 다시. 20번 넘으면 다음 곡
  function recover() {
    if (++retry > 20) return skipOne();
    var i = pos, at = started ? audio.currentTime : 0;
    unwait();
    netFn = function () {
      unwait();
      if (i !== pos) return;
      if (at) audio.addEventListener('loadedmetadata', function f() { audio.removeEventListener('loadedmetadata', f); try { audio.currentTime = at; } catch (e) { /* */ } });
      moved = Date.now(); lastT = at;
      audio.src = '/a/' + encodeURIComponent(queue[pos]);
      audio.play().catch(function () { /* 오류는 error 이벤트에서 */ });
    };
    moved = Date.now() + 60000;
    netWait = setTimeout(netFn, Math.min(10000, 1000 * Math.pow(2, retry)));
  }
  function unwait() { clearTimeout(netWait); netFn = null; }
  // 재생 실패(비공개 전환 → 404 등): 알리고 다음 곡. 연속 3번 실패하면 멈춘다.
  function skipOne() {
    clearToast(); $notice.textContent = t('player.unavailable'); noticeOn = true;
    if (++failStreak >= 3) { stopUi(); return; }
    setTimeout(function () { playAt(pos + 1); }, 1200);
  }
  window.addEventListener('online', function () { if (netFn) netFn(); });
  // 재생 중인데 20초 동안 한 걸음도 안 나가면(신호 약함·시작 안 됨) 다시 잇기
  setInterval(function () {
    if (pos >= 0 && !netFn && !audio.paused && !audio.ended && Date.now() - moved > 20000) failed();
  }, 5000);

  function toggle() {
    if (pos < 0) { if (D.tracks.length) playQueue(allIds(), 0); return; }
    if (netFn) { var f = netFn; unwait(); if (audio.paused) { f(); return; } }   // 기다리는 중: 누르면 바로 다시 / 멈춤
    if (audio.paused) audio.play(); else audio.pause();
  }
  function prev() { if (audio.currentTime > 3) audio.currentTime = 0; else if (pos > 0) playAt(pos - 1); }
  function next() { if (pos >= 0) playAt(pos + 1); }
  function onCtl(e) {
    var b = e.target.closest('button, [data-p]');
    if (!b) return;
    var c = b.classList;
    if (c.contains('aml-like')) { if (pos >= 0) toggleLike(b.getAttribute('data-like')); return; }
    if (c.contains('aml-toggle')) toggle();
    else if (c.contains('aml-prev')) prev();
    else if (c.contains('aml-next')) next();
    else if (c.contains('aml-player-lyrics') || c.contains('aml-fp-lyrics')) { if (pos >= 0) openLyrics(queue[pos], b); }
    else if (c.contains('aml-player-mute')) setVol($vol.value === '0' ? volBefore : 0);
    else if (c.contains('aml-fp-close')) closeFull();
    else if (b.getAttribute('data-p') === 'open' && MOBILE.matches) openFull();
  }
  $player.addEventListener('click', onCtl);
  $full.addEventListener('click', onCtl);
  // 진행선 끌기: 끄는 동안은 시간만 미리 보여 주고, 놓으면 그 자리로
  [$seek, $fSeek].forEach(function (s) {
    s.addEventListener('input', function () {
      seeking = true;
      var d = curDur(); $seek.value = $fSeek.value = s.value;
      $seek.style.setProperty('--p', s.value / 10 + '%'); $fSeek.style.setProperty('--p', s.value / 10 + '%');
      $time.textContent = fmtTime(s.value / 1000 * d) + ' / ' + fmtTime(d);
      $('.aml-fp-cur', $full).textContent = fmtTime(s.value / 1000 * d);
    });
    s.addEventListener('change', function () {
      seeking = false;
      if (audio.duration) audio.currentTime = s.value / 1000 * audio.duration;
    });
  });
  // 음량 (이 기기에 기억)
  function setVol(v, quiet) {
    v = Math.max(0, Math.min(1, Number(v) || 0));
    if (v > 0) volBefore = v;
    audioViz.volume = audioPlain.volume = v; audioViz.muted = audioPlain.muted = v === 0;
    $vol.value = Math.round(v * 100); $vol.style.setProperty('--p', Math.round(v * 100) + '%');
    $mute.innerHTML = ic(v === 0 ? 'mute' : 'vol');
    $mute.setAttribute('aria-label', t(v === 0 ? 'player.unmute' : 'player.mute'));
    if (!quiet) { try { localStorage.setItem('aml_volume', String(v)); } catch (e) { /* */ } }
  }
  $vol.addEventListener('input', function () { setVol($vol.value / 100); });
  (function () { var v = 1; try { var x = parseFloat(localStorage.getItem('aml_volume')); if (x >= 0 && x <= 1) v = x; } catch (e) { /* */ } setVol(v, true); })();

  var lastFocus = null;
  function openFull() {
    if (pos < 0) return;
    lastFocus = document.activeElement;
    $full.hidden = false;
    fullArt();
    setProgress(audio.currentTime, curDur());
    requestAnimationFrame(function () { $full.classList.add('is-open'); document.body.classList.add('aml-lock'); $('.aml-fp-close', $full).focus(); });
  }
  function closeFull() {
    if ($full.hidden) return;
    $full.classList.remove('is-open'); $full.style.transform = '';
    document.body.classList.remove('aml-lock');
    setTimeout(function () { if (!$full.classList.contains('is-open')) $full.hidden = true; }, 420);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  // 아래로 끌어 닫기 (손가락을 따라 내려오고, 90px 넘게 끌면 닫힘)
  var y0 = null;
  $full.addEventListener('touchstart', function (e) { y0 = e.target.closest('input') || $full.scrollTop > 0 ? null : e.touches[0].clientY; }, { passive: true });
  $full.addEventListener('touchmove', function (e) { if (y0 !== null) { var dy = e.touches[0].clientY - y0; $full.style.transform = dy > 0 ? 'translateY(' + dy + 'px)' : ''; } }, { passive: true });
  $full.addEventListener('touchend', function (e) {
    if (y0 === null) return;
    var dy = e.changedTouches[0].clientY - y0; y0 = null;
    if (dy > 90) closeFull(); else $full.style.transform = '';
  }, { passive: true });

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.setActionHandler('play', toggle);
      navigator.mediaSession.setActionHandler('pause', toggle);
      navigator.mediaSession.setActionHandler('previoustrack', function () { if (pos > 0) playAt(pos - 1); });
      navigator.mediaSession.setActionHandler('nexttrack', next);
    } catch (e) { /* 미지원 */ }
  }

  // 곡 줄 클릭 → 그 목록 전체를 대기열로 재생 / 같은 곡이면 일시정지·재개. 줄 안의 버튼은 먼저 골라낸다.
  $content.addEventListener('click', function (e) {
    var b;
    if ((b = e.target.closest('[data-load-more]'))) { loadMore(+b.getAttribute('data-load-more'), true); return; }
    if ((b = e.target.closest('[data-sort]'))) { if (!b.classList.contains('is-on')) resort(b.getAttribute('data-sort')); return; }
    if ((b = e.target.closest('[data-like]'))) { toggleLike(b.getAttribute('data-like')); return; }
    if ((b = e.target.closest('[data-more]'))) { openMore(b, b.getAttribute('data-more')); return; }
    if ((b = e.target.closest('[data-lyrics]'))) { openLyrics(b.getAttribute('data-lyrics'), b); return; }
    if ((b = e.target.closest('[data-gb]'))) { goGb(b.getAttribute('data-gb')); return; }
    if ((b = e.target.closest('[data-card-play]'))) { playOne(b.getAttribute('data-card-play')); return; }
    if ((b = e.target.closest('[data-gb-page]'))) { if (!b.disabled && !b.classList.contains('is-on')) gbLoad(+b.getAttribute('data-gb-page'), true); return; }
    if (e.target.closest('.aml-gb-unlink')) { gb.draftTrack = ''; keepDraft(); location.hash = '#/gb'; return; }
    var row = e.target.closest('.aml-track');
    if (row) {
      var id = row.getAttribute('data-id');
      if (pos >= 0 && queue[pos] === id) { if (audio.paused) audio.play(); else audio.pause(); return; }
      playQueue(lists[+row.parentNode.getAttribute('data-list')], +row.getAttribute('data-i'));
      if (!toldFrom) { toldFrom = true; toast(t('notice.play_from')); }   // 3-18 방문(페이지 열기)당 처음 한 번만
      return;
    }
    if (e.target.closest('.aml-play-all')) {
      var first = $content.querySelector('.aml-list');
      if (first) playQueue(lists[+first.getAttribute('data-list')], 0);
    }
  });
  function goGb(id) { gb.draftTrack = id; location.hash = '#/gb/' + encodeURIComponent(id); }
  function playOne(id) {
    if (!trackById[id]) return;
    if (pos >= 0 && queue[pos] === id) { if (audio.paused) audio.play(); else audio.pause(); return; }
    playQueue([id], 0);
  }
  function playNext(id) {
    if (pos < 0) { playQueue([id], 0); return; }
    var at = queue.indexOf(id, pos + 1);
    if (at > pos) queue.splice(at, 1);
    if (queue[pos] !== id) queue.splice(pos + 1, 0, id);
  }

  // ── ⋯ 메뉴 (다음에 재생 · 가사 · 이 곡에 글 남기기) ────────────────────────────
  var pop = null, popFrom = null, popY = 0;
  function openMore(btn, id) {
    var tr = trackById[id];
    if (!tr) return;
    if (pop && !pop.hidden && popFrom === btn) { closePop(); return; }
    if (!pop) {
      pop = document.createElement('div');
      pop.className = 'aml-pop'; pop.setAttribute('role', 'menu');
      pop.addEventListener('click', function (e) {
        var x = e.target.closest('[data-do]');
        if (!x) return;
        var d = x.getAttribute('data-do'), tid = pop.getAttribute('data-id'), from = popFrom;
        closePop();
        if (d === 'next') { var was = pos >= 0; playNext(tid); if (was) toast(t('notice.play_next')); } else if (d === 'lyrics') openLyrics(tid, from); else if (d === 'gb') goGb(tid);
      });
      document.body.appendChild(pop);
    }
    var item = function (d, icon, label) { return '<button type="button" role="menuitem" data-do="' + d + '">' + ic(icon) + '<span>' + esc(label) + '</span></button>'; };
    pop.setAttribute('data-id', id);
    pop.innerHTML = item('next', 'next-up', t('track.play_next')) + (tr.ly ? item('lyrics', 'lyrics', t('player.lyrics')) : '') + (GB_ON ? item('gb', 'chat', t('track.gb_write')) : '');
    pop.hidden = false; popFrom = btn; popY = window.scrollY;
    var r = btn.getBoundingClientRect(), w = pop.offsetWidth, ht = pop.offsetHeight;
    pop.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w)) + 'px';
    pop.style.top = (r.bottom + ht + 8 > window.innerHeight ? Math.max(8, r.top - ht - 4) : r.bottom + 4) + 'px';
    btn.setAttribute('aria-expanded', 'true');
    pop.querySelector('button').focus();
  }
  function closePop() {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    if (popFrom) popFrom.setAttribute('aria-expanded', 'false');
  }
  document.addEventListener('click', function (e) { if (pop && !pop.hidden && !e.target.closest('.aml-pop, [data-more]')) closePop(); }, true);
  window.addEventListener('scroll', function () { if (pop && !pop.hidden && Math.abs(window.scrollY - popY) > 40) closePop(); }, { passive: true });

  // ── 비주얼라이저 ─────────────────────────────────────────────────────────────
  // 막대 7개: 재생 중인 곡 줄 뒤(폭 70%, CSS) + 재생 바 곡 이미지 위(작게). 높이는 transform: scaleY 만 바꾼다.
  // 1) Web Audio 로 실제 소리 분석(음원 /a/ 가 같은 사이트) 2) 안 되거나 iPhone·iPad면 'anim' 흉내.
  // 재생 중이고 탭이 보일 때만 requestAnimationFrame. 움직임 줄이기 설정이면 낮은 막대로 멈춰 있다.
  var VIZ_N = 7;
  var viz = { el: null, bars: [], mini: [], lv: [], mode: '', ctx: null, an: null, buf: null, raf: 0, ph: [] };
  (function makeViz() {
    var el = document.createElement('span');
    el.className = 'aml-viz'; el.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < VIZ_N; i++) {
      var b = document.createElement('span'); b.className = 'aml-viz-bar';
      el.appendChild(b); viz.bars.push(b); viz.lv.push(0);
      viz.ph.push({ a: Math.random() * 6.3, s: 2.1 + Math.random() * 2.6, s2: 0.7 + Math.random() * 0.9 });
    }
    viz.el = el;
    viz.mini = Array.prototype.slice.call($player.querySelectorAll('.aml-viz-mini .aml-viz-bar'));
  })();
  function isIOS() { return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); }
  function vizConnect() {
    if (viz.mode) { if (viz.ctx && viz.ctx.state === 'suspended') viz.ctx.resume().catch(function () {}); return; }
    viz.mode = 'anim';
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC || isIOS()) return;
    try {
      var ctx = new AC();
      var src = ctx.createMediaElementSource(audioViz);
      var an = ctx.createAnalyser();
      an.fftSize = 256; an.smoothingTimeConstant = 0.55;
      src.connect(an); an.connect(ctx.destination);
      viz.ctx = ctx; viz.an = an; viz.buf = new Uint8Array(an.frequencyBinCount); viz.mode = 'audio';
      if (ctx.state === 'suspended') ctx.resume().catch(function () {});
      audioViz.addEventListener('play', function () { if (ctx.state !== 'running') ctx.resume().catch(function () {}); });
    } catch (e) { viz.mode = 'anim'; }
  }
  // 막대별 주파수 구간 (낮은 소리 → 높은 소리, 로그 간격 약 60Hz~11kHz)
  function bandsOf(n, rate) {
    var out = [], lo = 60, hi = Math.min(11000, rate / 2), hz = rate / 2 / n;
    for (var i = 0; i < VIZ_N; i++) {
      var f1 = lo * Math.pow(hi / lo, i / VIZ_N), f2 = lo * Math.pow(hi / lo, (i + 1) / VIZ_N);
      var a = Math.max(1, Math.floor(f1 / hz)), b = Math.max(a + 1, Math.ceil(f2 / hz));
      out.push([a, Math.min(n, b)]);
    }
    return out;
  }
  function setBars(fn) {
    for (var i = 0; i < VIZ_N; i++) {
      var s = 'scaleY(' + fn(i).toFixed(3) + ')';
      viz.bars[i].style.transform = s;
      if (viz.mini[i]) viz.mini[i].style.transform = s;
    }
  }
  var REST = [0.3, 0.5, 0.38, 0.6, 0.44, 0.52, 0.34];
  function vizFrame(now) {
    viz.raf = 0;
    var playing = pos >= 0 && !audio.paused;
    if (!playing || document.hidden || RM.matches) {   // 멈춤·숨김·움직임 줄이기: 바로 멈춘다
      for (var r = 0; r < VIZ_N; r++) viz.lv[r] = 0;
      setBars(function (i) { return playing && RM.matches ? REST[i] : 0.12; });
      return;
    }
    var target = [], i;
    if (viz.mode === 'audio' && viz.an && audio === audioViz) {
      viz.an.getByteFrequencyData(viz.buf);
      var bands = viz.bands || (viz.bands = bandsOf(viz.buf.length, viz.ctx.sampleRate));
      for (i = 0; i < VIZ_N; i++) {
        var sum = 0, n = 0;
        for (var k = bands[i][0]; k < bands[i][1]; k++) { sum += viz.buf[k]; n++; }
        var v = n ? sum / n / 255 : 0;
        target.push(Math.min(1, Math.pow(v, 1.6) * (1 + i * 0.18)));  // 높은 소리는 원래 작아서 조금 키운다
      }
    } else {
      var s = now / 1000;
      for (i = 0; i < VIZ_N; i++) {
        var p = viz.ph[i];
        target.push(0.2 + 0.65 * Math.abs(Math.sin(s * p.s + p.a)) * (0.55 + 0.45 * Math.sin(s * p.s2 + p.a * 2)));
      }
    }
    for (i = 0; i < VIZ_N; i++) viz.lv[i] += (target[i] - viz.lv[i]) * (target[i] > viz.lv[i] ? 0.45 : 0.12);
    setBars(function (j) { return 0.12 + 0.88 * viz.lv[j]; });
    viz.raf = requestAnimationFrame(vizFrame);
  }
  function vizKick() { if (!viz.raf) viz.raf = requestAnimationFrame(vizFrame); }
  onAudio('play', vizKick);
  onAudio('pause', vizKick);
  document.addEventListener('visibilitychange', vizKick);

  // ── 가사 창 (3-6): SRT 원문에서 번호·시간 줄을 지우고 글자만 ─────────────────────────
  var lyCache = {};
  var modal = null, modalBack = null;
  function srtText(s) {
    return String(s).replace(/^﻿/, '').replace(/\r\n?/g, '\n').split(/\n{2,}/).map(function (block) {
      return block.split('\n').filter(function (line) {
        return line.trim() && !/^\s*\d+\s*$/.test(line) && !/-->/.test(line);
      }).map(function (line) {
        return line.replace(/<[^>]*>/g, '').replace(/\{\\[^}]*\}/g, '').trim();
      }).filter(Boolean).join('\n');
    }).filter(Boolean).join('\n');
  }
  function openModal(title, bodyHtml, from) {
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'aml-modal'; modal.hidden = true;
      modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true');
      modal.innerHTML = '<div class="aml-modal-box"><button type="button" class="aml-modal-close">&times;</button>' +
        '<h2 class="aml-modal-title" id="aml-modal-title"></h2><div class="aml-modal-body"></div></div>';
      modal.setAttribute('aria-labelledby', 'aml-modal-title');
      modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.aml-modal-close')) closeModal(); });
      document.body.appendChild(modal);
    }
    modal.querySelector('.aml-modal-close').setAttribute('aria-label', t('modal.close'));
    modal.querySelector('.aml-modal-title').textContent = title;
    modal.querySelector('.aml-modal-body').innerHTML = bodyHtml;
    modal.hidden = false;
    modalBack = from || null;
    modal.querySelector('.aml-modal-close').focus();
  }
  function closeModal() {
    if (!modal || modal.hidden) return false;
    modal.hidden = true;
    if (modalBack && modalBack.focus) modalBack.focus();
    return true;
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (pop && !pop.hidden) { var f = popFrom; closePop(); if (f) f.focus(); return; }
    if (!closeModal()) closeFull();
  });
  function openLyrics(id, from) {
    var tr = trackById[id];
    if (!tr || !tr.ly) return;
    var title = t('lyrics.title', { title: tr.title });
    var key = id + '?v=' + tr.ly;
    if (lyCache[key] != null) { openModal(title, '<p class="aml-lyrics-text">' + esc(lyCache[key]) + '</p>', from); return; }
    openModal(title, '<p class="aml-lyrics-text aml-loading">' + esc(t('lyrics.loading')) + '</p>', from);
    fetch('/l/' + encodeURIComponent(id) + '?v=' + encodeURIComponent(tr.ly))
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (txt) {
        lyCache[key] = srtText(txt) || t('lyrics.empty');
        if (!modal.hidden) modal.querySelector('.aml-modal-body').innerHTML = '<p class="aml-lyrics-text">' + esc(lyCache[key]) + '</p>';
      })
      .catch(function () {
        if (!modal.hidden) modal.querySelector('.aml-modal-body').innerHTML = '<p class="aml-lyrics-text">' + esc(t('lyrics.failed')) + '</p>';
      });
  }

  // ── 방명록 (3-6): /api/gb 로만 주고받고 페이지는 그대로 → 재생이 끊기지 않는다. 링크 금지, 숨은 칸 website 는 로봇 함정 ──
  var gb = { page: 1, pages: 1, draftTrack: '', name: '', text: '', seq: 0 };
  var GB_LINK = /(https?:|ftp:|\/\/|www\.|\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:[a-z]{2,24}|xn--[a-z0-9-]+)\b)/i;
  try { gb.name = localStorage.getItem('aml_gb_name') || ''; } catch (e) { /* 저장 불가 */ }
  function songCard(id) {
    var tr = trackById[id];
    if (!tr) {
      return '<div class="aml-song-card is-deleted"><span class="aml-song-card-img"></span><span class="aml-song-card-info">' +
        '<span class="aml-song-card-title">' + esc(t('gb.deleted_song')) + '</span></span></div>';
    }
    var s = imgOf(tr);
    return '<div class="aml-song-card" data-id="' + esc(id) + '">' +
      (s ? '<img class="aml-song-card-img" src="' + esc(s) + '" alt="" loading="lazy" width="44" height="44">' : '<span class="aml-song-card-img"></span>') +
      '<span class="aml-song-card-info"><span class="aml-song-card-title">' + esc(tr.title) + '</span><span class="aml-song-card-artist">' + esc(tr.artist) + '</span></span>' +
      '<button type="button" class="aml-song-card-play" data-card-play="' + esc(id) + '" aria-label="' + esc(t('track.play', { title: tr.title })) + '">' + ic('play') + '</button></div>';
  }
  function gbView(trackId) {
    gb.draftTrack = trackId && trackById[trackId] ? trackId : '';
    var about = gb.draftTrack ? '<div class="aml-gb-about">' + songCard(gb.draftTrack) +
      '<button type="button" class="aml-tool aml-gb-unlink">' + esc(t('gb.unlink')) + '</button></div>' : '';
    return '<section class="aml-section aml-view-gb"><h2 class="aml-section-title">' + esc(t('gb.title')) + '</h2>' +
      '<form class="aml-gb-form" id="aml-gb-form" novalidate>' + about +
        '<input class="aml-gb-name" name="name" type="text" maxlength="20" autocomplete="nickname" placeholder="' + esc(t('gb.name')) + '" aria-label="' + esc(t('gb.name')) + '" value="' + esc(gb.name) + '">' +
        '<textarea class="aml-gb-text" name="text" maxlength="500" rows="4" placeholder="' + esc(t('gb.text')) + '" aria-label="' + esc(t('gb.text')) + '">' + esc(gb.text) + '</textarea>' +
        '<div class="aml-hp" aria-hidden="true"><label>Website <input name="website" type="text" tabindex="-1" autocomplete="off" value=""></label></div>' +
        '<div class="aml-gb-row"><span class="aml-gb-count">' + charCount(gb.text) + '/500 · ' + esc(t('gb.no_links')) + '</span>' +
        '<button type="submit" class="aml-gb-submit">' + esc(t('gb.submit')) + '</button></div>' +
        '<p class="aml-gb-msg" role="status"></p></form>' +
      '<ol class="aml-gb-list" id="aml-gb-list"><li class="aml-empty">' + esc(t('gb.loading')) + '</li></ol>' +
      '<div class="aml-gb-pager" id="aml-gb-pager" role="navigation" aria-label="' + esc(t('gb.pages')) + '" hidden></div></section>';
  }
  function charCount(s) { return Array.from ? Array.from(s || '').length : String(s || '').length; }
  function keepDraft() {
    var f = document.getElementById('aml-gb-form');
    if (!f) return;
    gb.name = f.elements.name.value; gb.text = f.elements.text.value;
  }
  function fmtDate(iso) {
    var d = new Date(iso); if (isNaN(d)) return '';
    try { return d.toLocaleString(AML.lang, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }); } catch (e) { return d.toISOString().slice(0, 16).replace('T', ' '); }
  }
  function gbMsg(text, isErr) {
    var m = document.querySelector('.aml-gb-msg');
    if (m) { m.textContent = text; m.classList.toggle('is-err', !!isErr); }
  }
  function errText(e) { return AML.errText ? AML.errText(e) : t(e && e.code ? e.code : 'err.unknown'); }
  function gbLoad(page, scroll) {
    var seq = ++gb.seq;
    var list = document.getElementById('aml-gb-list');
    if (!list) return;
    fetch('/api/gb?page=' + (page | 0 || 1), { cache: 'no-store', credentials: 'same-origin' })
      .then(function (r) { return r.json().catch(function () { return { ok: false, error: { code: 'err.server' } }; }); })
      .then(function (d) {
        if (seq !== gb.seq || !document.getElementById('aml-gb-list')) return;
        if (!d || d.ok === false) throw (d && d.error) || { code: 'err.server' };
        gb.page = d.page; gb.pages = d.pages;
        list.innerHTML = d.posts.length ? d.posts.map(function (p) {
          return '<li class="aml-gb-post">' + (p.track ? songCard(p.track) : '') +
            '<div class="aml-gb-head"><b class="aml-gb-name">' + esc(p.name) + '</b><span class="aml-gb-time">' + esc(fmtDate(p.at)) + '</span></div>' +
            '<p class="aml-gb-body">' + esc(p.text) + '</p></li>';
        }).join('') : '<li class="aml-empty">' + ic('chat', 'aml-empty-ic') + esc(t('gb.empty')) + '</li>';
        var pager = document.getElementById('aml-gb-pager');
        pager.hidden = d.pages <= 1;
        pager.innerHTML = gbPager(d.page | 0, d.pages | 0);
        markPlaying();
        if (scroll) list.scrollIntoView({ block: 'start' });
      })
      .catch(function (e) {
        if (seq !== gb.seq) return;
        var l = document.getElementById('aml-gb-list');
        if (l) l.innerHTML = '<li class="aml-empty">' + esc(e && e.code ? errText(e) : t('err.network')) + '</li>';
      });
  }
  // 3-18 쪽 번호 ‹ 1 2 3 … 10 › : 한 번에 10개, 10쪽이 넘으면 ‹ › 로 앞·뒤 10쪽 묶음(11~20 …). 지금 쪽은 강조 + aria-current="page".
  function gbPager(page, pages) {
    if (pages <= 1) return '';
    var g0 = Math.floor((page - 1) / 10) * 10 + 1, g1 = Math.min(pages, g0 + 9), h = '';
    var arrow = function (to, key, txt, off) {
      return '<button type="button" class="aml-gb-arrow" data-gb-page="' + to + '" aria-label="' + esc(t(key)) + '"' + (off ? ' disabled' : '') + '>' + txt + '</button>';
    };
    if (pages > 10) h += arrow(g0 - 1, 'gb.prev', '&#8249;', g0 <= 1);
    for (var i = g0; i <= g1; i++) {
      h += '<button type="button" class="aml-gb-num' + (i === page ? ' is-on" aria-current="page' : '') + '" data-gb-page="' + i + '">' + i + '</button>';
    }
    if (pages > 10) h += arrow(g1 + 1, 'gb.next', '&#8250;', g1 >= pages);
    return h;
  }
  $content.addEventListener('input', function (e) {
    if (!e.target.closest('#aml-gb-form')) return;
    keepDraft();
    var c = document.querySelector('.aml-gb-count');
    if (c) c.textContent = charCount(gb.text) + '/500 · ' + t('gb.no_links');
  });
  $content.addEventListener('submit', function (e) {
    var f = e.target;
    if (f.id !== 'aml-gb-form') return;
    e.preventDefault();
    keepDraft();
    var name = gb.name.replace(/\s+/g, ' ').trim(), text = gb.text.trim();
    if (!name || charCount(name) > 20) return gbMsg(t('err.gb.name', { max: 20 }), true);
    if (!text || charCount(text) > 500) return gbMsg(t('err.gb.text', { max: 500 }), true);
    if (GB_LINK.test(name) || GB_LINK.test(text)) return gbMsg(t('err.gb.link'), true);
    var btn = f.querySelector('.aml-gb-submit'); btn.disabled = true;
    gbMsg(t('gb.sending'));
    fetch('/api/gb', {
      method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, text: text, track: gb.draftTrack || undefined, website: f.elements.website.value }),
    }).then(function (r) { return r.json().catch(function () { return { ok: false, error: { code: 'err.server' } }; }); })
      .then(function (d) {
        if (!d || d.ok === false) throw (d && d.error) || { code: 'err.server' };
        try { localStorage.setItem('aml_gb_name', name); } catch (x) { /* 저장 불가 */ }
        gb.text = ''; f.elements.text.value = '';
        var c = document.querySelector('.aml-gb-count'); if (c) c.textContent = '0/500 · ' + t('gb.no_links');
        gbMsg(t('gb.posted'));
        gbLoad(1);
      })
      .catch(function (err) { gbMsg(err && err.code ? errText(err) : t('err.network'), true); })
      .then(function () { btn.disabled = false; });
  });

  // ── 구글 애드센스 칸 채우기 (3-6): 광고 코드는 Worker가 만든다. 칸마다 한 번 "채워 달라"고만 알린다 ──
  function fillAds() {
    var slots = document.querySelectorAll('ins.adsbygoogle');
    for (var i = 0; i < slots.length; i++) {
      if (slots[i].getAttribute('data-aml-pushed')) continue;
      slots[i].setAttribute('data-aml-pushed', '1');
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { /* 광고 차단기 등 */ }
    }
  }
  // 3-9 글꼴: 스킨 글꼴 목록에 Pretendard 가 있고 애플 기기가 아니면 사이트 글꼴 CSS 를 붙인다(화면에 나온 글자 조각만 받는다)
  function loadFont() {
    try {
      if (/Mac|iPhone|iPad|iPod/.test(navigator.platform || '') || document.getElementById('aml-font')) return;
      if (!/Pretendard/i.test(getComputedStyle(document.body).fontFamily || '')) return;
      var l = document.createElement('link');
      l.id = 'aml-font'; l.rel = 'stylesheet'; l.href = '/_app/fonts/pretendard-1.3.9/pretendard.css';
      document.head.appendChild(l);
    } catch (e) { /* 기기 글꼴 그대로 */ }
  }

  window.addEventListener('hashchange', function () { keepDraft(); render(); });
  AML.render = render;

  // ── 언어 (3-3): 저장값 → 브라우저 언어 → 사이트 기본 언어 → en. 고른 언어팩 1개만 받는다 ──
  function langBox() {
    var box = document.getElementById('aml-lang');
    if (!box) {
      box = document.createElement('div');
      box.id = 'aml-lang'; box.className = 'aml-lang';
      $menu.parentNode.insertBefore(box, $menu.nextSibling);
    }
    return box;
  }
  function rerender() { var y = window.scrollY; render(); window.scrollTo(0, y); }
  AML.setLang(AML.pickLang(D.site.default_lang)).then(function () {
    AML.langSelect(langBox(), rerender);
    render();
    fillAds();
    loadFont();
  });
})();
