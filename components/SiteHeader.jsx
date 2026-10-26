"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader({ onOpenContact }) {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="mark" href="/">
          <span className="dot" />
          Khuzemah Saeed
        </Link>
        <nav className="header-links">
          {isProjectsPage ? (
            <>
              <Link href="/">Overview</Link>
              <Link href="/projects" className="active-nav-link">
                Projects &amp; Archive
              </Link>
              <Link href="/#skills">Capabilities</Link>
              <Link href="/#work">Experience</Link>
            </>
          ) : (
            <>
              <a href="#selected-work">Selected Work</a>
              <Link href="/projects">Projects &amp; Archive</Link>
              <a href="#skills">Capabilities</a>
              <a href="#work">Experience</a>
            </>
          )}
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
