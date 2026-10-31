// src/usage.js — Cloudflare 사용량 (결정사항 F, 채팅 3-5)
// -----------------------------------------------------------------------------
// 설치 때 받은 "읽기 전용 통계 토큰"(권한 2줄: Account → Account Analytics → Read, Account → Account Settings → Read)으로
// Cloudflare GraphQL Analytics API를 읽어 무료 한도 대비 %를 보여 준다.
//   - 계정 ID는 토큰으로 찾는다: GET /accounts (Account Settings: Read 필요). 목록이 비면 아티스트가 계정 ID를 직접 넣는다(3-7)
//   - 데이터셋 (2026-10-28 Cloudflare 문서 확인)
//       workersInvocationsAdaptive   sum.requests        → Workers 요청 (오늘, UTC 0시부터)
//       r2OperationsAdaptiveGroups   sum.requests × actionType → R2 쓰기(Class A)·읽기(Class B) (이번 달)
//       r2StorageAdaptiveGroups      max.payloadSize+metadataSize → R2 저장 용량 (가장 최근 값, 버킷 합계)
//   - 결과는 10분 캐시: Worker 메모리 + R2 meta/usage.json(바뀔 때만 쓰기). workers.dev에서는 Cache API가 동작하지 않아 R2를 쓴다.
// 시험용: 환경변수 AML_CF_API_BASE 로 가짜 서버 주소를 줄 수 있다 (기본 https://api.cloudflare.com/client/v4).
// -----------------------------------------------------------------------------
import { KEY, fail, getJson, nowIso } from './common.js';

export const FREE = {           // 무료 한도 (2026-10-28 Cloudflare 문서 확인)
  r2_storage: 10 * 1e9,         // 10 GB-month (Cloudflare 요금 단위 GB = 10^9 바이트)
  r2_class_a: 1_000_000,        // 월 100만 (쓰기 등)
  r2_class_b: 10_000_000,       // 월 1,000만 (읽기 등)
  workers_requests: 100_000,    // 하루 10만 (UTC 0시 = 한국 09:00 초기화)
};
// R2 작업 종류 (Cloudflare R2 요금 문서). 목록에 없는 이름은 Class A로 센다(보수적으로).
const CLASS_B = new Set(['HeadBucket', 'HeadObject', 'GetObject', 'UsageSummary', 'GetBucketEncryption', 'GetBucketLocation', 'GetBucketCors', 'GetBucketLifecycleConfiguration']);
const FREE_OPS = new Set(['DeleteObject', 'DeleteBucket', 'AbortMultipartUpload']);
const CACHE_MS = 10 * 60 * 1000;
const TOKEN_RE = /^[A-Za-z0-9_\-.]{20,200}$/;
const ACCOUNT_RE = /^[a-f0-9]{32}$/;

const cfBase = (env) => String(env.AML_CF_API_BASE || 'https://api.cloudflare.com/client/v4').replace(/\/+$/, '');

async function cfFetch(env, token, path, body) {
  let res;
  try {
    res = await fetch(cfBase(env) + path, {
      method: body ? 'POST' : 'GET',
      headers: { authorization: 'Bearer ' + token, 'content-type': 'application/json', accept: 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(8000),
    });
  } catch { fail(502, 'err.cf.unreachable'); }
  let data = null;
  try { data = await res.json(); } catch {}
  if (res.status === 401 || res.status === 403) fail(400, 'err.cf.token_invalid');
  if (!res.ok || !data) fail(502, 'err.cf.unreachable', { status: res.status });
  return data;
}

// 토큰 → 계정 목록 [{id,name}]
async function accountsOf(env, token) {
  const d = await cfFetch(env, token, '/accounts?per_page=50');
  if (d.success === false) fail(400, 'err.cf.token_invalid');
  return (Array.isArray(d.result) ? d.result : [])
    .filter((a) => a && ACCOUNT_RE.test(a.id || ''))
    .map((a) => ({ id: a.id, name: String(a.name || '').slice(0, 80) }));
}

// GraphQL 실행. 권한이 없으면 errors에 들어온다.
async function gql(env, token, query) {
  const d = await cfFetch(env, token, '/graphql', { query });
  if (Array.isArray(d.errors) && d.errors.length) {
    const msg = String(d.errors[0] && d.errors[0].message || '').slice(0, 120);
    if (/auth|permission|not authorized|access/i.test(msg)) fail(400, 'err.cf.permission');
    fail(502, 'err.cf.query_failed', { message: msg });
  }
  const acc = d.data && d.data.viewer && d.data.viewer.accounts && d.data.viewer.accounts[0];
  if (!acc) fail(400, 'err.cf.permission');
  return acc;
}

// 설치 화면의 "토큰 검사": 맞는 권한(Account Analytics: Read)인지 실제로 한 번 조회해 본다.
// account_id를 주면 그 계정으로, 없으면 토큰이 볼 수 있는 계정이 1개일 때 그것으로.
// 3-7: 토큰에 Account Settings: Read 가 없으면 GET /accounts 가 빈 목록이다(실서버 확인).
//      그때는 err.cf.no_account → 화면이 "계정 ID 직접 입력" 칸을 보여 주고, 입력한 ID(32자리)로 바로 조회해 본다.
export async function checkToken(env, token, accountId) {
  token = String(token || '').trim();
  if (!TOKEN_RE.test(token)) fail(400, 'err.cf.token_format');
  accountId = String(accountId || '').trim().toLowerCase();
  if (accountId && !ACCOUNT_RE.test(accountId)) fail(400, 'err.cf.account_id_format');
  const accounts = await accountsOf(env, token);
  let acc = accountId ? accounts.find((a) => a.id === accountId) : null;
  if (!accounts.length) {
    if (!accountId) fail(400, 'err.cf.no_account');
    acc = { id: accountId, name: '' };                // 직접 입력한 계정 ID (이름은 알 수 없음)
  }
  if (!acc) {
    if (accounts.length > 1 && !accountId) return { need_choice: true, accounts };
    acc = accounts[0];
  }
  const now = new Date();
  const from = new Date(now.getTime() - 3600 * 1000);
  try {
    await gql(env, token, `{ viewer { accounts(filter: {accountTag: "${acc.id}"}) {
      workersInvocationsAdaptive(limit: 1, filter: {datetime_geq: "${iso(from)}", datetime_leq: "${iso(now)}"}) { sum { requests } } } } }`);
  } catch (e) {
    // 직접 입력한 계정 ID로 조회가 안 되면: ID가 틀렸거나 토큰에 Account Analytics: Read 가 없다
    if (!accounts.length && e.code === 'err.cf.permission') fail(400, 'err.cf.account_id_wrong');
    throw e;
  }
  return { token, account: acc, accounts, manual: !accounts.length };
}

const iso = (d) => d.toISOString().replace(/\.\d{3}Z$/, 'Z');

// 사용량 숫자 4개 (+ 업로드 기록 크기)
async function fetchUsage(env, token, accountId) {
  const now = new Date();
  const dayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const storStart = new Date(now.getTime() - 2 * 86400 * 1000);
  // 변수 대신 값(계정 ID 형식 검사됨·날짜)을 직접 넣는다 — 데이터셋마다 날짜 타입 이름이 달라서
  const q = `{ viewer { accounts(filter: {accountTag: "${accountId}"}) {
    w: workersInvocationsAdaptive(limit: 10000, filter: {datetime_geq: "${iso(dayStart)}", datetime_leq: "${iso(now)}"}) { sum { requests } }
    ops: r2OperationsAdaptiveGroups(limit: 10000, filter: {datetime_geq: "${iso(monthStart)}", datetime_leq: "${iso(now)}"}) { sum { requests } dimensions { actionType } }
    st: r2StorageAdaptiveGroups(limit: 10000, filter: {datetime_geq: "${iso(storStart)}", datetime_leq: "${iso(now)}"}, orderBy: [datetime_DESC]) { max { payloadSize metadataSize } dimensions { datetime bucketName } }
  } } }`;
  const acc = await gql(env, token, q);
  const workers = (acc.w || []).reduce((s, r) => s + (r.sum && r.sum.requests || 0), 0);
  let a = 0, b = 0;
  for (const r of acc.ops || []) {
    const n = r.sum && r.sum.requests || 0, act = r.dimensions && r.dimensions.actionType || '';
    if (FREE_OPS.has(act)) continue;
    if (CLASS_B.has(act)) b += n; else a += n;
  }
  // 버킷마다 가장 최근 값만 더한다 (계정 전체 무료 10GB 기준)
  const latest = {};
  for (const r of acc.st || []) {
    const k = r.dimensions && r.dimensions.bucketName || '';
    const t = r.dimensions && r.dimensions.datetime || '';
    if (!latest[k] || latest[k].t < t) latest[k] = { t, bytes: (r.max && r.max.payloadSize || 0) + (r.max && r.max.metadataSize || 0) };
  }
  const storage = Object.values(latest).reduce((s, x) => s + x.bytes, 0);
  return {
    r2_storage: { used: storage, limit: FREE.r2_storage, period: 'now' },
    r2_class_a: { used: a, limit: FREE.r2_class_a, period: 'month' },
    r2_class_b: { used: b, limit: FREE.r2_class_b, period: 'month' },
    workers_requests: { used: workers, limit: FREE.workers_requests, period: 'day' },
  };
}

let memo = null; // { at, value }

// GET /api/admin/usage — 10분 캐시. 실패하면 이유 코드(+ 마지막 성공 값)를 돌려준다.
export async function getUsage(env, admin, force) {
  const nowMs = Date.now();
  // 성공 값은 10분, 실패는 1분 동안 같은 결과를 보여 준다 (토큰을 고친 뒤 금방 다시 확인할 수 있게)
  if (!force && memo && nowMs - memo.at < (memo.value.ok ? CACHE_MS : 60 * 1000)) return { ...memo.value, cached: true };
  if (!force) {
    const { data } = await getJson(env, KEY.usage);
    if (data && data.ok && nowMs - Date.parse(data.at) < CACHE_MS) { memo = { at: Date.parse(data.at), value: data }; return { ...data, cached: true }; }
  }
  const cf = admin && admin.cf || {};
  let value;
  if (!cf.token || !cf.account_id) {
    value = { ok: false, at: nowIso(), error: { code: 'err.cf.no_token' }, limits: FREE };
  } else {
    try {
      value = { ok: true, at: nowIso(), items: await fetchUsage(env, cf.token, cf.account_id), limits: FREE };
    } catch (e) {
      value = { ok: false, at: nowIso(), error: { code: e.code || 'err.cf.unreachable', params: e.params }, limits: FREE };
      const { data } = await getJson(env, KEY.usage);
      if (data && data.ok) value.last = { at: data.at, items: data.items }; // 마지막으로 성공한 값
    }
  }
  memo = { at: nowMs, value };
  if (value.ok) await env.BUCKET.put(KEY.usage, JSON.stringify(value), { httpMetadata: { contentType: 'application/json' } });
  return { ...value, cached: false };
}
export function clearUsageMemo() { memo = null; }
