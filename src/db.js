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
  if (!obj) return { db: emptyDb(), etag: null };
  let data = null;
  try { data = await obj.json(); } catch {}
  return { db: normalizeDb(data), etag: obj.etag };
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

