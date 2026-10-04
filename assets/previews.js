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
  const summary = document.createElement('p');
  const points = document.createElement('ul');
  const detail = document.createElement('a');
  detail.textContent = 'Read details →';
  panel.append(close, title, meta, img, summary, points, detail);
  document.body.append(panel);
  let current = null;
  let timer;
  const clear = () => clearTimeout(timer);
  const position = () => {
    if (!current || panel.hidden) return;
    const rect = current.link.getBoundingClientRect();
    const width = Math.min(420, innerWidth - 24);
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
    if (previous?.button) previous.button.setAttribute('aria-expanded', 'false');
    if (restore && previous) previous.button?.focus();
  };
  const show = (entry) => {
    clear();
    if (current?.button) current.button.setAttribute('aria-expanded', 'false');
    current = entry;
    const info = entry.info;
    title.textContent = info.title;
    meta.textContent = info.meta;
    summary.textContent = info.summary;
    img.src = new URL(info.image, root).href;
    img.alt = info.caption;
    points.replaceChildren(...info.points.map(text => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    }));
    detail.href = entry.link.href;
    panel.hidden = false;
    entry.button?.setAttribute('aria-expanded', 'true');
    position();
  };
  const delayedHide = () => {
    clear();
    timer = setTimeout(() => {
      if (panel.contains(document.activeElement) || document.activeElement === current?.link) return;
      hide();
    }, 220);
  };
  document.querySelectorAll('main a[href]').forEach(link => {
    const url = new URL(link.href);
    const path = url.pathname.slice(root.pathname.length);
    const info = data[path];
    if (!info || url.origin !== root.origin) return;
    const entry = {link, info, button: null};
    if (link.matches('.entries h3 a')) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'preview-trigger';
      button.textContent = 'Preview';
      button.setAttribute('aria-label', `${info.title} Preview`);
      button.setAttribute('aria-controls', panel.id);
      button.setAttribute('aria-expanded', 'false');
      link.closest('li').append(button);
      button.addEventListener('click', () => current === entry && !panel.hidden ? hide() : show(entry));
      entry.button = button;
    }
    link.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') show(entry);
    });
    link.addEventListener('pointerleave', delayedHide);
    link.addEventListener('focus', () => show(entry));
    link.addEventListener('blur', delayedHide);
  });
  panel.addEventListener('pointerenter', clear);
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
