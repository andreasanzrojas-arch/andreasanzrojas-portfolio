(() => {
  const arrival = document.querySelector('.arrival');
  const field = document.getElementById('field');
  if (!arrival || !field || !window.Stage) return;

  const pieces = [...field.querySelectorAll('.piece')];
  const { bindScrub, coarseMq, reducedMq } = window.Stage;
  let p = 0;

  function applyP(next) {
    p = next;
    arrival.style.setProperty('--p', p.toFixed(4));
    field.classList.toggle('is-open', p > 0.82);
    if (p <= 0.82) field.removeAttribute('data-focus');
  }

  const scrub = bindScrub(arrival, applyP);

  function setNear(piece) {
    if (!piece) {
      field.classList.remove('is-hovering');
      pieces.forEach((el) => el.classList.remove('is-near', 'is-far'));
      return;
    }
    field.classList.add('is-hovering');
    pieces.forEach((el) => {
      el.classList.toggle('is-near', el === piece);
      el.classList.toggle('is-far', el !== piece);
    });
    if (field.classList.contains('is-open')) {
      field.dataset.focus = piece.dataset.piece;
    }
  }

  if (!coarseMq.matches) {
    field.addEventListener('pointermove', (e) => {
      if (reducedMq.matches || p > 0.82) {
        const hit = e.target.closest('.piece');
        if (p > 0.82 && hit) setNear(hit);
        return;
      }
      const rect = field.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      let best = null;
      let bestD = Infinity;
      pieces.forEach((el) => {
        const r = el.getBoundingClientRect();
        const d = Math.hypot(r.left + r.width / 2 - rect.left - x, r.top + r.height / 2 - rect.top - y);
        if (d < bestD) { bestD = d; best = el; }
      });
      setNear(bestD < 420 ? best : null);
    });
    field.addEventListener('pointerleave', () => {
      if (p > 0.82) return;
      setNear(null);
    });
  }

  pieces.forEach((el, i) => {
    el.addEventListener('focus', () => setNear(el));
    el.addEventListener('blur', () => {
      if (!field.contains(document.activeElement)) setNear(null);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1;
      pieces[(i + dir + pieces.length) % pieces.length].focus();
    });
    el.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (reducedMq.matches) return;
      e.preventDefault();
      el.classList.add('is-departing');
      document.body.classList.add('is-departing');
      try { sessionStorage.setItem('stage-from', 'field'); } catch (err) { /* ignore */ }
      setTimeout(() => { location.href = el.href; }, 340);
    });
  });

  const hashMap = {
    google: '/google/',
    focus: '/google/#focus',
    banco: '/banco/',
    hold: '/banco/#hold',
    merchant: '/mastercard/',
    mastercard: '/mastercard/',
    continuity: '/mastercard/#continuity',
    lab: '/lab/',
    presence: '/contact/',
    contact: '/contact/'
  };
  const hash = (location.hash || '').replace('#', '').toLowerCase();
  if (hashMap[hash]) location.replace(hashMap[hash]);

  window.addEventListener('resize', () => scrub.refresh());
})();
