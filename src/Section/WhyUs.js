import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";

const features = [
    { icon: "📦", title: "I Ship, Not Just Prototype", desc: "Every project here went to a real user or a paying client — with payments, auth, and edge cases handled, not just a happy-path demo." },
    { icon: "🔐", title: "Security Done Properly", desc: "Custom JWT auth with bcrypt and refresh-token rotation, and payments verified server-side. I don't trust the client for anything that matters." },
    { icon: "🤝", title: "I Own the Whole Lifecycle", desc: "From the first client conversation through requirements, build, QA, and handover — including the agreements and invoicing." },
    { icon: "🌐", title: "Web and Mobile", desc: "MERN on the web, Flutter and native Java on Android. I pick the stack that fits the problem instead of forcing one." },
    { icon: "🧠", title: "Comfortable With AI Tooling", desc: "I build LLM-backed features in production — with Claude and with local models through Ollama when data can't leave the machine." },
    { icon: "📚", title: "Still Learning, Fast", desc: "Third-year undergrad running a studio and an internship at the same time. I pick things up quickly because I have had to." },
];

const WhyUs = () => {
    return (
        <Box component="section" id="why-us" sx={{ py: "6em", background: "#F8FBFF", position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(11,94,215,0.05), transparent 70%)", pointerEvents: "none" }} />
            <Container maxWidth={false} disableGutters>
                <SectionHeading badge="Why Me" value1="Why Work" value2="With Me?" subtitle="What I bring to a team — and what tends to surprise people about a student developer." />
                <Grid container spacing={3}>
                    {features.map((f, i) => (
                        <Grid size={{ xxs: 12, sm: 6, md: 4, lg: 4 }} key={i}>
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                                <Box
                                    sx={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                        p: "2em",
                                        border: "1px solid rgba(11,94,215,0.08)",
                                        boxShadow: "0 4px 24px rgba(11,94,215,0.06)",
                                        height: "100%",
                                        transition: "all 0.3s ease",
                                        "&:hover": { boxShadow: "0 16px 48px rgba(11,94,215,0.14)", transform: "translateY(-6px)" },
                                    }}
                                >
                                    <Box sx={{ fontSize: "2.2rem", mb: "1em" }}>{f.icon}</Box>
                                    <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#111827", mb: "0.5em" }}>{f.title}</Typography>
                                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
export default WhyUs;
