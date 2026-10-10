"use client";

export default function SiteHeader({ onOpenContact }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="mark" href="#top">
          <span className="dot" />
          Khuzemah Saeed
        </a>
        <nav className="header-links">
          <a href="#cases">Case Studies</a>
          <a href="#work">Experience</a>
          <a href="#skills">Capabilities</a>
          <a
            href="/Khuzemah_Saeed_Resume.pdf"
            download="Khuzemah_Saeed_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="always-show"
          >
            Resume (PDF)
          </a>
          <button
            type="button"
            className="header-contact-btn always-show"
            onClick={onOpenContact}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
