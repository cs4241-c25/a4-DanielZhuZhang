import "../app/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar.jsx";

function MyApp({ Component, pageProps }) {
    return (
        <>
        <SessionProvider>
            <Navbar />
            <Component {...pageProps} />
        </SessionProvider>
        </>
    );
}

export default MyApp;
