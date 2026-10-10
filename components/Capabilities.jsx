import { SKILLS } from "@/data/portfolioData";

export default function Capabilities() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Core Capabilities &amp; Stack</h2>
          <span className="section-index">02</span>
        </div>
        <div className="cap-grid">
          {SKILLS.map((s) => (
            <div className="cap-cell" key={s.group}>
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
