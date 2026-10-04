// INTERACTIONS — homepage: one-time hero headline reveal, a near-static mouse response
// on the character (max ~1.5px), and a one-time scroll reveal for the sections below
// the hero. Nothing loops; prefers-reduced-motion shows everything at once.
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

  document.addEventListener('DOMContentLoaded', function () {
    initHero();
    initReveal();
  });

  function initHero() {
    var hero = document.querySelector('.class');
    var title = document.querySelector('.hero-title');
    if (!hero || !title) return;

    // staggered line reveal, once (CSS transitions do the motion)
    requestAnimationFrame(function () {
      setTimeout(function () {
        title.classList.add('is-in');
      }, reduceMotion.matches ? 0 : 300);
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

  // ---------- scroll reveal (homepage sections below the hero) ----------
  // Each block fades in with a small rise ONCE, the first time it enters the viewport.
  function initReveal() {
    if (!document.querySelector('.hero-v2')) return; // homepage only
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return; // content simply stays visible

    var groups = [
      '.intro > *',
      '.promo .promo__text > *',
      '.slider',
      '.containers > .image-container',
      '.containers > .text-container > *', // children only: keeps the page-wide fixed watermark untouched
      '.service-container > *',
      '.contact', // whole block: its CTA is centred with its own transform
      '.ambitios-text'
    ];
    var targets = [];
    groups.forEach(function (sel) {
      Array.prototype.forEach.call(document.querySelectorAll(sel), function (el, i) {
        if (targets.indexOf(el) !== -1) return;
        el.classList.add('reveal');
        el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms'; // light stagger inside a group
        targets.push(el);
      });
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target); // once only
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    targets.forEach(function (el) {
      io.observe(el);
    });

    // once revealed, hand the element back to its own styles (its hover transitions etc.)
    document.addEventListener('transitionend', function (e) {
      var el = e.target;
      if (e.propertyName !== 'opacity' || !el.classList || !el.classList.contains('is-revealed')) return;
      el.classList.remove('reveal', 'is-revealed');
      el.style.transitionDelay = '';
    });
  }
})();
