(() => {
  const field = document.getElementById('field');
  if (!field || !window.Stage) return;

  const pieces = [...field.querySelectorAll('.piece')];
  const { coarseMq } = window.Stage;

  function setNear(piece) {
    if (!piece) {
      field.classList.remove('is-hovering');
      field.removeAttribute('data-focus');
      pieces.forEach((el) => el.classList.remove('is-near', 'is-far'));
      return;
    }
    field.classList.add('is-hovering');
    field.dataset.focus = piece.dataset.piece;
    pieces.forEach((el) => {
      el.classList.toggle('is-near', el === piece);
      el.classList.toggle('is-far', el !== piece);
    });
  }

  if (!coarseMq.matches) {
    field.addEventListener('pointermove', (e) => {
      const hit = e.target.closest('.piece');
      setNear(hit || null);
    });
    field.addEventListener('pointerleave', () => setNear(null));
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
})();
