/* help.js — 관리 화면 "?" 도움말 (3-26). 개인사이트 관리 화면(Workers판·PHP판)과 meshmelo 포털·/ops 가 같이 쓴다.
 * data-help="help.{탭}.{항목}" 옆에 ? 를 넣고(마우스·키보드로 오면 보임, 휴대폰은 늘), 누르면 창 하나(×·Esc·바깥, 다른 ? = 앞 창 닫고 새 창).
 * 글은 처음 누를 때 {base}{언어}.js (없으면 영어). 방식·글 규칙: docs/도움말_만들기.md · 검사: node tools/help-check.js */
(function () {
  'use strict';
  if (window.AMLHelp && window.AMLHelp.init) return;
  var C = { base: '/_app/lang-help/', v: '1', lang: function () { return 'en'; }, label: function () { return '?'; } };
  var TX = {}, got = {}, dlg = null, cur = '', started = false, queued = false;
  var PARTS = ['what', 'when', 'click', 'care', 'like'];
  var UI_EN = { what: 'What is it?', when: 'When do I use it?', click: 'What happens when I press it?', care: 'Watch out', like: 'Think of it like this', close: 'Close', fail: 'The help text could not be loaded. Check your internet and press ? again.' };

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function rich(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\[\[(.+?)\]\]/g, '<b class="hmd-ui">$1</b>').replace(/\n/g, '<br>');
  }
  function lang() { var l = ''; try { l = C.lang() || 'en'; } catch (e) { l = 'en'; } return /^[a-z]{2,3}(-[a-z0-9]{2,8})?$/.test(l) ? l : 'en'; }

  // ── 글 파일 받기 (처음 ? 를 누를 때만) ──
  function need(code) {
    if (got[code]) return got[code];
    return (got[code] = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = C.base + code + '.js?v=' + encodeURIComponent(C.v);
      s.onload = function () { ok(!!TX[code]); };
      s.onerror = function () { delete got[code]; ok(false); };
      document.head.appendChild(s);
    }));
  }
  function textFor(key) {
    var l = lang();
    return need(l).then(function () {
      if (TX[l] && TX[l][key]) return { e: TX[l][key], ui: TX[l]._ui || {} };
      return need('en').then(function () {
        var e = TX.en && TX.en[key];
        return e ? { e: e, ui: (TX[l] && TX[l]._ui) || (TX.en && TX.en._ui) || {} } : null;
      });
    });
  }

  // ── 창(모달) 하나 ──
  function box() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.className = 'hmd';
    dlg.setAttribute('aria-labelledby', 'hmd-t');
    dlg.innerHTML = '<div class="hmd-in"><button type="button" class="hmd-x" aria-label="Close">×</button><h2 id="hmd-t"></h2><div class="hmd-b" aria-live="polite"></div></div>';
    document.body.appendChild(dlg);
    dlg.querySelector('.hmd-x').addEventListener('click', function () { close(); });
    dlg.addEventListener('cancel', function (ev) { ev.preventDefault(); close(); });   // Esc
    dlg.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') ev.stopPropagation(); });   // 뒤의 다른 창(스킨 미리보기 등)은 그대로
    dlg.addEventListener('click', function (ev) {
      if (ev.target !== dlg) return;   // 창 안쪽(.hmd-in)이 아니라 바깥(어두운 곳)을 눌렀을 때
      var x = ev.clientX, y = ev.clientY;
      close();
      // 바깥에서 누른 곳이 다른 ? 면 그 창을 연다 (앞 창은 이미 닫힘 — 늘 하나만)
      var under = document.elementFromPoint(x, y);
      var q = under && under.closest && under.closest('.hq');
      if (q && q.getAttribute('data-hk') !== cur) open(q.getAttribute('data-hk'), q);
    });
    return dlg;
  }
  function isOpen() { return !!(dlg && dlg.open); }
  function show() {
    var d = box();
    if (d.open) return;
    if (typeof d.showModal === 'function') { try { d.showModal(); return; } catch (e) { /* 아래 */ } }
    d.setAttribute('open', ''); d.classList.add('hmd-fb');   // 아주 오래된 브라우저
    d.querySelector('.hmd-x').focus();
  }
  function close() {
    if (!dlg) return;
    var from = dlg._from;
    if (typeof dlg.close === 'function' && dlg.open) { try { dlg.close(); } catch (e) { dlg.removeAttribute('open'); } } else dlg.removeAttribute('open');
    dlg.classList.remove('hmd-fb');
    cur = '';
    if (from && from.isConnected && document.activeElement !== from) { try { from.focus({ preventScroll: true }); } catch (e) { /* 그대로 */ } }
  }
  function fill(title, html, ui) {
    var d = box();
    d.querySelector('#hmd-t').textContent = title;
    d.querySelector('.hmd-b').innerHTML = html;
    var x = d.querySelector('.hmd-x');
    x.setAttribute('aria-label', (ui && ui.close) || UI_EN.close);
    x.title = x.getAttribute('aria-label');
  }
  function body(e, ui) {
    var u = function (k) { return (ui && ui[k]) || UI_EN[k]; };
    return PARTS.filter(function (k) { return e[k]; }).map(function (k) {
      return '<section class="hmd-p hmd-' + k + '"><h3>' + esc(u(k)) + '</h3><p>' + rich(e[k]) + '</p></section>';
    }).join('');
  }
  function open(key, from) {
    if (!key) return;
    if (isOpen() && cur === key) return;
    if (isOpen()) close();   // 다른 창이 열려 있으면 먼저 닫는다
    cur = key;
    var d = box();
    d._from = from || null;
    var label = from && from.getAttribute('data-ht');
    fill(label || '…', '<p class="hmd-wait">…</p>', null);
    show();
    textFor(key).then(function (r) {
      if (cur !== key) return;
      if (!r) { fill(label || key, '<p class="hmd-err">' + esc(UI_EN.fail) + '</p>', null); return; }
      fill(r.e.t || label || key, body(r.e, r.ui), r.ui);
    });
  }

  // ── ? 표시 넣기 ──
  var AFTER = /^(INPUT|SELECT|TEXTAREA|BUTTON|A|IMG|PROGRESS|METER|VIDEO|AUDIO|IFRAME)$/;
  function nameOf(el) {
    var s = el.getAttribute('data-help-name') || el.getAttribute('aria-label') || el.textContent || el.getAttribute('placeholder') || el.title || '';
    s = s.replace(/\s+/g, ' ').replace(/\s*\?\s*$/, '').trim();
    return s.length > 60 ? s.slice(0, 59) + '…' : s;
  }
  function mark(el) {
    var key = el.getAttribute('data-help');
    if (!key) return;
    var after = AFTER.test(el.tagName) || el.hasAttribute('data-help-after');
    var have = after ? el.nextElementSibling : el.lastElementChild;
    if (have && have.classList.contains('hq') && have.getAttribute('data-hk') === key) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'hq';
    b.textContent = '?';
    b.setAttribute('data-hk', key);
    var n = nameOf(el), q = '';
    try { q = C.label() || ''; } catch (e) { q = ''; }
    if (n) b.setAttribute('data-ht', n);
    b.setAttribute('aria-label', q + (n ? ' — ' + n : ''));
    b.title = q;
    if (after) el.insertAdjacentElement('afterend', b); else el.appendChild(b);
    // 격자(grid) 안의 칸 바로 뒤에 넣으면 ? 가 칸 하나를 차지해 배치가 밀린다 → 그 칸 오른쪽 위에 겹쳐 띄운다
    if (after && el.parentElement) {
      var d = '';
      try { d = getComputedStyle(el.parentElement).display; } catch (e) { d = ''; }
      if (/grid/.test(d)) { b.classList.add('hq-abs'); b._for = el; abs.push(b); place(b); }
    }
  }
  var abs = [];
  function place(b) {
    var el = b._for;
    if (!el || !el.isConnected) return;
    b.style.left = (el.offsetLeft + el.offsetWidth - 12) + 'px';
    b.style.top = (el.offsetTop - 9) + 'px';
  }
  function placeAll() { abs = abs.filter(function (b) { return b.isConnected; }); abs.forEach(place); }
  function scan() {
    queued = false;
    var list = document.querySelectorAll('[data-help]');
    for (var i = 0; i < list.length; i++) mark(list[i]);
    if (abs.length) placeAll();
  }
  function soon() { if (!queued) { queued = true; (window.queueMicrotask || setTimeout)(scan); } }

  function style() {
    if (document.getElementById('hq-css')) return;
    var st = document.createElement('style');
    st.id = 'hq-css';
    st.textContent =
      'button.hq.hq{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;min-width:0;min-height:0;margin:0 0 0 6px;padding:0;border-radius:50%;' +
        'border:1.5px solid var(--accent,#6b4eff);background:var(--card,#fff);color:var(--accent,#6b4eff);font:700 11px/1 system-ui,sans-serif;letter-spacing:0;text-transform:none;cursor:help;vertical-align:middle;flex:none;' +
        'box-shadow:none;opacity:0;transition:opacity .15s ease .35s;position:relative}' +
      'button.hq.hq::after{content:"";position:absolute;inset:-6px}' +   /* 누르기 쉬운 넓이 (보이는 원은 18px) */
      '[data-help]:hover>.hq,[data-help]:focus-within>.hq,[data-help]:hover+.hq,[data-help]:focus+.hq,[data-help]:focus-within+.hq,button.hq.hq:hover,button.hq.hq:focus-visible{opacity:1;transition-delay:0s}' +
      'button.hq.hq:hover{background:var(--accent,#6b4eff);color:#fff}' +
      'button.hq.hq:focus-visible{outline:2px solid var(--accent,#6b4eff);outline-offset:2px}' +
      'button.hq.hq.hq-abs{position:absolute;margin:0;z-index:3}' +
      '@media (hover:none){button.hq.hq{opacity:.75;width:20px;height:20px;font-size:12px}}' +
      '@media print{button.hq{display:none!important}}' +
      'dialog.hmd{border:0;padding:0;margin:auto;width:min(560px,calc(100vw - 24px));max-height:min(86vh,720px);border-radius:16px;background:var(--card,#fff);color:var(--text,var(--ink,#1d1d1f));' +
        'box-shadow:0 20px 60px rgb(0 0 0 / .3);overflow:auto;overscroll-behavior:contain}' +
      'dialog.hmd::backdrop{background:rgb(0 0 0 / .45)}' +
      'dialog.hmd.hmd-fb{position:fixed;inset:0;z-index:1000;box-shadow:0 0 0 100vmax rgb(0 0 0 / .45)}' +
      '.hmd-in{position:relative;padding:22px 22px 18px;font:15px/1.6 -apple-system,BlinkMacSystemFont,"Pretendard Variable",Pretendard,"Apple SD Gothic Neo",system-ui,sans-serif}' +
      '.hmd #hmd-t{font-size:19px;line-height:1.35;margin:0 40px 12px 0;letter-spacing:-.01em}' +
      '.hmd-x{position:absolute;top:12px;right:12px;width:36px;height:36px;min-height:0;padding:0;border-radius:50%;border:0;background:var(--bar,var(--bg-3,#e8e8ed));color:inherit;font:400 22px/1 system-ui,sans-serif;cursor:pointer}' +
      '.hmd-x:hover{filter:brightness(.92)}.hmd-x:focus-visible{outline:2px solid var(--accent,#6b4eff);outline-offset:2px}' +
      '.hmd-p{margin:0 0 12px}.hmd-p h3{font-size:13px;margin:0 0 2px;color:var(--muted,var(--ink-2,#6e6e73));font-weight:600;letter-spacing:0}.hmd-p p{margin:0}' +
      '.hmd-care{padding:10px 12px;border-radius:10px;background:var(--warn-bg,var(--warn-soft,#fff6e5))}.hmd-care h3{color:var(--warn,#a34700)}' +
      '.hmd-like{padding:10px 12px;border-radius:10px;background:color-mix(in srgb,var(--accent,#6b4eff) 9%,transparent)}.hmd-like h3{color:var(--accent,#6b4eff)}.hmd-like h3::before{content:"\\1F4A1  "}' +
      '.hmd-ui{font-weight:700;padding:0 4px;border-radius:4px;background:var(--bar,var(--bg-3,#e8e8ed))}' +
      '.hmd-wait,.hmd-err{margin:0;color:var(--muted,var(--ink-2,#6e6e73))}.hmd-err{color:var(--err,var(--bad,#d70015))}';
    document.head.appendChild(st);
  }

  function start() {
    if (started) return;
    started = true;
    style();
    document.addEventListener('click', function (ev) {
      var b = ev.target && ev.target.closest && ev.target.closest('button.hq');
      if (!b) return;
      ev.preventDefault(); ev.stopPropagation();   // label·summary 안에 있어도 칸을 누르거나 접히지 않게
      open(b.getAttribute('data-hk'), b);
    }, true);
    if (window.MutationObserver) new MutationObserver(soon).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', function () { if (abs.length) placeAll(); });
    document.addEventListener('mouseover', function (ev) {   // 겹쳐 띄운 ? 는 보이기 직전에 자리를 다시 잡는다(위 칸이 늘었다 줄었을 수 있음)
      var el = ev.target && ev.target.closest && ev.target.closest('[data-help]');
      var b = el && el.nextElementSibling;
      if (b && b.classList.contains('hq-abs')) place(b);
    });
    document.addEventListener('focusin', function (ev) { var b = ev.target && ev.target.nextElementSibling; if (b && b.classList && b.classList.contains('hq-abs')) place(b); });
    scan();
  }

  window.AMLHelp = {
    add: function (code, o) { TX[code] = TX[code] || {}; for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) TX[code][k] = o[k]; },
    init: function (cfg) {
      for (var k in cfg || {}) if (Object.prototype.hasOwnProperty.call(cfg, k)) C[k] = cfg[k];
      if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
    },
    open: open, close: close, scan: scan,
    get: function (code, key) { return (TX[code] && TX[code][key]) || null; },   // 받아 둔 글 보기 (시험용)
    relabel: function () { var l = document.querySelectorAll('button.hq'); for (var i = 0; i < l.length; i++) l[i].remove(); scan(); },   // 언어를 바꾸면
  };
})();
