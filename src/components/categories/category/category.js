/** @jsxImportSource theme-ui */

import { Link } from "theme-ui";
// import { jsx } from "theme-ui";
// import "./category.css";
function Category({ category }) {
  return (
    <div
      sx={{
        // "&:hover": {
        //   ".category__title-icon, .category__title-text": {
        //     color: "accent",
        //   },
        //   ".category__description-text, .category__link-btn": {
        //     color: "primary",
        //   },
        // },
        variant: "card",
      }}
      className="category"
    >
      <div sx={{ variant: "card.head" }} className="category__title">
        <i
          sx={{
            variant: "card.icon",
          }}
          className={category.icon + " category__title-icon"}
        ></i>
        <Link
          sx={{ variant: "card.name" }}
          to="/my-site"
          className="category__title-text"
        >
          {category.title}
        </Link>
      </div>
      `
      <div className="category__description">
        <p sx={{ variant: "card.des" }} className="category__description-text">
          {category.description}
        </p>
      </div>
      <Link
        sx={{
          variant: "card.link",
        }}
        className="category__link-btn"
        to={category.link}
      >
        LEARN MORE
      </Link>
    </div>
  );
}

export default Category;
