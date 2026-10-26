"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import ImpactStats from "@/components/ImpactStats";
import SelectedWork from "@/components/SelectedWork";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Capabilities from "@/components/Capabilities";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SiteFooter from "@/components/SiteFooter";
import MobileActionBar from "@/components/MobileActionBar";
import RecruiterDrawer from "@/components/RecruiterDrawer";
import ContactModal from "@/components/ContactModal";
import LightboxModal from "@/components/LightboxModal";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const handleOpenLightbox = (items, index) => {
    setLightboxState({ isOpen: true, items, currentIndex: index });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (nextIndex) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: nextIndex }));
  };

  const openContact = () => setContactOpen(true);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader onOpenContact={openContact} />

      <main id="main">
        <Hero onOpenContact={openContact} />
        <Platforms />
        <ImpactStats />
        <SelectedWork onOpenLightbox={handleOpenLightbox} />
        <ExperienceTimeline />
        <Testimonials />
        <Capabilities />
        <Education />
        <FAQ onOpenAssistant={() => setDrawerOpen(true)} />
      </main>

      <SiteFooter onOpenContact={openContact} />
      <MobileActionBar onOpenContact={openContact} />

      <RecruiterDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
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
