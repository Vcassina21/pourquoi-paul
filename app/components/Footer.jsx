"use client";

import { RESTAURANT } from "@/lib/constants";

export default function Footer({ onScrollTop, medias }) {
  const year = new Date().getFullYear();
  const logoSrc = medias?.logoUrl || "/logo.png";

  return (
    <footer style={{ padding: "60px 40px 32px", background: "var(--bg)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div onClick={onScrollTop} style={{ cursor: "pointer", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <img src={logoSrc} alt="Pourquoi Paul" style={{ width: 72, height: 72, objectFit: "contain" }} />
          <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--text)" }}>
            {RESTAURANT.name}
          </div>
        </div>

        <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
          {RESTAURANT.address.line1} · {RESTAURANT.address.line2}<br />
          <a href={`tel:${RESTAURANT.phoneRaw}`} style={{ color: "inherit", textDecoration: "none" }}>
            {RESTAURANT.phone}
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
          {RESTAURANT.social.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--muted)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.name}
            </a>
          ))}
        </div>

        <div style={{ paddingTop: 24, borderTop: "1px solid var(--border)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span>© {year} {RESTAURANT.name} · Tous droits réservés</span>
          <span>Site conçu par <span style={{ color: "var(--accent)" }}>Victor Cassina</span></span>
        </div>
      </div>
    </footer>
  );
}