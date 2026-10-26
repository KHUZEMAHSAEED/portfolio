import { EXPERIENCE } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { IconChevronDown } from "./Icons";

// "2022-08" → months since year 0, so durations can be computed without Date quirks.
function toMonths(ym) {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

function formatDuration(start, end) {
  const now = new Date();
  const endMonths = end ? toMonths(end) : now.getFullYear() * 12 + now.getMonth();
  const total = endMonths - toMonths(start) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  return [years && `${years} yr${years > 1 ? "s" : ""}`, months && `${months} mo${months > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section section-alt" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Six years, three companies, one thread: systems that integrate"
        />

        <ol className="timeline">
          {EXPERIENCE.map((role, idx) => (
            <li className="timeline-item" key={role.company + role.period}>
              <div className="timeline-when">
                <span className="timeline-period">{role.period}</span>
                <span className="timeline-duration">{formatDuration(role.start, role.end)}</span>
                {idx === 0 && !role.end && <span className="badge badge-success">Current</span>}
              </div>

              <div className="timeline-body">
                <h3 className="timeline-title">{role.title}</h3>
                <p className="timeline-company">
                  <strong>{role.company}</strong>
                  <span aria-hidden="true"> · </span>
                  {role.location}
                </p>

                <ul className="timeline-highlights">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <details className="timeline-details">
                  <summary>
                    <span>
                      {role.projects.length} project{role.projects.length > 1 ? "s" : ""} in detail
                    </span>
                    <IconChevronDown size={16} />
                  </summary>
                  <div className="timeline-projects">
                    {role.projects.map((project) => (
                      <div className="timeline-project" key={project.name}>
                        <p className="timeline-project-name">{project.name}</p>
                        <p className="timeline-project-stack">{project.stack}</p>
                        <ul>
                          {project.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
