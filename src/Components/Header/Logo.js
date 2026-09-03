import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";
import profile from "Data/Profile.data";

const Logo = ({ scrolled }) => {
    return (
        <Box sx={{ mt: "2px", a: { cursor: "pointer", textDecoration: "none" } }}>
            <Link to="home" spy={true} smooth={true} duration={500}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Box
                        sx={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "12px",
                            background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontWeight: 800,
                            fontSize: "1rem",
                            color: "#fff",
                            flexShrink: 0,
                            boxShadow: "0 4px 14px rgba(11, 94, 215, 0.3)",
                        }}
                    >
                        {profile.initials}
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontWeight: 800,
                                fontSize: "1.1rem",
                                color: scrolled ? "#071739" : "#FFFFFF",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.2,
                            }}
                        >
                            {profile.shortName}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.72rem",
                                color: scrolled ? "#0B5ED7" : "rgba(255,255,255,0.7)",
                                display: { sm: "block", xxs: "none" },
                            }}
                        >
                            {profile.title}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};
export default Logo;
