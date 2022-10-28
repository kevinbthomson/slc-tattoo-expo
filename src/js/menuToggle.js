export default function menuToggle(el) {
  el.dataset.mobileNavOpen === 'true'
    ? (el.dataset.mobileNavOpen = 'false')
    : (el.dataset.mobileNavOpen = 'true');
}
