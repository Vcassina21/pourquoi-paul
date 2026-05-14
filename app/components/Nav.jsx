"use client";

import { NAV_ITEMS, RESTAURANT } from "@/lib/constants";

export default function Nav({ scrolled, activeSection, onNavigate, menuOpen, setMenuOpen, medias }) {
  const logoSrc = medias?.logoUrl || "/logo.png";

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? "10px 40px" : "16px 40px",
          background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.4)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid rgba(42,42,42,0.3)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
        aria-label="Navigation principale"
      >
        <button onClick={() => onNavigate("hero")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: "4px", minHeight: 48, background: "none", border: "none" }} aria-label="Retour en haut">
          <img src={logoSrc} alt="Pourquoi Paul" style={{ width: 52, height: 52, objectFit: "contain" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "0.01em", color: "var(--text)" }}>
            {RESTAURANT.name}
          </span>
        </button>

        <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)}
              style={{ color: activeSection === item.id ? "var(--accent)" : "var(--text-dim)", fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, padding: "12px 4px", position: "relative", transition: "color 0.3s", minHeight: 48, display: "inline-flex", alignItems: "center" }}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
              {activeSection === item.id && (
                <span style={{ position: "absolute", bottom: 6, left: 4, right: 4, height: 1.5, background: "var(--accent)" }} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>

        <button onClick={() => onNavigate("trouver")} className="nav-cta"
          style={{ padding: "12px 24px", background: "transparent", border: "1.5px solid var(--accent)", color: "var(--accent)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, transition: "all 0.3s", minHeight: 48 }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
        >
          Nous Trouver
        </button>

        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", color: "var(--text)", padding: 14, minWidth: 48, minHeight: 48, alignItems: "center", justifyContent: "center" }}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}
        >
          <svg width="26" height="20" viewBox="0 0 26 20">
            <path d={menuOpen ? "M3 3L23 17 M3 17L23 3" : "M0 2H26 M0 10H26 M0 18H26"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,10,10,0.98)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", zIndex: 99, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "100px 24px 40px", overflowY: "auto" }}
          role="dialog" aria-label="Menu de navigation"
        >
          <img src={logoSrc} alt="Pourquoi Paul" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 16 }} />
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)}
              style={{ color: activeSection === item.id ? "var(--accent)" : "var(--text)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 32, fontWeight: 400, padding: "12px 24px", minHeight: 56, width: "100%", maxWidth: 400, textAlign: "center", borderBottom: "1px solid var(--border)" }}
            >
              {item.label}
            </button>
          ))}
          <a href={`tel:${RESTAURANT.phoneRaw}`}
            style={{ marginTop: 24, padding: "16px 32px", background: "var(--accent)", color: "var(--bg)", fontSize: 16, fontWeight: 700, letterSpacing: "0.04em", textDecoration: "none", minHeight: 56, display: "inline-flex", alignItems: "center", gap: 10 }}
          >
            📞 {RESTAURANT.phone}
          </a>
        </div>
      )}
    </>
  );
}