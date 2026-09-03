import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";
import Navs from "Data/Header/Navs.data";
import profile from "Data/Profile.data";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box sx={{ p: "2em", height: "100%", display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "2.5em" }}>
                <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#38BDF8" }}>
                    {profile.shortName}
                </Typography>
                <ButtonBase
                    onClick={toggleDrawer(false)}
                    sx={{ color: "#9CA3AF", p: "0.3em", borderRadius: "8px", "&:hover": { color: "#fff" } }}
                >
                    <CloseIcon />
                </ButtonBase>
            </Box>
            {/* Nav Links */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4em" }}>
                {Navs.map((nav, i) => (
                    <Link
                        key={i}
                        to={nav.Id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={toggleDrawer(false)}
                        style={{ cursor: "pointer" }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontWeight: 500,
                                fontSize: "1rem",
                                color: "#D1D5DB",
                                px: "1em",
                                py: "0.75em",
                                borderRadius: "10px",
                                transition: "all 0.2s",
                                "&:hover": { color: "#38BDF8", background: "rgba(56, 189, 248, 0.08)" },
                            }}
                        >
                            {nav.name}
                        </Typography>
                    </Link>
                ))}
            </Box>
            {/* CTA */}
            <Box sx={{ mt: "auto" }}>
                <Link to="contact" spy smooth duration={500} onClick={toggleDrawer(false)}>
                    <ButtonBase
                        sx={{
                            width: "100%",
                            background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                            color: "#fff",
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            py: "0.9em",
                            borderRadius: "12px",
                            boxShadow: "0 4px 20px rgba(11, 94, 215, 0.4)",
                        }}
                    >
                        Hire Me
                    </ButtonBase>
                </Link>
            </Box>
        </Box>
    );
};
export default Drawers;
