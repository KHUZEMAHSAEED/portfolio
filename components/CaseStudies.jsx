"use client";

import Image from "next/image";
import WiseMarketVisual from "./WiseMarketVisual";
import ZenaWalkVisual from "./ZenaWalkVisual";

export default function CaseStudies({
  projects = [],
  galleryTabs = {},
  onTabChange,
  onOpenLightbox,
  showHeader = true,
  sectionIndex = "01",
  title = "Featured Case Studies",
  lead = "Deep architectural dives into production systems handling multilingual digital travel platforms, multi-portal real estate synchronization, cross-border e-commerce, and strict fintech compliance.",
}) {
  return (
    <section id="cases" className="section case-studies-section">
      <div className="wrap">
        {showHeader && (
          <>
            <div className="section-head">
              <h2>{title}</h2>
              <span className="section-index">{sectionIndex}</span>
            </div>
            <p style={{ color: "var(--text-secondary)", maxWidth: "68ch", marginBottom: "36px", fontSize: "16px" }}>
              {lead}
            </p>
          </>
        )}

        <div className="case-grid">
          {projects.map((proj) => (
            <article className="case-card panel" key={proj.id} id={`case-${proj.id}`}>
              <div className="case-card-top">
                <div className="case-badges">
                  <span className="case-badge badge-domain">{proj.domain}</span>
                  <span className="case-badge badge-role">{proj.role}</span>
                </div>
                <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
                  {proj.stack}
                </span>
              </div>

              <h3 className="case-title">{proj.title}</h3>
              <p className="case-summary">{proj.summary}</p>

              <div className="case-columns">
                <div className="case-col">
                  <h4>The Architectural Challenge</h4>
                  <p>{proj.problem}</p>
                </div>
                <div className="case-col">
                  <h4>Engineered Solution</h4>
                  <p>{proj.solution}</p>
                </div>
              </div>

              <div className="case-metrics-bar">
                {proj.metrics.map((m) => (
                  <div className="case-metric-item" key={m.label}>
                    <span className="case-metric-num">{m.num}</span>
                    <span className="case-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Screenshot Gallery (for projects with images) */}
              {proj.gallery && proj.gallery.length > 0 && (
                <div className="project-gallery">
                  {proj.gallery.length > 1 && (
                    <div
                      className="gallery-nav"
                      role="tablist"
                      aria-label={`${proj.title} views`}
                    >
                      {proj.gallery.map((item, gIdx) => {
                        const currentTab = galleryTabs[proj.id] || 0;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-selected={currentTab === gIdx}
                            className={`gallery-tab ${
                              currentTab === gIdx ? "active" : ""
                            }`}
                            onClick={() => onTabChange(proj.id, gIdx)}
                          >
                            {item.tabLabel}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {(() => {
                    const currentTab = galleryTabs[proj.id] || 0;
                    const activeItem = proj.gallery[currentTab] || proj.gallery[0];
                    return (
                      <div className="gallery-viewport">
                        <div
                          className="gallery-img-clickable"
                          onClick={() => onOpenLightbox(proj.gallery, currentTab)}
                          title="Click to zoom in full resolution"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              onOpenLightbox(proj.gallery, currentTab);
                            }
                          }}
                        >
                          <Image
                            src={activeItem.src}
                            alt={activeItem.title || "Project Screenshot"}
                            width={1200}
                            height={750}
                            className="gallery-img"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1080px"
                          />
                          <div className="gallery-hover-overlay">
                            <span>🔍 Click to inspect full resolution</span>
                          </div>
                        </div>

                        <div className="gallery-caption">
                          <div>
                            <span className="gallery-caption-title">
                              {activeItem.title}
                            </span>
                            <span className="gallery-caption-desc">
                              {activeItem.desc}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenLightbox(proj.gallery, currentTab)}
                            className="gallery-expand-link"
                            title="Open full resolution lightbox"
                          >
                            <span>Inspect Full View</span>
                            <span>↗</span>
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* ZenaWalk Multilingual & Cloudflare R2 Architecture Visual */}
              {proj.id === "zenawalk" && <ZenaWalkVisual />}

              {/* WiseMarket Custom Architecture Visual */}
              {proj.id === "wisemarket" && <WiseMarketVisual />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
