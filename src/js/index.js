import menuToggle from './menuToggle';
import resizeHeader from './resizeHeader';

const body = document.body;
const mainNav = document.querySelector('nav[aria-label="Main"]');
const menuBtn = document.querySelector('[data-toggle="main-nav"]');
const header = document.querySelector('.site-header');
const heroBanner = document.querySelector('.hero-banner');

menuBtn.addEventListener('click', () => {
  menuToggle(body);
  menuToggle(mainNav);
  menuToggle(menuBtn);
});

document.addEventListener('keyup', (e) => {
  if (body.dataset.mobileNavOpen === 'true' && e.key === 'Escape') {
    menuToggle(body);
    menuToggle(mainNav);
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    if (header) resizeHeader(header, true);
    if (heroBanner) resizeHeader(heroBanner, true);
  } else {
    if (header) resizeHeader(header, false);
    if (heroBanner) resizeHeader(heroBanner, false);
  }
});
