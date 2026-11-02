"use client";

import { useState } from "react";
import { SKILLS, CORE_SKILLS } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";

const core = new Set(CORE_SKILLS);
const ALL = "All";

export default function Capabilities() {
  const [active, setActive] = useState(ALL);
  const groups = active === ALL ? SKILLS : SKILLS.filter((s) => s.group === active);

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

        <div className="filter-pills skills-tabs" role="group" aria-label="Filter skills by area">
          {[ALL, ...SKILLS.map((s) => s.group)].map((group) => {
            const isActive = active === group;
            const count =
              group === ALL
                ? SKILLS.reduce((n, s) => n + s.items.length, 0)
                : SKILLS.find((s) => s.group === group).items.length;

            return (
              <button
                key={group}
                type="button"
                aria-pressed={isActive}
                className={`filter-pill ${isActive ? "active" : ""}`}
                onClick={() => setActive(group)}
              >
                {group}
                <span className="filter-pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className={`skills-grid ${active === ALL ? "" : "is-single"}`}>
          {groups.map((s) => (
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
