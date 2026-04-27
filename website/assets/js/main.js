/* Sebastian Rink — Academic Website JS */

/* ── Navigation toggle ─────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Close on link click (mobile) */
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ── Active nav link ───────────────────────────────────────── */
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const hrefPath = new URL(href, window.location.href).pathname;
    if (path === hrefPath) {
      a.classList.add('active');
    }
  });
})();

/* ── Smooth image fallback ─────────────────────────────────── */
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', function () {
    const fallback = this.dataset.fallback;
    if (fallback) {
      const el = document.getElementById(fallback);
      if (el) {
        this.style.display = 'none';
        el.style.display = 'flex';
      }
    }
  });
});
