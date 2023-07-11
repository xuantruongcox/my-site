/** @jsxImportSource theme-ui */

import { Container, Image } from "theme-ui";
import "./caption.css";

function Caption({ data }) {

  const caption = data[0];

  return (
    <section
      sx={{ variant: 'caption' }}
      style={{ backgroundImage: `url(${caption.image})` }}
      className="caption"
    >
      <div sx={{variant: 'caption.wrapper'}} className="caption__wrapper">
        <div className="caption__summary animate__animated animate__fadeInLeft">
          <h2
            sx={{ variant: 'caption.h2' }}
            className="caption__summary-text"
          >
            {caption.summary}
          </h2>
        </div>
        <div className="caption__title animate__animated animate__zoomIn">
          <h1
            sx={{ variant: 'caption.h1' }}
            className="caption__title-text"
          >
            {caption.title}
          </h1>
        </div>
        <div className="caption__description animate__animated animate__fadeInRight">
          <p sx={{ variant: 'caption.p' }} className="caption__description-text">
            {caption.description}
          </p>
        </div>
        <a
          sx={{ variant: "buttons.primary" }}
          href={caption.link.path}
          className="caption__link-btn animate__animated animate__fadeInUp"
        >
          {caption.link.label}
        </a>
      </div>
    </section>
  );
}

export default Caption;
