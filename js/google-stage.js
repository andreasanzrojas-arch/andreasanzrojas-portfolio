(() => {
  const track = document.querySelector('[data-track]');
  const stage = document.getElementById('g-stage');
  if (!track || !stage || !window.Stage) return;

  const order = ['arrive', 'paths', 'labels', 'catalog'];
  const plates = Object.fromEntries(order.map((id) => [id, stage.querySelector(`[data-plate="${id}"]`)]));
  const tabs = [...document.querySelectorAll('[data-depth]')];
  const radios = [...document.querySelectorAll('input[name="audience"]')];
  const line = document.getElementById('g-line');
  let depth = 0;
  let audience = 'none';
  let lock = false;

  const copy = {
    arrive: 'One URL opens as a field of products. Sort could reorder 108+ integrations. It could not tell an administrator from an educator from a developer.',
    paths: {
      none: 'The shipped hub asks who is arriving: Administrators, Educators, Developers. Choose a path — the column comes forward.',
      administrators: 'Administrators — apps for the institution, licensing, and setup. The search space narrows before the grid appears.',
      educators: 'Educators — tools for the classroom and Classroom add-ons. Same URL, different job than a district buyer.',
      developers: 'Developers and partners — integrate, distribute, reach the people who decide. A parallel entry, not a second site.'
    },
    labels: 'The filter bar is the decision order: integration type, institution, subject, category, language. Teach those labels, then they can narrow the grid. Integration explainers are part of the logic; this frame is the taxonomy they unlock.',
    catalog: 'The grid those filters govern. Editorial discovery sits with the taxonomy for people who arrive without a query. Pagination replaces the endless wall. Recently launched — no outcome percentage is claimed.'
  };

  function sentence() {
    if (depth === 0) return copy.arrive;
    if (depth === 1) return copy.paths[audience] || copy.paths.none;
    if (depth === 2) return copy.labels;
    return copy.catalog;
  }

  function render() {
    order.forEach((id, i) => plates[id].classList.toggle('is-on', i === depth));
    tabs.forEach((tab, i) => {
      const on = i === depth;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
    });
    stage.dataset.audience = audience;
    stage.classList.toggle('is-paths', depth === 1);
    stage.classList.toggle('is-labels', depth === 2);
    stage.classList.toggle('is-catalog', depth === 3);
    if (line) line.textContent = sentence();
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
      if (audience !== 'none' && depth < 1) go(1);
      else render();
    });
  });

  if (location.hash === '#focus') go(3);
  render();
})();
