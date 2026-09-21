(() => {
  const track = document.querySelector('[data-track]');
  const session = document.getElementById('session');
  const playhead = document.getElementById('playhead');
  const title = document.getElementById('mc-title');
  const body = document.getElementById('mc-body');
  if (!track || !session || !playhead || !window.Stage) return;

  const frames = [
    {
      id: 'terminal',
      title: 'Terminal',
      body: 'Three POS models sat as equivalent specs, so the wrong fit came back as returns and another activation. Recomendada maps a terminal to the business and still shows the other two. The system has a point of view.'
    },
    {
      id: 'identity',
      title: 'Identity',
      body: 'Face ID and fingerprint during the first session — not a setting to find later. Security deferred to after activation is security that never happens.'
    },
    {
      id: 'session',
      title: 'Same session',
      body: 'Onboarding Adquisición continues the thread. This local frame is the session entry, not a fiscal map. The map decision — pin to confirm or adjust an address, compliance data unchanged — is real, and the map screen is not in the cache.'
    },
    {
      id: 'home',
      title: 'One business',
      body: 'The session lands in the merchant home: terminal, marketplace, and loyalty visible together. Help, loyalty tiers, and marketplace were designed as continuity layers. Those dedicated frames are missing locally and are not invented here.'
    }
  ];

  const pin = session.closest('.pin');
  const phones = [...session.querySelectorAll('.phone')];
  const jumps = [...document.querySelectorAll('[data-jump]')];
  let t = 0;
  let dragging = false;
  let syncing = false;

  function apply(next, source) {
    t = Math.min(1, Math.max(0, next));
    pin.style.setProperty('--t', t.toFixed(4));
    pin.style.setProperty('--scatter', (1 - t).toFixed(4));
    const idx = Math.round(t * (frames.length - 1));
    phones.forEach((phone, i) => phone.classList.toggle('is-active', i === idx));
    const frame = frames[idx];
    if (title) title.textContent = t < 0.04 ? 'Apart' : (t > 0.96 ? 'One session' : frame.title);
    if (body) {
      body.textContent = t < 0.04
        ? 'POS fit, fiscal address, marketplace, and loyalty lived on separate timelines. Acquisition failed because the work was fragmented.'
        : (t > 0.96
          ? 'Drawn onto one line: terminal, identity, session, home. Activation moved from a multi-day branch process to a self-service mobile flow — days to minutes, with no invented percentage. Client confidential.'
          : frame.body);
    }
    jumps.forEach((btn, i) => {
      const on = i === idx;
      btn.setAttribute('aria-current', on ? 'true' : 'false');
    });
    const shown = String(Math.round(t * 1000));
    if (document.activeElement !== playhead) playhead.value = shown;
    playhead.setAttribute('aria-valuetext', t < 0.04 ? 'Fragmented' : (t > 0.96 ? 'One guided session' : frame.title));
    if (source !== 'scroll' && !window.Stage.stacked()) {
      syncing = true;
      scrub.jump(t);
      setTimeout(() => { syncing = false; }, 60);
    }
  }

  const scrub = window.Stage.bindScrub(track, (p) => {
    if (dragging || syncing) return;
    apply(p, 'scroll');
  });

  playhead.addEventListener('pointerdown', () => { dragging = true; });
  addEventListener('pointerup', () => { dragging = false; });
  playhead.addEventListener('input', () => {
    apply(Number(playhead.value) / 1000, 'range');
  });

  jumps.forEach((btn) => {
    btn.addEventListener('click', () => {
      apply(Number(btn.dataset.jump), 'jump');
    });
  });

  if (location.hash === '#continuity') apply(1, 'jump');
  else apply(0, 'scroll');
})();
