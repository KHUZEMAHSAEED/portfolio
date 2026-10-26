"use client";

import Link from "next/link";
import { PROFILE } from "@/data/portfolioData";
import CopyButton from "./CopyButton";
import { IconDownload, IconMail, IconPhone, IconLinkedIn, IconGitHub, IconWhatsApp } from "./Icons";

export default function SiteFooter({ onOpenContact }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-lead">
            <p className="eyebrow">Contact</p>
            <h2>Hiring a senior engineer who can own the integrations?</h2>
            <p>
              The fastest route is email or WhatsApp — or download my CV to share with your hiring
              team.
            </p>
            <div className="contact-ctas">
              <button type="button" className="btn btn-primary btn-lg" onClick={onOpenContact}>
                <IconMail size={18} /> Send a message
              </button>
              <a className="btn btn-secondary btn-lg" href={PROFILE.resume} download="Khuzemah_Saeed_Resume.pdf">
                <IconDownload size={18} /> Download CV
              </a>
            </div>
          </div>

          <ul className="contact-list">
            <li>
              <IconMail size={18} />
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <CopyButton text={PROFILE.email} label="email" />
            </li>
            <li>
              <IconPhone size={18} />
              <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a>
              <CopyButton text={PROFILE.phone} label="phone number" />
            </li>
            <li>
              <IconWhatsApp size={18} />
              <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
            </li>
            <li>
              <IconLinkedIn size={18} />
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/khuzemah-saeed
              </a>
            </li>
            <li>
              <IconGitHub size={18} />
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                github.com/KHUZEMAHSAEED
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bar">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location} · Remote worldwide
          </p>
          <nav aria-label="Footer">
            <Link href="/">Home</Link>
            <Link href="/projects">Case studies</Link>
            <a href={PROFILE.resume} download="Khuzemah_Saeed_Resume.pdf">
              CV (PDF)
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
