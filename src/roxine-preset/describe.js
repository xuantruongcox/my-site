const describe = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "0rem 1rem",
        margin: '5rem 0rem',
        '@media only screen and (min-width: 768px)': {
            padding: "0rem 5rem",
        },
        '@media only screen and (min-width: 1440px)': {
            padding: "0rem 30rem",
        },
        '@media only screen and (min-width: 2560px)': {
            padding: "0rem 50rem",
        }
    },
    emphasize: {
        color: "emphasize"
    },
    title: {
        fontSize: 4,
        width: 'fit-content',
        textAlign: 'center',
    },
    content: {
        fontSize: 8,
        textAlign: 'justify',
        textAlignLast: 'center'
    }
}
export default describe;