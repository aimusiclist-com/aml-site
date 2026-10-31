/* public/_app/preview.js — 관리 화면 "스킨 미리보기" 창 전용 (3-10). 방문자 페이지에는 들어가지 않는다.
 * 미리보기는 sandbox iframe(다른 출처 취급)이라 다른 파일의 SVG <use href="/_app/icons.svg#…"> 가 막힌다.
 * 서버가 페이지 안에 넣어 둔 아이콘 묶음(#i-이름, #s-이름)을 가리키도록 바꾸고, 바깥으로 나가는 링크는 누르지 않게 한다.
 */
(function () {
  'use strict';
  var RE = /^\/_app\/(icons|socials)\.svg(\?[^#]*)?#(.+)$/, busy = false;
  function fix() {
    busy = false;
    var us = document.getElementsByTagName('use');
    for (var i = 0; i < us.length; i++) {
      var m = (us[i].getAttribute('href') || '').match(RE);
      if (m) us[i].setAttribute('href', '#' + m[1].charAt(0) + '-' + m[3]);
    }
  }
  fix();
  new MutationObserver(function () { if (!busy) { busy = true; requestAnimationFrame(fix); } })
    .observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a && a.getAttribute('href').charAt(0) !== '#') e.preventDefault();
  }, true);
})();
