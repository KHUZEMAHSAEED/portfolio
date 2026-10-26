import { PROFILE, DOMAINS } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { IconCap, IconCheck } from "./Icons";

// About + what I'm looking for + education: the "can we hire this person?" questions in one place.
export default function Education() {
  const { education, certifications, languages } = PROFILE;

  const lookingFor = [
    ["Roles", PROFILE.openTo.join(", ")],
    ["Work mode", `${PROFILE.workMode} · ${PROFILE.overlap}`],
    ["Based in", `${PROFILE.location} · ${PROFILE.timezone}`],
    PROFILE.employmentType && ["Employment", PROFILE.employmentType],
    PROFILE.noticePeriod && ["Notice period", PROFILE.noticePeriod],
    PROFILE.relocation && ["Relocation", PROFILE.relocation],
    languages.length > 0 && ["Languages", languages.join(", ")],
  ].filter(Boolean);

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
              <div className="card">
                <h3 className="card-title">Certifications</h3>
                <ul className="check-list">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <IconCheck size={16} />
                      <span>
                        {c.name}
                        <small>
                          {c.issuer}
                          {c.year && ` · ${c.year}`}
                        </small>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
