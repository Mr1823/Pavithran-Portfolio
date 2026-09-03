# Pavithran S — Portfolio

Personal developer portfolio for **Pavithran S**, a Full Stack & Android Developer and Founder of [BuildWithUs](https://www.buildwithus.co.in). Built with Next.js, Material UI, and Framer Motion.

## ✨ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with tagline, stats, and CTA buttons |
| **About** | Bio, quick facts (CGPA, year, clients, internships), and education timeline |
| **Services** | Full Stack Web, Mobile App, and AI/ML development offerings |
| **Technologies** | Categorised tech stack — Languages, Web, Mobile, Data & Backend, AI & Vision, Tools |
| **Portfolio** | Featured client projects (Sri Ram Jewellery, Manisha Fashions) and personal builds (Kanakku Pulla, Marcus AI, AirPlay, PraiseShow) |
| **Experience** | Work timeline — AI Product Engineering Intern at Straw Labs, Founder at BuildWithUs, Intern at Lamda Tech Softics |
| **Why Us** | Value propositions and differentiators |
| **Process** | Development workflow breakdown |
| **Achievements** | Contest wins & certifications (Cisco, Anthropic, Microsoft) |
| **Contact** | Contact form powered by EmailJS |
| **Footer** | Social links and quick navigation |

## 🛠 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (Pages Router) |
| **UI Library** | [MUI v9](https://mui.com/) (Material UI) with Emotion |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) |
| **Email** | [EmailJS](https://www.emailjs.com/) |
| **Scrolling** | [React Scroll](https://www.npmjs.com/package/react-scroll) |
| **Linting** | ESLint with `eslint-config-next` |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (comes with Node)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/Mr1823/Pavithran-Portfolio.git
cd Pavithran-Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── Pavithran_S_Resume.pdf
├── src/
│   ├── Assets/          # Images and static assets
│   ├── Components/      # Reusable UI components (Header, Hero, Contact, Services)
│   ├── Data/            # Centralised content data
│   │   ├── Profile.data.js       # Name, contact, socials, stats
│   │   ├── Experience.data.js    # Work experience & education
│   │   ├── Projects.data.js      # Portfolio projects
│   │   ├── Achievements.data.js  # Awards & certifications
│   │   └── Services/             # Service offerings
│   ├── Emotion/         # MUI Emotion cache setup
│   ├── Section/         # Page sections (Hero, About, Services, etc.)
│   ├── Theme/           # MUI theme configuration
│   ├── Utilis/          # Shared utilities (Heads, SectionHeading, etc.)
│   └── pages/           # Next.js pages
│       ├── _app.js
│       ├── _document.js
│       └── index.js
├── package.json
├── next.config.js
└── eslint.config.mjs
```

> **Tip:** All personal data is centralised in `src/Data/`. Edit the data files to update content across the entire site — no need to touch individual section components.

## 📝 Customisation

| What to change | Where |
|----------------|-------|
| Name, title, contact, socials | `src/Data/Profile.data.js` |
| Work experience & education | `src/Data/Experience.data.js` |
| Portfolio projects | `src/Data/Projects.data.js` |
| Awards & certifications | `src/Data/Achievements.data.js` |
| Service offerings | `src/Data/Services/Services.data.js` |
| Theme colours & typography | `src/Theme/` |
| Resume PDF | `public/Pavithran_S_Resume.pdf` |

## 📄 License

This project is licensed under a custom license — see [LICENSE.md](LICENSE.md) for details.

**Original template** by [Siam Ahnaf](https://www.siamahnaf.com/).

---

**Pavithran S** · [GitHub](https://github.com/Pavithran1823) · [LinkedIn](https://www.linkedin.com/in/paviofficial) · [BuildWithUs](https://www.buildwithus.co.in) · [pavithran@buildwithus.co.in](mailto:pavithran@buildwithus.co.in)