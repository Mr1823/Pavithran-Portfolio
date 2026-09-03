import { Box, Typography } from "@mui/material";

const SectionHeading = ({ badge, value1, value2, subtitle, align = "center" }) => {
    return (
        <Box sx={{ textAlign: align, mb: "3em" }}>
            {badge && (
                <Box
                    component="span"
                    sx={{
                        display: "inline-block",
                        background: "#E8F0FE",
                        color: "#0B5ED7",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        px: "1.2em",
                        py: "0.5em",
                        borderRadius: "50px",
                        border: "1px solid rgba(11, 94, 215, 0.2)",
                        mb: "1.2em",
                    }}
                >
                    {badge}
                </Box>
            )}
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: { lg: "2.8rem", md: "2.3rem", sm: "2rem", xxs: "1.7rem" },
                    color: "#111827",
                    lineHeight: 1.2,
                    mb: "0.3em",
                }}
            >
                {value1}{" "}
                <Box
                    component="span"
                    sx={{
                        background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {value2}
                </Box>
            </Typography>
            {subtitle && (
                <Typography
                    sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        color: "#6B7280",
                        fontSize: { md: "1.05rem", xxs: "0.95rem" },
                        maxWidth: "600px",
                        mx: align === "center" ? "auto" : "0",
                        mt: "0.8em",
                        lineHeight: 1.7,
                    }}
                >
                    {subtitle}
                </Typography>
            )}
            <Box
                sx={{
                    width: "60px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                    mx: align === "center" ? "auto" : "0",
                    mt: "1.2em",
                }}
            />
        </Box>
    );
};
export default SectionHeading;
