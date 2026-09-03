// Single source of truth for identity + contact details.
// Edit here and every section picks it up.

const profile = {
    name: "Pavithran S",
    shortName: "Pavithran",
    initials: "SP",
    title: "Full Stack & Android Developer",
    subtitle: "Founder, BuildWithUs",
    location: "Tenkasi, Tamil Nadu, India",

    email: "pavithran@buildwithus.co.in",
    phone: "+91 93637 50806",
    phoneRaw: "919363750806",

    tagline:
        "I build production web and mobile products end to end — from JWT auth and payment verification to on-device SMS parsing — and hand them over to real, paying clients.",

    availability: "Open to SDE internships & full-time roles",

    resumeUrl: "/Pavithran_S_Resume.pdf",

    socials: {
        github: "https://github.com/Pavithran1823",
        linkedin: "https://www.linkedin.com/in/paviofficial",
        website: "https://www.buildwithus.co.in",
        whatsapp: "https://wa.me/919363750806",
        email: "mailto:pavithran@buildwithus.co.in",
    },

    // Verifiable numbers only - each one traces to a real project or role.
    stats: [
        { number: "10+", label: "Projects Built" },
        { number: "3", label: "Client Projects Delivered" },
        { number: "2", label: "Contest Wins" },
    ],

    quickFacts: [
        { n: "8.01", l: "CGPA" },
        { n: "3rd Yr", l: "B.Tech AI & DS" },
        { n: "3", l: "Paid Clients" },
        { n: "2", l: "Internships" },
    ],
};

export default profile;
