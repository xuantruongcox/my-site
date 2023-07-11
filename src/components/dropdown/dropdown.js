/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";

import { useState } from "react";
import { Link } from "theme-ui";
import toUpperCase from "../../libs/toUpperCase";
import useWindowSize from "../../libs/useWindowSize";
// import "./dropdown.css";
import useScroll from "../../libs/isScrolled";
import useCheckDevice from "../../libs/isMobile";
const Dropdown = ({ indexItem, data, activeMenu, handleMenuOpen }) => {

  const [localActiveMenu, setLocalActiveMenu] = useState(null);

  const isMobile = useCheckDevice();

  const isScrolled = useScroll(".navbar");
  const isOpen = activeMenu === indexItem;
  let windowSize = useWindowSize();

  function ELMOutOfViewPort(e) {
    e.stopPropagation();

    const dropdownMenu = e.target.nextElementSibling;
    const menuWidth = Math.floor(
      dropdownMenu.getBoundingClientRect().width +
      dropdownMenu.getBoundingClientRect().x
    );
    if (menuWidth > windowSize.width) {
      dropdownMenu.style.left = `${-100}%`;
    }
  }

  const localHandleMenuOpen = (index) => {
    setLocalActiveMenu((prevMenu) => (prevMenu === index ? null : index));
  };
  const toggleMenu = () => {
    handleMenuOpen(indexItem);
  };
  useEffect(() => {


  });

  return (
    <>
      <a
        sx={{ variant: 'dropdown.toggler' }}
        onMouseEnter={ELMOutOfViewPort}
        onClick={toggleMenu}
        href="#!"
        className="dropdown__toggler"
      >
        {toUpperCase(data.name)}
        {data.dropdown ? <i className="icon-ios-more icn-right"></i> : null}
      </a>
      {/* {isOpen} */}
      {
        <ul
          style={{
            '--animate-duration': '.3s'
          }}
          sx={{ variant: 'dropdown.menu', display: isOpen && isMobile ? "block":"none"  }} 
          className="dropdown__menu animate__animated animate__fadeIn"
        >
          {data.dropdown.map((item, index) => {
            if (item.dropdown) {
              return (
                <li sx={{variant: 'dropdown.menu.item'}} key={index} className="dropdown__menu-item">
                  <Dropdown
                    indexItem={index}
                    data={item}
                    activeMenu={localActiveMenu}
                    handleMenuOpen={localHandleMenuOpen}
                  />
                </li>
              );
            } else {
              return (
                <li sx={{variant: 'dropdown.menu.item'}} key={index} className="dropdown__menu-item">
                  <Link
                    sx={{ color: isScrolled && "text", variant: "dropdown.menu.toggler" }}
                    className="item__link"
                    to={item.path}
                  >
                    {toUpperCase(item.name)}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      }
    </>
  );
};

export default Dropdown;
