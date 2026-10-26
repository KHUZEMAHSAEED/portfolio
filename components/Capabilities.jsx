import { SKILLS, CORE_SKILLS } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";

const core = new Set(CORE_SKILLS);

export default function Capabilities() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Technical toolkit"
          aside={
            <p className="skills-legend">
              <span className="chip chip-core">Primary</span>
              <span className="chip">Working knowledge</span>
            </p>
          }
        />
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skills-group" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="chip-list">
                {s.items.map((item) => (
                  <li key={item} className={`chip ${core.has(item) ? "chip-core" : ""}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
