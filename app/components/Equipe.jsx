"use client";

import { TEAM } from "@/lib/constants";
import useReveal from "./useReveal";
import Grain from "./Grain";

export default function Equipe({ medias }) {
  const [ref, visible] = useReveal();
  const photos = [
    medias?.equipe1Url || null,
    medias?.equipe2Url || null,
    medias?.equipe3Url || null,
  ];
  return (
    <section id="equipe" ref={ref} style={{ padding: "120px 40px", maxWidth: 1400, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 1s ease" }}>
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>L'Équipe</span>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, margin: 0, lineHeight: 1.1, color: "var(--text)" }}>
          Les visages derrière<br />
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>chaque assiette</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
        {TEAM.map((member, i) => (
          <article key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: `all 0.8s ease ${i * 0.15}s`, cursor: "pointer", position: "relative", overflow: "hidden" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,107,26,0.4)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ height: 400, background: member.gradient || "var(--card)", position: "relative", overflow: "hidden" }}>
              {photos[i] && (
                <img src={photos[i]} alt={`${member.name}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) contrast(1.05)", transition: "transform 0.6s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
              )}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)", pointerEvents: "none" }} />
              <Grain opacity={0.1} />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, zIndex: 2 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginBottom: 6 }}>{member.role}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, color: "#fff", margin: 0, lineHeight: 1.1 }}>{member.name}</h3>
              </div>
            </div>
            <div style={{ padding: "28px 28px 32px" }}>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-dim)", margin: "0 0 20px", fontWeight: 400 }}>{member.bio}</p>
              <div style={{ paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--accent)", margin: 0, lineHeight: 1.5 }}>« {member.quote} »</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}