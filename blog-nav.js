/**
 * blog-nav.js — Antviz Blog
 * <script src="blog-nav.js" data-page="blog"></script>
 *
 * v3 — переделан под дизайн-систему "Vantage": плавающая капсула со
 * стеклянным блюром (backdrop-filter), монохромная палитра чёрный/серый
 * (без цветных акцентов), гамбургер не открывает отдельное окно, а
 * раскрывает панель ссылок прямо внутри той же капсулы.
 * Логотип — инлайн-SVG вордмарк Antviz, без favicon.png и без текста рядом.
 */
(function () {

  const script = document.currentScript;
  const page   = script ? (script.getAttribute('data-page') || 'blog') : 'blog';

  const LOGO_SVG = `<svg class="bn-logo-mark" viewBox="0 0 1692 484" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true"><g transform="translate(0,484) scale(0.1,-0.1)" fill="currentColor"><path d="M13107 4247 c-49 -14 -128 -91 -161 -155 -54 -106 -25 -237 70 -321 92 -81 177 -99 275 -60 164 64 227 226 151 391 -16 35 -40 73 -53 85 -62 56 -197 85 -282 60z"/><path d="M7857 3914 c-4 -4 -7 -505 -7 -1113 0 -1051 1 -1111 19 -1196 20 -93 63 -209 99 -267 11 -18 34 -55 51 -83 112 -186 306 -327 536 -391 l100 -28 444 -4 c277 -2 447 0 453 6 14 14 12 411 -3 428 -9 11 -76 14 -361 14 -322 0 -356 2 -439 21 -154 37 -281 131 -344 254 -77 152 -78 161 -82 788 -3 419 -1 562 8 573 9 12 81 14 430 14 247 0 428 4 443 10 l26 10 0 213 c0 152 -3 216 -12 225 -9 9 -121 12 -444 12 -335 0 -435 3 -441 13 -4 6 -10 122 -13 257 l-5 245 -226 3 c-124 1 -228 -1 -232 -4z"/><path d="M2090 3388 c-19 -5 -63 -15 -97 -22 -34 -7 -119 -42 -190 -76 -115 -57 -137 -73 -223 -156 -90 -88 -105 -109 -164 -234 -11 -25 -27 -52 -33 -61 -7 -8 -20 -38 -29 -65 -54 -169 -64 -279 -64 -696 0 -277 4 -379 15 -450 15 -85 60 -232 85 -275 5 -10 15 -29 20 -43 17 -40 58 -104 105 -164 44 -56 195 -172 283 -217 84 -43 175 -73 266 -89 65 -11 1114 -12 1276 -1 90 6 95 7 98 30 2 13 -6 36 -17 52 -12 15 -21 31 -21 35 0 4 -15 30 -34 58 -18 28 -57 96 -85 151 -29 55 -58 103 -64 107 -7 4 -226 8 -487 8 -439 0 -481 2 -548 20 -168 44 -316 187 -347 332 -4 18 -11 38 -15 43 -17 23 -21 105 -21 443 1 330 3 363 22 432 24 85 39 121 73 168 69 94 122 135 231 179 l70 28 680 0 680 0 5 -1045 c3 -575 6 -1046 8 -1047 1 -2 105 -3 231 -3 195 0 232 2 245 16 14 14 16 143 16 1273 0 964 -3 1260 -12 1269 -15 15 -1903 15 -1958 0z"/><path d="M5310 3390 c-132 -28 -199 -55 -328 -133 -84 -51 -163 -129 -245 -243 -74 -103 -121 -256 -143 -469 -21 -193 -17 -1681 4 -1702 19 -19 445 -19 460 0 8 9 12 275 15 847 3 763 5 840 21 895 35 119 130 236 230 285 124 61 137 62 679 58 l492 -4 63 -28 c124 -54 198 -122 258 -239 47 -89 47 -94 51 -971 2 -582 7 -834 14 -843 16 -18 449 -19 467 -1 9 9 12 208 12 833 0 857 2 815 -40 1021 -28 134 -93 272 -181 383 -80 99 -162 166 -269 217 -41 20 -84 41 -95 47 -11 6 -36 14 -55 18 -19 3 -62 14 -95 23 -52 14 -136 16 -670 15 -335 -1 -626 -5 -645 -9z"/><path d="M9603 3385 c-6 -18 15 -68 106 -245 133 -260 538 -1068 567 -1130 16 -36 61 -126 98 -200 38 -74 77 -153 87 -175 10 -22 60 -128 112 -235 53 -107 127 -262 166 -345 39 -82 79 -166 88 -185 l18 -35 229 -3 c198 -2 231 0 247 14 17 15 67 112 184 359 31 66 61 127 66 135 5 8 18 33 28 55 10 22 42 90 70 150 28 61 56 119 63 130 27 46 148 294 148 303 0 5 25 56 55 113 31 57 69 133 86 169 27 58 140 289 272 555 25 50 68 135 96 190 134 264 181 369 170 382 -9 10 -67 13 -263 13 -138 0 -256 -4 -262 -8 -18 -12 -194 -360 -194 -384 0 -7 -13 -38 -29 -68 -91 -177 -127 -252 -191 -391 -40 -84 -96 -210 -127 -279 -30 -69 -58 -133 -63 -142 -39 -71 -149 -298 -155 -318 -9 -32 -122 -264 -152 -312 -13 -21 -30 -38 -37 -38 -13 0 -124 214 -216 415 -17 39 -71 151 -120 250 -193 395 -241 495 -298 620 -33 72 -71 150 -86 175 -14 25 -30 55 -35 67 -6 12 -33 70 -62 130 -28 59 -69 145 -90 189 -21 45 -46 85 -55 88 -8 3 -128 6 -265 6 -215 0 -250 -2 -256 -15z"/><path d="M12966 3384 c-14 -14 -16 -142 -16 -1265 0 -843 3 -1257 10 -1270 10 -18 23 -19 233 -19 160 0 226 3 235 12 9 9 12 306 12 1275 0 1238 0 1262 -19 1273 -12 6 -104 10 -230 10 -177 0 -212 -2 -225 -16z"/><path d="M14043 3393 c-16 -6 -18 -419 -3 -443 8 -13 101 -16 702 -20 671 -5 693 -6 696 -24 2 -10 -3 -23 -11 -27 -8 -5 -41 -41 -73 -81 -33 -40 -111 -136 -174 -213 -133 -161 -205 -251 -308 -379 -41 -50 -90 -109 -110 -131 -21 -22 -64 -74 -97 -116 -111 -142 -189 -240 -295 -366 -58 -69 -129 -157 -158 -195 -29 -38 -82 -106 -117 -151 -35 -45 -82 -105 -105 -134 l-40 -52 0 -109 c0 -91 3 -111 16 -116 9 -3 536 -6 1173 -6 887 0 1160 3 1169 12 17 17 17 409 0 426 -9 9 -199 12 -795 12 -657 0 -783 2 -783 14 0 7 24 41 53 74 146 169 252 295 309 369 110 142 220 276 269 328 26 28 67 75 91 106 57 75 272 330 337 399 28 30 51 58 51 61 0 10 257 321 322 390 13 14 52 59 85 100 l61 75 0 87 c1 65 -3 90 -14 102 -14 13 -141 15 -1127 14 -612 0 -1118 -3 -1124 -6z"/></g></svg>`;

  const CSS = `
    .bn-shell-wrap, .bn-shell-wrap * { box-sizing: border-box; }

    .bn-shell-wrap {
      position: sticky; top: 18px; z-index: 9000;
      display: flex; justify-content: center;
      padding: 0 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Geologica', 'Inter', 'Segoe UI', Arial, sans-serif;
    }

    .bn-shell {
      width: 100%; max-width: 1120px;
      background: rgba(255,255,255,.62);
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

    .bn-theme-btn {
      width: 40px; height: 40px; border-radius: 50%; border: none;
      background: rgba(18,18,18,.06); cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      transition: background .15s;
    }
    .bn-theme-btn:hover { background: rgba(18,18,18,.12); }
    .bn-theme-btn svg { width: 18px; height: 18px; stroke: #121212; stroke-width: 1.8; fill: none; }
    .bn-theme-btn .bn-ico-moon { display: none; }
    [data-theme="dark"] .bn-theme-btn .bn-ico-sun { display: none; }
    [data-theme="dark"] .bn-theme-btn .bn-ico-moon { display: block; }
    [data-theme="dark"] .bn-shell { background: rgba(28,29,32,.66); border-color: rgba(255,255,255,.08); }
    [data-theme="dark"] .bn-theme-btn { background: rgba(255,255,255,.08); }
    [data-theme="dark"] .bn-theme-btn:hover { background: rgba(255,255,255,.15); }
    [data-theme="dark"] .bn-theme-btn svg { stroke: #f4f4f2; }
    [data-theme="dark"] .bn-logo, [data-theme="dark"] .bn-links-desktop a, [data-theme="dark"] .bn-links-mobile a, [data-theme="dark"] .bn-menu-btn span { color: #f4f4f2; }
    [data-theme="dark"] .bn-menu-btn span { background: #f4f4f2; }
    [data-theme="dark"] .bn-logo-tag { color: #a5a5aa; }
    [data-theme="dark"] .bn-links-mobile a { border-top-color: rgba(255,255,255,.1); }
    [data-theme="dark"] .bn-cta { background: #f4f4f2; color: #121212; }
    [data-theme="dark"] .bn-cta-mobile { background: #f4f4f2 !important; color: #121212 !important; }

    .bn-cmdk-btn {
      display: flex; align-items: center; gap: 7px; height: 40px;
      border-radius: 20px; border: none; cursor: pointer; flex-shrink: 0;
      background: rgba(18,18,18,.06); padding: 0 12px 0 12px;
      transition: background .15s;
    }
    .bn-cmdk-btn:hover { background: rgba(18,18,18,.12); }
    .bn-cmdk-btn svg { width: 17px; height: 17px; stroke: #121212; stroke-width: 2; fill: none; flex-shrink: 0; }
    .bn-cmdk-kbd { display: none; font-size: 11.5px; color: rgba(18,18,18,.45); font-weight: 500; }
    @media (min-width: 900px) { .bn-cmdk-kbd { display: inline; } }
    [data-theme="dark"] .bn-cmdk-btn { background: rgba(255,255,255,.08); }
    [data-theme="dark"] .bn-cmdk-btn:hover { background: rgba(255,255,255,.15); }
    [data-theme="dark"] .bn-cmdk-btn svg { stroke: #f4f4f2; }
    [data-theme="dark"] .bn-cmdk-kbd { color: rgba(244,244,242,.45); }

    .bn-cmdk-overlay {
      position: fixed; inset: 0; z-index: 20000;
      background: rgba(15,16,18,.5); backdrop-filter: blur(4px);
      display: none; align-items: flex-start; justify-content: center;
      padding: 12vh 16px 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Geologica', 'Inter', 'Segoe UI', Arial, sans-serif;
    }
    .bn-cmdk-overlay.open { display: flex; }
    .bn-cmdk-modal {
      width: 100%; max-width: 560px; max-height: 70vh;
      background: #fff; border-radius: 22px; overflow: hidden;
      box-shadow: 0 30px 80px rgba(0,0,0,.35);
      display: flex; flex-direction: column;
      animation: bnCmdkIn .16s cubic-bezier(.16,1,.3,1);
    }
    @keyframes bnCmdkIn { from { opacity: 0; transform: translateY(-8px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
    [data-theme="dark"] .bn-cmdk-modal { background: #1c1d20; }
    .bn-cmdk-input-row { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-bottom: 1px solid rgba(18,18,18,.08); flex-shrink: 0; }
    [data-theme="dark"] .bn-cmdk-input-row { border-bottom-color: rgba(255,255,255,.08); }
    .bn-cmdk-input-row svg { width: 19px; height: 19px; stroke: #6b6b68; stroke-width: 2; fill: none; flex-shrink: 0; }
    .bn-cmdk-input { flex: 1; border: none; outline: none; background: transparent; font-size: 16px; font-family: inherit; color: #121212; }
    [data-theme="dark"] .bn-cmdk-input { color: #f4f4f2; }
    .bn-cmdk-input::placeholder { color: #9a9a9a; }
    .bn-cmdk-esc { font-size: 11px; color: #9a9a9a; border: 1px solid rgba(18,18,18,.12); border-radius: 6px; padding: 2px 6px; flex-shrink: 0; }
    [data-theme="dark"] .bn-cmdk-esc { border-color: rgba(255,255,255,.15); color: #8a8a8f; }
    .bn-cmdk-list { overflow-y: auto; padding: 8px; }
    .bn-cmdk-empty { padding: 32px 20px; text-align: center; color: #9a9a9a; font-size: 14px; }
    .bn-cmdk-item {
      display: flex; align-items: center; gap: 12px; padding: 12px 14px;
      border-radius: 12px; cursor: pointer; text-decoration: none; color: #121212;
    }
    [data-theme="dark"] .bn-cmdk-item { color: #f4f4f2; }
    .bn-cmdk-item.active { background: rgba(18,18,18,.06); }
    [data-theme="dark"] .bn-cmdk-item.active { background: rgba(255,255,255,.08); }
    .bn-cmdk-item-ico { width: 34px; height: 34px; border-radius: 10px; background: rgba(18,18,18,.06); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    [data-theme="dark"] .bn-cmdk-item-ico { background: rgba(255,255,255,.08); }
    .bn-cmdk-item-ico svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 1.8; fill: none; }
    .bn-cmdk-item-text { flex: 1; min-width: 0; }
    .bn-cmdk-item-text strong { display: block; font-size: 14.5px; font-weight: 500; letter-spacing: -.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bn-cmdk-item-text span { display: block; font-size: 12.5px; color: #8a8a8f; margin-top: 1px; }
    .bn-cmdk-item-arrow { flex-shrink: 0; opacity: 0; transition: opacity .1s; }
    .bn-cmdk-item.active .bn-cmdk-item-arrow { opacity: 1; }
    .bn-cmdk-item-arrow svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; }
    .bn-cmdk-footer { padding: 10px 16px; border-top: 1px solid rgba(18,18,18,.08); font-size: 12px; color: #9a9a9a; flex-shrink: 0; }
    [data-theme="dark"] .bn-cmdk-footer { border-top-color: rgba(255,255,255,.08); color: #6f6f74; }
    .bn-cmdk-footer kbd { font-family: monospace; background: rgba(18,18,18,.06); border: 1px solid rgba(18,18,18,.1); border-radius: 5px; padding: 1px 6px; }
    [data-theme="dark"] .bn-cmdk-footer kbd { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.12); }

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
        display: flex; align-items: center; gap: 30px; margin-right: 4px;
      }
      .bn-links-desktop a {
        color: #121212; text-decoration: none; font-size: 15px; font-weight: 500;
        opacity: .72; transition: opacity .2s ease; white-space: nowrap;
      }
      .bn-links-desktop a:hover { opacity: 1; }
      .bn-links-desktop a.bn-active { opacity: 1; font-weight: 600; }
      .bn-cta { display: inline-block; }
    }

    /* ── Плашка "новая статья" сверху ── */
    .bn-promo {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      background: #121212; color: #f4f4f2;
      padding: 11px 44px 11px 16px; font-size: 13.5px; font-weight: 400;
      text-align: center; position: relative;
    }
    .bn-promo.bn-promo-hide { display: none; }
    .bn-promo-dot { width: 7px; height: 7px; border-radius: 50%; background: #1ede7b; flex-shrink: 0; animation: bnPulse 1.8s ease-in-out infinite; }
    @keyframes bnPulse { 0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(30,222,123,.5); } 50% { opacity: .7; box-shadow: 0 0 0 5px rgba(30,222,123,0); } }
    .bn-promo a { color: #f4f4f2; text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(244,244,242,.35); transition: border-color .15s; }
    .bn-promo a:hover { border-color: rgba(244,244,242,.9); }
    .bn-promo-label { color: rgba(244,244,242,.45); flex-shrink: 0; }
    .bn-promo-close {
      position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
      width: 22px; height: 22px; border: none; background: transparent; cursor: pointer;
      display: flex; align-items: center; justify-content: center; border-radius: 50%;
      opacity: .5; transition: opacity .15s, background .15s;
    }
    .bn-promo-close:hover { opacity: 1; background: rgba(255,255,255,.1); }
    .bn-promo-close svg { width: 13px; height: 13px; stroke: #f4f4f2; stroke-width: 2; fill: none; }
    @media (max-width: 720px) {
      .bn-promo { font-size: 12.5px; padding: 10px 40px 10px 14px; gap: 6px; }
      .bn-promo-label { display: none; }
    }

    /* ── Модалка горячих клавиш ── */
    .bn-shortcuts-overlay {
      position: fixed; inset: 0; z-index: 20000;
      background: rgba(15,16,18,.5); backdrop-filter: blur(4px);
      display: none; align-items: center; justify-content: center; padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Geologica', 'Inter', 'Segoe UI', Arial, sans-serif;
    }
    .bn-shortcuts-overlay.open { display: flex; }
    .bn-shortcuts-modal {
      width: 100%; max-width: 380px; background: #fff; border-radius: 22px; padding: 28px;
      box-shadow: 0 30px 80px rgba(0,0,0,.35); animation: bnCmdkIn .16s cubic-bezier(.16,1,.3,1);
    }
    [data-theme="dark"] .bn-shortcuts-modal { background: #1c1d20; }
    .bn-shortcuts-modal h3 { font-size: 17px; font-weight: 600; color: #121212; margin-bottom: 18px; letter-spacing: -.01em; }
    [data-theme="dark"] .bn-shortcuts-modal h3 { color: #f4f4f2; }
    .bn-shortcuts-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-top: 1px solid rgba(18,18,18,.08); }
    [data-theme="dark"] .bn-shortcuts-row { border-top-color: rgba(255,255,255,.08); }
    .bn-shortcuts-row:first-of-type { border-top: none; }
    .bn-shortcuts-row span { font-size: 14px; color: #6b6b68; }
    [data-theme="dark"] .bn-shortcuts-row span { color: #9a9a9f; }
    .bn-shortcuts-row kbd { font-family: monospace; font-size: 12px; background: rgba(18,18,18,.06); border: 1px solid rgba(18,18,18,.1); border-radius: 6px; padding: 3px 8px; color: #121212; }
    [data-theme="dark"] .bn-shortcuts-row kbd { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.12); color: #f4f4f2; }

    /* ── Пасхалка ── */
    .bn-egg-toast {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(20px);
      z-index: 30000; background: #121212; color: #f4f4f2; padding: 16px 22px;
      border-radius: 16px; font-size: 14px; display: flex; align-items: center; gap: 10px;
      opacity: 0; pointer-events: none; transition: opacity .3s, transform .3s;
      box-shadow: 0 20px 50px rgba(0,0,0,.3);
      font-family: -apple-system, BlinkMacSystemFont, 'Geologica', 'Inter', 'Segoe UI', Arial, sans-serif;
    }
    .bn-egg-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
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
<div class="bn-promo" id="bnPromo">
  <div class="bn-promo-dot"></div>
  <span class="bn-promo-label">Новая статья:</span>
  <a href="https://blog.antviz.ru/articles/veb-shrifty-kak-ne-teryat-skorost">Веб-шрифты: как не терять скорость →</a>
  <button class="bn-promo-close" id="bnPromoClose" aria-label="Закрыть">
    <svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </button>
</div>
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
        <button class="bn-cmdk-btn" id="bnCmdkBtn" aria-label="Быстрый поиск по блогу">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.8-4.8"/></svg>
          <span class="bn-cmdk-kbd">⌘K</span>
        </button>
        <button class="bn-theme-btn" id="bnThemeBtn" aria-label="Переключить тему">
          <svg class="bn-ico-sun" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg class="bn-ico-moon" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>
        </button>
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
</div>

<div class="bn-cmdk-overlay" id="bnCmdkOverlay">
  <div class="bn-cmdk-modal">
    <div class="bn-cmdk-input-row">
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.8-4.8"/></svg>
      <input type="text" class="bn-cmdk-input" id="bnCmdkInput" placeholder="Найти статью или раздел…" autocomplete="off">
      <span class="bn-cmdk-esc">Esc</span>
    </div>
    <div class="bn-cmdk-list" id="bnCmdkList"></div>
    <div class="bn-cmdk-footer">Все горячие клавиши — <kbd>?</kbd></div>
  </div>
</div>

<div class="bn-shortcuts-overlay" id="bnShortcutsOverlay">
  <div class="bn-shortcuts-modal">
    <h3>Горячие клавиши</h3>
    <div class="bn-shortcuts-row"><span>Быстрый поиск по блогу</span><kbd>⌘K</kbd></div>
    <div class="bn-shortcuts-row"><span>Поиск на странице статей/глоссария</span><kbd>/</kbd></div>
    <div class="bn-shortcuts-row"><span>Закрыть окно</span><kbd>Esc</kbd></div>
    <div class="bn-shortcuts-row"><span>Эта подсказка</span><kbd>?</kbd></div>
  </div>
</div>

<div class="bn-egg-toast" id="bnEggToast">🥚 Нашёл пасхалку! Уважение.</div>`;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const bodyPad = document.createElement('style');
  bodyPad.textContent = 'body { padding-top: 24px; }';
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

  const themeBtn = document.getElementById('bnThemeBtn');
  themeBtn?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('antviz-theme', 'light'); } catch (e) {}
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('antviz-theme', 'dark'); } catch (e) {}
    }
  });

  // ── Command palette (⌘K / Ctrl+K) ──
  const ICO_HOME  = '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21V12h6v9"/>';
  const ICO_DOC   = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>';
  const ICO_NEWS  = '<path d="M4 5.5A2.5 2.5 0 016.5 3H18a1 1 0 011 1v15a1 1 0 01-1 1H6.5A2.5 2.5 0 014 17.5v-12z"/><path d="M8 8h8M8 11.5h8M8 15h5"/>';
  const ICO_SPARK = '<path d="M12 3.2l1.7 4.6 4.6 1.7-4.6 1.7L12 15.8l-1.7-4.6-4.6-1.7 4.6-1.7L12 3.2z"/>';
  const ICO_INFO  = '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>';
  const ICO_BOOK  = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h7M9 11h7"/>';
  const ICO_GLOBE = '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.8 2.8 2.8 14.2 0 17M12 3.5c-2.8 2.8-2.8 14.2 0 17"/>';

  const PAGES = [
    { title: 'Главная блога', sub: 'blog.antviz.ru', href: 'https://blog.antviz.ru', icon: ICO_HOME },
    { title: 'Все статьи', sub: 'Каталог с поиском', href: 'https://blog.antviz.ru/articles', icon: ICO_DOC },
    { title: 'Доменное имя — полное руководство', sub: 'Домены', href: 'https://blog.antviz.ru/domain/vse-o-domene-instruktsiya', icon: ICO_DOC },
    { title: 'SEO для статических сайтов', sub: 'SEO', href: 'https://blog.antviz.ru/articles/seo-dlya-staticheskih-saitov', icon: ICO_DOC },
    { title: 'Скорость загрузки сайта: максимум', sub: 'Производительность', href: 'https://blog.antviz.ru/articles/skorost-zagruzki-saita', icon: ICO_DOC },
    { title: 'GitHub Pages vs VPS', sub: 'Хостинг', href: 'https://blog.antviz.ru/articles/hosting-github-pages-vs-vps', icon: ICO_DOC },
    { title: 'Вёрстка без конструкторов', sub: 'Вёрстка', href: 'https://blog.antviz.ru/articles/verstka-bez-konstruktorov', icon: ICO_DOC },
    { title: 'HTTPS и сертификаты просто', sub: 'Безопасность', href: 'https://blog.antviz.ru/articles/https-i-sertifikaty-prosto', icon: ICO_DOC },
    { title: 'Формы без бэкенда', sub: 'Функциональность', href: 'https://blog.antviz.ru/articles/formy-bez-backenda', icon: ICO_DOC },
    { title: 'Аналитика без Google Analytics', sub: 'Аналитика', href: 'https://blog.antviz.ru/articles/analitika-bez-google-analytics', icon: ICO_DOC },
    { title: 'Резервные копии сайта', sub: 'Надёжность', href: 'https://blog.antviz.ru/articles/rezervnye-kopii-saita', icon: ICO_DOC },
    { title: 'Telegram-боты для бизнеса', sub: 'Автоматизация', href: 'https://blog.antviz.ru/articles/telegram-boty-dlya-biznesa', icon: ICO_DOC },
    { title: 'Мультиязычный сайт без CMS', sub: 'Локализация', href: 'https://blog.antviz.ru/articles/multiyazychnyj-sajt-bez-cms', icon: ICO_DOC },
    { title: 'PWA: сайт как приложение', sub: 'Технологии', href: 'https://blog.antviz.ru/articles/pwa-sajt-kak-prilozhenie', icon: ICO_DOC },
    { title: 'Аналитика воронки без трекеров', sub: 'Аналитика', href: 'https://blog.antviz.ru/articles/analitika-voronki-bez-trekerov', icon: ICO_DOC },
    { title: 'Миграция сайта без потери SEO', sub: 'SEO', href: 'https://blog.antviz.ru/articles/migraciya-sajta-bez-poteri-seo', icon: ICO_DOC },
    { title: 'Инструменты', sub: 'Генератор мета-тегов и robots.txt', href: 'https://blog.antviz.ru/tools', icon: ICO_SPARK },
    { title: 'API-first: сайт и приложение', sub: 'Архитектура', href: 'https://blog.antviz.ru/articles/api-first-podhod', icon: ICO_DOC },
    { title: 'Тёмная тема без мигания', sub: 'Дизайн', href: 'https://blog.antviz.ru/articles/temnaya-tema-bez-migania', icon: ICO_DOC },
    { title: 'A/B-тесты на статическом сайте', sub: 'Тестирование', href: 'https://blog.antviz.ru/articles/ab-testy-na-staticheskom-sajte', icon: ICO_DOC },
    { title: 'Веб-шрифты: как не терять скорость', sub: 'Производительность', href: 'https://blog.antviz.ru/articles/veb-shrifty-kak-ne-teryat-skorost', icon: ICO_DOC },
    { title: 'Новости', sub: 'Что происходит с сервисом', href: 'https://blog.antviz.ru/news', icon: ICO_NEWS },
    { title: 'Что нового', sub: 'История обновлений Antviz', href: 'https://blog.antviz.ru/updates', icon: ICO_SPARK },
    { title: 'Глоссарий терминов', sub: 'DNS, CDN, SSL и другие', href: 'https://blog.antviz.ru/glossary', icon: ICO_BOOK },
    { title: 'О блоге', sub: 'Кто и зачем это пишет', href: 'https://blog.antviz.ru/about', icon: ICO_INFO },
    { title: 'Antviz.ru', sub: 'Основной сайт сервиса', href: 'https://antviz.ru', icon: ICO_GLOBE },
    { title: 'Заказать сайт', sub: 'antviz.ru/order', href: 'https://antviz.ru/order', icon: ICO_GLOBE },
  ];

  const cmdkOverlay = document.getElementById('bnCmdkOverlay');
  const cmdkBtn     = document.getElementById('bnCmdkBtn');
  const cmdkInput   = document.getElementById('bnCmdkInput');
  const cmdkList    = document.getElementById('bnCmdkList');
  let cmdkActive = 0;
  let cmdkResults = [];

  function cmdkRender(query) {
    const q = query.trim().toLowerCase();
    cmdkResults = !q ? PAGES : PAGES.filter(p =>
      p.title.toLowerCase().includes(q) || p.sub.toLowerCase().includes(q)
    );
    cmdkActive = 0;
    if (!cmdkResults.length) {
      cmdkList.innerHTML = '<div class="bn-cmdk-empty">Ничего не нашлось</div>';
      return;
    }
    cmdkList.innerHTML = cmdkResults.map((p, i) => `
      <a href="${p.href}" class="bn-cmdk-item${i === 0 ? ' active' : ''}" data-i="${i}">
        <div class="bn-cmdk-item-ico"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">${p.icon}</svg></div>
        <div class="bn-cmdk-item-text"><strong>${p.title}</strong><span>${p.sub}</span></div>
        <div class="bn-cmdk-item-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></div>
      </a>`).join('');
  }

  function cmdkSetActive(i) {
    const items = cmdkList.querySelectorAll('.bn-cmdk-item');
    items.forEach(el => el.classList.remove('active'));
    if (items[i]) { items[i].classList.add('active'); items[i].scrollIntoView({ block: 'nearest' }); }
    cmdkActive = i;
  }

  function cmdkOpen() {
    cmdkOverlay.classList.add('open');
    cmdkInput.value = '';
    cmdkRender('');
    setTimeout(() => cmdkInput.focus(), 10);
    document.body.style.overflow = 'hidden';
  }
  function cmdkClose() {
    cmdkOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cmdkBtn?.addEventListener('click', cmdkOpen);
  cmdkOverlay?.addEventListener('click', (e) => { if (e.target === cmdkOverlay) cmdkClose(); });
  cmdkInput?.addEventListener('input', () => cmdkRender(cmdkInput.value));

  cmdkInput?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); cmdkSetActive(Math.min(cmdkActive + 1, cmdkResults.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); cmdkSetActive(Math.max(cmdkActive - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); const r = cmdkResults[cmdkActive]; if (r) window.location.href = r.href; }
    else if (e.key === 'Escape') { cmdkClose(); }
  });

  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const mod = isMac ? e.metaKey : e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      cmdkOverlay.classList.contains('open') ? cmdkClose() : cmdkOpen();
    } else if (e.key === 'Escape' && cmdkOverlay.classList.contains('open')) {
      cmdkClose();
    }
  });

  // ── Плашка "новая статья" ──
  const PROMO_ID = 'veb-shrifty-kak-ne-teryat-skorost'; // slug последней статьи — обновляйте при публикации новой
  const promo = document.getElementById('bnPromo');
  const promoClose = document.getElementById('bnPromoClose');
  if (promo) {
    let dismissed = false;
    try { dismissed = localStorage.getItem('antviz-promo-dismissed') === PROMO_ID; } catch (e) {}
    // не показываем плашку на самой этой статье — незачем рекламировать то, что уже читают
    const onThatArticle = window.location.pathname.indexOf(PROMO_ID) !== -1;
    if (dismissed || onThatArticle) promo.classList.add('bn-promo-hide');
  }
  promoClose?.addEventListener('click', () => {
    promo.classList.add('bn-promo-hide');
    try { localStorage.setItem('antviz-promo-dismissed', PROMO_ID); } catch (e) {}
  });

  // ── Модалка горячих клавиш (?) ──
  const shortcutsOverlay = document.getElementById('bnShortcutsOverlay');
  function shortcutsToggle() { shortcutsOverlay?.classList.toggle('open'); }
  shortcutsOverlay?.addEventListener('click', (e) => { if (e.target === shortcutsOverlay) shortcutsOverlay.classList.remove('open'); });

  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    const typing = tag === 'INPUT' || tag === 'TEXTAREA';
    if (e.key === '?' && !typing) {
      e.preventDefault();
      shortcutsToggle();
    } else if (e.key === 'Escape' && shortcutsOverlay?.classList.contains('open')) {
      shortcutsOverlay.classList.remove('open');
    }
  });

  // ── Пасхалка: код Konami ──
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiPos = 0;
  const eggToast = document.getElementById('bnEggToast');
  document.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === KONAMI[konamiPos]) {
      konamiPos++;
      if (konamiPos === KONAMI.length) {
        konamiPos = 0;
        eggToast?.classList.add('show');
        document.documentElement.style.transition = 'filter .6s ease';
        document.documentElement.style.filter = 'hue-rotate(320deg)';
        setTimeout(() => { document.documentElement.style.filter = ''; }, 2200);
        setTimeout(() => eggToast?.classList.remove('show'), 3200);
      }
    } else {
      konamiPos = (key === KONAMI[0]) ? 1 : 0;
    }
  });

})();
