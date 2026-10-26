"use client";

import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/data/portfolioData";

export default function SelectedWork({ onOpenLightbox }) {
  return (
    <section id="selected-work" className="section selected-work-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-eyebrow">Flagship Deployments</span>
            <h2>Selected Work</h2>
          </div>
          <span className="section-index">01</span>
        </div>
        <p className="section-lead">
          Production systems engineered for real-world operations — from multi-portal UAE real estate
          synchronization and luxury off-plan CRM engines to peer-to-peer luggage logistics, European digital tourism, and enterprise fintech compliance.
        </p>

        <div className="selected-work-grid">
          {FEATURED_PROJECTS.map((proj, idx) => {
            const isWide = idx === 0 || idx === 5;
            return (
              <article
                key={proj.id}
                className={`selected-card panel ${isWide ? "selected-card-wide" : "selected-card-standard"}`}
              >
                <div className="selected-card-content">
                  <div className="selected-meta">
                    <span className="selected-domain">{proj.domain}</span>
                    <span className="selected-role">{proj.role}</span>
                  </div>

                  <h3 className="selected-title">{proj.title}</h3>
                  <p className="selected-desc">{proj.shortDescription || proj.summary}</p>

                  <div className="selected-tags">
                    {proj.stack.split("·").map((tech) => (
                      <span key={tech.trim()} className="tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="selected-highlights">
                    {proj.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="selected-stat">
                        <span className="selected-stat-num">{m.num}</span>
                        <span className="selected-stat-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="selected-actions">
                    <Link href={`/projects#case-${proj.id}`} className="btn-link">
                      <span>Explore Case Study &amp; Architecture</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="selected-card-preview">
                  {proj.previewImage ? (
                    <div
                      className="preview-img-wrap"
                      onClick={() => {
                        if (proj.gallery && proj.gallery.length > 0 && onOpenLightbox) {
                          onOpenLightbox(proj.gallery, 0);
                        }
                      }}
                      role={proj.gallery ? "button" : undefined}
                      tabIndex={proj.gallery ? 0 : undefined}
                      title={proj.gallery ? "Click to inspect high-resolution view" : undefined}
                      onKeyDown={(e) => {
                        if ((e.key === "Enter" || e.key === " ") && proj.gallery && onOpenLightbox) {
                          onOpenLightbox(proj.gallery, 0);
                        }
                      }}
                    >
                      <Image
                        src={proj.previewImage}
                        alt={`${proj.title} interface preview`}
                        width={900}
                        height={560}
                        className="preview-img"
                        loading={idx === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                      <div className="preview-overlay">
                        <span className="preview-badge">Verified System Preview</span>
                        <span className="preview-zoom-hint">Click to Zoom 🔍</span>
                      </div>
                    </div>
                  ) : proj.isArchitectureVisual ? (
                    <div className="preview-arch-card">
                      <div className="arch-card-header">
                        <span className="arch-card-pill">Event-Driven Architecture</span>
                        <span className="arch-card-status">4 Markets Active</span>
                      </div>
                      <div className="arch-card-flow">
                        <div className="arch-node-group">
                          <span className="arch-group-title">Regional Warehouses</span>
                          <div className="arch-badges">
                            <span>🇦🇺 Australia</span>
                            <span>🇳🇿 New Zealand</span>
                            <span>🇦🇪 UAE Hub</span>
                            <span>🇵🇰 Pakistan</span>
                          </div>
                        </div>
                        <div className="arch-flow-arrow">⚡ Cin7 &amp; ChannelAdvisor Sync ⚡</div>
                        <div className="arch-node-group">
                          <span className="arch-group-title">Automated Logistics Dispatch</span>
                          <div className="arch-badges">
                            <span>TCS API</span>
                            <span>Leopards API</span>
                            <span>M&amp;P Courier</span>
                          </div>
                        </div>
                      </div>
                      <Link href={`/projects#case-${proj.id}`} className="arch-inspect-btn">
                        <span>Interactive Pipeline Topology</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  ) : (
                    <div className="preview-placeholder">
                      <span className="preview-badge">Architecture Blueprint</span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Strategic Archive CTA Banner */}
        <div className="archive-cta-banner panel">
          <div className="archive-cta-text">
            <span className="archive-cta-badge">Complete Engineering Catalog</span>
            <h3>Looking for in-depth system topologies, schemas, and live test routes?</h3>
            <p>
              Inspect all multi-portal listing synchronizations, Cloudflare R2 audio streaming pipelines,
              and UAE Central Bank WPS payroll banking specifications in the dedicated engineering archive.
            </p>
          </div>
          <Link href="/projects" className="btn-primary archive-cta-btn">
            <span>Explore Full Projects &amp; Architecture Archive</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
