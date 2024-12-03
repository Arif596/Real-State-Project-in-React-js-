import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import Data from "../../Utils/Slider.json";
import { sliderSetting } from "../../Utils/Common";

function Residencies() {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* slider */}
        <Swiper {...sliderSetting}>
          {Data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Residencies;

// //sliderButton
// const SliderButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className=" flexCenter r-button">
//       <button onClick={() => swiper.slidePrev()}>&lt;</button>
//       <button onClick={() => swiper.slideNext()}>&gt;</button>
//     </div>
//   );
// };
