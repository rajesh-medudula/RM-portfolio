/* cursor */
(function initCursor() {

  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  if (!cursor || !ring) return;

  // disable on touch devices
  if (!window.matchMedia('(hover: hover)').matches) {
    cursor.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  /* state */
  let mx = 0, my = 0;   // mouse
  let rx = 0, ry = 0;   // ring
  let vx = 0, vy = 0;   // velocity

  let isLocked = false;
  let lockX = 0, lockY = 0;

  const speed = 0.12;

  /* mouse move */
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  /* click toggle lock */
  document.addEventListener('mousedown', () => {
    isLocked = !isLocked;

    if (isLocked) {
      lockX = rx;
      lockY = ry;
      ring.classList.add('locked');
    } else {
      ring.classList.remove('locked');
    }
  });

  /* hover interaction */
  document.querySelectorAll(
    'a, button, .stack__item, .work__item, .section__email--text'
  ).forEach(el => {

    document.addEventListener('mouseover', (e) => {
  if (
    e.target.closest('a, button, .stack__item, .work__item, .section__email--text')
  ) {
    ring.classList.add('active');
  }
});

document.addEventListener('mouseout', (e) => {
  if (
    e.target.closest('a, button, .stack__item, .work__item, .section__email--text')
  ) {
    ring.classList.remove('active');
  }
});

  });

  /* animation loop */
  function animate() {

    // DOT (always follows mouse)
    cursor.style.transform = `
      translate(${mx}px, ${my}px)
      translate(-50%, -50%)
    `;

    if (isLocked) {
      // ring frozen
      ring.style.transform = `
        translate(${lockX}px, ${lockY}px)
        translate(-50%, -50%)
      `;
    } else {
      // velocity
      vx = mx - rx;
      vy = my - ry;

      // stretch effect
      const distance = Math.sqrt(vx * vx + vy * vy);
      const scale = Math.min(distance / 100, 0.35);

      // follow
      rx += vx * speed;
      ry += vy * speed;

      ring.style.transform = `
        translate(${rx}px, ${ry}px)
        translate(-50%, -50%)
        scale(${1 + scale}, ${1 - scale})
      `;
    }

    requestAnimationFrame(animate);
  }

  animate();

})();