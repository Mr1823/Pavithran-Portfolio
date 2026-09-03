// Client work delivered through BuildWithUs, plus personal builds.
// `featured: true` projects render first.

const projects = [
    {
        name: "Sri Ram Jewellery",
        type: "Client Project",
        featured: true,
        description:
            "E-commerce platform for a gold and silver jewellery boutique in Dharapuram. Custom JWT auth with bcrypt and access/refresh tokens, server-side Razorpay payment verification, and a live rate-driven pricing engine that recalculates product prices as gold and silver rates move.",
        highlights: [
            "Admin dashboard with sales analytics and live gold/silver rate updates",
            "\"Get Quote\" lead capture wired to WhatsApp Cloud API notifications",
            "MSG91 OTP verification and Cloudinary image hosting",
        ],
        techs: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
        url: "",
        github: "",
        accent: "#0B5ED7",
    },
    {
        name: "Manisha Fashions",
        type: "Client Project",
        featured: true,
        description:
            "Android e-commerce app for an artificial jewellery seller, built in Flutter. Handles dual retail and wholesale pricing with staff-approval gating, so wholesale rates only unlock for verified accounts.",
        highlights: [
            "Phone + OTP login with separate retail/wholesale role handling",
            "Razorpay and cash-on-delivery payment flows",
            "In-app admin panel for catalogue and order management",
        ],
        techs: ["Flutter", "Provider", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary"],
        url: "",
        github: "",
        accent: "#38BDF8",
    },
    {
        name: "Kanakku Pulla",
        type: "Personal Project",
        featured: true,
        description:
            "Android personal finance tracker in Java, built for Tamil college students. Reads bank SMS automatically and turns it into clean transaction history stored locally in Room DB.",
        highlights: [
            "Rewrote the SMS parser for dynamic carrier-prefix matching and reliable amount/timestamp extraction",
            "Two-priority deduplication using UPI/NEFT reference numbers to kill duplicate entries",
            "Supports TMB and IOB SMS formats; GPay-style dialpad for manual entry",
        ],
        techs: ["Java", "Android Studio", "Room DB", "SMS APIs"],
        url: "",
        github: "https://github.com/Pavithran1823/KanakkuPulla",
        accent: "#818CF8",
    },
    {
        name: "Marcus AI",
        type: "Personal Project",
        description:
            "A Jarvis-inspired local AI companion that runs entirely offline. Uses Ollama to serve Gemma3 and Qwen2.5-coder locally, with a Flask backend and SQLite-backed long-term memory.",
        highlights: [
            "Runs fully on-device — no API costs, no data leaving the machine",
            "Persistent memory across sessions via SQLite",
        ],
        techs: ["Python", "Flask", "Ollama", "SQLite"],
        url: "",
        github: "",
        accent: "#0B5ED7",
    },
    {
        name: "AirPlay",
        type: "Personal Project",
        description:
            "Gesture-controlled virtual drawing system. Tracks hand landmarks through the webcam and turns finger movement into strokes on a virtual canvas — no touchscreen, no stylus.",
        highlights: [
            "Real-time hand tracking with MediaPipe",
            "OpenCV canvas rendering and gesture-to-tool mapping",
        ],
        techs: ["Python", "OpenCV", "MediaPipe"],
        url: "",
        github: "",
        accent: "#38BDF8",
    },
    {
        name: "PraiseShow",
        type: "Personal Project",
        description:
            "Flutter desktop app for Windows that presents church song lyrics on a projector, with full Tamil Unicode rendering — the part most off-the-shelf presentation tools get wrong.",
        highlights: [
            "Correct Tamil Unicode shaping and font fallback",
            "Dual-screen presenter and audience views",
        ],
        techs: ["Flutter", "Windows", "Dart"],
        url: "",
        github: "",
        accent: "#818CF8",
    },
];

export default projects;
