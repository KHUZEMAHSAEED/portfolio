"use client";

import CopyButton from "./CopyButton";

export default function SiteFooter({ onOpenContact }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-lead">
          <h2>Let&apos;s architect your next platform.</h2>
          <p>
            Open to senior full-stack, backend, and AI engineering opportunities —
            especially where multiple distributed systems, APIs, and AI workflows
            need to operate seamlessly as one.
          </p>
          <div className="footer-cta-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenContact}
            >
              Send Inquiry
            </button>
            <a
              className="btn btn-ghost"
              href="/Khuzemah_Saeed_Resume.pdf"
              download="Khuzemah_Saeed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="footer-contacts">
          <div className="footer-contact-item">
            <a href="mailto:khuzemasaeed@gmail.com">khuzemasaeed@gmail.com</a>
            <CopyButton text="khuzemasaeed@gmail.com" label="email" />
          </div>
          <div className="footer-contact-item">
            <a href="tel:+923475985699">+92 347 5985699 (WhatsApp / Call)</a>
            <CopyButton text="+92 347 5985699" label="phone" />
          </div>
          <div className="footer-contact-item">
            <a
              href="https://www.linkedin.com/in/khuzemah-saeed/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/khuzemah-saeed
            </a>
          </div>
          <div className="footer-contact-item">
            <a
              href="https://github.com/KHUZEMAHSAEED"
              target="_blank"
              rel="noreferrer"
            >
              github.com/KHUZEMAHSAEED
            </a>
          </div>
        </div>
      </div>
      <div className="wrap">
        <p className="footer-note">
          Lahore, Pakistan · Remote-ready worldwide · © {new Date().getFullYear()} Khuzemah Saeed
        </p>
      </div>
    </footer>
  );
}
