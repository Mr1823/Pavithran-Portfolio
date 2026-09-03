import { useState, useEffect } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import profile from "Data/Profile.data";

const typingWords = ["Web Apps", "Android Apps", "E-Commerce Platforms", "AI-Powered Tools"];

const stats = profile.stats;

const HeroContent = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = typingWords[wordIndex];
        let timeout;
        if (!isDeleting && displayed.length < word.length) {
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
        } else if (!isDeleting && displayed.length === word.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        } else if (isDeleting && displayed.length === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % typingWords.length);
            }, 350);
        }
        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, wordIndex]);

    return (
        <Box sx={{ maxWidth: { lg: "580px", md: "520px", xxs: "100%" }, position: "relative", zIndex: 2 }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5em",
                        background: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        borderRadius: "50px",
                        px: "1.2em",
                        py: "0.45em",
                        mb: "1.5em",
                    }}
                >
                    <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", background: "#38BDF8", animation: "pulse 2s infinite" }} />
                    <Typography sx={{ color: "#38BDF8", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.05em" }}>
                        {profile.availability}
                    </Typography>
                </Box>
            </motion.div>

            {/* Name + role */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
                <Typography
                    sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: { md: "1rem", xxs: "0.9rem" },
                        mb: "0.35em",
                    }}
                >
                    Hi, I&apos;m
                </Typography>
                <Typography
                    component="h1"
                    sx={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 800,
                        fontSize: { lg: "3.1rem", md: "2.6rem", sm: "2.3rem", xxs: "1.95rem" },
                        color: "#FFFFFF",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                    }}
                >
                    {profile.name}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: { md: "1.05rem", xxs: "0.92rem" },
                        background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        mt: "0.4em",
                        mb: "1.1em",
                    }}
                >
                    {profile.title} &nbsp;·&nbsp; {profile.subtitle}
                </Typography>
            </motion.div>

            {/* Main Heading */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                <Typography
                    component="p"
                    sx={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 700,
                        fontSize: { lg: "2.1rem", md: "1.85rem", sm: "1.7rem", xxs: "1.45rem" },
                        color: "rgba(255,255,255,0.92)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.02em",
                        mb: "0.7em",
                    }}
                >
                    I Build{" "}
                    <Box
                        component="span"
                        sx={{
                            background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {displayed}
                        <Box component="span" sx={{ WebkitTextFillColor: "#38BDF8", animation: "blink 1s infinite" }}>|</Box>
                    </Box>
                    <br />
                    That Ship to Real Users
                </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <Typography
                    sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        color: "rgba(255,255,255,0.7)",
                        fontSize: { md: "1.05rem", xxs: "0.95rem" },
                        lineHeight: 1.75,
                        mb: "2.2em",
                        maxWidth: "480px",
                    }}
                >
                    {profile.tagline}
                </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                <Box sx={{ display: "flex", gap: "1em", flexWrap: "wrap", mb: "3em" }}>
                    <Link to="portfolio" spy smooth duration={500} offset={-80}>
                        <ButtonBase
                            sx={{
                                background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                                color: "#fff",
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                px: "2em",
                                py: "0.85em",
                                borderRadius: "50px",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5em",
                                boxShadow: "0 8px 30px rgba(11, 94, 215, 0.5)",
                                transition: "all 0.3s ease",
                                "&:hover": { boxShadow: "0 12px 40px rgba(11, 94, 215, 0.7)", transform: "translateY(-3px)" },
                            }}
                        >
                            View My Work <ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />
                        </ButtonBase>
                    </Link>
                    <ButtonBase
                        component="a"
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "#fff",
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            px: "2em",
                            py: "0.85em",
                            borderRadius: "50px",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5em",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                            "&:hover": { background: "rgba(255,255,255,0.15)", transform: "translateY(-3px)" },
                        }}
                    >
                        <DescriptionIcon sx={{ fontSize: "1.05rem" }} /> Resume
                    </ButtonBase>
                </Box>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
                <Box sx={{ display: "flex", gap: { md: "2.5em", xxs: "1.5em" }, flexWrap: "wrap" }}>
                    {stats.map((stat, i) => (
                        <Box key={i} sx={{ position: "relative" }}>
                            {i > 0 && (
                                <Box sx={{ position: "absolute", left: "-1.25em", top: "50%", transform: "translateY(-50%)", width: "1px", height: "40px", background: "rgba(255,255,255,0.15)", display: { xxs: "none", sm: "block" } }} />
                            )}
                            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 800, fontSize: { md: "2rem", xxs: "1.6rem" }, color: "#FFFFFF", lineHeight: 1 }}>
                                {stat.number}
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", mt: "0.3em" }}>
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
};
export default HeroContent;
