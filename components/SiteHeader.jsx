"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROFILE } from "@/data/portfolioData";
import { IconDownload, IconMenu, IconClose } from "./Icons";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader({ onOpenContact }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navHref = (href) => (isHome ? href : `/${href}`);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label={`${PROFILE.name} — home`}>
          <span className="brand-mark" aria-hidden="true">{PROFILE.initials}</span>
          <span className="brand-text">
            <span className="brand-name">{PROFILE.name}</span>
            <span className="brand-role">{PROFILE.title}</span>
          </span>
        </Link>

        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={navHref(item.href)} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <Link
            href="/projects"
            className={pathname === "/projects" ? "is-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            All projects
          </Link>
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-ghost btn-sm hide-sm"
            href={PROFILE.resume}
            download="Khuzemah_Saeed_Resume.pdf"
          >
            <IconDownload size={16} />
            <span>CV</span>
          </a>
          <button type="button" className="btn btn-primary btn-sm" onClick={onOpenContact}>
            Contact
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
