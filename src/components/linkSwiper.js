// src/components/LinkSwiper.js
import MySwiper from "./myswiper";

const LinkSwiper = () => {
  const slides = [
    <a href="" className="cv_template_link" key="1">
      <div className="cv_template_img">
        <img
          src="/img/advanced-resume-template-navy-orange-hub.png"
          alt="Template 1"
        />
        <button>
          <img src="/svg_s/edit-text.png" alt="cv_icon" />
          <span>Nümunəni istifadə et</span>
        </button>
      </div>
      <span>Modern</span>
    </a>,
    <a href="" className="cv_template_link" key="2">
      <div className="cv_template_img">
        <img
          src="/img/taj-mahal-resume-template-blue-hub.png"
          alt="Template 2"
        />
        <button>
          <img src="/svg_s/edit-text.png" alt="cv_icon" />
          <span>Nümunəni istifadə et</span>
        </button>
      </div>
      <span>Elegant</span>
    </a>,
    <a href="" className="cv_template_link" key="3">
      <div className="cv_template_img">
        <img
          src="/img/Clean-Modern-Resume-Template-Yellow-Hub.png"
          alt="Template 3"
        />
        <button>
          <img src="/svg_s/edit-text.png" alt="cv_icon" />
          <span>Nümunəni istifadə et</span>
        </button>
      </div>
      <span>Clean</span>
    </a>,
    <a href="" className="cv_template_link" key="4">
      <div className="cv_template_img">
        <img src="/img/2024-resume-template-blue-hub.png" alt="Template 4" />
        <button>
          <img src="/svg_s/edit-text.png" alt="cv_icon" />
          <span>Nümunəni istifadə et</span>
        </button>
      </div>
      <span>Professional</span>
    </a>,
    <a href="" className="cv_template_link" key="5">
      <div className="cv_template_img">
        <img
          src="/img/taj-mahal-resume-template-blue-hub.png"
          alt="Template 5"
        />
        <button>
          <img src="/svg_s/edit-text.png" alt="cv_icon" />
          <span>Nümunəni istifadə et</span>
        </button>
      </div>
      <span>Classic</span>
    </a>,
    <a href="" className="cv_template_link" key="6">
      <div className="cv_template_img">
        <img
          src="/img/advanced-resume-template-navy-orange-hub.png"
          alt="Template 6"
        />
        <button>
          <img src="/svg_s/edit-text.png" alt="cv_icon" />
          <span>Nümunəni istifadə et</span>
        </button>
      </div>
      <span>Stylish</span>
    </a>,
  ];

  return (
    <MySwiper
      slides={slides}
      slidesPerView={3.7}
      spaceBetween={30}
      autoplayDelay={3000}
      centeredSlides={true}
    />
  );
};

export default LinkSwiper;
