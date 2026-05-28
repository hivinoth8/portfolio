import { PROJECTS } from "../constants/data";

export default function Projects() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      <div style={{ marginBottom: "3rem", animation: "fadeInUp 0.5s ease both" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em",
          color: "var(--text-primary)", marginBottom: "0.5rem",
        }}>
          Project Experience
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Real-world cloud infrastructure and DevOps implementations
        </p>
        <div style={{ width: "60px", height: "3px", background: "var(--gradient-accent)", borderRadius: "2px", marginTop: "0.75rem" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.25rem" }}>
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "1.75rem",
              backdropFilter: "blur(8px)",
              animation: `fadeInUp 0.5s ${i * 0.08}s ease both`,
              transition: "all 0.25s",
              display: "flex", flexDirection: "column", gap: "1rem",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,212,255,0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1.05rem", color: "var(--text-primary)",
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                color: "var(--accent)", background: "rgba(0,212,255,0.08)",
                border: "1px solid var(--border)",
                padding: "0.25rem 0.6rem", borderRadius: "4px",
                whiteSpace: "nowrap", flexShrink: 0,
              }}>
                {project.period}
              </span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              {project.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
              {project.tags.map((tag, j) => (
                <span key={j} style={{
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.12)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "4px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
