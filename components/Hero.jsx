"use client";

import CopyButton from "./CopyButton";

export default function Hero({ onOpenAssistant, onOpenContact }) {
  return (
    <div className="hero-content">
      <div className="status-badge">
        <span className="status-dot-pulse" />
        <span>Available for Senior Roles · US/EU/Gulf Remote</span>
      </div>
      <p className="eyebrow-line">
        Senior Full Stack Developer &amp; AI Systems Engineer
      </p>
      <h1>Systems that connect, scale, and hold together.</h1>
      <p className="tagline">
        Six-plus years architecting resilient Laravel, Python, and Next.js
        platforms that sit at the core of UAE real estate, international
        e-commerce, and enterprise operations — orchestrating CRMs,
        marketplaces, logistics, and AI bots into unified ecosystems.
      </p>

      <div className="hero-meta">
        <div className="meta-item">
          <span>📍 Lahore, Pakistan</span>
        </div>
        <div className="meta-item meta-copyable">
          <span>📞 +92 347 5985699</span>
          <CopyButton text="+92 347 5985699" label="phone number" />
        </div>
        <div className="meta-item meta-copyable">
          <span>✉️ khuzemasaeed@gmail.com</span>
          <CopyButton text="khuzemasaeed@gmail.com" label="email" />
        </div>
        <div className="meta-item">
          <span>🎓 NUST CS Graduate</span>
        </div>
        <div className="meta-item">
          <span>⚡ 4+ Hrs Global Overlap</span>
        </div>
      </div>

      <div className="cta-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onOpenContact}
        >
          Send Inquiry
        </button>
        <button
          type="button"
          className="btn btn-accent"
          onClick={onOpenAssistant}
        >
          ✨ Ask AI Assistant
        </button>
        <a
          className="btn btn-ghost"
          href="/Khuzemah_Saeed_Resume.pdf"
          download="Khuzemah_Saeed_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download CV
        </a>
        <a
          className="btn btn-ghost"
          href="https://www.linkedin.com/in/khuzemah-saeed/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="btn btn-ghost"
          href="https://github.com/KHUZEMAHSAEED"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
