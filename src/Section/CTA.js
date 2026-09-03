import { Box, Container, Typography, ButtonBase } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const CTA = () => {
    return (
        <Box component="section" id="cta" sx={{ py: "6em", background: "#F8FBFF" }}>
            <Container maxWidth={false} disableGutters>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, #071739 0%, #0B5ED7 60%, #38BDF8 100%)",
                            borderRadius: "32px",
                            p: { lg: "5em 4em", md: "4em 3em", xxs: "3em 2em" },
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: "0 40px 100px rgba(11,94,215,0.35)",
                        }}
                    >
                        {/* BG Orbs */}
                        <Box sx={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", background: "radial-gradient(ellipse, rgba(56,189,248,0.2), transparent 70%)", pointerEvents: "none" }} />
                        <Box sx={{ position: "absolute", bottom: "-60px", left: "-60px", width: "250px", height: "250px", background: "radial-gradient(ellipse, rgba(11,94,215,0.3), transparent 70%)", pointerEvents: "none" }} />

                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <Box sx={{ display: "inline-flex", alignItems: "center", gap: "0.5em", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50px", px: "1.2em", py: "0.45em", mb: "1.5em" }}>
                                <CalendarTodayIcon sx={{ fontSize: "0.9rem", color: "#38BDF8" }} />
                                <Typography sx={{ color: "#38BDF8", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.82rem" }}>Open to opportunities</Typography>
                            </Box>
                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 800, fontSize: { lg: "3rem", md: "2.4rem", xxs: "2rem" }, color: "#FFFFFF", lineHeight: 1.2, mb: "0.8em", letterSpacing: "-0.02em" }}>
                                Let&apos;s Build Something{" "}
                                <Box component="span" sx={{ background: "linear-gradient(135deg, #38BDF8, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                    Amazing?
                                </Box>
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.75)", fontSize: { md: "1.1rem", xxs: "0.95rem" }, maxWidth: "550px", mx: "auto", mb: "2.5em", lineHeight: 1.7 }}>
                                Looking for a developer who ships? I&apos;m open to internships, full-time roles, and freelance projects — let&apos;s talk.
                            </Typography>
                            <Box sx={{ display: "flex", gap: "1em", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link to="contact" spy smooth duration={500} offset={-80}>
                                    <ButtonBase sx={{ background: "#FFFFFF", color: "#0B5ED7", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1rem", px: "2.2em", py: "0.9em", borderRadius: "50px", display: "flex", alignItems: "center", gap: "0.5em", boxShadow: "0 8px 30px rgba(0,0,0,0.2)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-3px)", boxShadow: "0 14px 40px rgba(0,0,0,0.3)" } }}>
                                        Get In Touch <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
                                    </ButtonBase>
                                </Link>
                                <Link to="portfolio" spy smooth duration={500} offset={-80}>
                                    <ButtonBase sx={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "1rem", px: "2.2em", py: "0.9em", borderRadius: "50px", backdropFilter: "blur(10px)", transition: "all 0.3s ease", "&:hover": { background: "rgba(255,255,255,0.18)", transform: "translateY(-3px)" } }}>
                                        View My Work
                                    </ButtonBase>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};
export default CTA;
