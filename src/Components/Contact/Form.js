import { useState } from "react";
import { Box, Typography, ButtonBase, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import emailjs from "@emailjs/browser";

// Configured via .env.local - see .env.example
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const IS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const inputStyle = {
    width: "100%",
    background: "#F8FBFF",
    border: "1.5px solid rgba(11,94,215,0.12)",
    borderRadius: "12px",
    px: "1.2em",
    py: "0.9em",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "0.95rem",
    color: "#111827",
    outline: "none",
    transition: "all 0.25s ease",
    "&::placeholder": { color: "#9CA3AF" },
    "&:focus": { borderColor: "#0B5ED7", boxShadow: "0 0 0 3px rgba(11,94,215,0.08)", background: "#FFFFFF" },
};

const InputField = ({ label, id, type = "text", placeholder, register, error, required }) => (
    <Box>
        <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#374151", mb: "0.5em" }}>
            {label} {required && <Box component="span" sx={{ color: "#0B5ED7" }}>*</Box>}
        </Typography>
        <Box
            component="input"
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(id, { required: required ? `${label} is required` : false })}
            sx={{ ...inputStyle, display: "block" }}
        />
        {error && <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.78rem", color: "#EF4444", mt: "0.3em" }}>{error.message}</Typography>}
    </Box>
);

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setError("");

        if (!IS_CONFIGURED) {
            setError("The contact form is not configured yet. Please email me directly in the meantime.");
            return;
        }

        setLoading(true);
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, { publicKey: PUBLIC_KEY });
            setSubmitted(true);
            reset();
            setTimeout(() => setSubmitted(false), 8000);
        } catch (err) {
            setError(
                err?.text || "Something went wrong sending your message. Please try again, or email me directly."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                background: "#FFFFFF",
                borderRadius: "24px",
                p: { md: "2.5em", xxs: "1.8em" },
                border: "1px solid rgba(11,94,215,0.1)",
                boxShadow: "0 8px 40px rgba(11,94,215,0.08)",
            }}
        >
            {submitted ? (
                <Box sx={{ textAlign: "center", py: "3em" }}>
                    <CheckCircleIcon sx={{ fontSize: "3.5rem", color: "#22c55e", mb: "0.5em" }} />
                    <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#111827", mb: "0.5em" }}>Message Sent!</Typography>
                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280" }}>Thanks for reaching out — I&apos;ll get back to you within a day.</Typography>
                </Box>
            ) : (
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    {error && (
                        <Box
                            role="alert"
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.6em",
                                background: "#FEF2F2",
                                border: "1px solid #FECACA",
                                borderRadius: "12px",
                                p: "0.9em 1.1em",
                                mb: "1.5em",
                            }}
                        >
                            <ErrorOutlineIcon sx={{ color: "#DC2626", fontSize: "1.15rem", mt: "0.1em", flexShrink: 0 }} />
                            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.86rem", color: "#B91C1C", lineHeight: 1.6 }}>
                                {error}
                            </Typography>
                        </Box>
                    )}
                    <Grid container spacing={2.5}>
                        <Grid size={{ xxs: 12, sm: 6 }}>
                            <InputField label="Full Name" id="name" placeholder="John Doe" register={register} error={errors.name} required />
                        </Grid>
                        <Grid size={{ xxs: 12, sm: 6 }}>
                            <InputField label="Email Address" id="email" type="email" placeholder="john@example.com" register={register} error={errors.email} required />
                        </Grid>
                        <Grid size={{ xxs: 12, sm: 6 }}>
                            <InputField label="Phone Number" id="phone" placeholder="+91 98765 43210" register={register} error={errors.phone} />
                        </Grid>
                        <Grid size={{ xxs: 12, sm: 6 }}>
                            <InputField label="Company / College" id="company" placeholder="Where you're from" register={register} error={errors.company} />
                        </Grid>
                        <Grid size={{ xxs: 12 }}>
                            <Box>
                                <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#374151", mb: "0.5em" }}>
                                    What&apos;s this about?
                                </Typography>
                                <Box
                                    component="select"
                                    {...register("subject")}
                                    sx={{ ...inputStyle, display: "block", cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}
                                >
                                    <Box component="option" value="">Select a reason</Box>
                                    <Box component="option" value="job">Job / Internship opportunity</Box>
                                    <Box component="option" value="freelance">Freelance project</Box>
                                    <Box component="option" value="collaboration">Collaboration</Box>
                                    <Box component="option" value="other">Something else</Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xxs: 12 }}>
                            <Box>
                                <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#374151", mb: "0.5em" }}>
                                    Your Message <Box component="span" sx={{ color: "#0B5ED7" }}>*</Box>
                                </Typography>
                                <Box
                                    component="textarea"
                                    id="message"
                                    placeholder="Tell me about the role, the project, or whatever is on your mind..."
                                    rows={5}
                                    {...register("message", { required: "Please write a short message" })}
                                    sx={{ ...inputStyle, display: "block", resize: "vertical", minHeight: "120px" }}
                                />
                                {errors.message && <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.78rem", color: "#EF4444", mt: "0.3em" }}>{errors.message.message}</Typography>}
                            </Box>
                        </Grid>
                        <Grid size={{ xxs: 12 }}>
                            <ButtonBase
                                type="submit"
                                disabled={loading}
                                sx={{
                                    width: "100%",
                                    background: "linear-gradient(135deg, #0B5ED7, #38BDF8)",
                                    color: "#fff",
                                    fontFamily: "var(--font-poppins), sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    py: "1em",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.6em",
                                    boxShadow: "0 8px 30px rgba(11,94,215,0.35)",
                                    transition: "all 0.3s ease",
                                    opacity: loading ? 0.75 : 1,
                                    "&:hover": { boxShadow: "0 12px 40px rgba(11,94,215,0.5)", transform: loading ? "none" : "translateY(-2px)" },
                                }}
                            >
                                {loading ? "Sending..." : <>Send Message <SendIcon sx={{ fontSize: "1rem" }} /></>}
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};
export default Form;
