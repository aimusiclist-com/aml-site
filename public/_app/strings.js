/* public/_app/strings.js — 화면 문장(영어 기본) + 언어팩 불러오기 (방문자·관리 화면 공용)
 * -----------------------------------------------------------------------------
 * 규칙
 *  - 화면에 보이는 문장은 모두 여기 키로 넣고, 코드에서는 AML.t('키')로만 쓴다.
 *  - 영어(en)가 기본이자 "원본". 다른 언어에 키가 없으면 영어 → 키 순서로 보여준다.
 *  - 단복수: 'key.one' / 'key.other' + AML.tn('key', n). (한국어·일본어는 .other만 있으면 됨)
 *  - {name} 자리는 AML.t('키', { name: 값 })으로 채운다.
 *
 * 언어팩 (채팅 3-3)
 *  - 파일: public/_app/lang/{코드}.js  한 개 = 언어 한 개. 형식은 lang/ko.js 참고.
 *  - 새 언어를 넣을 때 고치는 곳은 바로 아래 AML.LANGS 한 줄뿐이다.
 *    (정적 파일은 폴더 안 파일 목록을 알 수 없어서, 있는 언어를 여기 적어 둔다)
 *  - 방문자가 고른 언어 파일 1개만 불러온다. 정적 파일이라 Worker·R2 요청이 늘지 않는다.
 *  - 사용 순서: AML.pickLang(사이트 기본 언어) → AML.setLang(코드) → 화면 그리기
 *  - 번역 빠짐 검사: node tools/lang-check.js  (또는 브라우저 콘솔에서 AML.missingKeys('ko'))
 * -----------------------------------------------------------------------------
 */
(function () {
  'use strict';
  var AML = (window.AML = window.AML || {});

  // ★ 언어 목록: { 코드: '그 언어로 쓴 이름' }. 새 언어는 여기에 한 줄 추가 + lang/{코드}.js 파일.
  AML.LANGS = { en: 'English', ko: '한국어', ja: '日本語', de: 'Deutsch', fr: 'Français', es: 'Español', it: 'Italiano', 'pt-br': 'Português (Brasil)', ru: 'Русский', tr: 'Türkçe', vi: 'Tiếng Việt', id: 'Bahasa Indonesia', th: 'ไทย', hi: 'हिन्दी', 'zh-tw': '繁體中文' };

  AML.V = '17';               // (3-22) 언어팩 파일 주소 뒤에 붙이는 버전 (?v=5). 언어팩을 고쳐 배포하면 올린다. 17 = 3.31 프로필 문장
  AML.STORE_KEY = 'aml_lang'; // 방문자가 고른 언어를 기억하는 브라우저 저장소 이름
  AML.strings = AML.strings || {};

  AML.strings.en = {
    // ── 방문자 화면 ──
    'nav.home': 'Home',
    'nav.albums': 'Albums',
    'home.albums': 'Albums',
    'home.tracks': 'All tracks',
    'list.empty': 'No tracks yet.',
    'list.more': 'Load more',
    'albums.empty': 'No albums yet.',
    'album.track_count.one': '{n} track',
    'album.track_count.other': '{n} tracks',
    'album.play_all': 'Play all',
    'album.not_found': 'Album not found.',
    // 3-27 곡 화면(/song/{id}) · 없는 주소 · ⋯ 메뉴 "곡 페이지"
    'song.not_found': 'Song not found.',
    'song.album': 'Album',
    'song.lyrics': 'Lyrics',
    'song.more': 'More songs',
    'page.not_found': 'This page does not exist.',
    'track.page': 'Song page',
    'menu.not_found': 'This menu no longer exists.',
    'track.play': 'Play {title}',
    'player.play': 'Play',
    'player.pause': 'Pause',
    'player.prev': 'Previous',
    'player.next': 'Next',
    'player.seek': 'Seek',
    'player.unavailable': 'This track is not available right now. Skipping.',
    'lang.label': 'Language',
    // 3-9 재생 바·전체 화면 재생·머리 영역·곡 줄 ⋯ 메뉴
    'home.see_all': 'See all',
    // 3-12 모든 곡 화면 [최신순 | 인기순] · 순위 칸(▲ 오름 ▼ 내림 – 그대로 NEW 새로 들어옴)
    'sort.label': 'Sort tracks',
    'sort.latest': 'Latest',
    'sort.popular': 'Popular',
    'rank.label': 'Rank {n}',
    'rank.up': 'up {n}',
    'rank.down': 'down {n}',
    'rank.same': 'no change',
    'rank.new': 'NEW',
    'rank.new_say': 'new entry',
    'rank.note': 'Ranked by plays in the last 7 days. Updated once a day.',
    // 3-14 곡 줄 재생 횟수 (아티스트가 방문자에게 보이기를 켰을 때) · 관리자 본인에게만 보이는 설명
    'plays.count.one': '{n} play',
    'plays.count.other': '{n} plays',
    'plays.tip': '{w} in the last 7 days · {d} today',
    'plays.only_you': 'Only you can see this',
    // 3-18 좋아요 ♥ (숨은 이름) · 재생 안내 한 줄(재생 바 위 알약) · 방명록 쪽 번호 묶음 이름
    'like.add': 'Like {title}',
    'like.remove': 'Remove like from {title}',
    // 3-25 + aimusiclist 담기 버튼 (설명만. 이 곡이 aimusiclist에 공개됐고 담기 기능이 켜져 있을 때만 보인다)
    'add.aml': 'Add {title} to your aimusiclist playlist — no sign-in needed',
    'notice.play_from': 'Playing this song and every song after it',
    'notice.play_next': 'Plays next',
    'gb.pages': 'Guestbook pages',
    'hero.track_count.one': '{n} track',
    'hero.track_count.other': '{n} tracks',
    'hero.play_all': 'Play',
    'hero.shuffle': 'Shuffle',
    'hero.more': 'more',
    'track.more': 'More options for {title}',
    'track.play_next': 'Play next',
    'track.gb_write': 'Write about this song',
    'player.label': 'Player',
    'player.now': 'Now playing',
    'player.open': 'Open player',
    'player.close': 'Close player',
    'player.volume': 'Volume',
    'player.mute': 'Mute',
    'player.unmute': 'Unmute',
    'player.lyrics': 'Lyrics',

    // ── 오류 코드 (서버가 보낸 err.* 를 문장으로) ──
    'err.unknown': 'Something went wrong. ({code})',
    'err.network': 'Network error. Check your connection and try again.',
    // 3-2 스킨·메뉴 (src/ui.js)
    'err.skin.empty': 'The skin file is empty.',
    'err.skin.too_large': 'The skin file is too large. Max {max_kb} KB.',
    'err.skin.placeholder': 'The skin must contain {name} exactly once.',
    'err.skin.forbidden': 'The skin contains something that is not allowed: {what}',
    'err.skin.name_invalid': 'Skin name: use 1–32 lowercase letters, numbers, - or _.',
    'err.skin.not_found': 'Skin not found.',
    'err.skin.builtin': 'Built-in skins cannot be changed or deleted.',
    'err.menu.invalid': 'The menu data is not valid.',
    'err.menu.too_many': 'You can have up to {max} menus.',
    // 3-1 Worker (3-1 README 6장)
    'err.server': 'Server error. Please try again.',
    'err.not_found': 'Not found.',
    'err.method_not_allowed': 'This action is not allowed.',
    "err.auth.invalid_token": "Wrong admin password.",
    'err.site.not_configured': 'This site is not fully set up yet (a required setting is missing).',
    'err.request.invalid': 'Some input is not valid. ({field})',
    'err.request.too_large': 'The data you sent is too large.',
    'err.conflict': 'Changed somewhere else. Reloaded the latest data.',
    'err.upload.too_large': 'The file is too large.',
    'err.upload.type_invalid': 'This file type is not allowed.',
    'err.upload.length_required': 'The file is empty or its size is unknown.',
    'err.range_invalid': 'Could not play this part of the file.',
    'err.track.no_audio': 'This track has no audio file yet.',
    'err.track.in_public_album': 'This track is in a public album. Make the album private first.',
    'err.track.duration_invalid': 'Track length must be 30 seconds to 15 minutes.',
    // 연동규약 7장 (우리사이트와 주고받는 오류)
    "err.auth.invalid_secret": "aimusiclist.com did not accept this site's secret key. It reconnects automatically.",
    'err.site.not_found': 'This site is not registered on aimusiclist.com.',
    'err.site.url_invalid': 'The site address is not valid. It must start with https://.',
    'err.site.url_taken': 'This site address is already registered.',
    'err.site.limit_reached': 'You can register up to 3 sites.',
    "err.site.verify_failed": "aimusiclist.com could not verify this site. It retries automatically.",
    'err.site.offline': 'The site is not responding.',
    'err.catalog.invalid': 'The public list has a format error.',
    'err.catalog.too_large': 'Too many public tracks or albums (max 1,000 tracks, 100 albums).',
    'err.schema.unsupported': 'This list version is not supported.',
    'err.track.genre_invalid': 'Choose a main genre.',
    'err.track.unavailable': 'This track is private or cannot be played.',
    'err.album.track_count': 'A public album needs 6 to 35 tracks.',
    'err.rate_limited': 'Too many requests. Try again in {retry_after} seconds.',

    // ── 관리 화면 (B) ──
    'admin.title': 'Site admin',
    "admin.login.title": "Log in",
    'admin.login.button': 'Log in',
    'admin.logout': 'Log out',
    'admin.view_site': 'View site',
    'admin.loading': 'Loading…',
    'admin.saved': 'Saved.',
    'admin.genres.sample': 'Could not reach aimusiclist.com. Using the built-in genre list.',
    'admin.tab.tracks': 'Tracks',
    'admin.tab.albums': 'Albums',
    'admin.tab.menus': 'Menus',
    'admin.tab.skins': 'Skins',
    'admin.tab.site': 'Site info',

    "track.upload.title": "Upload songs",
    "track.upload.files": "MP3 or M4A, up to 15 MB each, 30 seconds – 15 minutes",
    'track.upload.bad_type': '{file}: only MP3 or M4A files.',
    'track.upload.too_big': '{file}: larger than 15 MB.',
    'track.upload.bad_length': '{file}: length must be 30 seconds to 15 minutes.',
    'track.upload.no_length': '{file}: could not read the length of this file.',
    'track.field.title': 'Title',
    'track.field.artist': 'Artist',
    'track.field.genre_main': 'Main genre',
    'track.field.genre_sub1': 'Extra genre 1',
    'track.field.genre_sub2': 'Extra genre 2',
    'track.field.none': '— none —',
    'track.field.choose': '— choose —',
    'track.field.replace_audio': 'Replace audio (optional)',
    'track.list.title': 'My tracks',
    'track.list.empty': 'No tracks yet. Upload your first track above.',
    'track.col.title': 'Title',
    'track.col.genres': 'Genres',
    'track.col.length': 'Length',
    'track.no_audio': 'No audio',
    "track.in_album": "In a published album",
    'track.preview': 'Preview',
    'track.stop': 'Stop',
    'track.edit': 'Edit',
    'track.delete': 'Delete',
    'track.delete.confirm': 'Delete "{title}"? The audio file is deleted too.',
    'track.save': 'Save track',
    'track.cancel': 'Cancel',

    'album.form.new': 'New album',
    'album.form.edit': 'Edit album',
    'album.field.title': 'Album title',
    'album.field.cover': "Cover image (optional)",
    'album.field.pick': 'Choose tracks (in order)',
    'album.field.selected': 'Selected: {n}/35. To make it public, choose 6–35 tracks.',
    'album.up': 'Up',
    'album.down': 'Down',
    'album.remove': 'Remove',
    'album.save': 'Save album',
    'album.list.title': 'My albums',
    'album.list.empty': 'No albums yet.',
    'album.public_rule': 'Needs 6–35 tracks with audio',
    'album.delete.confirm': 'Delete album "{title}"? The tracks are kept.',

    'skin.current': 'In use',
    // 3-9 프로필 자르기·안내·스킨 탭
    'crop.title': 'Profile photo',
    'crop.help': 'Drag the photo to move it. Zoom with the slider, the mouse wheel or two fingers.',
    'crop.area': 'Crop area. Arrow keys move the photo, + and − zoom.',
    'crop.zoom': 'Zoom',
    'crop.zoom_in': 'Zoom in',
    'crop.zoom_out': 'Zoom out',
    'crop.rotate': 'Rotate',
    'crop.preview': 'Preview',
    'crop.apply': 'Apply',
    'profile.note': 'Add a profile photo — it also appears next to your songs on aimusiclist.com.',
    'profile.note.go': 'Add photo',
    'skin.installed': 'Installed',
    'skin.use': 'Use this skin',
    'skin.builtin': 'Built-in',
    'skin.download': 'Download (to edit)',
    'skin.delete': 'Delete',
    'skin.delete.confirm': 'Delete skin "{name}"?',
    'skin.upload.title': 'Upload a skin',
    'skin.upload.help': 'One .html file made by the skin guide (docs/스킨규격.md). Same name = replace.',
    'skin.upload.name': 'Skin name (a–z, 0–9, - _)',
    'skin.upload.file': 'Skin file (.html, up to {max_kb} KB)',
    'skin.upload.button': 'Upload skin',
    'skin.applied': 'Skin applied. Visitors see it within 30 seconds.',

    'site.field.name': 'Site name',
    'site.field.artist': 'Artist name',
    'site.field.description': 'Short description (up to 200 characters)',
    'site.field.lang': 'Main language of your site',
    'site.save': 'Save site info',

    // ── 메뉴 만들기 (C) ──
    'menu.title': 'Menus on your site',
    "menu.help": "Each menu shows the songs of one genre on your site. Menus are saved right away.",
    'menu.add': 'Add menu',
    'menu.edit': 'Edit menu',
    'menu.step1': '1. Main genre (from aimusiclist.com)',
    'menu.step2': '2. Detailed genre (optional)',
    'menu.sub_all': 'All of {genre}',
    'menu.choose_main_first': 'Choose a main genre first',
    'menu.label': '3. Menu name (optional)',
    'menu.label_hint': 'Empty = genre name ({genre})',
    'menu.save': 'Save menu',
    "menu.list_empty": "No menus yet. Visitors see only \"Home\" and \"Albums\".",
    "menu.count.one": "{n} song",
    "menu.count.other": "{n} songs",
    'menu.unknown_genre': 'Genre not in the list',
    'menu.duplicate': 'A menu for this genre already exists.',
    'menu.delete.confirm': 'Delete menu "{name}"? Tracks are not deleted.',
    'menu.saved': 'Menu saved. Visitors see it within 30 seconds.',
    'menu.limit': 'You can have up to {max} menus.',
    // ── 3-5: 설치·로그인·업로드·사용량·aimusiclist 연결 ──
    "admin.link": "Admin",
    "err.auth.required": "Please log in again.",
    "err.auth.no_admin": "No admin account yet. Open your site address to create one.",
    "err.auth.wrong_login": "Wrong email or password.",
    "err.auth.wrong_password": "The current password is wrong.",
    "err.auth.locked": "Too many wrong tries. Try again in {minutes} minutes.",
    "err.auth.origin": "This request came from another site and was blocked.",
    "err.setup.done": "An admin account already exists. Please log in.",
    "err.setup.email_invalid": "Enter a valid email address.",
    "err.setup.password_short": "The password must be at least {min} characters.",
    "err.setup.password_mismatch": "The two passwords are different.",
    "err.setup.legacy_token": "The old admin password (AML_ADMIN_TOKEN) is wrong.",
    "err.cf.no_token": "Enter the Cloudflare usage token.",
    "err.cf.token_format": "This does not look like a Cloudflare token. Copy it again.",
    "err.cf.token_invalid": "Cloudflare rejected this token (wrong, expired or deleted).",
    "err.cf.no_account": "This token cannot see your account list (the \"Account Settings: Read\" line is missing). Enter your Account ID below, or make the token again with the button (both lines are filled in).",
    "err.cf.permission": "The token lacks the \"Account Analytics: Read\" permission. Make it again with the button below (2 permission lines).",
    "err.cf.unreachable": "Could not reach Cloudflare. Try again in a moment.",
    "err.cf.query_failed": "Cloudflare could not return the usage numbers. ({message})",
    "err.cf.choose_account": "Choose which Cloudflare account this site is in.",
    "err.aml.unreachable": "Could not reach aimusiclist.com.",
    "err.aml.not_ready": "aimusiclist.com is not accepting new sites yet.",
    "err.aml.http": "aimusiclist.com answered with an error ({status}).",
    "err.aml.no_origin": "The site address is unknown yet. Open the admin page once.",
    "err.artist.too_many": "You can add up to {max} artists.",
    "err.site.suspended": "This site was blocked by aimusiclist.com. Contact aimusiclist.com.",
    "setup.title": "Create your admin account",
    "setup.intro": "From now on you log in with this email and password to manage your music.",
    "setup.legacy": "Old admin password (AML_ADMIN_TOKEN)",
    "setup.legacy_help": "This site was installed the old way. Enter the AML_ADMIN_TOKEN you used before, once. After this you will not need it.",
    "setup.email": "Email",
    "setup.email_hint": "Using your Cloudflare sign-up email makes it easy to remember. It is not shown on your site.",
    "setup.password": "Password (6+ characters)",
    "setup.password2": "Password again",
    "setup.token": "Cloudflare usage token (required, read-only)",
    "setup.token_checking": "Checking the token…",
    "setup.token_ok": "Token OK (account: {account})",
    "setup.token_choose": "This token can see several accounts. Choose the one this site is in.",
    "setup.token_needed": "Check the token first (see the message under the token box).",
    "setup.account": "Cloudflare account",
    "setup.button": "Create admin",
    "token.guide.title": "How to make the usage token (2 minutes)",
    "token.guide.1": "Press the button. Cloudflare opens (log in if asked).",
    "token.guide.open": "Make token on Cloudflare",
    "token.guide.2": "Check the two permission lines: Account · Account Analytics · Read and Account · Account Settings · Read. They are filled in for you. (If they are empty: Create Custom Token → add these two lines.)",
    "token.guide.3": "Scroll down, press \"Continue to summary\", then \"Create Token\".",
    "token.guide.4": "Press \"Copy\" and paste the token in the box above. It is shown only once.",
    "token.guide.5": "This token can only read usage numbers and your account name. It cannot change or delete anything.",
    "auth.left": "({n} tries left before a 15-minute lock)",
    "help.forgot.title": "Forgot your password?",
    "help.forgot.1": "Cloudflare dashboard → R2 Object Storage → open your bucket (aml-music).",
    "help.forgot.2": "Open the \"meta\" folder, select the file \"admin.json\" and delete it. Delete only this one file.",
    "help.forgot.3": "Open your site address. The \"Create your admin account\" screen appears again.",
    "help.forgot.4": "Your songs, albums and aimusiclist.com connection are kept.",
    "usage.title": "Cloudflare free usage",
    "usage.updated": "Updated {time} (refreshes every 10 min)",
    "usage.refresh": "Refresh",
    "usage.r2_storage": "R2 storage (free 10 GB)",
    "usage.r2_class_a": "R2 writes this month (free 1 million)",
    "usage.r2_class_b": "R2 reads this month (free 10 million)",
    "usage.workers": "Workers requests today (free 100,000)",
    "usage.note_r2": "R2: going over the free amount is charged to your Cloudflare account.",
    "usage.note_workers": "Workers: over 100,000 requests the site stops for the rest of the day (no charge; resets 00:00 UTC = 09:00 KST).",
    "usage.uploaded": "Audio uploaded from this admin page: {size}",
    "usage.failed": "Could not read the usage:",
    "usage.fix_token": "Enter a new token in Site info → Admin account.",
    "aml.ok": "aimusiclist.com: connected ({site_id})",
    "aml.env": "(using AML_SITE_ID / AML_SITE_SECRET from Cloudflare settings)",
    "aml.pending": "Connecting to aimusiclist.com…",
    "aml.fail": "aimusiclist.com: not connected — {reason}",
    "aml.next": "Next automatic try: {time}",
    "aml.stopped": "Automatic retry stopped.",
    "aml.none": "aimusiclist.com: not connected yet. It connects by itself when you publish your first song.",
    "aml.retry": "Try now",
    "aml.saved_on": "Saved. It will be on aimusiclist.com shortly.",
    "aml.saved_off": "Saved. Removed from aimusiclist.com (still on your site).",
    "upload.drop": "Drag and drop audio files here (up to {max} at once), or",
    "upload.choose": "Choose files",
    "upload.title_note": "The file name becomes the song title (without the extension). You can change it later.",
    "upload.common": "Apply to all songs in this upload",
    "upload.aml.label": "Also publish on aimusiclist.com",
    "upload.aml.text": "Put your music out into the world. Listeners everywhere can hear it, and the most-loved songs climb the Top 100 chart, carrying your name and your site with them.",
    "upload.aml.off": "Uncheck to keep it on this site only.",
    "upload.start": "Upload {n} song(s)",
    "upload.retry": "Retry failed songs",
    "upload.clear": "Clear list",
    "upload.progress": "Uploading… {i} of {n} done",
    "upload.done": "{ok} of {n} songs uploaded and saved.",
    "upload.failed_some": "{n} failed — press \"Retry failed songs\".",
    "upload.too_many": "Only {max} songs at a time. {n} file(s) were not added.",
    "upload.st.wait": "Waiting",
    "upload.st.check": "Checking",
    "upload.st.up": "Uploading",
    "upload.st.done": "Done",
    "upload.st.fail": "Failed",
    "track.col.aml": "aimusiclist",
    "track.col.aml_help": "All songs are shown on your site. Checked songs are also published on aimusiclist.com. Changes are saved right away.",
    "track.search": "Search song titles",
    "track.search_empty": "No songs match.",
    "album.aml_help": "Albums are shown on your site. To publish an album on aimusiclist.com, check it (6–35 songs). Its songs are published too.",
    "artist.site_name": "{name} (site name)",
    "artist.title": "Other artists",
    "artist.help": "Songs use the site name \"{name}\" as artist by default. Add other artist names here to choose them when uploading.",
    "artist.placeholder": "Artist name",
    "artist.add": "Add",
    "artist.duplicate": "This name is already in the list.",
    "artist.delete.confirm": "Remove \"{name}\" from the list? Songs keep their artist name.",
    "account.title": "Admin account",
    "account.current": "Email: {email} · Cloudflare account: {account}",
    "account.new_email": "New email (optional)",
    "account.new_password": "New password (optional)",
    "account.new_token": "New usage token (optional)",
    "account.current_password": "Current password (required to change)",
    "account.save": "Save account",
    // ── 3-6: 곡 이미지·가사·방명록·배너·프로필·하단 문구·애드센스·내 도메인 ──
    "lyrics.open": "Lyrics of {title}",
    "lyrics.title": "Lyrics · {title}",
    "lyrics.loading": "Loading lyrics…",
    "lyrics.empty": "The lyrics file has no text.",
    "lyrics.failed": "Could not load the lyrics. Try again later.",
    "modal.close": "Close",
    "gb.title": "Guestbook",
    "gb.about_song": "Write in the guestbook about {title}",
    "gb.unlink": "Not about this song",
    "gb.name": "Name (up to 20 characters)",
    "gb.text": "Message (up to 500 characters)",
    "gb.no_links": "No links",
    "gb.submit": "Post",
    "gb.sending": "Posting…",
    "gb.posted": "Thank you! Your message is posted.",
    "gb.loading": "Loading messages…",
    "gb.empty": "No messages yet. Be the first!",
    "gb.prev": "Newer",
    "gb.next": "Older",
    "gb.deleted_song": "Deleted song",
    "err.gb.name": "Enter a name of 1–{max} characters.",
    "err.gb.text": "Write a message of 1–{max} characters.",
    "err.gb.link": "Links (http, www, or addresses like example.com) are not allowed.",
    "err.gb.rejected": "This message was not accepted.",
    "err.gb.daily_limit": "You can post up to {max} messages a day. Please come back tomorrow.",
    "err.gb.busy": "The guestbook has too many messages today. Please try tomorrow.",
    "err.gb.off": "The guestbook is closed.",
    "err.image.size": "The image must be at most {max_w}×{max_h}. (This one: {w}×{h})",
    "err.lyrics.encoding": "The lyrics file must be saved as UTF-8 text.",
    "err.lyrics.format": "This is not an .srt file (no time lines like 00:00:01,000 --> 00:00:04,000).",
    "err.lyrics.none": "This song has no lyrics.",
    "err.ads.client": "Publisher ID must look like ca-pub- followed by 16 digits.",
    "err.ads.slot": "Ad unit ID must be numbers only (6–20 digits).",
    "err.domain.invalid": "Enter only the domain, like mymusic.com (no http://, no / path).",
    "err.domain.not_reached": "Your site does not open at {domain} yet. Finish step 4–5 on Cloudflare and wait a few minutes.",
    "err.domain.other_site": "{domain} opens a different site. Check that the custom domain was added to this Worker ({worker}).",
    "err.domain.env": "The address is fixed by SITE_URL in Cloudflare settings. Remove SITE_URL to use this screen.",
    "img.bad_type": "Choose an image file (JPG, PNG, WebP, GIF).",
    "img.too_big": "Choose an image of {mb} MB or less.",
    "img.title.track": "Song image",
    "img.title.cover": "Album cover",
    "img.title.profile": "Profile image",
    "img.title.banner": "Top banner",
    "img.size_note": "Saved as {w}×{h} WebP (up to {kb} KB). Only the small image is uploaded, not your original.",
    "img.mode.crop": "Crop (move the frame)",
    "img.mode.fit": "Shrink whole image (adds side color)",
    "img.mode.fit_free": "Shrink whole image (keep its shape)",
    "img.frame_size": "Frame size",
    "img.drag_help": "Drag the bright frame (or use the arrow keys) to choose the part to keep.",
    "img.result": "Result:",
    "img.save": "Save image",
    "img.no_webp": "This browser cannot make WebP images. Please use Chrome, Edge or Firefox.",
    "img.still_big": "The image is still larger than {kb} KB. Try a simpler image or a smaller frame.",
    "track.image.title": "Song image",
    "track.image.custom": "Your own image.",
    "track.image.default": "A default image was chosen at upload.",
    "track.image.help": "100×100. Shown behind the play button, here and on aimusiclist.com. Saved right away.",
    "track.image.change": "Change image",
    "track.image.reset": "Back to default image",
    "track.image.reset_done": "Back to the default image.",
    "track.lyrics.title": "Lyrics (.srt)",
    "track.lyrics.has": "This song has lyrics.",
    "track.lyrics.none": "No lyrics yet.",
    "track.lyrics.help": "Upload an .srt file (UTF-8, up to 100 KB). Visitors see the words without times when they press SRT. Saved right away.",
    "track.lyrics.upload": "Upload .srt",
    "track.lyrics.replace": "Replace .srt",
    "track.lyrics.view": "View file",
    "track.lyrics.delete": "Delete lyrics",
    "track.lyrics.delete_confirm": "Delete the lyrics of this song?",
    "track.lyrics.bad_type": "Choose a file ending in .srt.",
    "track.lyrics.too_big": "The lyrics file is larger than 100 KB.",
    "album.cover.choose": "Choose cover",
    "album.cover.pending": "New cover — saved with the album.",
    "album.cover.delete": "Remove cover",
    "album.cover.delete_confirm": "Remove the cover image? The album and its songs stay.",
    "album.cover.help": "200×200. Crop it or shrink the whole image. Deleting an album deletes only its cover, not its songs.",
    "site.field.footer": "Bottom text (up to 200 characters, text only)",
    "site.footer.help": "Empty = \"© {year} site name\". {year} becomes this year. Its color follows your skin.",
    "site.images.title": "Banner and profile image",
    "site.banner.title": "Top banner",
    "site.banner.help": "Shown above the site title. Up to 1600×400 (wide pictures look best). Saved right away.",
    "site.profile.title": "Profile image",
    "site.profile.help": "400×400, shown as a circle. aimusiclist.com also shows it in \"New artists\". Saved right away.",
    "site.image.none": "No image yet.",
    "site.image.choose": "Choose image",
    "site.image.delete": "Remove",
    "site.image.delete_confirm": "Remove this image?",
    "ads.title": "Google AdSense",
    "ads.need_domain": "Your site is on a workers.dev address. AdSense approves only sites with their own domain — connect one first.",
    "ads.help": "Enter only the IDs from your AdSense account (do not paste ad code). The site makes the ad code itself. Ads never appear on this admin page.",
    "ads.client": "Publisher ID (ca-pub-…)",
    "ads.slot_top": "Top ad unit ID",
    "ads.slot_left": "Left ad unit ID (optional)",
    "ads.left_note": "The left ad appears only in skins with a left column ({{ad_left}}, e.g. the dark skin). The top ad goes under the banner.",
    "ads.on": "Show ads on my site",
    "ads.save": "Save AdSense",
    "ads.adstxt": "ads.txt is made automatically from the publisher ID:",
    "ads.saved_on": "Saved. Ads appear on your site within 30 seconds.",
    "ads.saved_off": "Saved. Ads are off.",
    "admin.tab.guestbook": "Guestbook",
    "admin.tab.domain": "My domain",
    "gbadmin.on": "Open the guestbook",
    "gbadmin.help": "Visitors find \"Guestbook\" in your menu and a 💬 button on each song. Name up to 20 and message up to 500 characters, no links, up to 50 messages per person a day. Messages are kept until you delete them.",
    "gbadmin.list": "Messages",
    "gbadmin.saved_on": "Guestbook opened. Visitors see it within 30 seconds.",
    "gbadmin.saved_off": "Guestbook closed. Messages are kept.",
    "gbadmin.delete_confirm": "Delete this message?",
    "domain.current": "Your site address now: {url}",
    "domain.why": "With your own domain (like mymusic.com) your site is easier to remember, and Google AdSense can approve it.",
    "domain.connected": "Connected: {domain}",
    "domain.redirect_note": "Visitors who open the old workers.dev address are moved to your domain. Songs already in playlists keep playing from the old address too.",
    "domain.env": "This site's address is set by SITE_URL in Cloudflare settings, so it cannot be changed here.",
    "domain.guide.title": "How to connect your own domain (about 10 minutes)",
    "domain.step.1": "Buy a domain on Cloudflare: dashboard → Register domains → search a name → Purchase → Complete purchase. (You pay Cloudflare yourself.)",
    "domain.step.2": "In the dashboard open Workers & Pages and choose {worker}.",
    "domain.step.3": "Go to Settings → Domains & Routes → Add → Custom domain.",
    "domain.step.4": "Type your domain (e.g. mymusic.com) and press Add Custom Domain.",
    "domain.step.5": "Wait until it shows Active (usually a few minutes). Open https://your-domain once to check that your site appears.",
    "domain.step.6": "Come back here, type the domain below and press Connect. aimusiclist.com changes your address automatically.",
    "domain.guide.note": "Cloudflare may change the names of these screens. If a name differs, look for the closest one.",
    "domain.input": "My domain",
    "domain.connect": "Connect",
    "domain.checking": "Checking that your site opens at this domain… (up to 30 seconds)",
    "domain.unchanged": "This domain is already connected.",
    "domain.done": "Connected to {domain}. aimusiclist.com now uses the new address.",
    "domain.done_local": "Connected to {domain}. When you publish on aimusiclist.com it registers with this address.",
    // ── 3-7: 곡 언어·SNS·사용량 토큰(계정 ID)·Worker 이름 ──
    "nav.links": "Links",
    "links.title": "Links",
    "links.empty": "No social links yet.",
    "links.home": "Go to home",
    "social.kakao": "KakaoTalk Channel",
    "songlang.zxx": "Instrumental (no lyrics)",
    "songlang.mis": "Other language",
    "track.field.lang": "Song language",
    "track.field.lang2": "Second language (optional)",
    "track.lang.help": "The language of the lyrics (not your site language). Songs without lyrics: choose \"Instrumental\". aimusiclist.com uses it for language charts.",
    "track.lang.unset": "— not set (site language) —",
    "track.col.select": "Select",
    "track.filter.nolang": "Only songs without a song language",
    "lang.missing.one": "Please check the song language ({n} song).",
    "lang.missing.other": "Please check the song language ({n} songs).",
    "lang.missing.fix": "Set now",
    "lang.missing.help": "Until you set it, aimusiclist.com treats them as your site language.",
    "bulk.hint": "Check songs on the left (☐) to set their song language or additional info all at once.",
    "bulk.selected": "{n} selected",
    "bulk.select_all": "Select all shown",
    "bulk.lang": "Song language of the selected songs",
    "bulk.apply": "Apply",
    "bulk.none": "Check songs in the list first.",
    "bulk.done": "Song language set for {n} song(s).",
    "err.track.langs_invalid": "Choose 1–{max} song languages from the list.",
    "err.track.langs_zxx": "\"Instrumental\" cannot be combined with another language.",
    "sns.title": "SNS",
    "sns.help": "Enter only the address (https://…). Visitors find all of them under \"Links\" on your site. aimusiclist.com shows icons next to your songs (YouTube, Instagram, TikTok, Facebook, X; the others as one 🔗). Saved right away.",
    "sns.more": "Other SNS (up to {max})",
    "sns.add": "+ Add other SNS",
    "sns.choose": "— choose —",
    "sns.saved": "SNS saved. aimusiclist.com is updated shortly.",
    "sns.view": "See the Links page",
    "err.social.url": "{name}: enter an https:// address of {name} (e.g. {example}).",
    "err.social.duplicate": "{name} is already in the list.",
    "err.social.too_many": "You can add up to {max} other SNS.",
    "err.social.too_long": "{name}: the address is too long (max {max} characters).",
    "err.social.unknown": "Unknown SNS ({key}).",
    "err.cf.account_id_format": "The Account ID is 32 characters (0–9, a–f).",
    "err.cf.account_id_wrong": "Could not read usage with this Account ID. Check the ID and that the token has \"Account Analytics: Read\".",
    "setup.account_id": "Cloudflare Account ID",
    "setup.account_id_help": "Where to find it: Cloudflare dashboard → Workers & Pages → \"Account Details\" → Account ID (copy button). Or press Ctrl+K (⌘K) and search \"Copy account ID\".",
    "account.account_id": "Cloudflare Account ID (only if asked)",
    "domain.worker_unknown": "your Worker (the site name)",
    // ── 3-8 확장 항목(추가 정보) · 새 버전 안내 ──
    "ext.title": "Additional info",
    "ext.help": "Optional. aimusiclist.com decides which fields exist and shows them next to your songs.",
    "ext.unsupported": "{name}: available after a program update.",
    "ext.none": "— none —",
    "ext.yes": "Yes",
    "ext.no": "No",
    "ext.max_select": "up to {n}",
    "bulk.ext": "Additional info of the selected songs",
    "bulk.ext_field": "Field",
    "bulk.ext_clear": "— clear (no value) —",
    "bulk.ext_multi_note": "The checked values replace the song's current values. Check nothing to clear.",
    "bulk.ext_done": "{name} set for {n} song(s).",
    "ai_tool.label": "Made with",
    "ai_tool.none": "Not set",
    "ai_tool.other": "Other",
    "ai_tool.upload_help": "Applies to every song in this upload. You can change it for each song later.",
    "ai_tool.missing": "Tool not in the list? Choose Other and tell us at admin@aimusiclist.com.",
    "ai_tool.empty.one": "{n} song has no AI tool set.",
    "ai_tool.empty.other": "{n} songs have no AI tool set.",
    "ai_tool.fill": "Set them all to this tool",
    "ai_tool.fill_confirm": "Set the AI tool of the {n} song(s) without one to {name}?",
    "ai_tool.bulk": "AI tool of the selected songs",
    "ai_tool.done": "AI tool set to {name} for {n} song(s).",
    "ai_tool.cleared": "AI tool cleared for {n} song(s).",
    "aipaste.label": "Paste AI result",
    "aipaste.guide": "Get the guide",
    "aipaste.placeholder": "e.g. Midnight Rain (R&B, Neo Soul; Romantic, en)",
    "aipaste.apply": "Apply",
    "aipaste.help": "Not sure which genre? Give our guide file to an AI (ChatGPT, Claude, Gemini — free plans work) with your song's Suno prompt or lyrics, then paste the song title it gives you, with the part in ( ), here.",
    "aipaste.empty": "Paste the AI's answer first.",
    "aipaste.notfound": "We couldn't find the result line. Paste the very last line of the AI's answer, like: rnb | neo_soul | en | chill",
    "aipaste.done": "Filled in: {what}. Please check them below.",
    "aipaste.w.genre": "genres",
    "aipaste.w.lang": "song language",
    "aipaste.w.mood": "mood",
    "aipaste.bad_main": "\"{v}\" is not a main genre in the list, so the genres were left as they were. Choose them yourself or ask the AI again.",
    "aipaste.fixed_main": "\"{v}\" is a subgenre, so its main genre {main} was used.",
    "aipaste.bad_genre": "Not in the genre list, so left out: {v}",
    "aipaste.bad_lang": "Not a song language we know, so left out: {v}",
    "aipaste.no_lang": "The song language was empty, so it was left as it was.",
    "aipaste.bad_mood": "Not in the mood list, so left out: {v}",
    "aipaste.no_mood_field": "This site doesn't have the mood field yet, so the mood was not filled in.",
    "aipaste.dropped": "Too many, so these were left out: {v}",
    "fields.title": "Additional fields (from aimusiclist.com)",
    "fields.help": "aimusiclist.com tells your site which extra fields exist (for example Mood). Your site checks once a day by itself. New fields appear under \"Additional info\" without updating the program.",
    "fields.version": "Field list version {v} · {n} field(s) · checked {time}",
    "fields.never": "Not received yet. Upload works as usual.",
    "fields.none": "aimusiclist.com has no additional fields yet.",
    "fields.update": "Update fields",
    "fields.updated": "Field list updated (version {v}).",
    "fields.same": "Already up to date.",
    "fields.failed": "Could not update: {reason} The last good list is still used.",
    "ver.new": "A new version of this program is available ({latest}, you have {version}).",
    "ver.how": "How to update",
    "ver.how_doc": "See docs/업데이트.md (Update guide) in your GitHub repository.",
    "ver.required": "Please update: this version ({version}) is older than the minimum aimusiclist.com supports ({min}). The latest is {latest}.",
    "ver.notes": "What's new",
    "err.fields.too_soon": "Please wait {wait} seconds and try again.",
    "err.fields.none": "aimusiclist.com has no additional fields yet.",
    "err.fields.unreachable": "Could not reach aimusiclist.com.",
    "err.fields.http": "aimusiclist.com answered with an error ({status}).",
    "err.fields.invalid": "The received field list is broken.",
    "err.fields.too_large": "The received field list is too large (over 64 KB).",
    "err.fields.schema": "The received field list is a newer format ({schema}). Update this program to use it.",
    "err.fields.stale": "The received field list is older than the one you already have.",
    "err.ext.unknown_field": "Unknown field: {key}",
    "err.ext.unsupported": "{name} can be used after a program update.",
    "err.ext.deprecated": "{name} is no longer used and cannot be changed.",
    "err.ext.value": "{name}: this value is not allowed.",
    "err.ext.too_long": "{name}: too long (max {max} characters).",
    "err.ext.too_large": "Too much additional info (max {max_kb} KB)."
  };

  AML.lang = 'en';

  // 언어팩 파일이 부르는 함수: AML.addLang('ko', { 'nav.home': '홈', ... })
  // 세 번째 값(언어 이름)은 선택. 목록 이름은 위 AML.LANGS 를 쓴다.
  AML.addLang = function (code, table, nativeName) {
    AML.strings[code] = Object.assign(AML.strings[code] || {}, table);
    if (nativeName && !AML.LANGS[code]) AML.LANGS[code] = nativeName;
  };

  // 문장 가져오기 (지금 언어 → 영어 → 키 그대로)
  AML.t = function (key, params) {
    var s = (AML.strings[AML.lang] || {})[key];
    if (s == null) s = AML.strings.en[key];
    if (s == null) return key;
    if (params) s = s.replace(/\{(\w+)\}/g, function (m, k) { return params[k] != null ? params[k] : m; });
    return s;
  };

  // 단복수: 언어별 규칙(Intl.PluralRules)으로 one/few/many/other 를 고르고, 없으면 other → 영어
  AML.tn = function (key, n, params) {
    var p = Object.assign({ n: n }, params || {});
    var table = AML.strings[AML.lang] || {};
    var form;
    try { form = new Intl.PluralRules(AML.lang).select(n); } catch (e) { form = n === 1 ? 'one' : 'other'; }
    if (table[key + '.' + form] == null) form = table[key + '.other'] != null ? 'other' : (n === 1 ? 'one' : 'other');
    return AML.t(key + '.' + form, p);
  };

  // 서버 오류 { code, params } → 문장
  AML.errText = function (err) {
    if (!err || !err.code) return AML.t('err.network');
    var s = AML.t(err.code, err.params || {});
    return s === err.code ? AML.t('err.unknown', { code: err.code }) : s;
  };

  // 표시 언어 고르기: 저장한 선택 → 브라우저 언어 → 사이트 기본 언어 → 영어
  // (AML.LANGS 에 있는 언어 중에서만. 'pt-BR' 이면 pt-br → pt 순서로 찾는다)
  AML.pickLang = function (siteDefault) {
    var want = [];
    try { want.push(localStorage.getItem(AML.STORE_KEY)); } catch (e) { /* 저장소 없음 */ }
    (navigator.languages || [navigator.language || '']).forEach(function (l) {
      l = String(l || '').toLowerCase();
      want.push(l, l.split('-')[0]);
    });
    want.push(siteDefault, 'en');
    for (var i = 0; i < want.length; i++) if (want[i] && AML.LANGS[want[i]]) return want[i];
    return 'en';
  };

  // 언어팩 파일 1개 불러오기 (정적 파일 /_app/lang/{코드}.js). 결과: 성공 true / 실패 false
  var loading = {};
  AML.loadLang = function (code) {
    if (code === 'en' || AML.strings[code]) return Promise.resolve(true);
    if (!AML.LANGS[code]) return Promise.resolve(false);
    if (!loading[code]) {
      loading[code] = new Promise(function (done) {
        var s = document.createElement('script');
        var end = function () { clearTimeout(tm); done(!!AML.strings[code]); };
        var tm = setTimeout(end, 5000);          // 5초 안에 안 오면 영어로 보여준다
        s.onload = end;
        s.onerror = function () { delete loading[code]; end(); };
        s.src = '/_app/lang/' + encodeURIComponent(code) + '.js?v=' + AML.V;
        document.head.appendChild(s);
      });
    }
    return loading[code];
  };

  // 언어 바꾸기: 불러오기 → AML.lang 변경 → (remember면) 저장. 실패하면 영어.
  AML.setLang = function (code, remember) {
    return AML.loadLang(code).then(function (ok) {
      AML.lang = ok ? code : 'en';
      document.documentElement.lang = AML.lang;
      if (remember && ok) { try { localStorage.setItem(AML.STORE_KEY, code); } catch (e) { /* 이번 창에서만 */ } }
      return AML.lang;
    });
  };

  // 언어 선택 목록을 box 안에 만든다. 바꾸면 언어팩을 불러온 뒤 after() 로 화면을 다시 그린다.
  // 언어가 1개뿐이면 숨긴다.
  AML.langSelect = function (box, after) {
    if (!box) return;
    var codes = Object.keys(AML.LANGS);
    box.hidden = codes.length < 2;
    if (box.hidden) return;
    var sel = document.createElement('select');
    sel.className = 'aml-lang-select';
    codes.forEach(function (c) {
      var o = document.createElement('option');
      o.value = c; o.textContent = AML.LANGS[c]; o.lang = c;
      sel.appendChild(o);
    });
    var label = function () { sel.value = AML.lang; sel.title = AML.t('lang.label'); sel.setAttribute('aria-label', AML.t('lang.label')); };
    label();
    sel.addEventListener('change', function () {
      sel.disabled = true;
      AML.setLang(sel.value, true).then(function () { sel.disabled = false; label(); after(); });
    });
    box.textContent = '';
    box.appendChild(sel);
  };

  // 번역 빠짐 확인 (브라우저 콘솔용): AML.missingKeys('ko') → 빠진 키 목록
  // 'x.one' 은 그 언어에 'x.other' 가 있으면 빠진 것으로 치지 않는다.
  AML.missingKeys = function (code) {
    var tb = AML.strings[code || AML.lang] || {};
    return Object.keys(AML.strings.en).filter(function (k) {
      return tb[k] == null && !(/\.one$/.test(k) && tb[k.replace(/\.one$/, '.other')] != null);
    });
  };
})();
