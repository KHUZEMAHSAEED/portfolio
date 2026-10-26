import { INTEGRATIONS_DATA } from "@/data/portfolioData";

// Plugins and storage APIs are left off so the strip reads as a list of business platforms.
const HIDDEN = new Set(["gdrive", "events-calendar", "woo-sub", "moodle"]);

export default function Platforms() {
  return (
    <section className="platforms" aria-labelledby="platforms-title">
      <div className="wrap platforms-inner">
        <p id="platforms-title" className="platforms-title">
          Platforms &amp; APIs integrated in production
        </p>
        <ul className="platforms-list">
          {INTEGRATIONS_DATA.filter((p) => !HIDDEN.has(p.id)).map((p) => (
            <li key={p.id} title={p.category}>
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
