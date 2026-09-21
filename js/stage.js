(() => {
  const root = document.documentElement;
  const reducedMq = matchMedia('(prefers-reduced-motion: reduce)');
  const coarseMq = matchMedia('(pointer: coarse)');
  const narrowMq = matchMedia('(max-width: 860px)');

  root.classList.add('is-enhanced');

  function sync() {
    const reduced = reducedMq.matches;
    const narrow = narrowMq.matches;
    root.classList.toggle('is-reduced', reduced);
    root.classList.toggle('is-coarse', coarseMq.matches);
    root.classList.toggle('is-narrow', narrow);
    root.classList.toggle('is-stacked', reduced || narrow);
  }
  sync();
  reducedMq.addEventListener('change', sync);
  coarseMq.addEventListener('change', sync);
  narrowMq.addEventListener('change', sync);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('is-keyboard');
  });
  document.addEventListener('pointerdown', () => {
    document.body.classList.remove('is-keyboard');
  });

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    });
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Menu');
      });
    });
  }

  addEventListener('scroll', () => {
    document.body.classList.toggle('is-scrolled', scrollY > 8);
  }, { passive: true });

  function stacked() {
    return root.classList.contains('is-stacked');
  }

  function bindScrub(track, onProgress) {
    if (!track) return { jump() {}, refresh() {} };
    let raf = 0;
    const measure = () => {
      if (stacked()) return;
      const total = track.offsetHeight - innerHeight;
      if (total <= 8) {
        onProgress(0);
        return;
      }
      const passed = Math.min(Math.max(-track.getBoundingClientRect().top, 0), total);
      onProgress(passed / total);
    };
    const request = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
    };
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
    measure();
    return {
      refresh: measure,
      jump(p) {
        const clamped = Math.min(1, Math.max(0, p));
        if (stacked()) {
          onProgress(clamped);
          return;
        }
        const total = Math.max(track.offsetHeight - innerHeight, 0);
        const top = scrollY + track.getBoundingClientRect().top + total * clamped;
        scrollTo({ top, behavior: 'auto' });
      }
    };
  }

  if (sessionStorage.getItem('stage-from') === 'field') {
    document.body.classList.add('is-arriving');
    sessionStorage.removeItem('stage-from');
  }

  window.Stage = { bindScrub, stacked, reducedMq, coarseMq, narrowMq };
})();
