export default function Education() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Education &amp; Foundation</h2>
          <span className="section-index">05</span>
        </div>
        <div className="panel edu-panel">
          <div>
            <p className="edu-degree">Bachelor of Science in Computer Science</p>
            <p className="edu-school">
              National University of Sciences and Technology (NUST), Islamabad
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: "4px 0 0" }}>
              Pakistan&apos;s #1 ranked engineering institution · Strong focus on
              distributed systems, data structures, algorithms &amp; software architecture.
            </p>
          </div>
          <span className="edu-years">2016 — 2020</span>
        </div>
      </div>
    </section>
  );
}
