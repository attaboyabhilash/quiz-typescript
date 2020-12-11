import APIContextProvider from "../src/contexts/APIContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <APIContextProvider>
            <Component {...pageProps} />
        </APIContextProvider>
    )
}

export default MyApp
