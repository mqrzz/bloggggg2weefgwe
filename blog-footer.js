// blog-footer.js — подвал для blog.antviz.ru

(function() {
  const styles = `
    .antviz-footer-wrap {
      padding: 0 20px;
      max-width: 1328px;
      margin: 0 auto;
    }
    @media (min-width: 1024px) { .antviz-footer-wrap { padding: 0 64px; } }
    @media (min-width: 1280px) { .antviz-footer-wrap { padding: 0 96px; } }

    .antviz-footer {
      padding: 4rem 5vw 2rem;
      background: #000000;
      margin-top: 80px;
      border-radius: 64px 64px 0 0;
      font-family: 'Geologica','Inter','Arial',sans-serif;
    }
    @media (max-width: 760px) {
      .antviz-footer { border-radius: 32px 32px 0 0; margin-top: 48px; padding: 2.75rem 28px 1.75rem; }
    }
    .antviz-footer * { box-sizing: border-box; }
    .antviz-footer .inner { max-width: 1200px; margin: 0 auto; }

    .antviz-footer .top-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 40px;
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .antviz-footer .brand-col { display: flex; flex-direction: column; }
    .antviz-footer .logo {
      display: inline-flex; align-items: center; gap: 9px;
      font-family: 'Geologica','Inter','Arial',sans-serif;
      font-weight: 500; font-size: 16px; letter-spacing: -.02em;
      color: #f0f0f5; text-decoration: none; margin-bottom: 24px;
    }
    .antviz-footer .logo img { width: 28px; height: 28px; border-radius: 7px; object-fit: cover; }
    .antviz-footer .logo-blog { font-size: 13px; color: rgba(255,255,255,.25); font-weight: 300; margin-left: 2px; }
    .antviz-footer .tagline {
      font-size: 15px; color: rgba(255,255,255,.25); font-weight: 300;
      line-height: 1.6; max-width: 280px; margin-bottom: 28px;
    }

    .antviz-footer .socials {
      display: flex; gap: 8px; align-self: start; justify-content: flex-end;
    }
    .antviz-footer .soc {
      width: 40px; height: 40px; border-radius: 12px;
      background: rgba(255,255,255,.04);
      display: flex; align-items: center; justify-content: center;
      color: #f0f0f5; text-decoration: none; transition: background .2s;
    }
    .antviz-footer .soc:hover { background: rgba(255,255,255,.08); }
    .antviz-footer .soc svg { width: 18px; height: 18px; }
    .antviz-footer .cloudflare-block { margin-top: 24px; }
    .antviz-footer .cloudflare-label {
      display: block; color: rgba(255,255,255,.2);
      font-size: 13px; font-weight: 300; margin-top: 6px;
    }

    .antviz-footer .groups {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 40px; padding-top: 60px; padding-bottom: 48px;
    }
    .antviz-footer .group-title {
      display: block; color: rgba(255,255,255,.2);
      font-size: 13px; letter-spacing: .05em; text-transform: uppercase;
      font-weight: 500; margin-bottom: 16px;
    }
    .antviz-footer .group-items { list-style: none; margin: 0; padding: 0; font-size: 15px; line-height: 1.6; }
    .antviz-footer .group-items li:not(:last-child) { margin-bottom: 10px; }
    .antviz-footer .group-items a { color: #cfcfd6; text-decoration: none; transition: color .18s; }
    .antviz-footer .group-items a:hover { color: #f0f0f5; }
    .antviz-footer .group-items a.cta { color: #1ede7b; font-weight: 500; }
    .antviz-footer .group-items a.cta:hover { color: #1ac16b; }

    .antviz-footer .bottom {
      padding-top: 40px; border-top: 1px solid rgba(255,255,255,.06);
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 16px;
    }
    .antviz-footer .copy { color: rgba(255,255,255,.18); font-size: 14px; }
    .antviz-footer .legal-links { display: flex; flex-wrap: wrap; gap: 20px; }
    .antviz-footer .legal-links a {
      color: rgba(255,255,255,.18); font-size: 14px;
      text-decoration: none; transition: color .18s;
    }
    .antviz-footer .legal-links a:hover { color: rgba(255,255,255,.5); }

    .antviz-footer .meta-note {
      grid-column: 1 / -1; color: rgba(255,255,255,.1);
      font-size: 13px; line-height: 1.6; margin-top: 40px;
    }

    @media (max-width: 1023px) {
      .antviz-footer .top-grid { grid-template-columns: 1fr; gap: 32px; padding-bottom: 32px; }
      .antviz-footer .groups { grid-template-columns: 1fr 1fr; gap: 32px; }
      .antviz-footer .bottom { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 600px) {
      .antviz-footer .groups { grid-template-columns: 1fr; gap: 24px; }
    }
  `;

  const script   = document.currentScript;
  const depth    = (window.location.pathname.replace(/\/+$/, '').match(/\//g) || []).length - 1;
  const base     = depth > 0 ? '../' : '';

  const footerHTML = `
    <div class="antviz-footer-wrap">
    <footer class="antviz-footer">
      <div class="inner">
        <div class="top-grid">
          <div class="brand-col">
            <a href="https://blog.antviz.ru" class="logo">
              <img src="https://blog.antviz.ru/img/favicon.png" alt="Antviz"/>
              Antviz <span class="logo-blog">/ Блог</span>
            </a>
            <p class="tagline">Полезные статьи о создании сайтов, доменах, хостинге и веб-разработке.</p>
          </div>

          <div class="socials">
            <a href="https://t.me/antviz_official" class="soc" target="_blank" rel="noopener" aria-label="Telegram">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/></svg>
            </a>
            <a href="https://instagram.com/antviz_official" class="soc" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>
            </a>
            <a href="https://tiktok.com/@antviz_official" class="soc" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg>
            </a>
            <a href="https://threads.com/@antviz_official" class="soc" target="_blank" rel="noopener" aria-label="Threads">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/></svg>
            </a>
          </div>
        </div>

        <div class="groups">
          <div>
            <span class="group-title">Разделы</span>
            <ul class="group-items">
              <li><a href="https://blog.antviz.ru/news">Новости</a></li>
              <li><a href="https://blog.antviz.ru/updates">Что нового</a></li>
              <li><a href="https://blog.antviz.ru/domain/vse-o-domene-instruktsiya">Статьи</a></li>
            </ul>
            <div class="cloudflare-block" style="margin-top:32px">
              <a href="https://www.cloudflare.com/" target="_blank" rel="noopener" aria-label="Cloudflare">
                <img src="https://logo-teka.com/wp-content/uploads/2026/04/cloudflare-vertical-logo.png" alt="Cloudflare" style="height:24px;width:auto;display:block;filter:brightness(0) invert(1);opacity:.3"/>
              </a>
              <span class="cloudflare-label">Под защитой</span>
            </div>
          </div>
          <div>
            <span class="group-title">Antviz</span>
            <ul class="group-items">
              <li><a href="https://antviz.ru" target="_blank">Главный сайт</a></li>
              <li><a href="https://antviz.ru/order" target="_blank" class="cta">Заказать сайт</a></li>
              <li><a href="https://antviz.ru/profile/support" target="_blank">Поддержка</a></li>
            </ul>
          </div>
          <div>
            <span class="group-title">Документы</span>
            <ul class="group-items">
              <li><a href="https://antviz.ru/privacy" target="_blank">Конфиденциальность</a></li>
              <li><a href="https://antviz.ru/terms" target="_blank">Соглашение</a></li>
            </ul>
          </div>
        </div>

        <div class="bottom">
          <span class="copy">© 2026 Antviz</span>
          <div class="legal-links">
            <a href="https://antviz.ru/privacy" target="_blank">Политика конфиденциальности</a>
            <a href="https://antviz.ru/terms" target="_blank">Пользовательское соглашение</a>
          </div>
        </div>

        <div class="meta-note">
          *Meta Platforms Inc. (включая Instagram) признана экстремистской организацией, её деятельность запрещена на территории РФ.
        </div>
      </div>
    </footer>
    </div>
  `;

  function initFooter() {
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    const wrap = document.createElement('div');
    wrap.innerHTML = footerHTML;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();
