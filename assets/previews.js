(() => {
  const data = window.portfolioPreviews || {};
  const root = new URL('../', document.currentScript.src);
  const panel = document.createElement('aside');
  panel.id = 'link-preview';
  panel.className = 'link-preview';
  panel.hidden = true;
  panel.setAttribute('aria-label', 'Item preview');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'preview-close';
  close.textContent = 'Close';
  const title = document.createElement('h2');
  const meta = document.createElement('p');
  meta.className = 'meta';
  const img = document.createElement('img');
  const figure = document.createElement('figure');
  figure.className = 'preview-visual';
  const figureLink = document.createElement('a');
  figureLink.setAttribute('aria-label', 'Open figure at full size');
  const caption = document.createElement('figcaption');
  figureLink.append(img);
  figure.append(figureLink, caption);
  const controls = document.createElement('div');
  controls.className = 'preview-figure-controls';
  const previousFigure = document.createElement('button');
  const nextFigure = document.createElement('button');
  previousFigure.type = nextFigure.type = 'button';
  previousFigure.textContent = '← Previous';
  nextFigure.textContent = 'Next →';
  previousFigure.setAttribute('aria-label', 'Previous figure');
  nextFigure.setAttribute('aria-label', 'Next figure');
  const count = document.createElement('span');
  count.setAttribute('aria-live', 'polite');
  controls.append(previousFigure, count, nextFigure);
  const openFigure = document.createElement('a');
  openFigure.className = 'preview-open-figure';
  openFigure.textContent = 'Open figure at full size ↗';
  const summary = document.createElement('p');
  const points = document.createElement('ul');
  const detail = document.createElement('a');
  detail.textContent = 'Read details →';
  panel.append(close, title, meta, figure, controls, openFigure, summary, points, detail);
  document.body.append(panel);
  let current = null;
  let pinned = false;
  let timer;
  const clear = () => clearTimeout(timer);
  const position = () => {
    if (!current || panel.hidden) return;
    const rect = current.link.getBoundingClientRect();
    const width = Math.min(current.info.visuals ? 560 : 420, innerWidth - 24);
    panel.style.width = `${width}px`;
    panel.style.maxHeight = `${innerHeight - 32}px`;
    const height = panel.getBoundingClientRect().height;
    const left = Math.max(12, Math.min(rect.left, innerWidth - width - 12));
    const top = rect.bottom + 10 + height <= innerHeight - 16
      ? rect.bottom + 10 : Math.max(16, rect.top - height - 10);
    panel.style.left = `${left}px`;
    panel.style.top = `${Math.min(top, innerHeight - height - 16)}px`;
  };
  const hide = (restore = false) => {
    clear();
    const previous = current;
    panel.hidden = true;
    current = null;
    pinned = false;
    if (previous?.button) previous.button.setAttribute('aria-expanded', 'false');
    if (restore && previous) previous.button?.focus();
  };
  const show = (entry) => {
    clear();
    if (current === entry && !panel.hidden) { position(); return; }
    if (current?.button) current.button.setAttribute('aria-expanded', 'false');
    current = entry;
    const info = entry.info;
    title.textContent = info.title;
    meta.textContent = info.meta;
    summary.textContent = info.summary;
    summary.hidden = Boolean(info.visuals);
    panel.classList.toggle('visual-preview', Boolean(info.visuals));
    points.hidden = Boolean(info.visuals);
    openFigure.hidden = !info.visuals;
    caption.hidden = !info.visuals;
    controls.hidden = !info.visuals || info.visuals.length < 2;
    entry.figures = info.visuals || [{image: info.image, caption: info.caption}];
    setFigure(0);
    points.replaceChildren(...(info.points || []).map(text => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    }));
    detail.href = entry.link.href;
    detail.textContent = info.visuals ? 'Read session →' : 'Read details →';
    panel.hidden = false;
    panel.scrollTop = 0;
    entry.button?.setAttribute('aria-expanded', 'true');
    position();
  };
  const setFigure = (index) => {
    if (!current || !current.figures[index]) return;
    current.figureIndex = index;
    const visual = current.figures[index];
    const source = new URL(visual.image, root).href;
    img.src = source;
    img.alt = visual.caption;
    figureLink.href = openFigure.href = source;
    caption.textContent = visual.caption;
    count.textContent = `Figure ${index + 1} of ${current.figures.length}`;
    previousFigure.disabled = index === 0;
    nextFigure.disabled = index === current.figures.length - 1;
    position();
  };
  previousFigure.addEventListener('click', () => { pinned = true; setFigure(current.figureIndex - 1); });
  nextFigure.addEventListener('click', () => { pinned = true; setFigure(current.figureIndex + 1); });
  const delayedHide = () => {
    clear();
    timer = setTimeout(() => {
      if (pinned || panel.contains(document.activeElement) || document.activeElement === current?.link) return;
      hide();
    }, 220);
  };
  document.querySelectorAll('main a[href]').forEach(link => {
    const url = new URL(link.href);
    const path = url.pathname.slice(root.pathname.length);
    const info = data[path];
    if (!info || url.origin !== root.origin) return;
    const entry = {link, info, button: null};
    const inlinePreview = link.matches('.session-list a, a[data-preview]');
    if (inlinePreview || link.matches('.entries h3 a')) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'preview-trigger';
      button.textContent = 'Preview';
      button.setAttribute('aria-label', `${info.title} Preview`);
      button.setAttribute('aria-controls', panel.id);
      button.setAttribute('aria-expanded', 'false');
      if (inlinePreview) link.insertAdjacentElement('afterend', button);
      else link.closest('li').append(button);
      button.addEventListener('click', () => {
        if (current === entry && !panel.hidden && pinned) hide();
        else { pinned = true; show(entry); }
      });
      entry.button = button;
    }
    link.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' && !pinned && !panel.contains(document.activeElement)) show(entry);
    });
    link.addEventListener('pointerleave', delayedHide);
    link.addEventListener('focus', () => show(entry));
    link.addEventListener('blur', delayedHide);
  });
  panel.addEventListener('pointerenter', clear);
  panel.addEventListener('pointerdown', () => { pinned = true; });
  panel.addEventListener('pointerleave', delayedHide);
  panel.addEventListener('focusin', clear);
  panel.addEventListener('focusout', delayedHide);
  close.addEventListener('click', () => hide(true));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      const restore = panel.contains(document.activeElement);
      hide(restore);
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!panel.hidden && !panel.contains(event.target) && event.target !== current?.button && event.target !== current?.link) hide();
  });
  window.addEventListener('resize', position);
  window.addEventListener('scroll', position, {passive: true});
  img.addEventListener('load', position);
})();
