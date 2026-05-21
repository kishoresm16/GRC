import { useState } from "react";

const phases = [
  {
    id: 1,
    num: "01",
    label: "IT & Security Basics",
    duration: "4–6 wks",
    color: "#00FF88",
    glow: "0 0 20px #00FF8866",
    icon: "🖥️",
    cert: "Google IT Cert / ITF+",
    topics: ["OSI Model & Networking", "Windows & Linux Basics", "CIA Triad & Encryption", "Cloud Shared Responsibility"],
    resources: [
      { name: "Professor Messer", url: "https://www.professormesser.com" },
      { name: "TryHackMe Pre-Security", url: "https://tryhackme.com/path/outline/presecurity" },
      { name: "Cybrary Free Courses", url: "https://www.cybrary.it" },
    ],
  },
  {
    id: 2,
    num: "02",
    label: "GRC Frameworks",
    duration: "6–8 wks",
    color: "#00D4FF",
    glow: "0 0 20px #00D4FF66",
    icon: "📋",
    cert: "ISC2 CC (Free!) / Security+",
    topics: ["NIST CSF 2.0", "ISO 27001 / 27002", "SOC 2 · PCI-DSS · HIPAA", "GDPR & FedRAMP Basics"],
    resources: [
      { name: "NIST CSF 2.0 Free PDF", url: "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf" },
      { name: "ISC2 CC Free Course", url: "https://www.coursera.org/learn/isc2-systems-and-network-security" },
      { name: "CSA Cloud Controls Matrix", url: "https://cloudsecurityalliance.org/research/cloud-controls-matrix" },
    ],
  },
  {
    id: 3,
    num: "03",
    label: "Risk Management",
    duration: "4–6 wks",
    color: "#FFD700",
    glow: "0 0 20px #FFD70066",
    icon: "⚠️",
    cert: "CRISC (Advanced)",
    topics: ["Risk Identification & Assessment", "Qualitative vs Quantitative (ALE)", "FAIR Model", "Third-Party Risk (TPRM)"],
    resources: [
      { name: "NIST SP 800-30 (Free PDF)", url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf" },
      { name: "FAIR Institute Resources", url: "https://www.fairinstitute.org/resources" },
      { name: "ENISA Threat Landscape 2024", url: "https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024" },
    ],
  },
  {
    id: 4,
    num: "04",
    label: "Policies & Auditing",
    duration: "4–5 wks",
    color: "#FF3E3E",
    glow: "0 0 20px #FF3E3E66",
    icon: "🔍",
    cert: "CISA Prep",
    topics: ["Policy vs Standard vs Procedure", "Control Types (Preventive/Detective)", "Audit Lifecycle", "GRC Tools (ServiceNow, OneTrust)"],
    resources: [
      { name: "SANS Policy Templates", url: "https://www.sans.org/information-security-policy/" },
      { name: "CIS Controls v8 (Free PDF)", url: "https://www.cisecurity.org/controls/cis-controls-list" },
      { name: "IIA Audit Standards", url: "https://www.theiia.org/en/standards/" },
    ],
  },
  {
    id: 5,
    num: "05",
    label: "Specialise & Job Hunt",
    duration: "Ongoing",
    color: "#00FF88",
    glow: "0 0 20px #00FF8866",
    icon: "🚀",
    cert: "CISM / CISSP / CySA+",
    topics: ["Build Risk Register Portfolio", "Write Sample IS Policy", "Map Company to NIST CSF", "Apply: Compliance/Risk Analyst"],
    resources: [
      { name: "NICE Career Pathways", url: "https://niccs.cisa.gov/workforce-development/cyber-career-pathways" },
      { name: "ISC2 Community (Free)", url: "https://community.isc2.org" },
      { name: "r/cybersecurity Career Thread", url: "https://www.reddit.com/r/cybersecurity" },
    ],
  },
];

export default function GRCRoadmap() {
  const [active, setActive] = useState(null);
  const selected = phases.find((p) => p.id === active);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      fontFamily: "'Courier New', monospace",
      color: "#fff",
      padding: "24px 16px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* bg grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: "#00D4FF", letterSpacing: 4, marginBottom: 6 }}>
          @cyber_crookz
        </div>
        <h1 style={{
          margin: 0, fontSize: "clamp(22px,4vw,36px)", fontWeight: 900,
          background: "linear-gradient(90deg,#00FF88,#00D4FF)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: 2,
        }}>
          GRC BEGINNER ROADMAP
        </h1>
        <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>
          Governance · Risk · Compliance — Click a phase to explore
        </div>
      </div>

      {/* Flowchart */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 0,
      }}>
        {phases.map((phase, i) => (
          <div key={phase.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            {/* Phase Card */}
            <div
              onClick={() => setActive(active === phase.id ? null : phase.id)}
              style={{
                cursor: "pointer",
                width: "min(560px, 95%)",
                background: active === phase.id
                  ? `linear-gradient(135deg, #0F1923 0%, #050D12 100%)`
                  : "#0D1117",
                border: `2px solid ${active === phase.id ? phase.color : "#1E2A38"}`,
                borderRadius: 12,
                padding: "16px 20px",
                boxShadow: active === phase.id ? phase.glow : "none",
                transition: "all 0.25s ease",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              {/* Number badge */}
              <div style={{
                width: 48, height: 48, borderRadius: 10, flexShrink: 0,
                background: `${phase.color}22`,
                border: `2px solid ${phase.color}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 900, color: phase.color, letterSpacing: 1,
              }}>
                {phase.num}
              </div>

              {/* Icon + label */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                  {phase.icon} {phase.label}
                </div>
                <div style={{ fontSize: 11, color: "#666" }}>⏱ {phase.duration}</div>
              </div>

              {/* Cert badge */}
              <div style={{
                fontSize: 9, color: phase.color, background: `${phase.color}18`,
                border: `1px solid ${phase.color}44`,
                borderRadius: 6, padding: "3px 8px", textAlign: "center",
                maxWidth: 110,
              }}>
                🏆 {phase.cert}
              </div>

              {/* Arrow toggle */}
              <div style={{
                color: phase.color, fontSize: 16, transition: "transform 0.2s",
                transform: active === phase.id ? "rotate(180deg)" : "none",
              }}>▼</div>
            </div>

            {/* Expanded detail panel */}
            {active === phase.id && (
              <div style={{
                width: "min(560px, 95%)",
                background: "#080D12",
                border: `1px solid ${phase.color}55`,
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                padding: "16px 20px",
                marginTop: -4,
              }}>
                {/* Topics */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, color: phase.color, fontWeight: 700,
                    letterSpacing: 2, marginBottom: 8 }}>WHAT TO LEARN</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {phase.topics.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize: 10, color: "#ccc",
                        background: "#111827",
                        border: "1px solid #2A3A4A",
                        borderRadius: 6, padding: "4px 10px",
                      }}>• {t}</span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <div style={{ fontSize: 10, color: "#00D4FF", fontWeight: 700,
                    letterSpacing: 2, marginBottom: 8 }}>FREE RESOURCES</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {phase.resources.map((r, ri) => (
                      <a key={ri} href={r.url} target="_blank" rel="noreferrer"
                        style={{
                          fontSize: 10, color: "#00FF88", textDecoration: "none",
                          display: "flex", alignItems: "center", gap: 6,
                          padding: "5px 10px",
                          background: "#0F1923",
                          borderRadius: 6,
                          border: "1px solid #1A2A1A",
                          transition: "border-color 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "#00FF8888"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "#1A2A1A"}
                      >
                        <span style={{ color: "#00FF88" }}>→</span>
                        <span style={{ flex: 1 }}>{r.name}</span>
                        <span style={{ color: "#444", fontSize: 9 }}>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Connector arrow between phases */}
            {i < phases.length - 1 && (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                margin: "6px 0",
              }}>
                <div style={{ width: 2, height: 16, background: "#1E2A38" }} />
                <div style={{
                  width: 0, height: 0,
                  borderLeft: "7px solid transparent",
                  borderRight: "7px solid transparent",
                  borderTop: `10px solid #00FF8844`,
                }} />
              </div>
            )}
          </div>
        ))}

        {/* Final destination badge */}
        <div style={{
          marginTop: 16,
          width: "min(560px, 95%)",
          background: "linear-gradient(135deg, #001A0D, #0A1628)",
          border: "2px solid #00FF88",
          borderRadius: 12,
          padding: "16px 24px",
          textAlign: "center",
          boxShadow: "0 0 30px #00FF8833",
        }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>🎯</div>
          <div style={{ fontWeight: 900, fontSize: 15, color: "#00FF88", letterSpacing: 2 }}>
            GRC ANALYST — JOB READY
          </div>
          <div style={{ fontSize: 10, color: "#888", marginTop: 4 }}>
            ~6 months · Compliance · Risk · Audit · Privacy
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginTop: 28 }}>
        <div style={{ fontSize: 10, color: "#444" }}>
          Made for <span style={{ color: "#00FF88" }}>@cyber_crookz</span> · GRC Reels Series
        </div>
      </div>
    </div>
  );
}
