/** @jsxImportSource theme-ui */



import { useEffect, useState } from "react";
import { Image, } from "theme-ui";
import { Link } from 'react-router-dom';
import useScroll from "../../libs/isScrolled";
import toUpperCase from "../../libs/toUpperCase";
import Dropdown from "../dropdown/dropdown";
// import MegaMenu from "../mega/mega";
// import SwitchTheme from "../switch-theme/toggleModeTheme";
import logoDark from '../../assets/images/logo-dark.svg';
import logo from '../../assets/images/logo.svg';

import menu from "./menu";
// import "./navbar.css";

import useCheckDevice from "../../libs/isMobile";
import SearchComponent from "../search-bar/search-bar";
import Sidebar from "../siderbar/sidebar";
function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const isMobile = useCheckDevice();


  const isScrolled = useScroll();
  const handleMenuOpen = (index) => {
    setActiveMenu((prevMenu) => (prevMenu === index ? null : index));
  };
  const handleNavbarOpen = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  function LogoBrand(props) {
    if (!props.isMobile) {
      if (props.isScrolled) {
        return (
          <Image
            className="navbar__logo"
            src={logoDark}
            alt="logo-brand"
          />
        );
      } else {
        return (
          <Image
            className="navbar__logo"
            src={logo}
            alt="logo-brand"
          />
        );
      }
    } else {
      return (
        <Image
          className="navbar__logo"
          src={logoDark}
          alt="logo-brand"
        />
      );
    }
  }

  return (
    <nav sx={{ variant: 'navbar', bg: (isScrolled || isMobile) ? 'white' : 'transparent' }} className="navbar">
      <div sx={{ variant: 'navbar.wrapper' }} className="navbar__wrapper">
        <div sx={{ variant: 'navbar.leftBlock' }} className="navbar__left">
          <button sx={{ variant: 'navbar.toggler' }} onClick={handleNavbarOpen} className="navbar__toggler">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <Link sx={{ variant: "navbar.logo" }} to="/my-site" className="navbar__brand">
            <LogoBrand isMobile={isMobile} isScrolled={isScrolled} />
          </Link>
        </div>
        <div sx={{ variant: 'navbar.rightBlock' }} className="navbar__right">
          <div
            sx={{ variant: 'navbar.menuWrapper' }}
            style={{ maxHeight: isOpenNavbar && isMobile ? "100vh" : null }}
            className="navbar__nav"
          >
            <ul sx={{ variant: 'navbar.menuWrapper.menu' }} className="navbar__nav-list">
              {menu.map((item, index) => {
                if (item.dropdown) {
                  return (
                    <li
                      sx={{
                        variant: 'navbar.menuWrapper.menu.item',
                        "> a": {
                          color:
                            (isScrolled && !isMobile) || isMobile
                              ? "#55565b"
                              : "white",
                        },
                      }}
                      key={index}
                      className="list__item animate__animated animate__fadeIn"
                    >
                      <Dropdown
                          indexItem={index}
                          data={item}
                          activeMenu={activeMenu}
                          handleMenuOpen={handleMenuOpen}
                        />
                    </li>
                  );
                } else if (item.mega) {
                  return (
                    <li
                      sx={{
                        variant: 'navbar.menuWrapper.menu.item',
                        "> a": {
                          color:
                            (isScrolled && !isMobile) || isMobile
                              ? "#55565b"
                              : "white",
                        },
                      }}
                      key={index}
                      style={{ position: "unset" }}
                      className="list__item animate__animated animate__fadeIn"
                    >
                      {/* <MegaMenu
                          indexItem={index}
                          data={item}
                          activeMenu={activeMenu}
                          handleMenuOpen={handleMenuOpen}
                        /> */}
                    </li>
                  );
                } else {
                  return (
                    <li
                      sx={{
                        variant: 'navbar.menuWrapper.menu.item',
                        "> a": {
                          color:
                            (isScrolled && !isMobile) || isMobile
                              ? "#55565b"
                              : "white",
                        },
                      }}
                      key={index}
                      className="list__item animate__animated animate__fadeIn"
                    >
                      <Link
                        sx={{
                          variant: 'navbar.menuWrapper.menu.item.link',
                        }}
                        to={`${item.path}`} className="list__item-link">
                        {toUpperCase(item.name)}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div sx={{ variant: "navbar.extraMenu" }} className="navbar__icon">
            {/* {!isMobile && <ShoppingCart />} */}
            <SearchComponent />
            <Sidebar />
            {/* {!isMobile && <SwitchTheme className="toggle-theme" />} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
