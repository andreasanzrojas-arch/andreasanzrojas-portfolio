(() => {
  const track = document.querySelector('[data-track]');
  const stage = document.getElementById('g-stage');
  if (!track || !stage || !window.Stage) return;

  const order = ['wall', 'paths', 'labels', 'catalog'];
  const plates = Object.fromEntries(order.map((id) => [id, stage.querySelector(`[data-plate="${id}"]`)]));
  const tabs = [...document.querySelectorAll('[data-depth]')];
  const radios = [...document.querySelectorAll('input[name="audience"]')];
  const line = document.getElementById('g-line');
  const closer = document.getElementById('g-closer');
  let depth = 0;
  let audience = 'none';
  let close = false;
  let lock = false;

  const copy = {
    wall: {
      none: 'Sort was the only navigation. One URL, every audience, no path above the fold. 108+ integrations could be reordered. They could not be narrowed.',
      set: 'Someone specific is arriving. This catalog still has nowhere to put them.'
    },
    paths: {
      none: 'What shipped asks who you are before it opens inventory. Choose an audience — the path is the product.',
      institutions: 'Institutions — compare solutions across schools, estimate impact, connect with partners. The search space shrinks before the catalog appears.',
      educators: 'Educators — tools and training for the classroom. A different intent than a district buyer, on the same URL.',
      partners: 'Developers and partners — distribute a solution and reach the people who decide. Parallel entry, not a second website.'
    },
    labels: {
      any: 'Teach the labels, then filter. Integration type, institution, education level, subject, category, language — ordered by how people evaluate. Explainer cards for integration types are part of the shipped logic; this frame is the taxonomy those explanations unlock.'
    },
    catalog: {
      any: 'Editorial discovery beside the taxonomy, for people who arrive without a formed query. Pagination replaces the endless wall. Recently launched — no outcome percentage is claimed.'
    }
  };

  function sentence() {
    if (depth === 0) return audience === 'none' ? copy.wall.none : copy.wall.set;
    if (depth === 1) return audience === 'none' ? copy.paths.none : copy.paths[audience];
    if (depth === 2) return copy.labels.any;
    return copy.catalog.any;
  }

  function render() {
    order.forEach((id, i) => plates[id].classList.toggle('is-on', i === depth));
    tabs.forEach((tab, i) => {
      const on = i === depth;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
    });
    stage.classList.toggle('is-close', close);
    if (line) line.textContent = sentence();
    if (closer) closer.setAttribute('aria-pressed', close ? 'true' : 'false');
  }

  const scrub = window.Stage.bindScrub(track, (p) => {
    if (lock) return;
    const next = Math.round(p * (order.length - 1));
    if (next !== depth) {
      depth = next;
      render();
    }
  });

  function go(next) {
    depth = next;
    close = false;
    render();
    lock = true;
    scrub.jump(next / (order.length - 1));
    setTimeout(() => { lock = false; }, 700);
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => go(i));
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const next = (i + dir + tabs.length) % tabs.length;
      tabs[next].focus();
      go(next);
    });
  });

  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      audience = radio.value;
      if (audience !== 'none' && depth === 0) go(1);
      else render();
    });
  });

  if (closer) {
    closer.addEventListener('click', () => {
      close = !close;
      render();
    });
  }

  if (location.hash === '#focus') go(3);
  render();
})();
