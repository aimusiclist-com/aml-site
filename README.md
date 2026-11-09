# aimusiclist Personal Music Site / 개인 음악 사이트

Your own music site on Cloudflare (free plan). Upload songs, make albums, choose a skin and language, and share your songs on **aimusiclist.com** — no sign-up on aimusiclist.com needed.
Cloudflare(무료)에 만드는 나만의 음악 사이트입니다. 곡 업로드·앨범·스킨·언어를 고르고, 곡을 **aimusiclist.com**에 함께 공개합니다. aimusiclist.com 회원가입은 필요 없습니다.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/aimusiclist-com/aml-site)

<!-- 저장소 주인: 위 링크의 aimusiclist-com/aml-site 을 실제 공개 저장소 주소로 바꾸세요. -->

> **PHP web hosting (cPanel) instead of Cloudflare? / Cloudflare 대신 PHP 웹호스팅(cPanel)?** → the **PHP version**: upload one zip and follow the install screen — [docs/PHP판_설치.md](docs/PHP판_설치.md). / **PHP판**: zip 하나 올리고 설치 화면만 따라 하면 같은 사이트가 됩니다.

---

## What you need / 준비물

| | |
|---|---|
| **Cloudflare account** (free) / Cloudflare 계정 (무료) | https://dash.cloudflare.com/sign-up |
| **GitHub account** (free) / GitHub 계정 (무료) | https://github.com/signup — Cloudflare copies this project into your GitHub. / Cloudflare가 이 프로젝트를 내 GitHub에 복사해 둡니다. |
| A web browser / 웹 브라우저 | **Nothing to install.** / **설치할 프로그램 없음.** |

> Cloudflare may ask for a payment method the first time you use R2 (song storage). Within the free limits you pay nothing.
> R2(곡 저장소)를 처음 쓸 때 결제 수단 등록을 요구할 수 있습니다. 무료 한도 안에서는 요금이 나오지 않습니다.

---

## Install in 3 steps / 설치 3단계

### 1. Deploy / 배포

1. Click **Deploy to Cloudflare** above → log in to Cloudflare → connect GitHub (**Authorize**).
   위 **Deploy to Cloudflare** 버튼 → Cloudflare 로그인 → GitHub 연결(**Authorize**).
2. On the setup page, **keep everything as it is** (Worker name — default `aml-site`, R2 bucket `aml-music`, `AML_API_BASE`). There is no password to type here.
   설정 화면은 **모두 그대로** 둡니다(Worker 이름 — 기본 `aml-site`, R2 버킷 `aml-music`, `AML_API_BASE`). 여기서 입력할 비밀번호는 없습니다.
   - If you change the Worker name, your address uses that name. / Worker 이름을 바꾸면 주소에 그 이름이 들어갑니다.
   - If the bucket name already exists in your account, change it (e.g. `aml-music-2`). / 같은 버킷 이름이 이미 있으면 `aml-music-2`처럼 바꿉니다.
3. Press **Create and deploy** and wait 1–3 minutes. Copy your address: `https://<worker-name>.<your-name>.workers.dev`
   **Create and deploy**를 누르고 1~3분 기다립니다. 내 주소 `https://<Worker이름>.<내이름>.workers.dev`를 복사합니다.

### 2. Open your address → create your admin account / 내 주소 접속 → 관리자 만들기

Open your address right away. The **Create your admin account** screen appears (only the first time).
바로 내 주소로 들어갑니다. **관리자 만들기** 화면이 나옵니다(처음 한 번만).

| Field / 칸 | |
|---|---|
| Email / 이메일 | Your login ID. Using your Cloudflare sign-up email is easy to remember. Not shown on your site. / 로그인 아이디. Cloudflare 가입 이메일이 기억하기 쉽습니다. 사이트에는 보이지 않습니다. |
| Password ×2 / 비밀번호 2번 | 6+ characters. / 6자 이상. |
| **Cloudflare usage token** / **사용량 토큰** | Required. Shows your free-limit usage on the admin page. Press **Make token on Cloudflare** on the screen (two permission lines are filled in: *Account Analytics: Read* and *Account Settings: Read*) → **Continue to summary** → **Create Token** → **Copy** → paste. A ✓ appears when it is right. If it asks for an **Account ID**, copy it from Cloudflare → Workers & Pages → *Account Details*. / 필수. 관리 화면에 무료 한도 사용량을 보여 줍니다. 화면의 **Cloudflare에서 토큰 만들기** 버튼(권한 2줄 *Account Analytics: Read*·*Account Settings: Read*가 채워져 있음) → **Continue to summary** → **Create Token** → **Copy** → 붙여넣기. 맞으면 ✓가 나옵니다. **계정 ID**를 물으면 Cloudflare → Workers & Pages → *Account Details*의 Account ID를 복사해 넣습니다. |

> Create the admin account **right after deploying** (the first person to open the address creates it).
> 관리자는 **배포 직후 바로** 만드세요(주소를 처음 연 사람이 만들 수 있습니다).

### 3. Upload songs / 곡 올리기

**Tracks** tab → drag up to **20 songs** at once (MP3/M4A, 30 sec–15 min, 15 MB each) → choose a genre → **Upload**.
**곡** 탭 → 한 번에 **20곡까지** 끌어다 놓기(MP3/M4A, 30초~15분, 곡당 15MB) → 장르 고르기 → **올리기**.

- The file name becomes the title. **Also publish on aimusiclist.com** is checked by default. / 파일 이름이 제목이 됩니다. **aimusiclist.com에 함께 공개**가 기본으로 체크되어 있습니다.
- **At least 10 songs stay public on aimusiclist.com.** You choose which 10; any others can be private. If you have fewer than 10 songs, all of them are public. You can delete any song you don't want to share. / **aimusiclist.com 에는 10곡 이상 공개됩니다.** 어느 10곡인지는 직접 고르고, 나머지는 비공개로 둘 수 있습니다. 곡이 10곡보다 적으면 모두 공개됩니다. 공개하고 싶지 않은 곡은 지울 수 있습니다.
- Everything is saved immediately — there is no "Save" button. / 모든 변경은 바로 저장됩니다. "저장" 버튼이 없습니다.
- Your site connects to aimusiclist.com **by itself** (status line at the top of the admin page). / aimusiclist.com 연결은 **자동**입니다(관리 화면 위쪽 상태 줄).
- Later, log in from the **⚙ Admin** link at the bottom of your site. / 다음부터는 내 사이트 맨 아래 **⚙ 관리** 링크로 로그인합니다.

---

## More / 더 꾸미기 (admin page / 관리 화면)

- Song images, album covers, top banner, round profile image (cropped in your browser, saved as small WebP). / 곡 이미지·앨범 커버·상단 배너·동그란 프로필(브라우저에서 잘라 작은 WebP로 저장).
- Lyrics (.srt), guestbook, bottom text, Google AdSense (IDs only — no code to paste). / 가사(.srt)·방명록·하단 문구·구글 애드센스(ID만 입력, 코드 붙여넣기 없음).
- **Song language** of each song (lyrics language, or Instrumental) — used for aimusiclist.com language charts. Set many songs at once from the song list. / 곡마다 **곡 언어**(가사 언어 또는 연주곡) — aimusiclist.com 언어별 차트에 쓰입니다. 곡 목록에서 여러 곡을 한꺼번에 지정할 수 있습니다.
- **SNS** (Site info tab): YouTube, Instagram, TikTok, Facebook, X + up to 5 others. Visitors see them on the **Links** page; aimusiclist.com shows the icons next to your songs. / **SNS**(사이트 정보 탭): 큰 5개 + 다른 SNS 최대 5개. 방문자는 **링크** 화면에서, aimusiclist.com은 곡 옆 아이콘으로 봅니다.
- **Additional info** (3-8): extra fields that aimusiclist.com announces (for example *Mood*) appear under the upload/edit form by themselves — no program update needed. Set many songs at once from the song list. / **추가 정보**(3-8): aimusiclist.com이 알려 주는 추가 칸(예: 분위기)이 업로드·수정 화면에 저절로 생깁니다. 곡 목록에서 여러 곡을 한꺼번에 지정할 수 있습니다.
- **My domain** tab: step-by-step guide to use your own domain (needed for AdSense approval). / **내 도메인** 탭: 개인 도메인 연결 단계별 안내(애드센스 승인에 필요).

- **Design** (3-9): the default skins `light` and `dark` now look like a modern music app — round profile header, card-style song rows, a floating player and a full-screen player on phones. Crop your profile photo like on YouTube (Site info → Profile). / **디자인**(3-9): 기본 스킨 `light`·`dark` 가 음악 앱처럼 바뀌었습니다 — 동그란 프로필 머리, 카드 모양 곡 줄, 떠 있는 재생 바, 휴대폰 전체 화면 재생. 프로필 사진은 유튜브처럼 잘라서 올립니다(사이트 정보 → 프로필).
- **Found on Google** (3-27): every song and album has its own address (`/song/…`, `/album/…`) that search sites can find, with a site map (`/sitemap.xml`) made for you. Turn it off, or follow the 5-step **Google Search Console** guide, in Site info → **Show up in search**. Moving between pages never stops the music. / **구글에서 검색** (3-27): 곡·앨범마다 검색되는 주소(`/song/…`, `/album/…`)가 생기고, 사이트 지도(`/sitemap.xml`)도 저절로 만들어집니다. 사이트 정보 → **검색에 보이기**에서 끄거나, **Google Search Console** 등록 5단계 안내를 따라 할 수 있습니다. 화면을 옮겨 다녀도 음악은 끊기지 않습니다.

## Powered by aimusiclist.com

The **"Powered by aimusiclist.com"** line at the bottom of your site is a condition for using this software. Please do not remove or hide it.
맨 아래 **Powered by aimusiclist.com** 표시는 이 소프트웨어 사용 조건입니다. 지우거나 숨기지 말아 주세요.

- It is one small line next to **⚙ Admin**, in the same size and color as your bottom text. Before your site connects to aimusiclist.com it opens aimusiclist.com; after that it opens **your artist page** on aimusiclist.com. / **⚙ 관리** 옆 작은 한 줄로, 하단 문구와 같은 크기·같은 색입니다. aimusiclist.com 연결 전에는 aimusiclist.com 첫 화면, 연결 뒤에는 aimusiclist.com 의 **내 아티스트 페이지**로 갑니다.
- There is no setting to turn it off, and it shows with every skin. / 끄는 설정은 없고, 어떤 스킨에서도 보입니다.
- Details: [NOTICE.md](NOTICE.md). / 자세히: [NOTICE.md](NOTICE.md).

## Forgot your password? / 비밀번호를 잊었을 때

Cloudflare dashboard → **R2 Object Storage** → `aml-music` → folder `meta` → delete **only** `admin.json` → open your address → create the admin again. Songs and the aimusiclist.com connection are kept.
Cloudflare 대시보드 → **R2 Object Storage** → `aml-music` → `meta` 폴더 → `admin.json` **하나만** 삭제 → 내 주소 접속 → 관리자 다시 만들기. 곡과 aimusiclist.com 연결은 그대로입니다.

## Update an installed site / 이미 설치한 사이트 업데이트

**One button (from 3-8):** your GitHub repository → **Actions** → **Update from template (업데이트 받기)** → **Run workflow**. It gets the new version, keeps your Worker name, R2 bucket name and settings, commits, and Cloudflare redeploys in 1–3 minutes. The admin page shows a line when a new version is out.
**버튼 한 번(3-8부터):** 내 GitHub 저장소 → **Actions** → **Update from template (업데이트 받기)** → **Run workflow**. 새 버전을 받아 Worker 이름·R2 버킷 이름·설정은 그대로 두고 커밋하면 Cloudflare가 1~3분 안에 다시 배포합니다. 새 버전이 나오면 관리 화면 맨 위에 안내 줄이 보입니다.

Or upload the changed files to **your** GitHub repository (the copy Cloudflare made). Cloudflare redeploys automatically in 1–3 minutes. Your songs and settings in R2 are kept. See `docs/업데이트.md`.
바뀐 파일을 **내** GitHub 저장소(Cloudflare가 만든 복사본)에 올리면 1~3분 안에 자동으로 다시 배포됩니다. R2의 곡·설정은 그대로입니다. 자세히는 `docs/업데이트.md`.

- Sites installed the old way (with `AML_ADMIN_TOKEN`, `AML_SITE_ID`, `AML_SITE_SECRET` in Cloudflare) keep working. Open `/admin/`, create the admin account once (it asks for the old `AML_ADMIN_TOKEN`).
  이전 방식(Cloudflare에 `AML_ADMIN_TOKEN`·`AML_SITE_ID`·`AML_SITE_SECRET`)으로 설치한 사이트도 그대로 동작합니다. `/admin/`에서 관리자를 한 번 만듭니다(이전 `AML_ADMIN_TOKEN`을 한 번 물어봅니다).

---

## Troubleshooting / 문제가 생겼을 때

| Problem / 증상 | Check / 확인할 것 |
|---|---|
| Deploy failed (build error) / 설치(빌드) 실패 | Cloudflare → your Worker → **Deployments / Builds** → open the log. R2 error → open **R2** in the dashboard once (accept the terms) → **Retry**. Bucket name exists → `aml-music-2`. / 빌드 기록 확인. R2 오류면 대시보드 **R2** 메뉴를 한 번 열어 시작(약관 동의) 후 재시도. 버킷 이름 중복이면 `aml-music-2`. |
| Token shows ✗ / 토큰 ✗ | Make it again with the button; permissions: **Account · Account Analytics · Read** and **Account · Account Settings · Read** (2 lines). / 버튼으로 다시 만들기. 권한 2줄: **Account · Account Analytics · Read**, **Account · Account Settings · Read**. |
| "Locked" when logging in / 로그인 잠김 | 5 wrong tries → wait 15 minutes. / 5번 틀리면 15분 뒤 다시. |
| aimusiclist.com: not connected / 연결 안 됨 | The reason is on the status line. It retries every 10 minutes (up to 20 times a day), or press **Try now**. / 상태 줄에 이유가 나옵니다. 10분마다 자동 재시도(하루 20회) 또는 **지금 연결**. |
| Error 1027 | Free daily limit (100,000 requests) reached. Resets 09:00 KST. / 무료 하루 한도 초과. 한국 시간 09:00 초기화. |

---

## For developers / 개발자용

Requires Node.js 18+. / Node.js 18 이상.

```bash
npm install
npm run dev                  # http://localhost:8787 → "Create admin" screen
npm run lang-check           # language pack check / 언어팩 검사
npm run deploy               # R2 bucket "aml-music" is created automatically if missing
```

- Local test with a fake aimusiclist.com: `npx wrangler dev --var AML_API_BASE:http://127.0.0.1:9000/api/v1 --var AML_CF_API_BASE:http://127.0.0.1:9000/cf/client/v4` (see `docs/설치와_시험.md`).
- `wrangler.toml` has `keep_vars = true` (dashboard variables survive redeploys) and `preview_urls = false`.
- Cron every minute: ping retry, auto-registration retry (every 10 min), a missed save after a multi-song upload, and (3-8) the daily `fields.json`/`versions.json` check at a per-site minute.

## Documents / 문서

| File | Content / 내용 |
|---|---|
| `docs/개발자_참고.md` | API, R2 layout, error codes / API·R2 구조·오류 코드 |
| `docs/업데이트.md` | Updating an installed site / 설치된 사이트 업데이트 |
| `docs/설치와_시험.md` | Local test / 로컬 시험 |
| `docs/스킨규격.md` | How to make a skin (with a free-AI prompt) / 스킨 만들기 |
| `docs/언어팩제작매뉴얼.md` | How to add a language / 새 언어 추가 |
| `docs/저장소_올리기.md` | For the project owner: publishing this repository / 저장소 주인용 |
| `NOTICE.md` | "Powered by aimusiclist.com" — condition of use / 사용 조건 |
