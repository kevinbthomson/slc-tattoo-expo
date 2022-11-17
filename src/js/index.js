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
    resizeHeader(header, true);
    resizeHeader(heroBanner, true);
  } else {
    resizeHeader(header, false);
    resizeHeader(heroBanner, false);
  }
});
