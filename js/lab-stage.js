(() => {
  const frame = document.getElementById('workspace');
  const readout = document.getElementById('lab-readout');
  const assistant = document.getElementById('assistant');
  if (!frame) return;

  const notes = {
    whole: 'Prototype. Agents draft. A person approves or revises. No shipped AI outcome.',
    run: 'Run context — what the system is allowed to know.',
    graph: 'Orchestration. Research, framing, critique, synthesis. The handoff back to a person.',
    log: 'Decision log. Approve or revise stays human.'
  };

  const buttons = [...document.querySelectorAll('[data-region]')];
  let region = 'whole';

  function render() {
    frame.classList.remove('is-run', 'is-graph', 'is-log');
    if (region !== 'whole') frame.classList.add(`is-${region}`);
    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.region === region ? 'true' : 'false');
    });
    if (readout) readout.textContent = notes[region];
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

  const forward = document.getElementById('hold-assistant');
  if (forward && assistant) {
    forward.addEventListener('click', () => {
      const on = assistant.classList.toggle('is-forward');
      forward.setAttribute('aria-pressed', on ? 'true' : 'false');
      forward.textContent = on ? 'Return the assistant' : 'Bring the assistant forward';
    });
  }

  if (location.hash === '#assistant' && assistant) {
    assistant.scrollIntoView({ block: 'start' });
  }
  render();
})();
