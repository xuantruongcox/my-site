// import "./footer.css";
/** @jsxImportSource theme-ui */
import { Image, Link } from "theme-ui";
import logoDark from "../../assets/images/logo-dark.svg";
const socialList = [
  {
    name: "facebook",
    slug: "",
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
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "Contact",
    slug: "contact",
  },
];
function Footer() {
  return (
    <footer sx={{variant: 'footer'}} className="footer">
        <div sx={{variant: 'footer.head'}} className="footer__top">
          <div sx={{variant: 'footer.head.logo', flex: ".45"}} className="footer__top-col">
            <Image
              className="footer__top-brand"
              src={logoDark}
              alt="logo-brand"
            />
          </div>
          <div sx={{flex: ".5"}} className="footer__top-col">
            <ul sx={{variant: 'footer.head.navList'}} className="footer__top-navs">
              {navList.map((item, index) => {
                return (
                  <li key={index} className="navs__item">
                    <Link className="navs__item-link" to={item.slug}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div  sx={{flex: "0"}} className="footer__top-col">
            <ul sx={{variant: 'footer.head.navList'}} className="footer__top-socials">
              {socialList.map((item, index) => {
                return (
                  <li key={index} className="socials__item">
                    <a className="socials__item-link" href={item.slug}>
                      <i className={`${item.icon} link__icon`}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-release">
            <p sx={{variant: 'footer.end.coppy'}} className="release__info">
              Copyright 2023 - Studies site - Multi Purpose Theme by DevCox
            </p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
