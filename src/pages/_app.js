import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { CacheProvider } from "@emotion/react";
import { Inter, Poppins } from "next/font/google";
import theme from "Theme";
import createEmotionCache from "Emotion";

const clientSideEmotionCache = createEmotionCache();

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* Define the font variables on :root so MUI portals
                    (Drawer, Modal, Tooltip) inherit them too - they render
                    outside the React tree, so a wrapper div would miss them. */}
                <GlobalStyles
                    styles={{
                        ":root": {
                            "--font-inter": inter.style.fontFamily,
                            "--font-poppins": poppins.style.fontFamily,
                        },
                        body: { fontFamily: "var(--font-inter), sans-serif" },
                    }}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
