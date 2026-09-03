import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, desc, gradient, index }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            viewport={{ once: true }}
        >
            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    p: "2em",
                    height: "100%",
                    border: "1px solid rgba(11, 94, 215, 0.08)",
                    boxShadow: hovered ? "0 20px 60px rgba(11, 94, 215, 0.15)" : "0 4px 24px rgba(11, 94, 215, 0.06)",
                    transform: hovered ? "translateY(-8px)" : "translateY(0px)",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                    "&::before": {
                        content: "\"\"",
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: "3px",
                        background: gradient,
                        borderRadius: "20px 20px 0 0",
                    },
                }}
            >
                {/* Hover glow */}
                {hovered && (
                    <Box
                        sx={{
                            position: "absolute", inset: 0,
                            background: `linear-gradient(135deg, rgba(11,94,215,0.03), rgba(56,189,248,0.03))`,
                            pointerEvents: "none",
                            borderRadius: "20px",
                        }}
                    />
                )}
                {/* Icon */}
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "54px", height: "54px",
                        background: "linear-gradient(135deg, #E8F0FE, #DBEAFE)",
                        borderRadius: "14px",
                        fontSize: "1.6rem",
                        mb: "1.2em",
                        transition: "transform 0.3s ease",
                        transform: hovered ? "scale(1.12) rotate(-5deg)" : "scale(1)",
                    }}
                >
                    {icon}
                </Box>
                <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#111827", mb: "0.6em" }}>
                    {title}
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {desc}
                </Typography>
            </Box>
        </motion.div>
    );
};
export default ServiceCard;
