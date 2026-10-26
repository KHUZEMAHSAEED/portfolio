export default function SectionHeading({ eyebrow, title, lead, id, aside }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {aside && <div className="section-heading-aside">{aside}</div>}
    </div>
  );
}
