/* Rose Builders — redesign concept · vanilla JS, no dependencies */
(function () {
  "use strict";
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: solid on scroll, hide on scroll-down ---------- */
  var header = document.getElementById("site-header");
  var lastY = 0, ticking = false;
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-solid", y > 40);
    if (Math.abs(y - lastY) > 8) {
      if (y > lastY && y > 320 && !document.body.classList.contains("menu-open")) {
        header.classList.add("is-hidden");
      } else {
        header.classList.remove("is-hidden");
      }
      lastY = y;
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var overlay = document.getElementById("menu-overlay");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    overlay.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () {
    setMenu(!document.body.classList.contains("menu-open"));
  });
  overlay.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
    /* failsafe: never leave content hidden */
    window.setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }, 2600);
  }

  /* ---------- Developments carousel ---------- */
  var track = document.getElementById("car-track");
  var prev = document.getElementById("car-prev");
  var next = document.getElementById("car-next");
  var bar = document.getElementById("car-bar");
  if (track && prev && next && bar) {
    function cardStep() {
      var card = track.querySelector(".dev-card");
      if (!card) return 320;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 24;
      return card.getBoundingClientRect().width + gap;
    }
    prev.addEventListener("click", function () {
      track.scrollBy({ left: -cardStep(), behavior: prefersReduced ? "auto" : "smooth" });
    });
    next.addEventListener("click", function () {
      track.scrollBy({ left: cardStep(), behavior: prefersReduced ? "auto" : "smooth" });
    });
    function updateBar() {
      var max = track.scrollWidth - track.clientWidth;
      var p = max > 0 ? track.scrollLeft / max : 0;
      var minScale = track.clientWidth / track.scrollWidth;
      bar.style.transform = "scaleX(" + (minScale + (1 - minScale) * p) + ")";
    }
    track.addEventListener("scroll", function () {
      window.requestAnimationFrame(updateBar);
    }, { passive: true });
    window.addEventListener("resize", updateBar);
    updateBar();
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
