import { useState, useEffect } from "react";
import colors from "./colors";
import fonts from "./fonts";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const TABS = ["Home", "Skills", "Projects", "Education", "Certifications", "Contact"];

const cssVars = `
  :root {
    --primary: ${colors.primary};
    --primary-light: ${colors.primaryLight};
    --primary-dark: ${colors.primaryDark};
    --accent: ${colors.accent};
    --accent-light: ${colors.accentLight};
    --accent-dark: ${colors.accentDark};
    --surface: ${colors.surface};
    --surface-hover: ${colors.surfaceHover};
    --border: ${colors.border};
    --border-strong: ${colors.borderStrong};
    --text-primary: ${colors.textPrimary};
    --text-secondary: ${colors.textSecondary};
    --text-muted: ${colors.textMuted};
    --card-bg: ${colors.cardBg};
    --glow-accent: ${colors.glowAccent};
    --gradient-hero: ${colors.gradientHero};
    --gradient-card: ${colors.gradientCard};
    --gradient-accent: ${colors.gradientAccent};

    --font-display: ${fonts.display};
    --font-body: ${fonts.body};
    --font-mono: ${fonts.mono};
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--primary);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-weight: ${fonts.weights.regular};
    line-height: 1.7;
    min-height: 100vh;
    overflow-x: hidden;
  }

  ::selection {
    background: var(--accent);
    color: var(--primary);
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--primary-dark); }
  ::-webkit-scrollbar-thumb { background: var(--accent-dark); border-radius: 3px; }

  a { color: var(--accent); text-decoration: none; transition: opacity 0.2s; }
  a:hover { opacity: 0.8; }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0,212,255,0.3); }
    50%       { box-shadow: 0 0 40px rgba(0,212,255,0.6); }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
`;

const PAGE_MAP = {
  Home: <Home />,
  Skills: <Skills />,
  Projects: <Projects />,
  Education: <Education />,
  Certifications: <Certifications />,
  Contact: <Contact />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [transitioning, setTransitioning] = useState(false);

  const switchTab = (tab) => {
    if (tab === activeTab) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 180);
  };

  // Handle hash-based navigation for GitHub Pages
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && TABS.includes(hash)) setActiveTab(hash);
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${activeTab}`);
  }, [activeTab]);

  return (
    <>
      <style>{cssVars}</style>
      <div style={{ minHeight: "100vh", background: "var(--gradient-hero)" }}>
        {/* Subtle grid background */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

        <Navbar tabs={TABS} activeTab={activeTab} onTabChange={switchTab} />

        <main
          style={{
            paddingTop: "80px",
            animation: transitioning ? "none" : "fadeIn 0.35s ease",
            opacity: transitioning ? 0 : 1,
            transition: "opacity 0.18s ease",
            position: "relative", zIndex: 1,
          }}
        >
          {PAGE_MAP[activeTab]}
        </main>

        <footer style={{
          textAlign: "center",
          padding: "2rem",
          borderTop: "1px solid var(--border)",
          color: "var(--text-muted)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          position: "relative", zIndex: 1,
        }}>
          © {new Date().getFullYear()} T. Vinoth Veliappan · Built with React · Deployed on GitHub Pages
        </footer>
      </div>
    </>
  );
}
