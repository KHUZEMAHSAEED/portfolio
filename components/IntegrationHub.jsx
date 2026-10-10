"use client";

import { NODES } from "@/data/portfolioData";

export default function IntegrationHub({ activeNode, onSelectNode }) {
  return (
    <div className="diagram-wrap">
      <svg
        className="diagram-svg"
        viewBox="0 0 600 600"
        role="img"
        aria-label="Interactive diagram displaying Khuzemah Saeed as a central engineering hub connected to Bitrix24, Property Finder, Stripe, Cin7, AI Chatbots, and logistics platforms"
      >
        {NODES.map((n, i) => (
          <line
            key={`line-${n.id}`}
            className={`node-link ${activeNode.id === n.id ? "is-active" : ""}`}
            x1="300"
            y1="300"
            x2={n.x}
            y2={n.y}
            style={{ animationDelay: `${i * 0.06}s` }}
          />
        ))}

        {/* Central Core Node */}
        <circle className="node-core" cx="300" cy="300" r="52" />
        <text
          className="node-core-label"
          x="300"
          y="295"
          textAnchor="middle"
        >
          KS
        </text>
        <text
          className="node-label"
          x="300"
          y="316"
          textAnchor="middle"
          style={{ fill: "var(--signal)", fontSize: "11px", fontWeight: "600" }}
        >
          Full Stack + AI Hub
        </text>

        {/* Satellite Nodes with click/hover interactivity */}
        {NODES.map((n, i) => {
          const isActive = activeNode.id === n.id;
          return (
            <g
              key={`node-${n.id}`}
              className={`node-group ${isActive ? "is-active" : ""}`}
              onClick={() => onSelectNode(n)}
              onMouseEnter={() => onSelectNode(n)}
              tabIndex={0}
              role="button"
              aria-label={`Inspect ${n.label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectNode(n);
                }
              }}
            >
              <circle
                className="node-satellite"
                cx={n.x}
                cy={n.y}
                r={isActive ? "9" : "7"}
                style={{ animationDelay: `${0.2 + i * 0.05}s` }}
              />
              <text
                className="node-label"
                x={n.lx}
                y={n.ly}
                textAnchor={n.anchor}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Dynamic Inspector Panel */}
      <div className="hub-inspector has-active">
        <div className="inspector-header">
          <span className="inspector-title">🔗 {activeNode.label}</span>
          <span className="inspector-badge">{activeNode.badge}</span>
        </div>
        <p className="inspector-desc">{activeNode.impact}</p>
        <div className="inspector-metric">
          <span>Stack:</span>
          <span className="tag">{activeNode.stack}</span>
        </div>
      </div>
    </div>
  );
}
