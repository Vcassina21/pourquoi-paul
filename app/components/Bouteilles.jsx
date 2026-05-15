"use client";

import { useEffect, useRef, useState } from "react";

export default function Bouteilles({ medias }) {
  const [bouteilles, setBouteilles] = useState([]);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const speedRef = useRef(0.5);

  useEffect(() => {
    if (medias?.bouteilles?.length > 0) {
      setBouteilles(medias.bouteilles);
    }
  }, [medias]);

  useEffect(() => {
    if (bouteilles.length === 0) return;
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      posRef.current -= speedRef.current;
      const totalWidth = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= totalWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [bouteilles]);

  if (!bouteilles.length) return null;

  const doubled = [...bouteilles, ...bouteilles];

  return (
    <section style={{ padding: "80px 0", overflow: "hidden", position: "relative", background: "var(--bg)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      
      {/* Titre */}
      <div style={{ textAlign: "center", marginBottom: 48, padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent)" }}>La Cave</span>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--text-dim)", margin: 0 }}>
          Quelques bouteilles qui nous ressemblent
        </p>
      </div>

      {/* Fondu gauche et droite */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, var(--bg), transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, var(--bg), transparent)", zIndex: 2, pointerEvents: "none" }} />

      {/* Carousel */}
      <div style={{ overflow: "hidden" }}
        onMouseEnter={() => { speedRef.current = 0.15; }}
        onMouseLeave={() => { speedRef.current = 0.5; }}
      >
        <div ref={trackRef} style={{ display: "flex", gap: 32, willChange: "transform" }}>
          {doubled.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, width: 200, height: 340, position: "relative" }}>
              <img
                src={src}
                alt={`Bouteille ${(i % bouteilles.length) + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.6))",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08) translateY(-8px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) translateY(0)"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}