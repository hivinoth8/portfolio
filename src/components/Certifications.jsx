import { CERTIFICATIONS } from "../constants/data";

export default function Certifications() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      <div style={{ marginBottom: "3rem", animation: "fadeInUp 0.5s ease both" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em",
          color: "var(--text-primary)", marginBottom: "0.5rem",
        }}>
          Certifications
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          Industry-recognized credentials validating my expertise
        </p>
        <div style={{ width: "60px", height: "3px", background: "var(--gradient-accent)", borderRadius: "2px", marginTop: "0.75rem" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={i}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-strong)",
              borderRadius: "16px",
              padding: "2.5rem",
              backdropFilter: "blur(8px)",
              animation: `fadeInUp 0.5s ${i * 0.1}s ease both`,
              transition: "all 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,212,255,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Glow orb */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "120px", height: "120px", borderRadius: "50%",
              background: `radial-gradient(circle, ${cert.color}22, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Badge */}
            <div style={{
              width: "72px", height: "72px", borderRadius: "14px",
              background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}11)`,
              border: `2px solid ${cert.color}66`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "1.25rem", color: cert.color,
              marginBottom: "1.5rem",
              boxShadow: `0 4px 20px ${cert.color}22`,
            }}>
              {cert.badge}
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.15rem", color: "var(--text-primary)",
              lineHeight: 1.3, marginBottom: "0.5rem",
            }}>
              {cert.title}
            </h3>

            <p style={{ color: cert.color, fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.5rem" }}>
              {cert.issuer}
            </p>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              {cert.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.85rem" }}>📅</span>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}>
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Key Achievements */}
      <div style={{ marginTop: "4rem", animation: "fadeInUp 0.5s 0.3s ease both" }}>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "1.5rem", color: "var(--text-primary)",
          marginBottom: "1.5rem",
        }}>
          Key Achievements
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}>
          {[
            { icon: "🚀", text: "Cut release cycles from 2 hours → 15 minutes via Argo CD & GitHub Actions" },
            { icon: "⚡", text: "4× LLM throughput (1,200 → 4,800 req/sec) with vLLM PagedAttention on H100" },
            { icon: "🛡️", text: "Blocked 1,200+ malicious requests/day with AWS WAF + GuardDuty automation" },
            { icon: "📉", text: "Reduced MTTR by 60% via Prometheus/Grafana real-time anomaly detection" },
            { icon: "🏗️", text: "Migrated 12 legacy apps to AWS — 90% less downtime, $5K/yr savings" },
            { icon: "🔍", text: "Centralized 500 GB+ logs in OpenSearch, improving debug efficiency by 75%" },
            { icon: "⚙️", text: "GitHub Actions pipelines for 30+ repos, saving 200+ engineering hours/month" },
            { icon: "🌐", text: "Designed AWS infra for 80+ microservices on EKS/ECS, -35% API latency" },
          ].map((a, i) => (
            <div key={i} style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "1.25rem",
              display: "flex", alignItems: "flex-start", gap: "0.75rem",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{a.icon}</span>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
