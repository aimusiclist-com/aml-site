/* public/_app/admin.js — 개인사이트 관리 화면 (/admin/, 첫 설치 때는 / 에서도 열린다)
 * -----------------------------------------------------------------------------
 * 1. 시작: GET /api/auth/status → 관리자 없음이면 "관리자 만들기", 로그인 전이면 로그인, 로그인했으면 관리 화면.
 *    로그인은 HttpOnly 쿠키(aml_s)라서 이 스크립트는 비밀번호·세션 값을 저장하지 않는다.
 * 2. 즉시 반영(3-5): 체크·수정·삭제는 누르는 즉시 저장 → 서버가 catalog 갱신 + ping. "변경 저장" 버튼 없음.
 *    여러 곡 업로드는 ?defer=1 로 올린 뒤 마지막에 POST /api/admin/commit 1번.
 * 3. 맨 위: Cloudflare 무료 사용량(GET /api/admin/usage, 서버 10분 캐시) + aimusiclist 연결 상태 한 줄.
 * 4. 장르: 우리사이트 genres.json → 실패하면 내장 샘플.  409(err.conflict): 다시 불러와서 한 번 더.
 * 5. 3-7: 곡 언어(업로드·수정·여러 곡 한꺼번에·미지정 안내) — 목록 /_app/song-langs.json
 *         SNS(사이트 정보 탭: 큰 5개 고정 칸 + 다른 SNS 최대 5칸) — 목록 /_app/socials.json, 아이콘 /_app/socials.svg
 *         사용량 토큰: 권한 2줄(Account Analytics Read + Account Settings Read), 계정 목록이 비면 계정 ID 직접 입력.
 * 6. 3-8: 확장 항목 "추가 정보" — 서버가 준 fields.json 정상본(state.fields.doc)으로 업로드·곡 수정·사이트 정보 칸을
 *         이 브라우저에서 그린다(Worker는 저장·검사만). text·number·bool·select·multiselect / 모르는 type은 작은 안내만 /
 *         deprecated 는 입력란 없음(값은 서버가 보관·전송). 받은 글자는 모두 esc() 로 글자로만 넣는다.
 *         여러 곡 한꺼번에(select·multiselect) · [Update fields] 버튼(사이트 정보 탭) · 맨 위 새 버전 안내 한 줄.
 * 7. 3-20: 곡마다 "만든 AI 툴" 1개 — 목록은 우리사이트 ai-tools.json(장르처럼 이 브라우저가 바로 받기) → 실패하면 내장 /_app/ai-tools.json.
 *         업로드(기본 Suno, 마지막 고른 것 기억 — 이번 묶음 모든 곡) · 곡 고치기(선택 안 함 포함) · 여러 곡 한꺼번에 · "비어 있는 곡 모두".
 *         hidden 툴은 새로 고를 수 없지만 이미 고른 곡에는 그대로 보인다(그 곡의 고르기 칸에만 나옴).
 * -----------------------------------------------------------------------------
 */
(function () {
  'use strict';
  var AML = window.AML, t = AML.t;

  var MAX_FILES = 20;
  // 권한 2줄(Account Analytics: Read + Account Settings: Read)이 미리 채워진 Cloudflare 토큰 만들기 주소
  // (Cloudflare "API token template URLs" 문서, 2026-10-28 확인. Account Settings: Read 가 없으면 GET /accounts 가 빈 목록 — 실서버 확인, 3-7)
  var TOKEN_URL = 'https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=' +
    encodeURIComponent(JSON.stringify([{ key: 'account_analytics', type: 'read' }, { key: 'account_settings', type: 'read' }])) +
    '&accountId=%2A&zoneId=all&name=aml-usage';
  var SPRITE = '/_app/socials.svg?v=1';   // SNS 아이콘 (src/ui.js SOCIAL_SPRITE 와 같게)
  var S = {
    status: null, state: null, ui: null, gIdx: null, mains: [], usage: null,
    editTrack: null, albumDraft: null, tab: 'tracks', q: '', skinView: 'inst',   // 3-10 스킨 탭 [설치된 스킨 | 둘러보기]
    up: { items: [], running: false }, setupAccount: '',
    songLangs: [], socials: [], socialMax: 5, socialMaxUrl: 200,   // 3-7 목록 (정적 JSON)
    sel: {}, onlyNoLang: false, sns: null,                          // 3-7 여러 곡 선택 · 곡 언어 없는 곡만 · SNS 입력 중인 칸
    bulkKey: '',                                                    // 3-8 여러 곡 한꺼번에 — 고른 확장 항목
  };
  var $ = function (id) { return document.getElementById(id); };
  var panel = $('panel');
  // P-1: PHP판(자기 호스팅)일 때만 다른 곳. 서버가 /api/admin/ui(로그인 전에는 /api/auth/status)에 server:"php" 를 보낸다. Workers판은 이 값이 없다.
  function isPhp() { return !!((S.ui && S.ui.server === 'php') || (S.status && S.status.server === 'php')); }
  function phpDisk() { return isPhp() && !(S.ui && S.ui.storage === 'r2'); }
  // PHP판 전용 문장이 있으면 그것을 (관리 전용 언어 파일 lang-admin 의 php.* 키)
  function tp(key, params) {
    if (isMm() && AML.strings.en['mm.' + key] != null) return t('mm.' + key, Object.assign({ portal: mmInfo().portal || '' }, params || {}));   // M-2
    return isPhp() && AML.strings.en['php.' + key] != null ? t('php.' + key, params) : t(key, params);
  }
  // M-2: meshmelo 호스팅({이름}.meshmelo.com)일 때만. 서버가 ui·auth/status 에 mm:{portal,name,status,…} 를 보낸다. 혼자 설치·Workers판은 이 값이 없다.
  function isMm() { return !!((S.ui && S.ui.mm) || (S.status && S.status.mm)); }
  function mmInfo() { return (S.ui && S.ui.mm) || (S.status && S.status.mm) || {}; }

  // ── 공통 도우미 ─────────────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtTime(sec) { sec = Math.max(0, sec | 0); return Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2); }
  function fmtBytes(b) {
    b = +b || 0;
    if (b >= 1e9) return (b / 1e9).toFixed(2) + ' GB';
    if (b >= 1e6) return (b / 1e6).toFixed(1) + ' MB';
    if (b >= 1e3) return Math.round(b / 1e3) + ' KB';
    return b + ' B';
  }
  function fmtNum(n) { try { return Number(n || 0).toLocaleString(AML.lang); } catch (e) { return String(n || 0); } }
  function fmtClock(iso) {
    var d = new Date(iso); if (isNaN(d)) return '';
    try { return d.toLocaleString(AML.lang, { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }); } catch (e) { return d.toISOString(); }
  }
  function toast(msg, isErr) {
    var el = $('toast');
    el.textContent = msg; el.className = isErr ? 'err' : ''; el.hidden = false;
    clearTimeout(toast.tm); toast.tm = setTimeout(function () { el.hidden = true; }, isErr ? 6000 : 2500);
  }
  function fail(e) { toast(AML.errText(e && e.code ? e : null), true); }
  function applyTexts(root) {
    var els = (root || document).querySelectorAll('[data-t]');
    for (var i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute('data-t'));
    document.title = t('admin.title');
    // 안내 목록 (토큰 만들기, 비밀번호 분실)
    $('token-guide').innerHTML = ['token.guide.1', 'token.guide.2', 'token.guide.3', 'token.guide.4', 'token.guide.5'].map(function (k, i) {
      return '<li>' + esc(t(k)) + (i === 0 ? ' <a class="btn small primary" target="_blank" rel="noopener noreferrer" href="' + esc(TOKEN_URL) + '">' + esc(t('token.guide.open')) + ' ↗</a>' : '') + '</li>';
    }).join('');
    var forgot = forgotHtml();
    var fg = document.querySelectorAll('.forgot-guide');
    for (var j = 0; j < fg.length; j++) fg[j].innerHTML = forgot;
  }
  function forgotHtml() {
    return ['help.forgot.1', 'help.forgot.2', 'help.forgot.3', 'help.forgot.4'].map(function (k) { return '<li>' + esc(tp(k)) + '</li>'; }).join('');
  }
  function val(id) { var el = $(id); return el ? el.value.trim() : ''; }
  function show(which) { ['setup', 'login', 'app'].forEach(function (x) { $(x).hidden = x !== which; }); }

  // ── API 호출 (쿠키 자동 전송) ─────────────────────────────────────────────
  // body: 객체(JSON) / File·Blob·문자열(그대로) / 함수(재시도 때 다시 만들기 — etag를 새로 넣을 때)
  // type: Content-Type 글자, 또는 { type, headers } (3-9: 프로필 평균 색 X-Aml-Color 처럼 머리글을 더 보낼 때)
  function api(method, path, body, type, retried) {
    var b = typeof body === 'function' ? body() : body;
    var headers = {};
    var payload, opt = type && typeof type === 'object' ? type : null;
    if (opt) { Object.keys(opt.headers || {}).forEach(function (k) { if (opt.headers[k]) headers[k] = opt.headers[k]; }); type = opt.type; }
    if (b instanceof Blob || typeof b === 'string') { payload = b; headers['Content-Type'] = type || b.type || 'application/octet-stream'; }
    else if (b != null) { payload = JSON.stringify(b); headers['Content-Type'] = 'application/json'; }
    return fetch(path, { method: method, headers: headers, body: payload, cache: 'no-store', credentials: 'same-origin' })
      .catch(function () { throw { code: 'err.network' }; })
      .then(function (res) {
        return res.text().then(function (txt) {
          var data = null; try { data = txt ? JSON.parse(txt) : {}; } catch (e) { data = {}; }
          if (res.ok && data.ok !== false) return data;
          var err = (data && data.error) || { code: res.status === 404 ? 'err.not_found' : 'err.server', params: {} };
          // M-5: "현재 비밀번호가 틀림"은 로그아웃이 아니다 (전에는 계정 저장에서 비밀번호 칸이 비면 로그인 화면으로 튕겼다)
          if (res.status === 401 && /^\/api\/admin\//.test(path) && err.code !== 'err.auth.wrong_password') { toLogin(t('err.auth.required')); throw err; }
          if (res.status === 409 && err.code === 'err.conflict' && !retried) {   // 동시 수정 → 다시 불러와서 한 번 더
            toast(t('err.conflict'));
            return reload().then(function () { return api(method, path, body, opt || type, true); });
          }
          throw err;
        });
      });
  }

  // ── 상태 불러오기 ─────────────────────────────────────────────────────────
  function normalizeState(raw) {
    var tracks = (raw.tracks || []).map(function (x) {
      return {
        id: x.id, title: x.title || '', artist: x.artist || null, genres: x.genres || [], duration: x.duration | 0,
        has_audio: !!x.has_audio, aml: !!x.aml, img: x.img || 0, size: x.size || 0,
        img_v: x.img_v || '', lyrics_v: x.lyrics_v || '',   // 3-6: 직접 올린 곡 이미지·가사 (내용 해시)
        img_lg_v: x.img_lg_v || '',   // 3-16: 같은 자르기로 만든 큰 그림 (없으면 옛 곡 — 안내 한 줄)
        langs: Array.isArray(x.langs) && x.langs.length ? x.langs.slice(0, 2) : null,   // 3-7 곡 언어 (없으면 null)
        ai_tool: typeof x.ai_tool === 'string' && AI_RE.test(x.ai_tool) ? x.ai_tool : '',   // 3-20 만든 AI 툴 (없으면 '')
        ext: x.ext && typeof x.ext === 'object' && !Array.isArray(x.ext) ? x.ext : {},     // 3-8 확장 항목 값
        created_at: x.created_at || '',   // 3-15 분석 탭 (최근 업로드순·신곡 출발)
      };
    });
    var albums = (raw.albums || []).map(function (x) {
      return { id: x.id, title: x.title || '', artist: x.artist || null, track_ids: x.track_ids || [], has_cover: !!x.has_cover, cover_v: x.cover_v || '', aml: !!x.aml };
    });
    var site = raw.site || {};
    if (!Array.isArray(site.artists)) site.artists = [];
    site.ads = site.ads || {};
    if (!Array.isArray(site.socials)) site.socials = [];
    S.sns = null;   // 3-7: SNS 입력 칸은 서버 값으로 다시 만든다
    if (!site.ext || typeof site.ext !== 'object' || Array.isArray(site.ext)) site.ext = {};
    return { site: site, tracks: tracks, albums: albums, config: raw.config || {}, aml: raw.aml || {}, account: raw.account || null, domain: raw.domain || {},
      fields: normFields(raw.fields), app: raw.app || {}, news_last: raw.news_last || null };   // 3-8 · 3-15 가장 새 aimusiclist 소식 (분석 탭 점)
  }
  function reload() {
    return Promise.all([api('GET', '/api/admin/state'), api('GET', '/api/admin/ui')]).then(function (r) {
      S.state = normalizeState(r[0]); S.ui = r[1];
      galCalc();
      render();
      backfillProfileColor();
    });
  }

  // ── 장르 (우리사이트 형식) ───────────────────────────────────────────────────
  // genreIndex: src/ui.js 의 genreIndex()와 같은 규칙. 형식이 바뀌면 두 곳을 함께 고친다.
  function genreIndex(g) {
    if (!g || !Array.isArray(g.genres) || !g.genres.length) return null;
    var idx = {}, mains = [];
    g.genres.forEach(function (m) {
      if (!m || !/^[a-z0-9_-]+$/.test(m.key || '')) return;
      var subs = (Array.isArray(m.subs) ? m.subs : []).filter(function (s) { return s && /^[a-z0-9_-]+$/.test(s.key || ''); });
      idx[m.key] = { names: m.names || {}, main: m.key, is_main: true, subs: subs.map(function (s) { return s.key; }) };
      mains.push(m.key);
      subs.forEach(function (s) { if (!idx[s.key]) idx[s.key] = { names: s.names || {}, main: m.key, is_main: false }; });
    });
    return mains.length ? { idx: idx, mains: mains } : null;
  }
  function loadGenres() {
    var base = S.ui && S.ui.api_base;
    var fromSite = base && /^https?:\/\//.test(base)
      ? fetch(base + '/genres.json').then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; })
      : Promise.resolve(null);
    return fromSite.then(function (g) {
      var gi = genreIndex(g);
      if (gi) return gi;
      $('genre-note').hidden = false;
      return fetch('/_app/genres-sample.json').then(function (r) { return r.json(); }).then(genreIndex);
    }).then(function (gi) { S.gIdx = gi.idx; S.mains = gi.mains; });
  }
  // 3-7 곡 언어·SNS 목록 (정적 파일. 실패해도 화면은 열리고 그 기능만 빈 목록)
  function loadLists() {
    var j = function (u) { return fetch(u, { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
    return Promise.all([j('/_app/song-langs.json'), j('/_app/socials.json')]).then(function (r) {
      S.songLangs = (r[0] && r[0].langs) || [];
      S.socials = (r[1] && r[1].socials) || [];
      if (r[1]) { S.socialMax = r[1].max_more || 5; S.socialMaxUrl = r[1].max_url || 200; }
    });
  }
  // ── 3-20 만든 AI 툴 ─────────────────────────────────────────────────────
  // aiIndex: src/aitools.js 의 aiToolIndex() 와 같은 규칙(schema ai-tools-1, id ^[a-z0-9-]{1,24}$). 형식이 바뀌면 두 곳을 함께 고친다.
  var AI_RE = /^[a-z0-9-]{1,24}$/, AI_KEY = 'aml_ai_tool', AI_DEF = 'suno';
  function aiIndex(d) {
    if (!d || d.schema !== 'ai-tools-1' || !Array.isArray(d.tools)) return null;
    var idx = {}, ids = [];
    d.tools.slice(0, 500).forEach(function (x) {
      if (!x || typeof x.id !== 'string' || !AI_RE.test(x.id) || idx[x.id]) return;
      var n = typeof x.name === 'string' ? x.name.trim().slice(0, 40) : '';
      idx[x.id] = { name: n || x.id, hidden: x.hidden === true }; ids.push(x.id);
    });
    return ids.length ? { idx: idx, ids: ids } : null;
  }
  function loadAiTools() {
    var base = S.ui && S.ui.api_base;
    var get = function (u) { return fetch(u, { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
    return (base && /^https?:\/\//.test(base) ? get(base + '/ai-tools.json') : Promise.resolve(null)).then(function (d) {
      return aiIndex(d) || get('/_app/ai-tools.json').then(aiIndex);
    }).then(function (a) { a = a || { idx: {}, ids: [] }; S.aiIdx = a.idx; S.aiIds = a.ids; });
  }
  function aiName(id) { if (id === 'other') return t('ai_tool.other'); var x = S.aiIdx && S.aiIdx[id]; return x ? x.name : id; }
  // 고를 수 있는 툴 = 목록(hidden 빼고) + 이미 고른 값(hidden 이나 목록에 없는 것이어도 그 곡에만)
  function aiOptions(sel, none) {
    var ids = (S.aiIds || []).filter(function (id) { return !S.aiIdx[id].hidden || id === sel; });
    if (sel && ids.indexOf(sel) < 0) ids.push(sel);
    return (none ? '<option value="">' + esc(t('ai_tool.none')) + '</option>' : '') + ids.map(function (id) {
      return '<option value="' + esc(id) + '"' + (id === sel ? ' selected' : '') + '>' + esc(aiName(id)) + '</option>';
    }).join('');
  }
  function aiPick() {   // 업로드 처음 값: 이 브라우저가 마지막에 고른 것(목록에 있고 숨김이 아니면) → Suno
    var v = ''; try { v = localStorage.getItem(AI_KEY) || ''; } catch (e) { /* 저장 불가 */ }
    var ok = function (id) { return id && S.aiIdx && S.aiIdx[id] && !S.aiIdx[id].hidden; };
    return ok(v) ? v : ok(AI_DEF) ? AI_DEF : ((S.aiIds || []).filter(ok)[0] || '');
  }
  function aiField(id, sel, none, helps) {
    return '<div class="grid3"><div><label for="' + id + '">' + esc(t('ai_tool.label')) + '</label><select id="' + id + '">' + aiOptions(sel, none) + '</select></div><div></div><div></div></div>' +
      helps.map(function (k) { return '<p class="muted xhelp">' + esc(t(k)) + '</p>'; }).join('');
  }
  function aiTag(x) { return x.ai_tool ? ' <span class="tag" title="' + esc(t('ai_tool.label')) + '">✦ ' + esc(aiName(x.ai_tool)) + '</span>' : ''; }
  // 곡 목록 위: "AI 툴이 비어 있는 곡 n곡 → [툴] 로 정하기" (확인 창, 1번 요청)
  function aiFillBox() {
    var n = S.state.tracks.filter(function (x) { return !x.ai_tool; }).length;
    if (!n) return '';
    return '<div class="bulk-ext" id="ai-fill-box" style="margin:0 0 10px;border-top:0;padding-top:0"><span class="muted">' + esc(AML.tn('ai_tool.empty', n)) + '</span>' +
      '<p class="row" style="margin:6px 0 0"><select id="ai-fill" style="width:auto;max-width:100%" aria-label="' + esc(t('ai_tool.label')) + '">' + aiOptions(aiPick(), false) + '</select>' +
      '<button type="button" class="small primary" data-act="ai-fill">' + esc(t('ai_tool.fill')) + '</button><span id="ai-fill-msg" class="msg"></span></p></div>';
  }
  function aiFill(btn) {
    var ai = val('ai-fill'), msg = $('ai-fill-msg');
    var ids = S.state.tracks.filter(function (x) { return !x.ai_tool; }).map(function (x) { return x.id; });
    if (!ai || !ids.length) return;
    if (!confirm(t('ai_tool.fill_confirm', { n: ids.length, name: aiName(ai) }))) return;
    aiApply(btn, ids, ai, msg);
  }
  function aiApply(btn, ids, ai, msg) {
    btn.disabled = true; if (msg) { msg.className = 'msg'; msg.textContent = ''; }
    api('POST', '/api/admin/aitool', { track_ids: ids, ai_tool: ai || null }).then(function (r) {
      S.sel = {};
      toast(ai ? t('ai_tool.done', { n: r.count, name: aiName(ai) }) : t('ai_tool.cleared', { n: r.count }));
      return reload();
    }).catch(function (e) { if (msg && msg.isConnected) { msg.className = 'msg err'; msg.textContent = AML.errText(e); } else fail(e); })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }
  function bulkAiBox() {
    return '<div class="bulk-ext"><span class="muted">' + esc(t('ai_tool.bulk')) + '</span>' +
      '<p class="row" style="margin:6px 0 0"><select id="bai" style="width:auto;max-width:100%" aria-label="' + esc(t('ai_tool.label')) + '">' + aiOptions(aiPick(), true) + '</select>' +
      '<button type="button" class="primary small" data-act="bulk-ai-apply">' + esc(t('bulk.apply')) + '</button><span id="bulk-ai-msg" class="msg"></span></p></div>';
  }
  function bulkAiApply(btn) {
    var ids = selIds(), msg = $('bulk-ai-msg');
    if (!ids.length) { msg.className = 'msg err'; msg.textContent = t('bulk.none'); return; }
    aiApply(btn, ids, val('bai'), msg);
  }

  function gName(k) { var g = S.gIdx && S.gIdx[k]; var n = (g && g.names) || {}; return n[AML.lang] || n.en || k; }
  AML.genreName = gName;
  function genreTags(keys) {
    return keys.map(function (k, i) { return '<span class="tag' + (i === 0 ? ' main' : '') + '">' + esc(gName(k)) + '</span>'; }).join('');
  }
  function mainOptions(sel) {
    return '<option value="">' + esc(t('track.field.choose')) + '</option>' + S.mains.map(function (k) {
      return '<option value="' + k + '"' + (k === sel ? ' selected' : '') + '>' + esc(gName(k)) + '</option>';
    }).join('');
  }
  function subOptions(sel) {
    return '<option value="">' + esc(t('track.field.none')) + '</option>' + S.mains.map(function (m) {
      var keys = [m].concat(S.gIdx[m].subs);
      return '<optgroup label="' + esc(gName(m)) + '">' + keys.map(function (k) {
        return '<option value="' + k + '"' + (k === sel ? ' selected' : '') + '>' + esc(gName(k)) + '</option>';
      }).join('') + '</optgroup>';
    }).join('');
  }
  // prefix: 'g' (곡 수정) / 'ug' (업로드)
  function genreFields(g, prefix) {
    g = g || []; prefix = prefix || 'g';
    return '<div class="grid3">' +
      '<div><label for="' + prefix + '0">' + esc(t('track.field.genre_main')) + '</label><select id="' + prefix + '0" required>' + mainOptions(g[0]) + '</select></div>' +
      '<div><label for="' + prefix + '1">' + esc(t('track.field.genre_sub1')) + '</label><select id="' + prefix + '1">' + subOptions(g[1]) + '</select></div>' +
      '<div><label for="' + prefix + '2">' + esc(t('track.field.genre_sub2')) + '</label><select id="' + prefix + '2">' + subOptions(g[2]) + '</select></div></div>';
  }
  function readGenres(prefix) {
    prefix = prefix || 'g';
    var out = [];
    [0, 1, 2].forEach(function (i) { var v = val(prefix + i); if (v && out.indexOf(v) < 0) out.push(v); });
    return out.length && S.gIdx[out[0]] && S.gIdx[out[0]].is_main ? out : null;
  }

  // ── 3-7 곡 언어 칸: 주 언어 1개 + (선택) 두 번째 언어. 연주곡(zxx)은 혼자만. 이름은 그 언어로 쓴 이름(zxx·mis만 언어팩) ──
  function langName(code) {
    var x = S.songLangs.filter(function (l) { return l.code === code; })[0];
    return x && x.name ? x.name : t('songlang.' + code);
  }
  function langsText(langs) { return (langs || []).map(langName).join(' · '); }
  function langOptions(sel, mode) {   // mode: 'main' | 'main-unset' | 'second'
    var head = mode === 'second' ? '<option value="">' + esc(t('track.field.none')) + '</option>'
      : mode === 'main-unset' ? '<option value="">' + esc(t('track.lang.unset')) + '</option>' : '';
    return head + S.songLangs.filter(function (l) { return mode !== 'second' || l.code !== 'zxx'; }).map(function (l) {
      return '<option value="' + esc(l.code) + '"' + (l.code === sel ? ' selected' : '') + ' lang="' + esc(l.code) + '">' + esc(langName(l.code)) + '</option>';
    }).join('');
  }
  // prefix: 'ul' (업로드) · 'tl' (곡 수정) · 'bl' (여러 곡 한꺼번에). langs 가 없으면 unsetOk 일 때 "지정 안 함"
  function langFields(langs, prefix, unsetOk, help) {
    langs = langs || [];
    var main = langs[0] || '', second = main === 'zxx' ? '' : (langs[1] || '');
    return '<div class="grid3"><div><label for="' + prefix + '0">' + esc(t('track.field.lang')) + '</label><select id="' + prefix + '0" data-lang-main="' + prefix + '">' +
      langOptions(main, unsetOk && !main ? 'main-unset' : 'main') + '</select></div>' +
      '<div><label for="' + prefix + '1">' + esc(t('track.field.lang2')) + '</label><select id="' + prefix + '1"' + (!main || main === 'zxx' ? ' disabled' : '') + '>' +
      langOptions(second, 'second') + '</select></div><div></div></div>' +
      (help ? '<p class="muted" style="margin:4px 0 0">' + esc(t('track.lang.help')) + '</p>' : '');
  }
  function readLangs(prefix) {
    var a = val(prefix + '0'), b = val(prefix + '1');
    if (!a) return null;
    if (a === 'zxx') return ['zxx'];
    return b && b !== a && b !== 'zxx' ? [a, b] : [a];
  }
  document.addEventListener('change', function (e) {
    var p = e.target.getAttribute && e.target.getAttribute('data-lang-main');
    if (!p) return;
    var two = $(p + '1'); if (!two) return;
    two.disabled = !e.target.value || e.target.value === 'zxx';
    if (two.disabled || two.value === e.target.value) two.value = '';
  });

  // ── 3-8 확장 항목 "추가 정보" (fields.json 정상본 → 입력 칸) ─────────────────────────
  // 서버(src/fields.js)가 이미 정리한 모양: { key, scope, type, status, known, label:{}, help:{}, options:[{key,label}], max_length, min, max, max_select, display }
  function normFields(f) {
    f = f || {};
    var doc = f.doc && Array.isArray(f.doc.fields) ? f.doc : null;
    return { doc: doc, version: f.version || null, ok_at: f.ok_at || null, tried_at: f.tried_at || null, error: f.error || null };
  }
  function fLabel(o, fallback) {
    o = o && typeof o === 'object' ? o : {};
    var s = o[AML.lang] || o[String(AML.lang).split('-')[0]] || o.en;
    return typeof s === 'string' && s ? s : (fallback || '');
  }
  function extFields(scope) {
    var doc = S.state && S.state.fields && S.state.fields.doc;
    if (!doc) return [];
    return doc.fields.filter(function (f) { return f.scope === scope && f.status !== 'deprecated'; })
      .sort(function (a, b) { return ((a.display && a.display.order) | 0) - ((b.display && b.display.order) | 0); });
  }
  function extField(key) {
    var doc = S.state && S.state.fields && S.state.fields.doc;
    return doc ? doc.fields.filter(function (f) { return f.key === key; })[0] || null : null;
  }
  function extName(key) { var f = extField(key); return f ? fLabel(f.label, key) : key; }
  // 오류 문장에 항목 이름 넣기 (err.ext.* 의 {name})
  var baseErrText = AML.errText;
  AML.errText = function (e) {
    if (e && e.code && /^err\.ext\./.test(e.code) && e.params && e.params.key) e = { code: e.code, params: Object.assign({ name: extName(e.params.key) }, e.params) };
    return baseErrText(e);
  };
  function xid(prefix, key) { return prefix + '-x-' + key; }
  function extInput(f, v, prefix) {
    var id = xid(prefix, f.key), name = esc(fLabel(f.label, f.key));
    var help = fLabel(f.help, '');
    var lab = '<label for="' + id + '">' + name + '</label>';
    var input;
    if (f.type === 'text') {
      input = '<input id="' + id + '" type="text" maxlength="' + (f.max_length || 200) + '" value="' + esc(typeof v === 'string' ? v : '') + '" data-ext="' + f.key + '">';
    } else if (f.type === 'number') {
      input = '<input id="' + id + '" type="number" step="' + (f.integer ? '1' : 'any') + '"' + (f.min != null ? ' min="' + f.min + '"' : '') + (f.max != null ? ' max="' + f.max + '"' : '') +
        ' value="' + (typeof v === 'number' ? v : '') + '" data-ext="' + f.key + '"' + (f.min != null || f.max != null ? ' placeholder="' + (f.min != null ? f.min : '') + ' – ' + (f.max != null ? f.max : '') + '"' : '') + '>';
    } else if (f.type === 'bool') {
      input = '<select id="' + id + '" data-ext="' + f.key + '"><option value="">' + esc(t('ext.none')) + '</option>' +
        '<option value="1"' + (v === true ? ' selected' : '') + '>' + esc(t('ext.yes')) + '</option>' +
        '<option value="0"' + (v === false ? ' selected' : '') + '>' + esc(t('ext.no')) + '</option></select>';
    } else if (f.type === 'select') {
      input = '<select id="' + id + '" data-ext="' + f.key + '"><option value="">' + esc(t('ext.none')) + '</option>' + f.options.map(function (o) {
        return '<option value="' + esc(o.key) + '"' + (o.key === v ? ' selected' : '') + '>' + esc(fLabel(o.label, o.key)) + '</option>';
      }).join('') + '</select>';
    } else {   // multiselect: 체크 칸, max_select 개가 차면 나머지는 잠근다
      var cur = Array.isArray(v) ? v : [], full = cur.length >= (f.max_select || 5);
      lab = '<span class="xlabel" id="' + id + '">' + name + ' <span class="muted">(' + esc(t('ext.max_select', { n: f.max_select || 5 })) + ')</span></span>';
      input = '<div class="xopts" id="' + id + '-o" role="group" aria-labelledby="' + id + '" data-ext="' + f.key + '" data-max="' + (f.max_select || 5) + '">' + f.options.map(function (o) {
        var on = cur.indexOf(o.key) >= 0;
        return '<label class="xopt"><input type="checkbox" value="' + esc(o.key) + '"' + (on ? ' checked' : '') + (!on && full ? ' disabled' : '') + '> ' + esc(fLabel(o.label, o.key)) + '</label>';
      }).join('') + '</div>';
    }
    return '<div class="xfield xf-' + f.type + '">' + lab + input + (help ? '<p class="muted xhelp">' + esc(help) + '</p>' : '') + '</div>';
  }
  // 추가 정보 묶음 (항목이 없거나 정상본을 받지 못했으면 빈 글자 = 칸 자체를 숨김)
  function extBox(scope, values, prefix) {
    var list = extFields(scope);
    if (!list.length) return '';
    values = values || {};
    var known = list.filter(function (f) { return f.known; }), unknown = list.filter(function (f) { return !f.known; });
    return '<fieldset class="extbox" id="' + prefix + '-ext"><legend>' + esc(t('ext.title')) + '</legend>' +
      '<p class="muted" style="margin:0 0 4px">' + esc(t('ext.help')) + '</p>' +
      (known.length ? '<div class="xgrid">' + known.map(function (f) { return extInput(f, values[f.key], prefix); }).join('') + '</div>' : '') +
      unknown.map(function (f) { return '<p class="muted xunsupported">ⓘ ' + esc(t('ext.unsupported', { name: fLabel(f.label, f.key) })) + '</p>'; }).join('') +
      '</fieldset>';
  }
  // 칸 읽기 → { ext: {key: 값|null}, err } (보낼 것: 그린 칸 전부. 빈 칸 = null = 지우기)
  function readExt(scope, prefix) {
    var out = {}, err = '';
    extFields(scope).forEach(function (f) {
      if (!f.known || err) return;
      var el = $(xid(prefix, f.key));
      if (!el) return;
      var v = null;
      if (f.type === 'text') { v = el.value.replace(/\s+/g, ' ').trim() || null; if (v && Array.from(v).length > (f.max_length || 200)) err = t('err.ext.too_long', { name: fLabel(f.label, f.key), max: f.max_length || 200 }); }
      else if (f.type === 'number') {
        if (el.value.trim() !== '') {
          v = Number(el.value);
          if (!isFinite(v) || (f.integer && v % 1) || (f.min != null && v < f.min) || (f.max != null && v > f.max)) err = t('err.ext.value', { name: fLabel(f.label, f.key) });
        }
      } else if (f.type === 'bool') v = el.value === '1' ? true : el.value === '0' ? false : null;
      else if (f.type === 'select') v = el.value || null;
      else {
        var box = $(xid(prefix, f.key) + '-o');
        v = box ? Array.prototype.filter.call(box.querySelectorAll('input[type=checkbox]'), function (c) { return c.checked; }).map(function (c) { return c.value; }) : [];
        if (!v.length) v = null;
      }
      out[f.key] = v;
    });
    return { ext: out, err: err };
  }
  function hasExt(ext) { return Object.keys(ext || {}).length > 0; }
  function setOnly(ext) { var o = {}; Object.keys(ext || {}).forEach(function (k) { if (ext[k] != null) o[k] = ext[k]; }); return o; }
  // 여러 개 고르기: 최대 개수가 차면 나머지 체크 칸을 잠근다
  document.addEventListener('change', function (e) {
    var box = e.target.closest && e.target.closest('.xopts');
    if (!box) return;
    var max = +box.getAttribute('data-max') || 5, cs = box.querySelectorAll('input[type=checkbox]');
    var n = Array.prototype.filter.call(cs, function (c) { return c.checked; }).length;
    Array.prototype.forEach.call(cs, function (c) { if (!c.checked) c.disabled = n >= max; });
  });

  // ── 아티스트 드롭다운: '' = 사이트 이름 사용 (사이트 이름을 바꾸면 함께 바뀜) + 가상 아티스트 ─────
  function artistName(x) { return x.artist || S.state.site.name || ''; }
  function artistSelect(id, cur) {
    var site = S.state.site, list = site.artists.slice();
    if (cur && list.indexOf(cur) < 0) list.push(cur); // 지운 가상 아티스트를 쓰는 곡도 그대로 보이게
    return '<select id="' + id + '"><option value="">' + esc(t('artist.site_name', { name: site.name || '' })) + '</option>' +
      list.map(function (n) { return '<option value="' + esc(n) + '"' + (n === cur ? ' selected' : '') + '>' + esc(n) + '</option>'; }).join('') + '</select>';
  }

  // ── 상태 계산 ───────────────────────────────────────────────────────────────
  function trackById(id) { return S.state.tracks.filter(function (x) { return x.id === id; })[0]; }
  function albumOk(a) {
    var n = a.track_ids.length;
    return n >= 10 && n <= 30 && a.track_ids.every(function (id) { var tr = trackById(id); return tr && tr.has_audio; });
  }
  function inAmlAlbum(id) { return S.state.albums.some(function (a) { return a.aml && a.track_ids.indexOf(id) >= 0; }); }

  // ── 3-6 이미지 도구: 고르기 → (자르기 틀 이동 | 전체 줄이기) → WebP로 만들어 올리기 ───────────────
  // 원본은 서버에 올리지 않는다. 브라우저가 정해진 크기로 줄이고, 서버 한도보다 작아질 때까지 화질을 낮춰 WebP로 만든다.
  //   track 100×100(50KB) · cover 200×200(100KB) · profile 200×200(100KB, 동그랗게 보임) · banner 최대 1600×400(300KB)
  //   3-16: track 은 같은 자르기에서 큰 그림(lg: 최대 400×400, 60KB, 원본이 200px 보다 작으면 만들지 않음)도 함께 만든다
  var IMG = {
    track: { w: 100, h: 100, kb: 50, lg: { max: 400, min: 200, kb: 60 } },
    cover: { w: 200, h: 200, kb: 100 },
    profile: { w: 200, h: 200, kb: 100, round: true },
    banner: { w: 1600, h: 400, kb: 300, free: true },   // free: "전체 줄이기"는 비율 그대로 1600×400 안에
  };
  var PICK_MAX = 2 * 1024 * 1024;   // 고를 수 있는 원본 크기 (2MB)
  var ed = null;                    // 지금 열린 이미지 편집 { kind, img, mode, fx, fy, fs, onDone, url }

  function pad5(n) { return ('0000' + (n | 0)).slice(-5); }
  // 곡 이미지 주소 (관리 화면 미리보기): 직접 올린 것 → 기본 이미지
  function trackImgUrl(x) {
    if (x.img_v) return '/i/' + encodeURIComponent(x.id) + '?v=' + x.img_v;
    var base = S.state.config.img_base || '';
    return x.img && /^https?:\/\//.test(base) ? base + pad5(x.img) + '.webp' : '';
  }
  // 파일 고르기 창을 열고, 고른 이미지를 편집 창으로
  function pickImage(kind, onDone) {
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/jpeg,image/png,image/webp,image/gif,image/avif,.jpg,.jpeg,.png,.webp,.gif';
    inp.addEventListener('change', function () {
      var f = inp.files && inp.files[0];
      if (!f) return;
      if (!/^image\//.test(f.type)) { toast(t('img.bad_type'), true); return; }
      if (f.size > PICK_MAX) { toast(t('img.too_big', { mb: 2 }), true); return; }
      var url = URL.createObjectURL(f), img = new Image();
      img.onload = function () { if (kind === 'profile') openCropper(img, url, onDone); else openImgEditor(kind, img, url, onDone); };
      img.onerror = function () { URL.revokeObjectURL(url); toast(t('img.bad_type'), true); };
      img.src = url;
    });
    inp.click();
  }
  function openImgEditor(kind, img, url, onDone) {
    var c = IMG[kind];
    ed = { kind: kind, img: img, url: url, onDone: onDone, mode: 'crop', fs: 1, fx: 0.5, fy: 0.5 };
    var box = $('img-editor');
    box.innerHTML = '<div class="imged-box" role="dialog" aria-modal="true" aria-labelledby="imged-title">' +
      '<h2 id="imged-title">' + esc(t('img.title.' + kind)) + '</h2>' +
      '<p class="muted">' + esc(t('img.size_note', { w: c.w, h: c.h, kb: c.kb })) + '</p>' +
      '<div class="row"><label class="check" style="margin:0"><input type="radio" name="imged-mode" value="crop" checked> ' + esc(t('img.mode.crop')) + '</label>' +
      '<label class="check" style="margin:0"><input type="radio" name="imged-mode" value="fit"> ' + esc(t(c.free ? 'img.mode.fit_free' : 'img.mode.fit')) + '</label></div>' +
      '<div class="imged-stage"><canvas id="imged-canvas"></canvas></div>' +
      '<div id="imged-zoom-row"><label for="imged-zoom">' + esc(t('img.frame_size')) + '</label><input id="imged-zoom" type="range" min="30" max="100" value="100"></div>' +
      '<p class="muted" id="imged-help">' + esc(t('img.drag_help')) + '</p>' +
      '<div class="row"><span class="muted">' + esc(t('img.result')) + '</span><canvas id="imged-out" class="imged-out' + (c.round ? ' round' : '') + '"></canvas></div>' +
      '<p class="row" style="margin-top:12px"><button type="button" class="primary" data-act="imged-save">' + esc(t('img.save')) + '</button>' +
      '<button type="button" data-act="imged-cancel">' + esc(t('track.cancel')) + '</button><span id="imged-msg" class="msg"></span></p></div>';
    box.hidden = false;
    var cv = $('imged-canvas');
    // 미리보기 크기: 원본 비율 그대로, 화면 폭에 맞게
    var maxW = Math.min(480, box.querySelector('.imged-stage').clientWidth || 480), maxH = 320;
    var s = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
    cv.width = Math.max(1, Math.round(img.naturalWidth * s)); cv.height = Math.max(1, Math.round(img.naturalHeight * s));
    ed.scale = s;
    bindFrameDrag(cv);
    drawEditor();
    box.querySelector('[data-act="imged-save"]').focus();
  }
  function closeImgEditor() {
    if (ed && ed.url) URL.revokeObjectURL(ed.url);
    if (cr && cr.url) URL.revokeObjectURL(cr.url);
    ed = null; cr = null; $('img-editor').hidden = true; $('img-editor').innerHTML = '';
    if (lastOpener && lastOpener.isConnected) lastOpener.focus();
    lastOpener = null;
  }
  // 자르기 틀 (원본 좌표): 정해진 비율에서 가장 큰 틀 × 크기 비율, 가운데 위치는 fx·fy(0~1)
  function frameRect() {
    var c = IMG[ed.kind], W = ed.img.naturalWidth, H = ed.img.naturalHeight, ar = c.w / c.h;
    var fw = Math.min(W, H * ar), fh = fw / ar;
    fw *= ed.fs; fh *= ed.fs;
    var x = (W - fw) * ed.fx, y = (H - fh) * ed.fy;
    return { x: x, y: y, w: fw, h: fh };
  }
  function drawEditor() {
    var cv = $('imged-canvas'); if (!cv || !ed) return;
    var g = cv.getContext('2d'), s = ed.scale;
    g.clearRect(0, 0, cv.width, cv.height);
    g.drawImage(ed.img, 0, 0, cv.width, cv.height);
    $('imged-zoom-row').hidden = ed.mode !== 'crop';
    $('imged-help').hidden = ed.mode !== 'crop';
    if (ed.mode === 'crop') {
      var r = frameRect();
      g.fillStyle = 'rgba(0,0,0,.5)';
      g.beginPath(); g.rect(0, 0, cv.width, cv.height); g.rect(r.x * s, r.y * s, r.w * s, r.h * s); g.fill('evenodd');
      g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(r.x * s + 1, r.y * s + 1, r.w * s - 2, r.h * s - 2);
      if (IMG[ed.kind].round) { g.beginPath(); g.arc((r.x + r.w / 2) * s, (r.y + r.h / 2) * s, r.w * s / 2, 0, Math.PI * 2); g.setLineDash([4, 4]); g.stroke(); g.setLineDash([]); }
    }
    var out = renderOutput();
    var oc = $('imged-out');
    var k = Math.min(1, 200 / out.width);     // 결과 미리보기는 너무 크지 않게
    oc.width = Math.round(out.width * k); oc.height = Math.round(out.height * k);
    oc.getContext('2d').drawImage(out, 0, 0, oc.width, oc.height);
  }
  // 최종 이미지 (정해진 크기의 캔버스). px = 3-16 큰 그림용 정사각 크기 (없으면 정해진 크기)
  function renderOutput(px) {
    var c = IMG[ed.kind], img = ed.img, W = img.naturalWidth, H = img.naturalHeight;
    if (px) c = { w: px, h: px };
    var cv = document.createElement('canvas'), g;
    if (ed.mode === 'crop') {
      var r = frameRect();
      cv.width = Math.min(c.w, Math.round(r.w)) || 1; cv.height = Math.round(cv.width * c.h / c.w) || 1;
      if (!c.free) { cv.width = c.w; cv.height = c.h; }                 // 곡·앨범·프로필은 항상 정해진 크기
      g = cv.getContext('2d'); g.imageSmoothingQuality = 'high';
      g.drawImage(img, r.x, r.y, r.w, r.h, 0, 0, cv.width, cv.height);
    } else if (c.free) {
      var k = Math.min(1, c.w / W, c.h / H);                            // 배너: 비율 그대로 1600×400 안에
      cv.width = Math.max(1, Math.round(W * k)); cv.height = Math.max(1, Math.round(H * k));
      g = cv.getContext('2d'); g.imageSmoothingQuality = 'high';
      g.drawImage(img, 0, 0, cv.width, cv.height);
    } else {
      cv.width = c.w; cv.height = c.h;                                  // 정사각형 안에 전체를 줄여 넣고 남는 곳은 평균 색
      g = cv.getContext('2d'); g.imageSmoothingQuality = 'high';
      g.drawImage(img, 0, 0, 1, 1);
      var p = g.getImageData(0, 0, 1, 1).data;
      g.fillStyle = 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')'; g.fillRect(0, 0, c.w, c.h);
      var s2 = Math.min(c.w / W, c.h / H), dw = W * s2, dh = H * s2;
      g.drawImage(img, (c.w - dw) / 2, (c.h - dh) / 2, dw, dh);
    }
    return cv;
  }
  // WebP로 만들기: 서버 한도보다 작아질 때까지 화질을 낮춘다. 브라우저가 WebP를 못 만들면 오류.
  function toWebp(cv, maxKb) {
    var qs = [0.88, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3];
    function tryQ(i) {
      return new Promise(function (ok) { cv.toBlob(ok, 'image/webp', qs[i]); }).then(function (b) {
        if (!b || b.type !== 'image/webp') throw { text: t('img.no_webp') };
        if (b.size <= maxKb * 1024) return b;
        if (i + 1 < qs.length) return tryQ(i + 1);
        throw { text: t('img.still_big', { kb: maxKb }) };
      });
    }
    return tryQ(0);
  }
  function bindFrameDrag(cv) {
    var drag = null;
    cv.addEventListener('pointerdown', function (e) {
      if (!ed || ed.mode !== 'crop') return;
      var r = frameRect(), s = ed.scale, b = cv.getBoundingClientRect();
      var px = (e.clientX - b.left) / s * (cv.width / b.width), py = (e.clientY - b.top) / s * (cv.height / b.height);
      // 틀 밖을 누르면 그 자리로 틀을 옮긴다
      if (px < r.x || px > r.x + r.w || py < r.y || py > r.y + r.h) moveFrameTo(px - r.w / 2, py - r.h / 2);
      drag = { x: e.clientX, y: e.clientY, r: frameRect() };
      cv.setPointerCapture(e.pointerId); e.preventDefault();
    });
    cv.addEventListener('pointermove', function (e) {
      if (!drag || !ed) return;
      var b = cv.getBoundingClientRect(), k = (cv.width / b.width) / ed.scale;
      moveFrameTo(drag.r.x + (e.clientX - drag.x) * k, drag.r.y + (e.clientY - drag.y) * k);
    });
    var end = function () { drag = null; };
    cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
    // 키보드: 화살표로 틀 옮기기
    cv.tabIndex = 0;
    cv.addEventListener('keydown', function (e) {
      var d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
      if (!d || !ed || ed.mode !== 'crop') return;
      var r = frameRect(), step = Math.max(2, r.w / 20);
      moveFrameTo(r.x + d[0] * step, r.y + d[1] * step); e.preventDefault();
    });
  }
  function moveFrameTo(x, y) {
    var r = frameRect(), W = ed.img.naturalWidth, H = ed.img.naturalHeight;
    ed.fx = W - r.w > 0.5 ? Math.min(1, Math.max(0, x / (W - r.w))) : 0.5;
    ed.fy = H - r.h > 0.5 ? Math.min(1, Math.max(0, y / (H - r.h))) : 0.5;
    drawEditor();
  }
  // 3-16 큰 그림 크기: 자르기 틀(또는 전체 줄이기면 긴 변)이 원본에서 몇 px 인지 → 최대 400. 200px 보다 작으면 0(만들지 않음 — 억지로 늘리지 않는다)
  function lgSize() {
    var L = IMG[ed.kind].lg; if (!L) return 0;
    var src = ed.mode === 'crop' ? frameRect().w : Math.max(ed.img.naturalWidth, ed.img.naturalHeight);
    var px = Math.min(L.max, Math.floor(src));
    return px >= L.min ? px : 0;
  }
  function saveImgEditor(btn) {
    var c = IMG[ed.kind], cur = ed, msg = $('imged-msg'), big = lgSize();
    var bigCv = big ? renderOutput(big) : null;
    btn.disabled = true; msg.className = 'msg'; msg.textContent = t('admin.loading');
    toWebp(renderOutput(), c.kb).then(function (blob) {
      if (!bigCv) return cur.onDone(blob, null);
      // 큰 그림을 못 만들면(브라우저·크기) 작은 그림만 — 저장은 그대로 된다
      return toWebp(bigCv, c.lg.kb).then(function (lb) { return lb; }, function () { return null; }).then(function (lb) { return cur.onDone(blob, lb); });
    })
      .then(function () { if (ed === cur) closeImgEditor(); })
      .catch(function (e) { if ($('imged-msg')) { $('imged-msg').className = 'msg err'; $('imged-msg').textContent = e && e.text ? e.text : AML.errText(e); } })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }
  document.addEventListener('change', function (e) {
    if (e.target.name === 'imged-mode' && ed) { ed.mode = e.target.value; drawEditor(); }
  });
  document.addEventListener('input', function (e) {
    if (e.target.id === 'imged-zoom' && ed) { ed.fs = +e.target.value / 100; drawEditor(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && (ed || cr)) closeImgEditor(); });


  // ── 3-9 프로필 사진 자르기 (유튜브 방식) ───────────────────────────────────────
  // 가운데 고정된 동그라미 틀 + 바깥은 어둡게. 사진을 끌어서 옮기고, 막대·마우스 휠·두 손가락으로 확대(틀을 꽉 채우는 크기 ~ 4배),
  // 90° 돌리기. 아래에 실제 크기 미리보기(128px·40px). 저장은 동그라미를 감싸는 정사각 200×200 WebP (투명 원 아님 — CSS가 동그랗게 보여 준다).
  // 같은 계산(stage 좌표 → 원본)을 미리보기와 저장에 그대로 쓰므로, 저장된 그림 = 동그라미 안에 보이던 그림.
  var cr = null, lastOpener = null;
  var CR_MAX = 4;
  function openCropper(img, url, onDone) {
    lastOpener = document.activeElement;
    cr = { img: img, url: url, onDone: onDone, rot: 0, z: 1, ox: 0, oy: 0, ptr: {}, raf: 0 };
    var box = $('img-editor');
    box.innerHTML = '<div class="imged-box crop-box" role="dialog" aria-modal="true" aria-labelledby="imged-title">' +
      '<h2 id="imged-title">' + esc(t('crop.title')) + '</h2>' +
      '<p class="muted" style="margin:0 0 10px">' + esc(t('crop.help')) + '</p>' +
      '<div class="crop-stage" id="crop-stage" tabindex="0" role="img" aria-label="' + esc(t('crop.area')) + '"><canvas id="crop-canvas"></canvas></div>' +
      '<div class="crop-tools"><button type="button" class="icon-btn" data-act="crop-zoom" data-d="-1" aria-label="' + esc(t('crop.zoom_out')) + '">' + sIcon('minus') + '</button>' +
      '<input id="crop-zoom" type="range" min="0" max="1000" value="0" aria-label="' + esc(t('crop.zoom')) + '">' +
      '<button type="button" class="icon-btn" data-act="crop-zoom" data-d="1" aria-label="' + esc(t('crop.zoom_in')) + '">' + sIcon('plus') + '</button>' +
      '<button type="button" class="small" data-act="crop-rotate">' + sIcon('rotate') + ' ' + esc(t('crop.rotate')) + '</button></div>' +
      '<div class="crop-prev"><span class="muted">' + esc(t('crop.preview')) + '</span><canvas id="crop-p128" class="round" width="128" height="128"></canvas>' +
      '<canvas id="crop-p40" class="round" width="40" height="40"></canvas></div>' +
      '<p class="row" style="margin-top:14px"><button type="button" class="primary" data-act="crop-apply">' + esc(t('crop.apply')) + '</button>' +
      '<button type="button" data-act="imged-cancel">' + esc(t('track.cancel')) + '</button><span id="imged-msg" class="msg"></span></p></div>';
    box.hidden = false;
    var stage = $('crop-stage'), cv = $('crop-canvas');
    var S = Math.max(200, Math.min(320, stage.clientWidth || 320));
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    cr.S = S; cr.D = S - 40; cr.dpr = dpr;
    cv.width = Math.round(S * dpr); cv.height = Math.round(S * dpr);
    cv.style.width = S + 'px'; cv.style.height = S + 'px';
    bindCropper(stage);
    cropDraw();
    stage.focus();
  }
  function sIcon(n) { return '<svg class="sic" aria-hidden="true"><use href="/_app/icons.svg?v=1#' + n + '"></use></svg>'; }
  // 돌린 뒤의 가로·세로, 동그라미를 꽉 채우는 배율(최소) × z
  function crDims() {
    var w = cr.img.naturalWidth, h = cr.img.naturalHeight, odd = cr.rot % 2 === 1;
    var W = odd ? h : w, H = odd ? w : h, base = Math.max(cr.D / W, cr.D / H);
    return { w: w, h: h, W: W, H: H, k: base * cr.z };
  }
  function crClamp() {
    var d = crDims(), mx = Math.max(0, (d.W * d.k - cr.D) / 2), my = Math.max(0, (d.H * d.k - cr.D) / 2);
    cr.ox = Math.max(-mx, Math.min(mx, cr.ox)); cr.oy = Math.max(-my, Math.min(my, cr.oy));
  }
  // g 위에 사진을 그린다. c = 동그라미 중심 좌표, f = stage 1px 의 크기 배율
  function crPaint(g, cx, cy, f) {
    var d = crDims();
    g.save();
    g.translate(cx + cr.ox * f, cy + cr.oy * f);
    g.rotate(cr.rot * Math.PI / 2);
    g.imageSmoothingQuality = 'high';
    g.drawImage(cr.img, -d.w * d.k * f / 2, -d.h * d.k * f / 2, d.w * d.k * f, d.h * d.k * f);
    g.restore();
  }
  function cropOutput() {
    var o = document.createElement('canvas'); o.width = 200; o.height = 200;
    var g = o.getContext('2d');
    g.fillStyle = '#fff'; g.fillRect(0, 0, 200, 200);   // 투명 PNG 바탕 → 흰색 (WebP 손실 압축에서 검게 보이지 않게)
    crPaint(g, 100, 100, 200 / cr.D);
    return o;
  }
  function cropDraw() {
    if (!cr) return;
    cr.raf = 0;
    crClamp();
    var cv = $('crop-canvas'); if (!cv) return;
    var g = cv.getContext('2d'), S = cr.S;
    g.setTransform(cr.dpr, 0, 0, cr.dpr, 0, 0);
    g.clearRect(0, 0, S, S);
    crPaint(g, S / 2, S / 2, 1);
    g.fillStyle = 'rgba(0,0,0,.6)';
    g.beginPath(); g.rect(0, 0, S, S); g.arc(S / 2, S / 2, cr.D / 2, 0, Math.PI * 2); g.fill('evenodd');
    g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 1.5;
    g.beginPath(); g.arc(S / 2, S / 2, cr.D / 2, 0, Math.PI * 2); g.stroke();
    var out = cropOutput();
    ['crop-p128', 'crop-p40'].forEach(function (id) {
      var p = $(id); if (!p) return;
      var pg = p.getContext('2d'); pg.imageSmoothingQuality = 'high';
      pg.clearRect(0, 0, p.width, p.height); pg.drawImage(out, 0, 0, p.width, p.height);
    });
    var zr = $('crop-zoom'); if (zr && document.activeElement !== zr) zr.value = Math.round(Math.log(cr.z) / Math.log(CR_MAX) * 1000);
  }
  function crSoon() { if (cr && !cr.raf) cr.raf = requestAnimationFrame(cropDraw); }
  // 확대: 동그라미 가운데를 기준으로 (가운데에 보이던 곳이 그대로 가운데에 남게)
  function crZoom(z) {
    z = Math.max(1, Math.min(CR_MAX, z));
    var r = z / cr.z; cr.ox *= r; cr.oy *= r; cr.z = z; crSoon();
  }
  function bindCropper(stage) {
    stage.addEventListener('pointerdown', function (e) {
      cr.ptr[e.pointerId] = { x: e.clientX, y: e.clientY };
      stage.setPointerCapture(e.pointerId); e.preventDefault();
    });
    stage.addEventListener('pointermove', function (e) {
      var p = cr && cr.ptr[e.pointerId]; if (!p) return;
      var ids = Object.keys(cr.ptr);
      if (ids.length === 1) { cr.ox += e.clientX - p.x; cr.oy += e.clientY - p.y; }
      else if (ids.length >= 2) {                           // 두 손가락: 거리 비율만큼 확대 + 가운데 점 이동만큼 옮기기
        var o = cr.ptr[ids[0] === String(e.pointerId) ? ids[1] : ids[0]];
        var d0 = Math.hypot(p.x - o.x, p.y - o.y), d1 = Math.hypot(e.clientX - o.x, e.clientY - o.y);
        cr.ox += (e.clientX - p.x) / 2; cr.oy += (e.clientY - p.y) / 2;
        if (d0 > 4) crZoom(cr.z * d1 / d0);
      }
      p.x = e.clientX; p.y = e.clientY;
      crSoon();
    });
    var end = function (e) { if (cr) delete cr.ptr[e.pointerId]; };
    stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end);
    stage.addEventListener('wheel', function (e) { e.preventDefault(); crZoom(cr.z * Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
    stage.addEventListener('keydown', function (e) {
      var st = e.shiftKey ? 30 : 8, d = { ArrowLeft: [-st, 0], ArrowRight: [st, 0], ArrowUp: [0, -st], ArrowDown: [0, st] }[e.key];
      if (d) { cr.ox += d[0]; cr.oy += d[1]; crSoon(); e.preventDefault(); }
      else if (e.key === '+' || e.key === '=') { crZoom(cr.z * 1.1); e.preventDefault(); }
      else if (e.key === '-' || e.key === '_') { crZoom(cr.z / 1.1); e.preventDefault(); }
    });
  }
  document.addEventListener('input', function (e) {
    if (e.target.id === 'crop-zoom' && cr) crZoom(Math.pow(CR_MAX, +e.target.value / 1000));
  });
  // 평균 색 (머리 영역 바탕용): 200×200 결과의 모든 점 평균 → "#rrggbb"
  function avgColor(cv) {
    try {
      var d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data, r = 0, g = 0, b = 0, n = 0;
      for (var i = 0; i < d.length; i += 4) { if (d[i + 3] < 128) continue; r += d[i]; g += d[i + 1]; b += d[i + 2]; n++; }
      if (!n) return '';
      return '#' + [r, g, b].map(function (v) { return ('0' + Math.round(v / n).toString(16)).slice(-2); }).join('');
    } catch (e) { return ''; }
  }
  function cropApply(btn) {
    var cur = cr, out = cropOutput(), color = avgColor(out), msg = $('imged-msg');
    btn.disabled = true; msg.className = 'msg'; msg.textContent = t('admin.loading');
    toWebp(out, IMG.profile.kb).then(function (blob) { return cur.onDone(blob, color); })
      .then(function () { if (cr === cur) closeImgEditor(); })
      .catch(function (e) { var m = $('imged-msg'); if (m) { m.className = 'msg err'; m.textContent = e && e.text ? e.text : AML.errText(e); } })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }
  // 3-9 이전에 올린 프로필: 평균 색이 없으면 한 번 계산해 저장 (방문자 머리 영역 바탕)
  var colorTried = false;
  function backfillProfileColor() {
    var s = S.state && S.state.site;
    if (colorTried || !s || !s.profile_v || s.profile_color) return;
    colorTried = true;
    var im = new Image();
    im.onload = function () {
      var c = document.createElement('canvas'); c.width = 40; c.height = 40;
      c.getContext('2d').drawImage(im, 0, 0, 40, 40);
      var col = avgColor(c);
      if (col) api('PUT', '/api/admin/site', { profile_color: col }).then(function (r) { if (r && r.site) S.state.site.profile_color = r.site.profile_color; }).catch(function () { /* 다음에 다시 */ });
    };
    im.src = '/p?v=' + encodeURIComponent(s.profile_v);
  }
  // 관리 화면 맨 위: 곡이 있는데 프로필이 없으면 한 줄 안내 + 바로가기
  function renderProfileNote() {
    var el = $('profile-note'); if (!el || !S.state) return;
    var show = !S.state.site.profile_v && S.state.tracks.length > 0;
    el.hidden = !show;
    el.innerHTML = show ? '<span class="grow">' + esc(t('profile.note')) + '</span> <button type="button" class="small primary" data-act="profile-go">' + esc(t('profile.note.go')) + '</button>' : '';
  }

  // ── 탭 ──────────────────────────────────────────────────────────────────────
  var TABS = [
    { id: 'tracks', label: 'admin.tab.tracks', render: renderTracks },
    { id: 'albums', label: 'admin.tab.albums', render: renderAlbums },
    { id: 'skins', label: 'admin.tab.skins', render: renderSkins },
    { id: 'site', label: 'admin.tab.site', render: renderSite },
    { id: 'guestbook', label: 'admin.tab.guestbook', render: renderGuestbook, after: function () { loadGb(S.gbPage || 1); } },   // 3-6
    { id: 'domain', label: 'admin.tab.domain', render: renderDomain },                                                          // 3-6
    { id: 'stats', label: 'stats.tab', render: function () { return '<div id="stats-root"><section class="card"><p class="muted">' + esc(t('admin.loading')) + '</p></section></div>'; }, after: statsTab },   // 3-12
    { id: 'analysis', label: 'an.tab', render: function () { return '<div id="an-root"><section class="card"><p class="muted">' + esc(t('admin.loading')) + '</p></section></div>'; }, after: analysisTab },   // 3-15
  ];
  // 3-15 분석 탭: 화면 코드(/_app/admin-analysis.js)도 이 탭을 처음 열 때만 받는다. 새 aimusiclist 소식이 있으면 탭에 점(본 소식 = 이 브라우저에 기억)
  var anJs = null;
  function analysisTab() {
    anJs = anJs || new Promise(function (ok, no) {
      var sc = document.createElement('script'); sc.src = '/_app/admin-analysis.js?v=' + GV;
      sc.onload = ok; sc.onerror = function () { anJs = null; no(); }; document.head.appendChild(sc);
    });
    anJs.then(function () { if (S.tab === 'analysis' && AML.adminAnalysis) AML.adminAnalysis.open(); })
      .catch(function () { var r = $('an-root'); if (r) r.innerHTML = '<section class="card"><p class="msg err">' + esc(AML.errText({ code: 'err.network' })) + '</p></section>'; });
  }
  function newsDot() {
    var l = S.state && S.state.news_last; if (!l || !l.id) return false;
    try { return localStorage.getItem('aml_news_seen') !== l.id; } catch (e) { return false; }
  }
  // 3-12 통계 탭: 화면 코드(/_app/admin-stats.js)는 이 탭을 처음 열 때만 받는다 (관리 화면 첫 로드 크기 그대로)
  var statsJs = null;
  function statsTab() {
    statsJs = statsJs || new Promise(function (ok, no) {
      var sc = document.createElement('script'); sc.src = '/_app/admin-stats.js?v=' + GV;
      sc.onload = ok; sc.onerror = function () { statsJs = null; no(); }; document.head.appendChild(sc);
    });
    statsJs.then(function () { if (S.tab === 'stats' && AML.adminStats) AML.adminStats.open(); })
      .catch(function () { var r = $('stats-root'); if (r) r.innerHTML = '<section class="card"><p class="msg err">' + esc(AML.errText({ code: 'err.network' })) + '</p></section>'; });
  }
  AML.adminTabs = TABS; // C(메뉴)가 여기에 탭을 끼워 넣는다

  function render() {
    if (!S.state) return;
    $('site-name').textContent = S.state.site.name || t('admin.title');
    S.tab = (location.hash.slice(1) || S.tab);
    if (S.tab === 'token') { S.tab = 'site'; history.replaceState(null, '', '#site'); setTimeout(goToken, 0); }   // M-5 포털에서 #token
    var tab = TABS.filter(function (x) { return x.id === S.tab; })[0] || TABS[0];
    drawTabs(tab);
    stopPreview();
    panel.innerHTML = tab.render();
    if (tab.id === 'tracks') { renderQueue(); filterTracks(); updateBulk(); }
    if (tab.after) tab.after();
    renderLangNote();
    renderProfileNote();   // 3-9
    renderVerNote();
    renderAmlLine();
    renderUsage();
    renderMmUse();   // M-6 (meshmelo 만)
  }

  // 탭 줄. 3-10: 스킨 새 버전이 있으면 Skins 탭에 점 (사이트 업데이트 안내 — 위 ver-note — 와 따로)
  function drawTabs(tab) {
    tab = tab || TABS.filter(function (x) { return x.id === S.tab; })[0] || TABS[0];
    $('tabs').innerHTML = TABS.map(function (x) {
      var dot = x.id === 'skins' && galUpdCount() ? ' <span class="dot" title="' + esc(t('gal.dot')) + '" aria-label="' + esc(t('gal.dot')) + '"></span>'
        : x.id === 'analysis' && newsDot() ? ' <span class="dot" title="' + esc(t('an.dot')) + '" aria-label="' + esc(t('an.dot')) + '"></span>' : '';   // 3-15
      return '<a href="#' + x.id + '"' + (x === tab ? ' class="on"' : '') + '>' + esc(t(x.label)) + dot + '</a>';
    }).join('');
  }

  // ── 3-8 맨 위: 새 버전 안내 한 줄 (우리사이트 versions.json, 하루 1번 서버가 받아 둔 값. 강제 아님) ──
  function renderVerNote() {
    var el = $('ver-note'); if (!el || !S.state) return;
    var a = S.state.app || {};
    var show = a.newer || a.required;
    el.hidden = !show;
    el.classList.toggle('danger', !!a.required);   // min_supported 보다 낮으면 경고색 (강제 아님)
    if (!show) { el.innerHTML = ''; return; }
    var link = function (u, key) { return '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(t(key)) + ' ↗</a>'; };
    var how = a.url && /^https?:\/\//.test(a.url) ? link(a.url, 'ver.how') : '<span class="muted">' + esc(t('ver.how_doc')) + '</span>';
    var notes = a.notes_url && /^https?:\/\//.test(a.notes_url) ? ' ' + link(a.notes_url, 'ver.notes') : '';
    var text = a.required ? t('ver.required', { min: a.min_supported || '', latest: a.latest || '', version: a.version || '' })
      : t('ver.new', { latest: a.latest || '', version: a.version || '' });
    var upd = isPhp() && S.ui && S.ui.update && S.ui.update.ready
      ? ' <button type="button" class="small primary" data-act="php-update">' + esc(t('php.update.button', { latest: S.ui.update.latest || a.latest || '' })) + '</button>' : '';
    el.innerHTML = '<b>' + esc(text) + '</b> ' + (upd || how) + notes;
  }
  // P-1 PHP판 [지금 업데이트]: 서버가 릴리스 zip 을 받아 sha256 확인 → 코드 폴더만 교체 → DB 고치기, 실패하면 되돌린다
  function phpUpdate(btn) {
    if (!confirm(t('php.update.confirm'))) return;
    btn.disabled = true; btn.textContent = t('php.update.working');
    api('POST', '/api/admin/update').then(function (r) {
      toast(t('php.update.done', { version: r.to || '' }));
      setTimeout(function () { location.reload(); }, 1200);
    }).catch(function (e) {
      toast(AML.errText(e) + (e && e.params && e.params.rolled_back ? ' ' + t('php.update.rolled_back') : ''), true);
      btn.disabled = false; btn.textContent = t('php.update.button', { latest: '' });
    });
  }


  // ── 맨 위 1: Cloudflare 사용량 ───────────────────────────────────────────────
  var USAGE_ITEMS = [
    { key: 'r2_storage', label: 'usage.r2_storage', bytes: true },
    { key: 'r2_class_a', label: 'usage.r2_class_a' },
    { key: 'r2_class_b', label: 'usage.r2_class_b' },
    { key: 'workers_requests', label: 'usage.workers' },
  ];
  function loadUsage(force) {
    var box = $('usage');
    if (!S.usage) box.innerHTML = '<h2>' + esc(t('usage.title')) + '</h2><p class="muted">' + esc(t('admin.loading')) + '</p>';
    return api('GET', '/api/admin/usage' + (force ? '?refresh=1' : '')).then(function (u) { S.usage = u; renderUsage(); })
      .catch(function (e) { S.usage = { ok: false, error: e }; renderUsage(); });
  }
  // P-1 PHP판 내 호스팅: 이 사이트 파일 용량·파일 수(inodes)·곡 수 (한도는 config 에 적었을 때만 막대)
  var PHP_USAGE_ITEMS = [
    { key: 'disk', label: 'php.usage.disk', bytes: true },
    { key: 'files', label: 'php.usage.files' },
    { key: 'tracks', label: 'php.usage.tracks' },
  ];
  function bar(item, data) {
    var used = data ? data.used : 0, limit = data ? data.limit : 0;
    if (!limit) return '<div class="ubar"><div class="lbl"><span>' + esc(t(item.label)) + '</span><b>' + esc(item.bytes ? fmtBytes(used) : fmtNum(used)) + '</b></div></div>';
    var pct = limit ? used / limit * 100 : 0;
    var cls = pct >= 90 ? ' danger' : pct >= 70 ? ' warn' : '';
    var num = item.bytes ? fmtBytes(used) + ' / ' + fmtBytes(limit) : fmtNum(used) + ' / ' + fmtNum(limit);
    return '<div class="ubar' + cls + '"><div class="lbl"><span>' + esc(t(item.label)) + '</span><b>' + (pct < 0.1 && used ? '<0.1' : pct.toFixed(pct < 10 ? 1 : 0)) + '%</b></div>' +
      '<div class="track"><div class="fill" style="width:' + Math.min(100, pct).toFixed(1) + '%"></div></div>' +
      '<span class="num">' + esc(num) + '</span></div>';
  }
  function renderUsage() {
    var u = S.usage, box = $('usage');
    if (!u || !S.state) return;
    var items = u.ok ? u.items : (u.last && u.last.items);
    var disk = u.server === 'php' && u.storage === 'disk';
    var head = '<div class="row"><h2 class="grow" style="margin:0">' + esc(t(disk ? 'php.usage.title' : 'usage.title')) + '</h2>' +
      (u.at ? '<span class="muted">' + esc(t('usage.updated', { time: fmtClock(u.ok ? u.at : (u.last && u.last.at) || u.at) })) + '</span>' : '') +
      '<button type="button" class="small" data-act="usage-refresh">' + esc(t('usage.refresh')) + '</button></div>';
    // M-5: 키를 아직 안 넣었으면 오류가 아니라 차분한 안내 + [연결하기]. 넣었는데 못 읽을 때만 무엇을 확인할지
    var noTok = !u.ok && u.error && u.error.code === 'err.cf.no_token';
    var err = u.ok ? '' : noTok ? '<div class="notice info row" style="margin-top:12px"><span class="grow">' + esc(t('usage.off')) + '</span><button type="button" class="small primary" data-act="token-go">' + esc(t('usage.connect')) + '</button></div>'
      : '<div class="usage-fail"><p class="msg err">' + esc(t('usage.fail2', { reason: AML.errText(u.error) })) + '</p><p class="muted" style="margin:4px 0 0">' + esc(t('usage.check')) + '</p>' +
        '<p style="margin:8px 0 0"><button type="button" class="small" data-act="token-go">' + esc(t('usage.retoken')) + '</button></p></div>';
    var bars = items ? '<div class="bars" style="margin-top:12px">' + (disk ? PHP_USAGE_ITEMS : USAGE_ITEMS).filter(function (it) { return !isMm() || it.key !== 'workers_requests'; }).map(function (it) { return bar(it, items[it.key]); }).join('') + '</div>' : '';
    var cfw = disk && S.ui && S.ui.cf_front ? '<p class="notice" style="margin:10px 0 0">' + esc(t('php.cf_front')) + '</p>' : '';   // 3-14
    box.innerHTML = head + err + cfw + bars +
      '<p class="muted" style="margin:10px 0 0">' + (disk ? esc(t('php.usage.note')) : esc(t('usage.note_r2')) + ' ' + esc(tp('usage.note_workers'))) + '</p>' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('usage.uploaded', { size: fmtBytes(S.state.config.uploaded_bytes) })) + '</p>';
  }

  // ── M-6 meshmelo 오늘 사용량 (meshmelo 사이트만 — Workers판·혼자 설치는 아무것도 그리지 않는다) ─────────
  // 숫자·항목은 보여 주지 않고 %만. 80% 이상 = 맨 위 알림 + [더 넉넉하게 쓰기], 100% = 안내 화면이 보이는 중
  function loadMmUse() {
    if (!isMm()) return;
    api('GET', '/api/admin/mm/use').then(function (u) { S.mmUse = u; renderMmUse(); }).catch(function () { /* 조용히 (관리 화면은 그대로) */ });
  }
  function mmUseBoxes() {
    var note = $('mm-use-note'), card = $('mm-use');
    if (!note) { note = document.createElement('p'); note.id = 'mm-use-note'; note.hidden = true; $('usage').parentNode.insertBefore(note, $('usage')); }
    if (!card) { card = document.createElement('section'); card.id = 'mm-use'; card.className = 'card usage'; card.hidden = true; $('usage').insertAdjacentElement('afterend', card); }
    return { note: note, card: card };
  }
  function renderMmUse() {
    var u = S.mmUse;
    if (!u || !isMm() || !S.state) return;
    var b = mmUseBoxes();
    if (!u.on) { b.note.hidden = true; b.card.hidden = true; return; }
    var up = /^(https:|mailto:)/.test(u.upgrade || '') ? '<a class="btn small primary" href="' + esc(u.upgrade) + '" target="_blank" rel="noopener">' + esc(t('mmuse.upgrade')) + '</a>' : '';
    var at = fmtClock(u.reset_at);
    if (u.limited || u.pct >= 80) {
      b.note.className = 'notice row' + (u.limited ? ' danger' : '');
      b.note.style.cssText = 'margin:0 0 12px' + (u.limited ? ';background:color-mix(in srgb, var(--err) 10%, var(--card));box-shadow:inset 3px 0 0 var(--err)' : '');
      b.note.innerHTML = '<b class="grow">' + esc(u.limited ? t('mmuse.limited', { time: at }) : t('mmuse.warn', { pct: u.pct })) + '</b>' + up;
      b.note.hidden = false;
    } else b.note.hidden = true;
    var pct = Math.min(100, u.pct), cls = u.limited || u.pct >= 100 ? ' danger' : u.pct >= 80 ? ' warn' : '';
    var day = function (d) { try { return new Date(d + 'T12:00:00Z').toLocaleDateString(AML.lang, { weekday: 'short' }); } catch (e) { return d.slice(5); } };
    var bars = u.days.map(function (x, i) {
      var h = Math.max(x.pct > 0 ? 3 : 0, Math.round(Math.min(100, x.pct) * 0.56));
      var col = x.pct >= 100 ? 'var(--err)' : x.pct >= 80 ? 'var(--warn)' : 'var(--accent)';
      return '<div style="flex:1;min-width:0;text-align:center" title="' + esc(x.d + ' · ' + x.pct + '%') + '">' +
        '<div style="font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums">' + x.pct + '%</div>' +
        '<div style="height:56px;display:flex;align-items:flex-end"><div style="width:100%;height:' + h + 'px;background:' + col + ';border-radius:4px 4px 0 0;opacity:' + (i === 6 ? 1 : .55) + '"></div></div>' +
        '<div style="font-size:11px;color:var(--muted);border-top:1px solid var(--line);padding-top:2px">' + esc(i === 6 ? t('mmuse.today') : day(x.d)) + '</div></div>';
    }).join('');
    b.card.innerHTML = '<div class="row"><h2 class="grow" style="margin:0">' + esc(t('mmuse.title')) + '</h2>' +
      '<b style="font-size:26px;font-variant-numeric:tabular-nums">' + esc(String(u.pct)) + '%</b></div>' +
      '<div class="ubar' + cls + '" style="margin-top:6px"><div class="track"><div class="fill" style="width:' + pct.toFixed(1) + '%"></div></div></div>' +
      '<p class="muted" style="margin:8px 0 0">' + esc(t(u.reset === 'kst' ? 'mmuse.help.kst' : 'mmuse.help.utc')) + '</p>' +
      '<p class="muted" style="margin:14px 0 4px;font-size:13px">' + esc(t('mmuse.days')) + '</p>' +
      '<div style="display:flex;gap:6px;align-items:flex-end">' + bars + '</div>' +
      '<p class="muted" style="margin:12px 0 0">' + esc(t('mmuse.calm')) + '</p>' +
      (u.mail ? '<label class="row" style="margin:10px 0 0;gap:8px;font-weight:400"><input type="checkbox" id="mmuse-notify"' + (u.notify ? ' checked' : '') + '> ' + esc(t('mmuse.notify')) + '</label>' : '');   // [더 넉넉하게 쓰기]는 80% 이상일 때 맨 위 알림에만
    b.card.hidden = false;
  }
  function mmUseNotify(el) {
    el.disabled = true;
    api('POST', '/api/admin/mm/use', { notify: el.checked }).then(function (u) { S.mmUse = u; renderMmUse(); }).catch(function (e) { el.checked = !el.checked; el.disabled = false; toast(AML.errText(e), true); });
  }

  // ── 맨 위 2: aimusiclist 연결 상태 한 줄 ─────────────────────────────────────
  var amlPoll = null;
  function renderAmlLine() {
    var a = S.state.aml || {}, el = $('aml-line'), html;
    var retry = '<button type="button" class="small" data-act="aml-retry">' + esc(t('aml.retry')) + '</button>';
    if (a.state === 'ok') {
      html = '<span class="ok">✓ ' + esc(t('aml.ok', { site_id: a.site_id || '' })) + '</span>' + (a.source === 'env' ? '<span class="muted">' + esc(t('aml.env')) + '</span>' : '');
    } else if (a.state === 'pending') {
      html = '<span class="wait">… ' + esc(t('aml.pending')) + '</span>';
    } else if (a.state === 'fail' || a.state === 'stopped') {
      html = '<span class="bad">✗ ' + esc(t('aml.fail', { reason: AML.errText(a.error) })) + '</span>' +
        '<span class="muted">' + esc(a.state === 'fail' && a.next_try_at ? t('aml.next', { time: fmtClock(a.next_try_at) }) : t('aml.stopped')) + '</span>' + retry;
    } else {
      html = '<span class="muted">' + esc(t('aml.none')) + '</span>' + retry;
    }
    if (isMm() && mmInfo().status === 'suspended') html = '<span class="bad">' + esc(t('mm.suspended')) + '</span>';   // M-2
    el.innerHTML = html;
    clearTimeout(amlPoll);
    if (a.state === 'pending') amlPoll = setTimeout(refreshAml, 8000); // 연결 중이면 잠시 뒤 다시 확인
  }
  function refreshAml() {
    api('GET', '/api/admin/state').then(function (r) { S.state.aml = r.aml || {}; renderAmlLine(); }).catch(function () {});
  }
  function amlRetry(btn) {
    btn.disabled = true; btn.textContent = t('aml.pending');
    api('POST', '/api/admin/register').then(function (r) { S.state.aml = r.aml; renderAmlLine(); })
      .catch(fail).then(function () { btn.disabled = false; });
  }

  // ── B-1. 곡: 업로드(최대 20곡) + 수정 + 목록(검색) ────────────────────────────
  function renderTracks() {
    var ed = S.editTrack && trackById(S.editTrack);
    var top = ed ? renderEdit(ed) : renderUpload();
    var rows = S.state.tracks.map(function (x) {
      var forced = inAmlAlbum(x.id);
      return '<tr data-title="' + esc(x.title.toLowerCase()) + '" data-id="' + esc(x.id) + '"' + (x.langs ? '' : ' data-nolang="1"') + '>' +
        '<td><input type="checkbox" class="sel" data-act="sel-track" data-id="' + esc(x.id) + '"' + (S.sel[x.id] ? ' checked' : '') + ' aria-label="' + esc(t('track.col.select')) + '"></td>' +
        '<td>' + pubSw('aml-track', x.id, x.aml || forced, forced, forced ? t('track.in_album') : '') + '</td>' +
        '<td><span class="trow">' + (trackImgUrl(x) ? '<img class="tthumb" src="' + esc(trackImgUrl(x)) + '" alt="" loading="lazy" width="40" height="40">' : '<span class="tthumb"></span>') +
          '<span><b>' + esc(x.title) + '</b><br><span class="muted">' + esc(artistName(x)) +
          (x.langs ? ' · <span class="lang-tx">' + esc(langsText(x.langs)) + '</span>' : '') +
          '<span class="pl-sm" data-pl-sm="' + esc(x.id) + '">' + plSm(x) + '</span></span>' +
          (x.lyrics_v ? ' <span class="tag">SRT</span>' : '') + aiTag(x) +   // 3-20
          (x.has_audio ? '' : ' <span class="tag warn">' + esc(t('track.no_audio')) + '</span>') +
          (forced ? ' <span class="tag">' + esc(t('track.in_album')) + '</span>' : '') + '</span></span></td>' +
        '<td class="hide-sm">' + genreTags(x.genres) + '</td>' +
        '<td class="num hide-sm">' + fmtTime(x.duration) + '</td>' +
        '<td class="num pl-col hide-sm" data-pl="' + esc(x.id) + '"' + (plOn() ? '' : ' hidden') + '>' + plCell(x) + '</td>' +   // 3-14 내 사이트 재생 (휴대폰은 제목 아래 한 줄)
        '<td><span class="row">' +
          (x.has_audio ? '<button type="button" class="small" data-act="preview" data-id="' + esc(x.id) + '">' + esc(t('track.preview')) + '</button>' : '') +
          '<button type="button" class="small" data-act="track-edit" data-id="' + esc(x.id) + '">' + esc(t('track.edit')) + '</button>' +
          '<button type="button" class="small danger" data-act="track-del" data-id="' + esc(x.id) + '">' + esc(t('track.delete')) + '</button></span></td></tr>';
    }).join('');
    var table = '<section class="card"><h2>' + esc(t('track.list.title')) + ' (' + S.state.tracks.length + ')</h2>' +
      (rows ? '<input id="t-search" class="search" type="search" placeholder="' + esc(t('track.search')) + '" aria-label="' + esc(t('track.search')) + '" value="' + esc(S.q) + '">' +
        '<label class="check" style="margin:0 0 8px"><input type="checkbox" id="t-nolang"' + (S.onlyNoLang ? ' checked' : '') + '> ' + esc(t('track.filter.nolang')) + '</label>' +
        // 3-7 여러 곡 한꺼번에: 왼쪽 체크로 고른 곡의 곡 언어를 한 번에
        '<div id="bulk" class="bulk"><b id="bulk-n"></b><div class="bulk-body">' +
        '<div class="grow"><span class="muted">' + esc(t('bulk.lang')) + '</span>' + langFields([S.state.config.default_song_lang || 'en'], 'bl', false, false) + '</div>' +
        '<p class="row" style="margin:6px 0 0"><button type="button" class="primary small" data-act="bulk-apply">' + esc(t('bulk.apply')) + '</button><span id="bulk-msg" class="msg"></span></p>' +
        bulkAiBox() + bulkExtBox() + '<div id="bulk-plays">' + bulkPlaysBox() + '</div></div></div>' + aiFillBox() +   // 3-20
        '<p class="muted" style="margin:0 0 6px">' + esc(t('pub.help')) + '</p>' + pubTipHtml() +
        '<table id="t-table"><thead><tr><th><input type="checkbox" data-act="sel-all" aria-label="' + esc(t('bulk.select_all')) + '" title="' + esc(t('bulk.select_all')) + '"></th><th>' + esc(t('pub.col')) + '</th><th>' + esc(t('track.col.title')) + '</th><th class="hide-sm">' +
        esc(t('track.col.genres')) + '</th><th class="hide-sm">' + esc(t('track.col.length')) + '</th>' +
        '<th class="num pl-col hide-sm" title="' + esc(t('plays.col_help')) + '"' + (plOn() ? '' : ' hidden') + '>' + esc(t('plays.col')) + ' <span class="muted">ⓘ</span></th><th></th></tr></thead><tbody>' + rows + '</tbody></table>' +
        '<p id="t-nomatch" class="muted" hidden>' + esc(t('track.search_empty')) + '</p>'
        : '<p class="muted">' + esc(t('track.list.empty')) + '</p>') + '</section>';
    return top + table;
  }

  // 제목 검색: 입력 즉시 줄을 숨긴다 (다시 그리지 않음)
  function filterTracks() {
    var q = S.q.trim().toLowerCase(), tb = $('t-table');
    if (!tb) return;
    var rows = tb.tBodies[0].rows, shown = 0;
    for (var i = 0; i < rows.length; i++) {
      var on = (!q || rows[i].getAttribute('data-title').indexOf(q) >= 0) && (!S.onlyNoLang || rows[i].hasAttribute('data-nolang'));
      rows[i].hidden = !on; if (on) shown++;
    }
    $('t-nomatch').hidden = shown > 0;
  }

  // ── 3-14 곡별 내 사이트 재생 횟수 (GET /api/admin/plays) · 방문자에게 보이기 ─────────────
  // S.plays = { on, pub, at, plays: { id: [전체 누적, 지난 7일(어제까지), 오늘] } }. 곡 목록·곡 편집·사이트 설정·통계 탭이 같이 쓴다.
  function plOn() { return !!(S.plays && S.plays.on); }
  function plOf(id) { var a = S.plays && S.plays.plays && S.plays.plays[id]; return Array.isArray(a) ? a : [0, 0, 0]; }
  function plCell(x) {
    if (!plOn()) return '';
    var a = plOf(x.id);
    var hid = S.state.site.plays_pub === true && x.plays_hide === true;
    return '<span title="' + esc(t('plays.tip_admin', { w: fmtNum(a[1]), d: fmtNum(a[2]) })) + '">' + esc(fmtNum(a[0])) + '</span>' +
      (hid ? '<br><span class="muted" style="font-size:12px;white-space:nowrap">' + esc(t('plays.hidden_tag')) + '</span>' : '');
  }
  function plSm(x) { return plOn() ? ' · ' + esc(t('plays.col')) + ' ' + esc(fmtNum(plOf(x.id)[0])) : ''; }   // 휴대폰: 제목 아래 "재생 1,234"
  function bulkPlaysBox() {
    if (!plOn()) return '';
    return '<div class="bulk-ext"><span class="muted">' + esc(t('bulk.plays')) + '</span>' +
      '<p class="row" style="margin:6px 0 0"><button type="button" class="small" data-act="bulk-plays" data-v="1">' + esc(t('bulk.plays_show')) + '</button>' +
      '<button type="button" class="small" data-act="bulk-plays" data-v="0">' + esc(t('bulk.plays_hide')) + '</button><span id="bulk-plays-msg" class="msg"></span></p>' +
      (S.state.site.plays_pub === true ? '' : '<p class="muted xhelp">' + esc(t('plays.track.note_off')) + '</p>') + '</div>';
  }
  function loadPlays() {
    return api('GET', '/api/admin/plays').then(function (r) { S.plays = r; fillPlays(); return r; }).catch(function () { /* 숫자만 안 보일 뿐 */ });
  }
  // 이미 그린 화면에 숫자만 채운다 (쓰던 입력 칸은 그대로)
  function fillPlays() {
    var on = plOn();
    Array.prototype.forEach.call(document.querySelectorAll('.pl-col'), function (el) {
      el.hidden = !on;
      var id = el.getAttribute('data-pl'), x = id && trackById(id);
      if (x) el.innerHTML = plCell(x);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-pl-sm]'), function (el) { var x = trackById(el.getAttribute('data-pl-sm')); if (x) el.innerHTML = plSm(x); });
    var bp = $('bulk-plays'); if (bp) bp.innerHTML = bulkPlaysBox();
    var pc = $('plays-card'); if (pc) pc.innerHTML = playsCardInner();
    var lc = $('likes-card'); if (lc) lc.innerHTML = likesCardInner();   // 3-18
    var tb = $('t-plays-box'); if (tb && S.editTrack) { var ed = trackById(S.editTrack); if (ed && !$('t-plays')) tb.innerHTML = trackPlaysBox(ed); }
  }
  function bulkPlays(btn) {
    var ids = selIds(), msg = $('bulk-plays-msg'), show = btn.getAttribute('data-v') === '1';
    msg.className = 'msg'; msg.textContent = '';
    if (!ids.length) { msg.className = 'msg err'; msg.textContent = t('bulk.none'); return; }
    btn.disabled = true;
    api('POST', '/api/admin/plays', { track_ids: ids, show: show }).then(function (r) {
      S.sel = {};
      toast(t(show ? 'bulk.plays_done_show' : 'bulk.plays_done_hide', { n: r.count }));
      return reload();
    }).catch(function (e) { if ($('bulk-plays-msg')) { $('bulk-plays-msg').className = 'msg err'; $('bulk-plays-msg').textContent = AML.errText(e); } })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }
  function trackPlaysBox(ed) {
    if (!plOn()) return '';
    return '<label class="check"><input type="checkbox" id="t-plays"' + (ed.plays_hide === true ? '' : ' checked') + '> ' + esc(t('plays.track.show')) + '</label>' +
      (S.state.site.plays_pub === true ? '' : '<p class="muted" style="margin:-4px 0 8px">' + esc(t('plays.track.note_off')) + '</p>');
  }
  // 사이트 설정 "재생 횟수" 칸
  function playsCardInner() {
    var h = '<h2>' + esc(t('plays.card.title')) + '</h2>';
    if (!S.plays) return h + '<p class="muted">' + esc(t('admin.loading')) + '</p>';
    if (!S.plays.on) return h + '<p class="muted">' + esc(t('plays.card.off')) + '</p>';
    var on = S.state.site.plays_pub === true;
    return h + '<label class="check"><input type="checkbox" data-act="plays-pub"' + (on ? ' checked' : '') + '> <b>' + esc(t('plays.card.switch')) + '</b></label>' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('plays.card.help')) + '</p>' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('plays.card.when')) + '</p>' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('plays.card.admin_view')) + '</p>';
  }
  // 3-18 사이트 설정 "좋아요" 칸: 방문자 ♥ 버튼 보이기 (방명록 켜기/끄기와 같은 방식, 기본 켬). 숫자는 하루 한 번 바뀐다.
  function likesCardInner() {
    var on = S.state.site.likes_off !== true;
    return '<h2>' + esc(t('likes.card.title')) + '</h2>' +
      '<label class="check"><input type="checkbox" data-act="likes-toggle"' + (on ? ' checked' : '') + '> <b>' + esc(t('likes.card.switch')) + '</b></label>' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('likes.card.help')) + '</p>' +
      (S.plays && S.plays.likes === false ? '<p class="muted" style="margin:4px 0 0">' + esc(t('likes.card.need_stats')) + '</p>' : '');
  }
  function toggleLikes(el) {
    el.disabled = true;
    api('PUT', '/api/admin/site', { likes: el.checked }).then(function (r) {
      S.state.site.likes_off = r.site.likes_off === true;
      toast(t(S.state.site.likes_off ? 'likes.saved_off' : 'likes.saved_on'));
    }).catch(function (e) { el.checked = !el.checked; fail(e); }).then(function () { el.disabled = false; });
  }
  function togglePlaysPub(el) {
    el.disabled = true;
    api('PUT', '/api/admin/site', { plays_pub: el.checked }).then(function (r) {
      S.state.site.plays_pub = r.site.plays_pub === true;
      toast(t(S.state.site.plays_pub ? 'plays.saved_on' : 'plays.saved_off'));
    }).catch(function (e) { el.checked = !el.checked; fail(e); }).then(function () { el.disabled = false; });
  }
  // 관리자 본인 표시: 이 브라우저로 내 사이트(방문자 화면)를 보면 곡 줄에 숫자를 덧붙이게 (비밀 없음 — 실제 확인은 관리 API 의 세션 쿠키)
  function admFlag(on) { try { if (on) localStorage.setItem('aml_adm', '1'); else localStorage.removeItem('aml_adm'); } catch (e) { /* 저장 불가 = 숫자만 안 보임 */ } }

  // ── 3-7 여러 곡 한꺼번에 곡 언어 바꾸기 ─────────────────────────────────────
  function selIds() { return Object.keys(S.sel).filter(function (id) { return S.sel[id] && trackById(id); }); }
  function updateBulk() {
    var box = $('bulk'); if (!box) return;
    var n = selIds().length;
    $('bulk-n').textContent = n ? t('bulk.selected', { n: n }) : t('bulk.hint');
    box.classList.toggle('on', n > 0);
    var all = document.querySelector('[data-act="sel-all"]');
    if (all) {
      var vis = visibleIds();
      all.checked = vis.length > 0 && vis.every(function (id) { return S.sel[id]; });
    }
  }
  function visibleIds() {
    var tb = $('t-table'); if (!tb) return [];
    return Array.prototype.filter.call(tb.tBodies[0].rows, function (r) { return !r.hidden; }).map(function (r) { return r.getAttribute('data-id'); });
  }
  function bulkApply(btn) {
    var ids = selIds(), msg = $('bulk-msg'), langs = readLangs('bl');
    msg.className = 'msg'; msg.textContent = '';
    if (!ids.length) { msg.className = 'msg err'; msg.textContent = t('bulk.none'); return; }
    if (!langs) return;
    btn.disabled = true;
    api('POST', '/api/admin/langs', { track_ids: ids, langs: langs }).then(function (r) {
      S.sel = {};
      toast(t('bulk.done', { n: r.count }));
      return reload();
    }).catch(function (e) { if ($('bulk-msg')) { $('bulk-msg').className = 'msg err'; $('bulk-msg').textContent = AML.errText(e); } })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }
  // 3-8 여러 곡 한꺼번에 확장 항목(select·multiselect, 곡 단위, 사용 중인 것만)
  function bulkFields() { return extFields('track').filter(function (f) { return f.known && (f.type === 'select' || f.type === 'multiselect'); }); }
  function bulkExtBox() {
    var list = bulkFields();
    if (!list.length) return '';
    if (!list.some(function (f) { return f.key === S.bulkKey; })) S.bulkKey = list[0].key;
    return '<div class="bulk-ext"><span class="muted">' + esc(t('bulk.ext')) + '</span>' +
      '<div class="grid3"><div><label for="bx-key">' + esc(t('bulk.ext_field')) + '</label><select id="bx-key">' + list.map(function (f) {
        return '<option value="' + esc(f.key) + '"' + (f.key === S.bulkKey ? ' selected' : '') + '>' + esc(fLabel(f.label, f.key)) + '</option>';
      }).join('') + '</select></div><div style="grid-column:span 2" id="bx-val">' + bulkExtValue() + '</div></div>' +
      '<p class="row" style="margin:6px 0 0"><button type="button" class="primary small" data-act="bulk-ext-apply">' + esc(t('bulk.apply')) + '</button><span id="bulk-ext-msg" class="msg"></span></p></div>';
  }
  function bulkExtValue() {
    var f = extField(S.bulkKey);
    if (!f) return '';
    // 값 칸: 업로드 칸과 같은 모양(prefix 'bx'). 아무것도 고르지 않고 적용 = 그 항목 지우기
    return extInput(f, f.type === 'multiselect' ? [] : '', 'bx').replace('<option value="">' + esc(t('ext.none')) + '</option>', '<option value="">' + esc(t('bulk.ext_clear')) + '</option>') +
      (f.type === 'multiselect' ? '<p class="muted xhelp">' + esc(t('bulk.ext_multi_note')) + '</p>' : '');
  }
  function bulkExtApply(btn) {
    var ids = selIds(), msg = $('bulk-ext-msg'), f = extField(S.bulkKey);
    msg.className = 'msg'; msg.textContent = '';
    if (!ids.length) { msg.className = 'msg err'; msg.textContent = t('bulk.none'); return; }
    if (!f) return;
    var v = readOne(f, 'bx');
    btn.disabled = true;
    api('POST', '/api/admin/ext', { track_ids: ids, key: f.key, value: v }).then(function (r) {
      S.sel = {};
      toast(t('bulk.ext_done', { name: fLabel(f.label, f.key), n: r.count }));
      return reload();
    }).catch(function (e) { if ($('bulk-ext-msg')) { $('bulk-ext-msg').className = 'msg err'; $('bulk-ext-msg').textContent = AML.errText(e); } })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }
  function readOne(f, prefix) {
    if (f.type === 'select') { var el = $(xid(prefix, f.key)); return el && el.value ? el.value : null; }
    var box = $(xid(prefix, f.key) + '-o');
    var v = box ? Array.prototype.filter.call(box.querySelectorAll('input[type=checkbox]'), function (c) { return c.checked; }).map(function (c) { return c.value; }) : [];
    return v.length ? v : null;
  }

  // 관리 화면 맨 위: 곡 언어가 없는 곡(3-6 이전에 올린 곡) 안내 한 줄. 강제하지 않는다.
  function renderLangNote() {
    var el = $('lang-note'); if (!el || !S.state) return;
    var miss = S.state.tracks.filter(function (x) { return !x.langs; });
    el.hidden = !miss.length;
    if (!miss.length) { el.innerHTML = ''; return; }
    el.innerHTML = '<b>' + esc(AML.tn('lang.missing', miss.length)) + '</b> <span class="muted">' + esc(t('lang.missing.help')) + '</span> ' +
      '<button type="button" class="small primary" data-act="lang-fix">' + esc(t('lang.missing.fix')) + '</button>';
  }
  function langFix() {
    S.sel = {};
    S.state.tracks.forEach(function (x) { if (!x.langs) S.sel[x.id] = true; });
    S.onlyNoLang = true; S.editTrack = null;
    if (location.hash !== '#tracks') { S.tab = 'tracks'; location.hash = '#tracks'; } else render();
    setTimeout(function () { var b = $('bulk'); if (b) { b.scrollIntoView({ block: 'center' }); var s0 = $('bl0'); if (s0) s0.focus(); } }, 0);
  }

  function amlBox(id, checked) {
    return '<div class="amlbox"><label class="check" style="margin:0"><input type="checkbox" id="' + id + '"' + (checked ? ' checked' : '') + '> <b>' + esc(t('upload.aml.label')) + '</b></label>' +
      '<p>' + esc(t('upload.aml.text')) + '</p><p>' + esc(t('upload.aml.off')) + '</p></div>';
  }

  function renderUpload() {
    var running = S.up.running;
    return '<section class="card"><h2>' + esc(t('track.upload.title')) + '</h2>' +
      '<div class="drop" id="drop"><p style="margin:0 0 8px">' + esc(t('upload.drop', { max: MAX_FILES })) + '</p>' +
      '<label class="btn" for="up-files" style="margin:0;display:inline-block;color:var(--text)">' + esc(t('upload.choose')) + '</label>' +
      '<input id="up-files" type="file" accept="' + ACC + '" multiple>' +
      '<p class="muted" style="margin:8px 0 0">' + esc(t('track.upload.files')) + '</p><p class="muted" style="margin:2px 0 0">' + esc(t('wav.note')) + '</p>' +
      '<p class="muted" style="margin:2px 0 0">' + esc(t('upload.title_note')) + '</p></div>' +
      '<div id="queue" class="queue"></div>' +
      '<h3>' + esc(t('upload.common')) + '</h3>' +
      genreFields(S.up.genres, 'ug') +
      langFields(S.up.langs || [S.state.config.default_song_lang || 'en'], 'ul', false, true) +
      aiField('up-ai', S.up.ai || aiPick(), false, ['ai_tool.upload_help', 'ai_tool.missing']) +   // 3-20 이번에 올리는 모든 곡
      '<div class="grid3"><div><label for="up-artist">' + esc(t('track.field.artist')) + '</label>' + artistSelect('up-artist', S.up.artist || '') + '</div><div></div><div></div></div>' +
      extBox('track', S.up.ext, 'up') +   // 3-8 추가 정보 (올리는 곡 모두에 같은 값)
      amlBox('up-aml', S.up.aml !== false) +
      '<p class="row" style="margin-top:14px"><button type="button" class="primary" id="up-start" data-act="up-start"' + (running ? ' disabled' : '') + '></button>' +
      '<button type="button" id="up-retry" data-act="up-retry" hidden>' + esc(t('upload.retry')) + '</button>' +
      '<button type="button" id="up-clear" data-act="up-clear"' + (running ? ' disabled' : '') + '>' + esc(t('upload.clear')) + '</button>' +
      '<span id="up-msg" class="msg"></span></p></section>';
  }

  function renderEdit(ed) {
    return '<section class="card"><h2>' + esc(t('track.edit')) + '</h2><form id="track-form">' +
      '<div class="grid3"><div><label for="t-title">' + esc(t('track.field.title')) + '</label>' +
        '<input id="t-title" type="text" maxlength="100" required value="' + esc(ed.title) + '"></div>' +
      '<div><label for="t-artist">' + esc(t('track.field.artist')) + '</label>' + artistSelect('t-artist', ed.artist || '') + '</div><div></div></div>' +
      genreFields(ed.genres, 'g') +
      langFields(ed.langs, 'tl', true, true) +
      aiField('t-ai', ed.ai_tool, true, ['ai_tool.missing']) +   // 3-20
      extBox('track', ed.ext, 'te') +   // 3-8 추가 정보
      amlBox('t-aml', ed.aml || inAmlAlbum(ed.id)) +
      '<div id="t-plays-box">' + trackPlaysBox(ed) + '</div>' +   // 3-14
      '<label for="t-replace">' + esc(t('track.field.replace_audio')) + '</label><input id="t-replace" type="file" accept="' + ACC + '">' +
      '<p class="row" style="margin-top:14px"><button class="primary" id="t-submit">' + esc(t('track.save')) + '</button>' +
      '<button type="button" data-act="track-cancel">' + esc(t('track.cancel')) + '</button>' +
      '<span id="t-msg" class="msg"></span></p></form>' +
      '<div id="t-media">' + trackMedia(ed) + '</div></section>';
  }
  // 3-6 곡 이미지·가사: 누르는 즉시 저장 (위 "곡 저장"과 따로). 저장하면 이 칸만 다시 그려 위에 쓰던 내용은 그대로.
  function trackMedia(x) {
    var src = trackImgUrl(x);
    return '<h3>' + esc(t('track.image.title')) + '</h3><div class="row">' +
      (src ? '<img class="tthumb big" src="' + esc(src) + '" alt="" width="100" height="100">' : '<span class="tthumb big"></span>') +
      '<span class="grow muted">' + esc(t(x.img_v ? 'track.image.custom' : 'track.image.default')) + '<br>' + esc(t('track.image.help')) + '</span></div>' +
      // 3-16: 옛날에 올린 그림(작은 그림만) → 다시 올리면 aimusiclist 큰 카드에서도 선명
      (x.img_v && !x.img_lg_v ? '<p class="notice info" id="timg-lg-hint" style="margin:8px 0 0">' + esc(t('track.image.lg_hint')) + '</p>' : '') +
      '<p class="row"><button type="button" class="small" data-act="timg-pick">' + esc(t('track.image.change')) + '</button>' +
      (x.img_v ? '<button type="button" class="small" data-act="timg-reset">' + esc(t('track.image.reset')) + '</button>' : '') + '</p>' +
      '<h3>' + esc(t('track.lyrics.title')) + '</h3>' +
      '<p class="muted" style="margin:0">' + esc(t(x.lyrics_v ? 'track.lyrics.has' : 'track.lyrics.none')) + ' ' + esc(t('track.lyrics.help')) + '</p>' +
      '<p class="row"><label class="btn small" style="margin:0;color:var(--text)">' + esc(t(x.lyrics_v ? 'track.lyrics.replace' : 'track.lyrics.upload')) +
        '<input id="t-lyrics" type="file" accept=".srt,text/plain,application/x-subrip" hidden></label>' +
      (x.lyrics_v ? '<a class="btn small" href="/l/' + encodeURIComponent(x.id) + '?v=' + x.lyrics_v + '" target="_blank" rel="noopener">' + esc(t('track.lyrics.view')) + '</a>' +
        '<button type="button" class="small danger" data-act="tly-del">' + esc(t('track.lyrics.delete')) + '</button>' : '') +
      '<span id="t-media-msg" class="msg"></span></p>';
  }
  function mediaDone(r, okText) {
    var x = trackById(r.track.id);
    if (x) { x.img_v = r.track.img_v || ''; x.img_lg_v = r.track.img_lg_v || ''; x.lyrics_v = r.track.lyrics_v || ''; }
    if ($('t-media') && x) $('t-media').innerHTML = trackMedia(x);
    toast(okText || t('admin.saved'));
  }
  function mediaFail(e) {
    var m = $('t-media-msg');
    if (m) { m.className = 'msg err'; m.textContent = e && e.text ? e.text : AML.errText(e); } else fail(e);
  }
  function uploadLyrics(file) {
    var id = S.editTrack;
    if (!/\.srt$/i.test(file.name)) { mediaFail({ text: t('track.lyrics.bad_type') }); return; }
    if (file.size > 100 * 1024) { mediaFail({ text: t('track.lyrics.too_big') }); return; }
    var m = $('t-media-msg'); if (m) { m.className = 'msg'; m.textContent = t('admin.loading'); }
    api('PUT', '/api/admin/tracks/' + encodeURIComponent(id) + '/lyrics', file, 'text/plain; charset=utf-8')
      .then(function (r) { mediaDone(r); }).catch(mediaFail);
  }

  // 음원 파일 검사: 형식·크기·길이
  function audioType(file) {
    var ext = (file.name.split('.').pop() || '').toLowerCase();
    if (file.type === 'audio/mpeg' || ext === 'mp3') return 'audio/mpeg';
    if (file.type === 'audio/mp4' || file.type === 'audio/x-m4a' || ext === 'm4a') return 'audio/mp4';
    return null;
  }
  function readDuration(file) {
    return new Promise(function (ok) {
      var a = new Audio(), url = URL.createObjectURL(file), done = function (v) { URL.revokeObjectURL(url); ok(v); };
      var tm = setTimeout(function () { done(0); }, 15000);
      a.preload = 'metadata';
      a.onloadedmetadata = function () { clearTimeout(tm); done(isFinite(a.duration) ? Math.round(a.duration) : 0); };
      a.onerror = function () { clearTimeout(tm); done(0); };
      a.src = url;
    });
  }
  // 3-11 WAV → 브라우저(Worker)가 320kbps MP3 로 바꿔 올림. 인코더는 WAV 일 때만 받는다
  var ACC = '.mp3,.m4a,.wav,audio/mpeg,audio/mp4,audio/x-m4a,audio/wav,audio/x-wav';
  function isWav(f) { return /\.wave?$/i.test(f.name) || /wav/.test(f.type); }
  function okType(f) { return audioType(f) || isWav(f); }
  function toMp3(file, onP) {
    return new Promise(function (ok) {
      var w = new Worker('/_app/wav-mp3.js?v=' + GV), end = function (r) { w.terminate(); ok(r || {}); };
      w.onmessage = function (e) { if (e.data.p != null) onP(e.data.p); else end(e.data); };
      w.onerror = function () { end({ err: 'read' }); };
      w.postMessage({ file: file, max: 15728640 });
    }).then(function (r) {
      return r.blob ? { duration: r.duration, type: 'audio/mpeg', blob: r.blob }
        : { err: t(r.err === 'len' ? 'track.upload.bad_length' : 'wav.err.' + (r.err || 'read'), { file: file.name }) };
    });
  }
  function checkAudio(file, onP) {
    if (isWav(file)) return toMp3(file, onP);
    if (!audioType(file)) return Promise.resolve({ err: t('track.upload.bad_type', { file: file.name }) });
    if (file.size > 15 * 1024 * 1024) return Promise.resolve({ err: t('track.upload.too_big', { file: file.name }) });
    return readDuration(file).then(function (d) {
      if (!d) return { err: t('track.upload.no_length', { file: file.name }) };
      if (d < 30 || d > 900) return { err: t('track.upload.bad_length', { file: file.name }) };
      return { duration: d, type: audioType(file) };
    });
  }
  function titleOf(name) { return (name.replace(/\.[^.]+$/, '').trim() || name).slice(0, 100); }

  // 업로드 대기열 ─────────────────────────────────────────────────────────────
  function addFiles(list) {
    if (S.up.running) return;
    var files = Array.prototype.slice.call(list || []);
    var room = MAX_FILES - S.up.items.length, extra = 0;
    files.forEach(function (f) {
      if (room <= 0) { extra++; return; }
      room--;
      S.up.items.push({ file: f, title: titleOf(f.name), status: okType(f) ? 'wait' : 'fail', err: okType(f) ? '' : t('track.upload.bad_type', { file: f.name }) });
    });
    renderQueue();
    if (extra) { var m = $('up-msg'); m.className = 'msg err'; m.textContent = t('upload.too_many', { max: MAX_FILES, n: extra }); }
  }
  function renderQueue() {
    var q = $('queue'); if (!q) return;
    var items = S.up.items;
    q.innerHTML = items.length ? '<table><tbody>' + items.map(function (it, i) {
      return '<tr><td class="num">' + (i + 1) + '</td><td><b>' + esc(it.title) + '</b><br><span class="muted">' + esc(it.file.name) + ' · ' + esc(fmtBytes(it.file.size)) + '</span>' +
        (it.err ? '<br><span class="st-fail">' + esc(it.err) + '</span>' : '') + '</td>' +
        '<td class="st-' + it.status + ' upst" id="up-st-' + i + '">' + stCell(it) + '</td>' +
        '<td>' + (!S.up.running && it.status !== 'done' ? '<button type="button" class="small" data-act="up-remove" data-i="' + i + '">' + esc(t('album.remove')) + '</button>' : '') + '</td></tr>';
    }).join('') + '</tbody></table>' : '';
    var pending = items.filter(function (x) { return x.status === 'wait'; }).length;
    var failed = items.filter(function (x) { return x.status === 'fail'; }).length;
    var start = $('up-start');
    if (start) { start.textContent = t('upload.start', { n: pending }); start.disabled = S.up.running || !pending; }
    var retry = $('up-retry');
    if (retry) { retry.hidden = !failed || S.up.running; }
    var clear = $('up-clear'); if (clear) clear.disabled = S.up.running || !items.length;
  }
  // M-5 C: 곡마다 진행바 + 숫자 (WAV → MP3 바꾸는 중에도). <progress> = 화면 읽기 프로그램이 값을 읽는다
  function stCell(it) {
    var p;
    if (it.status === 'up' && it.total) {
      p = Math.min(100, Math.floor(it.loaded / it.total * 100));
      return '<progress max="100" value="' + p + '" aria-label="' + esc(t('upload.st.up')) + '"></progress><span class="upn">' + esc(t('upload.bytes', { done: fmtBytes(it.loaded), total: fmtBytes(it.total), pct: p })) + '</span>';
    }
    if (it.status === 'conv') return '<progress max="100" value="' + (it.pct || 0) + '" aria-label="' + esc(t('wav.conv', { p: it.pct || 0 })) + '"></progress><span class="upn">' + esc(t('wav.conv', { p: it.pct || 0 })) + '</span>';
    return esc(t('upload.st.' + it.status));
  }
  function upProg(it) {   // 표 전체를 다시 그리지 않고 그 칸만
    var i = S.up.items.indexOf(it), c = $('up-st-' + i);
    if (c) { c.className = 'st-' + it.status + ' upst'; c.innerHTML = stCell(it); }
    var run = S.up.run, m = $('up-msg');
    if (!run || !m) return;
    var all = 0, done = 0;
    run.todo.forEach(function (x) {
      var size = x.total || (x.mp3 && x.mp3.blob ? x.mp3.blob.size : x.file.size);
      all += size; done += x.status === 'done' ? size : x.status === 'up' ? (x.loaded || 0) : 0;
    });
    m.textContent = t('upload.overall', { i: run.n, n: run.todo.length, pct: all ? Math.min(100, Math.floor(done / all * 100)) : 0 });
  }
  function keepUploadInputs() {
    if (!$('ug0')) return;
    S.up.genres = [val('ug0'), val('ug1'), val('ug2')];
    S.up.langs = readLangs('ul');
    S.up.artist = val('up-artist');
    S.up.ai = val('up-ai');   // 3-20
    S.up.aml = $('up-aml').checked;
    S.up.ext = setOnly(readExt('track', 'up').ext);   // 3-8
  }
  // 올리기: 파일마다 ① 길이 검사 ② POST /tracks?defer=1 ③ PUT /tracks/{id}/audio?defer=1 → 끝나면 POST /commit 1번
  // retryOnly = true 면 실패한 곡만 다시 (이미 등록된 곡은 음원만 다시 올림)
  function runUpload(retryOnly) {
    var msg = $('up-msg');
    keepUploadInputs();
    var genres = readGenres('ug');
    if (!genres) { msg.className = 'msg err'; msg.textContent = t('err.track.genre_invalid'); return; }
    var artist = S.up.artist || null, aml = S.up.aml, langs = S.up.langs, ai = S.up.ai || null;
    if (ai) { try { localStorage.setItem(AI_KEY, ai); } catch (e) { /* 이번만 */ } }   // 3-20 다음 업로드의 처음 값
    var xr = readExt('track', 'up');   // 3-8 추가 정보
    if (xr.err) { msg.className = 'msg err'; msg.textContent = xr.err; return; }
    var ext = setOnly(xr.ext);
    var todo = S.up.items.filter(function (x) { return retryOnly ? (x.status === 'fail' && okType(x.file)) : x.status === 'wait'; });
    if (!todo.length) return;
    if (retryOnly) todo.forEach(function (x) { x.status = 'wait'; x.err = ''; });
    S.up.running = true; renderQueue();
    var total = todo.length, ok = 0, n = 0;
    S.up.run = { todo: todo, n: 0 };
    msg.className = 'msg'; msg.textContent = t('upload.overall', { i: 0, n: total, pct: 0 });
    var chain = Promise.resolve();
    todo.forEach(function (it) {
      chain = chain.then(function () {
        it.status = 'check'; renderQueue();
        var chk = it.mp3 ? Promise.resolve(it.mp3) : checkAudio(it.file, function (p) { if (p !== it.pct || it.status !== 'conv') { it.status = 'conv'; it.pct = p; upProg(it); } });
        return chk.then(function (c) {
          if (c.err) { it.status = 'fail'; it.err = c.err; return; }
          if (c.blob) it.mp3 = c;
          it.status = 'up'; it.loaded = 0; it.total = (c.blob || it.file).size; renderQueue();
          var created = it.id ? Promise.resolve() : api('POST', '/api/admin/tracks?defer=1', hasExt(ext)
            ? { title: it.title, artist: artist, genres: genres, duration: c.duration, aml: aml, langs: langs, ai_tool: ai, ext: ext }
            : { title: it.title, artist: artist, genres: genres, duration: c.duration, aml: aml, langs: langs, ai_tool: ai })
            .then(function (res) { it.id = res.track.id; });
          return created
            .then(function () { return putAudio(it.id, c.blob || it.file, c.type, true, function (l) { it.loaded = l; upProg(it); }); })
            .then(function () { it.status = 'done'; it.err = ''; ok++; })
            .catch(function (e) { it.status = 'fail'; it.err = AML.errText(e); });
        });
      }).then(function () {
        n++; S.up.run.n = n;
        renderQueue(); upProg(it);
      });
    });
    return chain.then(function () {
      // 다 올린 뒤 1번만 반영 (catalog 갱신 + ping)
      return ok ? api('POST', '/api/admin/commit').catch(fail) : null;
    }).then(function () {
      S.up.running = false; S.up.run = null;
      var failed = S.up.items.filter(function (x) { return x.status === 'fail'; }).length;
      return reload().then(function () {
        var m = $('up-msg'); if (!m) return;
        m.className = failed ? 'msg err' : 'msg ok';
        m.textContent = t('upload.done', { ok: ok, n: total }) + (failed ? ' ' + t('upload.failed_some', { n: failed }) : '');
      });
    });
  }

  // 음원 올리기. Workers판·PHP판 작은 파일 = PUT 한 번. P-1 PHP판: 호스팅 한도보다 큰 파일은 조각(upload_chunk)으로,
  // 아티스트 R2 방식은 서버가 서명한 주소로 이 브라우저가 R2 에 바로 올린 뒤 서버가 확인(audio-done).
  // M-5: 진행률(onP(올린 바이트))을 받으려고 XMLHttpRequest (fetch 는 올리는 진행률을 주지 않는다). 오류 처리는 api() 와 같다
  function xhrPut(url, body, type, onP) {
    return new Promise(function (ok, no) {
      var x = new XMLHttpRequest();
      x.open('PUT', url, true);
      x.setRequestHeader('Content-Type', type);
      if (onP && x.upload) x.upload.onprogress = function (e) { if (e.lengthComputable) onP(e.loaded); };
      x.onload = function () { ok({ ok: x.status >= 200 && x.status < 300, status: x.status, text: x.responseText || '' }); };
      x.onerror = x.onabort = x.ontimeout = function () { no({ code: 'err.network' }); };
      x.send(body);
    });
  }
  function apiPut(path, blob, type, onP) {
    return xhrPut(path, blob, type || blob.type || 'application/octet-stream', onP).then(function (r) {
      var data = null; try { data = r.text ? JSON.parse(r.text) : {}; } catch (e) { data = {}; }
      if (r.ok && data.ok !== false) return data;
      var err = (data && data.error) || { code: r.status === 404 ? 'err.not_found' : 'err.server', params: {} };
      if (r.status === 401) toLogin(t('err.auth.required'));
      throw err;
    });
  }
  function putAudio(id, file, type, defer, onP) {
    var base = '/api/admin/tracks/' + encodeURIComponent(id);
    if (S.ui && S.ui.storage === 'r2') {
      return api('POST', base + '/upload-url', { type: type, size: file.size }).then(function (u) {
        return xhrPut(u.url, file, u.type, onP)
          .catch(function () { throw { code: 'err.upload.direct' }; })
          .then(function (r) {
            if (!r.ok) throw { code: 'err.upload.direct', params: { status: r.status } };
            return api('POST', base + '/audio-done' + (defer ? '?defer=1' : ''), { key: u.key, type: u.type });
          });
      });
    }
    var chunk = S.ui && S.ui.upload_chunk;
    if (!chunk || file.size <= chunk) return apiPut(base + '/audio' + (defer ? '?defer=1' : ''), file, type, onP);
    var parts = Math.ceil(file.size / chunk), tok = '';
    for (var k = 0; k < 16; k++) tok += 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 36));
    var i = 0, last = null;
    var next = function () {
      if (i >= parts) return last;
      var q = '?' + (defer ? 'defer=1&' : '') + 'part=' + i + '&parts=' + parts + '&size=' + file.size + '&upload=' + tok;
      var piece = file.slice(i * chunk, Math.min(file.size, (i + 1) * chunk));
      i++;
      var at = (i - 1) * chunk;   // 조각마다 앞 조각 크기를 더해 파일 전체 진행률로
      return apiPut(base + '/audio' + q, piece, type, onP && function (l) { onP(at + l); }).then(function (r) { last = r; return next(); });
    };
    return next();
  }

  function submitTrackEdit() {
    var msg = $('t-msg'), btn = $('t-submit'), id = S.editTrack;
    var genres = readGenres('g');
    if (!genres) { msg.className = 'msg err'; msg.textContent = t('err.track.genre_invalid'); return; }
    var body = { title: val('t-title'), artist: val('t-artist') || null, genres: genres, langs: readLangs('tl') };   // 3-7: langs null = 지정 안 함
    if ($('t-ai')) body.ai_tool = val('t-ai') || null;   // 3-20 '' = 선택 안 함
    var xr = readExt('track', 'te');   // 3-8: 그린 칸만 보낸다(빈 칸 = 지우기). 숨긴 deprecated·모르는 key는 서버가 그대로 보관
    if (xr.err) { msg.className = 'msg err'; msg.textContent = xr.err; return; }
    if (hasExt(xr.ext)) body.ext = xr.ext;
    if (!inAmlAlbum(id)) body.aml = $('t-aml').checked;
    if ($('t-plays')) body.plays_hide = !$('t-plays').checked;   // 3-14
    var file = $('t-replace') && $('t-replace').files[0];
    btn.disabled = true; msg.className = 'msg'; msg.textContent = '';
    var check = file ? checkAudio(file, function (p) { var m = $('t-msg'); if (m) m.textContent = t('wav.conv', { p: p }); }) : Promise.resolve({});
    check.then(function (c) {
      if (c.err) throw { text: c.err };
      if (c.duration) body.duration = c.duration;
      return api('PATCH', '/api/admin/tracks/' + encodeURIComponent(id), body)
        .then(function () {
          if (!file) return;
          var f = c.blob || file, m = $('t-msg');
          return putAudio(id, f, c.type, false, function (l) { var p = Math.min(100, Math.floor(l / f.size * 100)); if (m) m.textContent = t('upload.bytes', { done: fmtBytes(l), total: fmtBytes(f.size), pct: p }); });
        })
        .then(function () { S.editTrack = null; toast(t('admin.saved')); return reload(); });
    }).catch(function (e) { if ($('t-msg')) { $('t-msg').className = 'msg err'; $('t-msg').textContent = e.text || AML.errText(e); } })
      .then(function () { if ($('t-submit')) $('t-submit').disabled = false; });
  }

  // 3-11 공개 스위치(+글자). 저장 동작은 그대로
  function pubSw(act, id, on, dis, why) {
    return '<label class="sw"' + (why ? ' title="' + esc(why) + '"' : '') + '><input type="checkbox" role="switch" data-act="' + act + '" data-id="' + esc(id) + '"' +
      (on ? ' checked' : '') + (dis ? ' disabled' : '') + '><span class="sw-ui" aria-hidden="true"></span><span class="sw-tx">' + esc(t(on ? 'pub.on' : 'pub.off')) + '</span></label>';
  }
  function pubTx(el) { var s = el.parentNode.querySelector('.sw-tx'); if (s) s.textContent = t(el.checked ? 'pub.on' : 'pub.off'); }
  // 처음 한 번 안내 (다시 보지 않기 = localStorage)
  function pubTipHtml() {
    var b = function (a, k) { return '<button type="button" class="small" data-act="' + a + '">' + esc(t(k)) + '</button>'; };
    return S.pubTip === 1 ? '<p class="notice info row" id="pub-tip"><span class="grow">' + esc(t('pub.tip')) + '</span>' + b('pub-never', 'pub.tip_never') + b('pub-close', 'gal.close') + '</p>' : '';
  }
  function pubTip(el) {
    if (S.pubTip) return;
    try { S.pubTip = localStorage.getItem('aml_pub_tip') ? 2 : 1; } catch (e) { S.pubTip = 1; }
    if (S.pubTip === 1) el.closest('table').insertAdjacentHTML('beforebegin', pubTipHtml());
  }
  function toggleTrackAml(el, id) {
    el.disabled = true; pubTx(el); pubTip(el);
    api('PATCH', '/api/admin/tracks/' + encodeURIComponent(id), { aml: el.checked })
      .then(function (r) { var tr = trackById(id); if (tr) tr.aml = r.track.aml; toast(t(r.track.aml ? 'aml.saved_on' : 'aml.saved_off')); })
      .catch(function (e) { el.checked = !el.checked; pubTx(el); fail(e); })
      .then(function () { el.disabled = false; });
  }

  // 미리듣기 (같은 사이트 /a/{id} — 내 사이트 곡은 모두 재생 가능)
  var pv = { audio: null, id: null };
  function stopPreview() {
    if (pv.audio) pv.audio.pause();
    var b = pv.id && document.querySelector('[data-act="preview"][data-id="' + pv.id + '"]');
    if (b) b.textContent = t('track.preview');
    pv = { audio: null, id: null };
  }
  function preview(id, btn) {
    if (pv.id === id) { stopPreview(); return; }
    stopPreview();
    pv = { audio: new Audio('/a/' + encodeURIComponent(id)), id: id };
    pv.audio.onended = stopPreview;
    pv.audio.onerror = function () { fail({ code: 'err.track.no_audio' }); stopPreview(); };
    pv.audio.play().catch(function () {});
    btn.textContent = t('track.stop');
  }

  // ── B-2. 앨범 ───────────────────────────────────────────────────────────────
  function renderAlbums() {
    var d = S.albumDraft;
    var form;
    if (d) {
      var picked = d.track_ids;
      var pick = S.state.tracks.map(function (x) {
        return '<label><input type="checkbox" data-act="alb-pick" data-id="' + esc(x.id) + '"' + (picked.indexOf(x.id) >= 0 ? ' checked' : '') + '> ' +
          esc(x.title) + (x.has_audio ? '' : ' <span class="tag warn">' + esc(t('track.no_audio')) + '</span>') + '</label>';
      }).join('');
      var sel = picked.map(function (id, i) {
        var tr = trackById(id);
        return '<li><span class="row"><span class="grow">' + esc(tr ? tr.title : id) + '</span>' +
          '<button type="button" class="small" data-act="alb-up" data-i="' + i + '"' + (i === 0 ? ' disabled' : '') + '>' + esc(t('album.up')) + '</button>' +
          '<button type="button" class="small" data-act="alb-down" data-i="' + i + '"' + (i === picked.length - 1 ? ' disabled' : '') + '>' + esc(t('album.down')) + '</button>' +
          '<button type="button" class="small" data-act="alb-rm" data-i="' + i + '">' + esc(t('album.remove')) + '</button></span></li>';
      }).join('');
      var n = picked.length;
      form = '<section class="card"><h2>' + esc(t(d.id ? 'album.form.edit' : 'album.form.new')) + '</h2><form id="album-form">' +
        '<div class="grid3"><div><label for="a-title">' + esc(t('album.field.title')) + '</label><input id="a-title" type="text" maxlength="100" required value="' + esc(d.title) + '"></div>' +
        '<div><label for="a-artist">' + esc(t('track.field.artist')) + '</label>' + artistSelect('a-artist', d.artist || '') + '</div><div></div></div>' +
        '<label>' + esc(t('album.field.cover')) + '</label><div id="a-cover-box">' + albumCoverBox(d) + '</div>' +
        '<label>' + esc(t('album.field.pick')) + '</label><div class="grid3" style="grid-template-columns:1fr 1fr"><div class="pick">' + pick + '</div>' +
        '<div><ol class="sel">' + sel + '</ol></div></div>' +
        '<p class="muted"' + (n >= 10 && n <= 30 ? '' : ' style="color:var(--warn)"') + '>' + esc(t('album.field.selected', { n: n })) + '</p>' +
        '<p class="row"><button class="primary" id="a-submit">' + esc(t('album.save')) + '</button>' +
        '<button type="button" data-act="alb-cancel">' + esc(t('track.cancel')) + '</button><span id="a-msg" class="msg"></span></p></form></section>';
    } else {
      form = '<p><button class="primary" data-act="alb-new">' + esc(t('album.form.new')) + '</button></p>';
    }
    var rows = S.state.albums.map(function (a) {
      var ok = albumOk(a);
      return '<tr><td>' + pubSw('aml-album', a.id, a.aml, !(ok || a.aml), ok ? '' : t('album.public_rule')) + '</td>' +
        '<td><b>' + esc(a.title) + '</b><br><span class="muted">' + esc(artistName(a)) + '</span>' +
          (ok ? '' : ' <span class="tag warn">' + esc(t('album.public_rule')) + '</span>') + '</td>' +
        '<td class="num">' + esc(AML.tn('album.track_count', a.track_ids.length)) + '</td>' +
        '<td><span class="row"><button type="button" class="small" data-act="alb-edit" data-id="' + esc(a.id) + '">' + esc(t('track.edit')) + '</button>' +
        '<button type="button" class="small danger" data-act="alb-del" data-id="' + esc(a.id) + '">' + esc(t('track.delete')) + '</button></span></td></tr>';
    }).join('');
    return form + '<section class="card"><h2>' + esc(t('album.list.title')) + '</h2>' +
      '<p class="muted" style="margin:0 0 6px">' + esc(t('pub.album_help')) + '</p>' + (rows ? pubTipHtml() : '') +
      (rows ? '<table><thead><tr><th>' + esc(t('pub.col')) + '</th><th></th><th></th><th></th></tr></thead><tbody>' + rows + '</tbody></table>' : '<p class="muted">' + esc(t('album.list.empty')) + '</p>') + '</section>';
  }
  // 3-6 앨범 커버: 200×200 (자르기 또는 전체 줄이기). 고른 이미지는 "앨범 저장" 때 함께 올라간다.
  function albumCoverBox(d) {
    var a = d.id && S.state.albums.filter(function (x) { return x.id === d.id; })[0];
    var src = d.coverUrl || (a && a.has_cover ? '/c/' + encodeURIComponent(a.id) + (a.cover_v ? '?v=' + a.cover_v : '') : '');
    return '<div class="row">' + (src ? '<img class="cover-prev" src="' + esc(src) + '" alt="" width="100" height="100">' : '<span class="cover-prev"></span>') +
      '<button type="button" class="small" data-act="cover-pick">' + esc(t('album.cover.choose')) + '</button>' +
      (d.coverBlob ? '<span class="muted">' + esc(t('album.cover.pending')) + '</span><button type="button" class="small" data-act="cover-undo">' + esc(t('track.cancel')) + '</button>' : '') +
      (!d.coverBlob && a && a.has_cover ? '<button type="button" class="small danger" data-act="cover-del">' + esc(t('album.cover.delete')) + '</button>' : '') +
      '</div><p class="muted" style="margin:4px 0 0">' + esc(t('album.cover.help')) + '</p>';
  }
  function setCoverDraft(blob) {
    var d = S.albumDraft; if (!d) return;
    if (d.coverUrl) URL.revokeObjectURL(d.coverUrl);
    d.coverBlob = blob || null; d.coverUrl = blob ? URL.createObjectURL(blob) : '';
    if ($('a-cover-box')) $('a-cover-box').innerHTML = albumCoverBox(d);
  }
  function keepAlbumInputs() {
    if (!S.albumDraft || !$('a-title')) return;
    S.albumDraft.title = $('a-title').value; S.albumDraft.artist = $('a-artist').value;
  }
  function submitAlbum() {
    var d = S.albumDraft, msg = $('a-msg'), btn = $('a-submit');
    keepAlbumInputs();
    var cover = d.coverBlob;
    btn.disabled = true;
    var body = { title: d.title.trim(), artist: d.artist || null, track_ids: d.track_ids.slice(0, 30) };
    var save = d.id ? api('PATCH', '/api/admin/albums/' + encodeURIComponent(d.id), body).then(function () { return d.id; })
                    : api('POST', '/api/admin/albums', body).then(function (r) { return r.album.id; });
    save.then(function (id) { d.id = id; if (cover) return api('PUT', '/api/admin/albums/' + encodeURIComponent(id) + '/cover', cover, 'image/webp'); })
      .then(function () { setCoverDraft(null); S.albumDraft = null; toast(t('admin.saved')); return reload(); })
      .catch(function (e) { if ($('a-msg')) { $('a-msg').className = 'msg err'; $('a-msg').textContent = AML.errText(e); } })
      .then(function () { if ($('a-submit')) $('a-submit').disabled = false; });
  }
  function toggleAlbumAml(el, id) {
    el.disabled = true; pubTx(el); pubTip(el);
    api('PATCH', '/api/admin/albums/' + encodeURIComponent(id), { aml: el.checked })
      .then(function (r) { toast(t(r.album.aml ? 'aml.saved_on' : 'aml.saved_off')); return reload(); })
      .catch(function (e) { el.checked = !el.checked; pubTx(el); el.disabled = false; fail(e); });
  }

  // ── B-3. 스킨 ───────────────────────────────────────────────────────────────
  // 3-10: [설치된 스킨 | 둘러보기]. 둘러보기 목록(meshmelo skins/index.json)은 이 브라우저가 직접 읽는다(Worker 요청 0, 10분 캐시).
  //       미리보기·설치만 서버(POST /api/admin/skins/preview·install)가 받아서 검사한다. 받은 글자는 모두 esc().
  function renderSkins() {
    var ui = S.ui, meta = ui.skins_meta || {};
    var all = ui.builtin_skins.map(function (n) { return { name: n, builtin: true }; })
      .concat(ui.skins.map(function (n) { return { name: n, builtin: false }; }));
    var cards = all.map(function (s) {
      var on = s.name === ui.skin, m = meta[s.name], up = G.upd[s.name];
      return '<div class="skin' + (on ? ' on' : '') + '"><b>' + esc(galName(s.name)) + '</b> ' +
        (s.builtin ? '<span class="tag">' + esc(t('skin.builtin')) + '</span>' : '') +
        (m ? '<span class="tag">v' + esc(m.version) + '</span>' : '') +
        (on ? ' <span class="tag main">' + esc(t('skin.current')) + '</span>' : '') +
        (up ? ' <span class="tag new">' + esc(t('gal.new_ver')) + '</span>' : '') +
        '<p class="row">' + (on ? '' : '<button type="button" class="small primary" data-act="skin-use" data-name="' + esc(s.name) + '">' + esc(t('skin.use')) + '</button>') +
        (up ? '<button type="button" class="small" data-act="gal-up" data-id="' + esc(s.name) + '">' + esc(t('gal.update')) + ' v' + esc(up) + '</button>' : '') +
        (s.builtin ? '<a class="muted" href="/_skins/' + esc(s.name) + '.html" download="' + esc(s.name) + '.html">' + esc(t('skin.download')) + '</a>'
          : '<button type="button" class="small danger" data-act="skin-del" data-name="' + esc(s.name) + '">' + esc(t('skin.delete')) + '</button>') +
        '</p></div>';
    }).join('');
    var gal = S.skinView === 'gal';
    var seg = function (v, k) { var on = (v === 'gal') === gal; return '<button type="button" role="tab" aria-selected="' + on + '"' + (on ? ' class="on"' : '') + ' data-act="skin-view" data-v="' + v + '">' + esc(t(k)) + '</button>'; };
    var n = galUpdCount();
    var prev = ui.prev_skin ? '<p class="row"><button type="button" class="small" data-act="skin-revert">↩ ' + esc(t('gal.revert', { name: galName(ui.prev_skin) })) + '</button></p>' : '';
    var note = n ? '<p class="notice info row">' + esc(AML.tn('gal.upd_note', n)) + '</p>' : '';
    var head = '<section class="card"><div class="skin-head"><h2>' + esc(t('admin.tab.skins')) + '</h2>' +
      '<span class="seg" role="tablist">' + seg('inst', 'skin.installed') + seg('gal', 'gal.browse') + '</span></div>' + note + prev;
    if (gal) return head + galHtml() + '</section>';
    return head + '<div class="skins">' + cards + '</div></section>' +
      '<section class="card"><h2>' + esc(t('skin.upload.title')) + '</h2><p class="muted">' + esc(t('skin.upload.help')) + '</p>' +
      '<form id="skin-form"><div class="grid3"><div><label for="s-name">' + esc(t('skin.upload.name')) + '</label>' +
      '<input id="s-name" type="text" required maxlength="32" pattern="[a-z0-9_\\-]{1,32}"></div>' +
      '<div style="grid-column: span 2"><label for="s-file">' + esc(t('skin.upload.file', { max_kb: ui.limits.skin_kb })) + '</label>' +
      '<input id="s-file" type="file" accept=".html,.htm,text/html" required></div></div>' +
      '<p class="row"><button class="primary" id="s-submit">' + esc(t('skin.upload.button')) + '</button><span id="s-msg" class="msg"></span></p></form></section>';
  }
  function useSkin(name, key) {
    api('PUT', '/api/admin/skin', function () { return { name: name, etag: S.ui.etag }; })
      .then(function (ui) { S.ui = ui; galCalc(); toast(t(key || 'skin.applied', { name: galName(name) })); render(); }).catch(fail);
  }

  // ── 3-10 스킨 둘러보기 ─────────────────────────────────────────────────────
  var G = { items: null, err: false, busy: '', f: 'all', upd: {}, pv: null };
  var GV = '8';   // 관리 화면이 따로 부르는 파일(lang-admin·분석·통계·WAV 변환) 주소 뒤 버전. 그 파일들을 고치면 올린다
  var ID_RE = /^[a-z0-9-]{1,32}$/, VER_RE = /^\d{1,6}(\.\d{1,6}){0,3}$/;
  function cmpVer(a, b) {
    var x = String(a).split('.'), y = String(b).split('.');
    for (var i = 0; i < Math.max(x.length, y.length); i++) { var d = (+x[i] || 0) - (+y[i] || 0); if (d) return d > 0 ? 1 : -1; }
    return 0;
  }
  function pick(o) { return o && typeof o === 'object' ? String(o[AML.lang] || o.en || '') : ''; }
  function galItem(id) { return (G.items || []).filter(function (x) { return x.id === id; })[0]; }
  function galName(id) { var it = galItem(id); return (it && pick(it.name)) || id; }
  // 관리 전용 문장(public/_app/lang-admin/) — 방문자 화면이 받는 strings.js·lang/ 는 늘리지 않는다
  var galLangDone = {};
  function galLang() {
    var one = function (c) {
      if (galLangDone[c]) return galLangDone[c];
      return (galLangDone[c] = new Promise(function (ok) {
        var s = document.createElement('script'); s.src = '/_app/lang-admin/' + c + '.js?v=' + GV;
        s.onload = ok; s.onerror = function () { delete galLangDone[c]; ok(); }; document.head.appendChild(s);
      }));
    };
    return one('en').then(function () { return AML.lang !== 'en' && AML.LANGS[AML.lang] ? one(AML.lang) : null; });
  }
  function galSet(d) {
    var http = /^https?:\/\//;
    G.items = d.skins.filter(function (x) { return x && ID_RE.test(x.id) && VER_RE.test(String(x.version)) && x.id !== 'light' && x.id !== 'dark'; }).map(function (x) {
      return { id: x.id, version: String(x.version), spec: String(x.spec || ''), name: x.name, description: x.description,
        mode: x.mode === 'dark' ? 'dark' : 'light', author: String(x.author || '').slice(0, 40), updated: String(x.updated || ''),
        tags: (Array.isArray(x.tags) ? x.tags : []).filter(function (g) { return /^[a-z0-9-]{1,20}$/.test(g); }).slice(0, 5),
        preview: http.test(x.preview || '') ? x.preview : '' };
    }).sort(function (a, b) { return a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : 0; });   // 최신 순
    G.err = false; galCalc();
  }
  // 설치한 갤러리 스킨 중 목록의 version 이 더 높은 것 → 새 버전
  function galCalc() {
    G.upd = {};
    var meta = (S.ui && S.ui.skins_meta) || {};
    (G.items || []).forEach(function (x) { var m = meta[x.id]; if (m && m.source === 'gallery' && cmpVer(x.version, m.version) > 0 && !galTooNew(x)) G.upd[x.id] = x.version; });
  }
  function galUpdCount() { return Object.keys(G.upd).length; }
  function galTooNew(x) { var sp = (S.ui && S.ui.gallery && S.ui.gallery.spec) || '1.5'; return !VER_RE.test(x.spec) || cmpVer(x.spec, sp) > 0; }
  // 3-11: 열 때·[새로 고침]·"갤러리에 없음" 때 늘 다시 확인(no-cache = ETag, 그대로면 304). 탭 전환은 메모리(G.items)
  function galLoad() {
    var url = S.ui && S.ui.gallery && S.ui.gallery.index_url;
    if (!url) { G.err = true; return Promise.resolve(); }
    G.items = null; G.err = false;
    // no-store: 브라우저에 남은 옛 목록(잘못된 Last-Modified 로 304 가 나던 경우 포함)을 아예 쓰지 않는다. 관리자만 열므로 부담 없음
    return fetch(url, { credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (d) {
        if (!d || d.schema !== 'skin-index-1' || !Array.isArray(d.skins)) throw 0;
        galSet(d);
      }).catch(function () { G.err = true; G.items = null; });
  }
  function galGone(e) { if (e && e.code === 'err.gallery.not_found') galLoad().then(galRefresh); }
  function galRefresh() { if (S.tab === 'skins') render(); else drawTabs(); }
  function galHtml() {
    var intro = '<div class="gintro row"><div class="grow"><h3>' + esc(t('gal.title')) + '</h3><p class="muted">' + esc(t('gal.sub')) + '</p></div>' +
      (G.items || G.err ? '<button type="button" class="small" data-act="gal-retry">↻ ' + esc(t('gal.reload')) + '</button>' : '') + '</div>';
    if (G.err) return intro + '<p class="msg err row">' + esc(t('gal.error')) + ' <button type="button" class="small" data-act="gal-retry">' + esc(t('gal.retry')) + '</button></p>';
    if (!G.items) return intro + '<p class="muted">' + esc(t('gal.loading')) + '</p>';
    if (!G.items.length) return intro + '<p class="muted">' + esc(t('gal.empty')) + '</p>';
    // 3-11 칩: 모드와 같은 태그 빼고, 2개 이상 스킨이 쓰는 것만
    var cnt = {}, tags;
    G.items.forEach(function (x) { x.tags.forEach(function (g) { if (g !== 'all' && g !== 'light' && g !== 'dark') cnt[g] = (cnt[g] || 0) + 1; }); });
    tags = Object.keys(cnt).filter(function (g) { return cnt[g] > 1; }).sort(function (a, b) { return cnt[b] - cnt[a] || (a < b ? -1 : 1); });
    tags = ['all', 'light', 'dark'].concat(tags.slice(0, 20));
    if (tags.indexOf(G.f) < 0) G.f = 'all';
    var chips = tags.map(function (f) {
      var lab = f === 'all' || f === 'light' || f === 'dark' ? t('gal.f.' + f) : '#' + f;
      return '<button type="button" class="chip' + (G.f === f ? ' on' : '') + '" aria-pressed="' + (G.f === f) + '" data-act="gal-f" data-f="' + esc(f) + '">' + esc(lab) + '</button>';
    }).join('');
    var list = G.items.filter(function (x) { return G.f === 'all' || x.mode === G.f || x.tags.indexOf(G.f) >= 0; });
    var cards = list.map(galCard).join('');
    return intro + '<div class="chips" role="group">' + chips + '</div>' + (cards ? '<div class="gal">' + cards + '</div>' : '<p class="muted">' + esc(t('gal.none_match')) + '</p>');
  }
  function galCard(x) {
    var ui = S.ui, inst = ui.skins.indexOf(x.id) >= 0, on = ui.skin === x.id, up = G.upd[x.id], tooNew = galTooNew(x), busy = G.busy === x.id;
    var m = (ui.skins_meta || {})[x.id], same = inst && m && m.source === 'gallery' && !up;
    var b = function (act, key, cls) { return '<button type="button" class="small' + (cls ? ' ' + cls : '') + '" data-act="' + act + '" data-id="' + esc(x.id) + '"' + (G.busy ? ' disabled' : '') + '>' + esc(t(busy && cls ? 'gal.working' : key)) + '</button>'; };
    var btns = tooNew ? '<span class="muted">' + esc(t('gal.spec_newer')) + '</span>'
      : b('gal-pv', 'gal.preview') + (up ? b('gal-up', 'gal.update', 'primary') : on ? '' : same ? b('gal-use', 'gal.apply', 'primary') : b('gal-add', 'gal.apply', 'primary'));
    var badge = function (k, c) { return '<span class="tag' + (c ? ' ' + c : '') + '">' + esc(t(k)) + '</span>'; };
    var img = x.preview ? '<img src="' + esc(x.preview) + '" alt="" loading="lazy" decoding="async" width="1200" height="750">' : '';
    return '<div class="gcard' + (on ? ' on' : '') + '">' +
      (tooNew ? '<div class="gshot">' + img + '</div>' : '<button type="button" class="gshot" data-act="gal-pv" data-id="' + esc(x.id) + '" aria-label="' + esc(t('gal.preview')) + '">' + img + '</button>') +
      '<div class="gbody"><p class="gname"><b>' + esc(pick(x.name) || x.id) + '</b> ' +
      (on ? badge('skin.current', 'main') : inst ? badge('gal.installed') : '') + (up ? badge('gal.new_ver', 'new') : '') + '</p>' +
      '<p class="g1">' + esc(pick(x.description)) + '</p>' +
      '<p class="muted g1">' + esc(t('gal.f.' + x.mode)) + (x.author ? ' · ' + esc(t('gal.by', { author: x.author })) : '') + ' · v' + esc(x.version) + '</p>' +
      '<p class="row">' + btns + '</p></div></div>';
  }
  // 설치(+ 바로 적용). apply=false 는 업데이트(쓰는 스킨은 그대로)
  function galInstall(id, apply) {
    var inst = S.ui.skins.indexOf(id) >= 0, m = (S.ui.skins_meta || {})[id], over = inst && !(m && m.source === 'gallery');
    if (over && !confirm(t('gal.overwrite', { name: id }))) return;
    G.busy = id; galRefresh(); pvBusy(true);
    var body = { id: id, apply: apply }; if (over) body.overwrite = true;
    api('POST', '/api/admin/skins/install', body).then(function (ui) {
      S.ui = ui; galCalc(); pvClose();
      var v = ui.installed && ui.installed.version;
      toast(apply ? t('gal.applied', { name: galName(id) }) : t('gal.updated', { name: galName(id), version: v || '' }));
    }).catch(function (e) { fail(e); if (e && e.code === 'err.gallery.not_found') pvClose(); galGone(e); }).then(function () { G.busy = ''; pvBusy(false); render(); });
  }
  // 미리보기 창: 저장하지 않고 서버가 그린 HTML 을 sandbox iframe 에 (스크립트만 허용, 같은 출처·쿠키 접근 없음)
  function pvOpen(id) {
    var x = galItem(id); if (!x) return;
    var box = $('gpv');
    if (!box) { box = document.createElement('div'); box.id = 'gpv'; box.className = 'gpv'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); document.body.appendChild(box); }
    G.pv = { id: id, m: G.pv ? G.pv.m : 'd' };
    var seg = function (v, k) { return '<button type="button" class="' + (G.pv.m === v ? 'on' : '') + '" data-act="gal-pvm" data-v="' + v + '">' + esc(t(k)) + '</button>'; };
    box.innerHTML = '<div class="gpv-in"><div class="row gpv-top"><b class="grow">' + esc(pick(x.name) || x.id) + '</b><span class="seg">' + seg('d', 'gal.desktop') + seg('m', 'gal.phone') + '</span></div>' +
      '<div class="gpv-frame' + (G.pv.m === 'm' ? ' m' : '') + '" id="gpv-frame"><p class="muted">' + esc(t('gal.pv_loading')) + '</p></div>' +
      '<p class="muted">' + esc(t('gal.pv_note')) + '</p><p class="row gpv-act">' +
      (G.upd[id] ? '<button type="button" class="primary" data-act="gal-up" data-id="' + esc(id) + '">' + esc(t('gal.update')) + '</button>'
        : S.ui.skin === id ? '' : '<button type="button" class="primary" data-act="gal-pv-apply" data-id="' + esc(id) + '">' + esc(t('gal.apply_this')) + '</button>') +
      '<button type="button" data-act="gal-pv-close">' + esc(t('gal.close')) + '</button></p></div>';
    box.hidden = false;
    api('POST', '/api/admin/skins/preview', { id: id }).then(function (r) {
      var fr = $('gpv-frame'); if (!fr || !G.pv || G.pv.id !== id) return;
      var f = document.createElement('iframe');
      f.setAttribute('sandbox', 'allow-scripts');   // allow-same-origin 없음 → 관리 화면 쿠키·저장소에 닿지 않음
      f.setAttribute('referrerpolicy', 'no-referrer');
      f.title = t('gal.preview');
      f.srcdoc = r.html;
      fr.innerHTML = ''; fr.appendChild(f);
    }).catch(function (e) { var fr = $('gpv-frame'); if (fr) fr.innerHTML = '<p class="msg err">' + esc(AML.errText(e)) + '</p>'; galGone(e); });
  }
  function pvMode(v) { if (!G.pv) return; G.pv.m = v; var fr = $('gpv-frame'); if (fr) fr.classList.toggle('m', v === 'm');
    Array.prototype.forEach.call(document.querySelectorAll('#gpv .seg button'), function (b) { b.className = b.getAttribute('data-v') === v ? 'on' : ''; }); }
  function pvBusy(on) { Array.prototype.forEach.call(document.querySelectorAll('#gpv .gpv-act button'), function (b) { b.disabled = on; }); }
  function pvClose() { var box = $('gpv'); if (box) { box.hidden = true; box.innerHTML = ''; } G.pv = null; }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && G.pv) pvClose(); });
  function submitSkin() {
    var name = val('s-name'), file = $('s-file').files[0], msg = $('s-msg');
    if (!/^[a-z0-9_-]{1,32}$/.test(name)) { msg.className = 'msg err'; msg.textContent = t('err.skin.name_invalid'); return; }
    if (!file) return;
    $('s-submit').disabled = true;
    file.text().then(function (html) { return api('PUT', '/api/admin/skins/' + encodeURIComponent(name), html, 'text/html; charset=utf-8'); })
      .then(function (ui) { S.ui = ui; toast(t('admin.saved')); render(); })
      .catch(function (e) { if ($('s-msg')) { $('s-msg').className = 'msg err'; $('s-msg').textContent = AML.errText(e); } })
      .then(function () { if ($('s-submit')) $('s-submit').disabled = false; });
  }

  // ── B-4. 사이트 정보 + 가상 아티스트 + 관리자 계정 + 도움말 ────────────────────
  function renderSite() {
    var s = S.state.site, acc = S.state.account || {};
    var langs = Object.keys(AML.LANGS);
    if (s.default_lang && langs.indexOf(s.default_lang) < 0) langs.push(s.default_lang);
    var artists = s.artists.map(function (n, i) {
      return '<li class="row"><span class="grow">' + esc(n) + '</span><button type="button" class="small danger" data-act="artist-del" data-i="' + i + '">' + esc(t('track.delete')) + '</button></li>';
    }).join('');
    var max = S.state.config.max_artists || 20;
    return '<section class="card"><h2>' + esc(t('admin.tab.site')) + '</h2><form id="site-form">' +
      '<div class="grid3"><div><label for="si-name">' + esc(t('site.field.name')) + '</label><input id="si-name" type="text" maxlength="40" required value="' + esc(s.name || '') + '"></div>' +
      '<div><label for="si-artist">' + esc(t('site.field.artist')) + '</label><input id="si-artist" type="text" maxlength="40" required value="' + esc(s.artist_name || '') + '"></div>' +
      '<div><label for="si-lang">' + esc(t('site.field.lang')) + '</label><select id="si-lang">' + langs.map(function (l) {
        return '<option value="' + esc(l) + '"' + (l === (s.default_lang || 'en') ? ' selected' : '') + '>' + esc(AML.LANGS[l] || l) + ' (' + esc(l) + ')</option>';
      }).join('') + '</select></div></div>' +
      '<label for="si-desc">' + esc(t('site.field.description')) + '</label><textarea id="si-desc" rows="2" maxlength="200">' + esc(s.description || '') + '</textarea>' +
      '<label for="si-footer">' + esc(t('site.field.footer')) + '</label><input id="si-footer" type="text" maxlength="200" value="' + esc(s.footer || '') + '" placeholder="' + esc('© {year} ' + (s.name || '')) + '">' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('site.footer.help')) + '</p>' +
      extBox('site', s.ext, 'se') +   // 3-8 사이트 단위 추가 정보
      '<p class="row"><button class="primary">' + esc(t('site.save')) + '</button><span id="si-msg" class="msg"></span></p></form></section>' +
      '<section class="card" id="sns-card">' + snsCard() + '</section>' +
      '<section class="card" id="plays-card">' + playsCardInner() + '</section>' +   // 3-14 재생 횟수
      '<section class="card" id="likes-card">' + likesCardInner() + '</section>' +   // 3-18 좋아요 버튼
      siteImagesCard() + adsCard() +
      '<section class="card" id="fields-card">' + fieldsCard() + '</section>' +   // 3-8 [Update fields]

      '<section class="card"><h2>' + esc(t('artist.title')) + ' (' + s.artists.length + '/' + max + ')</h2><p class="muted">' + esc(t('artist.help', { name: s.name || '' })) + '</p>' +
      (artists ? '<ul style="list-style:none;padding:0;margin:0 0 8px">' + artists + '</ul>' : '') +
      '<form id="artist-form" class="row"><input id="ar-name" class="grow" type="text" maxlength="60" placeholder="' + esc(t('artist.placeholder')) + '"' + (s.artists.length >= max ? ' disabled' : '') + '>' +
      '<button class="primary"' + (s.artists.length >= max ? ' disabled' : '') + '>' + esc(t('artist.add')) + '</button></form><p id="ar-msg" class="msg err"></p></section>' +

      '<section class="card"><h2>' + esc(t('account.title')) + '</h2>' +
      '<p class="muted">' + esc(t('php.account.current', { email: acc.email || '-' })) + '</p>' +   // M-5: Cloudflare 계정·사용량 키는 아래 [사용량 보기] 카드로
      '<form id="account-form" novalidate><div class="grid3">' +
      (isMm() ? '' : '<div><label for="ac-email">' + esc(t('account.new_email')) + '</label><input id="ac-email" type="email" maxlength="254" placeholder="' + esc(acc.email || '') + '"></div>') +
      '<div><label for="ac-pw">' + esc(t('account.new_password')) + '</label><input id="ac-pw" type="password" autocomplete="new-password" maxlength="200"></div>' +
      '</div>' +
      '<label for="ac-cur">' + esc(t('account.current_password')) + '</label><input id="ac-cur" type="password" autocomplete="current-password" maxlength="200" required>' +
      '<p class="row" style="margin-top:12px"><button class="primary">' + esc(t('account.save')) + '</button><span id="ac-msg" class="msg"></span></p></form>' +
      (isMm() ? '<p class="muted">' + esc(t('mm.account.email_note', { portal: mmInfo().portal || '' })) + '</p>' : '') +
      '<details class="guide"><summary>' + esc(t('help.forgot.title')) + '</summary><ol>' + forgotHtml() + '</ol></details></section>' +
      (isMm() ? storageCard() : '') + (phpDisk() ? '' : tokenCard()) + (isMm() ? mmCard() : '');
  }
  // M-5 B: 사용량 키 카드 (비밀번호 칸과 따로). 넣어 둔 키는 가려서 보여 주고 [바꾸기]. 저장해도 로그아웃되지 않는다.
  var USAGE_SVG = '<svg class="shot" viewBox="0 0 460 188" role="img" aria-label="Create Token: aml-usage, Account · Account Analytics · Read, Account · Account Settings · Read">' +
    '<rect class="fr" x="1" y="1" width="458" height="186" rx="10"/><text class="tb big" x="16" y="30">Create Token</text>' +
    '<rect class="row" x="16" y="42" width="428" height="18" rx="5"/><text class="tb" x="24" y="55">Token name</text><rect class="box" x="24" y="66" width="170" height="20" rx="5"/><text class="t" x="32" y="80">aml-usage</text>' +
    '<rect class="ring" x="18" y="62" width="182" height="28" rx="8"/><circle class="nb" cx="18" cy="62" r="9"/><text class="nbt" x="18" y="65.6" text-anchor="middle">1</text>' +
    '<rect class="row" x="16" y="100" width="428" height="18" rx="5"/><text class="tb" x="24" y="113">Permissions</text>' +
    [0, 1].map(function (i) { var y = 126 + i * 26; return '<rect class="box" x="24" y="' + y + '" width="62" height="20" rx="5"/><text class="t" x="30" y="' + (y + 14) + '">Account ⇕</text><rect class="box" x="92" y="' + y + '" width="200" height="20" rx="5"/><text class="tb" x="98" y="' + (y + 14) + '">' + (i ? 'Account Settings' : 'Account Analytics') + '</text><rect class="box" x="298" y="' + y + '" width="110" height="20" rx="5"/><text class="tb" x="304" y="' + (y + 14) + '">Read ⇕</text>'; }).join('') +
    '<rect class="ring" x="18" y="121" width="396" height="56" rx="8"/><circle class="nb" cx="18" cy="121" r="9"/><text class="nbt" x="18" y="124.6" text-anchor="middle">2</text></svg>';
  function tokenCard() {
    var acc = S.state.account || {}, set = acc.cf_set && !S.tokEdit;
    // 안내 글은 포털 [사용량 키 만드는 방법]과 같은 문장 (**굵게**·[[Cloudflare 화면 이름]])
    var rich = function (k, p) { return esc(t(k, p)).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\[\[(.+?)\]\]/g, '<b class="ui">$1</b>'); };
    var steps = '<li>' + rich('tok.g1') + ' <a class="btn small primary" target="_blank" rel="noopener noreferrer" href="' + esc(TOKEN_URL) + '">' + esc(t('tok.open')) + ' ↗</a></li>' +
      '<li>' + rich('tok.g2') + USAGE_SVG + '<span class="muted">' + rich('tok.g2b') + '</span></li><li>' + rich('tok.g3') + '</li><li>' + rich('tok.g4', { save: t('tok.save') }) + '</li><li class="muted">' + rich('tok.g5') + '</li>';
    return '<section class="card" id="token-card"><h2>' + esc(t('tok.title')) + '</h2><p class="muted">' + esc(t('tok.lead')) + '</p>' +
      (acc.r2_account ? '<p style="margin:8px 0 2px">' + esc(t('tok.acct', { id: acc.r2_account })) + '</p>' : acc.cf_account ? '<p style="margin:8px 0 2px">' + esc(t('tok.acct_name', { account: acc.cf_account })) + '</p>' : '') +
      '<p class="muted" style="margin:2px 0 10px">' + esc(t('tok.same')) + '</p>' +
      (acc.cf_other ? '<p class="msg err" style="margin:0 0 10px">' + esc(t('tok.other')) + '</p>' : '') +
      (set ? '<p class="row"><span class="tok-set">✓ ' + esc(t('tok.set', { hint: acc.cf_hint || '••••••••' })) + '</span><button type="button" class="small" data-act="tok-change">' + esc(t('tok.change')) + '</button></p>'
        : '<form id="token-form" novalidate autocomplete="off"><label for="tk-in">' + esc(t('tok.label')) + '</label><div class="row"><input id="tk-in" name="aml-usage-key" class="grow masked" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" data-lpignore="true" data-1p-ignore maxlength="200">' +
          '<button class="primary">' + esc(t('tok.save')) + '</button>' + (acc.cf_set ? '<button type="button" data-act="tok-cancel">' + esc(t('tok.cancel')) + '</button>' : '') + '</div>' +
          '<div id="tk-accid-box" hidden><label for="tk-accid">' + esc(t('account.account_id')) + '</label><input id="tk-accid" type="text" maxlength="32" spellcheck="false" autocomplete="off" placeholder="0123456789abcdef0123456789abcdef">' +
          '<p class="muted" style="margin:4px 0 0">' + esc(t('setup.account_id_help')) + '</p></div><p id="tk-msg" class="msg" role="status"></p></form>') +
      '<details class="guide"' + (acc.cf_set ? '' : ' open') + '><summary>' + esc(t('tok.howto')) + '</summary><ol>' + steps + '</ol></details></section>';
  }
  function submitToken() {
    var tok = val('tk-in'), msg = $('tk-msg');
    if (!tok) { $('tk-in').focus(); return; }
    var body = { cf_token: tok };
    if ($('tk-accid-box') && !$('tk-accid-box').hidden && val('tk-accid')) body.account_id = val('tk-accid').toLowerCase();
    msg.className = 'msg'; msg.textContent = t('admin.loading');
    api('POST', '/api/admin/account', body).then(function () {
      S.tokEdit = false; toast(t('tok.saved'));
      return reload().then(function () { S.usage = null; loadUsage(true); });
    }).catch(function (e) {
      if (e && /^err\.cf\.(no_account|account_id_)/.test(e.code || '') && $('tk-accid-box')) $('tk-accid-box').hidden = false;
      if ($('tk-msg')) { $('tk-msg').className = 'msg err'; $('tk-msg').textContent = AML.errText(e); }
    });
  }
  // [연결하기]·포털의 [사용량 키 칸 열기](#token): 사이트 정보 탭의 사용량 키 칸으로
  function goToken() {
    S.tab = 'site'; S.tokEdit = !(S.state.account && S.state.account.cf_set) ? false : S.tokEdit;
    if (location.hash !== '#site') { history.replaceState(null, '', '#site'); }
    render();
    var c = $('token-card'); if (!c) return;
    c.scrollIntoView({ block: 'start', behavior: 'smooth' });
    var i = $('tk-in'); if (i) setTimeout(function () { i.focus({ preventScroll: true }); }, 300);
  }
  // 조율11 meshmelo: 곡 저장소(R2) 보기 + [저장소 바꾸기] → 포털의 저장소 바꾸기 화면(#r2). 바꾸는 안내·시험은 포털 한 곳에서
  function storageCard() {
    var acc = S.state.account || {}, m = mmInfo();
    return '<section class="card" id="r2-card"><h2>' + esc(t('mm.r2.title')) + '</h2><p class="muted">' + esc(t('mm.r2.help')) + '</p>' +
      (acc.r2_bucket || acc.r2_account ? '<p>' + esc(t('mm.r2.where', { bucket: acc.r2_bucket || '—', id: acc.r2_account || '—' })) + '</p>' : '') +
      '<p class="row"><a class="btn small primary" href="' + esc((m.portal || '') + '/#r2') + '" target="_blank" rel="noopener">' + esc(t('mm.r2.change')) + ' ↗</a></p>' +
      '<p class="muted">' + esc(t('mm.r2.note')) + '</p></section>';
  }
  // M-2 meshmelo: 내보내기·사이트 지우기 (떠날 수 있게). 파일은 아티스트 R2 에 그대로 남는다.
  function mmCard() {
    var m = mmInfo();
    return '<section class="card" id="mm-card"><h2>' + esc(t('mm.card.title')) + '</h2><p class="muted">' + esc(t('mm.card.help')) + '</p>' +
      '<p class="row"><button type="button" class="primary" data-act="mm-export">' + esc(t('mm.export')) + '</button>' +
      '<a class="btn small" href="' + esc(m.portal || '') + '/" target="_blank" rel="noopener">' + esc(t('mm.portal')) + ' ↗</a></p>' +
      '<p class="muted">' + esc(t('mm.export_note')) + '</p>' +
      '<details class="guide"><summary>' + esc(t('mm.delete')) + '</summary><p>' + esc(t('mm.delete_help', { name: m.name || '' })) + '</p>' +
      '<form id="mm-delete-form" novalidate><label for="mm-del-name">' + esc(t('mm.delete_name', { name: m.name || '' })) + '</label>' +
      '<input id="mm-del-name" type="text" autocomplete="off" spellcheck="false" maxlength="40">' +
      '<label for="mm-del-pw">' + esc(t('account.current_password')) + '</label><input id="mm-del-pw" type="password" autocomplete="current-password" maxlength="200">' +
      '<p class="row"><button class="danger">' + esc(t('mm.delete_button')) + '</button><span id="mm-del-msg" class="msg"></span></p></form></details></section>';
  }
  function mmExport(btn) {
    btn.disabled = true;
    fetch('/api/admin/mm/export', { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) return r.json().then(function (j) { throw (j && j.error) || {}; });
      var name = ((r.headers.get('Content-Disposition') || '').match(/filename="([^"]+)"/) || [])[1] || 'aml-export.zip';
      return r.blob().then(function (b) {
        var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
        toast(t('mm.exported'));
      });
    }).catch(fail).then(function () { btn.disabled = false; });
  }
  function mmDelete() {
    var m = mmInfo(), msg = $('mm-del-msg');
    if (val('mm-del-name') !== m.name) { msg.className = 'msg err'; msg.textContent = t('err.mm.confirm_name', { name: m.name }); return; }
    if (!confirm(t('mm.delete_confirm', { name: m.name }))) return;
    msg.className = 'msg'; msg.textContent = t('admin.loading');
    api('POST', '/api/admin/mm/delete', { password: $('mm-del-pw').value, confirm: val('mm-del-name') }).then(function (r) {
      location.href = (r.portal || m.portal || '/') + '/';
    }).catch(function (e) { msg.className = 'msg err'; msg.textContent = AML.errText(e); });
  }
  // 3-6 상단 배너·프로필 이미지 (누르면 바로 저장)
  function siteImagesCard() {
    var s = S.state.site, b = s.banner;
    return '<section class="card"><h2>' + esc(t('site.images.title')) + '</h2>' +
      '<h3>' + esc(t('site.banner.title')) + '</h3><p class="muted" style="margin:0 0 6px">' + esc(t('site.banner.help')) + '</p>' +
      (b && b.v ? '<img class="banner-prev" src="/b?v=' + esc(b.v) + '" alt="" width="' + (b.w | 0) + '" height="' + (b.h | 0) + '">' : '<p class="muted">' + esc(t('site.image.none')) + '</p>') +
      '<p class="row"><button type="button" class="small" data-act="site-img" data-kind="banner">' + esc(t('site.image.choose')) + '</button>' +
      (b && b.v ? '<button type="button" class="small danger" data-act="site-img-del" data-kind="banner">' + esc(t('site.image.delete')) + '</button>' : '') + '</p>' +
      '<h3>' + esc(t('site.profile.title')) + '</h3><div class="row">' +
      (s.profile_v ? '<img class="profile-prev" src="/p?v=' + esc(s.profile_v) + '" alt="" width="96" height="96">' : '<span class="profile-prev"></span>') +
      '<span class="grow muted">' + esc(t('site.profile.help')) + '</span></div>' +
      '<p class="row"><button type="button" class="small" data-act="site-img" data-kind="profile">' + esc(t('site.image.choose')) + '</button>' +
      (s.profile_v ? '<button type="button" class="small danger" data-act="site-img-del" data-kind="profile">' + esc(t('site.image.delete')) + '</button>' : '') + '</p></section>';
  }
  // 3-6 구글 애드센스: 코드 붙여넣기 없이 ID만. 광고 코드·ads.txt 는 사이트가 만든다. 관리 화면에는 광고가 나오지 않는다.
  function adsCard() {
    var a = S.state.site.ads || {}, dm = S.state.domain || {};
    var base = (dm.origin || location.origin);
    return '<section class="card"><h2>' + esc(t('ads.title')) + '</h2>' +
      (dm.workers_dev ? '<p class="notice">' + esc(t('ads.need_domain')) + ' <a href="#domain">' + esc(t('admin.tab.domain')) + ' →</a></p>' : '') +
      '<p class="muted">' + esc(t('ads.help')) + '</p>' +
      '<form id="ads-form" novalidate><div class="grid3">' +
      '<div><label for="ad-client">' + esc(t('ads.client')) + '</label><input id="ad-client" type="text" maxlength="23" spellcheck="false" placeholder="ca-pub-0000000000000000" value="' + esc(a.client || '') + '"></div>' +
      '<div><label for="ad-top">' + esc(t('ads.slot_top')) + '</label><input id="ad-top" type="text" inputmode="numeric" maxlength="20" placeholder="1234567890" value="' + esc(a.top || '') + '"></div>' +
      '<div><label for="ad-left">' + esc(t('ads.slot_left')) + '</label><input id="ad-left" type="text" inputmode="numeric" maxlength="20" placeholder="1234567890" value="' + esc(a.left || '') + '"></div></div>' +
      '<p class="muted" style="margin:4px 0 0">' + esc(t('ads.left_note')) + '</p>' +
      '<label class="check"><input type="checkbox" id="ad-on"' + (a.on ? ' checked' : '') + '> <b>' + esc(t('ads.on')) + '</b></label>' +
      '<p class="row" style="margin-top:10px"><button class="primary">' + esc(t('ads.save')) + '</button><span id="ad-msg" class="msg"></span></p></form>' +
      '<p class="muted">' + esc(t('ads.adstxt')) + ' <a href="' + esc(base + '/ads.txt') + '" target="_blank" rel="noopener">' + esc(base + '/ads.txt') + '</a></p></section>';
  }
  function submitAds() {
    var msg = $('ad-msg');
    var body = { client: val('ad-client'), top: val('ad-top'), left: val('ad-left'), on: $('ad-on').checked };
    if (body.client && !/^ca-pub-\d{16}$/.test(body.client)) { msg.className = 'msg err'; msg.textContent = t('err.ads.client'); return; }
    if ((body.top && !/^\d{6,20}$/.test(body.top)) || (body.left && !/^\d{6,20}$/.test(body.left))) { msg.className = 'msg err'; msg.textContent = t('err.ads.slot'); return; }
    if (body.on && !body.client) { msg.className = 'msg err'; msg.textContent = t('err.ads.client'); return; }
    api('PUT', '/api/admin/site', { ads: body }).then(function () { toast(t(body.on ? 'ads.saved_on' : 'ads.saved_off')); return reload(); }).catch(fail);
  }
  function uploadSiteImage(kind, blob, color) {
    return api('PUT', '/api/admin/site/' + kind, blob, { type: 'image/webp', headers: { 'X-Aml-Color': color || '' } }).then(function () { toast(t('admin.saved')); return reload(); });
  }
  function submitSite() {
    var body = { name: val('si-name'), artist_name: val('si-artist'), description: val('si-desc'), default_lang: val('si-lang'), footer: val('si-footer') };
    var xr = readExt('site', 'se');   // 3-8
    if (xr.err) { var m = $('si-msg'); m.className = 'msg err'; m.textContent = xr.err; return; }
    if (hasExt(xr.ext)) body.ext = xr.ext;
    api('PUT', '/api/admin/site', body)
      .then(function () { toast(t('admin.saved')); return reload(); }).catch(function (e) { var m = $('si-msg'); if (m) { m.className = 'msg err'; m.textContent = AML.errText(e); } else fail(e); });
  }
  // 3-8 확장 항목 목록 상태 + [Update fields] (바로 받기, 1분에 1번)
  function fieldsCard() {
    var f = S.state.fields || {}, doc = f.doc;
    var n = doc ? doc.fields.filter(function (x) { return x.status !== 'deprecated'; }).length : 0;
    var line = doc ? t('fields.version', { v: doc.version, n: n, time: f.ok_at ? fmtClock(f.ok_at) : '-' })
      : (f.error && f.error.code === 'err.fields.none' ? t('fields.none') : t('fields.never'));
    var err = f.error && f.error.code !== 'err.fields.none' ? '<p class="msg err">' + esc(t('fields.failed', { reason: AML.errText(f.error) })) + '</p>' : '';
    return '<h2>' + esc(t('fields.title')) + '</h2><p class="muted">' + esc(t('fields.help')) + '</p>' +
      '<p>' + esc(line) + '</p>' + err +
      '<p class="row"><button type="button" class="small" data-act="fields-update">' + esc(t('fields.update')) + '</button><span id="fields-msg" class="msg"></span></p>';
  }
  function fieldsUpdate(btn) {
    btn.disabled = true;
    var msg = $('fields-msg'); msg.className = 'msg'; msg.textContent = t('admin.loading');
    var show = function (cls, text) { var m = $('fields-msg'); if (m) { m.className = 'msg ' + cls; m.textContent = text; } };
    api('POST', '/api/admin/fields').then(function (r) {
      var e = r.result && r.result.error;
      // 목록이 바뀌었으면 화면 전체를 다시 그린다(업로드·사이트 정보의 "추가 정보" 칸이 바뀜)
      var done = r.result && r.result.changed ? reload() : Promise.resolve().then(function () {
        S.state.fields = normFields(r.fields); S.state.app = r.app || S.state.app;
        var c = $('fields-card'); if (c) c.innerHTML = fieldsCard();
        renderVerNote();
      });
      return done.then(function () {
        if (e && e.code !== 'err.fields.none') show('err', t('fields.failed', { reason: AML.errText(e) }));
        else show('ok', r.result && r.result.changed ? t('fields.updated', { v: r.result.version }) : (S.state.fields.doc ? t('fields.same') : t('fields.none')));
      });
    }).catch(function (e) { show('err', AML.errText(e)); })
      .then(function () { if (btn.isConnected) btn.disabled = false; });
  }

  function saveArtists(list) {
    return api('PUT', '/api/admin/site', { artists: list }).then(function () { toast(t('admin.saved')); return reload(); });
  }
  function submitArtist() {
    var name = val('ar-name'), msg = $('ar-msg'), list = S.state.site.artists.slice();
    if (!name) return;
    if (name === S.state.site.name || list.indexOf(name) >= 0) { msg.textContent = t('artist.duplicate'); return; }
    list.push(name);
    saveArtists(list).catch(function (e) { if ($('ar-msg')) $('ar-msg').textContent = AML.errText(e); });
  }
  function submitAccount() {
    var body = { current_password: $('ac-cur').value };
    var email = val('ac-email'), pw = $('ac-pw').value, msg = $('ac-msg');
    if (email) body.email = email;
    if (pw) { if (pw.length < 6) { msg.className = 'msg err'; msg.textContent = t('err.setup.password_short', { min: 6 }); return; } body.new_password = pw; }
    if (!email && !pw) return;   // M-5: 사용량 키는 [사용량 보기] 카드에서 따로 저장
    msg.className = 'msg'; msg.textContent = t('admin.loading');
    api('POST', '/api/admin/account', body).then(function () {
      toast(t('admin.saved'));
      return reload();
    }).catch(function (e) {
      if ($('ac-msg')) { $('ac-msg').className = 'msg err'; $('ac-msg').textContent = AML.errText(e); }
    });
  }

  // ── 3-7 SNS: 1~5번 큰 5개 고정 칸(주소만) + 다른 SNS 최대 5칸(종류 고르기·순서·삭제). 칸을 벗어나면 바로 저장. ──
  // 저장 값: PUT /api/admin/site {socials:[{key,url}]} — 빈 칸은 보내지 않는다. 서버가 큰 5개 → 다른 SNS 순서로 정리.
  function socialOf(key) { return S.socials.filter(function (x) { return x.key === key; })[0]; }
  function socialName(key) { var k = 'social.' + key, v = t(k); var x = socialOf(key); return v !== k ? v : (x ? x.name : key); }
  function socialUrlOk(key, url) {
    var x = socialOf(key), u;
    url = String(url || '').trim();
    if (!x || !url || Array.from(url).length > S.socialMaxUrl || /[\s<>"'`\\]/.test(url)) return '';
    try { u = new URL(url); } catch (e) { return ''; }
    if (u.protocol !== 'https:' || u.username || u.password || u.port) return '';
    var h = u.hostname.toLowerCase();
    return x.hosts.some(function (p) { return p.indexOf('*.') === 0 ? (h.length > p.length - 1 && h.slice(-(p.length - 1)) === p.slice(1)) : h === p; }) ? u.href : '';
  }
  function snsErrText(key, url) {
    var x = socialOf(key) || { name: key, hosts: [''] };
    if (Array.from(String(url)).length > S.socialMaxUrl) return t('err.social.too_long', { name: socialName(key), max: S.socialMaxUrl });
    return t('err.social.url', { name: socialName(key), example: 'https://' + x.hosts[0].replace(/^\*\./, 'name.') + '/…' });
  }
  function snsDraft() {
    if (S.sns) return S.sns;
    var saved = {}, more = [];
    (S.state.site.socials || []).forEach(function (x) {
      var so = socialOf(x.key); if (!so) return;
      if (so.big) saved[x.key] = x.url; else more.push({ key: x.key, url: x.url, saved: x.url, err: '' });
    });
    var big = S.socials.filter(function (x) { return x.big; }).map(function (x) { return { key: x.key, url: saved[x.key] || '', saved: saved[x.key] || '', err: '' }; });
    S.sns = { big: big, more: more };
    return S.sns;
  }
  function icon(key) {
    var x = socialOf(key);
    return '<svg class="sicon" aria-hidden="true" focusable="false"><use href="' + SPRITE + '#' + esc((x && x.icon) || 'link') + '"></use></svg>';
  }
  function snsCard() {
    if (!S.socials.length) return '<h2>' + esc(t('sns.title')) + '</h2><p class="muted">' + esc(t('err.network')) + '</p>';
    var d = snsDraft(), used = {};
    d.big.forEach(function (r) { used[r.key] = true; });
    d.more.forEach(function (r) { if (r.key) used[r.key] = true; });
    var row = function (r, i, big) {
      var id = big ? 'snsb-' + r.key : 'snsm-' + i;
      var head = big
        ? '<span class="sns-name">' + icon(r.key) + '<b>' + esc(socialName(r.key)) + '</b></span>'
        : '<span class="sns-name">' + icon(r.key) + '<select id="' + id + '-k" data-sns-key="' + i + '" aria-label="SNS">' +
            '<option value="">' + esc(t('sns.choose')) + '</option>' +
            S.socials.filter(function (x) { return !x.big && (x.key === r.key || !used[x.key]); }).map(function (x) {
              return '<option value="' + esc(x.key) + '"' + (x.key === r.key ? ' selected' : '') + '>' + esc(socialName(x.key)) + '</option>';
            }).join('') + '</select></span>';
      var tools = big ? '' : '<span class="row sns-tools">' +
        '<button type="button" class="small" data-act="sns-up" data-i="' + i + '"' + (i === 0 ? ' disabled' : '') + '>' + esc(t('album.up')) + '</button>' +
        '<button type="button" class="small" data-act="sns-down" data-i="' + i + '"' + (i === d.more.length - 1 ? ' disabled' : '') + '>' + esc(t('album.down')) + '</button>' +
        '<button type="button" class="small danger" data-act="sns-del" data-i="' + i + '">' + esc(t('album.remove')) + '</button></span>';
      return '<li class="sns-row' + (r.err ? ' bad' : '') + '">' + head +
        '<input id="' + id + '" type="url" inputmode="url" spellcheck="false" autocomplete="off" maxlength="' + S.socialMaxUrl + '" placeholder="https://…" value="' + esc(r.url) + '" ' +
          (big ? 'data-sns-big="' + esc(r.key) + '"' : 'data-sns-more="' + i + '"') + (big || r.key ? '' : ' disabled') + ' aria-label="' + esc(socialName(r.key || '')) + '">' + tools +
        '<p class="msg err sns-err" role="alert"' + (r.err ? '' : ' hidden') + '>' + esc(r.err) + '</p></li>';
    };
    var any = (S.state.site.socials || []).length;
    return '<h2>' + esc(t('sns.title')) + '</h2><p class="muted">' + esc(t('sns.help')) + '</p>' +
      '<ol class="sns">' + d.big.map(function (r) { return row(r, 0, true); }).join('') + '</ol>' +
      '<h3>' + esc(t('sns.more', { max: S.socialMax })) + '</h3>' +
      (d.more.length ? '<ol class="sns" start="6">' + d.more.map(function (r, i) { return row(r, i, false); }).join('') + '</ol>' : '') +
      '<p class="row"><button type="button" class="small" data-act="sns-add"' + (d.more.length >= S.socialMax ? ' disabled' : '') + '>' + esc(t('sns.add')) + '</button>' +
      (any ? '<a class="small" href="/#/links" target="_blank" rel="noopener">' + esc(t('sns.view')) + ' ↗</a>' : '') +
      '<span id="sns-msg" class="msg"></span></p>';
  }
  function snsRedraw() { var c = $('sns-card'); if (c) c.innerHTML = snsCard(); }
  // 저장할 목록: 각 칸의 "마지막으로 맞았던 주소"(틀린 칸은 이전 값 그대로)
  function snsSave() {
    var d = snsDraft();
    var list = d.big.filter(function (r) { return r.saved; }).map(function (r) { return { key: r.key, url: r.saved }; })
      .concat(d.more.filter(function (r) { return r.key && r.saved; }).map(function (r) { return { key: r.key, url: r.saved }; }));
    return api('PUT', '/api/admin/site', { socials: list }).then(function (res) {
      S.state.site.socials = (res.site && res.site.socials) || [];
      toast(t('sns.saved'));
    }).catch(function (e) {
      var key = e && e.params && e.params.key;
      var r = key && (d.big.concat(d.more)).filter(function (x) { return x.key === key; })[0];
      if (r) { r.err = AML.errText(e); snsRedraw(); } else fail(e);
    });
  }
  // 칸 하나가 바뀌었을 때: 검사 → 맞으면 저장, 틀리면 그 칸에 오류 문구(저장 안 함)
  function snsChanged(r) {
    var url = String(r.url || '').trim();
    r.url = url;
    if (!url) { r.err = ''; if (r.saved) { r.saved = ''; snsRedraw(); return snsSave(); } snsRedraw(); return; }
    if (!r.key) { snsRedraw(); return; }
    var ok = socialUrlOk(r.key, url);
    if (!ok) { r.err = snsErrText(r.key, url); snsRedraw(); return; }
    r.err = ''; r.url = ok;
    var changed = ok !== r.saved; r.saved = ok;
    snsRedraw();
    if (changed) return snsSave();
  }

  // ── 3-6 방명록 관리: 켜기/끄기, 글 지우기 (꺼져 있어도 지난 글을 볼 수 있다) ─────────────────────
  function renderGuestbook() {
    var on = S.state.site.guestbook !== false;
    return '<section class="card"><h2>' + esc(t('admin.tab.guestbook')) + '</h2>' +
      '<label class="check"><input type="checkbox" data-act="gb-toggle"' + (on ? ' checked' : '') + '> <b>' + esc(t('gbadmin.on')) + '</b></label>' +
      '<p class="muted">' + esc(t('gbadmin.help')) + '</p></section>' +
      '<section class="card"><h2 id="gb-head">' + esc(t('gbadmin.list')) + '</h2><div id="gb-list"><p class="muted">' + esc(t('admin.loading')) + '</p></div>' +
      '<p class="row" id="gb-pager"></p></section>';
  }
  function loadGb(page) {
    api('GET', '/api/admin/gb?page=' + (page | 0 || 1)).then(function (d) {
      S.gbPage = d.page;
      var box = $('gb-list'); if (!box) return;
      $('gb-head').textContent = t('gbadmin.list') + ' (' + d.total + ')';
      box.innerHTML = d.posts.length ? '<table><tbody>' + d.posts.map(function (p) {
        var tr = p.track ? trackById(p.track) : null;
        return '<tr><td><b>' + esc(p.name) + '</b> <span class="muted">' + esc(fmtClock(p.at)) + '</span>' +
          (p.track ? ' <span class="tag">♪ ' + esc(tr ? tr.title : t('gb.deleted_song')) + '</span>' : '') +
          '<div class="gb-text">' + esc(p.text) + '</div></td>' +
          '<td style="width:1%"><button type="button" class="small danger" data-act="gb-del" data-id="' + esc(p.id) + '">' + esc(t('track.delete')) + '</button></td></tr>';
      }).join('') + '</tbody></table>' : '<p class="muted">' + esc(t('gb.empty')) + '</p>';
      $('gb-pager').innerHTML = d.pages > 1 ? '<button type="button" class="small" data-act="gb-page" data-i="' + (d.page - 1) + '"' + (d.page <= 1 ? ' disabled' : '') + '>' + esc(t('gb.prev')) + '</button>' +
        '<span class="muted">' + d.page + ' / ' + d.pages + '</span>' +
        '<button type="button" class="small" data-act="gb-page" data-i="' + (d.page + 1) + '"' + (d.page >= d.pages ? ' disabled' : '') + '>' + esc(t('gb.next')) + '</button>' : '';
    }).catch(fail);
  }

  // ── 3-6 내 도메인: 단계별 안내 → 입력 → 그 주소로 이 사이트가 열리는지 확인 → aimusiclist 주소 변경 ──────
  var DOMAIN_STEPS = ['domain.step.1', 'domain.step.2', 'domain.step.3', 'domain.step.4', 'domain.step.5', 'domain.step.6'];
  var PHP_DOMAIN_STEPS = ['php.domain.step.1', 'php.domain.step.2', 'php.domain.step.3', 'php.domain.step.4', 'php.domain.step.5'];   // P-1
  function renderDomain() {
    var dm = S.state.domain || {};
    if (isMm()) return '<section class="card"><h2>' + esc(t('admin.tab.domain')) + '</h2><p>' + esc(t('domain.current', { url: dm.origin || location.origin })) + '</p>' +   // M-2
      '<p class="notice">' + esc(t('mm.domain.later')) + '</p></section>';
    var now = dm.domain
      ? '<p class="ok-line">✓ ' + esc(t('domain.connected', { domain: dm.domain })) + '</p><p class="muted">' + esc(tp('domain.redirect_note')) + '</p>'
      : '<p>' + esc(t('domain.current', { url: dm.origin || location.origin })) + '</p>' + (dm.workers_dev ? '<p class="muted">' + esc(t('domain.why')) + '</p>' : '');
    return '<section class="card"><h2>' + esc(t('admin.tab.domain')) + '</h2>' + now +
      (dm.from_env ? '<p class="notice">' + esc(t('domain.env')) + '</p>' : '') +
      '<details class="guide"' + (dm.domain ? '' : ' open') + '><summary>' + esc(t('domain.guide.title')) + '</summary><ol>' +
        (isPhp() ? PHP_DOMAIN_STEPS : DOMAIN_STEPS).map(function (k) { return '<li>' + esc(t(k, { worker: workerLabel() })) + '</li>'; }).join('') +
        '</ol><p class="muted">' + esc(tp('domain.guide.note')) + '</p></details>' +
      '<form id="domain-form" novalidate><label for="dm-input">' + esc(t('domain.input')) + '</label>' +
      '<div class="row"><input id="dm-input" class="grow" type="text" inputmode="url" spellcheck="false" autocomplete="off" placeholder="mymusic.com" value="' + esc(dm.domain ? dm.domain.replace(/^https:\/\//, '') : '') + '"' + (dm.from_env ? ' disabled' : '') + '>' +
      '<button class="primary" id="dm-submit"' + (dm.from_env ? ' disabled' : '') + '>' + esc(t('domain.connect')) + '</button></div>' +
      '<p id="dm-msg" class="msg" role="status"></p></form></section>';
  }
  // 3-7: 실제 Worker 이름 (접속 주소 이름.계정.workers.dev 의 첫 부분). 모르면 "내 Worker(사이트 이름)"
  function workerLabel() { var w = S.state && S.state.domain && S.state.domain.worker; return w || t('domain.worker_unknown'); }
  function submitDomain() {
    var msg = $('dm-msg'), btn = $('dm-submit'), v = val('dm-input');
    if (!v) return;
    btn.disabled = true; msg.className = 'msg'; msg.textContent = t('domain.checking');
    api('POST', '/api/admin/domain', { domain: v }).then(function (r) {
      S.state.domain = r.domain;
      render();
      var m = $('dm-msg'); if (!m) return;
      m.className = 'msg ok';
      m.textContent = r.unchanged ? t('domain.unchanged') : t(r.aimusiclist === 'changed' ? 'domain.done' : 'domain.done_local', { domain: r.domain.domain });
    }).catch(function (e) {
      if (e && e.code) e = { code: e.code, params: Object.assign({ worker: workerLabel() }, e.params || {}) };
      if (e && e.code && isPhp() && AML.strings.en['php.' + e.code] != null) e = { code: 'php.' + e.code, params: e.params };   // P-1 호스팅 안내 문장
      var m = $('dm-msg'); if (m) { m.className = 'msg err'; m.textContent = AML.errText(e); }
    }).then(function () { if ($('dm-submit')) $('dm-submit').disabled = false; });
  }

  // ── 이벤트 (한 곳에서 처리) ──────────────────────────────────────────────────
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act'), id = el.getAttribute('data-id');
    var d = S.albumDraft;
    switch (act) {
      case 'logout': api('POST', '/api/auth/logout').catch(function () {}).then(function () { toLogin(''); }); break;
      case 'usage-refresh': el.disabled = true; loadUsage(true); break;
      case 'token-go': goToken(); break;   // M-5
      case 'tok-change': S.tokEdit = true; render(); goToken(); break;
      case 'tok-cancel': S.tokEdit = false; render(); goToken(); break;
      case 'php-update': phpUpdate(el); break;   // P-1
      case 'mm-export': mmExport(el); break;     // M-2
      case 'aml-retry': amlRetry(el); break;
      case 'aml-track': toggleTrackAml(el, id); break;
      case 'plays-pub': togglePlaysPub(el); break;   // 3-14
      case 'likes-toggle': toggleLikes(el); break;   // 3-18
      case 'bulk-plays': bulkPlays(el); break;       // 3-14
      case 'aml-album': toggleAlbumAml(el, id); break;
      case 'pub-never': try { localStorage.setItem('aml_pub_tip', '1'); } catch (e) { /* 이번만 */ }   // 3-11 (아래로 이어짐)
      case 'pub-close': S.pubTip = 2; $('pub-tip').remove(); break;
      case 'preview': preview(id, el); break;
      case 'track-edit': keepUploadInputs(); S.editTrack = id; render(); window.scrollTo(0, 0); break;
      case 'track-cancel': S.editTrack = null; render(); break;
      case 'track-del': {
        var tr = trackById(id);
        if (confirm(t('track.delete.confirm', { title: tr.title }))) {
          api('DELETE', '/api/admin/tracks/' + encodeURIComponent(id)).then(function () { toast(t('admin.saved')); return reload(); }).catch(fail);
        }
        break;
      }
      case 'up-start': runUpload(false); break;
      case 'up-retry': runUpload(true); break;
      case 'up-clear': S.up.items = []; $('up-msg').textContent = ''; renderQueue(); break;
      case 'up-remove': S.up.items.splice(+el.getAttribute('data-i'), 1); renderQueue(); break;
      case 'alb-new': S.albumDraft = { id: null, title: '', artist: '', track_ids: [] }; render(); break;
      case 'alb-edit': {
        var a = S.state.albums.filter(function (x) { return x.id === id; })[0];
        S.albumDraft = { id: a.id, title: a.title, artist: a.artist || '', track_ids: a.track_ids.slice() }; render(); window.scrollTo(0, 0); break;
      }
      case 'alb-cancel': S.albumDraft = null; render(); break;
      case 'alb-pick':
        keepAlbumInputs();
        if (el.checked) { if (d.track_ids.length < 30) d.track_ids.push(id); }
        else d.track_ids = d.track_ids.filter(function (x) { return x !== id; });
        render(); break;
      case 'alb-up': case 'alb-down': case 'alb-rm': {
        keepAlbumInputs();
        var i = +el.getAttribute('data-i'), ids = d.track_ids;
        if (act === 'alb-rm') ids.splice(i, 1);
        else { var j = act === 'alb-up' ? i - 1 : i + 1; var tmp = ids[i]; ids[i] = ids[j]; ids[j] = tmp; }
        render(); break;
      }
      case 'alb-del': {
        var al = S.state.albums.filter(function (x) { return x.id === id; })[0];
        if (confirm(t('album.delete.confirm', { title: al.title }))) {
          api('DELETE', '/api/admin/albums/' + encodeURIComponent(id)).then(reload).catch(fail);
        }
        break;
      }
      case 'artist-del': {
        var list = S.state.site.artists.slice(), k = +el.getAttribute('data-i');
        if (confirm(t('artist.delete.confirm', { name: list[k] }))) { list.splice(k, 1); saveArtists(list).catch(fail); }
        break;
      }
      // 3-6
      case 'imged-save': if (ed) saveImgEditor(el); break;
      case 'imged-cancel': closeImgEditor(); break;
      case 'crop-apply': if (cr) cropApply(el); break;                                              // 3-9 프로필 자르기
      case 'crop-rotate': if (cr) { cr.rot = (cr.rot + 1) % 4; cr.ox = 0; cr.oy = 0; crSoon(); } break;
      case 'crop-zoom': if (cr) crZoom(cr.z * (+el.getAttribute('data-d') > 0 ? 1.15 : 1 / 1.15)); break;
      case 'profile-go':
        S.tab = 'site'; if (location.hash !== '#site') location.hash = '#site'; else render();
        pickImage('profile', function (blob, color) { return uploadSiteImage('profile', blob, color); });
        break;
      case 'timg-pick': {
        var tid = S.editTrack;
        pickImage('track', function (blob, big) {
          // 3-16: 큰 그림(있으면)을 먼저 올리고 → 작은 그림에 그 표시(X-Aml-Large)를 붙여 한 번에 반영. 큰 그림이 실패해도 작은 그림은 저장된다.
          var base = '/api/admin/tracks/' + encodeURIComponent(tid) + '/image';
          var first = big ? api('PUT', base + '?s=l', big, 'image/webp').then(function (r) { return (r.large && r.large.v) || ''; }, function () { return ''; }) : Promise.resolve('');
          return first.then(function (v) { return api('PUT', base, blob, { type: 'image/webp', headers: { 'X-Aml-Large': v } }); }).then(function (r) { mediaDone(r); });
        });
        break;
      }
      case 'timg-reset':
        api('DELETE', '/api/admin/tracks/' + encodeURIComponent(S.editTrack) + '/image').then(function (r) { mediaDone(r, t('track.image.reset_done')); }).catch(mediaFail);
        break;
      case 'tly-del':
        if (confirm(t('track.lyrics.delete_confirm'))) api('DELETE', '/api/admin/tracks/' + encodeURIComponent(S.editTrack) + '/lyrics').then(function (r) { mediaDone(r); }).catch(mediaFail);
        break;
      case 'cover-pick': keepAlbumInputs(); pickImage('cover', function (blob) { setCoverDraft(blob); }); break;
      case 'cover-undo': setCoverDraft(null); break;
      case 'cover-del':
        if (d && d.id && confirm(t('album.cover.delete_confirm'))) {
          api('DELETE', '/api/admin/albums/' + encodeURIComponent(d.id) + '/cover').then(function (r) {
            var al2 = S.state.albums.filter(function (x) { return x.id === d.id; })[0];
            if (al2) { al2.has_cover = false; al2.cover_v = ''; }
            if ($('a-cover-box')) $('a-cover-box').innerHTML = albumCoverBox(d);
            toast(t('admin.saved'));
          }).catch(fail);
        }
        break;
      case 'site-img': { var kind = el.getAttribute('data-kind'); pickImage(kind, function (blob, color) { return uploadSiteImage(kind, blob, color); }); break; }
      case 'site-img-del': {
        var k2 = el.getAttribute('data-kind');
        if (confirm(t('site.image.delete_confirm'))) api('DELETE', '/api/admin/site/' + k2).then(function () { toast(t('admin.saved')); return reload(); }).catch(fail);
        break;
      }
      case 'gb-toggle':
        el.disabled = true;
        api('PUT', '/api/admin/site', { guestbook: el.checked }).then(function (r) { S.state.site.guestbook = r.site.guestbook; toast(t(el.checked ? 'gbadmin.saved_on' : 'gbadmin.saved_off')); })
          .catch(function (e) { el.checked = !el.checked; fail(e); }).then(function () { el.disabled = false; });
        break;
      case 'gb-del':
        if (confirm(t('gbadmin.delete_confirm'))) api('DELETE', '/api/admin/gb/' + encodeURIComponent(id)).then(function () { toast(t('admin.saved')); loadGb(S.gbPage); }).catch(fail);
        break;
      case 'gb-page': loadGb(+el.getAttribute('data-i')); break;
      // 3-7 곡 언어 여러 곡
      case 'sel-track': if (el.checked) S.sel[id] = true; else delete S.sel[id]; updateBulk(); break;
      case 'sel-all': visibleIds().forEach(function (x) { if (el.checked) S.sel[x] = true; else delete S.sel[x]; });
        Array.prototype.forEach.call(document.querySelectorAll('#t-table input.sel'), function (c) { c.checked = !!S.sel[c.getAttribute('data-id')]; });
        updateBulk(); break;
      case 'bulk-apply': bulkApply(el); break;
      case 'bulk-ext-apply': bulkExtApply(el); break;   // 3-8
      case 'bulk-ai-apply': bulkAiApply(el); break;     // 3-20
      case 'ai-fill': aiFill(el); break;                // 3-20
      case 'fields-update': fieldsUpdate(el); break;    // 3-8
      case 'lang-fix': langFix(); break;
      // 3-7 SNS
      case 'sns-add': { var dd = snsDraft(); if (dd.more.length < S.socialMax) { dd.more.push({ key: '', url: '', saved: '', err: '' }); snsRedraw(); var k1 = $('snsm-' + (dd.more.length - 1) + '-k'); if (k1) k1.focus(); } break; }
      case 'sns-up': case 'sns-down': {
        var m = snsDraft().more, si = +el.getAttribute('data-i'), sj = act === 'sns-up' ? si - 1 : si + 1;
        if (sj < 0 || sj >= m.length) break;
        var tmp2 = m[si]; m[si] = m[sj]; m[sj] = tmp2; snsRedraw();
        if (m[si].saved || m[sj].saved) snsSave();
        break;
      }
      case 'sns-del': {
        var m2 = snsDraft().more, di = +el.getAttribute('data-i'), gone = m2.splice(di, 1)[0];
        snsRedraw(); if (gone && gone.saved) snsSave();
        break;
      }
      case 'skin-use': useSkin(el.getAttribute('data-name')); break;
      // 3-10 스킨 둘러보기
      case 'skin-view': S.skinView = el.getAttribute('data-v'); if (S.skinView === 'gal' && !G.items && !G.err) galLoad().then(galRefresh); render(); break;
      case 'skin-revert': useSkin(S.ui.prev_skin, 'gal.reverted'); break;
      case 'gal-retry': G.err = false; G.items = null; render(); galLoad().then(galRefresh); break;   // 3-11: [새로 고침]도
      case 'gal-f': G.f = el.getAttribute('data-f'); render(); break;
      case 'gal-pv': pvOpen(el.getAttribute('data-id')); break;
      case 'gal-pvm': pvMode(el.getAttribute('data-v')); break;
      case 'gal-pv-close': pvClose(); break;
      case 'gal-add': case 'gal-pv-apply': {
        var gi = el.getAttribute('data-id'), gm = (S.ui.skins_meta || {})[gi];
        if (gm && gm.source === 'gallery' && !G.upd[gi]) { pvClose(); useSkin(gi, 'gal.applied'); } else galInstall(gi, true);
        break;
      }
      case 'gal-use': useSkin(el.getAttribute('data-id'), 'gal.applied'); break;
      case 'gal-up': galInstall(el.getAttribute('data-id'), false); break;
      case 'skin-del': {
        var n = el.getAttribute('data-name');
        if (confirm(t('skin.delete.confirm', { name: n }))) {
          api('DELETE', '/api/admin/skins/' + encodeURIComponent(n)).then(function (ui) { S.ui = ui; render(); }).catch(fail);
        }
        break;
      }
      default: if (AML.adminAct) AML.adminAct(act, el, S, api, render); // C(메뉴)의 버튼
    }
  });
  document.addEventListener('submit', function (e) {
    var id = e.target.id;
    if (id === 'setup-form' || id === 'login-form') return; // 아래에서 따로 처리
    e.preventDefault();
    if (id === 'track-form') submitTrackEdit();
    else if (id === 'album-form') submitAlbum();
    else if (id === 'skin-form') submitSkin();
    else if (id === 'site-form') submitSite();
    else if (id === 'artist-form') submitArtist();
    else if (id === 'account-form') submitAccount();
    else if (id === 'token-form') submitToken();   // M-5
    else if (id === 'ads-form') submitAds();
    else if (id === 'domain-form') submitDomain();
    else if (id === 'mm-delete-form') mmDelete();   // M-2
    else if (AML.adminSubmit) AML.adminSubmit(id, S, api, render);
  });
  document.addEventListener('input', function (e) {
    if (e.target.id === 't-search') { S.q = e.target.value; filterTracks(); }
  });
  document.addEventListener('change', function (e) {
    var tg = e.target;
    if (tg.id === 't-nolang') { S.onlyNoLang = tg.checked; filterTracks(); updateBulk(); }
    if (tg.id === 'mmuse-notify') mmUseNotify(tg);   // M-6
    if (tg.id === 'bx-key') { S.bulkKey = tg.value; var bv = $('bx-val'); if (bv) bv.innerHTML = bulkExtValue(); }   // 3-8
    // 3-7 SNS 칸
    if (tg.hasAttribute && tg.hasAttribute('data-sns-big')) { var rb = snsDraft().big.filter(function (r) { return r.key === tg.getAttribute('data-sns-big'); })[0]; if (rb) { rb.url = tg.value; snsChanged(rb); } }
    if (tg.hasAttribute && tg.hasAttribute('data-sns-more')) { var rm = snsDraft().more[+tg.getAttribute('data-sns-more')]; if (rm) { rm.url = tg.value; snsChanged(rm); } }
    if (tg.hasAttribute && tg.hasAttribute('data-sns-key')) {
      var rk = snsDraft().more[+tg.getAttribute('data-sns-key')];
      if (rk) {
        var dup = tg.value && snsDraft().more.some(function (x) { return x !== rk && x.key === tg.value; });
        if (dup) { rk.err = t('err.social.duplicate', { name: socialName(tg.value) }); snsRedraw(); }
        else { var had = rk.saved; rk.key = tg.value; rk.saved = ''; rk.err = ''; if (rk.key && rk.url) snsChanged(rk); else { snsRedraw(); if (had) snsSave(); } }
      }
    }
    if (e.target.id === 'up-files') { addFiles(e.target.files); e.target.value = ''; }
    if (e.target.id === 't-lyrics' && e.target.files[0]) { uploadLyrics(e.target.files[0]); e.target.value = ''; }
  });
  // 드래그 앤 드롭 (#drop 칸에 파일을 끌어다 놓기)
  ['dragenter', 'dragover'].forEach(function (ev) {
    document.addEventListener(ev, function (e) {
      var drop = e.target.closest && e.target.closest('#drop');
      if (!drop) return;
      e.preventDefault(); drop.classList.add('over');
    });
  });
  document.addEventListener('dragleave', function (e) { var drop = e.target.closest && e.target.closest('#drop'); if (drop) drop.classList.remove('over'); });
  document.addEventListener('drop', function (e) {
    var drop = e.target.closest && e.target.closest('#drop');
    if (!drop) return;
    e.preventDefault(); drop.classList.remove('over');
    addFiles(e.dataTransfer && e.dataTransfer.files);
  });
  // 업로드 칸이 아닌 곳에 떨어뜨려 파일이 열리는 것을 막는다
  window.addEventListener('dragover', function (e) { e.preventDefault(); });
  window.addEventListener('drop', function (e) { e.preventDefault(); });
  window.addEventListener('hashchange', function () { keepUploadInputs(); S.tab = location.hash.slice(1); render(); });

  // ── 관리자 만들기 (첫 설치) ──────────────────────────────────────────────────
  var tokenTimer = null, tokenOk = false, tokenSeq = 0;
  function tokenState(text, cls) { var el = $('su-token-state'); el.className = 'msg ' + (cls || ''); el.textContent = text; }
  // 토큰 입력 즉시 검사 (입력을 멈추고 0.6초 뒤)
  function checkSetupToken() {
    var token = val('su-token'), seq = ++tokenSeq;
    tokenOk = false;
    if (!token) { tokenState(''); return Promise.resolve(false); }
    tokenState(t('setup.token_checking'));
    var manual = !$('su-accid-box').hidden ? val('su-accid').toLowerCase() : '';
    return api('POST', '/api/setup/token-check', { token: token, account_id: S.setupAccount || manual || undefined }).then(function (r) {
      if (seq !== tokenSeq) return false;
      if (r.need_choice || (r.accounts && r.accounts.length > 1)) {
        var sel = $('su-acc');
        sel.innerHTML = (r.need_choice ? '<option value="">' + esc(t('track.field.choose')) + '</option>' : '') + r.accounts.map(function (a) {
          return '<option value="' + esc(a.id) + '"' + (r.account && r.account.id === a.id ? ' selected' : '') + '>' + esc(a.name || a.id) + '</option>';
        }).join('');
        $('su-acc-box').hidden = false;
        if (r.need_choice) { tokenState(t('setup.token_choose'), 'err'); return false; }
      }
      S.setupAccount = r.account.id;
      tokenOk = true;
      tokenState('✓ ' + t('setup.token_ok', { account: r.account.name || r.account.id }), 'ok');
      return true;
    }).catch(function (e) {
      if (seq !== tokenSeq) return false;
      // 3-7: 토큰이 계정 목록을 못 보면(Account Settings: Read 없음) 계정 ID 직접 입력 칸을 보여 준다
      if (e && /^err\.cf\.(no_account|account_id_)/.test(e.code || '')) $('su-accid-box').hidden = false;
      tokenState('✗ ' + AML.errText(e), 'err');
      return false;
    });
  }
  $('su-token').addEventListener('input', function () { clearTimeout(tokenTimer); S.setupAccount = ''; $('su-acc-box').hidden = true; tokenTimer = setTimeout(checkSetupToken, 600); });
  $('su-acc').addEventListener('change', function () { S.setupAccount = $('su-acc').value; checkSetupToken(); });
  $('su-accid').addEventListener('input', function () {
    clearTimeout(tokenTimer); tokenOk = false;
    var v = val('su-accid');
    if (/^[0-9a-fA-F]{32}$/.test(v)) tokenTimer = setTimeout(checkSetupToken, 300);
    else if (v) tokenState(t('err.cf.account_id_format'), 'err');
  });

  $('setup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = $('su-msg'), btn = $('su-submit');
    var email = val('su-email'), pw = $('su-pw').value, pw2 = $('su-pw2').value;
    msg.textContent = '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = t('err.setup.email_invalid'); return; }
    if (pw.length < 6) { msg.textContent = t('err.setup.password_short', { min: 6 }); return; }
    if (pw !== pw2) { msg.textContent = t('err.setup.password_mismatch'); return; }
    if (!val('su-token')) { msg.textContent = t('err.cf.no_token'); return; }
    btn.disabled = true;
    (tokenOk ? Promise.resolve(true) : checkSetupToken()).then(function (ok) {
      if (!ok) { msg.textContent = t('setup.token_needed'); return; }
      return api('POST', '/api/setup', {
        email: email, password: pw, password2: pw2, cf_token: val('su-token'),
        account_id: S.setupAccount || (!$('su-accid-box').hidden && val('su-accid').toLowerCase()) || undefined, legacy_token: $('su-legacy-box').hidden ? undefined : val('su-legacy'),
      }).then(function () {
        // 만든 뒤: 로그인된 상태로 관리 화면. 사이트 주소(/)는 이제 메인 화면이 보인다.
        if (location.pathname !== '/admin/') { location.replace('/admin/'); return; }
        start();
      });
    }).catch(function (err) { msg.textContent = AML.errText(err); })
      .then(function () { btn.disabled = false; });
  });

  // ── 로그인 ──────────────────────────────────────────────────────────────────
  function toLogin(message) {
    S.state = null; S.plays = null; clearTimeout(amlPoll); admFlag(false);
    if (location.pathname !== '/admin/') { location.replace('/admin/'); return; }
    show('login');
    $('login-msg').textContent = message || '';
  }
  $('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = $('login-submit'); btn.disabled = true; $('login-msg').textContent = '';
    api('POST', '/api/auth/login', { email: val('login-email'), password: $('login-pw').value })
      .then(function () { $('login-pw').value = ''; start(); })
      .catch(function (err) {
        var m = AML.errText(err);
        if (err && err.code === 'err.auth.wrong_login' && err.params && err.params.left != null) m += ' ' + t('auth.left', { n: err.params.left });
        $('login-msg').textContent = m;
      })
      .then(function () { btn.disabled = false; });
  });

  function start() {
    show('app');
    panel.innerHTML = '<p class="muted">' + esc(t('admin.loading')) + '</p>';
    Promise.all([api('GET', '/api/admin/state'), api('GET', '/api/admin/ui')])
      .then(function (r) { S.ui = r[1]; return Promise.all([loadGenres(), loadLists(), loadAiTools(), galLang()]).then(function () { return r; }); })
      .then(function (r) { S.state = normalizeState(r[0]); render(); loadUsage(false); admFlag(true); loadPlays(); loadMmUse();   // 3-14 · M-6
        galLoad().then(galRefresh); })   // 3-10: 스킨 새 버전 확인 — 목록은 이 브라우저가 직접, 실패해도 조용히
      .catch(function (e) { if (S.status && S.status.logged_in !== false) fail(e); });
  }

  // 시작: 관리자 있음/없음, 로그인 여부
  function boot() {
    return api('GET', '/api/auth/status').then(function (st) {
      S.status = st;
      if (st.server === 'php') {   // P-1
        if (!st.admin_exists) { location.replace('/install/'); return; }
        return galLang().then(function () { applyTexts(); return st; });
      }
      return st;
    }).then(function (st) {
      if (!st) return;
      if (!st.admin_exists) {
        $('su-legacy-box').hidden = !st.legacy_token_required;
        show('setup');
      } else if (!st.logged_in) {
        if (location.pathname !== '/admin/') { location.replace('/admin/'); return; }
        show('login');
      } else {
        if (location.pathname !== '/admin/') { location.replace('/admin/'); return; }
        start();
      }
    }).catch(function (e) { show('login'); $('login-msg').textContent = AML.errText(e); });
  }

  AML.admin = { S: S, api: api, render: render, reload: reload, esc: esc, gName: gName, mainOptions: mainOptions, toast: toast, fail: fail,
    fmtNum: fmtNum, fmtBytes: fmtBytes, fmtClock: fmtClock, isPhp: isPhp, isMm: isMm, tp: tp, loadUsage: loadUsage, artistName: artistName, loadPlays: loadPlays, drawTabs: function () { drawTabs(); } };   // 3-15 drawTabs   // 3-14 loadPlays   // 3-12 통계 탭이 쓴다

  // ── 언어 (3-3): 저장값 → 브라우저 언어 → en ──────────────────────────────────
  AML.setLang(AML.pickLang('en')).then(function () {
    AML.langSelect($('lang-pick'), function () { keepUploadInputs(); applyTexts(); render(); if (S.state) renderUsage(); galLang().then(function () { if (S.state) render(); }); });
    applyTexts();
    boot();
  });
})();

/* ── C. 메뉴 만들기 ──────────────────────────────────────────────────────────────
 * 순서: ① 메인 장르(genres[].key) → ② 그 메인의 subs 중 세부 장르(선택) → ③ 메뉴 이름(선택)
 * 저장: 추가·수정·삭제·순서 변경마다 PUT /api/admin/menus {menus, etag} 로 전체를 바로 저장한다.
 * 방문자 화면: 곡의 장르 3개 중 하나라도 메뉴 키(세부를 골랐으면 세부, 아니면 메인)와 같으면 그 메뉴에 나온다.
 */
(function () {
  'use strict';
  var AML = window.AML, t = AML.t, A = AML.admin;
  var esc = A.esc, gName = A.gName, S = A.S;
  var edit = null; // 고치는 중인 메뉴 id (null = 새 메뉴)

  function $(id) { return document.getElementById(id); }
  function menus() { return (S.ui && S.ui.menus) || []; }
  function keyOf(m) { return m.sub || m.main; }
  function menuName(m) { return m.label || gName(keyOf(m)); }
  function newMenuId() { return 'm_' + Math.random().toString(36).slice(2, 10); }

  // 내 사이트에 보이는 곡 수 (음원이 있는 곡 모두 — 방문자 화면과 같은 규칙, 3-5)
  function publicCount(key) {
    return S.state.tracks.filter(function (x) { return x.has_audio && x.genres.indexOf(key) >= 0; }).length;
  }

  // 세부 장르 select: 고른 메인의 subs 만
  function subOptions(main, sel) {
    if (!main || !S.gIdx[main]) return '<option value="">' + esc(t('menu.choose_main_first')) + '</option>';
    return '<option value="">' + esc(t('menu.sub_all', { genre: gName(main) })) + '</option>' +
      S.gIdx[main].subs.map(function (k) {
        return '<option value="' + k + '"' + (k === sel ? ' selected' : '') + '>' + esc(gName(k)) + '</option>';
      }).join('');
  }

  function renderMenus() {
    var m = edit && menus().filter(function (x) { return x.id === edit; })[0];
    var main = m ? m.main : '', sub = m ? m.sub : '';
    var form = '<section class="card"><h2>' + esc(t(m ? 'menu.edit' : 'menu.add')) + '</h2>' +
      '<p class="muted">' + esc(t('menu.help')) + '</p><form id="menu-form"><div class="grid3">' +
      '<div><label for="m-main">' + esc(t('menu.step1')) + '</label><select id="m-main" required>' + A.mainOptions(main) + '</select></div>' +
      '<div><label for="m-sub">' + esc(t('menu.step2')) + '</label><select id="m-sub"' + (main ? '' : ' disabled') + '>' + subOptions(main, sub) + '</select></div>' +
      '<div><label for="m-label">' + esc(t('menu.label')) + '</label><input id="m-label" type="text" maxlength="30" value="' + esc(m ? m.label : '') + '"' +
        ' placeholder="' + esc(main ? t('menu.label_hint', { genre: gName(sub || main) }) : '') + '"></div></div>' +
      '<p class="row"><button class="primary" id="m-submit">' + esc(t('menu.save')) + '</button>' +
      (m ? '<button type="button" data-act="menu-cancel">' + esc(t('track.cancel')) + '</button>' : '') +
      '<span id="m-count" class="muted">' + (main ? esc(AML.tn('menu.count', publicCount(sub || main))) : '') + '</span>' +
      '<span id="m-msg" class="msg err"></span></p></form></section>';

    var list = menus();
    var rows = list.map(function (x, i) {
      var known = S.gIdx[x.main] && S.gIdx[x.main].is_main && (!x.sub || S.gIdx[x.main].subs.indexOf(x.sub) >= 0);
      return '<tr><td><b>' + esc(menuName(x)) + '</b><br><span class="muted">' + esc(gName(x.main)) + (x.sub ? ' › ' + esc(gName(x.sub)) : '') + '</span>' +
          (known ? '' : ' <span class="tag warn">' + esc(t('menu.unknown_genre')) + '</span>') + '</td>' +
        '<td class="num">' + esc(AML.tn('menu.count', publicCount(keyOf(x)))) + '</td>' +
        '<td><span class="row">' +
          '<button type="button" class="small" data-act="menu-up" data-i="' + i + '"' + (i === 0 ? ' disabled' : '') + '>' + esc(t('album.up')) + '</button>' +
          '<button type="button" class="small" data-act="menu-down" data-i="' + i + '"' + (i === list.length - 1 ? ' disabled' : '') + '>' + esc(t('album.down')) + '</button>' +
          '<button type="button" class="small" data-act="menu-edit" data-id="' + esc(x.id) + '">' + esc(t('track.edit')) + '</button>' +
          '<button type="button" class="small danger" data-act="menu-del" data-i="' + i + '">' + esc(t('track.delete')) + '</button></span></td></tr>';
    }).join('');
    return form + '<section class="card"><h2>' + esc(t('menu.title')) + ' (' + list.length + '/30)</h2>' +
      (rows ? '<table><tbody>' + rows + '</tbody></table>' : '<p class="muted">' + esc(t('menu.list_empty')) + '</p>') + '</section>';
  }

  // 메뉴 전체 저장 (409면 api()가 최신 ui를 다시 불러온 뒤 make()로 다시 만들어 보낸다)
  function saveMenus(make) {
    return A.api('PUT', '/api/admin/menus', function () { return { menus: make(menus().slice()), etag: S.ui.etag }; })
      .then(function (ui) { S.ui = ui; edit = null; A.toast(t('menu.saved')); A.render(); })
      .catch(A.fail);
  }

  // 메인을 바꾸면 세부 장르 목록·이름 안내·곡 수를 그 자리에서 바꾼다 (다시 그리지 않아 입력이 유지됨)
  document.addEventListener('change', function (e) {
    if (e.target.id !== 'm-main' && e.target.id !== 'm-sub') return;
    var main = $('m-main').value, subSel = $('m-sub');
    if (e.target.id === 'm-main') { subSel.innerHTML = subOptions(main, ''); subSel.disabled = !main; }
    var key = subSel.value || main;
    $('m-label').placeholder = key ? t('menu.label_hint', { genre: gName(key) }) : '';
    $('m-count').textContent = key ? AML.tn('menu.count', publicCount(key)) : '';
  });

  AML.adminSubmit = function (formId) {
    if (formId !== 'menu-form') return;
    var main = $('m-main').value, sub = $('m-sub').value, label = $('m-label').value.trim(), msg = $('m-msg');
    if (!main || !S.gIdx[main] || !S.gIdx[main].is_main) return;
    if (sub && S.gIdx[main].subs.indexOf(sub) < 0) sub = '';
    var dup = menus().some(function (x) { return x.id !== edit && x.main === main && (x.sub || '') === sub; });
    if (dup) { msg.textContent = t('menu.duplicate'); return; }
    if (!edit && menus().length >= 30) { msg.textContent = t('menu.limit', { max: 30 }); return; }
    var id = edit;
    $('m-submit').disabled = true;
    saveMenus(function (list) {
      var item = { id: id || newMenuId(), label: label, main: main, sub: sub };
      var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) list[i] = item; else list.push(item);
      return list;
    });
  };

  AML.adminAct = function (act, el) {
    var i = +el.getAttribute('data-i');
    if (act === 'menu-edit') { edit = el.getAttribute('data-id'); A.render(); window.scrollTo(0, 0); }
    else if (act === 'menu-cancel') { edit = null; A.render(); }
    else if (act === 'menu-up' || act === 'menu-down') {
      var id = menus()[i].id, dir = act === 'menu-up' ? -1 : 1;
      saveMenus(function (list) {
        var a = list.findIndex(function (x) { return x.id === id; }), b = a + dir;
        if (a < 0 || b < 0 || b >= list.length) return list;
        var tmp = list[a]; list[a] = list[b]; list[b] = tmp; return list;
      });
    } else if (act === 'menu-del') {
      var m = menus()[i];
      if (confirm(t('menu.delete.confirm', { name: menuName(m) }))) {
        saveMenus(function (list) { return list.filter(function (x) { return x.id !== m.id; }); });
      }
    }
  };

  // 탭 등록: Tracks, Albums 다음에 Menus
  AML.adminTabs.splice(2, 0, { id: 'menus', label: 'admin.tab.menus', render: renderMenus });
})();
