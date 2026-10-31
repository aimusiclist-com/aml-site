mp3.wasm — LAME 3.100 MP3 encoder compiled to WebAssembly (from wasm-media-encoders 0.7.0, unmodified).

LAME is free software licensed under the GNU Lesser General Public License (LGPL),
version 2 or (at your option) any later version.
  LAME home page and source code: https://lame.sourceforge.io/
  Build scripts for this .wasm:  https://github.com/arseneyr/wasm-media-encoders
  LGPL text:                      https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html

This file is a separate, replaceable module. It is loaded only by the admin page's
WAV-to-MP3 converter (/_app/wav-mp3.js) when the site owner picks a WAV file.
You may replace mp3.wasm with your own build of LAME (same wasm-media-encoders version).

WasmMediaEncoder.min.js — wasm-media-encoders 0.7.0 loader, MIT License (LICENSE-wasm-media-encoders.txt).
