(() => {
  const root = document.getElementById('workspace');
  const readout = document.getElementById('lab-readout');
  const fid = document.getElementById('bench-fid');
  if (!root) return;

  const notes = {
    run: 'Run context. Agent brief, then a human in the loop. Prototype — no shipped AI outcome.',
    graph: 'Orchestration. The verified sequence: agent brief, HITL, then why this step.',
    log: 'Decision log. The constraint stays visible. Approve or revise is the human checkpoint.',
    concept: 'Concept. Screen stays primary. No shipped AI outcome.'
  };
  const judgeNotes = {
    approve: 'Approved as a human checkpoint. Prototype — the decision is recorded, not a shipped outcome.',
    revise: 'Revise. The constraint stays visible and the step goes back. Prototype — no shipped AI outcome.'
  };

  const buttons = [...document.querySelectorAll('[data-region]')];
  const frames = [...root.querySelectorAll('[data-frame]')];
  const judges = [...document.querySelectorAll('[data-judge]')];
  let region = 'run';
  let judgment = '';

  function render() {
    frames.forEach((frame) => {
      const on = frame.dataset.frame === region;
      frame.classList.toggle('is-on', on);
      if ('inert' in frame) frame.inert = !on;
    });
    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.region === region ? 'true' : 'false');
    });
    if (fid) fid.textContent = region === 'concept' ? 'Concept' : 'Prototype';
    if (readout) {
      const judge = region === 'log' ? judges.find((btn) => btn.getAttribute('aria-pressed') === 'true') : null;
      readout.textContent = judge ? judgeNotes[judge.dataset.judge] : (notes[region] || '');
    }
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      region = btn.dataset.region;
      if (region !== 'log') judgment = '';
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

  judges.forEach((btn) => {
    btn.addEventListener('click', () => {
      const on = btn.getAttribute('aria-pressed') === 'true';
      judges.forEach((other) => other.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', on ? 'false' : 'true');
      judgment = on ? '' : btn.dataset.judge;
      region = 'log';
      render();
    });
  });

  function fromHash() {
    if (location.hash === '#assistant') region = 'concept';
  }
  fromHash();
  window.addEventListener('hashchange', () => {
    fromHash();
    render();
  });
  render();
})();
