"use client";

import { useState } from "react";
import { RESTAURANT, NEWSLETTER } from "@/lib/constants";
import useReveal from "./useReveal";

const inputStyle = {
  width: "100%",
  padding: "16px 18px",
  background: "var(--bg)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontSize: 16,
  fontFamily: "inherit",
  transition: "border-color 0.3s",
  minHeight: 52,
};

export default function Trouver() {
  const [ref, visible] = useReveal();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setError("");
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Adresse email invalide.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'envoi");
      } else {
        setEmail("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError("Erreur réseau. Réessayez.");
    }
    setSubmitting(false);
  };

  return (
    <section
      id="trouver"
      ref={ref}
      style={{
        padding: "120px 32px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
      aria-labelledby="trouver-title"
    >
      <div
        className="trouver-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 80,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        <div>
          <div style={{ marginBottom: 22, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} aria-hidden="true" />
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 600,
              }}
            >
              Nous Trouver
            </span>
          </div>
          <h2
            id="trouver-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              margin: "0 0 44px",
              lineHeight: 1.15,
              color: "var(--text)",
            }}
          >
            On vous{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>attend</span>
          </h2>

          <div style={{ display: "grid", gap: 36 }}>
            <div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                Adresse
              </div>
              <address style={{ fontStyle: "normal" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 400,
                    color: "var(--text)",
                    lineHeight: 1.4,
                  }}
                >
                  {RESTAURANT.address.line1}
                  <br />
                  <span style={{ fontStyle: "italic" }}>{RESTAURANT.address.line2}</span>
                </div>
              </address>
            </div>

            <div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                Horaires
              </div>
              <div style={{ fontSize: 16, color: "var(--text)", lineHeight: 1.85 }}>
                {RESTAURANT.hours.map((h, i) => (
                  <div key={i}>
                    <strong style={{ color: "var(--accent)", fontWeight: 600 }}>
                      {h.days}
                    </strong>{" "}
                    · {h.time}
                  </div>
                ))}
                <div
                  style={{ color: "var(--muted)", fontSize: 14, marginTop: 8, fontStyle: "italic" }}
                >
                  {RESTAURANT.closed}
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                Contact
              </div>
              <div style={{ fontSize: 17, color: "var(--text)", lineHeight: 2 }}>
                <div>
                  <a
                    href={`tel:${RESTAURANT.phoneRaw}`}
                    style={{
                      color: "var(--accent)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                    }}
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${RESTAURANT.email}`}
                    style={{ color: "var(--text-dim)", textDecoration: "none" }}
                  >
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "22px 26px",
                border: "1px solid var(--border-light)",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 20,
                  color: "var(--text)",
                  lineHeight: 1.5,
                }}
              >
                On ne réserve pas par mail. Appelez-nous, ou venez.
              </div>
            </div>
          </div>
        </div>

        <div
          className="newsletter-block"
          style={{ paddingLeft: 40, borderLeft: "1px solid var(--border)" }}
        >
          <div style={{ marginBottom: 22, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} aria-hidden="true" />
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 600,
              }}
            >
              Newsletter
            </span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 36,
              fontWeight: 400,
              margin: "0 0 18px",
              lineHeight: 1.2,
              color: "var(--text)",
            }}
          >
            {NEWSLETTER.title1}{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              {NEWSLETTER.title2}
            </span>
          </h3>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-dim)",
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            {NEWSLETTER.desc}
          </p>

          {submitted ? (
            <div
              style={{
                padding: "20px",
                border: "1.5px solid var(--accent)",
                background: "rgba(201,169,110,0.12)",
                color: "var(--accent)",
                fontSize: 16,
                fontWeight: 500,
                animation: "fadeIn 0.4s ease",
              }}
              role="status"
            >
              ✓ Merci ! Vous êtes inscrit(e).
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <label
                htmlFor="newsletter-email"
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--text-dim)",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                Votre adresse email
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.fr"
                style={inputStyle}
                disabled={submitting}
                required
              />
              {error && (
                <div role="alert" style={{ color: "#fca5a5", fontSize: 14, marginTop: 8 }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  marginTop: 16,
                  width: "100%",
                  padding: "16px 24px",
                  background: "var(--accent)",
                  color: "var(--bg)",
                  fontSize: 14,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  transition: "all 0.3s",
                  opacity: submitting ? 0.6 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                  minHeight: 56,
                }}
              >
                {submitting ? "Inscription..." : "S'inscrire"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
