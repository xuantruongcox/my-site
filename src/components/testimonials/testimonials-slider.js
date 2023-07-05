/** @jsxImportSource theme-ui */

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Image, useColorMode } from "theme-ui";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import data from "./data";
import blackDivider from "../../assets/images/black-divider.png";
// import "./testimonial.css";
// DUM DATA

const toCapitalize = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};
const dumDATA = () => {
  data.map((item) => {
    item.firstName = toCapitalize(item.firstName);
    item.lastName = toCapitalize(item.lastName);
    item.fullName = `${item.firstName} ${item.lastName}`;
    item.dob = Date(item.dob);
    item.pos = item.pos.toUpperCase();
  });
  return data;
};

// COMPONENT
function Testimonials() {
  let colorMode = useColorMode()[0];
  const data = dumDATA();
  return (
    <section sx={{ variant: "section", bg: "#f8f8f8" }} className="testimonial">
      <Container>
        <div className="testimonial__wrapper">
          <div
            sx={{ marginBottom: "7rem", variant: "header2" }}
            className="testimonial__heading"
          >
            <h3
              sx={{
                color: "text",
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
              }}
              className="testimonial__heading-subtitle"
            >
              HEAR FROM
            </h3>
            <h2
              sx={{
                color: "text",
                fontSize: "clamp(2.4rem, 3vw, 4.8rem)",
              }}
              className="testimonial__heading-title"
            >
              TESTIMONIALS
            </h2>
            <span
              sx={{
                // color: "text",
                // fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                variant: 'text.summary'
              }}
              className="testimonial__heading-des"
            >
              We always listen to our clients.
            </span>
            <Image
              className="testimonial__heading-divider"
              style={{
                filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
              }}
              sx={{ variant: "divider" }}
              src={blackDivider}
              alt="divider"
            />
          </div>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 3,
              },
            }}
            grabCursor={true}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="testimonial__wrapper"
            sx={{ variant: "monialSlider" }}
          >
            {data.map((item, index) => {
              const img = item.image;
              return (
                <SwiperSlide
                  key={index}
                  className="testimonial__card swiper-slide"
                >
                  <div sx={{variant: 'monialSlider.slide'}}>
                    <img
                      alt={item.fullName}
                      src={img}
                      className="testimonial__card-image"
                    />
                    <div
                      sx={{ variant: "monialSlider.slide.content" }}
                      className="testimonial__card-content"
                    >
                      <h2 className="content__name">{item.fullName}</h2>
                      <h4
                        sx={{
                          color: "text",
                        }}
                        className="content__pos"
                      >
                        {item.pos}
                      </h4>
                      <p
                        sx={{
                          color: "text",
                        }}
                        className="content__des"
                      >
                        {item.des}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
