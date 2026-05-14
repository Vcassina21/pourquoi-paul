"use client";

import { CAVE } from "@/lib/constants";
import useReveal from "./useReveal";
import Grain from "./Grain";

export default function Cave({ medias }) {
  const [ref, visible] = useReveal();
  const caveImg = medias?.caveUrl || null;

  return (
    <section
      id="cave"
      ref={ref}
      style={{
        position: "relative",
        padding: "180px 40px",
        textAlign: "center",
        background: caveImg
          ? `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url(${caveImg}) center/cover no-repeat`
          : "radial-gradient(ellipse at center, #1a1208 0%, #0a0805 80%)",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Grain opacity={0.06} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 1.2s ease" }}>
        <div style={{ marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>La Cave</span>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
        </div>

        <blockquote style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 300, lineHeight: 1.25, color: "var(--text)", margin: "0 0 32px", padding: "0 20px", letterSpacing: "-0.01em" }}>
          « {CAVE.quotePart1}<br />
          {CAVE.quotePart2}{" "}
          <span style={{ color: "var(--accent)" }}>{CAVE.quotePart3}</span> »
        </blockquote>

        <div style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 56 }}>
          — {CAVE.author}
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--text-dim)", maxWidth: 640, margin: "0 auto 56px", fontWeight: 400 }}>
          {CAVE.body}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 48 }}>
          {CAVE.types.map((type, i) => (
            <div key={i} style={{ padding: "10px 20px", border: "1px solid var(--border-light)", color: "var(--text-dim)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}