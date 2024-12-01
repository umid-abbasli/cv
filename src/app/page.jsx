import "../assets/styles/main.css";
// import MySwiper from "../components/myswiper"; // Correct path, case-sensitive
import LinkSwiper from "../components/linkSwiper";
import GuideSwiper from "../components/guideSwiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div>
      <section className="main_slider pr">
        <div className="main_sli_all_content pr">
          <div className="container">
            <div className="main_sli_content grid col_2 gap_2">
              <div className="main_sli_left flex jcc">
                <div className="main_sli_top_text flex aic">
                  <div className="main_text_svg flex aic jcc">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5001 24C19.3002 24.0002 19.1049 23.9404 18.9393 23.8285C18.7737 23.7165 18.6455 23.5576 18.5711 23.372L17.7271 21.259L15.6111 20.368C15.4296 20.2879 15.2758 20.1559 15.1691 19.9886C15.0623 19.8213 15.0074 19.6263 15.0111 19.4279C15.0149 19.2295 15.0771 19.0366 15.1901 18.8735C15.3031 18.7104 15.4617 18.5843 15.6461 18.511L17.7341 17.72L18.5711 15.628C18.6481 15.4452 18.7773 15.2892 18.9425 15.1794C19.1078 15.0697 19.3018 15.0112 19.5001 15.0112C19.6985 15.0112 19.8924 15.0697 20.0577 15.1794C20.2229 15.2892 20.3521 15.4452 20.4291 15.628L21.2701 17.728L23.3701 18.569C23.5533 18.6456 23.7097 18.7747 23.8198 18.94C23.9298 19.1053 23.9885 19.2994 23.9885 19.498C23.9885 19.6966 23.9298 19.8907 23.8198 20.056C23.7097 20.2213 23.5533 20.3504 23.3701 20.427L21.2701 21.268L20.4291 23.368C20.3554 23.5543 20.2274 23.7141 20.0618 23.8268C19.8961 23.9395 19.7005 23.9999 19.5001 24ZM10.0001 21C9.56808 21.0052 9.14599 20.8704 8.797 20.6156C8.44801 20.3609 8.19089 20.0001 8.06411 19.587L6.45011 14.54L1.38711 12.846C0.978473 12.7094 0.623828 12.4465 0.374398 12.0952C0.124968 11.7439 -0.00633631 11.3223 -0.00054901 10.8915C0.0052383 10.4607 0.147817 10.0429 0.406595 9.69839C0.665372 9.3539 1.02695 9.10058 1.43911 8.97502L6.46211 7.44102L8.15411 2.38702C8.27991 1.97189 8.54014 1.61035 8.89386 1.35927C9.24758 1.1082 9.67472 0.981818 10.1081 1.00002C10.5402 1.0006 10.9605 1.14111 11.3061 1.40052C11.6516 1.65992 11.9039 2.02426 12.0251 2.43902L13.5571 7.45402L18.5871 9.06402C18.9928 9.2001 19.3455 9.4602 19.5954 9.80759C19.8453 10.155 19.9798 10.5721 19.9798 11C19.9798 11.4279 19.8453 11.8451 19.5954 12.1924C19.3455 12.5398 18.9928 12.7999 18.5871 12.936L13.5481 14.548L11.9361 19.587C11.8093 20.0001 11.5522 20.3609 11.2032 20.6156C10.8542 20.8704 10.4321 21.0052 10.0001 21ZM20.5001 7.00002C20.2772 7.00001 20.0606 6.92552 19.8849 6.78836C19.7092 6.65121 19.5843 6.45926 19.5301 6.24302L19.1731 4.81302L17.7401 4.42802C17.5247 4.37015 17.3349 4.24194 17.2007 4.06378C17.0666 3.88562 16.9958 3.66773 16.9997 3.44474C17.0036 3.22176 17.082 3.00648 17.2223 2.83313C17.3626 2.65978 17.5568 2.5383 17.7741 2.48802L19.1741 2.16302L19.5301 0.757017C19.5843 0.54079 19.7092 0.348869 19.8849 0.211736C20.0607 0.0746033 20.2772 0.00012207 20.5001 0.00012207C20.723 0.00012207 20.9396 0.0746033 21.1153 0.211736C21.291 0.348869 21.4159 0.54079 21.4701 0.757017L21.8241 2.17502L23.2421 2.53002C23.4583 2.58421 23.6503 2.70909 23.7874 2.88484C23.9245 3.06058 23.999 3.2771 23.999 3.50002C23.999 3.72293 23.9245 3.93946 23.7874 4.1152C23.6503 4.29094 23.4583 4.41583 23.2421 4.47002L21.8241 4.82502L21.4701 6.24302C21.4159 6.45926 21.2911 6.65121 21.1153 6.78836C20.9396 6.92552 20.723 7.00001 20.5001 7.00002Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                  <span>Öz peşəkar CV'ni yarat</span>
                </div>
                <div className="main_sli_heading py_1">
                  <h1>
                    Dəqiqələr ərzində peşəkar CV-nizi <br />
                    <span id="main_heading_typing"></span>
                  </h1>
                  <p>
                    Dəqiqələr ərzində istədiyiniz CV'nizi hazırlayın, suni
                    intellek bələdçiliyi ilə hədəfə ən qısa yoldan çatın!
                  </p>
                  <div className="main_sli_links flex aic gap_2">
                    <a href="" className="building_cv_link">
                      Cv-ni hazırla
                    </a>
                    <a href="" className="edit_cv_link">
                      CV-ni yenilə
                    </a>
                  </div>
                </div>
              </div>
              <div className="main_sli_img_content pr">
                <div className="main_sli_img_content_bg pa"></div>

                <div className="main_sli_img_all pa">
                  <div className="main_sli_img_pr pr">
                    <img
                      className="main_sli_img "
                      src="/img/hero-resume-32-interface.webp"
                      alt=""
                    />
                    <span className="svg_icon_main_sli pa icons_1_main_sli">
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5.868 15.583a8.938 8.938 0 0 1-2.793-7.761 9 9 0 1 1 14.857 7.941A5.74 5.74 0 0 0 16.338 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 1 0-2 0 1 1 0 1 1-2 0 1 1 0 1 0-2 0 3 3 0 0 0 2 2.816V18H7.563a6.838 6.838 0 0 0-1.695-2.417ZM8 20v.31A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31V20H8Z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span className="svg_icon_main_sli pa icons_2_main_sli">
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M19 4h-1.1A5.01 5.01 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v3h24V9a5.006 5.006 0 0 0-5-5ZM8.184 4A3 3 0 0 1 11 2h2a3 3 0 0 1 2.816 2H8.184ZM13 15a1 1 0 0 1-2 0v-1H0v5a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-5H13v1Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/resume_bg.svg" className="main_sli_bg pa" />
      </section>
      <section>
        <div className="container">
          <div className="advantages_section py_5">
            <div className="grid col_3 gap_3">
              <div className="advant_card flex gap_1">
                <div className="advnat_img pr">
                  <img
                    src="/svg_s/blob1.svg"
                    className="advant_img_bg"
                    alt=""
                  />
                  <img
                    src="/img/artificial-intelligence.png"
                    className="advant_img_svg pa p_center"
                    alt=""
                  />
                </div>
                <h4>Süni intellekt ilə inteqrasiya</h4>
                <p>
                  CV-lərinizi hazırlamaqda və fəaliyyət sahəniz üzrə lazım olan
                  açar sözləri generatora inteqrasiya edilmiş süni intellekt
                  dəstəyi ilə əlavə edə bilərsiniz.
                </p>
              </div>
              <div className="advant_card flex gap_1">
                <div className="advnat_img pr">
                  <img
                    src="/svg_s/blob1.svg"
                    className="advant_img_bg"
                    alt=""
                  />
                  <img
                    src="/img/web-design.png"
                    className="advant_img_svg pa p_center"
                    alt=""
                  />
                </div>
                <h4>Zövqə görə format seçimi</h4>
                <p>
                  Onlarla format arasından müraciət edəcəyiniz vakansiyaya,
                  fəaliyyət sahənizə və zövqünüzə uyğun olan formatı seçə
                  bilərsiniz.
                </p>
              </div>
              <div className="advant_card flex gap_1">
                <div className="advnat_img pr">
                  <img
                    src="/svg_s/blob2.svg"
                    className="advant_img_bg"
                    alt=""
                  />
                  <img
                    src="/img/badge.png"
                    className="advant_img_svg pa p_center"
                    alt=""
                  />
                </div>
                <h4>Peşəkar toxunuşu</h4>
                <p>
                  Mövcud formatlar və düzülüşlər karyera məsləhətçiləri
                  tərəfindən hazırlanmış, işəgötürənlərin rəyləri alınmaqla
                  formalaşdırılmışdır.
                </p>
              </div>
              <div className="advant_card flex gap_1">
                <div className="advnat_img pr">
                  <img
                    src="/svg_s/blob2.svg"
                    className="advant_img_bg"
                    alt=""
                  />
                  <img
                    src="/img/interface.png"
                    className="advant_img_svg pa p_center"
                    alt=""
                  />
                </div>
                <h4>Funksional interfeys</h4>
                <p>
                  Generatorun interfeysi tamamən istifadəçi yönümlü və
                  funksionaldır bu da prosesi həm sürətli həmçinin də maraqlı
                  edir.
                </p>
              </div>
              <div className="advant_card flex gap_1">
                <div className="advnat_img pr">
                  <img
                    src="/svg_s/blob4.svg"
                    className="advant_img_bg"
                    alt=""
                  />
                  <img
                    src="/img/shield.png"
                    className="advant_img_svg pa p_center"
                    alt=""
                  />
                </div>
                <h4>Etibarlı, rahat və sürətli</h4>
                <p>
                  Üçüncü tərəfə ehtiyac olmaması prosesi sürətləndirir və
                  etibarlı ödəniş tərəfdaşları ilə rahat şəkildə cv-lərinizi
                  hazırlaya bilərsiniz.
                </p>
              </div>
              <div className="advant_card flex gap_1">
                <div className="advnat_img pr">
                  <img
                    src="/svg_s/blob3.svg"
                    className="advant_img_bg"
                    alt=""
                  />
                  <img
                    src="/img/download.png"
                    className="advant_img_svg pa p_center"
                    alt=""
                  />
                </div>
                <h4>Dərhal yükləmə imkanı</h4>
                <p>
                  Hazırladığınız formatı istər PDF istərsə də Word olaraq
                  yükləyə bilərsiniz. Tövsiyə olunan format PDF formatıdır, bu
                  CV-nizin daha oxunaqlı olmasını təmin edir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cv_templates_all py_5">
            <div className="cv_templates_head flex aic gap_2 d_col">
              <h2>Choose your favorite resume template</h2>
              <p>
                Regardless of your background, there’s a template in the Genius
                resume maker that’s perfect for highlighting your experience &
                skill set.
              </p>
              <a href="">View More Resume Templates</a>
            </div>
          </div>
        </div>
        <div className="cv_templates_swiper">
          <LinkSwiper />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="inspirations ">
            <div className="ins_row grid aic gap_3">
              <div className="ins_left flex d_col gap_2">
                <h3>Look at resume examples for inspiration</h3>
                <p>
                  We have over 400 professional resume examples on our website.
                  Each sample was written and approved by our{" "}
                  <a href="">team of career experts.</a>
                </p>
                <a href="" className="all_ins flex aic gap_1">
                  View Resume Examples
                  <div className="all_ins_icon">
                    <i className="all_ins_icon_1 pa p_center fa-solid fa-arrow-right-long"></i>
                    <i className="all_ins_icon_2 p_center pa fa-solid fa-arrow-right-long"></i>
                  </div>
                </a>
              </div>
              <ul className="ins_right flex gap_2 jcc">
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Acting</span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Administrative Assistant </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Architecture </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>College Student </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Customer Service </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>IT</span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Retail Sales Associate </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Architecture </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>College Student </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Retail Sales Associate </span>
                  </a>
                </li>
                <li>
                  <a href="" className="ins_right_link flex aic gap_1">
                    <div className="ins_right_svg flex aic jcc ins_right_svg_green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="icon-marketing-solid"
                        fill="#fff"
                        width={18}
                        hanging={18}
                      >
                        <path d="M18.217 3.83c0-2.137-2.084-3.5-3.804-2.49L6.579 5.947a.803.803 0 01-.408.112H3.583C2.156 6.058 1 7.323 1 8.884v3.332c0 1.56 1.156 2.826 2.583 2.826h2.586c.143 0 .283.039.41.113l7.827 4.632c1.721 1.018 3.811-.346 3.811-2.486V3.83zM2.913 16.859c.214.062.438.096.67.096h2.586c.143 0 .283.039.41.113l1.117.661v2.88a2.391 2.391 0 11-4.783 0v-3.75zM20.848 12.957a.717.717 0 01-.718-.718V8.892c0-.397.322-.718.718-.718 1.188 0 2.152.964 2.152 2.152v.479a2.152 2.152 0 01-2.152 2.152z"></path>
                      </svg>
                    </div>
                    <span>Retail Sales Associate </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="guides_all">
            <div className="guides_head flex d_col gap_1 aic">
              <span>Expert Guides & Advice</span>
              <h4>Read guides to improve your resume</h4>
              <p>
                Whether you’re new to job hunting, changing fields, or looking
                to land a higher-paying gig, we’ll teach you how to put together
                a resume that earns more interviews.
              </p>
              <a href="">Visit Our Blog</a>
            </div>
          </div>
          <div className="guide_swiper py_3">
            <GuideSwiper />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="build_an_app">
            <div className="build_an_app_head guides_head flex d_col gap_1 aic">
              <span>Level up your job hunt</span>
              <h4>Build an application that gets more job offers</h4>
              <p>
                Landing more interviews and earning better job offers all starts
                with your resume. Here's how to ensure your application stands
                out today:
              </p>
            </div>
            <div className="build_app_cards col_4 grid gap_2">
              <a className="build_card_all pr">
                <span className="build_card_counter pa z1">01</span>
                <div className="build_app_card pr z2">
                  <div className="build_app_card_content pr z2">
                    <div className="build_app_svg pr">
                      <img
                        className="build_app_svg_bg pr z1"
                        src="/svg_s/blob1.svg"
                        alt=""
                      />
                      <img
                        className="build_app_svg_img pa z2 p_center"
                        src="/svg_s/work.png"
                        alt=""
                      />
                    </div>
                    <div className="build_app_text flex d_col gap_1">
                      <h5>Fəaliyyət sahəsi</h5>
                      <p>
                        Fəaliyyət sahənizi özünüzə və bacarıqlarınıza uyğun
                        şəkildə müəyyən etmək başlıca addımdır.
                      </p>
                      <div className="build_app_link flex jcsb aic">
                        <span>Fəaliyyət sahənizi müəyyənləşdirin</span>
                        <div className="build_app_link_button flex aic pr">
                          <button>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="build_card_all pr">
                <span className="build_card_counter pa z1">02</span>
                <div className="build_app_card pr z2">
                  <div className="build_app_card_content pr z2">
                    <div className="build_app_svg pr">
                      <img
                        className="build_app_svg_bg pr z1"
                        src="/svg_s/blob6.svg"
                        alt=""
                      />
                      <img
                        className="build_app_svg_img pa z2 p_center"
                        src="/svg_s/curriculum_2.png"
                        alt=""
                      />
                    </div>
                    <div className="build_app_text flex d_col gap_1">
                      <h5>Bacarıqlarınızı təkmilləşdirin</h5>
                      <p>
                        Tələb olunan bacarıqlarınızı təkmilləşdirmək və
                        formalaşdırmaq sizə rəqabət üstünlüyü yaradacaq.
                      </p>
                      <div className="build_app_link_blue build_app_link flex jcsb aic">
                        <span>Bacarıqlar barədə daha çoxu burada</span>
                        <div className="build_app_link_button flex aic pr">
                          <button>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="build_card_all pr">
                <span className="build_card_counter pa z1">03</span>
                <div className="build_app_card pr z2">
                  <div className="build_app_card_content pr z2">
                    <div className="build_app_svg pr">
                      <img
                        className="build_app_svg_bg pr z1"
                        src="/svg_s/blob3.svg"
                        alt=""
                      />
                      <img
                        className="build_app_svg_img pa z2 p_center"
                        src="/svg_s/cv.png"
                        alt=""
                      />
                    </div>
                    <div className="build_app_text flex d_col gap_1">
                      <h5>CV - nizi hazırlayın</h5>
                      <p>
                        Peşəkar CV ilə etdiyiniz iş müraciətləri daha tez
                        geridönüş alacaq.
                      </p>
                      <div className="build_app_link_green build_app_link flex jcsb aic">
                        <span>CV haqqında əsas ipucları</span>
                        <div className="build_app_link_button flex aic pr">
                          <button>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="build_card_all pr">
                <span className="build_card_counter pa z1">04</span>
                <div className="build_app_card pr z2">
                  <div className="build_app_card_content pr z2">
                    <div className="build_app_svg pr">
                      <img
                        className="build_app_svg_bg pr z1"
                        src="/svg_s/blob4.svg"
                        alt=""
                      />
                      <img
                        className="build_app_svg_img pa z2 p_center"
                        src="/svg_s/letter.png"
                        alt=""
                      />
                    </div>
                    <div className="build_app_text flex d_col gap_1">
                      <h5>Cover letter</h5>
                      <p>
                        CV formanızı peşəkar hazırlanmış müşaiət məktubu ilə
                        birlikdə göndərin.
                      </p>
                      <div className="build_app_link_pink build_app_link flex jcsb aic">
                        <span>Süni intellekt ilə müşaiət məktubu</span>
                        <div className="build_app_link_button flex aic pr">
                          <button>
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
