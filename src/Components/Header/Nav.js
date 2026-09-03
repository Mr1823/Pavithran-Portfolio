import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";
import Navs from "Data/Header/Navs.data";

const Nav = ({ scrolled }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3em" }}>
            {Navs.map((nav, i) => (
                <Link
                    key={i}
                    to={nav.Id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{ cursor: "pointer" }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontWeight: 500,
                            fontSize: "0.9rem",
                            color: scrolled ? "#374151" : "rgba(255,255,255,0.85)",
                            px: "0.9em",
                            py: "0.5em",
                            borderRadius: "8px",
                            position: "relative",
                            transition: "all 0.25s ease",
                            cursor: "pointer",
                            "&:hover": {
                                color: scrolled ? "#0B5ED7" : "#38BDF8",
                                background: scrolled ? "rgba(11, 94, 215, 0.06)" : "rgba(255, 255, 255, 0.08)",
                            },
                            "&::after": {
                                content: "\"\"",
                                position: "absolute",
                                bottom: "2px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "0%",
                                height: "2px",
                                borderRadius: "1px",
                                background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                                transition: "width 0.3s ease",
                            },
                            "&:hover::after": {
                                width: "60%",
                            },
                        }}
                    >
                        {nav.name}
                    </Typography>
                </Link>
            ))}
        </Box>
    );
};
export default Nav;
