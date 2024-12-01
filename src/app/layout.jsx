import Script from "next/script";
import "../assets/css/globalReset.css";
import styles from "../../src/assets/styles/navbar.module.css";
import "../assets/css/global.css";
import "../assets/styles/navbar.css";
import "../assets/styles/footer.css";

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
          <title>CV Generator</title>
          <link rel="icon" href="/img/cvmaker_favicon.png" type="image/png" sizes="32x32" />
        </head>
        <body>
          <header className="pf">
            <div className="container">
              <nav className={styles.nav}>
                <div className="logo">
                  <img src="/img/cvmaker.webp" alt="" />
                </div>
                <div className={styles.navbar_right}>
                  <ul className="flex aic gap_2">
                    <li>
                      <a href="/about">Haqqımızda</a>
                    </li>
                    <li>
                      <a href="/contact">Generator</a>
                    </li>
                    <li>
                      <a href="/contact">Bələdçi</a>
                    </li>
                    <li>
                      <a href="/about">Bloq</a>
                    </li>
                    <li>
                      <a href="/contact">Əlaqə</a>
                    </li>
                  </ul>
                  <div className="nav_login_reg flex aic gap_2">
                    <a href="" className="nav_sign_up flex aic gap_1">
                      <img src="/img/add-user.png" alt="" /> Qeydiyyatdan keç
                    </a>
                    <a href="" className="nav_sign_in flex aic gap_1">
                      <img src="/img/login.png" alt="" />
                      Daxil ol
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer>
            <div className="container">
              <div className="footer py_5 grid col_4 gap_3">
                <div className="footer_logo_side flex d_col gap_2">
                  <img src="/img/cvmaker_white.webp" alt="" className="logo" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minima perspiciatis dolores deleniti iusto minus nihil
                    maiores tempore debitis. Voluptate, accusamus.
                  </p>
                  <div className="footer_sosial flex aic gap_1">
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <ul>
                  <li>CV'lər</li>
                  <li>
                    <a href="">CV nümunələri</a>
                  </li>
                  <li>
                    <a href="">CV generator</a>
                  </li>
                  <li>
                    <a href="">Cover letter nümunələri</a>
                  </li>
                  <li>
                    <a href="">CV Nümunələri</a>
                  </li>
                </ul>
                <ul>
                  <li>Əlavə Resurslar</li>
                  <li>
                    <a href="">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="">CV tövsiyələri</a>
                  </li>
                  <li>
                    <a href="">Bizimlə əlaqə</a>
                  </li>
                  <li>
                    <a href="">Bizimlə əlaqə</a>
                  </li>
                </ul>
                <ul>
                  <li>Qaydalar</li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                  <li>
                    <a href="">Cv generator qaydaları</a>
                  </li>
                </ul>
              </div>
              <div className="footer_bottom flex aic jcsb">
                <div className="footer_bottom_contact flex aic gap_2">
                  <a href="" className="flex aic gap_05"><i className="fa-solid fa-phone"></i>+994 55 310 70 04</a>
                  <a href="" className="flex aic gap_05"><i className="fa-solid fa-envelope"></i>info@cvgenerator.az</a>
                </div>
                <p id="el">© 2024 CV Generator</p>
              </div>
            </div>
          </footer>

          <Script
            src="https://kit.fontawesome.com/27e97c8350.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />

          <Script>
            {`
               var typed3 = new Typed('#main_heading_typing', {
              strings: ['Hazirlayi', 'Bizimlə hazırlayın &#128209;'],
              typeSpeed: 100,
              backDelay: 0,
              backSpeed: 20,
              smartBackspace: false, 
              loop: false
            });
            `}
          </Script>
        </body>
      </html>
    </>
  );
}
