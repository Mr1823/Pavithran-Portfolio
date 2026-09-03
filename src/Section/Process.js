import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";

const steps = [
    { num: "01", icon: "🔍", title: "Understand the Problem", desc: "I start by getting clear on who this is for and what success actually looks like — before a line of code exists." },
    { num: "02", icon: "📋", title: "Scope and Agree", desc: "Requirements written down, timeline agreed, and for client work a proper service agreement and quotation." },
    { num: "03", icon: "🎨", title: "Design the Flow", desc: "Screens and data model sketched together, so the UI and the schema don't fight each other later." },
    { num: "04", icon: "💻", title: "Build", desc: "Ship in working slices rather than one big reveal, so problems surface early while they're still cheap to fix." },
    { num: "05", icon: "🧪", title: "Test the Hard Parts", desc: "Auth, payments, and edge cases get hammered first — those are what break in production, not the layout." },
    { num: "06", icon: "🚀", title: "Deploy and Hand Over", desc: "Deployed, documented, and walked through with the client so they can actually run it without me." },
];

const Process = () => {
    return (
        <Box component="section" id="process" sx={{ py: "6em", background: "#071739", position: "relative", overflow: "hidden" }}>
            {/* BG pattern */}
            <Box sx={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px", zIndex: 0 }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(11,94,215,0.15), transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
            <Container maxWidth={false} disableGutters sx={{ position: "relative", zIndex: 1 }}>
                <SectionHeading
                    badge="How I Work"
                    value1="My Development"
                    value2="Process"
                    subtitle="The process I follow on client work — shaped by actually having to hand projects over to non-technical owners."
                />
                <Box sx={{ position: "relative" }}>
                    {/* Vertical connecting line */}
                    <Box sx={{ position: "absolute", left: { md: "calc(50% - 1px)", xxs: "28px" }, top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #0B5ED7, #38BDF8, #0B5ED7)", zIndex: 0 }} />
                    {steps.map((step, i) => {
                        const isRight = i % 2 === 0;
                        return (
                            <motion.div key={i} initial={{ opacity: 0, x: isRight ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                                <Grid container sx={{ mb: "2.5em", alignItems: "center" }}>
                                    <Grid size={{ xxs: 10, md: 5 }} sx={{ textAlign: { md: isRight ? "right" : "left", xxs: "left" }, order: { md: isRight ? 1 : 3, xxs: 2 }, pl: { md: isRight ? 0 : "2em", xxs: "3.5em" }, pr: { md: isRight ? "2em" : 0 } }}>
                                        <Box sx={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(56,189,248,0.15)", borderRadius: "20px", p: "1.8em", backdropFilter: "blur(10px)", "&:hover": { background: "rgba(255,255,255,0.08)", boxShadow: "0 8px 32px rgba(11,94,215,0.2)" }, transition: "all 0.3s ease" }}>
                                            <Box sx={{ fontSize: "1.8rem", mb: "0.5em" }}>{step.icon}</Box>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", mb: "0.5em" }}>{step.title}</Typography>
                                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7 }}>{step.desc}</Typography>
                                        </Box>
                                    </Grid>
                                    {/* Center dot */}
                                    <Grid size={{ xxs: 2, md: 2 }} sx={{ display: "flex", justifyContent: "center", order: 2, zIndex: 1 }}>
                                        <Box sx={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #0B5ED7, #38BDF8)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(56,189,248,0.4)", flexShrink: 0 }}>
                                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 800, fontSize: "0.8rem", color: "#fff" }}>{step.num}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ md: 5 }} sx={{ order: { md: isRight ? 3 : 1, xxs: 0 }, display: { md: "block", xxs: "none" } }} />
                                </Grid>
                            </motion.div>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};
export default Process;
