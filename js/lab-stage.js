(() => {
  const root = document.getElementById('workspace');
  const readout = document.getElementById('lab-readout');
  if (!root) return;

  const notes = {
    run: 'Run context. Agent brief, then a human in the loop. Prototype — no shipped AI outcome.',
    graph: 'Orchestration. The verified sequence: agent brief, HITL, then why this step.',
    log: 'Decision log. The constraint stays visible. Approve or revise is the human checkpoint.'
  };

  const buttons = [...document.querySelectorAll('[data-region]')];
  const frames = [...root.querySelectorAll('[data-frame]')];
  let region = 'run';

  function render() {
    frames.forEach((frame) => frame.classList.toggle('is-on', frame.dataset.frame === region));
    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.region === region ? 'true' : 'false');
    });
    if (readout) readout.textContent = notes[region] || '';
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      region = btn.dataset.region;
      render();
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const next = buttons[(i + dir + buttons.length) % buttons.length];
      next.focus();
      region = next.dataset.region;
      render();
    });
  });

  const judges = [...document.querySelectorAll('[data-judge]')];
  judges.forEach((btn) => {
    btn.addEventListener('click', () => {
      const on = btn.getAttribute('aria-pressed') === 'true';
      judges.forEach((other) => other.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', on ? 'false' : 'true');
      region = 'log';
      render();
    });
  });

  if (location.hash === '#assistant') {
    const assistant = document.getElementById('assistant');
    if (assistant) assistant.scrollIntoView({ block: 'start' });
  }
  render();
})();
