/** @jsxImportSource theme-ui */

// import "./banner.css";
import toCapitalize from "../../libs/toCapitalize";
import Breadcrumb from "../breadcrumb/breadcrumb";
import background from "../../assets/images/backgrounds/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import { Container } from "theme-ui";
const Banner = ({ data }) => {
  const { title, content } = data;
  return (
    <section
      sx={{ variant: 'banner' }}
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="banner"
    >
      <Container>
        <div sx={{ variant: 'banner.wrapper' }} className="banner__wrapper">
          <h1 sx={{ variant: "banner.title" }} className="banner__title">{title && toCapitalize(title)}</h1>
          {content && <p sx={{variant: 'banner.content'}} className="banner__content">{content}</p>}
          <div sx={{ variant: 'banner.breadcrumb' }} className="banner__breadcrumb">
            <Breadcrumb />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
