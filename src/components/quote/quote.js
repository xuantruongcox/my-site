/** @jsxImportSource theme-ui */
import { Link } from "theme-ui";
// import "./quote.css";

function Quote({ data, translation }) {
  const { title, content, link, background } = data;
  return (
    <section
      sx={{ variant: "banner" }}
      style={{ backgroundImage: `url('${background}')` }}
      className="quote"
    >
      <h3 sx={{textTransform: "uppercase"}} className="quote__title-text">{title}</h3>
      <h2 className="quote__content-text">{content}</h2>
      <div className="quote__link">
        <Link
          sx={{ variant: "buttons.primary" }}
          className="quote__link-text"
          to={link.path}
        >
          {link.label}
        </Link>
      </div>
    </section>
  );
}

export default Quote;
