/* reveal */
export function initReveal() {

  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  // fallback (older browsers)
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  let delayIndex = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }

  });
}, {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0
});

  elements.forEach(el => observer.observe(el));
}