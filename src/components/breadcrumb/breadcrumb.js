/** @jsxImportSource theme-ui */
import { useLocation,Link } from "react-router-dom";

import React from "react";
import toUpperCase from "../../libs/toUpperCase";
// import "./breadcrumb.css";
const Breadcrumb = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .replace(/^\/|\/$/g, "")
    .split("/")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <li sx={{variant: 'breadcrumb.item'}} className="breadcrumb__list-item" key={index}>
          <Link sx={{variant: 'breadcrumb.item.link'}} className="item__link" to={currentLink}>
            {toUpperCase(crumb)}
          </Link>
        </li>
      );
    });
  return (
    <nav sx={{variant: 'breadcrumb'}} className="breadcrumb">
      <ul sx={{variant: 'breadcrumb.list'}} className="breadcrumb__list">
        <li sx={{variant: 'breadcrumb.item'}} className="breadcrumb__list-item">
          <Link sx={{variant: 'breadcrumb.item.link'}} className="item__link" to='/'>
            {toUpperCase('home')}
          </Link>
        </li>
        {crumbs}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
