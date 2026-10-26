"use client";

import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS, PROJECT_CARDS, HOMEPAGE_PROJECTS } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { IconArrowRight, IconCheck, IconGitHub, IconZoom } from "./Icons";

const byId = Object.fromEntries(FEATURED_PROJECTS.map((p) => [p.id, p]));

function ArchitecturePreview() {
  return (
    <div className="arch-preview" aria-hidden="true">
      <div className="arch-row">
        {["Australia", "New Zealand", "UAE", "Pakistan"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="arch-core">Cin7 · ChannelAdvisor inventory sync</div>
      <div className="arch-row">
        {["TCS", "Leopards", "M&P"].map((m) => (
          <span key={m}>{m} API</span>
        ))}
      </div>
    </div>
  );
}

export default function SelectedWork({ onOpenLightbox }) {
  const projects = HOMEPAGE_PROJECTS.map((id) => byId[id]).filter(Boolean);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Production systems, not side projects"
          lead="A few of the platforms I've designed and built — each one is live, used by real teams, and documented as a full case study."
          aside={
            <Link href="/projects" className="text-link">
              All {FEATURED_PROJECTS.length} case studies <IconArrowRight size={16} />
            </Link>
          }
        />

        <div className="work-grid">
          {projects.map((proj, idx) => {
            const card = PROJECT_CARDS[proj.id] || {};
            const stack = proj.stack.split("·").map((t) => t.trim()).slice(0, 5);
            const hasGallery = proj.gallery && proj.gallery.length > 0;

            return (
              <article key={proj.id} className={`work-card ${idx === 0 ? "is-featured" : ""}`}>
                <div className="work-media">
                  {proj.previewImage ? (
                    <button
                      type="button"
                      className="work-media-btn"
                      onClick={() => hasGallery && onOpenLightbox(proj.gallery, 0)}
                      aria-label={`View ${hasGallery ? proj.gallery.length : ""} screenshots of ${card.name || proj.title}`}
                    >
                      <Image
                        src={proj.previewImage}
                        alt=""
                        width={1200}
                        height={750}
                        className="work-img"
                        priority={idx === 0}
                        sizes="(max-width: 860px) 100vw, (max-width: 1240px) 60vw, 720px"
                      />
                      {hasGallery && (
                        <span className="work-media-hint">
                          <IconZoom size={15} /> {proj.gallery.length} screenshots
                        </span>
                      )}
                    </button>
                  ) : (
                    <ArchitecturePreview />
                  )}
                </div>

                <div className="work-body">
                  <p className="work-domain">{proj.domain}</p>
                  <h3 className="work-title">
                    <Link href={`/projects#case-${proj.id}`}>{card.name || proj.title}</Link>
                  </h3>
                  <p className="work-desc">{card.oneLiner || proj.shortDescription}</p>
                  {card.outcome && (
                    <p className="work-outcome">
                      <IconCheck size={16} />
                      {card.outcome}
                    </p>
                  )}
                  <ul className="chip-list" aria-label="Tech stack">
                    {stack.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="work-foot">
                    <p className="work-role">
                      <span>Role</span> {proj.role}
                    </p>
                    {proj.repo && (
                      <a className="text-link work-repo" href={proj.repo} target="_blank" rel="noreferrer">
                        <IconGitHub size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="work-more">
          <p>
            Also: a secure WordPress publishing plugin, a headless Moodle LMS, peer-to-peer logistics, D2C subscriptions and a multilingual travel CMS.
          </p>
          <Link href="/projects" className="btn btn-secondary">
            Browse all case studies <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
