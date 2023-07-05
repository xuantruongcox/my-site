/** @jsxImportSource theme-ui */
import "./alternate-list.css";
import { Image } from "theme-ui";

const AlternateItem = ({ item }) => {
  const { title, contents, image } = item;
  return (
    <li className="alternate__list-item">
      <div className="item__col">
        <Image className="item__img" alt={title} src={image} />
      </div>
      <div className="item__col">
        <div className="item__wrapper">
          <h2 sx={{ color: "text" }} className="item__title">
            {title}
          </h2>
          {contents.map((content, index) => {
            return (
              <p sx={{ color: "text" }} key={index} className="item__content">
                {content}
              </p>
            );
          })}
        </div>
      </div>
    </li>
  );
};

const AlternateList = ({ data }) => {
  return (
    <section className="alternate">
      <ul className="alternate__list">
        {data.map((item, index) => {
          return <AlternateItem id={index} key={index} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default AlternateList;
