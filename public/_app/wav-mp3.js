// 3-11 관리 화면 전용 Web Worker: WAV → MP3 320kbps CBR (아티스트의 브라우저에서 바꾼다. 서버·API 는 그대로 MP3·M4A 만 받음)
// 관리 화면이 WAV 를 골랐을 때만 new Worker('/_app/wav-mp3.js') 로 부른다 → 방문자 화면·관리 화면 첫 로드 크기 변화 0.
// 인코더: mp3enc/ = wasm-media-encoders 0.7.0 (MIT) 의 작은 로더 + LAME 3.100 을 WebAssembly 로 만든 mp3.wasm (LGPL).
//   고치지 않은 원본 그대로, 따로 된 파일. 외부 주소는 부르지 않는다(wasm 은 같은 사이트에서 바이트로 받아 넘김). docs/아이콘_글꼴_라이선스.md
// 받는 것: { file: File, max: 바꾼 MP3 최대 바이트, min: 최소 초, maxSec: 최대 초 }
// 보내는 것: { p: 0~100 } 진행률 여러 번 → { blob, duration, rate, ch, bits } 또는 { err: 'fmt' | 'big' | 'len' | 'read' }
// 지원: PCM 16bit·24bit, 44.1kHz·48kHz, 모노·스테레오. 48kHz 는 48kHz 그대로(MP3 가 48kHz 를 지원 → 다시 샘플링 없음 = 손해 없음).
//       24bit 는 소수(float)로 넘겨 LAME 이 그대로 쓴다(16bit 로 깎지 않음). 32bit float·8bit·그 밖 = 'fmt'
importScripts('mp3enc/WasmMediaEncoder.min.js');

var KBPS = 320, wasm = null;

onmessage = function (e) {
  var d = e.data || {};
  run(d.file, d.max || 15728640, d.min || 30, d.maxSec || 900)
    .then(function (r) { postMessage(r); }, function (x) { postMessage({ err: x && x.err ? x.err : 'read' }); });
};

function bytes(file, at, n) { return new Uint8Array(new FileReaderSync().readAsArrayBuffer(file.slice(at, at + n))); }
function str(b, i) { return String.fromCharCode(b[i], b[i + 1], b[i + 2], b[i + 3]); }
function u16(b, i) { return b[i] | b[i + 1] << 8; }
function u32(b, i) { return (b[i] | b[i + 1] << 8 | b[i + 2] << 16 | b[i + 3] << 24) >>> 0; }

// 머리글: RIFF/WAVE 안의 'fmt ' 와 'data' 를 찾는다 (사이에 LIST 등 다른 덩어리가 있어도 됨)
function header(file) {
  var h = bytes(file, 0, 12);
  if (h.length < 12 || str(h, 0) !== 'RIFF' || str(h, 8) !== 'WAVE') throw { err: 'fmt' };
  var pos = 12, fmt = null;
  while (pos + 8 <= file.size) {
    var c = bytes(file, pos, 8), id = str(c, 0), size = u32(c, 4);
    if (id === 'fmt ') {
      var f = bytes(file, pos + 8, Math.min(size, 40)), tag = u16(f, 0);
      if (tag === 0xFFFE && f.length >= 26) tag = u16(f, 24);   // WAVE_FORMAT_EXTENSIBLE → 안쪽 형식
      fmt = { tag: tag, ch: u16(f, 2), rate: u32(f, 4), align: u16(f, 12), bits: u16(f, 14) };
    } else if (id === 'data') {
      if (!fmt) throw { err: 'fmt' };
      var end = size && pos + 8 + size <= file.size ? pos + 8 + size : file.size;   // 길이가 0·잘못 적힌 WAV 는 파일 끝까지
      fmt.start = pos + 8; fmt.len = end - fmt.start;
      return fmt;
    }
    pos += 8 + size + (size & 1);
  }
  throw { err: 'fmt' };
}

function encoder() {
  if (!wasm) wasm = fetch('mp3enc/mp3.wasm').then(function (r) { if (!r.ok) throw 0; return r.arrayBuffer(); });
  return wasm.then(function (buf) { return WasmMediaEncoder.createEncoder('audio/mpeg', buf.slice(0)); });
}

function run(file, maxBytes, minSec, maxSec) {
  var f;
  try { f = header(file); } catch (x) { return Promise.reject(x); }
  if (f.tag !== 1 || (f.bits !== 16 && f.bits !== 24) || (f.ch !== 1 && f.ch !== 2) ||
      (f.rate !== 44100 && f.rate !== 48000) || f.align !== f.ch * f.bits / 8) return Promise.resolve({ err: 'fmt' });
  var frames = Math.floor(f.len / f.align), duration = Math.round(frames / f.rate);
  if (duration < minSec || duration > maxSec) return Promise.resolve({ err: 'len', duration: duration });
  if (frames / f.rate * KBPS * 125 > maxBytes) return Promise.resolve({ err: 'big', duration: duration });   // 바꾸기 전에 미리 막음 (320kbps = 40,000 B/초)

  return encoder().then(function (enc) {
    enc.configure({ channels: f.ch, sampleRate: f.rate, outputSampleRate: f.rate, bitrate: KBPS });
    var BLOCK = 1152 * 64, out = [], size = 0, done = 0, last = -1, sb = f.bits / 8;
    var pcm = [new Float32Array(BLOCK)]; if (f.ch === 2) pcm.push(new Float32Array(BLOCK));
    var put = function (u8) { if (u8.length) { out.push(new Uint8Array(u8)); size += u8.length; } };   // 복사: wasm 메모리는 다음 호출에 덮임
    while (done < frames) {
      var n = Math.min(BLOCK, frames - done), b = bytes(file, f.start + done * f.align, n * f.align);
      for (var i = 0, p = 0; i < n; i++) {
        for (var c = 0; c < f.ch; c++, p += sb) {
          pcm[c][i] = sb === 2 ? ((b[p] | b[p + 1] << 8) << 16 >> 16) / 32768
            : ((b[p] | b[p + 1] << 8 | b[p + 2] << 16) << 8 >> 8) / 8388608;
        }
      }
      put(enc.encode(pcm.map(function (a) { return a.subarray(0, n); })));
      if (size > maxBytes) return { err: 'big', duration: duration };
      done += n;
      var pct = Math.floor(done * 100 / frames);
      if (pct !== last) { last = pct; postMessage({ p: pct }); }
    }
    put(enc.finalize());
    if (size > maxBytes) return { err: 'big', duration: duration };
    return { blob: new Blob(out, { type: 'audio/mpeg' }), duration: duration, rate: f.rate, ch: f.ch, bits: f.bits };
  });
}
