import { EXPERIENCE } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Professional Experience</h2>
          <span className="section-index">04</span>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((role) => (
            <div className="role" key={role.title + role.company + role.period}>
              <div className="role-head">
                <h3 className="role-title">{role.title}</h3>
                <span className="role-period">{role.period}</span>
              </div>
              <p className="role-company">{role.company}</p>
              {role.projects.map((project) => (
                <div className="project" key={project.name}>
                  <p className="project-title">{project.name}</p>
                  <p className="project-stack">{project.stack}</p>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
