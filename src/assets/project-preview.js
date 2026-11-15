// User-directed crossfade, independent of the kit's instant preview switcher.
for (const root of document.querySelectorAll('[data-project-preview]')) {
  const rows = [...root.querySelectorAll('[data-peek-to]')];
  const panels = [...root.querySelectorAll('[data-peek-for]')];
  const host = root.querySelector('.work-preview__visual');
  if (!rows.length || !panels.length || !host) continue;
  let current = panels.find(panel => !panel.hidden) || panels[0];
  let request = 0;
  const ready = new Map(panels.map(panel => [panel, Promise.all(
    [...panel.querySelectorAll('img')].map(img => {
      img.loading = 'eager';
      return img.decode?.().catch(() => {}) || Promise.resolve();
    })
  )]));
  function activate(panel) {
    current = panel;
    for (const item of panels) {
      const active = item === panel;
      item.classList.toggle('is-active', active);
      item.inert = !active;
      item.setAttribute('aria-hidden', String(!active));
    }
    for (const row of rows) row.classList.toggle('is-on', row.dataset.peekTo === panel.dataset.peekFor);
  }
  activate(current);
  for (const panel of panels) panel.hidden = false;
  host.classList.add('has-crossfade');
  async function show(row) {
    const ticket = ++request;
    const panel = panels.find(item => item.dataset.peekFor === row.dataset.peekTo);
    if (!panel || panel === current) return;
    await ready.get(panel);
    if (ticket === request) activate(panel);
  }
  for (const row of rows) {
    row.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') show(row); });
    row.addEventListener('focusin', () => show(row));
    row.addEventListener('click', event => { if (!event.target.closest('a, button')) show(row); });
  }
}
