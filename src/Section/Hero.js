import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroContent from "Components/Hero/HeroContent";
import HeroMockup from "Assets/hero/hero-mockup.png";

const FloatingShape = ({ size, color, top, left, right, delay, duration }) => (
    <motion.div
        style={{
            position: "absolute", top, left, right,
            width: size, height: size,
            borderRadius: "50%",
            background: color,
            filter: "blur(60px)",
            zIndex: 0,
        }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: duration || 8, repeat: Infinity, delay: delay || 0, ease: "easeInOut" }}
    />
);

const Hero = () => {
    return (
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #071739 0%, #0B1A3A 55%, #0A2A5E 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                pt: { md: "5em", xxs: "7em" },
                pb: { md: "3em", xxs: "4em" },
            }}
        >
            {/* Animated background grid */}
            <Box
                sx={{
                    position: "absolute", inset: 0, zIndex: 0,
                    backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating orbs */}
            <FloatingShape size="500px" color="rgba(11,94,215,0.15)" top="-100px" left="-100px" delay={0} duration={10} />
            <FloatingShape size="400px" color="rgba(56,189,248,0.1)" top="50%" right="-80px" delay={3} duration={12} />
            <FloatingShape size="300px" color="rgba(129,140,248,0.12)" top="60%" left="30%" delay={1.5} duration={9} />

            {/* Floating geometric cubes */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: "absolute",
                        width: `${20 + i * 8}px`, height: `${20 + i * 8}px`,
                        border: `1px solid rgba(56,189,248,${0.15 + i * 0.05})`,
                        borderRadius: "6px",
                        top: `${15 + i * 15}%`,
                        right: `${5 + i * 5}%`,
                        zIndex: 1,
                    }}
                    animate={{ rotate: [0, 360], y: [0, -20, 0] }}
                    transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                />
            ))}

            <Container maxWidth={false} disableGutters sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                    <Grid size={{ xxs: 12, md: 6, lg: 6 }}>
                        <HeroContent />
                    </Grid>
                    <Grid size={{ xxs: 12, md: 6, lg: 6 }} sx={{ display: { md: "flex", xxs: "none" }, justifyContent: "center", alignItems: "center" }}>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.4 }}
                            style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}
                        >
                            {/* Glow behind image */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "80%", height: "80%",
                                    background: "radial-gradient(ellipse, rgba(56,189,248,0.25), transparent 70%)",
                                    filter: "blur(40px)",
                                    top: "10%", left: "10%",
                                    zIndex: 0,
                                }}
                            />
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "550px" }}
                            >
                                <Box sx={{ borderRadius: "20px", overflow: "hidden" }}>
                                    <Image
                                        src={HeroMockup}
                                        alt="BuildWithUs Hero - Premium Web Development"
                                        width={550}
                                        height={420}
                                    />
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom gradient fade */}
            <Box
                sx={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", zIndex: 2,
                    background: "linear-gradient(to top, #F8FBFF, transparent)",
                }}
            />
        </Box>
    );
};
export default Hero;
