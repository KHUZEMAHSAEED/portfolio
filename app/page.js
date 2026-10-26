"use client";

import { useState } from "react";
import { NODES } from "@/data/portfolioData";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import IntegrationHub from "@/components/IntegrationHub";
import MetricsStrip from "@/components/MetricsStrip";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import IntegrationsEcosystem from "@/components/IntegrationsEcosystem";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Education from "@/components/Education";
import SiteFooter from "@/components/SiteFooter";
import RecruiterDrawer from "@/components/RecruiterDrawer";
import ContactModal from "@/components/ContactModal";
import LightboxModal from "@/components/LightboxModal";

export default function Home() {
  const [activeNode, setActiveNode] = useState(NODES[1]); // Default to Bitrix24
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const handleOpenLightbox = (items, index) => {
    setLightboxState({
      isOpen: true,
      items,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handleNavigateLightbox = (nextIndex) => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: nextIndex,
    }));
  };

  return (
    <>
      <SiteHeader onOpenContact={() => setContactOpen(true)} />

      <main id="top" className="gridpaper">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="wrap hero-grid">
            <Hero
              onOpenAssistant={() => setDrawerOpen(true)}
              onOpenContact={() => setContactOpen(true)}
            />
            <IntegrationHub
              activeNode={activeNode}
              onSelectNode={setActiveNode}
            />
          </div>

          <MetricsStrip />
        </section>

        {/* SELECTED FLAGSHIP WORK */}
        <SelectedWork onOpenLightbox={handleOpenLightbox} />

        {/* TECHNICAL CAPABILITIES */}
        <Capabilities />

        {/* INTEGRATED ECOSYSTEM & ARCHITECTURE */}
        <IntegrationsEcosystem />

        {/* WORK EXPERIENCE */}
        <ExperienceTimeline />

        {/* EDUCATION & FOUNDATION */}
        <Education />
      </main>

      {/* SITE FOOTER */}
      <SiteFooter onOpenContact={() => setContactOpen(true)} />

      {/* FLOATING ACTION BUTTON FOR RECRUITER AI ASSISTANT */}
      <button
        type="button"
        className="ai-fab"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open AI Recruiter Assistant"
      >
        <span className="ai-fab-indicator" />
        <span className="ai-fab-spark">✨</span>
        <span className="ai-fab-label">Ask Khuzemah AI</span>
      </button>

      {/* INTERACTIVE RECRUITER AI ASSISTANT DRAWER */}
      <RecruiterDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* DIRECT INQUIRY & CONTACT MODAL */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* IN-APP SCREENSHOT LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        items={lightboxState.items}
        currentIndex={lightboxState.currentIndex}
        onNavigate={handleNavigateLightbox}
      />
    </>
  );
}
