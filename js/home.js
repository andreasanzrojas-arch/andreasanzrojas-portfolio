(() => {
  const body = document.body;
  const cursor = document.getElementById('cursor');
  const isTouch = body.classList.contains('is-touch');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const field = document.getElementById('field');
  if (!field) return;

  const frags = [...field.querySelectorAll('.frag')];
  let locked = null;
  const lockName = document.getElementById('lockName');
  const lockGo = document.getElementById('lockGo');
  const stageMap = { banco: '#stage-banco', google: '#stage-google', mc: '#stage-mc', mono: '#stage-mc', apps: '#stage-google' };
  const nameMap = {
    banco: 'Banco · CDT Digital',
    google: 'Google · App Hub',
    mc: 'Mastercard · Merchant',
    mono: 'Monoma · Platform',
    apps: 'Google · Taxonomy'
  };
  const rotOf = (f) =>
    f.classList.contains('f1') ? -4 :
    f.classList.contains('f2') ? 6 :
    f.classList.contains('f3') ? 3 :
    f.classList.contains('f4') ? -5 : 8;

  // Make fragments keyboard-focusable buttons
  frags.forEach((f) => {
    if (f.tagName !== 'BUTTON') {
      f.setAttribute('role', 'button');
      f.setAttribute('tabindex', '0');
    }
    const title = f.querySelector('.f-title');
    f.setAttribute('aria-label', title ? `Focus ${title.textContent}` : 'Focus product fragment');
  });

  function lockFrag(f) {
    const id = f.dataset.frag;
    if (locked === f) {
      locked = null;
      field.classList.remove('is-locked');
      f.classList.remove('is-locked');
      frags.forEach((x) => x.classList.remove('is-far', 'is-near'));
      f.setAttribute('aria-pressed', 'false');
      return;
    }
    locked = f;
    field.classList.add('is-locked');
    frags.forEach((x) => {
      const on = x === f;
      x.classList.toggle('is-locked', on);
      x.classList.toggle('is-far', !on);
      x.classList.remove('is-near', 'is-memory');
      x.setAttribute('aria-pressed', on ? 'true' : 'false');
      x.style.transform = `rotate(${rotOf(x)}deg)`;
    });
    if (lockName) lockName.textContent = nameMap[id] || id;
    if (lockGo) lockGo.href = stageMap[id] || '#work';
  }

  frags.forEach((f) => {
    f.addEventListener('click', () => lockFrag(f));
    f.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        lockFrag(f);
      }
    });
    // Focus shows near state (accessible equivalent of hover gravity)
    f.addEventListener('focus', () => {
      if (locked) return;
      frags.forEach((x) => {
        x.classList.toggle('is-near', x === f);
        x.classList.toggle('is-far', x !== f);
        x.classList.remove('is-memory');
      });
    });
    f.addEventListener('blur', () => {
      if (locked) return;
      // keep brief memory then clear
      frags.forEach((x) => {
        x.classList.remove('is-near', 'is-far');
        if (x === f) x.classList.add('is-memory');
      });
      setTimeout(() => frags.forEach((x) => x.classList.remove('is-memory')), 1400);
    });
  });

  // Pointer Field Gravity — only when not touch
  if (!isTouch) {
    let memoryTimer = null;
    field.addEventListener('mousemove', (e) => {
      if (locked || reduced) return;
      const rect = field.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      field.style.setProperty('--mx', (x / rect.width * 100) + '%');
      field.style.setProperty('--my', (y / rect.height * 100) + '%');
      let nearest = null, best = Infinity;
      frags.forEach((f) => {
        const r = f.getBoundingClientRect();
        const cx = r.left + r.width / 2 - rect.left;
        const cy = r.top + r.height / 2 - rect.top;
        const d = Math.hypot(cx - x, cy - y);
        if (d < best) { best = d; nearest = f; }
        const pull = Math.max(0, 1 - d / 280);
        const dx = (x - cx) * pull * 0.04;
        const dy = (y - cy) * pull * 0.04;
        f.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotOf(f)}deg) scale(${1 + pull * 0.06})`;
      });
      frags.forEach((f) => {
        f.classList.remove('is-memory');
        f.classList.toggle('is-near', f === nearest && best < 200);
        f.classList.toggle('is-far', f !== nearest && best < 200);
      });
    });
    field.addEventListener('mouseleave', () => {
      if (locked) return;
      const near = frags.find((f) => f.classList.contains('is-near'));
      if (near) {
        frags.forEach((f) => {
          f.classList.remove('is-near', 'is-far');
          f.classList.toggle('is-memory', f === near);
          f.style.transform = f === near
            ? `rotate(${rotOf(f)}deg) scale(1.04)`
            : `rotate(${rotOf(f)}deg)`;
        });
        clearTimeout(memoryTimer);
        memoryTimer = setTimeout(() => {
          frags.forEach((f) => {
            f.classList.remove('is-memory');
            f.style.transform = `rotate(${rotOf(f)}deg)`;
          });
        }, 1400);
      } else {
        frags.forEach((f) => {
          f.classList.remove('is-near', 'is-far');
          f.style.transform = `rotate(${rotOf(f)}deg)`;
        });
      }
    });
  } else {
    // Touch: tap focuses (lock); no fake hover / magnetic drift
    // Visual logic preserved via lock + far dimming
  }

  // Stage Dissolve — scroll / IntersectionObserver (works all inputs)
  const stages = [...document.querySelectorAll('[data-stage]')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      en.target.classList.toggle('is-active', en.isIntersecting);
    });
  }, { threshold: 0.35, rootMargin: '0px 0px -10% 0px' });
  stages.forEach((s) => io.observe(s));

  // Parallax planes — pointer-fine only
  if (!isTouch && !reduced) {
    stages.forEach((stage) => {
      const visual = stage.querySelector('.stage-visual:not(.depth-field)');
      if (!visual) return;
      visual.addEventListener('mousemove', (e) => {
        const r = visual.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        stage.querySelectorAll('.plane').forEach((p, i) => {
          const depth = (i + 1) * 8;
          p.style.transform = p.classList.contains('p-main')
            ? `rotate(-1deg) scale(1) translate(${px * depth}px, ${py * depth}px)`
            : p.classList.contains('p-sat')
            ? `rotate(3deg) translate(${-px * depth * 1.4}px, ${-py * depth}px)`
            : `rotate(-4deg) translate(${px * depth * 1.8}px, ${py * depth * 1.2}px)`;
        });
      });
    });
  }

  // Lab near/far — pointer-fine; touch uses :focus-visible / tap navigate
  const labGrid = document.querySelector('.lab-grid');
  if (labGrid && !isTouch) {
    const labCards = [...labGrid.querySelectorAll('.lab-card')];
    labGrid.addEventListener('mousemove', (e) => {
      let nearest = null, best = Infinity;
      labCards.forEach((c) => {
        const r = c.getBoundingClientRect();
        const d = Math.hypot(r.left + r.width / 2 - e.clientX, r.top + r.height / 2 - e.clientY);
        if (d < best) { best = d; nearest = c; }
      });
      labCards.forEach((c) => {
        c.classList.toggle('is-near', c === nearest && best < 420);
        c.classList.toggle('is-far', c !== nearest && best < 420);
      });
    });
    labGrid.addEventListener('mouseleave', () => {
      labCards.forEach((c) => c.classList.remove('is-near', 'is-far'));
    });
  }

  const params = new URLSearchParams(location.search);
  if (params.get('state') === 'field-locked' && frags[0]) lockFrag(frags[0]);
  const scrollTo = params.get('scroll');
  if (scrollTo) {
    const el = document.querySelector(scrollTo);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant', block: 'start' }));
  }

  window.__portfolio = Object.assign(window.__portfolio || {}, {
    lockFrag: (i) => frags[i] && lockFrag(frags[i]),
    stages
  });
})();
