"use client";

import Image from "next/image";
import { PROFILE, EXPERIENCE, RECOMMENDATIONS } from "@/data/portfolioData";
import CopyButton from "./CopyButton";
import {
  IconDownload,
  IconMail,
  IconLinkedIn,
  IconGitHub,
  IconWhatsApp,
  IconPin,
  IconClock,
  IconBriefcase,
  IconCap,
  IconGlobe,
  IconUsers,
  IconArrowUpRight,
} from "./Icons";

// Plain-text profile a recruiter can paste straight into an ATS note or an email to a hiring manager.
function buildRecruiterSummary() {
  const current = EXPERIENCE[0];
  const lines = [
    `${PROFILE.name} — ${PROFILE.title} (${PROFILE.specialty})`,
    `Experience: 6+ years · Currently ${current.title} at ${current.company} (${current.period})`,
    `Location: ${PROFILE.location} · ${PROFILE.timezone} · ${PROFILE.workMode}, ${PROFILE.overlap}`,
    `Open to: ${PROFILE.openTo.join(", ")}`,
    PROFILE.employmentType && `Employment type: ${PROFILE.employmentType}`,
    PROFILE.noticePeriod && `Notice period: ${PROFILE.noticePeriod}`,
    `Core stack: ${PROFILE.coreStack.join(", ")}`,
    `Education: ${PROFILE.education.degree}, ${PROFILE.education.school} (${PROFILE.education.years})`,
    `Email: ${PROFILE.email} · Phone/WhatsApp: ${PROFILE.phone}`,
    `LinkedIn: ${PROFILE.linkedin}`,
    PROFILE.languages.length > 0 && `Languages: ${PROFILE.languages.join(", ")}`,
    PROFILE.relocation && `Relocation: ${PROFILE.relocation}`,
  ];
  return lines.filter(Boolean).join("\n");
}

export default function Hero({ onOpenContact }) {
  const current = EXPERIENCE[0];

  const facts = [
    { icon: IconBriefcase, label: "Current role", value: `${current.title}, ${current.company}` },
    { icon: IconUsers, label: "Open to", value: PROFILE.openTo.join(" · ") },
    { icon: IconPin, label: "Location", value: `${PROFILE.location} · ${PROFILE.workMode}` },
    { icon: IconClock, label: "Time zone", value: `${PROFILE.timezone} · ${PROFILE.overlap}` },
    PROFILE.noticePeriod && { icon: IconClock, label: "Notice period", value: PROFILE.noticePeriod },
    PROFILE.employmentType && { icon: IconBriefcase, label: "Employment", value: PROFILE.employmentType },
    PROFILE.relocation && { icon: IconGlobe, label: "Relocation", value: PROFILE.relocation },
    { icon: IconCap, label: "Education", value: `BSc Computer Science, NUST` },
  ].filter(Boolean);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Open to senior roles · Remote
          </p>

          <h1 id="hero-title" className="hero-title">
            {PROFILE.name}
          </h1>
          <p className="hero-role">
            {PROFILE.title} <span className="hero-role-sep">/</span>{" "}
            <span className="hero-role-alt">{PROFILE.specialty}</span>
          </p>

          <p className="hero-summary">{PROFILE.summary}</p>

          <ul className="hero-stack" aria-label="Core stack">
            {PROFILE.coreStack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href={PROFILE.resume} download="Khuzemah_Saeed_Resume.pdf">
              <IconDownload size={18} />
              <span>Download CV</span>
            </a>
            <button type="button" className="btn btn-secondary btn-lg" onClick={onOpenContact}>
              <IconMail size={18} />
              <span>Get in touch</span>
            </button>
          </div>

          <ul className="hero-links" aria-label="Profiles">
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <IconLinkedIn size={17} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <IconGitHub size={17} /> GitHub
              </a>
            </li>
            <li>
              <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
                <IconWhatsApp size={17} /> WhatsApp
              </a>
            </li>
          </ul>

          {RECOMMENDATIONS[0] && (
            <a className="hero-quote" href="#recommendations">
              <q>{RECOMMENDATIONS[0].pull}</q>
              <span>
                {RECOMMENDATIONS[0].name} · {RECOMMENDATIONS[0].relationship.toLowerCase()} · read all{" "}
                {Math.max(PROFILE.linkedinRecommendations || 0, RECOMMENDATIONS.length)} recommendations
              </span>
            </a>
          )}
        </div>

        <aside className="snapshot" aria-label="Hiring snapshot">
          <div className="snapshot-head">
            <div className="snapshot-avatar" aria-hidden={!PROFILE.photo}>
              {PROFILE.photo ? (
                <Image src={PROFILE.photo} alt={PROFILE.name} width={112} height={112} priority />
              ) : (
                <span>{PROFILE.initials}</span>
              )}
            </div>
            <div>
              <p className="snapshot-eyebrow">Hiring snapshot</p>
              <p className="snapshot-years">
                <strong>6+ years</strong> full stack
              </p>
              {PROFILE.linkedinRecommendations > 0 && (
                <a
                  className="snapshot-recs"
                  href={`${PROFILE.linkedin}details/recommendations/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {PROFILE.linkedinRecommendations} recommendations on LinkedIn
                  <IconArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          <dl className="snapshot-facts">
            {facts.map(({ icon: Icon, label, value }) => (
              <div className="snapshot-fact" key={label}>
                <dt>
                  <Icon size={16} />
                  {label}
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="snapshot-contact">
            <div className="snapshot-contact-row">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <CopyButton text={PROFILE.email} label="email" />
            </div>
            <div className="snapshot-contact-row">
              <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a>
              <CopyButton text={PROFILE.phone} label="phone number" />
            </div>
          </div>

          <CopyButton
            text={buildRecruiterSummary()}
            label="candidate summary"
            idleText="Copy candidate summary"
            className="snapshot-copy-all"
          />
        </aside>
      </div>
    </section>
  );
}
