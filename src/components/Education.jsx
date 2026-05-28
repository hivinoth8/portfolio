import { EDUCATION, EXPERIENCE } from "../constants/data";

export default function Education() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      {/* Education */}
      <div style={{ marginBottom: "4rem", animation: "fadeInUp 0.5s ease both" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em",
          color: "var(--text-primary)", marginBottom: "0.5rem",
        }}>
          Education
        </h2>
        <div style={{ width: "60px", height: "3px", background: "var(--gradient-accent)", borderRadius: "2px", marginTop: "0.75rem", marginBottom: "2rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.25rem" }}>
          {EDUCATION.map((edu, i) => (
            <div key={i} style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "2rem",
              backdropFilter: "blur(8px)",
              animation: `fadeInUp 0.5s ${i * 0.1}s ease both`,
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: "2.5rem" }}>{edu.icon}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", marginTop: "1rem", marginBottom: "0.25rem" }}>
                {edu.degree}
              </h3>
              <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.25rem" }}>{edu.institution}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{edu.university}</p>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                color: "var(--text-muted)", background: "rgba(0,212,255,0.06)",
                border: "1px solid var(--border)", padding: "0.2rem 0.6rem", borderRadius: "4px",
              }}>
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div style={{ animation: "fadeInUp 0.5s 0.2s ease both" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em",
          color: "var(--text-primary)", marginBottom: "0.5rem",
        }}>
          Work Experience
        </h2>
        <div style={{ width: "60px", height: "3px", background: "var(--gradient-accent)", borderRadius: "2px", marginTop: "0.75rem", marginBottom: "2rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} style={{
              background: "var(--card-bg)",
              border: `1px solid ${exp.current ? "var(--border-strong)" : "var(--border)"}`,
              borderLeft: `4px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
              borderRadius: "14px",
              padding: "2rem",
              backdropFilter: "blur(8px)",
              animation: `fadeInUp 0.5s ${i * 0.1}s ease both`,
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = exp.current ? "var(--border-strong)" : "var(--border)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span style={{
                        background: "rgba(0,212,255,0.12)", border: "1px solid var(--accent)",
                        color: "var(--accent)", fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem", padding: "0.15rem 0.5rem", borderRadius: "4px", letterSpacing: "0.08em",
                      }}>
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p style={{ color: "var(--accent)", fontSize: "0.9rem", marginTop: "0.2rem" }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}>
                  {exp.period}
                </span>
              </div>

              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {exp.highlights.map((hl, j) => (
                  <li key={j} style={{
                    color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7,
                    listStyleType: "none", position: "relative", paddingLeft: "1rem",
                  }}>
                    <span style={{
                      position: "absolute", left: 0, top: "0.6em",
                      width: "5px", height: "5px", borderRadius: "50%",
                      background: "var(--accent)", display: "block",
                    }} />
                    {hl}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
