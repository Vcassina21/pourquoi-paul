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
import Avis from "./components/Avis";
import Trouver from "./components/Trouver";
import Footer from "./components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
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

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} activeSection={activeSection} onNavigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero onCTA={() => navigate("manifeste")} medias={medias} />
        <Manifeste medias={medias} />
        <Equipe medias={medias} />
        <Carte />
        <Concept medias={medias} />
        <Espaces medias={medias} />
        <Cave medias={medias} />
        <Avis />
        <Trouver />
      </main>
      <Footer onScrollTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
    </>
  );
}