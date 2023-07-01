/** @jsxImportSource theme-ui */

import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <h2
          sx={{ color: "text", fontFamily: "heading" }}
          className="banner__title"
        >
          Ideal for your business.
        </h2>
        <p className="banner__summary"></p>
        <div className="banner__group"></div>
      </div>
    </section>
  );
};

export default Banner;
