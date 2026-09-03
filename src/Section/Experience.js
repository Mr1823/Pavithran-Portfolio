import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";
import { experience } from "Data/Experience.data";

const Experience = () => {
    return (
        <Box component="section" id="experience" sx={{ py: "6em", background: "#F8FBFF", position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", top: "10%", right: 0, width: "420px", height: "420px", background: "radial-gradient(ellipse, rgba(11,94,215,0.06), transparent 70%)", pointerEvents: "none" }} />
            <Container maxWidth={false} disableGutters>
                <SectionHeading
                    badge="Experience"
                    value1="Where I've"
                    value2="Worked"
                    subtitle="Internships and the freelance studio I founded — the places this work actually shipped from."
                />
                <Box sx={{ maxWidth: "900px", mx: "auto", position: "relative", pl: { md: "3em", xxs: "1.6em" } }}>
                    {/* Timeline spine */}
                    <Box sx={{ position: "absolute", left: { md: "1.5em", xxs: "0.75em" }, top: "0.8em", bottom: "0.8em", width: "2px", background: "linear-gradient(to bottom, #0B5ED7, #38BDF8, rgba(56,189,248,0.15))" }} />

                    {experience.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: i * 0.12 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ position: "relative", mb: "2em" }}>
                                {/* Dot */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: { md: "-2.32em", xxs: "-1.16em" },
                                        top: "1.6em",
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                                        boxShadow: "0 0 0 4px rgba(11,94,215,0.15)",
                                        zIndex: 1,
                                    }}
                                />
                                <Box
                                    sx={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                        p: { md: "2em", xxs: "1.5em" },
                                        border: "1px solid rgba(11,94,215,0.08)",
                                        boxShadow: "0 4px 24px rgba(11,94,215,0.06)",
                                        transition: "all 0.3s ease",
                                        "&:hover": { boxShadow: "0 14px 44px rgba(11,94,215,0.13)", transform: "translateY(-4px)" },
                                    }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.8em", mb: "0.4em" }}>
                                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.08rem", color: "#111827" }}>
                                            {job.role}
                                        </Typography>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
                                            {job.current && (
                                                <Box sx={{ display: "inline-flex", alignItems: "center", gap: "0.4em", background: "rgba(34,197,94,0.1)", color: "#16A34A", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.7rem", px: "0.7em", py: "0.3em", borderRadius: "6px" }}>
                                                    <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16A34A", animation: "pulse 2s infinite" }} />
                                                    Current
                                                </Box>
                                            )}
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "#0B5ED7", background: "#E8F0FE", px: "0.85em", py: "0.35em", borderRadius: "6px", whiteSpace: "nowrap" }}>
                                                {job.period}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "0.92rem", color: "#0B5ED7", mb: "0.25em" }}>
                                        {job.org}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", color: "#9CA3AF", mb: "1.2em" }}>
                                        {job.location}
                                    </Typography>

                                    <Box component="ul" sx={{ m: 0, pl: "1.15em", mb: job.techs ? "1.4em" : 0 }}>
                                        {job.points.map((pt, pi) => (
                                            <Box
                                                component="li"
                                                key={pi}
                                                sx={{
                                                    fontFamily: "var(--font-inter), sans-serif",
                                                    color: "#6B7280",
                                                    fontSize: "0.89rem",
                                                    lineHeight: 1.75,
                                                    mb: "0.6em",
                                                    "&::marker": { color: "#38BDF8" },
                                                }}
                                            >
                                                {pt}
                                            </Box>
                                        ))}
                                    </Box>

                                    {job.techs && (
                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.45em" }}>
                                            {job.techs.map((t, ti) => (
                                                <Chip
                                                    key={ti}
                                                    label={t}
                                                    size="small"
                                                    sx={{ background: "#F8FBFF", color: "#374151", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.72rem", border: "1px solid rgba(11,94,215,0.12)" }}
                                                />
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};
export default Experience;
