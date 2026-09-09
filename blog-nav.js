/**
 * blog-nav.js — Antviz Blog
 * <script src="blog-nav.js" data-page="blog"></script>
 *
 * v4 — упрощено обратно до сути: логотип, ссылки, кнопка «Заказать сайт»,
 * бургер-меню на мобильных. Без промо-плашки, без переключателя темы,
 * без command palette — это всё убрано, потому что ломалось на живом сайте
 * и путало, а не помогало.
 *
 * ВАЖНОЕ ТЕХНИЧЕСКОЕ РЕШЕНИЕ: капсула на position:fixed, а не position:sticky.
 * На каждой странице блога у <body> стоит overflow-x:hidden (чтобы ничего не
 * вылезало по бокам) — а это ломает sticky-позиционирование в большинстве
 * браузеров. fixed эту проблему не имеет: капсула всегда видна и всегда
 * "едет" вместе со страницей, независимо от overflow на родителях.
 */
(function () {

  const script = document.currentScript;
  const page   = script ? (script.getAttribute('data-page') || 'blog') : 'blog';

  // Логотип — только инлайн-SVG вордмарк (currentColor), без favicon.png
  // и без дублирующего текста рядом — как и было изначально задумано.
  const LOGO_SVG = `<svg class="bn-logo-mark" viewBox="0 0 1692 484" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true"><g transform="translate(0,484) scale(0.1,-0.1)" fill="currentColor"><path d="M13107 4247 c-49 -14 -128 -91 -161 -155 -54 -106 -25 -237 70 -321 92 -81 177 -99 275 -60 164 64 227 226 151 391 -16 35 -40 73 -53 85 -62 56 -197 85 -282 60z"/><path d="M7857 3914 c-4 -4 -7 -505 -7 -1113 0 -1051 1 -1111 19 -1196 20 -93 63 -209 99 -267 11 -18 34 -55 51 -83 112 -186 306 -327 536 -391 l100 -28 444 -4 c277 -2 447 0 453 6 14 14 12 411 -3 428 -9 11 -76 14 -361 14 -322 0 -356 2 -439 21 -154 37 -281 131 -344 254 -77 152 -78 161 -82 788 -3 419 -1 562 8 573 9 12 81 14 430 14 247 0 428 4 443 10 l26 10 0 213 c0 152 -3 216 -12 225 -9 9 -121 12 -444 12 -335 0 -435 3 -441 13 -4 6 -10 122 -13 257 l-5 245 -226 3 c-124 1 -228 -1 -232 -4z"/><path d="M2090 3388 c-19 -5 -63 -15 -97 -22 -34 -7 -119 -42 -190 -76 -115 -57 -137 -73 -223 -156 -90 -88 -105 -109 -164 -234 -11 -25 -27 -52 -33 -61 -7 -8 -20 -38 -29 -65 -54 -169 -64 -279 -64 -696 0 -277 4 -379 15 -450 15 -85 60 -232 85 -275 5 -10 15 -29 20 -43 17 -40 58 -104 105 -164 44 -56 195 -172 283 -217 84 -43 175 -73 266 -89 65 -11 1114 -12 1276 -1 90 6 95 7 98 30 2 13 -6 36 -17 52 -12 15 -21 31 -21 35 0 4 -15 30 -34 58 -18 28 -57 96 -85 151 -29 55 -58 103 -64 107 -7 4 -226 8 -487 8 -439 0 -481 2 -548 20 -168 44 -316 187 -347 332 -4 18 -11 38 -15 43 -17 23 -21 105 -21 443 1 330 3 363 22 432 24 85 39 121 73 168 69 94 122 135 231 179 l70 28 680 0 680 0 5 -1045 c3 -575 6 -1046 8 -1047 1 -2 105 -3 231 -3 195 0 232 2 245 16 14 14 16 143 16 1273 0 964 -3 1260 -12 1269 -15 15 -1903 15 -1958 0z"/><path d="M5310 3390 c-132 -28 -199 -55 -328 -133 -84 -51 -163 -129 -245 -243 -74 -103 -121 -256 -143 -469 -21 -193 -17 -1681 4 -1702 19 -19 445 -19 460 0 8 9 12 275 15 847 3 763 5 840 21 895 35 119 130 236 230 285 124 61 137 62 679 58 l492 -4 63 -28 c124 -54 198 -122 258 -239 47 -89 47 -94 51 -971 2 -582 7 -834 14 -843 16 -18 449 -19 467 -1 9 9 12 208 12 833 0 857 2 815 -40 1021 -28 134 -93 272 -181 383 -80 99 -162 166 -269 217 -41 20 -84 41 -95 47 -11 6 -36 14 -55 18 -19 3 -62 14 -95 23 -52 14 -136 16 -670 15 -335 -1 -626 -5 -645 -9z"/><path d="M9603 3385 c-6 -18 15 -68 106 -245 133 -260 538 -1068 567 -1130 16 -36 61 -126 98 -200 38 -74 77 -153 87 -175 10 -22 60 -128 112 -235 53 -107 127 -262 166 -345 39 -82 79 -166 88 -185 l18 -35 229 -3 c198 -2 231 0 247 14 17 15 67 112 184 359 31 66 61 127 66 135 5 8 18 33 28 55 10 22 42 90 70 150 28 61 56 119 63 130 27 46 148 294 148 303 0 5 25 56 55 113 31 57 69 133 86 169 27 58 140 289 272 555 25 50 68 135 96 190 134 264 181 369 170 382 -9 10 -67 13 -263 13 -138 0 -256 -4 -262 -8 -18 -12 -194 -360 -194 -384 0 -7 -13 -38 -29 -68 -91 -177 -127 -252 -191 -391 -40 -84 -96 -210 -127 -279 -30 -69 -58 -133 -63 -142 -39 -71 -149 -298 -155 -318 -9 -32 -122 -264 -152 -312 -13 -21 -30 -38 -37 -38 -13 0 -124 214 -216 415 -17 39 -71 151 -120 250 -193 395 -241 495 -298 620 -33 72 -71 150 -86 175 -14 25 -30 55 -35 67 -6 12 -33 70 -62 130 -28 59 -69 145 -90 189 -21 45 -46 85 -55 88 -8 3 -128 6 -265 6 -215 0 -250 -2 -256 -15z"/><path d="M12966 3384 c-14 -14 -16 -142 -16 -1265 0 -843 3 -1257 10 -1270 10 -18 23 -19 233 -19 160 0 226 3 235 12 9 9 12 306 12 1275 0 1238 0 1262 -19 1273 -12 6 -104 10 -230 10 -177 0 -212 -2 -225 -16z"/><path d="M14043 3393 c-16 -6 -18 -419 -3 -443 8 -13 101 -16 702 -20 671 -5 693 -6 696 -24 2 -10 -3 -23 -11 -27 -8 -5 -41 -41 -73 -81 -33 -40 -111 -136 -174 -213 -133 -161 -205 -251 -308 -379 -41 -50 -90 -109 -110 -131 -21 -22 -64 -74 -97 -116 -111 -142 -189 -240 -295 -366 -58 -69 -129 -157 -158 -195 -29 -38 -82 -106 -117 -151 -35 -45 -82 -105 -105 -134 l-40 -52 0 -109 c0 -91 3 -111 16 -116 9 -3 536 -6 1173 -6 887 0 1160 3 1169 12 17 17 17 409 0 426 -9 9 -199 12 -795 12 -657 0 -783 2 -783 14 0 7 24 41 53 74 146 169 252 295 309 369 110 142 220 276 269 328 26 28 67 75 91 106 57 75 272 330 337 399 28 30 51 58 51 61 0 10 257 321 322 390 13 14 52 59 85 100 l61 75 0 87 c1 65 -3 90 -14 102 -14 13 -141 15 -1127 14 -612 0 -1118 -3 -1124 -6z"/></g></svg>`;

  const CSS = `
    .bn-shell-wrap, .bn-shell-wrap * { box-sizing: border-box; }

    .bn-shell-wrap {
      position: fixed; top: 18px; left: 50%; transform: translateX(-50%);
      z-index: 9000;
      width: calc(100% - 32px); max-width: 1120px;
      font-family: -apple-system, BlinkMacSystemFont, 'Geologica', 'Inter', 'Segoe UI', Arial, sans-serif;
    }

    .bn-shell {
      background: rgba(255,255,255,.86);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border: 1px solid rgba(255,255,255,.7);
      border-radius: 999px;
      box-shadow: 0 10px 34px rgba(18,18,18,.08);
      overflow: hidden;
      transition: border-radius .6s cubic-bezier(.65,0,.35,1);
    }
    .bn-shell.open { border-radius: 30px; }

    .bn-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 12px 10px 22px; min-height: 60px; gap: 16px;
    }

    .bn-logo { display: flex; align-items: center; gap: 9px; color: #121212; text-decoration: none; flex-shrink: 0; }
    .bn-logo-mark { height: 24px; width: auto; display: block; }
    .bn-logo-tag { font-size: 12px; color: #6b6b68; font-weight: 400; white-space: nowrap; }

    .bn-links-desktop { display: none; }

    .bn-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

    .bn-cta {
      display: none;
      background: #121212; color: #f4f4f2;
      text-decoration: none; padding: 13px 24px;
      border-radius: 999px; font-weight: 600; font-size: 14.5px;
      white-space: nowrap; border: none; cursor: pointer;
      transition: opacity .15s;
    }
    .bn-cta:hover { opacity: .85; }

    .bn-menu-btn {
      width: 44px; height: 44px; border-radius: 50%; border: none;
      background: transparent; display: flex; align-items: center; justify-content: center;
      cursor: pointer; position: relative; flex-shrink: 0;
    }
    .bn-menu-btn span {
      position: absolute; width: 20px; height: 1.5px; background: #121212; border-radius: 2px;
      transition: transform .55s cubic-bezier(.65,0,.35,1), opacity .4s ease, top .55s cubic-bezier(.65,0,.35,1);
    }
    .bn-menu-btn span:nth-child(1) { top: 16px; }
    .bn-menu-btn span:nth-child(2) { top: 22px; }
    .bn-menu-btn span:nth-child(3) { top: 28px; }
    .bn-shell.open .bn-menu-btn span:nth-child(1) { top: 22px; transform: rotate(45deg); }
    .bn-shell.open .bn-menu-btn span:nth-child(2) { opacity: 0; }
    .bn-shell.open .bn-menu-btn span:nth-child(3) { top: 22px; transform: rotate(-45deg); }

    .bn-links-mobile {
      max-height: 0; opacity: 0; overflow: hidden; padding: 0 22px;
      transition: max-height .65s cubic-bezier(.65,0,.35,1), opacity .5s ease .05s, padding .65s cubic-bezier(.65,0,.35,1);
    }
    .bn-links-mobile.open { max-height: 600px; opacity: 1; padding: 4px 22px 22px; }
    .bn-links-mobile a {
      display: block; color: #121212; text-decoration: none;
      font-size: 1.4rem; font-weight: 700; letter-spacing: -.01em;
      padding: 13px 2px; border-top: 1px solid rgba(18,18,18,.08);
    }
    .bn-links-mobile a:first-child { border-top: none; }
    .bn-links-mobile a.bn-active { opacity: .5; }
    .bn-cta-mobile {
      margin-top: 14px; display: block; text-align: center;
      background: #121212 !important; color: #f4f4f2 !important;
      border-radius: 999px; padding: 16px !important;
      font-size: 1.05rem !important; font-weight: 600 !important;
      border-top: none !important;
    }

    @media (min-width: 900px) {
      .bn-header { padding: 10px 12px 10px 26px; }
      .bn-links-mobile { display: none !important; }
      .bn-menu-btn { display: none; }
      .bn-links-desktop {
        display: flex; align-items: center; gap: 26px; margin-right: 4px;
      }
      .bn-links-desktop a {
        color: #121212; text-decoration: none; font-size: 15px; font-weight: 500;
        opacity: .72; transition: opacity .2s ease; white-space: nowrap;
      }
      .bn-links-desktop a:hover { opacity: 1; }
      .bn-links-desktop a.bn-active { opacity: 1; font-weight: 600; }
      .bn-cta { display: inline-block; }
    }
  `;

  const LINKS = [
    { href: 'https://blog.antviz.ru/articles', label: 'Статьи',    key: 'articles' },
    { href: 'https://blog.antviz.ru/news',    label: 'Новости',    key: 'news' },
    { href: 'https://blog.antviz.ru/updates', label: 'Что нового', key: 'updates' },
    { href: 'https://antviz.ru',              label: 'Antviz.ru',  key: 'main' },
  ];

  const desktopLinksHtml = LINKS.map(l =>
    `<a href="${l.href}"${page === l.key ? ' class="bn-active"' : ''}>${l.label}</a>`
  ).join('');

  const mobileLinksHtml = LINKS.map(l =>
    `<a href="${l.href}"${page === l.key ? ' class="bn-active"' : ''}>${l.label}</a>`
  ).join('');

  const NAV_HTML = `
<div class="bn-shell-wrap">
  <div class="bn-shell" id="bnShell">
    <div class="bn-header">
      <a class="bn-logo" href="https://blog.antviz.ru" aria-label="Antviz Блог">
        ${LOGO_SVG}
        <span class="bn-logo-tag">блог</span>
      </a>

      <nav class="bn-links-desktop">${desktopLinksHtml}</nav>

      <div class="bn-right">
        <a href="https://antviz.ru/order" class="bn-cta" target="_blank" rel="noopener">Заказать сайт</a>
        <button class="bn-menu-btn" id="bnMenuBtn" aria-label="Открыть меню" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="bn-links-mobile" id="bnLinksMobile">
      ${mobileLinksHtml}
      <a href="https://antviz.ru/order" class="bn-cta-mobile" target="_blank" rel="noopener">Заказать сайт</a>
    </div>
  </div>
</div>`;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // Капсула теперь fixed (снята из потока), поэтому странице нужен отступ
  // сверху, чтобы контент не оказался под ней.
  const bodyPad = document.createElement('style');
  bodyPad.textContent = 'body { padding-top: 96px; } @media(max-width:760px){ body { padding-top: 88px; } }';
  document.head.appendChild(bodyPad);

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  const shell = document.getElementById('bnShell');
  const btn   = document.getElementById('bnMenuBtn');
  const panel = document.getElementById('bnLinksMobile');

  btn?.addEventListener('click', () => {
    const open = shell.classList.toggle('open');
    panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

})();
