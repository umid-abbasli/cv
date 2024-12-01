// src/components/LinkSwiper.js
import MySwiper from "./myswiper";

const GuideSwiper = () => {
  const slides = [
    <a href="" className="guide_card" key="1">
      <div className="guide_content flex d_col gap_1">
        <div className="guide_img">
          <img src="/img/resume-summary-hero.webp" alt="Template 1" />
        </div>
        <div className="guide_card_text flex gap_1 d_col">
          <span>Resume Help</span>
          <h5>Professional Resume Summary Examples</h5>
          <p>
            Your professional resume summary quickly shows employers you have
            the experience needed to do the job. Learn how to write one with our
            examples and tips.
          </p>
        </div>
      </div>
    </a>,
    <a href="" className="guide_card" key="1">
      <div className="guide_content flex d_col gap_1">
        <div className="guide_img">
          <img src="/img/resume-format.png.png" alt="Template 1" />
        </div>
        <div className="guide_card_text flex gap_1 d_col">
          <span>Resume Help</span>
          <h5>Professional Resume Summary Examples</h5>
          <p>
            Your professional resume summary quickly shows employers you have
            the experience needed to do the job. Learn how to write one with our
            examples and tips.
          </p>
        </div>
      </div>
    </a>,
    <a href="" className="guide_card" key="1">
      <div className="guide_content flex d_col gap_1">
        <div className="guide_img">
          <img src="/img/resume-vs-cv.png.png" alt="Template 1" />
        </div>
        <div className="guide_card_text flex gap_1 d_col">
          <span>Resume Help</span>
          <h5>Professional Resume Summary Examples</h5>
          <p>
            Your professional resume summary quickly shows employers you have
            the experience needed to do the job. Learn how to write one with our
            examples and tips.
          </p>
        </div>
      </div>
    </a>,
    <a href="" className="guide_card" key="1">
      <div className="guide_content flex d_col gap_1">
        <div className="guide_img">
          <img src="/img/resume-summary-hero.webp" alt="Template 1" />
        </div>
        <div className="guide_card_text flex gap_1 d_col">
          <span>Resume Help</span>
          <h5>Professional Resume Summary Examples</h5>
          <p>
            Your professional resume summary quickly shows employers you have
            the experience needed to do the job. Learn how to write one with our
            examples and tips.
          </p>
        </div>
      </div>
    </a>,
    <a href="" className="guide_card" key="1">
      <div className="guide_content flex d_col gap_1">
        <div className="guide_img">
          <img src="/img/resume-format.png.png" alt="Template 1" />
        </div>
        <div className="guide_card_text flex gap_1 d_col">
          <span>Resume Help</span>
          <h5>Professional Resume Summary Examples</h5>
          <p>
            Your professional resume summary quickly shows employers you have
            the experience needed to do the job. Learn how to write one with our
            examples and tips.
          </p>
        </div>
      </div>
    </a>,
    <a href="" className="guide_card" key="1">
      <div className="guide_content flex d_col gap_1">
        <div className="guide_img">
          <img src="/img/resume-vs-cv.png.png" alt="Template 1" />
        </div>
        <div className="guide_card_text flex gap_1 d_col">
          <span>Resume Help</span>
          <h5>Professional Resume Summary Examples</h5>
          <p>
            Your professional resume summary quickly shows employers you have
            the experience needed to do the job. Learn how to write one with our
            examples and tips.
          </p>
        </div>
      </div>
    </a>
  ];

  return (
    <MySwiper
      slides={slides}
      slidesPerView={3}
      spaceBetween={30}
      autoplayDelay={3000}
      centeredSlides={false}
    />
  );
};

export default GuideSwiper;
