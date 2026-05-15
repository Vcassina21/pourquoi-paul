"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_ITEMS } from "@/lib/constants";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifeste from "./components/Manifeste";
import Equipe from "./components/Equipe";
import Carte from "./components/Carte";
import Concept from "./components/Concept";
import Espaces from "./components/Espaces";
import Cave from "./components/Cave";
import Bouteilles from "./components/Bouteilles";
import Avis from "./components/Avis";
import Trouver from "./components/Trouver";
import Footer from "./components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [medias, setMedias] = useState(null);

  useEffect(() => {
    fetch("/api/medias").then(r => r.json()).then(setMedias);
  }, []);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["hero", ...NAV_ITEMS.map((n) => n.id)];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        if (adminMode) {
          setAdminMode(false);
          setAdminPassword("");
        } else {
          const pwd = window.prompt("Mot de passe administrateur :");
          if (pwd) {
            setAdminMode(true);
            setAdminPassword(pwd);
          }
        }
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [adminMode]);

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = id === "hero" ? 0 : -70;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  }, []);

  return (
    <>
      {adminMode && (
        <div style={{ position: "fixed", top: 80, right: 16, zIndex: 200, background: "var(--accent)", color: "var(--bg)", padding: "10px 18px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Mode Admin · Ctrl+Shift+A pour quitter
        </div>
      )}

      <Nav scrolled={scrolled} activeSection={activeSection} onNavigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} medias={medias} />
      <main>
        <Hero onCTA={() => navigate("manifeste")} medias={medias} />
        <Manifeste medias={medias} />
        <Equipe medias={medias} />
        <Carte />
        <Concept medias={medias} />
        <Espaces medias={medias} />
        <Cave medias={medias} />
        <Bouteilles medias={medias} />
        <Avis adminMode={adminMode} adminPassword={adminPassword} />
        <Trouver />
        <Footer onScrollTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} medias={medias} />
      </main>
    </>
  );
}