/** @jsxImportSource theme-ui */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper";
import { Container, Image } from "theme-ui";
import {
  logo1,
  logo2,
  logo3,
  logo4,
} from "../../assets/images/celebrities/images";
const dumData = [
  {
    name: "logo-1",

    image: logo1,
  },
  {
    name: "logo-2",

    image: logo2,
  },
  {
    name: "logo-3",

    image: logo3,
  },
  {
    name: "logo-4",

    image: logo4,
  },
  {
    name: "logo-5",

    image: logo2,
  },
  {
    name: "logo-6",

    image: logo1,
  },
  {
    name: "logo-7",

    image: logo3,
  },
  {
    name: "logo-8",

    image: logo4,
  },
];

function Celebrities() {
  // const query = useStaticQuery(graphql`
  //   query {
  //     allCelebritiesJson {
  //       edges {
  //         node {
  //           image
  //           name
  //         }
  //       }
  //     }
  //   }
  // `);
  // const data = query.allCelebritiesJson.edges;
  return (
    <section
      sx={{ backgroundColor: "background", variant: 'celebrities' }}
      className="celebrities"
    >
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: "2",
          },
          768: {
            slidesPerView: "3",
          },
          1024: {
            slidesPerView: "5",
          },
        }}
        slidesPerView={6}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        a11y={false}
        freeMode={true}
        speed={500}
        // centeredSlides={true}
        className="celebrities__wrapper"
        modules={[Autoplay]}
      >
        {dumData.map((item, index) => {
          return (
            <SwiperSlide key={index} className="celebrities__slide">
              <Image
                sx={{ variant: 'celebrities.image' }}
                className="celebrities__slide-img"
                alt={item.name}
                src={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Celebrities;
