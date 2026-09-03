import { createTheme } from '@mui/material/styles';

// BuildWithUs – Premium Blue Theme
const theme = createTheme({
    typography: {
        fontFamily: "var(--font-poppins), var(--font-inter), sans-serif",
    },
    palette: {
        text: {
            primary: "#111827",
            secondary: "#0B5ED7"
        },
        background: {
            default: "#F8FBFF"
        },
        primary: {
            main: "#0B5ED7",
            light: "#E8F0FE",
            dark: "#071739",
            accent: "#38BDF8",
            secondary: "#1E88E5",
            gradient: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
            gradientHover: "linear-gradient(135deg, #0A4FC4, #1EB5F0)",
            glowShadow: "0 0 30px rgba(11, 94, 215, 0.4)",
            glowShadowStrong: "0 0 50px rgba(56, 189, 248, 0.5)",
            cardBg: "#FFFFFF",
            glassBg: "rgba(255,255,255,0.08)",
            glassBorder: "rgba(11, 94, 215, 0.15)",
            glassBorderLight: "rgba(255,255,255,0.2)",
            boxShadow: "0 4px 32px rgba(11, 94, 215, 0.10)",
            boxShadowCard: "0 8px 40px rgba(11, 94, 215, 0.12)",
            divider: "#E0E7FF",
            social_bg: "#E8F0FE",
            social_color: "#0B5ED7",
            inputBorder: "rgba(11, 94, 215, 0.2)",
            success: "#22c55e",
            HeroGradient: "linear-gradient(135deg, #071739 0%, #0B1A3A 50%, #0A2A5E 100%)",
            WorkGradient: "linear-gradient(135deg, rgba(11,94,215,0.05), rgba(56,189,248,0.05))",
            ContactGradient: "linear-gradient(135deg, rgba(11,94,215,0.08), rgba(56,189,248,0.04))",
            darkBg: "#071739",
            navyBg: "#0B1A3A",
            box_shadow_black: "0 4px 32px rgba(7, 23, 57, 0.15)",
        }
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 360,
            sm: 480,
            msm: 576,
            lsm: 640,
            smd: 768,
            md: 992,
            lg: 1200,
            xl: 1536,
            xxl: 1980
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 0px)': {
                        paddingLeft: '4%',
                        paddingRight: '4%',
                    },
                    '@media (min-width: 480px)': {
                        paddingLeft: '4%',
                        paddingRight: '4%',
                    },
                    '@media (min-width: 992px)': {
                        paddingLeft: '4%',
                        paddingRight: '4%',
                    },
                    '@media (min-width: 1200px)': {
                        paddingLeft: '6%',
                        paddingRight: '6%',
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "var(--font-poppins), var(--font-inter), sans-serif"
                },
            },
        },
    }
});

export default theme;