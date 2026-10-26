import { PROFILE, RECOMMENDATIONS } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconChevronDown } from "./Icons";

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

// Stable avatar tint per person so the grid doesn't look like a row of identical circles.
const TINTS = 4;
const tintFor = (name) => [...name].reduce((sum, c) => sum + c.charCodeAt(0), 0) % TINTS;

function Attribution({ rec }) {
  return (
    <figcaption className="rec-by">
      <span className={`rec-avatar tint-${tintFor(rec.name)}`} aria-hidden="true">
        {initials(rec.name)}
      </span>
      <span className="rec-by-text">
        <strong>{rec.name}</strong>
        <span className="rec-headline">{rec.headline}</span>
        <span className="rec-meta">
          {rec.managed && <span className="badge badge-accent">Direct manager</span>}
          {!rec.managed && rec.relationship}
          <span aria-hidden="true"> · </span>
          {rec.date}
        </span>
      </span>
    </figcaption>
  );
}

export default function Testimonials() {
  if (!RECOMMENDATIONS.length) return null;

  const [featured, ...rest] = RECOMMENDATIONS;
  const managers = RECOMMENDATIONS.filter((r) => r.managed).length;
  const total = Math.max(PROFILE.linkedinRecommendations || 0, RECOMMENDATIONS.length);

  return (
    <section id="recommendations" className="section" aria-labelledby="recs-title">
      <div className="wrap">
        <SectionHeading
          id="recs-title"
          eyebrow="Recommendations"
          title="What managers and teammates say"
          lead={`${total} recommendations on LinkedIn${managers ? `, including ${managers} from direct managers` : ""}. Quoted word for word.`}
          aside={
            <a
              className="text-link"
              href={`${PROFILE.linkedin}details/recommendations/`}
              target="_blank"
              rel="noreferrer"
            >
              Verify on LinkedIn <IconArrowUpRight size={16} />
            </a>
          }
        />

        <figure className="rec-featured">
          <span className="rec-mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>
            <p className="rec-featured-pull">{featured.pull}</p>
            <div className="rec-featured-full">
              {featured.full.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </blockquote>
          <Attribution rec={featured} />
        </figure>

        <div className="rec-grid">
          {rest.map((rec) => (
            <figure className="rec-card" key={rec.name}>
              <blockquote>
                <p className="rec-pull">&ldquo;{rec.pull}&rdquo;</p>
                <details className="rec-details">
                  <summary>
                    <span>Read full recommendation</span>
                    <IconChevronDown size={15} />
                  </summary>
                  {rec.full.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </details>
              </blockquote>
              <Attribution rec={rec} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
