import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";
import Form from "Components/Contact/Form";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import profile from "Data/Profile.data";

const contactInfo = [
    { icon: <EmailIcon sx={{ color: "#0B5ED7" }} />, label: "Email", value: profile.email, href: profile.socials.email },
    { icon: <WhatsAppIcon sx={{ color: "#0B5ED7" }} />, label: "WhatsApp", value: profile.phone, href: profile.socials.whatsapp },
    { icon: <LocationOnIcon sx={{ color: "#0B5ED7" }} />, label: "Location", value: profile.location, href: null },
];

const Contact = () => {
    return (
        <Box component="section" id="contact" sx={{ py: "6em", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(11,94,215,0.05), transparent 70%)", pointerEvents: "none" }} />
            <Container maxWidth={false} disableGutters>
                <SectionHeading badge="Contact" value1="Let's Build Something" value2="Together" subtitle="Hiring, freelance work, or just want to talk shop — my inbox is open." />
                <Grid container spacing={{ lg: 6, md: 5, xxs: 4 }} sx={{ alignItems: "flex-start" }}>
                    {/* Left: Info */}
                    <Grid size={{ xxs: 12, md: 4 }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "1rem", lineHeight: 1.8, mb: "2em" }}>
                                Whether it&apos;s a role, a project, or a question — send it across and I&apos;ll get back to you within a day.
                            </Typography>
                            {contactInfo.map((info, i) => (
                                <Box
                                    key={i}
                                    component={info.href ? "a" : "div"}
                                    href={info.href || undefined}
                                    target={info.href && info.href.startsWith("http") ? "_blank" : undefined}
                                    rel={info.href && info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    sx={{
                                        display: "flex", alignItems: "flex-start", gap: "1em", mb: "1.5em",
                                        textDecoration: "none",
                                        ...(info.href && { "&:hover .contact-value": { color: "#0B5ED7" } }),
                                    }}
                                >
                                    <Box sx={{ background: "#E8F0FE", borderRadius: "12px", p: "0.7em", flexShrink: 0, display: "flex" }}>{info.icon}</Box>
                                    <Box>
                                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#374151" }}>{info.label}</Typography>
                                        <Typography className="contact-value" sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9rem", color: "#6B7280", transition: "color 0.2s" }}>{info.value}</Typography>
                                    </Box>
                                </Box>
                            ))}
                            {/* Map placeholder */}
                            <Box sx={{ mt: "2em", background: "linear-gradient(135deg, #E8F0FE, #DBEAFE)", borderRadius: "20px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(11,94,215,0.1)", overflow: "hidden" }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <LocationOnIcon sx={{ fontSize: "2.5rem", color: "#0B5ED7", mb: "0.3em" }} />
                                    <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, color: "#0B5ED7", fontSize: "0.9rem" }}>{profile.location}</Typography>
                                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "0.8rem" }}>Open to remote &amp; on-site</Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                    {/* Right: Form */}
                    <Grid size={{ xxs: 12, md: 8 }}>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                            <Form />
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Contact;
