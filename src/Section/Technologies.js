import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "Utilis/SectionHeading";

const techGroups = [
    {
        label: "Languages",
        color: "#0B5ED7",
        techs: [
            { name: "Java", icon: "☕" },
            { name: "Python", icon: "🐍" },
            { name: "JavaScript", icon: "⚡" },
            { name: "TypeScript", icon: "🔷" },
            { name: "Dart", icon: "🎯" },
        ],
    },
    {
        label: "Web",
        color: "#1E88E5",
        techs: [
            { name: "React", icon: "⚛️" },
            { name: "Vite", icon: "⚡" },
            { name: "Node.js", icon: "🟢" },
            { name: "Express", icon: "🚆" },
            { name: "Tailwind CSS", icon: "💨" },
            { name: "ShadCN", icon: "🎨" },
        ],
    },
    {
        label: "Mobile",
        color: "#818CF8",
        techs: [
            { name: "Flutter", icon: "📱" },
            { name: "Android Studio", icon: "🤖" },
            { name: "Room DB", icon: "🗃️" },
        ],
    },
    {
        label: "Data & Backend",
        color: "#38BDF8",
        techs: [
            { name: "MongoDB", icon: "🍃" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "Supabase", icon: "⚡" },
            { name: "Firebase", icon: "🔥" },
            { name: "JWT Auth", icon: "🔐" },
        ],
    },
    {
        label: "AI & Vision",
        color: "#0B5ED7",
        techs: [
            { name: "Claude", icon: "🧠" },
            { name: "Ollama", icon: "🦙" },
            { name: "OpenCV", icon: "👁️" },
            { name: "MediaPipe", icon: "✋" },
        ],
    },
    {
        label: "Tools & Services",
        color: "#1E88E5",
        techs: [
            { name: "Git", icon: "🔀" },
            { name: "GitHub", icon: "🐙" },
            { name: "Docker", icon: "🐳" },
            { name: "Razorpay", icon: "💳" },
            { name: "Cloudinary", icon: "☁️" },
        ],
    },
];

const TechBadge = ({ name, icon, index, color }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.08, y: -4 }}
    >
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.7em",
                background: "#FFFFFF",
                border: "1px solid rgba(11,94,215,0.1)",
                borderRadius: "12px",
                px: "1.2em",
                py: "0.75em",
                boxShadow: "0 2px 12px rgba(11,94,215,0.06)",
                cursor: "default",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: "0 8px 24px rgba(11,94,215,0.14)", borderColor: color },
            }}
        >
            <Box sx={{ fontSize: "1.3rem", lineHeight: 1 }}>{icon}</Box>
            <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.88rem", color: "#374151" }}>{name}</Typography>
        </Box>
    </motion.div>
);

const Technologies = () => {
    return (
        <Box component="section" id="technologies" sx={{ py: "6em", background: "#F8FBFF" }}>
            <Container maxWidth={false} disableGutters>
                <SectionHeading badge="Tech Stack" value1="Tools I" value2="Work With" subtitle="The stack I reach for across web, mobile, and AI work — everything here I have shipped something with." />
                <Grid container spacing={4}>
                    {techGroups.map((group, gi) => (
                        <Grid size={{ xxs: 12, md: 4, lg: 4 }} key={gi}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: gi * 0.15 }} viewport={{ once: true }}>
                                <Box sx={{ background: "#FFFFFF", borderRadius: "24px", p: "2em", border: "1px solid rgba(11,94,215,0.08)", boxShadow: "0 4px 24px rgba(11,94,215,0.06)" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.8em", mb: "1.5em" }}>
                                        <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", background: group.color, boxShadow: `0 0 12px ${group.color}` }} />
                                        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111827" }}>{group.label}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.75em" }}>
                                        {group.techs.map((tech, ti) => (
                                            <TechBadge key={ti} {...tech} index={ti} color={group.color} />
                                        ))}
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
export default Technologies;
