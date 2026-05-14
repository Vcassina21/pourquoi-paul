"use client";

import { CONCEPT } from "@/lib/constants";
import useReveal from "./useReveal";

export default function Concept({ medias }) {
  const [ref, visible] = useReveal();
  const conceptImg = medias?.conceptUrl || null;

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        padding: "120px 40px",
        overflow: "hidden",
        background: conceptImg
          ? `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url(${conceptImg}) center/cover no-repeat`
          : "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "all 1s ease",
        position: "relative",
        zIndex: 2,
      }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>
              {CONCEPT.eyebrow}
            </span>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 300, margin: "0 0 32px", lineHeight: 1.1, color: "var(--text)" }}>
            {CONCEPT.title1}<br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>{CONCEPT.title2}</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-dim)", maxWidth: 700, margin: "0 auto", lineHeight: 1.85, fontWeight: 400 }}>
            {CONCEPT.body}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {CONCEPT.highlights.map((item, i) => (
            <div key={i} style={{
              padding: "32px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
              backdropFilter: "blur(10px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.7s ease ${i * 0.15}s`,
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14, fontWeight: 600 }}>
                {String(i + 1).padStart(2, "0")} ·
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontStyle: "italic", fontWeight: 400, color: "var(--text)", margin: "0 0 14px", lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}