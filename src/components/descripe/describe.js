/** @jsxImportSourcce theme-ui */
import React from "react";
import toCapitalize from "../../libs/toCapitalize";
import "./describe.css";
const Describe = ({ data }) => {
  return (
    <section className="describe">
      <div className="describe__wrapper">
        <div className="describe__title">
          <h2 sx={{ color: "text" }} className="describe__title">
            {data.goals.map((goal, index) => {
              if (goal.emphasize) {
                return (
                  <span key={index} className="describe__title-emphasize">
                    {goal.name && toCapitalize(goal.name)}.{" "}
                  </span>
                );
              } else {
                return `${goal.name && toCapitalize(goal.name)}.${" "}`;
              }
            })}
          </h2>
        </div>
        <p sx={{ color: "text" }} className="describe__content">
          {data.content}
        </p>
      </div>
    </section>
  );
};

export default Describe;
