"use client";

import Image from "next/image";
import { PROJECT_CARDS } from "@/data/portfolioData";
import WiseMarketVisual from "./WiseMarketVisual";
import ZenaWalkVisual from "./ZenaWalkVisual";
import CrediPostVisual from "./CrediPostVisual";
import { IconGitHub, IconZoom } from "./Icons";

// Gallery tab labels in the data lead with an emoji; the redesigned UI is text-only.
const cleanLabel = (label) => label.replace(/^[^\p{L}\p{N}]+/u, "");

export default function CaseStudies({ projects = [], galleryTabs = {}, onTabChange, onOpenLightbox }) {
  return (
    <section id="cases" className="cases" aria-label="Case studies">
      <div className="wrap">
        <div className="case-list">
          {projects.map((proj) => {
            const card = PROJECT_CARDS[proj.id] || {};
            const currentTab = galleryTabs[proj.id] || 0;
            const activeItem = proj.gallery?.[currentTab] || proj.gallery?.[0];

            return (
              <article className="case" key={proj.id} id={`case-${proj.id}`}>
                <header className="case-head">
                  <p className="work-domain">{proj.domain}</p>
                  <h2 className="case-title">{card.name || proj.title}</h2>
                  <p className="case-summary">{proj.summary}</p>
                  <dl className="case-meta">
                    <div>
                      <dt>Role</dt>
                      <dd>{proj.role}</dd>
                    </div>
                    {proj.repo && (
                      <div>
                        <dt>Source</dt>
                        <dd>
                          <a className="text-link" href={proj.repo} target="_blank" rel="noreferrer">
                            <IconGitHub size={16} /> {proj.repo.replace("https://github.com/", "")}
                          </a>
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt>Stack</dt>
                      <dd>
                        <ul className="chip-list">
                          {proj.stack.split("·").map((t) => (
                            <li key={t.trim()} className="chip">
                              {t.trim()}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </header>

                <div className="case-columns">
                  <div className="case-col">
                    <h3>The problem</h3>
                    <p>{proj.problem}</p>
                  </div>
                  <div className="case-col">
                    <h3>What I built</h3>
                    <p>{proj.solution}</p>
                  </div>
                </div>

                <ul className="case-metrics">
                  {proj.metrics.map((m) => (
                    <li key={m.label}>
                      <span className="case-metric-num">{m.num}</span>
                      <span className="case-metric-lbl">{m.label}</span>
                    </li>
                  ))}
                </ul>

                {activeItem && (
                  <div className="gallery">
                    {proj.gallery.length > 1 && (
                      <div className="gallery-tabs" role="tablist" aria-label={`${card.name || proj.title} screenshots`}>
                        {proj.gallery.map((item, gIdx) => (
                          <button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-selected={currentTab === gIdx}
                            className={`gallery-tab ${currentTab === gIdx ? "active" : ""}`}
                            onClick={() => onTabChange(proj.id, gIdx)}
                          >
                            {cleanLabel(item.tabLabel)}
                          </button>
                        ))}
                      </div>
                    )}

                    <figure className="gallery-figure">
                      <button
                        type="button"
                        className="gallery-frame"
                        onClick={() => onOpenLightbox(proj.gallery, currentTab)}
                        aria-label={`Enlarge screenshot: ${activeItem.title}`}
                      >
                        <span className="browser-dots" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                        </span>
                        <Image
                          src={activeItem.src}
                          alt={activeItem.title || "Project screenshot"}
                          width={1200}
                          height={750}
                          className="gallery-img"
                          sizes="(max-width: 768px) 100vw, (max-width: 1240px) 90vw, 1100px"
                        />
                        <span className="work-media-hint">
                          <IconZoom size={15} /> Enlarge
                        </span>
                      </button>
                      <figcaption>
                        <strong>{activeItem.title}</strong>
                        <span>{activeItem.desc}</span>
                      </figcaption>
                    </figure>
                  </div>
                )}

                {proj.id === "zenawalk" && <ZenaWalkVisual />}
                {proj.id === "wisemarket" && <WiseMarketVisual />}
                {proj.id === "crediblock" && <CrediPostVisual />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
