import { CONTACT_INFO, PERSONAL } from "../constants/data";

export default function Contact() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      <div style={{ marginBottom: "3rem", animation: "fadeInUp 0.5s ease both" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em",
          color: "var(--text-primary)", marginBottom: "0.5rem",
        }}>
          Get In Touch
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Available for cloud architecture consulting and senior DevOps roles
        </p>
        <div style={{ width: "60px", height: "3px", background: "var(--gradient-accent)", borderRadius: "2px", marginTop: "0.75rem" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* Contact cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", animation: "fadeInUp 0.5s 0.1s ease both" }}>
          {CONTACT_INFO.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                display: "flex", alignItems: "center", gap: "1rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <span style={{
                fontSize: "1.5rem", width: "48px", height: "48px",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid var(--border)", borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {item.icon}
              </span>
              <div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", marginBottom: "0.25rem" }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{ color: "var(--text-primary)", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", fontWeight: 500 }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Open to section */}
        <div style={{ animation: "fadeInUp 0.5s 0.2s ease both" }}>
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "2rem",
            height: "100%",
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "1rem",
            }}>
              Open To
            </h3>
            {[
              { title: "Cloud Architecture Consulting", desc: "AWS-native solutions design" },
              { title: "Senior DevOps / SRE Roles", desc: "Full-time or contract engagement" },
              { title: "AI/ML Ops Projects", desc: "LLM inference infra and MLOps pipelines" },
              { title: "Technical Mentoring", desc: "Cloud & DevOps coaching" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
                padding: "0.85rem 0",
                borderBottom: i < 3 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "var(--accent)", flexShrink: 0, marginTop: "0.45rem",
                }} />
                <div>
                  <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.95rem" }}>{item.title}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}

            <a
              href={`mailto:${PERSONAL.email}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", marginTop: "1.5rem",
                background: "var(--accent)", color: "var(--primary)",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem",
                padding: "0.85rem", borderRadius: "10px",
                textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              ✉ Send Message
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
