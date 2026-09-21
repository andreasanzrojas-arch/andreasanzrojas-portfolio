(() => {
  const frame = document.getElementById('workspace');
  const readout = document.getElementById('lab-readout');
  const assistant = document.getElementById('assistant');
  if (!frame) return;

  const notes = {
    whole: 'The whole surface: a run in context, an orchestration graph, and a decision log. Agents draft. A person approves or revises. Prototype — no shipped AI-product outcome is claimed.',
    run: 'Run context. The team’s inputs sit beside the work so agents are not drafting from an empty chat. This is the part shipped case studies do not show yet: judgment about what the system is allowed to know.',
    graph: 'Orchestration, not a chatbot. Research, framing, critique, and synthesis are separate moves on a graph. The question under test: where the handoff back to a human should be.',
    log: 'Decision log. Approve or revise stays on the human side of the loop. The prototype is exploring that checkpoint, not claiming a deployed workflow.'
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
