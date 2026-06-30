// blog-footer.js — подвал для blog.antviz.ru

(function() {
  const styles = `
    .antviz-footer {
      width: 100%;
      padding: 5.5rem 5vw 2.25rem;
      background: #000000;
      margin-top: 80px;
      border-radius: 48px 48px 0 0;
      font-family: 'Geologica','Inter','Arial',sans-serif;
    }
    @media (max-width: 760px) {
      .antviz-footer { border-radius: 28px 28px 0 0; margin-top: 48px; padding: 2.75rem 24px 1.75rem; }
    }
    .antviz-footer * { box-sizing: border-box; }
    .antviz-footer .inner { max-width: 1280px; margin: 0 auto; }

    .antviz-footer .top-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 48px;
      padding-bottom: 64px;
      border-bottom: 1px solid rgba(255,255,255,.07);
    }
    .antviz-footer .brand-col { display: flex; flex-direction: column; }
    .antviz-footer .logo {
      display: inline-flex; align-items: center; gap: 11px;
      font-family: 'Geologica','Inter','Arial',sans-serif;
      font-weight: 500; font-size: 19px; letter-spacing: -.02em;
      color: #f0f0f5; text-decoration: none; margin-bottom: 28px;
    }
    .antviz-footer .logo img { width: 34px; height: 34px; border-radius: 9px; object-fit: cover; }
    .antviz-footer .logo-blog { font-size: 15px; color: rgba(255,255,255,.25); font-weight: 300; margin-left: 2px; }
    .antviz-footer .tagline {
      font-size: 16px; color: rgba(255,255,255,.3); font-weight: 300;
      line-height: 1.6; max-width: 320px; margin-bottom: 28px;
    }

    .antviz-footer .socials {
      display: flex; gap: 10px; align-self: start; justify-content: flex-end;
    }
    .antviz-footer .soc {
      width: 48px; height: 48px; border-radius: 14px;
      background: rgba(255,255,255,.05);
      display: flex; align-items: center; justify-content: center;
      color: #f0f0f5; text-decoration: none; transition: background .2s;
    }
    .antviz-footer .soc:hover { background: rgba(255,255,255,.1); }
    .antviz-footer .soc svg { width: 21px; height: 21px; }

    .antviz-footer .cf-block {
      display: flex; flex-direction: column; align-items: flex-start;
      gap: 8px; margin-top: 36px;
    }
    .antviz-footer .cf-block a { display: block; text-decoration: none; }
    .antviz-footer .cf-block a:hover { opacity: .8; }
    .antviz-footer .cf-block img { display: block; height: 32px; width: auto; }
    .antviz-footer .cf-label { font-size: 16px; color: rgba(255,255,255,.25); font-weight: 400; letter-spacing: -.02em; margin-top: 2px; }

    .antviz-footer .groups {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 40px; padding-top: 64px; padding-bottom: 52px;
    }
    .antviz-footer .group-title {
      display: block; color: rgba(255,255,255,.28);
      font-size: 17px; letter-spacing: .05em; text-transform: uppercase;
      font-weight: 500; margin-bottom: 20px;
    }
    .antviz-footer .group-items { list-style: none; margin: 0; padding: 0; font-size: 17px; line-height: 1.6; }
    .antviz-footer .group-items li:not(:last-child) { margin-bottom: 13px; }
    .antviz-footer .group-items a { color: #d8d8de; text-decoration: none; transition: color .18s; }
    .antviz-footer .group-items a:hover { color: #f0f0f5; }
    .antviz-footer .group-items a.cta { color: #1ede7b; font-weight: 500; }
    .antviz-footer .group-items a.cta:hover { color: #1ac16b; }

    .antviz-footer .bottom {
      padding-top: 44px; border-top: 1px solid rgba(255,255,255,.07);
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 16px;
    }
    .antviz-footer .copy { color: rgba(255,255,255,.22); font-size: 15px; }
    .antviz-footer .legal-links { display: flex; flex-wrap: wrap; gap: 24px; }
    .antviz-footer .legal-links a {
      color: rgba(255,255,255,.22); font-size: 15px;
      text-decoration: none; transition: color .18s;
    }
    .antviz-footer .legal-links a:hover { color: rgba(255,255,255,.55); }

    .antviz-footer .meta-note {
      grid-column: 1 / -1; color: rgba(255,255,255,.12);
      font-size: 13px; line-height: 1.6; margin-top: 44px;
    }

    @media (min-width: 1440px) {
      .antviz-footer .inner { max-width: 1440px; }
      .antviz-footer .logo { font-size: 21px; }
      .antviz-footer .tagline { font-size: 17px; max-width: 360px; }
      .antviz-footer .group-title { font-size: 15px; }
      .antviz-footer .group-items { font-size: 18px; }
    }

    @media (max-width: 1023px) {
      .antviz-footer .top-grid { grid-template-columns: 1fr; gap: 32px; padding-bottom: 36px; }
      .antviz-footer .groups { grid-template-columns: 1fr 1fr; gap: 32px; padding-top: 44px; }
      .antviz-footer .bottom { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 600px) {
      .antviz-footer .groups { grid-template-columns: 1fr; gap: 26px; }
    }
  `;

  const script   = document.currentScript;
  const depth    = (window.location.pathname.replace(/\/+$/, '').match(/\//g) || []).length - 1;
  const base     = depth > 0 ? '../' : '';

  const footerHTML = `
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
            <div class="cf-block">
              <a href="https://www.cloudflare.com/" target="_blank" rel="noopener" aria-label="Cloudflare">
                <img src="data:image/svg+xml,%3Csvg%20fill%3D%22%23f38020%22%20version%3D%221.1%22%20id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%201000%20337.6308594%22%20style%3D%22enable-background%3Anew%200%200%201000%20337.6308594%3B%22%20xml%3Aspace%3D%22preserve%22%3E%20%3Cstyle%20type%3D%22text/css%22%3E%20.st0%7Bfill%3A%23f38020%3B%7D%20.st1%7Bfill%3A%23f38020%3B%7D%20%3C/style%3E%20%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M847.8253174%2C214.3110504l2.4238892-8.523468c2.942688-10.089386%2C1.8461914-19.4830475-3.0587158-26.3251648%20c-4.5009155-6.3207703-12.0029297-10.0310364-21.1207886-10.4946594l-172.5438232-2.2033386%20c-1.1536255-0.0583496-2.1347046-0.5803223-2.711853-1.4505005c-0.5770874-0.8695221-0.7502441-2.029541-0.3456421-3.1311951%20c0.5764771-1.681366%2C2.2501831-3.0145111%2C3.9815063-3.072876l174.100769-2.2033234%20c20.659729-0.927887%2C42.9924927-17.8010406%2C50.8406982-38.3280334l9.9252319-26.0930252%20c0.2885742-0.695755%2C0.4039917-1.4492188%2C0.4039917-2.2033234c0-0.4059219-0.0576782-0.811821-0.1154175-1.2177277%20C878.4102783%2C38.0959702%2C833.1099243%2C0%2C779.0386353%2C0c-49.8583374%2C0-92.215332%2C32.3554497-107.392395%2C77.293663%20c-9.8104248-7.3640976-22.3327026-11.3071289-35.8361206-9.9739761%20c-23.9480591%2C2.3777466-43.1643066%2C21.7447281-45.5305176%2C45.808197%20c-0.6348267%2C6.2624207-0.1154175%2C12.2343674%2C1.3267212%2C17.9171143%20c-39.0671387%2C1.1600189-70.4019775%2C33.3410492-70.4019775%2C72.8290863c0%2C3.5948334%2C0.2885132%2C7.0736084%2C0.7501831%2C10.5530396%20c0.230835%2C1.6819763%2C1.6735229%2C2.8990784%2C3.3469849%2C2.8990784l318.4839478%2C0.0583344c0.0583496%2C0%2C0.0583496%2C0%2C0.1160278%2C0%20C845.6905518%2C217.3262024%2C847.3059082%2C216.1091003%2C847.8253174%2C214.3110504z%22/%3E%20%3Cpath%20class%3D%22st1%22%20d%3D%22M905.3035889%2C94.4085693c-1.6152954%2C0-3.1741943%2C0.0583496-4.7894897%2C0.116066%20c-0.2885742%2C0-0.5194092%2C0.0577087-0.7503052%2C0.1737747c-0.8079224%2C0.2898483-1.5004883%2C0.9856033-1.7307129%2C1.8557739%20l-6.8093872%2C23.5414963c-2.9439697%2C10.0893936-1.8468018%2C19.482399%2C3.0581055%2C26.3245163%20c4.5009155%2C6.3207855%2C12.0028687%2C10.0316772%2C21.1207886%2C10.4959412l36.7595215%2C2.2033234%20c1.0959473%2C0.057724%2C2.0199585%2C0.5796967%2C2.5963745%2C1.449234c0.6348877%2C0.870163%2C0.7503052%2C2.029541%2C0.4040527%2C3.1318512%20c-0.5771484%2C1.6807098-2.2507935%2C3.0144958-3.9815674%2C3.0728607l-38.2023315%2C2.2033386%20c-20.7167969%2C0.9855957-43.1072388%2C17.8010254-50.9554443%2C38.3280182l-2.7695923%2C7.2473755%20c-0.5194092%2C1.3344574%2C0.461731%2C2.7259674%2C1.7884521%2C2.7836761c0.0583496%2C0%2C0.0583496%2C0%2C0.1160889%2C0h131.5142212%20c1.5581665%2C0%2C2.942688-1.0439606%2C3.4049683-2.5508881c2.3078613-8.1765594%2C3.5198364-16.7577362%2C3.5198364-25.6871033%20C999.597168%2C136.8534241%2C957.3555908%2C94.4085693%2C905.3035889%2C94.4085693z%22/%3E%20%3C/g%3E%20%3Cg%3E%20%3Cpath%20d%3D%22M111.2229919%2C254.8036957h22.3851166v61.516922h39.1958008v19.6909485h-61.5809174V254.8036957z%22/%3E%20%3Cpath%20d%3D%22M196.0244751%2C295.6247253v-0.2388916c0-23.3300476%2C18.707077-42.2449951%2C43.6432495-42.2449951%20c24.9493713%2C0%2C43.412262%2C18.6767273%2C43.412262%2C42.0068054v0.2381897c0%2C23.3300781-18.70047%2C42.2450256-43.6432343%2C42.2450256%20S196.0244751%2C318.9548035%2C196.0244751%2C295.6247253z%20M260.2158203%2C295.6247253v-0.2388916%20c0-11.6947021-8.4264526-21.95755-20.779068-21.95755c-12.2338104%2C0-20.4293365%2C9.9645691-20.4293365%2C21.7193604v0.2381897%20c0%2C11.6947632%2C8.4330444%2C21.9575806%2C20.6603088%2C21.9575806%20C252.026947%2C317.3434143%2C260.2158203%2C307.3794861%2C260.2158203%2C295.6247253z%22/%3E%20%3Cpath%20d%3D%22M310.5104675%2C300.388916v-45.5852203h22.7388v45.1681976c0%2C11.6947327%2C5.8793945%2C17.3035583%2C14.9062805%2C17.3035583%20c9.0203552%2C0%2C14.906311-5.309906%2C14.906311-16.7063904v-45.7059937h22.7388306v45.0487671%20c0%2C26.2539368-14.8996582%2C37.7104492-37.8826599%2C37.7104492%20C324.9350281%2C337.5028381%2C310.5104675%2C325.8081055%2C310.5104675%2C300.388916z%22/%3E%20%3Cpath%20d%3D%22M420.1333008%2C254.8036957h31.171875c28.868927%2C0%2C45.6096497%2C16.7063751%2C45.6096497%2C40.1565399v0.2382202%20c0%2C23.4488525-16.9848633%2C40.8724976-46.0848083%2C40.8724976h-30.6967163V254.8036957z%20M451.6680298%2C316.0817566%20c13.4150391%2C0%2C22.2703552-7.3983765%2C22.2703552-20.5256653v-0.2382202c0-13.0071716-8.9080811-20.5256653-22.2703552-20.5256653%20h-9.1455688v41.2895508H451.6680298z%22/%3E%20%3Cpath%20d%3D%22M529.4459839%2C254.8036957h64.7324219v19.6902618H551.901062v13.8425903h38.2389526v18.6760559H551.901062v28.9989624%20h-22.4550781V254.8036957z%22/%3E%20%3Cpath%20d%3D%22M625.3635254%2C254.8036957h22.3825073v61.516922h39.1364136v19.6909485h-61.5189209V254.8036957z%22/%3E%20%3Cpath%20d%3D%22M745.4847412%2C254.2104645h21.6170654l34.4381714%2C81.8043976h-24.0518799l-5.8794556-14.4985046h-31.171875%20l-5.7605591%2C14.4985046H711.105896L745.4847412%2C254.2104645z%20M765.0826416%2C303.9732971l-9.0269165-23.091217l-9.1456909%2C23.091217%20H765.0826416z%22/%3E%20%3Cpath%20d%3D%22M830.3429565%2C254.8036957h38.2456055c12.3459473%2C0%2C20.9044189%2C3.2814789%2C26.3087158%2C8.8302765%20c4.7443237%2C4.6539917%2C7.1792603%2C10.9193726%2C7.1792603%2C18.914917v0.2388916c0%2C12.410675-6.592041%2C20.6444092-16.6218872%2C24.9407654%20l19.2943115%2C28.3424072h-25.8864136l-16.2787476-24.5831604h-9.8516846v24.5831604h-22.3891602V254.8036957z%20M867.5129395%2C293.7665405c7.6016846%2C0%2C12.0028687-3.6998291%2C12.0028687-9.6069336v-0.2382202%20c0-6.3847961-4.638855-9.6062317-12.1150513-9.6062317h-14.6686401v19.5107727h14.7808228V293.7665405z%22/%3E%20%3Cpath%20d%3D%22M934.3900146%2C254.8036957h65.0161133v19.1524811h-42.8118286v12.2919006h38.7734985v17.7219238h-38.7734985v12.8877258%20H1000v19.1538391h-65.6099854V254.8036957z%22/%3E%20%3Cpath%20d%3D%22M62.1728096%2C305.1716003c-3.1475258%2C7.100769-9.7388916%2C12.171814-18.5275993%2C12.171814%20c-12.2318497%2C0-20.6642284-10.2034607-20.6642284-21.9575806v-0.2381897c0-11.6947327%2C8.1941528-21.7193604%2C20.4273624-21.7193604%20c9.2037392%2C0%2C16.2701988%2C5.7282715%2C19.2395554%2C13.4849548h23.6336327%20c-3.8001251-19.3326416-20.6642227-33.7723999-42.636322-33.7723999C18.7057648%2C253.1408386%2C0%2C272.0557861%2C0%2C295.3858337v0.2388916%20c0%2C23.3300781%2C18.4675407%2C42.006134%2C43.4083443%2C42.006134c21.3181343%2C0%2C38.0047264-13.9026184%2C42.3987541-32.5186462H62.1728096%20V305.1716003z%22/%3E%20%3C/g%3E%20%3C/svg%3E" alt="Cloudflare">
              </a>
              <span class="cf-label">Под защитой</span>
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
