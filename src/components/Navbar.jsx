import { useState } from "react";

export default function Navbar({ tabs, activeTab, onTabChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(5,13,26,0.88)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
      height: "72px",
      display: "flex", alignItems: "center",
      padding: "0 2rem",
      justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", cursor: "pointer", letterSpacing: "-0.02em" }}
        onClick={() => onTabChange("Home")}
      >
        <span style={{ color: "var(--accent)" }}>V</span>
        <span style={{ color: "var(--text-primary)" }}>inoth</span>
        <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.85rem", marginLeft: "0.5rem" }}>DevOps</span>
      </div>

      {/* Desktop tabs */}
      <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="desktop-nav">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            style={{
              background: activeTab === tab ? "rgba(0,212,255,0.12)" : "transparent",
              border: activeTab === tab ? "1px solid var(--border-strong)" : "1px solid transparent",
              color: activeTab === tab ? "var(--accent)" : "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              fontWeight: activeTab === tab ? 500 : 400,
              fontSize: "0.875rem",
              padding: "0.45rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => { if (activeTab !== tab) { e.target.style.color = "var(--text-primary)"; e.target.style.background = "rgba(0,212,255,0.05)"; } }}
            onMouseLeave={e => { if (activeTab !== tab) { e.target.style.color = "var(--text-secondary)"; e.target.style.background = "transparent"; } }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none", background: "none", border: "none",
          color: "var(--text-primary)", cursor: "pointer", fontSize: "1.5rem",
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "72px", left: 0, right: 0,
          background: "rgba(5,13,26,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          padding: "1rem",
          display: "flex", flexDirection: "column", gap: "0.5rem",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { onTabChange(tab); setMenuOpen(false); }}
              style={{
                background: activeTab === tab ? "rgba(0,212,255,0.12)" : "transparent",
                border: activeTab === tab ? "1px solid var(--border-strong)" : "1px solid transparent",
                color: activeTab === tab ? "var(--accent)" : "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                padding: "0.75rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
