import { PERSONAL, ACHIEVEMENTS } from "../constants/data";

export default function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>

      {/* Hero */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem",
        alignItems: "center", marginBottom: "5rem",
        animation: "fadeInUp 0.6s ease both",
      }}>
        {/* Left: Text */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(0,212,255,0.08)", border: "1px solid var(--border-strong)",
            borderRadius: "100px", padding: "0.35rem 1rem", marginBottom: "1.5rem",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", animation: "pulse-glow 2s infinite" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.08em" }}>
              {PERSONAL.tagline}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
          }}>
            {PERSONAL.name.split(" ").map((word, i) => (
              <span key={i} style={{ display: "block", color: i === 0 ? "var(--accent)" : "var(--text-primary)" }}>
                {word}
              </span>
            ))}
          </h1>

          <p style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "var(--text-secondary)", fontWeight: 600,
            marginBottom: "1.5rem", letterSpacing: "0.01em",
          }}>
            {PERSONAL.title}
          </p>

          <p style={{
            color: "var(--text-secondary)", fontSize: "1rem",
            maxWidth: "560px", lineHeight: 1.8, marginBottom: "2.5rem",
          }}>
            {PERSONAL.summary}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={PERSONAL.resumeFile}
              download="Vinoth_Veliappan_Resume.pdf"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--accent)", color: "var(--primary)",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem",
                padding: "0.75rem 1.75rem", borderRadius: "8px",
                transition: "all 0.2s", textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              ⬇ Download Resume
            </a>

            <a
              href={`mailto:${PERSONAL.email}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", color: "var(--accent)",
                border: "1px solid var(--border-strong)",
                fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.95rem",
                padding: "0.75rem 1.75rem", borderRadius: "8px",
                transition: "all 0.2s", textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--glow-accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              ✉ Get In Touch
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "0.9rem",
                padding: "0.75rem 1.5rem", borderRadius: "8px",
                transition: "all 0.2s", textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: "220px", height: "220px",
            borderRadius: "50%",
            border: "3px solid var(--accent)",
            boxShadow: "0 0 40px rgba(0,212,255,0.25), 0 0 80px rgba(0,212,255,0.1)",
            overflow: "hidden",
            position: "relative",
          }}>
            <img
              src={PERSONAL.photoFile}
              alt={PERSONAL.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={e => {
                // Fallback avatar if photo not found
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = `
                  <div style="width:100%;height:100%;background:linear-gradient(135deg,#132240,#0A1628);
                    display:flex;align-items:center;justify-content:center;
                    font-family:'Syne',sans-serif;font-size:4rem;font-weight:800;color:#00D4FF">
                    V
                  </div>`;
              }}
            />
          </div>
          <p style={{
            textAlign: "center", marginTop: "1rem",
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}>
            📍 {PERSONAL.location}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
        animation: "fadeInUp 0.6s 0.2s ease both",
      }}>
        {ACHIEVEMENTS.map(({ metric, label }, i) => (
          <div
            key={i}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.75rem 1.5rem",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.background = "var(--surface-hover)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1,
              marginBottom: "0.5rem",
            }}>
              {metric}
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", fontWeight: 500 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          div[style*="gridTemplateColumns: 1fr auto"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
