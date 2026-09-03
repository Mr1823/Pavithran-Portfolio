import { useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";
import Bar from "Components/Header/Bar";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <Box
            component="header"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "all 0.35s ease",
                background: scrolled ? "rgba(248, 251, 255, 0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(11, 94, 215, 0.1)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 30px rgba(11, 94, 215, 0.06)" : "none",
            }}
        >
            <Container maxWidth={false} disableGutters>
                <Grid container sx={{ alignItems: "center", py: { md: "1em", xxs: "0.75em" } }}>
                    <Grid size={{ xxs: 6, md: 3 }}>
                        <Logo scrolled={scrolled} />
                    </Grid>
                    <Grid size={{ md: 6 }} sx={{ display: { md: "block", xxs: "none" } }}>
                        <Nav scrolled={scrolled} />
                    </Grid>
                    <Grid size={{ xxs: 6, md: 3 }}>
                        <Bar scrolled={scrolled} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Header;
