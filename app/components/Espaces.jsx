"use client";

import { SPACES } from "@/lib/constants";
import useReveal from "./useReveal";
import Grain from "./Grain";

function SpaceBlock({ space, reverse, index }) {
  const [ref, visible] = useReveal();
  return (
    <article ref={ref} className="space-block" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, minHeight: 400, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: `all 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`, direction: reverse ? "rtl" : "ltr" }}>
      <div style={{ background: space.image ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${space.image}) center/cover no-repeat` : space.bg, position: "relative", overflow: "hidden", direction: "ltr", minHeight: 400 }}>
        <Grain opacity={0.15} />
        {!space.image && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "min(180px, 18vw)", fontWeight: 300, color: "rgba(255,107,26,0.15)", lineHeight: 1, fontStyle: "italic" }}>{space.num}</span>
          </div>
        )}
      </div>
      <div style={{ padding: "60px 56px", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--surface)", border: "1px solid var(--border)", direction: "ltr" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>{space.tagline}</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 300, lineHeight: 1.05, margin: "0 0 24px", color: "var(--text)", fontStyle: "italic" }}>{space.name}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-dim)", margin: 0, fontWeight: 400, maxWidth: 460 }}>{space.desc}</p>
      </div>
    </article>
  );
}

export default function Espaces({ medias }) {
  const [ref, visible] = useReveal();
  const images = [
    medias?.espaceRestaurantUrl || null,
    medias?.espaceTerrasseUrl || null,
    medias?.espaceBarUrl || null,
  ];
  return (
    <section id="espaces" ref={ref} style={{ padding: "120px 40px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 80, opacity: visible ? 1 : 0, transition: "opacity 1s ease" }}>
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>Les Espaces</span>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, margin: 0, lineHeight: 1.1, color: "var(--text)" }}>
          Trois lieux, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>une âme</span>
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {SPACES.map((space, i) => (
          <SpaceBlock key={i} space={{ ...space, image: images[i] }} reverse={i % 2 === 1} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .space-block {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .space-block > div:first-child {
            min-height: 280px !important;
            height: 280px !important;
          }
          .space-block > div:last-child {
            padding: 32px 24px !important;
          }
          .space-block h3 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}