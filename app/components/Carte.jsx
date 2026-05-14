"use client";

import { useState, useEffect } from "react";
import { CARTE } from "@/lib/constants";
import useReveal from "./useReveal";

export default function Carte() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState("restaurant");
  const [carteData, setCarteData] = useState(null);

  useEffect(() => {
    fetch("/api/carte").then(r => r.json()).then(data => {
      if (data.restaurant?.sections?.length > 0 || data.terrasse?.sections?.length > 0) {
        setCarteData(data);
      }
    });
  }, []);

  const source = carteData || CARTE;
  const current = {
    subtitle: CARTE[active]?.subtitle,
    desc: CARTE[active]?.desc,
    sections: carteData ? carteData[active]?.sections || [] : CARTE[active]?.sections || [],
  };

  return (
    <section id="carte" ref={ref} style={{ padding: "120px 32px", maxWidth: 1200, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 1s ease" }} aria-labelledby="carte-title">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ marginBottom: 22, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} aria-hidden="true" />
          <span style={{ fontSize: 13, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>La Carte</span>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} aria-hidden="true" />
        </div>
        <h2 id="carte-title" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, margin: "0 0 24px", lineHeight: 1.15, color: "var(--text)" }}>
          Au gré des <span style={{ fontStyle: "italic", color: "var(--accent)" }}>humeurs</span>
        </h2>
        <p style={{ fontSize: 17, color: "var(--text-dim)", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>{CARTE.intro}</p>
      </div>

      {/* Tabs */}
      <div role="tablist" style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 56, borderBottom: "1px solid var(--border)", flexWrap: "wrap" }}>
        {[{ key: "restaurant", label: "Au Restaurant" }, { key: "terrasse", label: "En Terrasse" }].map((tab) => (
          <button key={tab.key} role="tab" aria-selected={active === tab.key} onClick={() => setActive(tab.key)} className="carte-tab"
            style={{ padding: "18px 36px", background: "transparent", color: active === tab.key ? "var(--accent)" : "var(--text-dim)", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, borderBottom: active === tab.key ? "2.5px solid var(--accent)" : "2.5px solid transparent", marginBottom: -1, transition: "all 0.3s", position: "relative", top: 1, minHeight: 56 }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 30, fontWeight: 400, color: "var(--text)", margin: "0 0 10px" }}>{current.subtitle}</h3>
        <p style={{ fontSize: 15, color: "var(--muted)", margin: 0 }}>{current.desc}</p>
      </div>

      <div role="tabpanel" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, maxWidth: 1100, margin: "0 auto" }}>
        {current.sections.map((section, i) => (
          <div key={`${active}-${i}`}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontStyle: "italic", fontWeight: 400, color: "var(--accent)", margin: "0 0 28px", paddingBottom: 14, borderBottom: "1px solid var(--border)" }}>
              {section.name}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {section.items.map((item, j) => (
                <div key={j} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 17, color: "var(--text)", fontWeight: 600, flex: "1 1 200px" }}>{item.name}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--accent)", fontWeight: 500, flexShrink: 0 }}>{item.price}</span>
                  </div>
                  {item.desc && <p style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 600, margin: "0 auto 24px", padding: "16px 24px", borderLeft: "3px solid var(--accent)", background: "rgba(255,107,26,0.05)" }}>
  <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 16, color: "var(--text-dim)", margin: 0 }}>
    Notre pain ? Fait maison. Enfin, quand on a le temps.
  </p>
</div>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 16, color: "var(--muted)", margin: 0 }}>{CARTE.note}</p>
      </div>
    </section>
  );
}