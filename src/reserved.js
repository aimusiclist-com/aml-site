// (M-7) 유명 음악가 이름 사칭 막기 — 비교 규칙. 목록 원본은 aimusiclist 저장소 data/reserved-names/ (형식: 그 저장소 docs/유명인_이름_목록.md)
// 이 저장소에는 빌드로 만든 비교표만 있다: node tools/sync-reserved-names.mjs ../aimusiclist → src/reserved-names.json · php/app/data/reserved-names.json
// 규칙은 aimusiclist app/lib/ReservedNames.php · php/app/lib/reserved.php 와 한 글자도 다르지 않게 (시험 dev/reserved-test.mjs = 같은 표 dev/reserved_names_cases.json)
//  norm: NFKC → 소문자 → ß·æ·ø… 풀기 → 악센트(U+0300–036F) 빼기 → 히라가나→가타카나 → 따옴표 빼기 → 글자·숫자·표시 외 = 띄어쓰기
//  exact(x) = 완전히 같을 때만 · word(w) = 낱말 단위로 들어 있어도 · c = 한글·한자·가나(3글자+)·타이 등(4글자+) 은 글자 속에 들어 있어도

const SPECIAL = { 'ß': 'ss', 'ẞ': 'ss', 'æ': 'ae', 'œ': 'oe', 'ø': 'o', 'đ': 'd', 'ð': 'd', 'ł': 'l', 'þ': 'th', 'ı': 'i', 'ħ': 'h', 'ŧ': 't', 'ŋ': 'n', 'ĸ': 'k', 'ς': 'σ', '$': 's' };
const SPECIAL_RE = new RegExp('[' + Object.keys(SPECIAL).join('').replace(/\$/g, '\\$') + ']', 'g');
const NOSPACE = /[\p{Script=Hangul}\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u;
const NOSPACE4 = /[\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u;
const ANY_NOSPACE = /[\p{Script=Hangul}\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u;
const SPLIT = /(?<=[\p{Script=Latin}\p{N}])(?=[^\p{Script=Latin}\p{N}\p{M}])|(?<=[^\p{Script=Latin}\p{N}])(?=[\p{Script=Latin}\p{N}])/u;
const KANA_ONLY = /^[\p{Script=Katakana}\p{Script=Hiragana}ー]+$/u;

export function norm(s) {
  s = String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').normalize('NFKC').toLowerCase().replace(SPECIAL_RE, (c) => SPECIAL[c]);
  s = s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
  s = s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  s = s.replace(/['’‘`ʼ´ʻ]/g, '');
  return s.replace(/[^\p{L}\p{N}\p{M}]+/gu, ' ').trim();
}
export function tokens(n) {
  if (!n) return [];
  const out = [];
  for (const w of n.split(' ')) for (const p of w.split(SPLIT)) if (p) out.push(p);
  return out;
}
const len = (s) => [...s].length;
export const compact = (s) => norm(s).split(' ').join('');

// 목록 → 비교표 (tools/sync-reserved-names.mjs 가 부름). aimusiclist ReservedNames::compile 과 같다
export function compile(lists, common) {
  const cm = new Set(common.map(compact).filter(Boolean));
  const x = new Map(), w = new Map(), c = new Map();
  let m = 1, cmax = 0, n = 0;
  for (const list of lists) {
    for (const entry of (list && list.names) || []) {
      if (!Array.isArray(entry) || !entry.length) continue;
      n++;
      const first = String(entry[0]).trimStart();
      const firstExact = first.startsWith('=');
      const show = first.replace(/^=/, '').trimStart();
      for (let v of entry) {
        if (typeof v !== 'string') continue;
        v = v.trimStart();
        const mark = v.startsWith('=');
        const nv = norm(mark ? v.slice(1) : v);
        if (!nv) continue;
        const tok = nv.split(' ');
        const k = tok.join('');
        const L = len(k);
        const exact = mark || L <= 2 || cm.has(k) || (firstExact && KANA_ONLY.test(k));
        if (exact) { if (!x.has(k)) x.set(k, show); continue; }
        if (!w.has(k)) w.set(k, show);
        m = Math.max(m, tokens(nv).length);
        if ((L >= 3 && NOSPACE.test(k)) || (L >= 4 && NOSPACE4.test(k))) { if (!c.has(k)) c.set(k, show); cmax = Math.max(cmax, L); }
      }
    }
  }
  for (const k of w.keys()) x.delete(k);
  return { x, w, c, m: Math.min(m, 12), cm: Math.min(cmax, 40), n };
}

// 비교표 → 찾기 함수. Worker 무료 요금제는 요청당 CPU 10ms 라서 배열·Set 을 만들지 않는다:
//   빌드가 꼴을 길이(UTF-16 글자 수)별로 정렬해 이어 붙인 글자 하나로 넣어 두고({x: {"5": "queenrainb…"}}), 여기서는 그 안을 이진 탐색만 한다.
//   (배열 형식 {x: [...]} 도 받는다 — 시험·PHP판 파일)
function finder(b) {
  if (Array.isArray(b)) { const s = new Set(b); return { has: (k) => s.has(k), size: s.size }; }
  let size = 0;
  for (const L in b) size += b[L].length / +L;
  return {
    size,
    has(k) {
      const L = k.length, s = b[L];
      if (!s) return false;
      let lo = 0, hi = s.length / L - 1;
      while (lo <= hi) {
        const m = (lo + hi) >> 1, v = s.substr(m * L, L);
        if (v === k) return true;
        if (v < k) lo = m + 1; else hi = m - 1;
      }
      return false;
    },
  };
}
export function table(json) {
  return { x: finder(json.x), w: finder(json.w), c: finder(json.c), m: json.m, cm: json.cm };
}
// 빌드용: 정렬된 배열 → 길이별 이어 붙인 글자
export function buckets(keys) {
  const out = {};
  for (const k of [...keys].sort()) (out[k.length] ??= []).push(k);
  for (const L in out) out[L] = out[L].join('');
  return out;
}

// 걸리면 걸린 꼴(문자열), 아니면 null
export function check(input, t) {
  const n = norm(input);
  if (!n) return null;
  const tok = tokens(n);
  const all = tok.join('');
  if (t.x.has(all)) return all;
  for (let i = 0; i < tok.length; i++) {
    let acc = '';
    for (let j = i; j < tok.length && j < i + t.m; j++) {
      acc += tok[j];
      if (t.w.has(acc)) return acc;
    }
  }
  if (t.c.size && ANY_NOSPACE.test(all)) {
    const ch = Array.from(all);
    for (let i = 0; i < ch.length; i++) {
      let acc = '';
      for (let j = i; j < ch.length && j < i + t.cm; j++) {
        acc += ch[j];
        if (j - i >= 2 && t.c.has(acc)) return acc;
      }
    }
  }
  return null;
}

// Worker: 비교표는 관리 화면 저장 때만 쓰므로 처음 쓸 때 불러온다 (방문자 요청에는 읽지 않음)
let T = null;
export async function famous(names) {
  if (!T) T = table((await import('./reserved-names.json')).default);
  for (const s of names) if (typeof s === 'string' && s.trim() && check(s, T)) return s;
  return null;
}
