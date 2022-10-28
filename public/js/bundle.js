(() => {
  // src/js/menuToggle.js
  function menuToggle(el) {
    el.dataset.mobileNavOpen === "true" ? el.dataset.mobileNavOpen = "false" : el.dataset.mobileNavOpen = "true";
  }

  // src/js/index.js
  globalThis.App = {
    menuToggle
  };
  var body = document.body;
  var mainNav = document.querySelector('nav[aria-label="Main"]');
  var menuBtn = document.querySelector('[data-toggle="main-nav"]');
  menuBtn.addEventListener("click", () => {
    menuToggle(body);
    menuToggle(mainNav);
  });
  document.addEventListener("keyup", (e) => {
    if (body.dataset.mobileNavOpen === "true" && e.key === "Escape") {
      menuToggle(body);
      menuToggle(mainNav);
    }
  });
})();
//# sourceMappingURL=bundle.js.map
