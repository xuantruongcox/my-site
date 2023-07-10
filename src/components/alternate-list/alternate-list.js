/** @jsxImportSource theme-ui */
// import "./alternate-list.css";
import { Image } from "theme-ui";

const AlternateItem = ({ item }) => {
  const { title, contents, image } = item;
  return (
    <li sx={{variant: "alternate.item"}} className="alternate__list-item">
      <div sx={{variant: "alternate.item.col"}} className="item__col">
        <Image sx={{variant: "alternate.item.img"}} className="item__img" alt={title} src={image} />
      </div>
      <div sx={{variant: "alternate.item.col"}} className="item__col">
        <div sx={{variant: "alternate.item.wrapper"}} className="item__wrapper">
          <h2 sx={{ variant: "alternate.item.title" }} className="item__title">
            {title}
          </h2>
          {contents.map((content, index) => {
          return (
              <p sx={{ variant: "alternate.item.content" }} key={index} className="item__content">
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
    <section sx={{variant: "alternate"}} className="alternate">
      <ul sx={{variant: "alternate.list"}} className="alternate__list">
        {data.map((item, index) => {
          return <AlternateItem id={index} key={index} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default AlternateList;
