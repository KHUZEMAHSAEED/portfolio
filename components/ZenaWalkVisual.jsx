"use client";

import { useState } from "react";
import Image from "next/image";

export default function ZenaWalkVisual() {
  const [activeTab, setActiveTab] = useState("languages");
  const [selectedLang, setSelectedLang] = useState("it");

  const translations = {
    it: {
      flag: "🇮🇹",
      name: "Italiano (Base / Default)",
      hero_title: "Cammina · Ascolta · Scopri",
      hero_tagline: "Tour a piedi a Genova. Indossa le cuffie e scopri la città autentica.",
      search_ph: "Cerca un itinerario o un luogo...",
      cta: "Inizia il tour",
      fallback_note: "Lingua nativa e sorgente per tutti i contenuti.",
    },
    en: {
      flag: "🇬🇧",
      name: "English",
      hero_title: "Walk · Listen · Discover",
      hero_tagline: "Walking tours in Genoa. Put on your headphones and discover the authentic city.",
      search_ph: "Search an itinerary or place...",
      cta: "Start the tour",
      fallback_note: "Fallback automatico su Italiano se una chiave manca.",
    },
    fr: {
      flag: "🇫🇷",
      name: "Français",
      hero_title: "Marchez · Écoutez · Découvrez",
      hero_tagline: "Visites à pied à Gênes. Mettez vos écouteurs et découvrez la ville authentique.",
      search_ph: "Rechercher un itinéraire ou un lieu...",
      cta: "Commencer la visite",
      fallback_note: "Repli automatique sur l'italien en cas de clé manquante.",
    },
    de: {
      flag: "🇩🇪",
      name: "Deutsch",
      hero_title: "Gehen · Hören · Entdecken",
      hero_tagline: "Rundgänge zu Fuß in Genua. Kopfhörer auf und die echte Stadt entdecken.",
      search_ph: "Route oder Ort suchen...",
      cta: "Tour starten",
      fallback_note: "Automatischer Fallback auf Italienisch bei fehlenden Texten.",
    },
    es: {
      flag: "🇪🇸",
      name: "Español",
      hero_title: "Camina · Escucha · Descubre",
      hero_tagline: "Tours a pie en Génova. Ponte los auriculares y descubre la ciudad auténtica.",
      search_ph: "Buscar un itinerario o lugar...",
      cta: "Iniciar el tour",
      fallback_note: "Fallback dinámico a italiano si falta la traducción.",
    },
  };

  const current = translations[selectedLang];

  return (
    <div className="wisemarket-visual panel" style={{ marginTop: "24px" }}>
      {/* Header bar */}
      <div className="wisemarket-visual-head">
        <div className="wisemarket-tag">
          <span className="wisemarket-pulse-dot" style={{ background: "#8B5CF6", boxShadow: "0 0 10px #8B5CF6" }} />
          <span>Multilingual Engine &amp; Cloudflare R2 Architecture</span>
        </div>

        <div className="wisemarket-nav" role="tablist" aria-label="ZenaWalk Specifications">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "languages"}
            className={`gallery-tab ${activeTab === "languages" ? "active" : ""}`}
            onClick={() => setActiveTab("languages")}
          >
            🌐 5-Language CMS Live Preview
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "r2"}
            className={`gallery-tab ${activeTab === "r2" ? "active" : ""}`}
            onClick={() => setActiveTab("r2")}
          >
            ⚡ Cloudflare R2 Media CDN
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cms"}
            className={`gallery-tab ${activeTab === "cms" ? "active" : ""}`}
            onClick={() => setActiveTab("cms")}
          >
            ⚙️ Centralized Content Architecture
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="wisemarket-canvas">
        {activeTab === "languages" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Language Selector Chips */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                Select Active Language:
              </span>
              {Object.keys(translations).map((langKey) => {
                const item = translations[langKey];
                const isSelected = selectedLang === langKey;
                return (
                  <button
                    key={langKey}
                    type="button"
                    onClick={() => setSelectedLang(langKey)}
                    style={{
                      background: isSelected ? "var(--accent-gradient)" : "var(--bg-surface)",
                      color: isSelected ? "#ffffff" : "var(--text-secondary)",
                      border: isSelected ? "1px solid rgba(139, 92, 246, 0.5)" : "1px solid var(--border-subtle)",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.18s ease",
                    }}
                  >
                    <span>{item.flag}</span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Rendered Teaser Card */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(16, 16, 20, 0.98) 100%)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Image
                    src="/projects/zenawalk/zenawalk-icon.png"
                    alt="ZenaWalk Icon"
                    width={32}
                    height={32}
                    style={{ borderRadius: "8px" }}
                  />
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>ZenaWalk Interface</span>
                    <span style={{ display: "block", fontSize: "11px", color: "#A1A1B0" }}>Locale: {selectedLang.toUpperCase()} · Live Content Rendering</span>
                  </div>
                </div>

                <div style={{ background: "rgba(139, 92, 246, 0.15)", border: "1px solid rgba(139, 92, 246, 0.3)", color: "#C084FC", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "9999px" }}>
                  {current.fallback_note}
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: "#F5F5F7", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  {current.hero_title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "60ch", margin: 0, lineHeight: 1.6 }}>
                  {current.hero_tagline}
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ background: "rgba(10, 10, 14, 0.8)", border: "1px solid var(--border-subtle)", borderRadius: "6px", padding: "10px 16px", fontSize: "13px", color: "var(--text-muted)", flex: 1, minWidth: "220px" }}>
                  🔍 {current.search_ph}
                </div>
                <button type="button" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "13.5px" }}>
                  {current.cta} 🎧
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "r2" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Certified Guide &amp; Admin Studio</span>
              <div className="wm-node-box">
                <span className="wm-flag">🎧 Narration Uploads</span>
                <span className="wm-node-sub">High-bitrate MP3 / AAC recordings</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">📸 Visual Itineraries</span>
                <span className="wm-node-sub">Hi-res landmark photography</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">🗺️ GPX Waypoints</span>
                <span className="wm-node-sub">OpenRouteService GPS coordinate files</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">Python Boto3 Streaming Bridge</span>
              <div className="wm-core-box">
                <div className="wm-core-title">Cloudflare R2 Object Gateway</div>
                <p className="wm-core-desc">
                  S3v4 signed transfers with instant server-side object cloning (copy_object) preventing re-uploads during tour duplication and automated content validation.
                </p>
                <div className="wm-core-tags">
                  <span>Zero Egress Fees</span>
                  <span>Boto3 S3v4 Signatures</span>
                  <span>Direct Object Duplication</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">Global Edge Distribution</span>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">media.zenawalk.com</span>
                <span className="wm-node-sub">Global Cloudflare edge CDN</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Sub-Second Streaming</span>
                <span className="wm-node-sub">Zero-buffering audio playback on mobile</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Byte-Range Requests</span>
                <span className="wm-node-sub">HTTP 206 partial content seek support</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "cms" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Centralized Admin Portal</span>
              <div className="wm-node-box">
                <span className="wm-flag">Hero &amp; Tagline Editor</span>
                <span className="wm-node-sub">Real-time copy overrides</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">Theme &amp; Colors CMS</span>
                <span className="wm-node-sub">Dynamic brand hex values without CSS edits</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">Media &amp; Social Links</span>
                <span className="wm-node-sub">Instant background video &amp; logo swapping</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">Dynamic Localization Engine</span>
              <div className="wm-core-box">
                <div className="wm-core-title">/api/settings/public/ &amp; /api/translations/</div>
                <p className="wm-core-desc">
                  Relational tables (`zw_settings` and `zw_translations`) aggregate configuration and serve client caches. Missing language strings seamlessly fall back to Italian without layout shift.
                </p>
                <div className="wm-core-tags">
                  <span>5 Languages (IT/EN/FR/DE/ES)</span>
                  <span>Instant Database Updates</span>
                  <span>Zero Deployments Required</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">End-User Application</span>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Mobile PWA Web App</span>
                <span className="wm-node-sub">FOUC-free theme initialization</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Offline Fallback Cache</span>
                <span className="wm-node-sub">LocalStorage sync with ETag freshness</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Stripe Tour Unlock</span>
                <span className="wm-node-sub">Digital content waiver &amp; code redemption</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Specification Note */}
      <div className="wisemarket-visual-foot">
        <span className="icon">🏛️</span>
        <span>
          <strong>Genoa Tourism Platform:</strong> Engineered by Khuzemah Saeed using Python (Flask), MySQL, Cloudflare R2, and Vanilla JS, serving certified guided pedestrian tours across Genoa, Italy.
        </span>
      </div>
    </div>
  );
}
