/** @jsxImportSource theme-ui */
import { useColorMode, Image, Container } from "theme-ui";
import toCapitalize from "../../libs/toCapitalize";
import Slider from "../slider/slider";
import divider from "../../assets/images/black-divider.png";
// import "./team.css";
function Team({ data }) {
  const members = data;
  let colorMode = useColorMode()[0];

  return (
    <section sx={{ variant: "section" }} className="team">
      <Container>
        <div sx={{variant: 'header3'}} className="team__head">
          <h3 className="team__head-subtitle">who we are</h3>
          <h2 className="team__head-title">team work</h2>
          <p sx={{variant: 'text.summary'}} className="team__head-des">
            {toCapitalize(
              "we really love what we do & our work on every project truly reflects that."
            )}
          </p>
          <Image
            className="team__head-divider"
            sx={{ variant: "divider" }}
            style={{
              filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
            }}
            src={divider}
            alt="divider"
          />
        </div>
        <Slider data={members} />
        <div sx={{marginTop: '10rem'}} className="team__foot">
          <p sx={{ variant: "text.content" }} className="team__foot-content">
            {toCapitalize(
              "Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Team;
