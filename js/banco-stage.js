(() => {
  const track = document.querySelector('[data-track]');
  const frame = document.getElementById('b-frame');
  const img = document.getElementById('b-img');
  const body = document.getElementById('b-body');
  if (!track || !frame || !img || !window.Stage) return;

  const steps = [
    {
      id: 'land',
      label: 'Land',
      src: '/assets/banco/bdb-landing.png',
      alt: 'CDT landing: the instrument before paperwork',
      title: 'Land',
      body: 'Land. The screen opens on the product.',
      mode: 'land'
    },
    {
      id: 'simulate',
      label: 'Simulate',
      src: '/assets/banco/bdb-simulator.png',
      alt: 'CDT simulator with amount, term, and projected returns',
      title: 'Simulate',
      body: 'Simulate. Amount and term before identity.',
      mode: ''
    },
    {
      id: 'returns',
      label: 'Returns',
      src: '/assets/banco/bdb-simulator.png',
      alt: 'Closer view of projected returns in the CDT simulator',
      title: 'Read the return',
      body: 'Returns. The number is the explanation.',
      mode: 'detail'
    },
    {
      id: 'validate',
      label: 'Validate',
      src: '/assets/banco/bdb-account.png',
      alt: 'Validate step with pre-filled personal data and funding account',
      title: 'Validate',
      body: 'Validate. Checks after the decision is grounded.',
      mode: ''
    },
    {
      id: 'confirm',
      label: 'Confirm',
      src: '/assets/banco/bdb-confirm.png',
      alt: 'Confirmation summary with rate, term, returns, and conditions',
      title: 'Confirm',
      body: 'Confirm. Rate, term, and returns in one summary.',
      mode: ''
    },
    {
      id: 'renew',
      label: 'Renewal',
      src: '/assets/banco/bdb-confirm.png',
      alt: 'Auto-renewal toggle, Renovación automática, held at confirmation, with the manage-in-app email',
      title: 'Auto-renewal',
      body: 'Auto-renewal. The toggle is the commitment. The email keeps a manage link.',
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
    if (body) body.textContent = step.body;
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
