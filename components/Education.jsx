"use client";

import { useState } from "react";
import { PROFILE, DOMAINS, CERTIFICATION_CATEGORIES } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { IconCap, IconCheck, IconArrowUpRight, IconChevronDown } from "./Icons";

// About + what I'm looking for + education: the "can we hire this person?" questions in one place.
export default function Education() {
  const { education, certifications, languages } = PROFILE;
  const [activeCertTab, setActiveCertTab] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const lookingFor = [
    ["Roles", PROFILE.openTo.join(", ")],
    ["Work mode", `${PROFILE.workMode} · ${PROFILE.overlap}`],
    ["Based in", `${PROFILE.location} · ${PROFILE.timezone}`],
    PROFILE.employmentType && ["Employment", PROFILE.employmentType],
    PROFILE.noticePeriod && ["Notice period", PROFILE.noticePeriod],
    PROFILE.relocation && ["Relocation", PROFILE.relocation],
    languages.length > 0 && ["Languages", languages.join(", ")],
  ].filter(Boolean);

  const filteredCerts =
    activeCertTab === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCertTab);

  // When "All" is active, show top 6 featured by default, expandable to all 14.
  // When a specific category is active, show all in that category.
  const displayedCerts =
    activeCertTab === "All" && !expanded
      ? filteredCerts.slice(0, 6)
      : filteredCerts;

  return (
    <section id="about" className="section section-alt" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHeading id="about-title" eyebrow="About" title="The short version" />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a full stack engineer who likes the unglamorous, high-stakes part of software:
              making many systems agree with each other. Most of my work sits between a business and
              the platforms it depends on — property portals, CRMs, ERPs, couriers, payment gateways
              and, more recently, LLMs.
            </p>
            <p>
              Day to day that means designing data models and APIs in Laravel or Python, building the
              React / Next.js interfaces teams actually use, and writing the sync jobs, webhooks and
              retry logic that keep it all consistent in production.
            </p>

            <h3 className="about-subhead">Industries I&apos;ve shipped for</h3>
            <ul className="chip-list">
              {DOMAINS.map((d) => (
                <li className="chip" key={d}>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-side">
            <div className="card">
              <h3 className="card-title">What I&apos;m looking for</h3>
              <dl className="kv-list">
                {lookingFor.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card edu-card">
              <span className="edu-icon">
                <IconCap size={22} />
              </span>
              <div>
                <h3 className="card-title">{education.degree}</h3>
                <p className="edu-school">
                  {education.school}, {education.city}
                </p>
                <p className="edu-years">{education.years}</p>
              </div>
            </div>

            {certifications.length > 0 && (
              <div className="card cert-card">
                <div className="cert-card-header">
                  <div>
                    <h3 className="card-title">Certifications</h3>
                    <p className="cert-subtitle">
                      {certifications.length} Credentials · Anthropic Claude Academy
                    </p>
                  </div>
                  {PROFILE.linkedin && (
                    <a
                      className="cert-verify-link"
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      title="Verify credentials on LinkedIn"
                    >
                      <span>Verify on LinkedIn</span>
                      <IconArrowUpRight size={13} />
                    </a>
                  )}
                </div>

                <div className="cert-tabs" role="tablist" aria-label="Filter certifications by expertise">
                  {CERTIFICATION_CATEGORIES.map((cat) => {
                    const count =
                      cat === "All"
                        ? certifications.length
                        : certifications.filter((c) => c.category === cat).length;
                    const isActive = activeCertTab === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`cert-pill ${isActive ? "active" : ""}`}
                        onClick={() => {
                          setActiveCertTab(cat);
                          if (cat !== "All") setExpanded(true);
                        }}
                      >
                        {cat}
                        <span className="cert-pill-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                <ul className="check-list">
                  {displayedCerts.map((c) => (
                    <li key={c.name}>
                      <IconCheck size={16} />
                      <div className="cert-item-content">
                        {c.url ? (
                          <a className="text-link" href={c.url} target="_blank" rel="noreferrer">
                            {c.name}
                          </a>
                        ) : (
                          c.name
                        )}
                        <span className="cert-meta">
                          <span>{c.issuer}</span>
                          {c.year && <span>· {c.year}</span>}
                          {c.tag && <span className="cert-tag">{c.tag}</span>}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {activeCertTab === "All" && filteredCerts.length > 6 && (
                  <button
                    type="button"
                    className="cert-toggle-btn"
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-expanded={expanded}
                  >
                    <span>
                      {expanded
                        ? "Show primary credentials"
                        : `View all ${filteredCerts.length} credentials (+${filteredCerts.length - 6})`}
                    </span>
                    <IconChevronDown className={expanded ? "is-expanded" : ""} size={14} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
