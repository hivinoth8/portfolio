import { SKILLS } from "../constants/data";

function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "3rem", animation: "fadeInUp 0.5s ease both" }}>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em",
        color: "var(--text-primary)", marginBottom: "0.5rem",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>{subtitle}</p>
      )}
      <div style={{ width: "60px", height: "3px", background: "var(--gradient-accent)", borderRadius: "2px", marginTop: "0.75rem" }} />
    </div>
  );
}

export default function Skills() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      <SectionHeader
        title="Core Competencies"
        subtitle="Technologies and platforms I work with every day"
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.25rem",
      }}>
        {SKILLS.map((group, i) => (
          <div
            key={i}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "1.75rem",
              backdropFilter: "blur(8px)",
              animation: `fadeInUp 0.5s ${i * 0.07}s ease both`,
              transition: "all 0.25s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,212,255,0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{group.icon}</span>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1rem", color: "var(--text-primary)", letterSpacing: "0.01em",
              }}>
                {group.category}
              </h3>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((item, j) => (
                <span
                  key={j}
                  style={{
                    background: "rgba(0,212,255,0.07)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "5px",
                    letterSpacing: "0.02em",
                    transition: "all 0.15s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = "rgba(0,212,255,0.15)";
                    e.target.style.color = "var(--accent)";
                    e.target.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = "rgba(0,212,255,0.07)";
                    e.target.style.color = "var(--text-secondary)";
                    e.target.style.borderColor = "rgba(0,212,255,0.15)";
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
