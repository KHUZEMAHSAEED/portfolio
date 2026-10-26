import { IMPACT } from "@/data/portfolioData";

export default function ImpactStats() {
  return (
    <section className="impact" aria-label="Impact in numbers">
      <div className="wrap">
        <ul className="impact-grid">
          {IMPACT.map((m) => (
            <li className="impact-item" key={m.label}>
              <span className="impact-value">{m.value}</span>
              <span className="impact-label">{m.label}</span>
              <span className="impact-detail">{m.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
