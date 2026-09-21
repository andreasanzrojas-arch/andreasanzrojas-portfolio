(() => {
  const body = document.body;
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  const fine = matchMedia('(pointer: fine)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (coarse || !fine) {
    body.classList.add('is-touch');
  } else if (cursor) {
    body.classList.add('cursor-on');
  }

  // Keyboard focus mode
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') body.classList.add('is-keyboard');
  });
  window.addEventListener('mousedown', () => body.classList.remove('is-keyboard'));

  if (cursor && body.classList.contains('cursor-on') && !reduced) {
    let mx = innerWidth * 0.6, my = innerHeight * 0.4;
    let rx = mx, ry = my;
    addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }, { passive: true });
    (function ringLoop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(ringLoop);
    })();
    document.querySelectorAll('[data-hot], [data-hot-zone]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hot'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hot'));
    });
  }

  const nav = document.getElementById('nav');
  if (nav) {
    addEventListener('scroll', () => {
      nav.classList.toggle('is-compact', scrollY > 40);
    }, { passive: true });
    const toggle = document.getElementById('navToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      // Close drawer on link click
      nav.querySelectorAll('.nav-drawer a').forEach((a) => {
        a.addEventListener('click', () => {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Open menu');
        });
      });
    }
  }
})();
