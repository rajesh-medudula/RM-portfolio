// header
const header = document.querySelector('.header');

let isScrolled = false;

window.addEventListener('scroll', () => {
  const shouldScroll = window.scrollY > 40;

  if (shouldScroll !== isScrolled) {
    header.classList.toggle('scrolled', shouldScroll);
    isScrolled = shouldScroll;
  }
}, { passive: true });