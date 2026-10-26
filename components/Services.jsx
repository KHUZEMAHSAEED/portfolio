"use client";

import { SERVICES } from "@/data/portfolioData";

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-eyebrow">Client &amp; Technical Capabilities</span>
            <h2>Core Engineering Services</h2>
          </div>
          <span className="section-index">04</span>
        </div>
        <p className="section-lead">
          Specialized technical execution for startups, digital brokerages, and commerce platforms
          requiring dependable backend pipelines, CRM automation, or full-stack web products.
        </p>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.id} className="service-card panel">
              <div className="service-header">
                <span className="service-num">{s.num}</span>
                <h3 className="service-title">{s.title}</h3>
              </div>

              <p className="service-headline">{s.headline}</p>
              <p className="service-description">{s.description}</p>

              <div className="service-deliverables">
                <span className="deliverables-title">Key Capabilities &amp; Deliverables:</span>
                <ul>
                  {s.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="service-tech-group">
                <span className="tech-group-title">Primary Stack:</span>
                <div className="service-tech-tags">
                  {s.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Capabilities Callout */}
        <div className="additional-capabilities panel">
          <div className="add-cap-header">
            <h4>Additional Verified Capabilities &amp; Tooling</h4>
            <span className="add-cap-pill">Operational Tooling</span>
          </div>
          <p>
            Beyond Python, Django, and Next.js, I maintain continuous production experience with{" "}
            <strong>PHP 8+</strong> and <strong>Laravel</strong> for enterprise portals, custom{" "}
            <strong>WordPress</strong> and <strong>WooCommerce</strong> headless refactors (reducing LCP by up to 58%),{" "}
            <strong>AWS S3 / Cloudflare R2</strong> storage architectures, and <strong>Docker</strong> development environments.
          </p>
        </div>
      </div>
    </section>
  );
}
