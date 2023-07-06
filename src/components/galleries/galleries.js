/** @jsxImportSource theme-ui */
import { Link } from "theme-ui";
// import "./galleries.css";

function Galleries({ data }) {
  const menu = [
    {
      name: "all",
      slug: "/",
    },
    {
      name: "ui/ux design",
      slug: "/",
    },
    {
      name: "programming",
      slug: "/",
    },
    {
      name: "photography",
      slug: "/",
    },
    {
      name: "ecommerce",
      slug: "/",
    },
  ];

  return (
    <section sx={{ variant: "section", marginTop: '10rem' }} className="galleries">
      <div sx={{ variant: "header2" }}>
        <div className="galleries__title">
          <h2
            sx={{ variant: "text.content" }}
            className="galleries__title-text"
          >
            The work
          </h2>
        </div>
        <ul sx={{ variant: "navSection" }} className="galleries__nav-list">
          {menu.map((item, index) => {
            return (
              <li key={index} className="list__item">
                <Link
                  sx={{ variant: "text.content" }}
                  className="list__item-link"
                  to={item.slug}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div sx={{ variant: "grid" }} className="galleries__galleries-list">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              sx={{
                variant: "gallery",
                backgroundImage: `url('${item.images[0]}')`,
              }}
              className="list__gallery"
            >
              <div className="btn__group">
                <Link to="/my-site" className="list__gallery-fav icon-heart"></Link>
                <Link to="/my-site" className="list__gallery-slug icon-link"></Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Galleries;
