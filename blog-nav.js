/**
 * blog-nav.js — Antviz Blog
 * <script src="blog-nav.js" data-page="domain"></script>
 */
(function () {

  const script = document.currentScript;
  const page   = script ? (script.getAttribute('data-page') || 'blog') : 'blog';
  const depth  = (window.location.pathname.replace(/\/+$/, '').match(/\//g) || []).length - 1;
  const b      = depth > 0 ? '../' : '';

  const CSS = `
    :root {
      --an-bg:        #191b1e;
      --an-bg2:       #2b2f33;
      --an-line:      rgba(255,255,255,.08);
      --an-ink:       #ffffff;
      --an-ink-dim:   rgba(255,255,255,.45);
      --an-green:     #1ede7b;
      --an-green-h:   #1ac16b;
      --an-green-ink: #191b1e;
      --an-green-dim: rgba(30,222,123,.14);
      --an-card:      #20242a;
      --an-card-border: rgba(255,255,255,.09);
      --an-card-ink:  #ffffff;
      --an-card-muted:rgba(255,255,255,.4);
      --an-font: 'Geologica','Inter','Arial',sans-serif;
    }

    .antviz-nav {
      position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
      z-index: 9000;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 10px 0 26px;
      height: 64px;
      width: calc(100% - 40px); max-width: 1100px;
      background: var(--an-bg);
      border: 1px solid var(--an-line);
      border-radius: 24px;
      transition: border-color .2s;
      font-family: var(--an-font);
    }
    .antviz-nav:hover { border-color: rgba(255,255,255,.14); }

    .an-logo {
      font-family: var(--an-font); font-weight: 500;
      font-size: .95rem; letter-spacing: -.01em;
      color: var(--an-ink); text-decoration: none;
      display: flex; align-items: center; gap: 10px; flex-shrink: 0;
    }
    .an-logo img { width: 28px; height: 28px; border-radius: 8px; object-fit: cover; }
    .an-logo-sep { color: rgba(255,255,255,.15); margin: 0 4px; font-weight: 300; }
    .an-logo-blog { font-size: .82rem; color: rgba(255,255,255,.35); font-weight: 300; }

    .an-center {
      position: absolute; left: 50%; transform: translateX(-50%);
      display: flex; align-items: center; gap: 2px;
    }
    .an-link {
      color: var(--an-ink-dim);
      font-family: var(--an-font); font-weight: 300; font-size: .88rem;
      text-decoration: none; padding: .5rem .9rem;
      border-radius: 10px; transition: color .15s, background .15s;
      white-space: nowrap; position: relative;
    }
    .an-link:hover { color: var(--an-ink); background: rgba(255,255,255,.05); }
    .an-link.active { color: var(--an-ink); font-weight: 500; }
    .an-link.active::after {
      content: ''; position: absolute; left: .9rem; right: .9rem; bottom: 2px;
      height: 2px; border-radius: 2px; background: var(--an-green);
    }

    .an-right { display: flex; align-items: center; gap: 10px; margin-left: auto; }

    /* Кнопка "Заказать сайт" справа */
    .an-cta {
      display: inline-flex; align-items: center; gap: 7px;
      background: var(--an-green); color: var(--an-green-ink);
      font-family: var(--an-font); font-weight: 500; font-size: .84rem;
      text-decoration: none; padding: .55rem 1.1rem;
      border-radius: 12px; transition: background .12s, transform .12s;
      white-space: nowrap; flex-shrink: 0;
    }
    .an-cta:hover { background: var(--an-green-h); transform: translateY(-1px); }

    /* Бургер */
    .an-burger {
      display: none; align-items: center; justify-content: center;
      width: 38px; height: 38px;
      background: none; border: 1px solid var(--an-line);
      border-radius: 12px; cursor: pointer; flex-shrink: 0;
      transition: border-color .15s, background .15s;
    }
    .an-burger:hover { border-color: rgba(255,255,255,.2); background: rgba(255,255,255,.04); }
    .an-burger span {
      display: block; width: 16px; height: 1.6px; background: var(--an-ink);
      border-radius: 2px; position: relative; transition: transform .2s, opacity .2s;
    }
    .an-burger span::before, .an-burger span::after {
      content: ''; position: absolute; left: 0; width: 16px; height: 1.6px;
      background: var(--an-ink); border-radius: 2px; transition: transform .2s, top .2s;
    }
    .an-burger span::before { top: -5px; }
    .an-burger span::after  { top: 5px; }
    .an-burger.open span { background: transparent; }
    .an-burger.open span::before { top: 0; transform: rotate(45deg); }
    .an-burger.open span::after  { top: 0; transform: rotate(-45deg); }

    /* Мобильная панель */
    .an-mobile-sheet {
      position: fixed; top: calc(20px + 64px + 10px); left: 50%; transform: translateX(-50%) translateY(-8px);
      z-index: 8999;
      width: calc(100% - 40px); max-width: 1100px;
      background: var(--an-bg);
      border: 1px solid var(--an-line);
      border-radius: 24px; padding: 10px;
      display: none; flex-direction: column; gap: 2px;
      opacity: 0; pointer-events: none;
      transition: opacity .18s ease, transform .18s ease;
      font-family: var(--an-font);
      box-shadow: 0 16px 40px rgba(0,0,0,.4);
    }
    .an-mobile-sheet.open { opacity: 1; pointer-events: all; transform: translateX(-50%) translateY(0); }
    .an-mobile-link {
      display: block; color: var(--an-ink-dim);
      font-weight: 300; font-size: .95rem;
      text-decoration: none; padding: 14px 16px;
      border-radius: 14px; transition: background .12s, color .12s;
    }
    .an-mobile-link:hover, .an-mobile-link.active { color: var(--an-ink); background: rgba(255,255,255,.05); }
    .an-mobile-link.active { font-weight: 500; }
    .an-mobile-sep { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
    .an-mobile-cta {
      display: block; text-align: center; margin-top: 4px;
      background: var(--an-green); color: var(--an-green-ink);
      font-weight: 500; font-size: .95rem;
      text-decoration: none; padding: 14px 16px; border-radius: 14px;
    }

    @media (max-width: 768px) {
      .antviz-nav { top: 14px; height: 58px; padding: 0 8px 0 18px; width: calc(100% - 24px); border-radius: 20px; }
      .an-center { display: none; }
      .an-cta { display: none; }
      .an-burger { display: flex; }
      .an-mobile-sheet { display: flex; top: calc(14px + 58px + 8px); }
      .an-logo-blog { display: none; }
    }
  `;

  // Ссылки в центре навбара — пока пусто, темы не придуманы
  const LINKS = [
    { href: 'https://antviz.ru', label: 'Antviz.ru', key: 'main' },
  ];

  const centerHtml = LINKS.map(l =>
    `<a href="${l.href}" class="an-link${page === l.key ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const mobileLinksHtml = LINKS.map(l =>
    `<a href="${l.href}" class="an-mobile-link${page === l.key ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const NAV_HTML = `
<nav class="antviz-nav" id="antvizNav">
  <a class="an-logo" href="https://blog.antviz.ru">
    <img src="https://blog.antviz.ru/img/favicon.png" alt="Antviz"/>
    Antviz<span class="an-logo-sep">/</span><span class="an-logo-blog">Блог</span>
  </a>

  <div class="an-center">${centerHtml}</div>

  <div class="an-right">
    <a href="https://antviz.ru/order" class="an-cta" target="_blank" rel="noopener">Заказать сайт</a>
    <button class="an-burger" id="anBurger" aria-label="Меню" aria-expanded="false"><span></span></button>
  </div>
</nav>
<div class="an-mobile-sheet" id="anMobileSheet">
  ${mobileLinksHtml}
  <div class="an-mobile-sep"></div>
  <a href="https://antviz.ru/order" class="an-mobile-cta" target="_blank" rel="noopener">Заказать сайт</a>
</div>`;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const bodyPad = document.createElement('style');
  bodyPad.textContent = 'body { padding-top: 104px; } @media(max-width:768px){ body { padding-top: 90px; } }';
  document.head.appendChild(bodyPad);

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  const burger = document.getElementById('anBurger');
  const sheet  = document.getElementById('anMobileSheet');
  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    sheet?.classList.toggle('open', open);
  });
  document.addEventListener('click', e => {
    if (burger && sheet && !burger.contains(e.target) && !sheet.contains(e.target)) {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      sheet.classList.remove('open');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      burger?.classList.remove('open');
      sheet?.classList.remove('open');
    }
  });

})();
