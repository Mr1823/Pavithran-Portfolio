import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";
import profile from "Data/Profile.data";
import { education } from "Data/Experience.data";

const About = () => {
    return (
        <Box component="section" id="about" sx={{ py: "6em", background: "#FFFFFF", position: "relative" }}>
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "350px", height: "350px", background: "radial-gradient(ellipse, rgba(56,189,248,0.06), transparent 70%)", pointerEvents: "none" }} />
            <Container maxWidth={false} disableGutters>
                <SectionHeading
                    badge="About Me"
                    value1="A Bit About"
                    value2="Me"
                    subtitle="Third-year AI & Data Science undergraduate who ships production software for real clients — not just coursework."
                />
                <Grid container spacing={{ lg: 8, md: 6, xxs: 4 }} sx={{ alignItems: "flex-start" }}>
                    {/* Left: Story */}
                    <Grid size={{ xxs: 12, md: 6 }}>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "1rem", lineHeight: 1.85, mb: "1.4em" }}>
                                I&apos;m <Box component="span" sx={{ color: "#0B5ED7", fontWeight: 600 }}>{profile.name}</Box>, a third-year B.Tech student in Artificial Intelligence &amp; Data Science at Kamaraj College of Engineering and Technology, Virudhunagar.
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "1rem", lineHeight: 1.85, mb: "1.4em" }}>
                                Alongside my degree I run <Box component="span" sx={{ color: "#0B5ED7", fontWeight: 600 }}>BuildWithUs</Box>, a Udyam-registered freelance studio I founded with three teammates. We take on paid web and mobile work for retail clients — and I own the whole lifecycle, from the first client conversation through requirements, build, QA, and handover.
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "1rem", lineHeight: 1.85, mb: "2em" }}>
                                I&apos;m currently an AI Product Engineering intern at <Box component="span" sx={{ color: "#0B5ED7", fontWeight: 600 }}>Straw Labs</Box>, building the intelligence layer of a B2B sentiment monitoring platform. Most of my work lives across the MERN stack, Flutter, and native Android — and I like the parts other people skip: auth done properly, payments verified server-side, edge cases handled.
                            </Typography>
                            {/* Quick facts */}
                            <Grid container spacing={2}>
                                {profile.quickFacts.map((s, i) => (
                                    <Grid size={{ xxs: 6 }} key={i}>
                                        <Box sx={{ background: "#F8FBFF", borderRadius: "16px", p: "1.4em 1em", border: "1px solid rgba(11,94,215,0.08)", textAlign: "center", height: "100%" }}>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 800, fontSize: "1.7rem", background: "linear-gradient(135deg, #0B5ED7, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                                {s.n}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "0.8rem", mt: "0.3em" }}>
                                                {s.l}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    </Grid>

                    {/* Right: Education */}
                    <Grid size={{ xxs: 12, md: 6 }}>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#111827", mb: "1.5em" }}>
                                Education
                            </Typography>
                        </motion.div>
                        <Box sx={{ position: "relative", pl: { md: "3em", xxs: "1.5em" } }}>
                            <Box sx={{ position: "absolute", left: { md: "1.5em", xxs: "0.7em" }, top: "1em", bottom: "1em", width: "2px", background: "linear-gradient(to bottom, #0B5ED7, #38BDF8)" }} />
                            {education.map((item, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }}>
                                    <Box sx={{ display: "flex", gap: "1.5em", mb: "1.6em", position: "relative" }}>
                                        <Box sx={{ position: "absolute", left: { md: "-2.3em", xxs: "-1.1em" }, top: "1em", width: "14px", height: "14px", borderRadius: "50%", background: "linear-gradient(135deg, #0B5ED7, #38BDF8)", flexShrink: 0, boxShadow: "0 0 0 4px rgba(11,94,215,0.15)" }} />
                                        <Box sx={{ background: "#FFFFFF", borderRadius: "16px", p: "1.5em 1.8em", border: "1px solid rgba(11,94,215,0.08)", boxShadow: "0 4px 24px rgba(11,94,215,0.06)", flex: 1, "&:hover": { boxShadow: "0 8px 32px rgba(11,94,215,0.12)", transform: "translateX(4px)" }, transition: "all 0.3s ease" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "0.6em", flexWrap: "wrap", mb: "0.7em" }}>
                                                <Box sx={{ display: "inline-block", background: "#E8F0FE", color: "#0B5ED7", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "0.72rem", px: "0.8em", py: "0.3em", borderRadius: "6px" }}>
                                                    {item.period}
                                                </Box>
                                                {item.current && (
                                                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: "0.4em", background: "rgba(34,197,94,0.1)", color: "#16A34A", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.7rem", px: "0.7em", py: "0.3em", borderRadius: "6px" }}>
                                                        <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16A34A", animation: "pulse 2s infinite" }} />
                                                        Ongoing
                                                    </Box>
                                                )}
                                            </Box>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "0.98rem", color: "#111827", mb: "0.3em" }}>
                                                {item.degree}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "0.87rem", lineHeight: 1.6, mb: "0.5em" }}>
                                                {item.org}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#374151", fontSize: "0.85rem", fontWeight: 500 }}>
                                                {item.detail}
                                            </Typography>
                                            {item.note && (
                                                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#0B5ED7", fontSize: "0.82rem", mt: "0.5em", fontWeight: 500 }}>
                                                    ★ {item.note}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default About;
