"use client";

import { useState, useEffect, useRef } from "react";
import useReveal from "./useReveal";

const inputStyle = {
  width: "100%", padding: "16px 18px", background: "var(--bg)",
  border: "1px solid var(--border)", color: "var(--text)",
  fontSize: 16, fontFamily: "inherit", transition: "border-color 0.3s", minHeight: 52,
};

function StarRating({ value, onChange, size = 22, readOnly = false }) {
  const [hover, setHover] = useState(0);
  const tapSize = readOnly ? size : Math.max(size, 44);
  return (
    <div style={{ display: "inline-flex", gap: readOnly ? 4 : 6 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" onClick={() => !readOnly && onChange?.(n)}
          onMouseEnter={() => !readOnly && setHover(n)} onMouseLeave={() => !readOnly && setHover(0)}
          style={{ cursor: readOnly ? "default" : "pointer", lineHeight: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", width: tapSize, height: tapSize, padding: 0 }}
          aria-label={`${n} étoile${n > 1 ? "s" : ""}`} tabIndex={readOnly ? -1 : 0}
        >
          <svg width={size} height={size} viewBox="0 0 24 24" fill={(hover || value) >= n ? "var(--accent)" : "transparent"} stroke="var(--accent)" strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review, adminMode, onDelete }) {
  return (
    <article style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "30px 28px", position: "relative", display: "flex", flexDirection: "column", gap: 16, minWidth: 300, maxWidth: 380, flex: "0 0 340px", scrollSnapAlign: "start" }}>
      {adminMode && (
        <button onClick={() => onDelete(review.id)} style={{ position: "absolute", top: 12, right: 12, background: "#7f1d1d", color: "#fff", padding: "8px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", minHeight: 36 }}>
          Supprimer
        </button>
      )}
      <StarRating value={review.rating} readOnly size={18} />
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 19, lineHeight: 1.6, color: "var(--text)", margin: 0, fontWeight: 400 }}>
        « {review.text} »
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)", marginTop: "auto" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>
            {review.name}
            {review.verified && <span style={{ color: "var(--accent)", marginLeft: 8 }} aria-label="Vérifié">✓</span>}
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
            {review.date}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Avis({ adminMode, adminPassword }) {
  const [ref, visible] = useReveal();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [error, setError] = useState("");
  const carouselRef = useRef(null);

  useEffect(() => { fetchReviews(); }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reviews");
      if (res.ok) setReviews(await res.json());
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const scroll = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setError("");
    if (!form.name.trim() || !form.text.trim()) { setError("Merci de remplir votre nom et votre avis."); return; }
    if (form.text.length < 20) { setError("Votre avis doit faire au moins 20 caractères."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Erreur lors de l'envoi"); }
      else { setReviews([data, ...reviews]); setForm({ name: "", rating: 5, text: "" }); setShowForm(false); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); }
    } catch { setError("Erreur réseau. Réessayez."); }
    setSubmitting(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet avis ?")) return;
    try {
      const res = await fetch("/api/reviews", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, password: adminPassword }) });
      if (res.ok) setReviews(reviews.filter((r) => r.id !== id));
      else { const data = await res.json(); alert(data.error || "Erreur de suppression"); }
    } catch { alert("Erreur réseau"); }
  };

  const avgRating = reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : "—";

  return (
    <section id="avis" ref={ref} style={{ padding: "120px 0", overflow: "hidden" }} aria-labelledby="avis-title">
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: visible ? 1 : 0, transition: "opacity 1s ease" }}>
          <div style={{ marginBottom: 22, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} aria-hidden="true" />
            <span style={{ fontSize: 13, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Témoignages</span>
            <span style={{ width: 24, height: 1, background: "var(--accent)" }} aria-hidden="true" />
          </div>
          <h2 id="avis-title" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, margin: "0 0 28px", lineHeight: 1.15, color: "var(--text)" }}>
            Ce qu'on dit <span style={{ fontStyle: "italic", color: "var(--accent)" }}>de nous</span>
          </h2>
          {!loading && reviews.length > 0 && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 16, padding: "14px 28px", border: "1px solid var(--border)", fontSize: 15, color: "var(--text-dim)", flexWrap: "wrap", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 26, fontStyle: "italic", color: "var(--accent)", fontWeight: 500 }}>{avgRating}</span>
              <StarRating value={Math.round(parseFloat(avgRating))} readOnly size={16} />
              <span style={{ fontSize: 14, color: "var(--muted)" }}>· {reviews.length} avis</span>
            </div>
          )}
        </div>

        <div style={{ marginBottom: 48, textAlign: "center" }}>
          {!showForm && !submitted && (
            <button onClick={() => setShowForm(true)}
              style={{ padding: "16px 36px", background: "transparent", border: "1.5px solid var(--accent)", color: "var(--accent)", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, transition: "all 0.3s", minHeight: 56 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
            >
              Laisser un avis
            </button>
          )}
          {submitted && (
            <div style={{ display: "inline-block", padding: "20px 32px", border: "1.5px solid var(--accent)", background: "rgba(255,107,26,0.12)", color: "var(--accent)", fontSize: 16, fontWeight: 500 }} role="status">
              ✓ Merci pour votre retour ! Votre avis a bien été enregistré.
            </div>
          )}
          {showForm && (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
              style={{ maxWidth: 620, margin: "0 auto", padding: 32, background: "var(--card)", border: "1px solid var(--border)", textAlign: "left", animation: "fadeIn 0.4s ease" }}
            >
              <div style={{ marginBottom: 24 }}>
                <label htmlFor="review-name" style={{ display: "block", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 10, fontWeight: 600 }}>Votre nom</label>
                <input id="review-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={50} style={inputStyle} placeholder="Marie L." required />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 14, fontWeight: 600 }}>Votre note</label>
                <StarRating value={form.rating} onChange={(r) => setForm({ ...form, rating: r })} size={32} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label htmlFor="review-text" style={{ display: "block", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 10, fontWeight: 600 }}>Votre avis</label>
                <textarea id="review-text" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} maxLength={500} rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: 130 }} placeholder="Partagez votre expérience..." required />
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6, textAlign: "right" }}>{form.text.length}/500</div>
              </div>
              {error && <div role="alert" style={{ color: "#fca5a5", fontSize: 14, marginBottom: 18, padding: "10px 14px", background: "rgba(127,29,29,0.2)", border: "1px solid rgba(248,113,113,0.3)" }}>{error}</div>}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button type="submit" disabled={submitting} style={{ flex: "1 1 200px", padding: "16px 26px", background: "var(--accent)", color: "var(--bg)", fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, opacity: submitting ? 0.6 : 1, cursor: submitting ? "not-allowed" : "pointer", minHeight: 56 }}>
                  {submitting ? "Envoi..." : "Publier mon avis"}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setError(""); }} style={{ padding: "16px 26px", background: "transparent", color: "var(--text-dim)", border: "1px solid var(--border-light)", fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, minHeight: 56 }}>
                  Annuler
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* CAROUSEL */}
      {!loading && reviews.length > 0 && (
        <div style={{ position: "relative" }}>
          {/* Flèches */}
          <button onClick={() => scroll(-1)} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, background: "var(--card)", border: "1px solid var(--border)", color: "var(--accent)", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} aria-label="Précédent">‹</button>
          <button onClick={() => scroll(1)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, background: "var(--card)", border: "1px solid var(--border)", color: "var(--accent)", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} aria-label="Suivant">›</button>

          {/* Scroll container */}
          <div ref={carouselRef} style={{ display: "flex", gap: 20, overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none", padding: "8px 64px 24px", cursor: "grab" }}
            onMouseDown={(e) => {
              const el = carouselRef.current;
              let startX = e.pageX - el.offsetLeft;
              let scrollLeft = el.scrollLeft;
              el.style.cursor = "grabbing";
              const onMove = (ev) => { const x = ev.pageX - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX); };
              const onUp = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
              window.addEventListener("mousemove", onMove);
              window.addEventListener("mouseup", onUp);
            }}
          >
            <style>{`.carousel-hide::-webkit-scrollbar { display: none; }`}</style>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} adminMode={adminMode} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}

      {loading && <div style={{ textAlign: "center", color: "var(--muted)", padding: 60, fontSize: 16 }}>Chargement des avis...</div>}
      {!loading && reviews.length === 0 && <div style={{ textAlign: "center", color: "var(--muted)", padding: 60, fontSize: 16 }}>Soyez le premier à laisser un avis.</div>}
    </section>
  );
}