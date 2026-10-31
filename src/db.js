// src/db.js — 곡·앨범 원본 meta/db.json 읽기·쓰기 (채팅 3-5)
// v2: 곡·앨범의 public → aml(aimusiclist 공개), artist null = "사이트 이름 사용", site.artists = 가상 아티스트, dirty 삭제
import { KEY, fail, nowIso, PAGE_GEN } from './common.js';

function emptyDb() {
  return { v: 2, site: { name: 'My Music', artist_name: 'My Music', default_lang: 'en', description: '', artists: [] }, tracks: {}, albums: {} };
}
// 옛 db.json(v1)을 v2로 옮긴다. 저장은 다음 변경 때 함께 된다.
export function normalizeDb(db) {
  if (!db || typeof db !== 'object') return emptyDb();
  db.site = db.site || {};
  if (!Array.isArray(db.site.artists)) db.site.artists = [];
  db.tracks = db.tracks || {}; db.albums = db.albums || {};
  if (db.v !== 2) {
    for (const t of Object.values(db.tracks)) {
      if (t.aml === undefined) t.aml = !!t.public;   // 이전 "공개" = aimusiclist 공개
      delete t.public;
      if (t.artist === db.site.name) t.artist = null; // 사이트 이름과 같으면 "사이트 이름 사용"
    }
    for (const a of Object.values(db.albums)) {
      if (a.aml === undefined) a.aml = !!a.public;
      delete a.public;
      if (a.artist === db.site.name) a.artist = null;
    }
    delete db.dirty;
    db.migrated_from = db.v || 1;
    db.v = 2;
  }
  return db;
}
export async function loadDb(env) {
  const obj = await env.BUCKET.get(KEY.db);
  if (!obj) return { db: withPub0(emptyDb()), etag: null };
  let data = null;
  try { data = await obj.json(); } catch {}
  return { db: withPub0(normalizeDb(data)), etag: obj.etag };
}
export async function saveDb(env, db, etag) {
  db.updated_at = nowIso();
  const opts = { httpMetadata: { contentType: 'application/json' } };
  if (etag) opts.onlyIf = { etagMatches: etag };
  const res = await env.BUCKET.put(KEY.db, JSON.stringify(db), opts);
  if (!res) fail(409, 'err.conflict');
  PAGE_GEN.n++;
}
export const artistOf = (x, site) => x.artist || site.name;


// ===== 3-21: "10곡은 꼭 공개" — 공개 곡 수 ≥ min(10, 전체 곡 수) =====
// 공개 = aimusiclist catalog 에 들어가는 곡(음원 있음 + (곡 공개 켜짐 또는 공개 앨범에 들어 있음)).
// 전체 = 음원이 있는 곡 (음원을 아직 안 올린 곡은 어느 쪽에도 세지 않는다).
// aimusiclist 가 신고 등으로 숨긴 곡은 엔진이 모른다 → catalog 에 그대로 있으므로 "공개"로 센다.
// php/app/lib/catalog.php Change::pubCount 와 같은 규칙.
export const MIN_PUBLIC = 10;
export function pubCount(db) {
  const inAlbum = new Set();
  for (const a of Object.values(db.albums || {})) if (a.aml) for (const id of a.track_ids || []) inAlbum.add(id);
  let pub = 0, total = 0;
  for (const t of Object.values(db.tracks || {})) {
    if (!t.has_audio) continue;
    total++;
    if (t.aml || inAlbum.has(t.id)) pub++;
  }
  return { pub, total, need: Math.min(MIN_PUBLIC, total) };
}
// 모자란 곡 수 (0 = 규칙 지킴)
export const pubShort = (c) => Math.max(0, c.need - c.pub);
// 읽은 그대로의 공개 상태를 db 에 숨겨 붙인다(저장되지 않음) → finish 가 바뀐 뒤와 비교
function withPub0(db) { Object.defineProperty(db, '_pub0', { value: pubCount(db), configurable: true }); return db; }
// 변경 뒤 모자란 곡 수가 읽었을 때보다 늘면 거부 (규칙보다 적은 기존 사이트는 그대로 두고, 더 줄이는 것만 막는다)
export function checkMinPublic(db) {
  const before = db._pub0;
  if (!before) return;
  const after = pubCount(db);
  if (pubShort(after) > pubShort(before)) fail(422, 'err.track.min_public', { public: after.pub, need: after.need, total: after.total });
}
