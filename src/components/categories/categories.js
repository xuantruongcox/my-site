/** @jsxImportSource theme-ui */

import { Container, useColorMode } from "theme-ui";
import blackDivider from "../../assets/images/black-divider.png";
import Category from "./category/category";

// import "./categories.css";

function Categories({ data }) {
  const colorMode = useColorMode()[0];

  return (
    <section sx={{ variant: 'section' }} className="categories">
      <Container>
        <div sx={{ variant: "grid" }}>
          <div sx={{ display: "flex" }}>
            <div
              sx={{ marginTop: "auto", marginBottom: "auto", variant: 'header' }}
              className="categories__subject"
            >
              <h3 sx={{textTransform: "uppercase"}} className="categories__subject-subtitle">what we do</h3>
              <h2 sx={{textTransform: "uppercase"}} className="categories__subject-maintitle">experts</h2>
              <p
                sx={{ variant: "text.summary" }}
                className="categories__subject-description"
              >
                We build digital solutions.
              </p>
              <img
                className="categories__subject-divider"
                sx={{ variant: 'divider' }}
                style={{
                  filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
                }}
                src={blackDivider}
                alt=""
              />
            </div>
          </div>
          {data.map((category, index) => {
            return (
              <div sx={{ variant: 'flexGrid' }} key={index}>
                <Category category={category} />;
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
