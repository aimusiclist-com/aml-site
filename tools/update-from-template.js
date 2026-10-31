#!/usr/bin/env node
/* tools/update-from-template.js — "업데이트 받기" (GitHub Action .github/workflows/update.yml 이 부른다. 채팅 3-8)
 * -----------------------------------------------------------------------------
 * Deploy 버튼으로 설치한 사이트의 GitHub 저장소는 원본(템플릿)과 연결되지 않은 "복사본"이다.
 * 이 스크립트는 우리 공개 템플릿 저장소의 새 버전(태그 v3.8.1 같은)을 가져와 내 저장소 파일을 바꾼다.
 * 커밋·push 는 워크플로가 하고, Cloudflare(Workers Builds)가 push 를 보고 자동으로 다시 배포한다.
 * Cloudflare 배포 토큰은 쓰지 않는다(우리가 보관하지 않음). 쓰는 권한은 이 저장소의 GITHUB_TOKEN 뿐.
 *
 * 지키는 것
 *   - wrangler.toml: 내 Worker 이름(name)·account_id·R2 버킷 이름(BUCKET 의 bucket_name)·[vars]에 내가 넣은 값은 그대로.
 *   - package.json / package-lock.json: 맨 위 "name" 은 그대로 (설치 화면이 바꿨을 수 있음).
 *   - .github/aml-keep.txt 에 적은 파일(한 줄에 하나, 예: README.md)은 건드리지 않는다.
 *   - .github/workflows/ 는 바꾸지 않는다(GitHub 기본 토큰은 워크플로 파일을 고칠 권한이 없다). 바뀐 것이 있으면 안내만.
 *
 * 멈추는 경우 (아무것도 바꾸지 않음)
 *   - 템플릿 주소가 아직 자리표시(YOUR_…)이거나, 태그를 찾지 못함.
 *   - 충돌: 내가 직접 고친 프로그램 파일을 새 버전도 바꿨을 때. → 목록을 보여 주고 멈춘다.
 *       내 것을 지키려면 그 파일을 .github/aml-keep.txt 에 적고 다시 실행, 새 것으로 덮으려면 force 를 켜고 실행.
 *   - 지금 버전의 원본 태그(v{package.json version})를 찾지 못해 충돌을 확인할 수 없을 때 (force 로만 진행).
 *   - 새 파일 검사 실패: JS 문법·JSON·언어팩 검사(tools/lang-check.js)·wrangler.toml 이름.
 *
 * 사용: node tools/update-from-template.js --repo . [--template owner/name | URL] [--tag v3.9.0] [--force] [--commit]
 *        [--out $GITHUB_OUTPUT] [--summary $GITHUB_STEP_SUMMARY]
 *   --commit: 바꾼 뒤 git commit + push 까지 한다 (워크플로는 이 한 줄만 부른다 → 워크플로 파일이 거의 바뀌지 않게)
 *   환경변수 AML_TEMPLATE·AML_VERSION·AML_FORCE 도 같은 뜻 (워크플로 입력값).
 *   종료 코드: 0 = 끝(바뀐 것이 없거나 준비 완료), 1 = 멈춤(아무것도 바꾸지 않음)
 * -----------------------------------------------------------------------------
 */
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

// ── 인자 ──────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf('--' + k); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const flag = (k) => argv.includes('--' + k);
const REPO = path.resolve(arg('repo', '.'));
const OUT = arg('out', '');
const SUMMARY = arg('summary', '');
const FORCE = flag('force') || /^(true|1|yes)$/i.test(process.env.AML_FORCE || '');
const WANT_TAG = (arg('tag', '') || process.env.AML_VERSION || '').trim();
const COMMIT = flag('commit');

const lines = [];   // 화면(로그)·요약에 같이 쓸 줄
function say(s) { lines.push(s); console.log(s); }
function output(k, v) { if (OUT) fs.appendFileSync(OUT, `${k}=${String(v).replace(/[\r\n]/g, ' ')}\n`); }
function finish(code, title) {
  if (SUMMARY) { try { fs.appendFileSync(SUMMARY, `### ${title}\n\n` + lines.map((l) => (l ? l : '')).join('\n') + '\n'); } catch {} }
  process.exit(code);
}
function stop(msg, hint) {
  say('');
  say('✗ ' + msg);
  if (hint) say('  → ' + hint);
  say('  Nothing was changed. / 아무것도 바꾸지 않았습니다.');
  output('changed', 'false');
  finish(1, 'Update stopped / 업데이트 멈춤');
}
const git = (args, opts = {}) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts });

// ── 버전 ──────────────────────────────────────────────────────────────────────
const SEMVER = /^v?(\d{1,4})\.(\d{1,4})\.(\d{1,6})$/;
function cmp(a, b) {
  const x = SEMVER.exec(a), y = SEMVER.exec(b);
  if (!x || !y) return 0;
  for (let i = 1; i <= 3; i++) { const d = Number(x[i]) - Number(y[i]); if (d) return d > 0 ? 1 : -1; }
  return 0;
}
function readJson(p) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }

// ── 템플릿 주소 ───────────────────────────────────────────────────────────────
const cfg = readJson(path.join(REPO, '.github', 'aml-update.json')) || {};
let template = (arg('template', '') || process.env.AML_TEMPLATE || cfg.template || '').trim();
if (!template || /YOUR_|example/i.test(template)) {
  stop('The template address is not set yet. / 업데이트 받을 주소(템플릿 저장소)가 아직 정해지지 않았습니다.',
    'Use the zip upload method in docs/업데이트.md, or type the address (owner/name) in the "template" box when you press Run workflow.');
}
if (/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(template)) template = `https://github.com/${template}.git`;
if (!/^(https:\/\/github\.com\/|file:\/\/|\/)/.test(template)) stop('Template address must be a GitHub repository (owner/name). / 템플릿 주소는 GitHub 저장소(owner/name)여야 합니다.');

// ── 태그 고르기 ───────────────────────────────────────────────────────────────
let tags = [];
try {
  tags = git(['ls-remote', '--tags', '--refs', template]).split('\n')
    .map((l) => (l.split('refs/tags/')[1] || '').trim()).filter((t) => SEMVER.test(t));
} catch (e) {
  stop('Could not read the template repository. / 템플릿 저장소를 읽지 못했습니다: ' + template, String(e.stderr || e.message).split('\n')[0]);
}
if (!tags.length) stop('No version tags (like v3.8.0) in the template. / 템플릿에 버전 태그(v3.8.0 같은)가 없습니다.');
tags.sort((a, b) => cmp(b, a));
const pkg = readJson(path.join(REPO, 'package.json')) || {};
const current = String(pkg.version || '0.0.0');
const tag = WANT_TAG ? (tags.find((t) => t === WANT_TAG || t === 'v' + WANT_TAG) || '') : tags[0];
if (!tag) stop(`Tag ${WANT_TAG} not found. / ${WANT_TAG} 태그가 없습니다.`, 'Available: ' + tags.slice(0, 10).join(', '));
say(`Template / 템플릿: ${template}`);
say(`My version / 내 버전: ${current}  →  new / 새 버전: ${tag}`);
if (cmp(tag, current) <= 0 && !WANT_TAG && !FORCE) {
  say('✓ Already up to date. / 이미 최신입니다.');
  output('changed', 'false');
  finish(0, 'Already up to date / 이미 최신');
}

// ── 받기 ──────────────────────────────────────────────────────────────────────
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'aml-update-'));
const NEW = path.join(TMP, 'new'), OLD = path.join(TMP, 'old'), STAGE = path.join(TMP, 'stage');
try { git(['clone', '--quiet', '--depth', '1', '--branch', tag, template, NEW]); }
catch (e) { stop('Could not download ' + tag + '. / 새 버전을 받지 못했습니다.', String(e.stderr || e.message).split('\n')[0]); }
const oldTag = tags.find((t) => cmp(t, current) === 0 && SEMVER.test(t)) || '';
let haveOld = false;
if (oldTag) { try { git(['clone', '--quiet', '--depth', '1', '--branch', oldTag, template, OLD]); haveOld = true; } catch {} }
if (!haveOld && !FORCE) {
  stop(`Could not find the original of my version (v${current}) to check my own changes. / 내 버전(v${current})의 원본을 찾지 못해 직접 고친 파일을 확인할 수 없습니다.`,
    'Run again with "force" checked to overwrite program files anyway (wrangler.toml name/bucket and .github/aml-keep.txt files are still kept).');
}

// ── 파일 목록 ─────────────────────────────────────────────────────────────────
function walk(root, rel = '', out = []) {
  for (const e of fs.readdirSync(path.join(root, rel), { withFileTypes: true })) {
    const r = rel ? rel + '/' + e.name : e.name;
    if (r === '.git' || r === 'node_modules' || r === '.wrangler') continue;
    if (e.isDirectory()) walk(root, r, out);
    else if (e.isFile()) out.push(r);
  }
  return out;
}
const read = (root, r) => { try { return fs.readFileSync(path.join(root, r)); } catch { return null; } };
const same = (a, b) => a !== null && b !== null && Buffer.compare(a, b) === 0;

const keep = new Set(['.github/aml-keep.txt']);
const keepFile = read(REPO, '.github/aml-keep.txt');
if (keepFile) for (const l of keepFile.toString('utf8').split(/\r?\n/)) { const s = l.replace(/#.*/, '').trim().replace(/^\/+/, ''); if (s) keep.add(s); }
const isWorkflow = (r) => r.startsWith('.github/workflows/');
const MERGED = new Set(['wrangler.toml', 'package.json', 'package-lock.json']);   // 합쳐서 쓰는 파일
const skip = (r) => keep.has(r) || isWorkflow(r);

const newFiles = walk(NEW), oldFiles = haveOld ? walk(OLD) : [];
const newSet = new Set(newFiles);

// "name" 만 빼고 비교 (package.json·lock)
function normPkg(buf) {
  if (!buf) return null;
  try { const j = JSON.parse(buf.toString('utf8')); delete j.name; if (j.packages && j.packages['']) delete j.packages[''].name; return Buffer.from(JSON.stringify(j)); } catch { return buf; }
}
const cmpBuf = (r, b) => (r === 'package.json' || r === 'package-lock.json' ? normPkg(b) : b);

// ── 충돌 확인: 내가 고친 프로그램 파일을 새 버전도 바꿨는가 ───────────────────────
const conflicts = [], writes = [], deletes = [], wfNotes = [];
for (const r of new Set([...newFiles, ...oldFiles])) {
  if (keep.has(r)) continue;
  const mine = read(REPO, r), oldB = haveOld ? read(OLD, r) : null, newB = newSet.has(r) ? read(NEW, r) : null;
  if (isWorkflow(r)) { if (newB && !same(mine, newB)) wfNotes.push(r); continue; }
  if (r === 'wrangler.toml') continue;   // 아래에서 합친다
  const m = cmpBuf(r, mine), o = cmpBuf(r, oldB), n = cmpBuf(r, newB);
  if (newB === null) {                                   // 새 버전에서 지운 파일
    if (mine === null) continue;
    if (haveOld && oldB !== null && same(m, o)) deletes.push(r);
    else if (haveOld && oldB !== null && !FORCE) conflicts.push(r + '  (removed in new version / 새 버전에서 없어짐)');
    else if (FORCE && oldB !== null) deletes.push(r);
    continue;
  }
  if (same(m, n)) continue;                              // 이미 같음
  if (haveOld && mine !== null && oldB !== null && !same(m, o) && !FORCE) { conflicts.push(r); continue; }
  if (haveOld && mine !== null && oldB === null && !FORCE) { conflicts.push(r + '  (my own file, new version adds the same name / 내가 만든 파일과 이름이 같음)'); continue; }
  writes.push(r);
}
if (conflicts.length) {
  say('');
  say('Files I changed myself that the new version also changes / 내가 직접 고친 파일을 새 버전도 바꿨습니다:');
  for (const c of conflicts) say('  - ' + c);
  stop('Conflict. / 충돌.',
    'To keep mine: add these paths to .github/aml-keep.txt (one per line) and run again. To use the new files: run again with "force" checked. / 내 것을 지키려면 .github/aml-keep.txt 에 적고 다시, 새 것으로 덮으려면 force 를 켜고 다시 실행.');
}

// ── wrangler.toml 합치기 ──────────────────────────────────────────────────────
function tomlTop(text, key) {        // 첫 [section] 앞의 key = "값"
  for (const l of text.split(/\r?\n/)) {
    if (/^\s*\[/.test(l)) break;
    const m = l.match(new RegExp('^\\s*' + key + '\\s*=\\s*"([^"]*)"'));
    if (m) return m[1];
  }
  return null;
}
function setTop(text, key, value) {
  const ls = text.split('\n');
  let first = ls.findIndex((l) => /^\s*\[/.test(l)); if (first < 0) first = ls.length;
  for (let i = 0; i < first; i++) {
    if (new RegExp('^\\s*' + key + '\\s*=').test(ls[i])) { ls[i] = ls[i].replace(/=\s*"[^"]*"/, `= "${value}"`); return ls.join('\n'); }
  }
  ls.splice(key === 'name' ? 0 : first, 0, `${key} = "${value}"`);
  return ls.join('\n');
}
// [[r2_buckets]] 중 binding = "BUCKET" 블록의 bucket_name
function bucketOf(text) {
  const blocks = text.split(/^(?=\s*\[)/m);
  for (const b of blocks) if (/^\s*\[\[r2_buckets\]\]/.test(b) && /binding\s*=\s*"BUCKET"/.test(b)) { const m = b.match(/bucket_name\s*=\s*"([^"]*)"/); if (m) return m[1]; }
  return null;
}
function setBucket(text, name) {
  return text.split(/^(?=\s*\[)/m).map((b) => (/^\s*\[\[r2_buckets\]\]/.test(b) && /binding\s*=\s*"BUCKET"/.test(b) ? b.replace(/bucket_name\s*=\s*"[^"]*"/, `bucket_name = "${name}"`) : b)).join('');
}
function varsOf(text) {             // [vars] 의 한 줄짜리 KEY = "값"
  const out = {};
  const b = text.split(/^(?=\s*\[)/m).find((x) => /^\s*\[vars\]/.test(x));
  if (!b) return out;
  for (const l of b.split(/\r?\n/).slice(1)) { const m = l.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(".*"|'.*'|true|false|-?\d+(\.\d+)?)\s*(#.*)?$/); if (m) out[m[1]] = m[2]; }
  return out;
}
function addVars(text, extra) {
  const ks = Object.keys(extra); if (!ks.length) return text;
  const add = ks.map((k) => `${k} = ${extra[k]}   # kept from my wrangler.toml / 내 설정에서 가져옴`).join('\n') + '\n';
  if (/^\s*\[vars\]\s*$/m.test(text)) return text.replace(/^(\s*\[vars\]\s*\n)/m, `$1${add}`);
  return text.replace(/\s*$/, '\n\n[vars]\n' + add);
}
// (3.14, 2-W) 통계 Analytics Engine 바인딩: 새 기본값은 주석(꺼짐 — 계정에서 AE 를 켜지 않았으면 배포가 code 10089 로 실패하므로).
//   내 wrangler.toml 에 켜진 블록이 있고 내 버전이 3.14 이상이면 = 내가 직접 켠 것 → 그대로 지킨다(데이터셋 이름도).
//   3.12·3.13 이 넣었던 블록(내 버전 < 3.14)은 지키지 않는다 → 그 때문에 막혀 있던 배포가 풀린다. 통계를 쓰던 사이트는 안내대로 한 번 다시 켠다.
function aeBlock(text) {
  return text.split(/^(?=\s*\[)/m).find((b) => /^\s*\[\[analytics_engine_datasets\]\]/.test(b) && /binding\s*=\s*"AML_STATS"/.test(b)) || null;
}
function aeTurnOn(text, dataset) {
  const ds = /^[A-Za-z0-9_]{1,64}$/.test(dataset || '') ? dataset : 'aml_site_stats';
  const on = `[[analytics_engine_datasets]]\nbinding = "AML_STATS"\ndataset = "${ds}"`;
  const re = /^#\s*\[\[analytics_engine_datasets\]\]\s*\n#\s*binding\s*=\s*"AML_STATS"\s*\n#\s*dataset\s*=\s*"[^"]*"/m;
  if (re.test(text)) return text.replace(re, on);
  return /^\s*\[vars\]/m.test(text) ? text.replace(/^(\s*\[vars\])/m, on + '\n\n$1') : text.replace(/\s*$/, '\n\n' + on + '\n');
}
const verGte = (a, b) => { const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0); } return true; };
let aeNote = null;
let tomlOut = null, tomlNote = [];
{
  const mine = (read(REPO, 'wrangler.toml') || Buffer.from('')).toString('utf8');
  const fresh = (read(NEW, 'wrangler.toml') || Buffer.from('')).toString('utf8');
  if (!fresh) stop('The new version has no wrangler.toml. / 새 버전에 wrangler.toml 이 없습니다.');
  if (!keep.has('wrangler.toml')) {
    if (/^\s*(routes?\s*=|\[\[routes\]\]|\[\[?env\.)/m.test(mine) && !FORCE) {
      stop('My wrangler.toml has routes or environments that this tool cannot merge. / 내 wrangler.toml 에 routes·env 설정이 있어 자동으로 합칠 수 없습니다.',
        'Add wrangler.toml to .github/aml-keep.txt to keep it as is, or update it by hand. / wrangler.toml 을 .github/aml-keep.txt 에 적어 그대로 두거나 직접 고치세요.');
    }
    let t = fresh;
    const name = tomlTop(mine, 'name'), acc = tomlTop(mine, 'account_id'), bucket = bucketOf(mine);
    if (name) { t = setTop(t, 'name', name); tomlNote.push(`name = "${name}"`); }
    if (acc) { t = setTop(t, 'account_id', acc); tomlNote.push('account_id'); }
    if (bucket) { t = setBucket(t, bucket); tomlNote.push(`bucket_name = "${bucket}"`); }
    const mv = varsOf(mine), nv = varsOf(t), extra = {};
    for (const k of Object.keys(mv)) if (!(k in nv)) extra[k] = mv[k];
    t = addVars(t, extra);
    if (Object.keys(extra).length) tomlNote.push('[vars] ' + Object.keys(extra).join(', '));
    const myAe = aeBlock(mine);
    if (myAe && !aeBlock(t)) {
      if (verGte(current, '3.14.0')) { t = aeTurnOn(t, (myAe.match(/dataset\s*=\s*"([^"]*)"/) || [])[1]); tomlNote.push('analytics_engine_datasets (AML_STATS)'); }
      else aeNote = true;
    }
    if (t !== mine) { tomlOut = t; }
  }
}

// ── 바꾼 결과를 따로 만들어 검사 (내 저장소는 아직 그대로) ──────────────────────────
fs.mkdirSync(STAGE, { recursive: true });
for (const r of walk(REPO)) { fs.mkdirSync(path.dirname(path.join(STAGE, r)), { recursive: true }); fs.copyFileSync(path.join(REPO, r), path.join(STAGE, r)); }
function putStage(r, buf) { fs.mkdirSync(path.dirname(path.join(STAGE, r)), { recursive: true }); fs.writeFileSync(path.join(STAGE, r), buf); }
for (const r of writes) {
  let buf = read(NEW, r);
  if (r === 'package.json' || r === 'package-lock.json') {   // 맨 위 "name" 은 내 것
    const mine = readJson(path.join(REPO, r));
    try {
      const j = JSON.parse(buf.toString('utf8'));
      if (mine && mine.name) { j.name = mine.name; if (j.packages && j.packages['']) j.packages[''].name = mine.name; }
      buf = Buffer.from(JSON.stringify(j, null, 2) + '\n');
    } catch {}
  }
  putStage(r, buf);
}
for (const r of deletes) { try { fs.unlinkSync(path.join(STAGE, r)); } catch {} }
if (tomlOut !== null) putStage('wrangler.toml', Buffer.from(tomlOut));

// JS 문법 검사. import/export 가 있는 파일(src/)은 .mjs 로 복사해 검사한다
// (Node 22 의 node --check 는 깨진 ES 모듈 .js 를 통과시킨다 — 3-8에서 확인)
function jsOk(file) {
  let f = file;
  const text = fs.readFileSync(file, 'utf8');
  if (/^\s*(import|export)\s/m.test(text)) { f = path.join(TMP, 'check-' + Math.random().toString(36).slice(2) + '.mjs'); fs.writeFileSync(f, text); }
  try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); return true; } catch { return false; }
}
const problems = [];
for (const r of walk(STAGE)) {
  if (/\.(js|mjs)$/.test(r) && /^(src|public|tools)\//.test(r)) {
    if (!jsOk(path.join(STAGE, r))) problems.push('JS: ' + r);
  }
  if (/\.json$/.test(r)) { try { JSON.parse(fs.readFileSync(path.join(STAGE, r), 'utf8')); } catch { problems.push('JSON: ' + r); } }
}
if (fs.existsSync(path.join(STAGE, 'tools', 'lang-check.js'))) {
  try { execFileSync(process.execPath, [path.join(STAGE, 'tools', 'lang-check.js')], { stdio: 'pipe', cwd: STAGE }); } catch { problems.push('language packs (tools/lang-check.js)'); }
}
{
  const t = fs.readFileSync(path.join(STAGE, 'wrangler.toml'), 'utf8');
  const before = tomlTop((read(REPO, 'wrangler.toml') || Buffer.from('')).toString('utf8'), 'name');
  if (!tomlTop(t, 'name') || (before && tomlTop(t, 'name') !== before)) problems.push('wrangler.toml name');
}
if (problems.length) stop('The new files did not pass the check. / 새 파일이 검사를 통과하지 못했습니다: ' + problems.join(', '));

// ── 내 저장소에 반영 ──────────────────────────────────────────────────────────
const changed = [];
for (const r of writes) { const b = read(STAGE, r); if (!same(read(REPO, r), b)) { fs.mkdirSync(path.dirname(path.join(REPO, r)), { recursive: true }); fs.writeFileSync(path.join(REPO, r), b); changed.push('M ' + r); } }
for (const r of deletes) { fs.unlinkSync(path.join(REPO, r)); changed.push('D ' + r); }
if (tomlOut !== null) { fs.writeFileSync(path.join(REPO, 'wrangler.toml'), tomlOut); changed.push('M wrangler.toml'); }

say('');
if (!changed.length) {
  say('✓ No file changes were needed. / 바꿀 파일이 없습니다.');
  output('changed', 'false');
  finish(0, 'Nothing to change / 바꿀 것 없음');
}
say(`✓ Ready: ${changed.length} file(s) updated to ${tag}. / ${tag} 로 파일 ${changed.length}개를 바꿨습니다.`);
for (const c of changed.slice(0, 200)) say('  ' + c);
if (tomlNote.length) say('Kept in wrangler.toml / wrangler.toml 에서 지킨 값: ' + tomlNote.join(', '));
if (aeNote) {
  say('');
  say('ⓘ Stats (Analytics Engine) are now off by default, so installs and updates never fail with "You need to enable Analytics Engine [code: 10089]". Your site works the same; only the Stats tab and the "Popular" order wait.');
  say('  To turn stats back on: Cloudflare dashboard → Storage & databases → Analytics Engine → Create Dataset → aml_site_stats (skip if you already made it), then in wrangler.toml remove "# " from the three lines under "Stats" and commit.');
  say('ⓘ 통계(Analytics Engine)는 이제 기본이 꺼짐입니다. 그래서 설치·업데이트가 "You need to enable Analytics Engine [code: 10089]" 로 멈추지 않습니다. 사이트는 그대로이고 통계 탭·인기순만 쉽니다.');
  say('  다시 켜기: Cloudflare 대시보드 → Storage & databases → Analytics Engine → Create Dataset → aml_site_stats (이미 만들었으면 건너뜀) → wrangler.toml 의 "Stats" 아래 세 줄 앞 "# " 를 지우고 Commit.');
}
if (keep.size > 1) say('Not touched (.github/aml-keep.txt) / 건드리지 않은 파일: ' + [...keep].filter((k) => k !== '.github/aml-keep.txt').join(', '));
// 워크플로 파일 안내 (GitHub 규칙상 이 버튼은 .github/workflows/ 를 바꿀 수 없다 → 사람이 한 번 붙여넣기)
function workflowGuide() {
  if (!wfNotes.length) return;
  const gh = /^https:\/\/github\.com\/([^/]+\/[^/.]+)/.exec(template);
  say('');
  say('ⓘ The site program is updated. Only the file(s) below must be changed by hand (GitHub does not let this button change workflow files). It takes 1 minute and is not urgent.');
  say('ⓘ 사이트 프로그램은 업데이트됐습니다. 아래 파일만 직접 바꿔 주세요(GitHub 규칙상 이 버튼은 워크플로 파일을 바꿀 수 없습니다). 1분이면 되고 급하지 않습니다.');
  for (const w of wfNotes) {
    say('');
    say(`**${w}**`);
    say('1. 아래 "새 내용" 칸 오른쪽 위의 복사 버튼(□)을 눌러 전부 복사합니다. / Press the copy button (□) at the top right of the "new content" box below.' +
      (gh ? ` (또는 / or open https://github.com/${gh[1]}/blob/${tag}/${w} → **Copy raw file**)` : ''));
    say(`2. GitHub 내 저장소에서 파일 \`${w}\` 을 엽니다 (Code 탭 → 폴더를 차례로 클릭). / Open \`${w}\` in my repository.`);
    say('3. 오른쪽 위 **연필 아이콘(Edit this file)** 을 누릅니다. / Press the pencil icon (Edit this file).');
    say('4. 편집 칸을 한 번 누르고 **Ctrl+A**(Mac: Cmd+A)로 전부 선택 → **Ctrl+V**(Mac: Cmd+V)로 붙여넣기. / Select all, then paste.');
    say('5. 오른쪽 위 초록 **Commit changes...** → 창에서 다시 **Commit changes**. / Press Commit changes twice.');
    say('');
    say('새 내용 / new content:');
    say('```yaml');
    say(read(NEW, w).toString('utf8').replace(/```/g, "'''").trimEnd());
    say('```');
  }
}
output('changed', 'true');
output('version', tag);
if (COMMIT) {
  // 커밋 → push. Cloudflare(Workers Builds)가 이 push 를 보고 자동으로 배포한다.
  try {
    git(['add', '-A'], { cwd: REPO });
    git(['-c', 'user.name=aml-update[bot]', '-c', 'user.email=aml-update@users.noreply.github.com', 'commit', '-q', '-m', `Update site program to ${tag} (Update from template)`], { cwd: REPO });
    git(['push', '-q'], { cwd: REPO });
  } catch (e) {
    stop('Could not save (push) to my repository. / 내 저장소에 저장(push)하지 못했습니다.',
      String(e.stderr || e.message).split('\n')[0] + ' — Settings → Actions → General → Workflow permissions → "Read and write permissions" → Save, then run again.');
  }
  say('');
  say('✓ Saved to my repository. Cloudflare → Workers & Pages → my Worker → Deployments shows the new build in 1–3 minutes. / 저장했습니다. 1~3분 뒤 Cloudflare Deployments 에 새 배포가 보입니다.');
}
workflowGuide();
finish(0, `Updated to ${tag} / ${tag} 로 업데이트`);
