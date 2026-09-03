import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";
import VerifiedIcon from "@mui/icons-material/Verified";
import { awards, certifications } from "Data/Achievements.data";

const Achievements = () => {
    return (
        <Box component="section" id="achievements" sx={{ py: "6em", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(56,189,248,0.06), transparent 70%)", pointerEvents: "none" }} />
            <Container maxWidth={false} disableGutters>
                <SectionHeading
                    badge="Recognition"
                    value1="Awards &"
                    value2="Certifications"
                    subtitle="Contests I've placed in and the coursework I've completed along the way."
                />
                <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
                    {/* Awards */}
                    <Grid size={{ xxs: 12, md: 7 }}>
                        {awards.map((a, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "1.3em",
                                        background: "#F8FBFF",
                                        borderRadius: "20px",
                                        p: { md: "1.9em", xxs: "1.4em" },
                                        border: "1px solid rgba(11,94,215,0.08)",
                                        mb: "1.2em",
                                        transition: "all 0.3s ease",
                                        "&:hover": { boxShadow: "0 14px 44px rgba(11,94,215,0.12)", transform: "translateY(-4px)", background: "#FFFFFF" },
                                    }}
                                >
                                    <Box sx={{ fontSize: "2rem", lineHeight: 1, flexShrink: 0 }}>{a.icon}</Box>
                                    <Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.7em", flexWrap: "wrap", mb: "0.35em" }}>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111827" }}>
                                                {a.title}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#0B5ED7", background: "#E8F0FE", px: "0.7em", py: "0.25em", borderRadius: "6px" }}>
                                                {a.year}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.86rem", color: "#0B5ED7", mb: "0.6em" }}>
                                            {a.org}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.87rem", color: "#6B7280", lineHeight: 1.7 }}>
                                            {a.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Grid>

                    {/* Certifications */}
                    <Grid size={{ xxs: 12, md: 5 }}>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ height: "100%" }}>
                            <Box
                                sx={{
                                    background: "linear-gradient(135deg, #071739 0%, #0B1A3A 100%)",
                                    borderRadius: "24px",
                                    p: { md: "2.2em", xxs: "1.7em" },
                                    height: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <Box sx={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", background: "radial-gradient(ellipse, rgba(56,189,248,0.18), transparent 70%)", pointerEvents: "none" }} />
                                <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#FFFFFF", mb: "1.4em", position: "relative" }}>
                                    Certifications
                                </Typography>
                                {certifications.map((c, i) => (
                                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: "0.8em", mb: "1.2em", position: "relative" }}>
                                        <VerifiedIcon sx={{ color: "#38BDF8", fontSize: "1.1rem", mt: "0.15em", flexShrink: 0 }} />
                                        <Box>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.88rem", color: "#FFFFFF", lineHeight: 1.5 }}>
                                                {c.name}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", mt: "0.15em" }}>
                                                {c.issuer}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Achievements;
