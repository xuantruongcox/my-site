const navbar = {
    position: 'fixed',
    top: '0rem',
    right: '0rem',
    left: '0rem',
    padding: "2rem .5rem",
    transition: '.3s ease',
    zIndex: 99999,
    wrapper: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        "> div": {
            marginTop: 'auto',
            marginBottom: 'auto',
        },

    },
    leftBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media only screen and (min-width: 1024px)': {
            display: 'block'
        }
    },
    rightBlock: {
        '@media only screen and (min-width: 1024px)': {
            display: 'flex',
            alignItems: 'center'
        }
    },
    toggler: {
        position: 'relative',
        zIndex: 1,
        '@media only screen and (min-width: 1024px)': {
            display: 'none'
        }
    },
    logo: {
        display: 'block',
        position: "absolute",
        // width: 'auto',
        left: '0%',
        lineHeight: 0,
        transform: 'translateX(100%)',
        '@media only screen and (min-width: 375px)': {
            transform: 'translateX(120%)',

        },
        '@media only screen and (min-width: 425px)': {
            transform: 'translateX(150%)',

        },
        '@media only screen and (min-width: 768px)': {
            transform: 'translateX(300%)',

        },
        '@media only screen and (min-width: 1024px)': {
            position: 'static',
            transform: 'unset',
            padding: '2.5rem 2rem'
        },
    },
    extraMenu: {
        display: 'flex',
        "button": {
            position: 'relative',
            i: {
                fontSize: '1.4rem'
            },
            '@media only screen and (min-width: 1024px)': {
                padding: "2.5rem 2rem"
            }
        }
    },
    menuWrapper: {
        position: 'absolute',
        top: '100%',
        left: '0%',
        right: '0%',
        bg: "white",
        height: 'fit-content',
        maxHeight: '0rem',
        overflow: 'hidden',
        transition: ".4s ease-in-out",
        zIndex: 99,
        menu: {
            item: {
                link: {
                    color: 'text',
                    display: 'block',
                    padding: '1rem 2rem',
                    fontSize: "1.2rem",
                    '@media only screen and (min-width: 1024px)': {
                        padding: '2.5rem 2rem',
                    },
                    '@media only screen and (min-width: 2560px)': {
                        padding: '4rem 2rem',
                    }
                }
            },
            '@media only screen and (min-width: 1024px)': {
                display: 'flex',
                margin: '0rem',

            }
        },

        '@media only screen and (min-width: 1024px)': {
            position: 'static',
            maxHeight: '100%',
            bg: 'transparent'
            
        },
    },
    '@media only screen and (min-width: 1024px)': {
        padding: '0rem 3rem',
    }
}

export default navbar;