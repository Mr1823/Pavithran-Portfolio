import { useState } from "react";
import { Stack, Box, ButtonBase, Drawer, Typography } from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawers from "./Bar/Drawers";

const Bar = ({ scrolled }) => {
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
        setDrawer(open);
    };
    return (
        <Stack direction="row" sx={{ justifyContent: "flex-end", alignItems: "center", gap: "1em" }}>
            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>
                <ButtonBase
                    sx={{
                        background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                        color: "#fff",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        px: "1.4em",
                        py: "0.7em",
                        borderRadius: "50px",
                        display: { md: "flex", xxs: "none" },
                        alignItems: "center",
                        gap: "0.4em",
                        boxShadow: "0 4px 20px rgba(11, 94, 215, 0.35)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: "0 6px 30px rgba(11, 94, 215, 0.55)",
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Hire Me
                </ButtonBase>
            </Link>
            <ButtonBase
                onClick={toggleDrawer(true)}
                sx={{
                    display: { md: "none", xxs: "flex" },
                    background: scrolled ? "rgba(11, 94, 215, 0.08)" : "rgba(255, 255, 255, 0.1)",
                    border: scrolled ? "1px solid rgba(11, 94, 215, 0.2)" : "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "10px",
                    p: "0.5em",
                    color: scrolled ? "#0B5ED7" : "#FFFFFF",
                    transition: "all 0.2s",
                    "&:hover": { background: scrolled ? "rgba(11, 94, 215, 0.15)" : "rgba(255, 255, 255, 0.2)" },
                }}
            >
                <MenuIcon />
            </ButtonBase>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={toggleDrawer(false)}
                ModalProps={{ disableScrollLock: true }}
                slotProps={{
                    paper: {
                        sx: {
                            width: "280px",
                            background: "#071739",
                            borderLeft: "1px solid rgba(56,189,248,0.15)",
                        },
                    },
                }}
            >
                <Drawers toggleDrawer={toggleDrawer} />
            </Drawer>
        </Stack>
    );
};
export default Bar;
