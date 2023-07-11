/** @jsxImportSource theme-ui */
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "theme-ui";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import toUpperCase from "../../libs/toUpperCase";
// import "./slider.css";

function Slider({ data }) {
  return (
    <div className="slider__container">
      <Swiper
        sx={{ variant: "slider" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slider__card-content">
                <h4 className="content__name">{toUpperCase(item.fullName)}</h4>
                <h5 className="content__pos">{toUpperCase(item.position)}</h5>
              </div>
              <Image
                alt={item.fullName}
                src={item.profileImage}
                className="slider__card-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
