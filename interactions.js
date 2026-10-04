// INTERACTIONS — homepage hero only: one-time headline reveal and a near-static
// mouse response on the character group (max ~2px). Nothing runs continuously,
// nothing follows the scroll, and touch devices / prefers-reduced-motion stay static.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  function canAnimate() {
    return !reduceMotion.matches && finePointer.matches;
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  document.addEventListener('DOMContentLoaded', initHero);

  function initHero() {
    var hero = document.querySelector('.class');
    var title = document.querySelector('.hero-title');
    if (!hero || !title) return;

    // staggered line reveal, once (CSS transitions do the motion)
    requestAnimationFrame(function () {
      setTimeout(function () {
        title.classList.add('is-in');
      }, reduceMotion.matches ? 0 : 350);
    });

    // mouse response, smoothed; the CSS caps it at ~2px
    var target = { x: 0, y: 0 };
    var current = { x: 0, y: 0 };
    var running = false;

    function tick() {
      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);
      hero.style.setProperty('--hero-mx', current.x.toFixed(4));
      hero.style.setProperty('--hero-my', current.y.toFixed(4));
      if (Math.abs(current.x - target.x) < 0.001 && Math.abs(current.y - target.y) < 0.001) {
        running = false;
      } else {
        requestAnimationFrame(tick);
      }
    }

    function kick() {
      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }
    }

    hero.addEventListener('mousemove', function (e) {
      if (!canAnimate()) return;
      var r = hero.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1 … 1
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    });
    hero.addEventListener('mouseleave', function () {
      target.x = 0;
      target.y = 0;
      kick();
    });
  }
})();
