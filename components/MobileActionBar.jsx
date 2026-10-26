"use client";

import { PROFILE } from "@/data/portfolioData";
import { IconDownload, IconMail, IconWhatsApp } from "./Icons";

// Thumb-reach contact actions on phones, where recruiters often first open the link.
export default function MobileActionBar({ onOpenContact }) {
  return (
    <div className="mobile-bar" role="region" aria-label="Quick actions">
      <a href={PROFILE.resume} download="Khuzemah_Saeed_Resume.pdf">
        <IconDownload size={18} />
        <span>CV</span>
      </a>
      <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
        <IconWhatsApp size={18} />
        <span>WhatsApp</span>
      </a>
      <button type="button" className="is-primary" onClick={onOpenContact}>
        <IconMail size={18} />
        <span>Contact</span>
      </button>
    </div>
  );
}
