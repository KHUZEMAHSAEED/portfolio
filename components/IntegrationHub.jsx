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
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#17171e" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="activeLinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="violetGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#8B5CF6" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Dynamic Connector Lines */}
        {NODES.map((n, i) => (
          <line
            key={`line-${n.id}`}
            className={`node-link ${activeNode.id === n.id ? "is-active" : ""}`}
            x1="300"
            y1="300"
            x2={n.x}
            y2={n.y}
            stroke={activeNode.id === n.id ? "url(#activeLinkGrad)" : undefined}
            style={{ animationDelay: `${i * 0.06}s` }}
          />
        ))}

        {/* Ambient Ring around Core */}
        <circle
          cx="300"
          cy="300"
          r="68"
          fill="none"
          stroke="rgba(139, 92, 246, 0.2)"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />

        {/* Central Core Node */}
        <circle
          className="node-core"
          cx="300"
          cy="300"
          r="52"
          fill="url(#coreGlow)"
        />
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
          style={{ fill: "#C084FC", fontSize: "11px", fontWeight: "700", letterSpacing: "0.4px" }}
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
              {isActive && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="14"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.4)"
                  strokeWidth="1.5"
                />
              )}
              <circle
                className="node-satellite"
                cx={n.x}
                cy={n.y}
                r={isActive ? "9" : "7"}
                filter={isActive ? "url(#violetGlowFilter)" : undefined}
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
