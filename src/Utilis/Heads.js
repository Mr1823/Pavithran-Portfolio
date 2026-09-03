import Head from "next/head";
import profile from "Data/Profile.data";

const SITE_URL = "https://www.buildwithus.co.in";
const TITLE = `${profile.name} | ${profile.title}`;
const DESCRIPTION =
    "Pavithran S — Full Stack & Android Developer and founder of BuildWithUs. Third-year AI & Data Science undergraduate shipping production MERN, Flutter, and native Android products for real clients.";

const Heads = () => {
    return (
        <Head>
            <title>{TITLE}</title>
            <meta name="description" content={DESCRIPTION} />
            <meta
                name="keywords"
                content="Pavithran S, full stack developer, android developer, MERN stack, Flutter developer, React, Node.js, Tamil Nadu developer, BuildWithUs"
            />
            <meta name="author" content={profile.name} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={SITE_URL} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:title" content={TITLE} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:site_name" content={profile.name} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={TITLE} />
            <meta name="twitter:description" content={DESCRIPTION} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: profile.name,
                        jobTitle: profile.title,
                        email: profile.email,
                        telephone: profile.phone,
                        url: SITE_URL,
                        address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
                        sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.website],
                        alumniOf: {
                            "@type": "CollegeOrUniversity",
                            name: "Kamaraj College of Engineering and Technology",
                        },
                    }),
                }}
            />
        </Head>
    );
};
export default Heads;
