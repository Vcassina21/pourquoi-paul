"use client";

import { MANIFESTE } from "@/lib/constants";
import useReveal from "./useReveal";
import Grain from "./Grain";

export default function Manifeste({ medias }) {
  const [ref, visible] = useReveal();
  const photoUrl = medias?.manifesteUrl || null;
  const hasPhoto = !!photoUrl;

  return (
    <section id="manifeste" ref={ref} style={{ padding: "80px 24px", maxWidth: "100%", overflow: "hidden", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1s ease" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        
        {/* Photo — uniquement si disponible et sur desktop */}
        {hasPhoto && (
          <div style={{ position: "relative", width: "100%", maxWidth: 600, margin: "0 auto", aspectRatio: "4/3", overflow: "hidden" }}>
            <img src={photoUrl} alt="Les chefs de Pourquoi Paul" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.92) contrast(1.05)" }} />
            <Grain opacity={0.08} />
            <div style={{ position: "absolute", bottom: 24, left: 24, padding: "10px 16px", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,107,26,0.3)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>Les fondateurs</div>
          </div>
        )}

        {/* Texte */}
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>L'Esprit</span>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 300, lineHeight: 1.1, margin: "0 0 32px", color: "var(--text)" }}>
            {MANIFESTE.title1}<br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>{MANIFESTE.title2}</span>
          </h2>

          <p style={{ fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.85, color: "var(--text-dim)", marginBottom: 24, fontWeight: 400, maxWidth: 640, margin: "0 auto 24px" }}>{MANIFESTE.intro}</p>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.5, color: "var(--text)", fontWeight: 400, marginBottom: 48, maxWidth: 640, margin: "0 auto 48px" }}>{MANIFESTE.quote}</p>

          {/* Valeurs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, maxWidth: 640, margin: "0 auto" }}>
            {MANIFESTE.values.map((v, i) => (
              <div key={i} style={{ padding: "20px 0 0", borderTop: "1px solid var(--border)", opacity: visible ? 1 : 0, transition: `opacity 0.6s ease ${0.3 + i * 0.15}s` }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", color: "var(--accent)", marginBottom: 6 }}>{v.title}</div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sur desktop : layout côte à côte */}
        <style>{`
          @media (min-width: 900px) {
            #manifeste > div {
              flex-direction: row !important;
              align-items: center;
            }
            #manifeste > div > div:first-child {
              flex: 1;
              max-width: 480px !important;
            }
            #manifeste > div > div:last-child {
              flex: 1.1;
              text-align: left !important;
            }
            #manifeste > div > div:last-child .values-grid {
              margin: 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}