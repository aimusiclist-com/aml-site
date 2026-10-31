// src/stats-rules.js — 재생·방문을 "묶음"으로만 세는 규칙 (채팅 3-12)
// -----------------------------------------------------------------------------
// Workers판(src/index.js·ui.js), PHP판 음원 Worker(php/worker/media-worker.js), meshmelo 음원 Worker
// (php/worker/meshmelo/worker.js)가 같은 규칙을 쓴다. 두 음원 Worker 는 파일 하나로 붙여 넣는 방식이라
// 아래 "begin ~ end" 사이를 글자 그대로 복사해 둔다 → dev/stats-test/rules_same.mjs 가 세 벌이 같은지 확인한다.
//
// 저장하지 않는 것(개인정보): IP, 전체 User-Agent, 쿠키, 전체 주소. 남기는 것은 아래 묶음 이름뿐이다.
//   나라(Cloudflare 가 붙여 주는 2글자) · 기기(mobile/tablet/desktop) · 언어(브라우저 첫 언어 2~5글자)
//   유입(direct/search/social/aimusiclist/meshmelo/internal/other + 도메인 이름) · 재생 출처(site/aml/x)
// 세지 않는 것: 봇, 관리자 본인(로그인 쿠키 aml_s 가 있는 요청), 미리 읽기(prefetch), 곡 중간부터 받는 요청(되감기·이어 받기).
// -----------------------------------------------------------------------------

// == stats-rules begin ==
const ST_BOT = /bot\b|bot\/|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|whatsapp|skypeuripreview|headless|lighthouse|pingdom|uptimerobot|curl\/|wget\/|python|go-http|java\/|okhttp|axios|node-fetch|undici|scrapy|feedfetcher|mediapartners/i;
const ST_SEARCH = /(^|\.)(google\.[a-z.]+|bing\.com|naver\.com|daum\.net|yahoo\.[a-z.]+|duckduckgo\.com|baidu\.com|yandex\.[a-z.]+|ecosia\.org|seznam\.cz|qwant\.com|so\.com|sogou\.com|search\.brave\.com|startpage\.com)$/;
const ST_SOCIAL = /(^|\.)(facebook\.com|fb\.com|fb\.me|instagram\.com|threads\.net|threads\.com|t\.co|x\.com|twitter\.com|youtube\.com|youtu\.be|tiktok\.com|reddit\.com|linkedin\.com|lnkd\.in|pinterest\.[a-z.]+|kakao\.com|kakaocdn\.net|band\.us|line\.me|discord\.com|discord\.gg|t\.me|telegram\.org|soundcloud\.com|bsky\.app|tumblr\.com|weibo\.com|vk\.com|naver\.me|blog\.naver\.com|cafe\.naver\.com|suno\.com|udio\.com|bandcamp\.com|spotify\.com|music\.apple\.com)$/;
// 나라: Cloudflare 가 알려 준 2글자(없으면 XX)
function stCountry(request) {
  const c = String((request.cf && request.cf.country) || request.headers.get('cf-ipcountry') || '').toUpperCase();
  return /^[A-Z][A-Z0-9]$/.test(c) ? c : 'XX';
}
// 기기 묶음. 봇은 'bot' (세지 않는다)
function stDevice(ua) {
  ua = String(ua || '');
  if (!ua || ST_BOT.test(ua)) return 'bot';
  if (/iPad|Tablet|PlayBook|Silk|Kindle|SM-T\d|Nexus (7|9|10)\b/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return 'tablet';
  if (/Mobi|iPhone|iPod|Android|Windows Phone|IEMobile|Opera Mini/i.test(ua)) return 'mobile';
  return 'desktop';
}
// 언어: Accept-Language 의 첫 언어 (zh-tw·pt-br 만 지역 구분)
function stLang(al) {
  const m = /^\s*([a-zA-Z]{2,3})(?:[-_]([a-zA-Z0-9]{2,8}))?/.exec(String(al || ''));
  if (!m) return 'xx';
  const p = m[1].toLowerCase(), r = String(m[2] || '').toLowerCase();
  if (p === 'zh') return r === 'tw' || r === 'hk' || r === 'mo' || r === 'hant' ? 'zh-tw' : 'zh';
  if (p === 'pt') return r === 'br' ? 'pt-br' : 'pt';
  return p;
}
// 유입: [묶음, 도메인]. 같은 사이트 안에서 온 것은 internal, 주소가 없으면 direct
function stRef(referer, selfHost) {
  let h = '';
  try { h = referer ? new URL(referer).hostname.toLowerCase() : ''; } catch (e) { h = ''; }
  if (!h) return ['direct', ''];
  const self = String(selfHost || '').toLowerCase();
  if (h === self) return ['internal', ''];
  h = h.replace(/^www\./, '').replace(/^m\./, '');
  if (h.length > 64) h = h.slice(-64);
  if (h === 'aimusiclist.com') return ['aimusiclist', h];
  if (h === 'meshmelo.com' || /\.meshmelo\.com$/.test(h)) return ['meshmelo', h];
  if (ST_SEARCH.test(h)) return ['search', h];
  if (ST_SOCIAL.test(h)) return ['social', h];
  return ['other', h];
}
// 재생 시작 = 곡 처음(0바이트)부터 받는 요청. Safari 의 맛보기(bytes=0-1)·중간부터(되감기)는 세지 않는다
function stPlayStart(range) {
  if (!range) return true;
  const m = /^bytes=(\d+)-(\d*)$/.exec(String(range).trim());
  if (!m || +m[1] !== 0) return false;
  return m[2] === '' || +m[2] >= 1023;
}
// 관리자 본인(로그인 쿠키)·미리 읽기는 세지 않는다
function stSkip(request) {
  const h = request.headers;
  if (/(?:^|;\s*)aml_s=/.test(h.get('cookie') || '')) return true;
  const p = String(h.get('sec-purpose') || h.get('purpose') || '').toLowerCase();
  return p.indexOf('prefetch') >= 0 || p.indexOf('prerender') >= 0;
}
// 재생 출처: aimusiclist 화면(Origin) / 내 사이트 화면 / 그 밖(주소 직접 열기 등)
function stSource(request, selfHost, allowed) {
  const o = request.headers.get('origin') || '';
  if (o && allowed.indexOf(o) >= 0) return 'aml';
  const r = stRef(request.headers.get('referer') || '', selfHost);
  return r[0] === 'internal' ? 'site' : 'x';
}
// 재생 1번 → 묶음 6칸 (blob1~6). 봇·관리자·중간부터는 null
function stPlayBlobs(request, selfHost, id, allowed) {
  if (request.method !== 'GET' || stSkip(request) || !stPlayStart(request.headers.get('range'))) return null;
  const dev = stDevice(request.headers.get('user-agent'));
  if (dev === 'bot') return null;
  return ['p', stCountry(request), dev, stLang(request.headers.get('accept-language')), stSource(request, selfHost, allowed), String(id).slice(0, 64)];
}
// == stats-rules end ==

// 방문 1번(방문자 페이지 GET) → 묶음 6칸. 봇·관리자·미리 읽기는 null (Workers판만 — PHP·meshmelo 의 화면은 Apache 가 보낸다)
function stVisitBlobs(request, selfHost) {
  if (request.method !== 'GET' || stSkip(request)) return null;
  const dev = stDevice(request.headers.get('user-agent'));
  if (dev === 'bot') return null;
  const r = stRef(request.headers.get('referer') || '', selfHost);
  return ['v', stCountry(request), dev, stLang(request.headers.get('accept-language')), r[0], r[1]];
}

export { stCountry, stDevice, stLang, stRef, stPlayStart, stSkip, stSource, stPlayBlobs, stVisitBlobs };
