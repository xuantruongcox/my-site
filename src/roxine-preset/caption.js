const caption = {
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
  }
export default caption;