/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import divider from "../../assets/images/white-divider.png";
import toUpperCase from "../../libs/toUpperCase";
// import "./culture.css";
function Culture({ data }) {
  const { description, bgImage, title, subTitle, content } = data;
  return (
    <section
      sx={{ variant: "section" }}
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="culture"
    >
      {/* <div className="culture__background"></div> */}
        <div sx={{ variant: "banner" }}>
          <h3 className="culture__subtitle">{toUpperCase(subTitle)}</h3>
          <h2 className="culture__maintitle">{toUpperCase(title)}</h2>
          <p className="culture__des">{description}</p>
          <img
            sx={{ variant: "divider" }}
            className="culture__divider"
            src={divider}
            alt=""
          />
          <p className="culture__content">{content}</p>
        </div>
    </section>
  );
}

export default Culture;
