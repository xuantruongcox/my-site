const sidebar = {
    menu: {
        position: 'fixed',
        bg: 'white',
        top: '0rem',
        height: '100vh',
        width: '100vw',
        transition: '.3s ease-in-out',
        overflowY: "auto",
        zIndex: 999,
        
        closeButton: {
            // textAlign: 'center',
            button: {
                color: 'primary',
                letterSpacing: '0',
                width: '100%',
                // alignItems: 'center',
                lineHeight: 1.5,
                gap: '1rem',
                padding: '2rem'
            }
        },
        a: {
            display: 'block',
            fontSize: '1.4rem',
            color: 'primary',
            padding: '2rem 1rem',
        },
        topBlock: {
            display: 'flex',
            flexDirection: 'column',
            social: {
                width: 'fit-content',
                padding: '2rem 1rem',
                '>a': {
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '.4rem',
                    padding: '0rem 2rem',
                    margin: '1rem 0rem',
                    gap: '1rem',
                    '*': {
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        fontSize: '1.2rem',
                    },
                    i: {
                        width: '1rem'
                    }
                },
                fb: {
                    bg: "#3B5998",
                },
                google: {
                    bg: '#DD4B39'

                }
            }
        },
        middleBlock: {
            display: 'grid',
            gridTemplateColumns: '1fr',
        },
        bottomBlock: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            gap: '1rem',
            padding: '2rem 1rem',
             a: {
                boxShadow: '0 2px 8px rgb(0 0 0 / 13%)',
                padding: '1.5rem',
                width: 'fit-content',
                lineHeight: 0,
                i: {
                    fontSize: '1.8rem',
                }
            }
        },
        '@media only screen and (min-width: 768px)': {
            width: '50vw'
        },
        '@media only screen and (min-width: 1440px)': {
            width: '20vw'
        },

    }
}
export default sidebar;