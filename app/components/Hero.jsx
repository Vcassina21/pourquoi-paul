"use client";

import { RESTAURANT } from "@/lib/constants";
import Grain from "./Grain";

export default function Hero({ onCTA, medias }) {
  const heroImg = medias?.heroImageUrl || null;
  const logoSrc = medias?.logoUrl || "/logo.png";

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 32px 60px",
        overflow: "hidden",
        background: heroImg
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImg}) center/cover no-repeat`
          : "radial-gradient(ellipse at center top, #1a1208 0%, #0d0a07 60%)",
      }}
    >
      <Grain opacity={0.08} />

      {/* Ornements décoratifs */}
      <div style={{ position: "absolute", top: "18%", left: "8%", width: 1, height: 64, background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", opacity: 0.4 }} aria-hidden="true" />
      <div style={{ position: "absolute", bottom: "22%", right: "10%", width: 1, height: 64, background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", opacity: 0.4 }} aria-hidden="true" />

      {/* Logo filigrane */}
<div style={{
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "clamp(200px, 28vw, 380px)",
  height: "clamp(200px, 28vw, 380px)",
  zIndex: 1,
  pointerEvents: "none",
}}>
  <img
    src={logoSrc}
    alt=""
    aria-hidden="true"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      opacity: 0.35,
      filter: "brightness(10)",
    }}
  />
</div>

      {/* Contenu */}
      <div style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        maxWidth: 1200,
        width: "100%",
        animation: "heroFade 1.2s ease-out",
      }}>
        <div style={{ marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <span style={{ width: 30, height: 1, background: "var(--accent)", opacity: 0.6 }} aria-hidden="true" />
          <span style={{ fontSize: 13, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
            {RESTAURANT.region} · Depuis {RESTAURANT.founded}
          </span>
          <span style={{ width: 30, height: 1, background: "var(--accent)", opacity: 0.6 }} aria-hidden="true" />
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(56px, 11vw, 180px)",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          margin: "0 0 32px",
          color: "var(--text)",
        }}>
          Pourquoi{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 500 }}>Paul</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(18px, 2.2vw, 26px)",
          color: "var(--text-dim)",
          maxWidth: 640,
          margin: "0 auto 56px",
          fontWeight: 400,
          lineHeight: 1.5,
          whiteSpace: "pre-line",
        }}>
          {RESTAURANT.tagline}
        </p>

        <button
          onClick={onCTA}
          style={{ padding: "18px 42px", background: "transparent", border: "1.5px solid var(--accent)", color: "var(--accent)", fontSize: 14, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, transition: "all 0.4s", minHeight: 56, minWidth: 200 }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
        >
          Découvrir le restaurant
        </button>
      </div>
    </section>
  );
}