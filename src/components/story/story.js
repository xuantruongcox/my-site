/** @jsxImportSource theme-ui */
import { Container, Link, useColorMode } from "theme-ui";
import blackDivider from "../../assets/images/black-divider.png";
// import "./story.css";
function Story({ data }) {
  const {
    content1,
    content2,
    content3,
    description,
    subtitle,
    title,
    contentList,
    slug,
    buttonLabel,
  } = data;
  let colorMode = useColorMode()[0];
  return (
    <section sx={{ variant: "section" }} className="story">
      <Container>
        <div className="story__header">
          <h3
            sx={{ variant: "text.content" }}
            className="story__header-subtitle"
          >
            {subtitle}
          </h3>
          <h2
            className="story__header-maintitle"
          >
            {title}
          </h2>
          <p sx={{ variant: "text.summary" }} className="story__header-des">
            {description}
          </p>
          <img
            sx={{ variant: "divider" }}
            className="story__header-divider"
            style={{
              filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
            }}
            src={blackDivider}
            alt=""
          />
        </div>
        <div sx={{variant: 'grid.col2'}} className="story__body">
          <div className="story__body-col">
            <p
              sx={{ variant: "text.content" }}
              className="stody__body-content1 content"
            >
              {content1}
            </p>
            <p
              sx={{ variant: "text.content" }}
              className="story__body-content2 content"
            >
              {content2}
            </p>
            <Link
              sx={{ variant: "buttons.highlight" }}
              to={slug}
              className="story__body-slug"
            >
              {buttonLabel}
            </Link>
          </div>
          <div className="story__body-col">
            <p
              sx={{ variant: "text.content" }}
              className="story__body-content3 content"
            >
              {content3}
            </p>
            <ul sx={{variant: 'grid.col2'}} className="story__body-list">
              {contentList.map((item, index) => {
                return (
                  <li key={index} className="list__item">
                    <Link sx={{variant: 'link'}} to={item.slug} className="list__item-link">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Story;
