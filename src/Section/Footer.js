import { Box, Container, Grid, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import profile from "Data/Profile.data";

const navLinks = [
    { name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Skills", id: "services" },
    { name: "Projects", id: "portfolio" }, { name: "Experience", id: "experience" }, { name: "Contact", id: "contact" },
];
const focusAreas = ["Full Stack Web Development", "Android & Flutter Apps", "E-Commerce Platforms", "Auth & Backend Systems", "AI-Powered Features", "Computer Vision"];
const socials = [
    { icon: <GitHubIcon />, href: profile.socials.github, label: "GitHub" },
    { icon: <LinkedInIcon />, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: <WhatsAppIcon />, href: profile.socials.whatsapp, label: "WhatsApp" },
    { icon: <EmailIcon />, href: profile.socials.email, label: "Email" },
    { icon: <LanguageIcon />, href: profile.socials.website, label: "BuildWithUs" },
];

const Footer = () => {
    return (
        <Box component="footer" sx={{ background: "#071739", pt: "5em", position: "relative", overflow: "hidden" }}>
            {/* BG grid */}
            <Box sx={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(11,94,215,0.1), transparent 70%)", zIndex: 0 }} />
            <Container maxWidth={false} disableGutters sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={{ lg: 6, md: 5, xxs: 5 }} sx={{ pb: "4em" }}>
                    {/* Company */}
                    <Grid size={{ xxs: 12, sm: 6, md: 4, lg: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "1.2em" }}>
                            <Box
                                sx={{
                                    width: "42px", height: "42px", borderRadius: "12px",
                                    background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontFamily: "var(--font-poppins), sans-serif", fontWeight: 800,
                                    fontSize: "1rem", color: "#fff", flexShrink: 0,
                                    boxShadow: "0 4px 16px rgba(56,189,248,0.3)",
                                }}
                            >
                                {profile.initials}
                            </Box>
                            <Box>
                                <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                                    {profile.name}
                                </Typography>
                                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.76rem", color: "#38BDF8" }}>
                                    {profile.title}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8, mb: "1.8em" }}>
                            {profile.tagline}
                        </Typography>
                        <Box sx={{ display: "flex", gap: "0.6em" }}>
                            {socials.map((s, i) => (
                                <ButtonBase key={i} component="a" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} sx={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", p: "0.6em", color: "rgba(255,255,255,0.6)", transition: "all 0.25s ease", "&:hover": { background: "linear-gradient(135deg, #0B5ED7, #38BDF8)", color: "#fff", transform: "translateY(-3px)", boxShadow: "0 6px 20px rgba(11,94,215,0.4)" } }}>
                                    {s.icon}
                                </ButtonBase>
                            ))}
                        </Box>
                    </Grid>
                    {/* Quick Links */}
                    <Grid size={{ xxs: 6, sm: 6, md: 2, lg: 2 }}>
                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", mb: "1.2em", letterSpacing: "0.05em" }}>Quick Links</Typography>
                        {navLinks.map((link, i) => (
                            <Link key={i} to={link.id} spy smooth duration={500} offset={-80} style={{ cursor: "pointer" }}>
                                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", mb: "0.6em", transition: "all 0.2s", "&:hover": { color: "#38BDF8", pl: "4px" } }}>
                                    {link.name}
                                </Typography>
                            </Link>
                        ))}
                    </Grid>
                    {/* Services */}
                    <Grid size={{ xxs: 6, sm: 6, md: 3, lg: 3 }}>
                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", mb: "1.2em" }}>What I Do</Typography>
                        {focusAreas.map((s, i) => (
                            <Typography key={i} sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", mb: "0.6em", transition: "all 0.2s", cursor: "default", "&:hover": { color: "#38BDF8" } }}>{s}</Typography>
                        ))}
                    </Grid>
                    {/* Contact */}
                    <Grid size={{ xxs: 12, sm: 6, md: 3, lg: 3 }}>
                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", mb: "1.2em" }}>Get In Touch</Typography>
                        <Typography component="a" href={profile.socials.email} sx={{ display: "block", fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", mb: "0.5em", textDecoration: "none", "&:hover": { color: "#38BDF8" } }}>{profile.email}</Typography>
                        <Typography component="a" href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer" sx={{ display: "block", fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", mb: "0.4em", textDecoration: "none", "&:hover": { color: "#38BDF8" } }}>{profile.phone}</Typography>
                        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", mb: "1.5em" }}>{profile.location}</Typography>
                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#FFFFFF", mb: "0.8em" }}>Resume</Typography>
                        <ButtonBase
                            component="a"
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                                color: "#fff",
                                borderRadius: "10px",
                                px: "1.4em",
                                py: "0.7em",
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontWeight: 600,
                                fontSize: "0.83rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5em",
                                transition: "all 0.3s ease",
                                "&:hover": { boxShadow: "0 6px 22px rgba(11,94,215,0.45)", transform: "translateY(-2px)" },
                            }}
                        >
                            <DescriptionIcon sx={{ fontSize: "1rem" }} /> Download CV
                        </ButtonBase>
                    </Grid>
                </Grid>
                {/* Bottom */}
                <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.06)", py: "1.5em", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1em" }}>
                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.85rem" }}>
                        © {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </Typography>
                    <Box sx={{ display: "flex", gap: "1.5em" }}>
                        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
                            Built with Next.js &amp; MUI
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
export default Footer;
