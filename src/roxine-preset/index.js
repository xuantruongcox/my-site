/** @jsxImportSource theme-ui */
import { makeTheme } from "@theme-ui/css/utils";
import roxineFont from "./assets/roxine-font-icon/roxine-font.css";
import icoMoon from "./assets/icomoon/icomoon.min.css";
import animate from "./assets/animate.css";
const fonts = [
  "https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
  "https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i",
  "https://fonts.googleapis.com/css?family=Just+Another+Hand",
  "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
];
const icons = [roxineFont, icoMoon, animate];
fonts.forEach((font) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = font;
  document.head.appendChild(link);
});
icons.forEach((icon) => {
  const iconElm = document.createElement("link");
  iconElm.rel = "stylesheet";
  iconElm.href = icon;
  document.head.appendChild(iconElm);
});

const roxineTheme = makeTheme({
  config: {
    initialColorModeName: "light",
  },
  styles: {
    root: {
      fontSize: "10px",
      fontFamily: "body",
      lineHeight: 1.5,
      "h1,h2,h3,h4,h5,h6": {
        fontFamily: "heading",
        textTransform: "uppercase",
      },
      h1: {
        lineHeight: 1.5,
      },
      h2: {
        fontSize: 4,
        lineHeight: 1.5,
        letterSpacing: ".2rem",
        marginTop: "0px",
        marginBottom: "2",
      },
      h3: {
        fontSize: 5,
        fontWeight: "slim",
        textTransform: "uppercase",
        letterSpacing: ".3rem",
        margin: "0px",
      },
      h4: {
        marginTop: "0px",
        marginBottom: "2",
        color: "white",
      },
      h5: {
        marginTop: "0px",
        marginBottom: "2",
        color: "white",
      },
      p: {
        lineHeight: 2.4,
        fontSize: 7,
      },
      li: {
        listStyle: "none",
      },
      a: {
        textDecoration: "none",
      },
    },
  },
  colors: {
    text: "#55565b", //Grey 1
    primary: "#212121", //Black 0.7
    secondary: "#f8f8f8", //Grey 0.5
    accent: "#5645FF", //PurleBlue 1
    highlight: "#000000", //Black 1
    background: "#fff", //White 1
    modes: {
      dark: {
        text: "white",
        background: "#000000", //#201f30,
        secondary: "#000000",
        link: "white",
      },
    },
  },
  space: [
    ".3rem",
    "1rem",
    "1.5rem",
    "2.5rem",
    "3rem",
    "7rem",
    "8rem",
    "9rem",
    "12rem",
  ],
  fontWeights: {
    slim: 300,
    primary: 400,
    highlight: 500,
    bold: 700,
    bolder: 900,
  },
  letterSpacings: [
    "clamp(.1rem, .5vw, .22684rem)",
    ".34288rem",
    "clamp(.3rem, .5vw, .5rem)",
    "clamp(.6rem, 1.4vw, 2.5rem)",
  ],
  fontSizes: [
    "clamp(1.3rem, 3vw, 3rem)",
    "clamp(3.2rem, 13.7vw, 16rem)",
    "clamp(.9rem, 3vw, 1.6rem)",
    "clamp(1.4rem, 3vw, 1.8rem)",
    "clamp(2.4rem, 4vw, 4.8rem)",
    "clamp(1.8rem, 2.734379vw, 3rem)",
    "clamp(1.1rem, 2vw, 1.4rem)",
    "clamp(1.2rem, 2vw, 1.3rem)",
    "clamp(1.2rem, 2vw, 1.6rem)",
    // "clamp(.9rem, 1.5vw, 1.6rem)",
    // "clamp(1rem, 1.5vw, 1.3rem)",
    // "clamp(1rem, 3vw, 1.4rem)",
    // "clamp(1.2rem, 3vw, 1.6rem)",
    // "clamp(1.2rem, 3vw, 3rem)",
    // "clamp(1.2rem, 3vw, 3rem)",
    // "clamp(1.4rem, 3vw, 1.8rem)",
    // "clamp(1.6rem, 1.3vw, 1.8rem)",
    // "clamp(1.8rem, 3vw, 3rem)",
    // "clamp(2.4rem, 3vw, 4.8rem)",
    // "clamp(3rem, 3vw, 5.4rem)",
    // "clamp(5rem, 14vw, 16rem)",
  ],
  fonts: {
    body: "Poppins, Helvetica Neue, Helvetica, Arial, sans-serif",
    heading: "Josefin Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
  },

  buttons: {
    primary: {
      display: "inline-block",
      color: "white", // use the page background color for an inverted effect
      textAlign: "center",
      fontWeight: "highlight",
      fontSize: 3,
      backgroundColor: "accent",
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1,
      paddingBottom: 1,
      marginTop: 2,
      whiteSpace: "nowrap",
      letterSpacing: 1,
      borderRadius: ".3rem",
      textTransform: "uppercase",
      width: "auto",
      maxWidth: "27rem",
      "&:hover": {
        bg: "#56459f",
        color: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      "@media only screen and (min-width: 768px)": {
        padding: 2,
      },
    },
    highlight: {
      display: "inline-block",
      color: "white", // use the page background color for an inverted effect
      textAlign: "center",
      fontWeight: "highlight",
      fontSize: 3,
      backgroundColor: "highlight",
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1,
      paddingBottom: 1,
      marginTop: 2,
      whiteSpace: "nowrap",
      letterSpacing: 1,
      borderRadius: ".3rem",
      textTransform: "uppercase",
      width: "auto",
      maxWidth: "27rem",
      "&:hover": {
        bg: "#56459f",
        color: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      "@media only screen and (min-width: 768px)": {
        padding: 2,
      },
    },
  },
  container: {
    position: "relative",
    padding: "0 2rem",
    marginTop: "auto",
    marginBottom: "auto",
    "@media screen and (min-width: 768px)": {
      padding: "0 5rem",
    },
    "@media screen and (min-width:  1024px)": {
      padding: "0 2.2rem",
    },
    "@media screen and (min-width:  1440px)": {
      padding: "0 20rem",
    },
    "@media screen and (min-width:  1920px)": {
      padding: "0 40rem",
    },
    "@media screen and (min-width:  2560px)": {
      padding: "0 70rem",
    },
  },
  text: {
    summary: {
      fontSize: 3,
      fontStyle: "italic",
      marginTop: "0px",
    },
  },
  link: {
    color: "accent",
    fontSize: "1.2rem",
  },
  caption: {
    h2: {
      marginBottom: ".5rem",
      letterSpacing: 1,
      fontWeight: "highlight",
      fontSize: 0,
      color: "white",
      textTransform: "uppercase",
      "@media screen and (min-width: 768px)": {
        marginBottom: "-2rem",
      },
    },
    h1: {
      fontSize: 1,
      fontWeight: "bolder",
      letterSpacing: 3,
      color: "white",
      textTransform: "uppercase",
      marginTop: "0px",
      marginBottom: "0rem",
    },
    p: {
      fontSize: 2,
      color: "white",
      lineHeight: 1.5,
      "@media screen and (min-width: 768px)": {
        width: "80%",
      },
      "@media screen and (min-width: 1024px)": {
        width: "60%",
        marginBottom: "8rem",
      },
      "@media screen and (min-width: 1920px)": {
        width: "50%",
      },
    },
  },
  header: {
    marginBottom: "5rem",
    "@media screen and (min-width: 768px)": {
      marginBottom: "auto",
    },
  },
  header2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header3: {
    marginBottom: "5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    columnGap: "0",
    justifyContent: "space-evenly",
    rowGap: "2rem",
    // padding: "5rem 0",
    "@media screen and (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      columnGap: "1rem",
    },
    "@media screen and (min-width:  1024px)": {
      gridTemplateColumns: "1fr  1fr  1fr",
      columnGap: "1.5rem",
    },
    col2: {
      display: "grid",
      gridTemplateColumns: "1fr",
      columnGap: "0",
      justifyContent: "space-evenly",
      rowGap: "2rem",
      padding: "0rem 0rem",
      "@media screen and (min-width: 768px)": {
        gridTemplateColumns: "1fr 1fr",
        columnGap: "1rem",
      },
    },
    col4: {
      display: "grid",
      gridTemplateColumns: "1fr",
      textAlign: "center",
      columnGap: "0",
      padding: "0rem 0rem",
      "@media screen and (min-width: 768px)": {
        gridTemplateColumns: "1fr 1fr",
        columnGap: "1rem",
      },
      "@media screen and (min-width: 1024px)": {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      },
    },
  },
  card: {
    bg: "secondary",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "40px 45px",
    // width: "100%",
    height: "clamp(150px, calc(25vw + 50px), 55rem)",
    minHeight: "25.5rem",
    maxHeight: "32rem",
    maxWidth: "35rem",
    borderRadius: "8px",
    transition: "box-shadow 0.3s ease",
    transitionDelay: "0.15s",
    overflow: "hidden",
    marginTop: "auto",
    marginBottom: "auto",
    zIndex: 1,
    "::before": {
      content: '""',
      position: "absolute",
      top: "0px",
      left: "0px",
      right: "0px",
      width: "100%",
      height: "100%",
      backgroundColor: " #fff",
      transition: "all 0.25s ease",
      transform: "translate(100%, 0)",
      zIndex: -1,
    },
    "&:hover": {
      boxShadow: "0 0.1429rem 0.6429rem 0.07143rem rgb(1 2 2 / 10%)",

      "i ~ a, i": {
        color: "accent",
      },
      "::before": {
        transform: "translate(0%)",
      },
    },
    head: {
      display: "flex",
      flexDirection: "column",
      marginTop: "auto",
      marginBottom: "0",
    },
    icon: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "2rem",
      fontSize: "4.5rem",
    },
    name: {
      fontSize: 3,
      textTransform: "uppercase",
    },
    des: {
      textAlign: "center",
      lineHeight: "2",
      margin: "auto",
    },
    link: {
      color: "text",
      fontSize: "13px",
      fontWeight: 500,
      letterSpacing: "2px",
      transition: "0.5s ease",
      margin: "auto",
      "&:hover": {
        color: "#5645FF !important",
      },
    },
  },
  gallery: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "clamp(100px, calc(25vw + 50px), 55rem)",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
    backgroundSize: "cover",
    div: {
      display: "flex",
      visibility: "hidden",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      fontSize: "3rem",
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
      transition: ".3s ease",
      opacity: 0,
      zIndex: 1,
      a: {
        padding: 1,
        margin: 1,
        color: "white",
        lineHeight: 0,
        bg: "accent",
      },
    },
    "::before": {
      content: '""',
      position: "absolute",
      top: "0px",
      left: "0px",
      right: "0px",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      opacity: 0,
      transition: "0.2s ease",
    },
    "::after": {
      content: '""',
      position: "absolute",
      top: "-74rem",
      left: "150rem",
      right: "0px",
      width: "30rem",
      height: "180rem",
      transform: "rotate(-45deg)",
      transition: ".7s ease",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    "&:hover": {
      div: {
        visibility: "visible",
        opacity: 1,
      },
      "::before": {
        opacity: 1,
      },
      "::after": {
        left: "-100rem",
      },
    },
    "@media screen and (min-width:  1440px)": {},
  },
  divider: {
    width: "8rem",
  },
  banner: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    padding: "7rem 0",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
    backgroundSize: "cover",
    backgroundPositionY: "3em",
    overflow: "auto",
    textAlign: "center",
    zIndex: 1,
    "::before": {
      content: '""',
      position: "absolute",
      top: "0px",
      left: "0px",
      right: "0px",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: -1,
    },
    "h3, h2, p": {
      color: "white",
      lineHeight: 1.5,
    },
    p: {
      fontSize: 8,
    },
  },
  navSection: {
    display: "block",
    padding: "0rem 1rem",
    margin: "7rem 0rem",
    textAlign: "center",
    li: {
      display: "inline-block",
      whiteSpace: "nowrap",
      a: {
        textTransform: "uppercase",
        fontSize: 6,
      },
    },
    "li:not(li:first-of-type)::before": {
      content: '"-"',
      margin: "0rem 1rem",
      display: "inline-block",
      verticalAlign: "middle",
    },
  },
  section: {
    margin: "10rem 0",
  },
  slider: {
    ".swiper-wrapper": {
      display: "flex",
    },
    ".swiper-slide": {
      display: "flex",
      // height: "100vh !important",
      minHeight: "525px",
      maxHeight: "600px",
      width: "100%",
      "&:hover": {
        ".slider__card-content": {
          transform: "translateY(-50%)",
          opacity: 1,
        },
      },
    },
    ".slider__card-content": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: "30px 30px",
      width: "100%",
      alignSelf: "flex-end",
      backgroundColor: "accent",
      transform: "translateY(200%)",
      opacity: 0,
      transition: "transform 0.3s ease, opacity 0.5s ease-in-out",
      h4: {
        fontFamily: "body",
        fontWeight: "primary",
        fontSize: 3,
      },
      h5: {
        variant: "text.summary",
        fontFamily: "body",
        fontWeight: "slim",
        fontSize: "1.4rem",
      },
    },
    ".slider__card-image": {
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
  },
});

export default {
  ...roxineTheme,
  styles: {
    ...roxineTheme.styles,
  },
};
