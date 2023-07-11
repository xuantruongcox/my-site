/** @jsxImportSource theme-ui */
import { useColorMode, Image, Container } from "theme-ui";
import toCapitalize from "../../libs/toCapitalize";
import Slider from "../slider/slider";
import divider from "../../assets/images/black-divider.png";
import toUpperCase from "../../libs/toUpperCase";
// import "./work.css";
function Work({ data }) {
  const members = data;
  let colorMode = useColorMode()[0];

  return (
    <section sx={{ variant: "work" }} className="work">
      <div sx={{variant: "work.wrapper"}} className="work__wrapper">
      <Container>
        <div sx={{variant: 'header3'}} className="work__head">
          <h3 className="work__head-subtitle">{toUpperCase('who we are')}</h3>
          <h2 className="work__head-title">{toUpperCase('team work')}</h2>
          <p sx={{variant: 'text.summary'}} className="work__head-des">
            {toCapitalize(
              "we really love what we do & our work on every project truly reflects that."
            )}
          </p>
          <Image
            className="work__head-divider"
            sx={{ variant: "divider" }}
            style={{
              filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
            }}
            src={divider}
            alt="divider"
          />
        </div>
        <Slider data={members} />
        <div sx={{marginTop: '10rem'}} className="work__foot">
          <p sx={{ variant: "text.content" }} className="work__foot-content">
            {toCapitalize(
              "Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            )}
          </p>
        </div>
      </Container>
      </div>
    </section>
  );
}

export default Work;
