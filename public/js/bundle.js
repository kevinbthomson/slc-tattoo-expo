(() => {
  // src/js/menuToggle.js
  function menuToggle(el) {
    el.dataset.mobileNavOpen === "true" ? el.dataset.mobileNavOpen = "false" : el.dataset.mobileNavOpen = "true";
  }

  // src/js/resizeHeader.js
  function resizeHeader(el, scrolled) {
    el.dataset.scrolled = scrolled;
  }

  // src/js/index.js
  var body = document.body;
  var mainNav = document.querySelector('nav[aria-label="Main"]');
  var menuBtn = document.querySelector('[data-toggle="main-nav"]');
  var header = document.querySelector(".site-header");
  var heroBanner = document.querySelector(".hero-banner");
  menuBtn.addEventListener("click", () => {
    menuToggle(body);
    menuToggle(mainNav);
    menuToggle(menuBtn);
  });
  document.addEventListener("keyup", (e) => {
    if (body.dataset.mobileNavOpen === "true" && e.key === "Escape") {
      menuToggle(body);
      menuToggle(mainNav);
    }
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      if (header)
        resizeHeader(header, true);
      if (heroBanner)
        resizeHeader(heroBanner, true);
    } else {
      if (header)
        resizeHeader(header, false);
      if (heroBanner)
        resizeHeader(heroBanner, false);
    }
  });
})();
//# sourceMappingURL=bundle.js.map
