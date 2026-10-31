// src/aitools.js — 곡마다 "만든 AI 툴" (채팅 3-20)
// -----------------------------------------------------------------------------
// 목록 원본은 우리사이트 GET /api/v1/ai-tools.json (config/ai-tools.json):
//   {"schema":"ai-tools-1","tools":[{"id":"suno","name":"Suno","kind":"web"},…,{"id":"other","name":"Other","kind":"other"}]}
//   - id 는 영원히 같은 뜻(^[a-z0-9-]{1,24}$). 없앨 툴은 지우지 않고 "hidden": true → 새로 고를 수 없지만 이미 고른 곡은 그대로 보인다.
//   - 툴이 늘어도 개인사이트 업데이트가 필요 없게, 장르(genres.json)와 같은 흐름으로 받아 쓴다:
//     Workers = 방문자 페이지를 다시 만들 때 받기(3초) → 받은 것을 R2 meta/ai-tools.json 에 저장 → 못 받으면 그 마지막 것 → 그것도 없으면 내장 목록
//     PHP     = cron 하루 1번 ETag (php/app/lib/cron.php refreshAiTools) → kv ai_tools → 내장 목록
//     관리 화면 = 브라우저가 우리사이트에서 바로 받기 → 실패하면 내장 목록 /_app/ai-tools.json (admin.js loadAiTools)
//   - 내장 목록 = public/_app/ai-tools.json (처음 목록 16개, 2026-10-31).
// 저장: db.json tracks[id].ai_tool (값 없음 = 필드 없음). catalog tracks[].ai_tool (값 있을 때만, 연동규약 선택 필드).
// 서버는 형식만 검사한다(목록에 없는 새 id 도 받음 — 목록이 우리사이트에서 늘기 때문). 우리사이트가 목록에 없는 값을 버린다.
// -----------------------------------------------------------------------------
import BUILTIN from '../public/_app/ai-tools.json';
import { fail } from './common.js';

export const AI_TOOL_RE = /^[a-z0-9-]{1,24}$/;
export const AI_TOOLS_KEY = 'meta/ai-tools.json';
const MAX_BYTES = 65536;

// 목록 → { id: { name, kind, hidden } }. 형식이 틀리면 null (그 목록은 쓰지 않는다)
export function aiToolIndex(doc) {
  if (!doc || typeof doc !== 'object' || doc.schema !== 'ai-tools-1' || !Array.isArray(doc.tools)) return null;
  const idx = {};
  for (const x of doc.tools.slice(0, 500)) {
    if (!x || typeof x !== 'object' || typeof x.id !== 'string' || !AI_TOOL_RE.test(x.id) || idx[x.id]) continue;
    const name = typeof x.name === 'string' ? x.name.trim().slice(0, 40) : '';
    idx[x.id] = { name: name || x.id, kind: typeof x.kind === 'string' ? x.kind.slice(0, 16) : '', hidden: x.hidden === true };
  }
  return Object.keys(idx).length ? idx : null;
}
export const BUILTIN_INDEX = aiToolIndex(BUILTIN);

// 관리 API 값 검사: null·'' = 선택 안 함(필드 삭제)
export function vAiTool(v) {
  if (v == null || v === '') return null;
  if (typeof v !== 'string' || !AI_TOOL_RE.test(v)) fail(400, 'err.request.invalid', { field: 'ai_tool' });
  return v;
}
// catalog 에 넣을 값 (형식이 맞을 때만, 아니면 undefined = 넣지 않음)
export function aiToolForCatalog(v) {
  return typeof v === 'string' && AI_TOOL_RE.test(v) ? v : undefined;
}

// 우리사이트 목록 받기 (페이지를 다시 만들 때만 — 방문자 요청 수에 영향 없음)
export async function loadAiTools(env) {
  const base = (env.AML_API_BASE || '').replace(/\/+$/, '');
  if (base.startsWith('https://')) {
    try {
      const r = await fetch(base + '/ai-tools.json', { signal: AbortSignal.timeout(3000) });
      const txt = r.ok ? await r.text() : '';
      if (txt && txt.length <= MAX_BYTES) {
        let doc = null;
        try { doc = JSON.parse(txt); } catch (_) { /* 마지막 것으로 */ }
        const idx = aiToolIndex(doc);
        if (idx) {
          const j = JSON.stringify(doc);
          try {   // 마지막 것으로 저장 (바뀌었을 때만 — 쓰기 횟수 아끼기)
            const old = await env.BUCKET.get(AI_TOOLS_KEY);
            if (!old || (await old.text()) !== j) await env.BUCKET.put(AI_TOOLS_KEY, j, { httpMetadata: { contentType: 'application/json' } });
          } catch (_) { /* 저장 실패해도 이번 목록은 쓴다 */ }
          return idx;
        }
      }
    } catch (_) { /* 마지막 것으로 */ }
  }
  try {
    const o = await env.BUCKET.get(AI_TOOLS_KEY);
    if (o) { const idx = aiToolIndex(JSON.parse(await o.text())); if (idx) return idx; }
  } catch (_) { /* 내장 목록으로 */ }
  return BUILTIN_INDEX;
}

// 페이지에 넣을 이름표: { id: 이름 } — 쓰인 id 만. 목록에 없는 id 는 id 그대로(글자로만 보임)
export function pickAiToolNames(idx, ids) {
  const out = {};
  for (const id of ids) {
    if (typeof id !== 'string' || !AI_TOOL_RE.test(id)) continue;
    out[id] = (idx && idx[id] && idx[id].name) || (BUILTIN_INDEX[id] && BUILTIN_INDEX[id].name) || id;
  }
  return out;
}
