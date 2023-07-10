/** @jsxImportSource theme-ui */
import toCapitalize from "../../libs/toCapitalize";
// import "./describe.css";
const Describe = ({ data }) => {
  return (
    <section sx={{variant: 'section'}} className="describe">
      <div sx={{variant: 'describe.wrapper'}} className="describe__wrapper">
        <div className="describe__title">
          <h2 sx={{ variant: "describe.title" }} className="describe__title">
            {data.goals.map((goal, index) => {
              if (goal.emphasize) {
                return (
                  <span sx={{variant: 'describe.emphasize'}} key={index} className="describe__title-emphasize">
                    {goal.name && toCapitalize(goal.name)}.{" "}
                  </span>
                );
              } else {
                return `${goal.name && toCapitalize(goal.name)}.${" "}`;
              }
            })}
          </h2>
        </div>
        <p sx={{ variant: "describe.content" }} className="describe__content">
          {data.content}
        </p>
      </div>
    </section>
  );
};

export default Describe;
