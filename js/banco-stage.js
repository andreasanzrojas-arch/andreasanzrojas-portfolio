(() => {
  const track = document.querySelector('[data-track]');
  const frame = document.getElementById('b-frame');
  const img = document.getElementById('b-img');
  const title = document.getElementById('b-title');
  const body = document.getElementById('b-body');
  const ritual = document.getElementById('b-ritual');
  if (!track || !frame || !img || !window.Stage) return;

  const steps = [
    {
      id: 'land',
      label: 'Land',
      src: '/assets/banco/bdb-landing.png',
      alt: 'CDT landing: the instrument before paperwork',
      title: 'Land',
      body: 'Twelve analog steps stood between a person and a certificate of deposit: branch, paper, advisor, documents, identity, rate, term, funding, legal packet, manual review, delayed confirm, opaque renewal. The screen opens on the product, not the packet.',
      mode: 'land'
    },
    {
      id: 'simulate',
      label: 'Simulate',
      src: '/assets/banco/bdb-simulator.png',
      alt: 'CDT simulator with amount, term, and projected returns',
      title: 'Simulate',
      body: 'Amount and term produce a number before identity. Post-launch, simulation had the highest engagement and the lowest drop-off of any screen — Hotjar and funnels, directional, no percentage invented.',
      mode: ''
    },
    {
      id: 'returns',
      label: 'Returns',
      src: '/assets/banco/bdb-simulator.png',
      alt: 'Closer view of projected returns in the CDT simulator',
      title: 'Read the return',
      body: 'Comprehension anxiety, not interface polish, was the barrier. People would not lock savings without understanding the outcome. The return is the explanation.',
      mode: 'detail'
    },
    {
      id: 'validate',
      label: 'Validate',
      src: '/assets/banco/bdb-account.png',
      alt: 'Validate step with pre-filled personal data and funding account',
      title: 'Validate',
      body: 'Personal data and the funding account are pre-filled. Required checks stay after the decision feels grounded. The bank’s operating sequence is no longer the customer’s sequence.',
      mode: ''
    },
    {
      id: 'confirm',
      label: 'Confirm',
      src: '/assets/banco/bdb-confirm.png',
      alt: 'Confirmation summary with rate, term, returns, and conditions',
      title: 'Confirm',
      body: 'Rate, maturity, returns, and conditions as one readable summary — not a document to hunt for. Fully digital: no branch visit, no physical documents.',
      mode: ''
    },
    {
      id: 'renew',
      label: 'Renewal',
      src: '/assets/banco/crop-renew.png',
      alt: 'Auto-renewal toggle, Renovación automática, at confirmation',
      title: 'Auto-renewal',
      body: 'Explicit toggle at the moment of commitment. Contested across Product, Compliance, and business, then approved with continued control in the app. The confirmation email keeps a manage link so transparency does not end here.',
      mode: 'hold'
    }
  ];

  const buttons = [...document.querySelectorAll('[data-step]')];
  let index = 0;
  let lock = false;

  function render() {
    const step = steps[index];
    img.src = step.src;
    img.alt = step.alt;
    frame.classList.toggle('is-detail', step.mode === 'detail');
    frame.classList.toggle('is-hold', step.mode === 'hold');
    if (title) title.textContent = step.title;
    if (body) body.textContent = step.body;
    if (ritual) ritual.hidden = step.mode !== 'land';
    buttons.forEach((btn, i) => {
      const on = i === index;
      if (on) btn.setAttribute('aria-current', 'step');
      else btn.removeAttribute('aria-current');
      btn.tabIndex = on ? 0 : -1;
    });
  }

  const scrub = window.Stage.bindScrub(track, (p) => {
    if (lock) return;
    const next = Math.round(p * (steps.length - 1));
    if (next !== index) {
      index = next;
      render();
    }
  });

  function go(next) {
    index = next;
    render();
    lock = true;
    scrub.jump(next / (steps.length - 1));
    setTimeout(() => { lock = false; }, 700);
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => go(i));
    btn.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
      const next = (i + dir + buttons.length) % buttons.length;
      buttons[next].focus();
      go(next);
    });
  });

  if (location.hash === '#hold') go(steps.length - 1);
  render();
})();
