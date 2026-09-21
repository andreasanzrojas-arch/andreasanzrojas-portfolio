(() => {
  const bench = document.getElementById('workspace');
  const readout = document.getElementById('lab-readout');
  if (!bench) return;

  const notes = {
    run: 'Run context. Agent brief, then a human in the loop. Prototype — no shipped AI outcome.',
    graph: 'Orchestration. The verified sequence: agent brief, HITL, then why this step.',
    log: 'Decision log. The constraint stays visible. Approve or revise is the human checkpoint.'
  };
  const judgeNotes = {
    approve: 'Approved as a human checkpoint. Prototype — the decision is recorded, not a shipped outcome.',
    revise: 'Revise. The constraint stays visible and the step goes back. Prototype — no shipped AI outcome.'
  };

  const buttons = [...bench.querySelectorAll('[data-region]')];
  const frames = [...bench.querySelectorAll('[data-frame]')];
  const judges = [...bench.querySelectorAll('[data-judge]')];
  const indexLinks = [...document.querySelectorAll('.experiment-index a')];
  let region = 'run';

  function render() {
    frames.forEach((frame) => {
      const on = frame.dataset.frame === region;
      frame.classList.toggle('is-on', on);
      if ('inert' in frame) frame.inert = !on;
    });
    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.region === region ? 'true' : 'false');
    });
    if (readout) {
      const judge = region === 'log' ? judges.find((btn) => btn.getAttribute('aria-pressed') === 'true') : null;
      readout.textContent = judge ? judgeNotes[judge.dataset.judge] : (notes[region] || '');
    }
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      region = btn.dataset.region;
      if (region !== 'log') {
        judges.forEach((other) => other.setAttribute('aria-pressed', 'false'));
      }
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
      region = 'log';
      render();
    });
  });

  function markExperiment() {
    const hash = location.hash === '#assistant' ? '#assistant' : '#workspace';
    indexLinks.forEach((link) => {
      if (link.getAttribute('href') === hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function revealHash() {
    const id = (location.hash || '').replace('#', '');
    if (id !== 'assistant' && id !== 'workspace') return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ block: 'start', behavior: 'auto' });
  }

  markExperiment();
  revealHash();
  window.addEventListener('hashchange', () => {
    markExperiment();
    revealHash();
  });
  window.addEventListener('load', revealHash);
  window.addEventListener('pageshow', revealHash);
  render();
})();
