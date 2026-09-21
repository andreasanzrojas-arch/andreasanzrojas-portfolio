/*
 * Home stage. Continuity map: CONTINUITY.md
 * Desktop scroll owns project sequence (Google → Banco → Mastercard).
 * The frame's left edge travels over the arrival (mask). Project changes are
 * clip reveals, not opacity. Audience / steps / playhead are the signatures.
 */
(() => {
  const track = document.querySelector('[data-track]');
  const stage = document.getElementById('stage');
  const body = document.getElementById('stage-body');
  if (!track || !stage || !body || !window.Stage) return;

  const surfaces = {
    google: stage.querySelector('[data-surface="google"]'),
    banco: stage.querySelector('[data-surface="banco"]'),
    mc: stage.querySelector('[data-surface="mc"]')
  };
  const gPlates = [...stage.querySelectorAll('[data-g]')];
  const gDepths = ['arrive', 'paths', 'labels', 'catalog'];
  const bImg = document.getElementById('b-img');
  const bSurface = surfaces.banco;
  const lift = document.getElementById('lift');
  const session = document.getElementById('session');
  const playhead = document.getElementById('playhead');
  const joined = document.getElementById('joined');
  const phones = [...stage.querySelectorAll('.phone')];
  const nameEl = document.getElementById('stage-name');
  const lineEl = document.getElementById('stage-line');
  const caseEl = document.getElementById('stage-case');
  const live = document.getElementById('stage-live');
  const audButtons = [...stage.querySelectorAll('[data-aud]')];
  const depthButtons = [...stage.querySelectorAll('[data-depth]')];
  const stepButtons = [...stage.querySelectorAll('[data-step]')];
  const jumpButtons = [...stage.querySelectorAll('[data-jump]')];
  const ownButtons = [...stage.querySelectorAll('[data-own]')];
  const railSets = [...stage.querySelectorAll('[data-rail]')];

  const bancoSteps = [
    { src: '/assets/banco/bdb-landing.png', alt: 'CDT landing: the instrument before paperwork', line: 'A commitment in time', mode: '' },
    { src: '/assets/banco/bdb-simulator.png', alt: 'CDT simulator with amount, term, and projected returns', line: 'Amount and term before identity', mode: '' },
    { src: '/assets/banco/crop-returns.png', alt: 'Projected CDT returns for 12, 33, and 24 months', line: 'The number is the explanation', mode: 'returns' },
    { src: '/assets/banco/bdb-account.png', alt: 'Validate step with pre-filled personal data and funding account', line: 'Checks after the decision is grounded', mode: '' },
    { src: '/assets/banco/bdb-confirm.png', alt: 'Confirmation summary with rate, term, returns, and conditions', line: 'Rate, term, and returns in one summary', mode: '' },
    { src: '/assets/banco/crop-renew.png', alt: 'Auto-renewal toggle held at confirmation, with the manage-in-app email', line: 'The toggle is the commitment', mode: 'hold' }
  ];
  const googleLines = [
    'Better sorting would not unlock discovery.',
    'Who is arriving',
    'Teach before filtering',
    'Editorial beside taxonomy'
  ];
  const indexLinks = [...document.querySelectorAll('[data-own-link]')];
  const mcFrames = [
    { title: 'Terminal', line: 'Recomendada — the system has a point of view' },
    { title: 'Identity', line: 'Security during the first session' },
    { title: 'Same session', line: 'Onboarding continues the thread' },
    { title: 'One business', line: 'Terminal, marketplace, and loyalty together' }
  ];

  const OPEN_A = 0.07;
  const OPEN_B = 0.16;
  const G0 = 0.16;
  const G1 = 0.40;
  const WIPE_GB = [0.40, 0.445];
  const B0 = 0.445;
  const B1 = 0.80;
  const WIPE_BM = [0.80, 0.86];
  const M0 = 0.86;

  let audience = 'none';
  let depth = 0;
  let step = 0;
  let project = 'google';
  let t = 0;
  let lock = false;
  let dragging = false;
  let lockTimer = 0;
  let own = 'google';
  let liveKey = '';

  function clamp(n, a, b) { return Math.min(b, Math.max(a, n)); }

  function stacked() { return window.Stage.stacked(); }

  function bandIndex(p, a, b, n) {
    const u = clamp((p - a) / (b - a), 0, 0.9999);
    return Math.floor(u * n);
  }

  function progressFor(kind, index) {
    if (kind === 'google') return G0 + ((G1 - G0) * index) / 4 + 0.01;
    if (kind === 'banco') return B0 + ((B1 - B0) * index) / 6 + 0.008;
    return M0 + clamp(index, 0, 1) * (1 - M0);
  }

  function clipSet(el, value) {
    el.style.clipPath = value;
  }

  function applyClips(p) {
    if (stacked()) {
      clipSet(surfaces.google, own === 'google' ? 'inset(0)' : 'inset(0 100% 0 0)');
      clipSet(surfaces.banco, own === 'banco' ? 'inset(0)' : 'inset(0 100% 0 0)');
      clipSet(surfaces.mc, own === 'mc' ? 'inset(0)' : 'inset(50% 0 50% 0)');
      surfaces.google.style.zIndex = own === 'google' ? '2' : '1';
      surfaces.banco.style.zIndex = own === 'banco' ? '2' : '1';
      surfaces.mc.style.zIndex = own === 'mc' ? '2' : '1';
      return;
    }
    let g = 'inset(0)';
    let b = 'inset(0 100% 0 0)';
    let m = 'inset(50% 0 50% 0)';
    let zg = 1;
    let zb = 1;
    let zm = 1;
    if (p < WIPE_GB[0]) {
      zg = 2;
    } else if (p < WIPE_GB[1]) {
      const w = (p - WIPE_GB[0]) / (WIPE_GB[1] - WIPE_GB[0]);
      b = `inset(0 ${(1 - w) * 100}% 0 0)`;
      zb = 3;
      zg = 2;
    } else if (p < WIPE_BM[0]) {
      g = 'inset(0 100% 0 0)';
      b = 'inset(0)';
      zb = 2;
    } else if (p < WIPE_BM[1]) {
      const w = (p - WIPE_BM[0]) / (WIPE_BM[1] - WIPE_BM[0]);
      const rest = (1 - w) * 50;
      g = 'inset(0 100% 0 0)';
      b = 'inset(0)';
      m = `inset(${rest}% 0 ${rest}% 0)`;
      zm = 3;
      zb = 2;
    } else {
      g = 'inset(0 100% 0 0)';
      b = 'inset(50% 0 50% 0)';
      m = 'inset(0)';
      zm = 2;
    }
    clipSet(surfaces.google, g);
    clipSet(surfaces.banco, b);
    clipSet(surfaces.mc, m);
    surfaces.google.style.zIndex = String(zg);
    surfaces.banco.style.zIndex = String(zb);
    surfaces.mc.style.zIndex = String(zm);
  }

  function paintGoogle() {
    gPlates.forEach((plate) => {
      plate.classList.toggle('is-on', plate.dataset.g === gDepths[depth]);
    });
    stage.dataset.audience = audience;
    audButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.aud === audience ? 'true' : 'false');
    });
    depthButtons.forEach((btn, i) => {
      const on = i === depth;
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
      btn.tabIndex = on ? 0 : -1;
    });
  }

  function paintBanco() {
    const item = bancoSteps[step];
    if (bImg.getAttribute('src') !== item.src) {
      bImg.src = item.src;
      bImg.alt = item.alt;
    }
    bSurface.classList.toggle('is-returns', item.mode === 'returns');
    bSurface.classList.toggle('is-hold', item.mode === 'hold');
    if (lift) lift.hidden = !(project === 'banco' && item.mode === 'hold');
    stepButtons.forEach((btn, i) => {
      const on = i === step;
      if (on) btn.setAttribute('aria-current', 'step');
      else btn.removeAttribute('aria-current');
      btn.tabIndex = on ? 0 : -1;
    });
  }

  function paintMc() {
    const pin = surfaces.mc;
    pin.style.setProperty('--t', t.toFixed(4));
    pin.style.setProperty('--scatter', (1 - t).toFixed(4));
    const idx = Math.round(t * (mcFrames.length - 1));
    phones.forEach((phone, i) => phone.classList.toggle('is-active', i === idx));
    if (joined) joined.hidden = t <= 0.96;
    jumpButtons.forEach((btn, i) => {
      btn.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
    if (playhead && document.activeElement !== playhead) {
      playhead.value = String(Math.round(t * 1000));
    }
    if (playhead) {
      playhead.setAttribute('aria-valuetext', t < 0.04 ? 'Fragmented' : (t > 0.96 ? 'One guided session' : mcFrames[idx].title));
    }
    return idx;
  }

  function chrome(nextProject, nextDepth, nextStep, nextT) {
    const mcIdx = Math.round(nextT * (mcFrames.length - 1));
    let line = googleLines[0];
    let label = 'Google';
    let href = '/google/';
    if (nextProject === 'google') {
      line = googleLines[nextDepth];
    } else if (nextProject === 'banco') {
      label = 'Banco';
      href = '/banco/';
      line = bancoSteps[nextStep].line;
    } else {
      label = 'Merchant';
      href = '/mastercard/';
      line = nextT < 0.04 ? 'One guided session' : (nextT > 0.96 ? 'Days to minutes. No invented percentage.' : mcFrames[mcIdx].line);
    }
    if (nameEl) nameEl.textContent = label;
    if (lineEl) lineEl.textContent = line;
    if (caseEl) caseEl.href = href;
    railSets.forEach((set) => {
      set.hidden = set.dataset.rail !== nextProject;
    });
    ownButtons.forEach((btn) => {
      btn.setAttribute('aria-selected', btn.dataset.own === nextProject ? 'true' : 'false');
    });
    indexLinks.forEach((link) => {
      if (link.dataset.ownLink === nextProject) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    stage.dataset.project = nextProject;
    const key = `${nextProject}|${nextDepth}|${nextStep}|${mcIdx}|${audience}`;
    if (live && key !== liveKey) {
      liveKey = key;
      live.textContent = `${label}. ${line}`;
    }
  }

  function paint(p) {
    const open = stacked() ? 1 : (p <= OPEN_A ? 0 : p >= OPEN_B ? 1 : (p - OPEN_A) / (OPEN_B - OPEN_A));
    stage.style.setProperty('--open', open.toFixed(4));
    stage.dataset.mode = open > 0.92 ? 'full' : 'slit';

    if (!stacked()) {
      if (p < WIPE_GB[0]) {
        project = 'google';
        depth = p < G0 ? 0 : bandIndex(p, G0, G1, 4);
      } else if (p < B0) {
        project = 'banco';
        step = 0;
      } else if (p < WIPE_BM[0]) {
        project = 'banco';
        step = bandIndex(p, B0, B1, 6);
      } else if (p < M0) {
        project = 'mc';
        t = 0;
      } else {
        project = 'mc';
        t = clamp((p - M0) / (1 - M0), 0, 1);
      }
    } else {
      project = own;
      stage.dataset.mode = 'full';
    }

    applyClips(stacked() ? 0 : p);
    paintGoogle();
    paintBanco();
    paintMc();
    chrome(project, depth, step, project === 'mc' ? t : 0);
  }

  const scrub = window.Stage.bindScrub(track, (p) => {
    if (lock || dragging || stacked()) return;
    paint(p);
  });

  function jumpTo(p) {
    const next = clamp(p, 0, 1);
    if (stacked()) {
      paint(next);
      return;
    }
    lock = true;
    paint(next);
    scrub.jump(next);
    window.clearTimeout(lockTimer);
    lockTimer = window.setTimeout(() => { lock = false; dragging = false; }, 740);
  }

  audButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      audience = btn.dataset.aud;
      if (!stacked() && depth < 1) jumpTo(progressFor('google', 1));
      else paint(stacked() ? 0 : currentProgress());
    });
  });

  depthButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      depth = i;
      if (stacked()) {
        own = 'google';
        paint(0);
      } else jumpTo(progressFor('google', i));
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const next = (i + dir + depthButtons.length) % depthButtons.length;
      depthButtons[next].focus();
      depthButtons[next].click();
    });
  });

  stepButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      step = i;
      if (stacked()) {
        own = 'banco';
        paint(0);
      } else jumpTo(progressFor('banco', i));
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      const dir = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : -1;
      const next = (i + dir + stepButtons.length) % stepButtons.length;
      stepButtons[next].focus();
      stepButtons[next].click();
    });
  });

  function setT(next, fromScroll) {
    t = clamp(next, 0, 1);
    if (stacked()) {
      own = 'mc';
      paint(0);
      return;
    }
    if (fromScroll) return;
    dragging = true;
    jumpTo(progressFor('mc', t));
  }

  jumpButtons.forEach((btn) => {
    btn.addEventListener('click', () => setT(Number(btn.dataset.jump), false));
  });

  if (playhead) {
    playhead.addEventListener('pointerdown', () => { dragging = true; });
    playhead.addEventListener('pointerup', () => { dragging = false; });
    playhead.addEventListener('input', () => setT(Number(playhead.value) / 1000, false));
  }
  window.addEventListener('pointerup', () => { dragging = false; });

  ownButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      own = btn.dataset.own;
      if (stacked()) paint(0);
      else {
        const p = own === 'google' ? progressFor('google', depth) : own === 'banco' ? progressFor('banco', step) : progressFor('mc', t);
        jumpTo(p);
      }
    });
  });

  function currentProgress() {
    if (project === 'banco') return progressFor('banco', step);
    if (project === 'mc') return progressFor('mc', t);
    return progressFor('google', depth);
  }

  let swipeX = 0;
  let swipeY = 0;
  body.addEventListener('pointerdown', (e) => {
    if (!stacked() || e.pointerType === 'mouse') return;
    swipeX = e.clientX;
    swipeY = e.clientY;
  });
  body.addEventListener('pointerup', (e) => {
    if (!stacked() || e.pointerType === 'mouse') return;
    const dx = e.clientX - swipeX;
    const dy = e.clientY - swipeY;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    const order = ['google', 'banco', 'mc'];
    const i = order.indexOf(own);
    const next = order[i + (dx < 0 ? 1 : -1)];
    if (!next) return;
    own = next;
    paint(0);
  });

  function onMode() {
    if (stacked()) {
      own = project;
      paint(0);
    } else scrub.refresh();
  }
  window.Stage.narrowMq.addEventListener('change', onMode);
  window.Stage.reducedMq.addEventListener('change', onMode);

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
  if (hashMap[hash]) {
    location.replace(hashMap[hash]);
    return;
  }

  if (stacked()) paint(0);
  else scrub.refresh();
})();
