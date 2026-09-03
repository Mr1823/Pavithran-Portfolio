import { Box, Container, Grid, Typography, ButtonBase, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "Utilis/SectionHeading";
import projects from "Data/Projects.data";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project, index }) => {
    const [hovered, setHovered] = useState(false);
    const isClient = project.type === "Client Project";

    return (
        <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.12 }}
            viewport={{ once: true }}
            style={{ height: "100%" }}
        >
            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    background: "#FFFFFF",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid rgba(11,94,215,0.08)",
                    boxShadow: hovered ? "0 30px 80px rgba(11,94,215,0.16)" : "0 4px 24px rgba(11,94,215,0.07)",
                    transform: hovered ? "translateY(-8px)" : "translateY(0)",
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Accent bar */}
                <Box sx={{ height: "4px", background: `linear-gradient(90deg, ${project.accent}, #38BDF8)` }} />

                <Box sx={{ p: { md: "2em", xxs: "1.6em" }, flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Type badge */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.6em", mb: "1em", flexWrap: "wrap" }}>
                        <Box
                            sx={{
                                display: "inline-block",
                                background: isClient ? "rgba(11,94,215,0.09)" : "rgba(129,140,248,0.12)",
                                color: isClient ? "#0B5ED7" : "#6366F1",
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontWeight: 600,
                                fontSize: "0.7rem",
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                px: "0.85em",
                                py: "0.35em",
                                borderRadius: "6px",
                            }}
                        >
                            {project.type}
                        </Box>
                    </Box>

                    <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.18rem", color: "#111827", mb: "0.6em" }}>
                        {project.name}
                    </Typography>

                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280", fontSize: "0.89rem", lineHeight: 1.75, mb: project.highlights ? "1.2em" : "1.5em" }}>
                        {project.description}
                    </Typography>

                    {/* Highlights */}
                    {project.highlights && (
                        <Box component="ul" sx={{ m: 0, pl: "1.1em", mb: "1.5em" }}>
                            {project.highlights.map((h, hi) => (
                                <Box
                                    component="li"
                                    key={hi}
                                    sx={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        color: "#4B5563",
                                        fontSize: "0.84rem",
                                        lineHeight: 1.65,
                                        mb: "0.45em",
                                        "&::marker": { color: project.accent },
                                    }}
                                >
                                    {h}
                                </Box>
                            ))}
                        </Box>
                    )}

                    {/* Tech chips */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.45em", mb: "1.5em", mt: "auto" }}>
                        {project.techs.map((tech, ti) => (
                            <Chip
                                key={ti}
                                label={tech}
                                size="small"
                                sx={{ background: "#E8F0FE", color: "#0B5ED7", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.72rem", border: "1px solid rgba(11,94,215,0.15)" }}
                            />
                        ))}
                    </Box>

                    {/* Actions - only render links that actually exist */}
                    {(project.url || project.github) && (
                        <Box sx={{ display: "flex", gap: "0.8em" }}>
                            {project.url && (
                                <ButtonBase
                                    component="a"
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ flex: 1, background: "linear-gradient(135deg, #0B5ED7, #38BDF8)", color: "#fff", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.85rem", py: "0.7em", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4em", boxShadow: "0 4px 15px rgba(11,94,215,0.3)", transition: "all 0.3s ease", "&:hover": { boxShadow: "0 6px 25px rgba(11,94,215,0.5)" } }}
                                >
                                    <OpenInNewIcon sx={{ fontSize: "1rem" }} /> Live Demo
                                </ButtonBase>
                            )}
                            {project.github && (
                                <ButtonBase
                                    component="a"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.name} source on GitHub`}
                                    sx={{ flex: project.url ? "none" : 1, px: "1.1em", py: "0.7em", border: "1px solid rgba(11,94,215,0.2)", borderRadius: "10px", color: "#0B5ED7", fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.45em", transition: "all 0.3s ease", "&:hover": { background: "#E8F0FE" } }}
                                >
                                    <GitHubIcon sx={{ fontSize: "1.1rem" }} /> {project.url ? "" : "View Source"}
                                </ButtonBase>
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </motion.div>
    );
};

const Portfolio = () => {
    return (
        <Box component="section" id="portfolio" sx={{ py: "6em", background: "#FFFFFF" }}>
            <Container maxWidth={false} disableGutters>
                <SectionHeading
                    badge="My Work"
                    value1="Things I've"
                    value2="Built"
                    subtitle="Paid client work delivered through BuildWithUs, plus the personal projects I build to learn."
                />
                <Grid container spacing={3.5} sx={{ alignItems: "stretch" }}>
                    {projects.map((project, i) => (
                        <Grid size={{ xxs: 12, sm: 6, lg: 4 }} key={i}>
                            <ProjectCard project={project} index={i} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
export default Portfolio;
