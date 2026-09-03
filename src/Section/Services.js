import { Box, Container, Grid } from "@mui/material";
import SectionHeading from "Utilis/SectionHeading";
import ServiceCard from "Components/Services/ServiceCard";
import ServicesData from "Data/Services/Services.data";

const Services = () => {
    return (
        <Box component="section" id="services" sx={{ py: "6em", background: "#F8FBFF", position: "relative" }}>
            {/* Subtle bg decoration */}
            <Box sx={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(11,94,215,0.05), transparent 70%)", pointerEvents: "none" }} />
            <Container maxWidth={false} disableGutters>
                <SectionHeading
                    badge="What I Do"
                    value1="How I Can"
                    value2="Help"
                    subtitle="The kinds of problems I take on — each one backed by something I have actually built and shipped."
                />
                <Grid container spacing={3}>
                    {ServicesData.map((service, i) => (
                        <Grid size={{ xxs: 12, sm: 6, md: 4, lg: 4 }} key={i}>
                            <ServiceCard {...service} index={i} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
export default Services;
