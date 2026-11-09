// src/seo.js — 3-27 검색에 잘 나오게 (곡·앨범 진짜 주소 · 머리 태그 · robots.txt · sitemap.xml)
// -----------------------------------------------------------------------------
// 같은 page.html(스킨 + 데이터, ui.js renderSkin 결과 = "바탕")에서 주소마다 다른 페이지를 만든다.
//   /  /song/{id}  /album/{id}  /m/{메뉴}  /songs  /albums   (없는 곡·앨범·메뉴 = 404 페이지)
// 하는 일 (스킨은 손대지 않아도 된다 — 스킨규격 "head 에 엔진이 SEO 태그를 넣는다"):
//   ① <html lang> = 사이트 기본 언어  ② 스킨 <head> 의 <title>·description·og·twitter·robots 메타는 빼고 엔진 것으로
//   ③ </head> 앞: description · canonical · og · twitter · (검색 끔이면 robots noindex) · google-site-verification(홈) · JSON-LD
//   ④ <main id="aml-content"> 안에 그 주소의 내용을 글자로 미리 그린다(자바스크립트 없이도 제목·아티스트·장르·길이·앨범·가사·다른 곡 링크)
//      → visitor.js 가 뜨면 같은 자리를 다시 그린다(이어받기). ⑤ <nav id="aml-menu"> 도 진짜 주소 링크로 미리.
// 순수 함수만 — R2·네트워크 없음. PHP 판 php/app/lib/seo.php 와 바이트까지 같은 결과(dev/php-test parity 의 seo 칸).
// 정규식은 두 언어가 똑같이 읽게 ASCII 만 쓴다(\s 대신 [ \t\r\n], \d 대신 [0-9]).
// -----------------------------------------------------------------------------

const ROUTE_RE = /^\/(?:(song|album|m)\/([a-z0-9_-]{1,64})|(songs|albums))$/;
const ROWS = { home: 20, list: 100, more: 6 };   // 미리 그리는 줄 수 (나머지는 sitemap·visitor.js)
const DESC_MAX = 160;
const LYRICS_MAX = 5000;

// 주소 → 화면. 맡지 않는 주소면 null
export function seoRoute(path) {
  if (path === '/') return { k: 'home', id: '' };
  const m = ROUTE_RE.exec(path);
  if (!m) return null;
  return m[1] ? { k: m[1], id: m[2] } : { k: m[3], id: '' };
}

// 언어팩 public/_app/lang-seo/{코드}.json (en 위에 덮어씀). raw = { en: {...}, xx: {...} }
export function seoStrings(en, xx) {
  const out = {};
  for (const src of [en, xx]) {
    if (!src || typeof src !== 'object' || Array.isArray(src)) continue;
    for (const k of Object.keys(src)) if (k !== '_' && typeof src[k] === 'string' && src[k] !== '') out[k] = src[k];
  }
  return out;
}

// ── 글자 도우미 ──
function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function tx(S, k, vars) {
  const s = typeof S[k] === 'string' ? S[k] : k;
  return s.replace(/\{([a-z_]+)\}/g, (m, n) => (vars && Object.prototype.hasOwnProperty.call(vars, n) ? String(vars[n]) : m));
}
function tn(S, k, n) { return tx(S, n === 1 && typeof S[k + '.one'] === 'string' ? k + '.one' : k + '.other', { n }); }
function flat(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
function clip(s, n) {
  const a = Array.from(s);
  return a.length > n ? a.slice(0, n - 1).join('').replace(/\s+$/, '') + '…' : s;
}
function fmt(sec) { const s = Math.max(0, sec | 0); const r = s % 60; return Math.floor(s / 60) + ':' + (r < 10 ? '0' : '') + r; }
function iso(sec) { const s = Math.max(0, sec | 0); return 'PT' + Math.floor(s / 60) + 'M' + (s % 60) + 'S'; }
function day(t) { return /^[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(t || '') ? String(t).slice(0, 10) : ''; }
function ldJson(o) {
  return JSON.stringify(o).replace(/</g, '\\u003c')
    .split(String.fromCharCode(0x2028)).join('\\u2028').split(String.fromCharCode(0x2029)).join('\\u2029');
}

// .srt → 가사 글자 (번호·시간 줄·빈 줄 빼고, 바로 앞과 같은 줄은 한 번만)
export function srtText(srt) {
  const out = [];
  for (const raw of String(srt || '').replace(/^﻿/, '').split(/\r?\n/)) {
    if (raw.indexOf('-->') >= 0) continue;
    const l = raw.replace(/<[^>]*>/g, '').replace(/\{\\[^}]*\}/g, '').trim();   // 글꼴 꾸밈 <i> · {\an8} 은 뺀다 (visitor.js srtText 와 같게)
    if (l === '' || /^[0-9]+$/.test(l)) continue;
    if (out.length && out[out.length - 1] === l) continue;
    out.push(l);
  }
  return clip(out.join('\n'), LYRICS_MAX);
}

// ── 데이터 도우미 (D = page 데이터, ui.js buildPageData 의 data) ──
function gname(d, k, lang) {
  const n = d.genres && d.genres[k];
  if (n && typeof n === 'object') {
    if (typeof n[lang] === 'string' && n[lang]) return n[lang];
    if (typeof n.en === 'string' && n.en) return n.en;
  }
  return k;
}
function byNew(a, b) {
  const x = String(a.published_at || ''), y = String(b.published_at || '');
  if (x !== y) return x < y ? 1 : -1;
  return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
}
function newest(list) { return list.slice().sort(byNew); }
// 모든 곡 최신순은 페이지마다 쓰므로 한 번만 정렬 (같은 데이터 배열이면 다시 쓴다 — Workers 메모리 30초 · PHP 판 페이지 만들기 1번)
const NEW = new WeakMap();
function newestTracks(d) { let v = NEW.get(d.tracks); if (!v) { v = newest(d.tracks); NEW.set(d.tracks, v); } return v; }
function menuLabel(d, m, lang) { return m.label ? m.label : gname(d, m.sub || m.main, lang); }
function menuTracks(d, m) { const k = m.sub || m.main; return d.tracks.filter((t) => t.genres.indexOf(k) >= 0); }
function abs(c, u) { return /^https?:\/\//.test(u) ? u : c.origin + u; }
function trackImg(t) { return t.il ? '/i/' + t.id + '?s=l&v=' + t.il : (t.img || ''); }
function albumOf(d, id) { for (const a of d.albums) if (a.track_ids.indexOf(id) >= 0) return a; return null; }

// ── 미리 그리는 조각 ──
function row(t) {
  const img = t.img ? '<img class="aml-ssr-thumb" loading="lazy" decoding="async" src="' + esc(t.img) + '" alt="" width="48" height="48">' : '<span class="aml-ssr-thumb is-empty"></span>';
  return '<li class="aml-ssr-row">' + img + '<a class="aml-ssr-link" href="/song/' + t.id + '">' + esc(t.title) + '</a>' +
    '<span class="aml-ssr-sub">' + esc(t.artist) + ' · ' + fmt(t.duration) + '</span></li>';
}
function rows(list) { return list.length ? '<ol class="aml-ssr-list">' + list.map(row).join('') + '</ol>' : ''; }
function albumCard(a) {
  return '<a class="aml-album" href="/album/' + a.id + '">' +
    (a.cover ? '<img class="aml-album-cover" loading="lazy" decoding="async" alt="" width="200" height="200" src="' + esc(a.cover) + '">' : '<span class="aml-album-cover is-empty"></span>') +
    '<span class="aml-album-title">' + esc(a.title) + '</span><span class="aml-album-artist">' + esc(a.artist) + '</span></a>';
}
function cards(list) { return '<div class="aml-albums">' + list.map(albumCard).join('') + '</div>'; }
function navHtml(d, route, S, lang) {
  const items = [['/', tx(S, 'nav.home'), route.k === 'home' || route.k === 'songs']];
  for (const m of d.menus) items.push(['/m/' + m.id, menuLabel(d, m, lang), route.k === 'm' && route.id === m.id]);
  if (d.albums.length) items.push(['/albums', tx(S, 'nav.albums'), route.k === 'albums' || route.k === 'album']);
  if (d.site.guestbook) items.push(['/#/gb', tx(S, 'nav.guestbook'), false]);
  if (d.socials && d.socials.length) items.push(['/#/links', tx(S, 'nav.links'), false]);
  return items.map((x) => '<a class="aml-menu-item' + (x[2] ? ' is-active' : '') + '" href="' + x[0] + '"' + (x[2] ? ' aria-current="page"' : '') + '>' + esc(x[1]) + '</a>').join('');
}
function crumbs(c, d, list) {
  const items = [{ '@type': 'ListItem', position: 1, name: d.site.name, item: c.origin + '/' }];
  list.forEach((x, i) => items.push({ '@type': 'ListItem', position: i + 2, name: x[0], item: c.origin + x[1] }));
  return { '@type': 'BreadcrumbList', itemListElement: items };
}
function moreSongs(d, t) {
  const pick = [], seen = { [t.id]: 1 };
  const add = (x) => { if (x && !seen[x.id] && pick.length < ROWS.more) { seen[x.id] = 1; pick.push(x); } };
  const byId = {};
  for (const x of d.tracks) byId[x.id] = x;
  const a = albumOf(d, t.id);
  if (a) {   // 같은 앨범에서 이 곡 다음부터 (끝나면 처음으로)
    const ids = a.track_ids.filter((id) => byId[id]);
    const i = ids.indexOf(t.id);
    for (let k = 1; k < ids.length; k++) add(byId[ids[(i + k) % ids.length]]);
  }
  const all = newestTracks(d);   // 최신순에서 이 곡 앞뒤로 번갈아
  const p = all.findIndex((x) => x.id === t.id);
  for (let k = 1; k < all.length && pick.length < ROWS.more; k++) { add(all[p + k]); add(all[p - k]); }
  return pick;
}

// ── 화면마다: 제목·설명·주소·그림·JSON-LD·본문 ──
function view(d, route, c, S, lyrics) {
  const lang = c.lang, site = d.site.name;
  const home = c.origin + '/';
  const artist = d.site.artist_name || site;
  const group = { '@type': 'MusicGroup', name: artist, url: home };
  if (route.k === 'home') {
    const first = newestTracks(d)[0];
    const img = c.img || (first ? trackImg(first) : '');
    const g = { '@context': 'https://schema.org', '@type': 'MusicGroup', name: artist, url: home };
    if (d.site.description) g.description = flat(d.site.description);
    if (img) g.image = abs(c, img);
    const same = (d.socials || []).map((x) => x.url).filter((u) => /^https:\/\//.test(u));
    if (same.length) g.sameAs = same;
    let main = '';
    if (d.albums.length) main += '<section class="aml-section aml-view-home-albums"><h2 class="aml-section-title">' + esc(tx(S, 'home.albums')) + '</h2>' + cards(newest(d.albums).slice(0, 12)) + '</section>';
    main += '<section class="aml-section aml-view-home-tracks"><h2 class="aml-section-title">' + esc(tx(S, 'home.songs')) + '</h2>' + rows(newestTracks(d).slice(0, ROWS.home)) +
      (d.tracks.length > ROWS.home ? '<p class="aml-ssr-more"><a href="/songs">' + esc(tx(S, 'home.see_all')) + '</a></p>' : '') + '</section>';
    return { status: 200, title: artist !== site ? site + ' — ' + artist : site, desc: d.site.description ? flat(d.site.description) : tx(S, 'desc.home', { artist, site }),
      canon: home, type: 'website', img, ld: g, main, gsv: true };
  }
  if (route.k === 'song') {
    const t = d.tracks.find((x) => x.id === route.id);
    if (!t) return null;
    const canon = c.origin + '/song/' + t.id;
    const a = albumOf(d, t.id);
    const gn = t.genres.map((k) => gname(d, k, lang));
    const img = trackImg(t);
    const rec = { '@type': 'MusicRecording', '@id': canon + '#recording', name: t.title, url: canon, byArtist: { '@type': 'MusicGroup', name: t.artist, url: home }, duration: iso(t.duration), genre: gn };
    if (img) rec.image = abs(c, img);
    if (a) rec.inAlbum = { '@type': 'MusicAlbum', name: a.title, url: c.origin + '/album/' + a.id };
    if (day(t.published_at)) rec.datePublished = day(t.published_at);
    const ly = lyrics ? String(lyrics) : '';
    const art = img ? '<img class="aml-song-art" src="' + esc(img) + '" alt="' + esc(t.title) + '" width="400" height="400">' : '<span class="aml-song-art is-empty"></span>';
    const more = moreSongs(d, t);
    const main = '<section class="aml-section aml-view-song"><div class="aml-song-head">' + art + '<div class="aml-song-info">' +
      '<h1 class="aml-song-title">' + esc(t.title) + '</h1><p class="aml-song-artist"><a href="/">' + esc(t.artist) + '</a></p>' +
      '<p class="aml-song-meta">' + gn.map((n, i) => '<span class="aml-genre' + (i ? '' : ' is-main') + '">' + esc(n) + '</span>').join('') + '<span class="aml-song-time">' + fmt(t.duration) + '</span></p>' +
      (a ? '<p class="aml-song-album">' + esc(tx(S, 'song.album')) + ': <a href="/album/' + a.id + '">' + esc(a.title) + '</a></p>' : '') + '</div></div>' +
      (ly ? '<div class="aml-song-lyrics"><h2 class="aml-section-title">' + esc(tx(S, 'song.lyrics')) + '</h2><p class="aml-song-lyrics-text">' + ly.split('\n').map(esc).join('<br>') + '</p></div>' : '') +
      (more.length ? '<div class="aml-song-more"><h2 class="aml-section-title">' + esc(tx(S, 'song.more')) + '</h2>' + rows(more) + '</div>' : '') + '</section>';
    return { status: 200, title: t.title + ' — ' + t.artist + ' | ' + site, desc: tx(S, 'desc.song', { title: t.title, artist: t.artist, site }) + ' ' + gn.join(' · ') + ' · ' + fmt(t.duration),
      canon, type: 'music.song', img, ld: { '@context': 'https://schema.org', '@graph': [rec, crumbs(c, d, [[tx(S, 'songs.title'), '/songs'], [t.title, '/song/' + t.id]])] }, main };
  }
  if (route.k === 'album') {
    const a = d.albums.find((x) => x.id === route.id);
    if (!a) return null;
    const canon = c.origin + '/album/' + a.id;
    const byId = {};
    for (const x of d.tracks) byId[x.id] = x;
    const list = a.track_ids.map((id) => byId[id]).filter(Boolean);
    const al = { '@type': 'MusicAlbum', name: a.title, url: canon, byArtist: { '@type': 'MusicGroup', name: a.artist, url: home }, numTracks: list.length,
      track: list.map((t) => ({ '@type': 'MusicRecording', name: t.title, url: c.origin + '/song/' + t.id, duration: iso(t.duration) })) };
    if (a.cover) al.image = abs(c, a.cover);
    if (a.desc) al.description = flat(a.desc);
    if (day(a.published_at)) al.datePublished = day(a.published_at);
    const main = '<section class="aml-section aml-view-album"><div class="aml-album-head">' +
      (a.cover ? '<img class="aml-album-cover" alt="' + esc(a.title) + '" width="200" height="200" src="' + esc(a.cover) + '">' : '<span class="aml-album-cover is-empty"></span>') +
      '<div class="aml-album-info"><h1 class="aml-section-title">' + esc(a.title) + '</h1>' + (a.desc ? '<p class="aml-album-desc">' + esc(a.desc) + '</p>' : '') +
      '<p class="aml-album-artist"><a href="/">' + esc(a.artist) + '</a></p><p class="aml-album-count">' + esc(tn(S, 'album.count', list.length)) + '</p></div></div>' + rows(list) + '</section>';
    return { status: 200, title: a.title + ' — ' + a.artist + ' | ' + site, desc: a.desc ? flat(a.desc) : tx(S, 'desc.album', { title: a.title, artist: a.artist, site }) + ' ' + tn(S, 'album.count', list.length),
      canon, type: 'music.album', img: a.cover || '', ld: { '@context': 'https://schema.org', '@graph': [al, crumbs(c, d, [[tx(S, 'albums.title'), '/albums'], [a.title, '/album/' + a.id]])] }, main };
  }
  if (route.k === 'm') {
    const m = d.menus.find((x) => x.id === route.id);
    if (!m) return null;
    const label = menuLabel(d, m, lang), list = newest(menuTracks(d, m));
    return { status: 200, title: label + ' | ' + site, desc: tx(S, 'desc.menu', { menu: label, artist, site }), canon: c.origin + '/m/' + m.id, type: 'website', img: c.img || (list[0] ? trackImg(list[0]) : ''),
      ld: Object.assign({ '@context': 'https://schema.org' }, crumbs(c, d, [[label, '/m/' + m.id]])),
      main: '<section class="aml-section aml-view-menu"><h1 class="aml-section-title">' + esc(label) + '</h1>' + rows(list.slice(0, ROWS.list)) + '</section>' };
  }
  if (route.k === 'songs') {
    const list = newestTracks(d), title = tx(S, 'songs.title');
    return { status: 200, title: title + ' | ' + site, desc: tx(S, 'desc.songs', { artist, site }), canon: c.origin + '/songs', type: 'website', img: c.img || (list[0] ? trackImg(list[0]) : ''),
      ld: Object.assign({ '@context': 'https://schema.org' }, crumbs(c, d, [[title, '/songs']])),
      main: '<section class="aml-section aml-view-tracks"><h1 class="aml-section-title">' + esc(title) + '</h1>' + rows(list.slice(0, ROWS.list)) + '</section>' };
  }
  if (route.k === 'albums') {
    if (!d.albums.length) return null;
    const title = tx(S, 'albums.title');
    return { status: 200, title: title + ' | ' + site, desc: tx(S, 'desc.albums', { artist, site }), canon: c.origin + '/albums', type: 'website', img: c.img || newest(d.albums)[0].cover || '',
      ld: Object.assign({ '@context': 'https://schema.org' }, crumbs(c, d, [[title, '/albums']])),
      main: '<section class="aml-section aml-view-albums"><h1 class="aml-section-title">' + esc(title) + '</h1>' + cards(newest(d.albums)) + '</section>' };
  }
  return null;
}
function notFound(d, S) {
  return { status: 404, title: tx(S, 'nf.title') + ' | ' + d.site.name, desc: '', canon: '', type: '', img: '', ld: null,
    main: '<section class="aml-section aml-view-404"><h1 class="aml-section-title">' + esc(tx(S, 'nf.title')) + '</h1><p class="aml-empty">' + esc(tx(S, 'nf.text')) + ' <a href="/">' + esc(tx(S, 'nf.home')) + '</a></p></section>' };
}

const META_RE = /<meta\b[^>]*\b(?:name|property)[ \t\r\n]*=[ \t\r\n]*["']?(?:description|robots|googlebot|google-site-verification|og:[a-z:_]+|twitter:[a-z:_]+)(?=["' \t\r\n/>])[^>]*>[ \t\r\n]*/gi;
// 스킨 검사(tools/skin-check.mjs)용: 스킨이 직접 넣은, 엔진이 넣는 태그와 같은 종류의 메타 (경고만 — 페이지에서는 엔진이 빼고 자기 것을 넣는다)
export function seoDupTags(html) { return String(html).match(META_RE) || []; }
const TITLE_RE = /<title\b[^>]*>[\s\S]*?<\/title[ \t\r\n]*>[ \t\r\n]*/gi;
const MAIN = '<main id="aml-content" class="aml-content"></main>';
const NAV = '<nav id="aml-menu" class="aml-menu"></nav>';

// 바탕(renderSkin 결과) + 화면 → 완성 페이지. c = { origin, lang, gsv, off, img } (img = 사이트 대표 그림 주소, 없으면 '')
// lyrics = 그 곡 가사 글자(srtText 결과, 없으면 ''). 반환 { status: 200|404, html }
export function seoPage(base, d, route, c, S, lyrics) {
  const v = view(d, route, c, S, lyrics) || notFound(d, S);
  let html = String(base);
  // ① <html lang>
  const lang = esc(c.lang || 'en');
  html = html.replace(/<html\b[^>]*>/i, (tag) => {
    const re = /([ \t\r\n])lang[ \t\r\n]*=[ \t\r\n]*(?:"[^"]*"|'[^']*'|[^ \t\r\n>]+)/i;
    return re.test(tag) ? tag.replace(re, (m, sp) => sp + 'lang="' + lang + '"') : '<html lang="' + lang + '"' + tag.slice(5);
  });
  // ② ③ 머리 태그
  const desc = v.desc ? clip(flat(v.desc), DESC_MAX) : '';
  const img = v.img ? abs(c, v.img) : '';
  const tags = ['<title>' + esc(v.title) + '</title>'];
  if (desc) tags.push('<meta name="description" content="' + esc(desc) + '">');
  if (v.canon) tags.push('<link rel="canonical" href="' + esc(v.canon) + '">');
  if (c.off || v.status !== 200) tags.push('<meta name="robots" content="noindex">');
  if (v.canon) {
    tags.push('<meta property="og:type" content="' + v.type + '">', '<meta property="og:site_name" content="' + esc(d.site.name) + '">',
      '<meta property="og:title" content="' + esc(v.title) + '">', '<meta property="og:description" content="' + esc(desc) + '">',
      '<meta property="og:url" content="' + esc(v.canon) + '">');
    if (img) tags.push('<meta property="og:image" content="' + esc(img) + '">');
    tags.push('<meta name="twitter:card" content="summary">', '<meta name="twitter:title" content="' + esc(v.title) + '">', '<meta name="twitter:description" content="' + esc(desc) + '">');
    if (img) tags.push('<meta name="twitter:image" content="' + esc(img) + '">');
  }
  if (v.gsv && c.gsv) tags.push('<meta name="google-site-verification" content="' + esc(c.gsv) + '">');
  if (v.ld) tags.push('<script type="application/ld+json">' + ldJson(v.ld) + '</script>');
  const head = tags.join('\n') + '\n';
  const hm = /<\/head[ \t\r\n]*>/i.exec(html);
  let at = hm ? hm.index : -1;
  if (at < 0) { const bm = /<body\b/i.exec(html); at = bm ? bm.index : 0; }
  const top = html.slice(0, at).replace(TITLE_RE, '').replace(META_RE, '');
  html = top + head + html.slice(at);
  // ④ ⑤ 본문·메뉴 미리 그리기
  const mi = html.indexOf(MAIN);
  if (mi >= 0) html = html.slice(0, mi) + MAIN.slice(0, -7) + v.main + '</main>' + html.slice(mi + MAIN.length);
  const ni = html.indexOf(NAV);
  if (ni >= 0) html = html.slice(0, ni) + NAV.slice(0, -6) + navHtml(d, v.status === 200 ? route : { k: '', id: '' }, S, c.lang) + '</nav>' + html.slice(ni + NAV.length);
  return { status: v.status, html };
}

// page.html 안의 데이터(<script id="aml-data">) 꺼내기 (Workers: 메모리에 30초 보관한 바탕에서 1번)
export function seoData(base) {
  const m = /<script type="application\/json" id="aml-data">([\s\S]*?)<\/script>/.exec(base);
  try { return m ? JSON.parse(m[1]) : null; } catch (_) { return null; }
}

// ── robots.txt · sitemap.xml ──
export function seoRobots(origin, off) {
  if (off) return 'User-agent: *\nDisallow: /\n';
  return 'User-agent: *\n' +
    ['/admin/', '/api/', '/a/', '/install/', '/.well-known/', '/_app/admin', '/_app/lang-admin/', '/_app/lang-help/', '/_app/mp3enc/', '/_app/wav-mp3.js', '/_app/preview.js', '/_app/help.js']
      .map((p) => 'Disallow: ' + p + '\n').join('') +
    '\nSitemap: ' + origin + '/sitemap.xml\n';
}
export function seoSitemap(d, origin) {
  const urls = [];
  const put = (p, t) => urls.push('<url><loc>' + esc(origin + p) + '</loc>' + (day(t) ? '<lastmod>' + day(t) + '</lastmod>' : '') + '</url>');
  const tr = newestTracks(d), al = newest(d.albums);
  const top = tr.length ? tr[0].published_at : (al.length ? al[0].published_at : '');
  put('/', top);
  if (tr.length) put('/songs', tr[0].published_at);
  if (al.length) put('/albums', al[0].published_at);
  for (const m of d.menus) { const l = newest(menuTracks(d, m)); if (l.length) put('/m/' + m.id, l[0].published_at); }
  for (const a of al) put('/album/' + a.id, a.published_at);
  for (const t of tr) put('/song/' + t.id, t.published_at);
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n';
}

// google-site-verification 값: 관리 화면에 메타 태그 전체를 붙여 넣어도, 값만 넣어도 된다. 틀리면 null, 비우면 ''
export function cleanGsv(v) {
  const s = String(v == null ? '' : v).trim();
  if (s === '') return '';
  const m = /content[ \t\r\n]*=[ \t\r\n]*["']([^"']*)["']/i.exec(s);
  const x = (m ? m[1] : s).trim();
  return /^[A-Za-z0-9_-]{10,100}$/.test(x) ? x : null;
}
