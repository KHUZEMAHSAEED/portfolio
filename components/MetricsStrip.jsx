export default function MetricsStrip() {
  const metrics = [
    {
      val: "6+",
      label: "Years Experience",
      desc: "Building enterprise web platforms & automated pipelines",
    },
    {
      val: "15+",
      label: "Connected Platforms",
      desc: "Portals, CRMs, logistics, payment gateways & AI APIs",
    },
    {
      val: "4",
      label: "Global Markets",
      desc: "Live systems in UAE, Australia, New Zealand & Pakistan",
    },
    {
      val: "99.9%",
      label: "Sync Availability",
      desc: "Resilient webhook listeners, retries & queue architecture",
    },
  ];

  return (
    <div className="wrap">
      <div className="metrics-strip">
        {metrics.map((m) => (
          <div className="metric-card" key={m.label}>
            <div className="metric-val">{m.val}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
