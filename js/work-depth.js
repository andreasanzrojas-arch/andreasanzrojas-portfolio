(() => {
  const cursor = document.getElementById('cursor');
  const depth = document.getElementById('banco-depth');
  const depthHint = document.getElementById('depthHint');
  const depthTrigger = document.querySelector('.depth-trigger');
  if (!depth) return;

  const isTouch = document.body.classList.contains('is-touch');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setCut(on) {
    depth.classList.toggle('is-cut', on);
    depth.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (depthHint) {
      depthHint.textContent = on
        ? (isTouch ? 'Cut revealed · tap again' : 'Cut revealed · 12 → 3')
        : (isTouch ? 'Tap to feel the cut' : 'Hold to feel the cut');
    }
    if (depthTrigger) {
      depthTrigger.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  let holding = false;
  let toggled = false;

  const startHold = () => {
    holding = true;
    setCut(true);
    cursor && cursor.classList.add('is-drag');
  };
  const endHold = () => {
    if (!holding) return;
    holding = false;
    if (!isTouch && !toggled) setCut(false);
    cursor && cursor.classList.remove('is-drag');
  };

  // Ensure a11y attrs
  depth.setAttribute('role', 'button');
  depth.setAttribute('tabindex', '0');
  depth.setAttribute('aria-pressed', 'false');
  depth.setAttribute('aria-label', 'Hold or activate to reveal the 12 to 3 product cut');

  if (isTouch) {
    // Tap toggles — do not fake hover / do not fight scroll with long-press only
    const activate = (e) => {
      // Allow scrolling if user moves; simple tap toggle
      e.preventDefault();
      toggled = !depth.classList.contains('is-cut');
      setCut(toggled);
    };
    depth.addEventListener('click', activate);
    if (depthTrigger) {
      depthTrigger.setAttribute('type', 'button');
      depthTrigger.setAttribute('role', 'button');
      depthTrigger.setAttribute('aria-pressed', 'false');
      depthTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggled = !depth.classList.contains('is-cut');
        setCut(toggled);
      });
    }
  } else {
    // Pointer-fine: hold + hover reveal + keyboard toggle
    depth.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') startHold();
    });
    depth.addEventListener('pointerup', endHold);
    depth.addEventListener('pointerleave', endHold);
    depth.addEventListener('pointercancel', endHold);
    if (!reduced) {
      depth.addEventListener('mouseenter', () => { if (!holding && !toggled) setCut(true); });
      depth.addEventListener('mouseleave', () => { if (!holding && !toggled) setCut(false); });
    }
    if (depthTrigger) {
      if (depthTrigger.tagName === 'BUTTON' || depthTrigger.getAttribute('role') === 'button') {
        // ok
      } else {
        depthTrigger.setAttribute('role', 'button');
      }
      depthTrigger.setAttribute('aria-pressed', 'false');
      depthTrigger.addEventListener('pointerdown', (e) => { e.preventDefault(); startHold(); });
      depthTrigger.addEventListener('pointerup', endHold);
      depthTrigger.addEventListener('mouseenter', () => { if (!toggled) setCut(true); });
      depthTrigger.addEventListener('mouseleave', () => { if (!holding && !toggled) setCut(false); });
      depthTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggled = !depth.classList.contains('is-cut');
          setCut(toggled);
        }
      });
    }
  }

  // Keyboard on depth surface (mouse + trackpad + keyboard + touch a11y)
  depth.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggled = !depth.classList.contains('is-cut');
      setCut(toggled);
    }
  });

  const params = new URLSearchParams(location.search);
  const state = params.get('state');
  if (state === 'depth-rest') setCut(false);
  if (state === 'depth-cut') { toggled = true; setCut(true); }

  window.__portfolio = Object.assign(window.__portfolio || {}, { setCut });
})();
