/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react";
import { Link } from "theme-ui";
import useCheckDevice from "../../libs/isMobile";
import useScroll from "../../libs/isScrolled";
import * as React from 'react';
// import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(".navbar");
  const isMobile = useCheckDevice();

  const socialList = [
    {
      name: "facebook",
      path: "",
      icon: "fab fa-facebook-f",
    },
    {
      name: "twitter",
      path: "",
      icon: "fab fa-twitter",
    },
    {
      name: "google+",
      path: "",
      icon: "fab fa-google-plus-g",
    },
    {
      name: "pinterest",
      path: "",
      icon: "fab fa-pinterest",
    },
    {
      name: "dribble",
      path: "",
      icon: "fas fa-basketball-ball",
    },
  ];
  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "contact",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/regis",
    },
  ];
  const handleOpenPanel = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
  });
  return (
    <div className="sidebar">
      <button
        sx={{
          i: {
            color: (isScrolled && !isMobile) || isMobile ? "#55565b" : "white",
          },
        }}
        onClick={handleOpenPanel}
        className="sidebar__toggle"
      >
        <i className="icon-sort-1"></i>
      </button>
      <div
        sx={{ variant: 'sidebar.menu' }}
        className="sidebar__panel"
        style={{
          right: isOpen ? "0" : "-100%",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div sx={{ variant: 'sidebar.menu.topBlock' }} className="sidebar__top">
          <div sx={{ variant: 'sidebar.menu.closeButton' }} className="sidebar__top-close">
            <button
              onClick={handleOpenPanel}
              id="close__btn"
              className="close__btn"
            >
              Close Panel
            </button>
          </div>
          <hr />
          <div sx={{ variant: 'sidebar.menu.topBlock.social' }} className="sidebar__top-social">
            <a sx={{ variant: 'sidebar.menu.topBlock.social.fb' }} href="httpsh://facebook.com" className="facebook">
              <i className="fab fa-facebook-f"></i>
              <p>LOGIN WITH FACEBOOK</p>
            </a>
            <a sx={{ variant: 'sidebar.menu.topBlock.social.google' }} href="https://google.com" className="google">
              <i className="fab fa-google-plus-g"></i>
              <p>LOGIN WITH GOOGLE</p>
            </a>
          </div>
        </div>
        <hr />
        <div sx={{ variant: 'sidebar.menu.middleBlock' }} className="sidebar__middle">
          {navList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Link
                  style={
                    isOpen
                      ? { "--animate-duration": `${(index + 3.5) / 5}s` }
                      : null
                  }
                  className={
                    isOpen
                      ? "sidebar__middle-link animate__animated animate__fadeInRight"
                      : "sidebar__middle-link"
                  }
                  key={index}
                  href={item.path}
                >
                  {item.name}
                </Link>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
        <div sx={{ variant: 'sidebar.menu.bottomBlock' }} className="sidebar__bottom">
          {socialList.map((item, index) => {
            return (
              <a key={index} className="sidebar__bottom-link" href={item.path}>
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
