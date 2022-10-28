import menuToggle from './menuToggle';

globalThis.App = {
  menuToggle,
};

const body = document.body;
const mainNav = document.querySelector('nav[aria-label="Main"]');
const menuBtn = document.querySelector('[data-toggle="main-nav"]');

menuBtn.addEventListener('click', () => {
  menuToggle(body);
  menuToggle(mainNav);
});

document.addEventListener('keyup', (e) => {
  if (body.dataset.mobileNavOpen === 'true' && e.key === 'Escape') {
    menuToggle(body);
    menuToggle(mainNav);
  }
});
