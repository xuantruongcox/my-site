import { useLocation,Link } from "react-router-dom";

import React from "react";
import toUpperCase from "../../libs/toUpperCase";
import "./breadcrumb.css";
const Breadcrumb = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .replace(/^\/|\/$/g, "")
    .split("/")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <li className="breadcrumb__list-item" key={index}>
          <Link className="item__link" to={currentLink}>
            {toUpperCase(crumb)}
          </Link>
        </li>
      );
    });
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__list-item">
          <Link className="item__link" to='/'>
            {toUpperCase('home')}
          </Link>
        </li>
        {crumbs}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
