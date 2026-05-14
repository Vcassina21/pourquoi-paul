"use client";

import { MANIFESTE } from "@/lib/constants";
import useReveal from "./useReveal";
import Grain from "./Grain";

export default function Manifeste({ medias }) {
  const [ref, visible] = useReveal();
  const photoUrl = medias?.manifesteUrl || null;
  const hasPhoto = !!photoUrl;

  return (
    <section id="manifeste" ref={ref} style={{ padding: "140px 40px", maxWidth: 1300, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1s ease" }}>
      <div className="manifeste-grid" style={{ display: "grid", gridTemplateColumns: hasPhoto ? "1fr 1.1fr" : "1fr", gap: 80, alignItems: "center" }}>
        {hasPhoto && (
          <div className="manifeste-photo" style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", background: "linear-gradient(135deg, #1a1208 0%, #0a0a0a 100%)" }}>
            <img src={photoUrl} alt="Les chefs de Pourquoi Paul" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.92) contrast(1.05)", transition: "transform 0.8s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
            <Grain opacity={0.08} />
            <div style={{ position: "absolute", bottom: 24, left: 24, padding: "10px 16px", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,107,26,0.3)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>Les fondateurs</div>
            <div style={{ position: "absolute", top: 12, left: 12, width: 24, height: 24, borderTop: "1px solid rgba(255,107,26,0.4)", borderLeft: "1px solid rgba(255,107,26,0.4)" }} />
            <div style={{ position: "absolute", bottom: 12, right: 12, width: 24, height: 24, borderBottom: "1px solid rgba(255,107,26,0.4)", borderRight: "1px solid rgba(255,107,26,0.4)" }} />
          </div>
        )}
        <div style={{ textAlign: hasPhoto ? "left" : "center" }}>
          <div style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: hasPhoto ? "flex-start" : "center", gap: 14 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>L'Esprit</span>
            {!hasPhoto && <span style={{ width: 24, height: 1, background: "var(--accent)" }} />}
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 300, lineHeight: 1.1, margin: "0 0 40px", color: "var(--text)" }}>
            {MANIFESTE.title1}<br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>{MANIFESTE.title2}</span>
          </h2>
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontSize: 18, lineHeight: 1.85, color: "var(--text-dim)", marginBottom: 24, fontWeight: 400 }}>{MANIFESTE.intro}</p>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24, lineHeight: 1.5, color: "var(--text)", fontWeight: 400, marginBottom: 48 }}>{MANIFESTE.quote}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, maxWidth: 560 }}>
            {MANIFESTE.values.map((v, i) => (
              <div key={i} style={{ padding: "20px 0 0", borderTop: "1px solid var(--border)", opacity: visible ? 1 : 0, transition: `opacity 0.6s ease ${0.3 + i * 0.15}s` }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontStyle: "italic", color: "var(--accent)", marginBottom: 6 }}>{v.title}</div>
                <div style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}