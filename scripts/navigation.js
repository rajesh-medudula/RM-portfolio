// header

document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  let isScrolled = false;

  window.addEventListener('scroll', () => {
    const shouldScroll = window.scrollY > 40;

    if (shouldScroll !== isScrolled) {
      header.classList.toggle('scrolled', shouldScroll);
      isScrolled = shouldScroll;
    }
  }, { passive: true });

  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
   
  });

  document.querySelectorAll('.sidebar__link').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

   console.log(toggle);
});