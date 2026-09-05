const NODES = [
  { x: 300, y: 100, label: "Property Finder / Bayut", anchor: "middle", lx: 300, ly: 78 },
  { x: 441.4, y: 158.6, label: "Bitrix24 CRM", anchor: "start", lx: 458, ly: 154 },
  { x: 500, y: 300, label: "Stripe / PayPal", anchor: "start", lx: 518, ly: 305 },
  { x: 441.4, y: 441.4, label: "Cin7 / ChannelAdvisor", anchor: "start", lx: 458, ly: 446 },
  { x: 300, y: 500, label: "AI lead chatbot", anchor: "middle", lx: 300, ly: 526 },
  { x: 158.6, y: 441.4, label: "HubSpot / Slack", anchor: "end", lx: 142, ly: 446 },
  { x: 100, y: 300, label: "WordPress", anchor: "end", lx: 82, ly: 305 },
  { x: 158.6, y: 158.6, label: "TCS / Leopards", anchor: "end", lx: 142, ly: 154 },
];

function SystemDiagram() {
  return (
    <div className="diagram-wrap">
      <svg
        className="diagram-svg"
        viewBox="0 0 600 600"
        role="img"
        aria-label="Diagram showing Khuzemah as a central integration hub connected to platforms such as Property Finder, Bitrix24, Stripe, Cin7, HubSpot, WordPress and an AI lead chatbot"
      >
        {NODES.map((n, i) => (
          <line
            key={`line-${i}`}
            className="node-link"
            x1="300"
            y1="300"
            x2={n.x}
            y2={n.y}
            style={{ animationDelay: `${i * 0.07}s` }}
          />
        ))}

        <circle className="node-core" cx="300" cy="300" r="50" />
        <text
          className="node-core-label"
          x="300"
          y="296"
          textAnchor="middle"
        >
          KS
        </text>
        <text
          className="node-label"
          x="300"
          y="316"
          textAnchor="middle"
          style={{ fill: "var(--muted-dim)", fontSize: "10.5px" }}
        >
          Laravel + Python
        </text>

        {NODES.map((n, i) => (
          <g key={`node-${i}`}>
            <circle
              className="node-satellite"
              cx={n.x}
              cy={n.y}
              r="7"
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
            />
            <text className="node-label" x={n.lx} y={n.ly} textAnchor={n.anchor}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const SKILLS = [
  {
    group: "Backend",
    items: ["PHP", "Laravel", "CodeIgniter", "Python", "REST APIs", "API architecture", "Third-party integrations"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    group: "AI & automation",
    items: ["LLM integrations", "AI chatbots", "Lead qualification", "Prompt engineering", "Workflow automation"],
  },
  {
    group: "Databases & data",
    items: ["MySQL", "SQL", "CSV / XML", "Data mapping", "Data migration", "Data validation", "Query optimization"],
  },
  {
    group: "CMS & CRM",
    items: ["WordPress", "Custom themes & plugins", "Bitrix24", "HubSpot", "E-commerce", "CRM", "HRM"],
  },
  {
    group: "Cloud & tools",
    items: ["AWS S3", "Git", "GitHub", "Bitbucket", "Jira", "Slack", "Postman"],
  },
];

const INTEGRATIONS = [
  "Property Finder",
  "Bayut",
  "Dubizzle",
  "Rightmove",
  "Cin7",
  "ChannelAdvisor",
  "Bitrix24",
  "HubSpot",
  "TCS",
  "Leopards",
  "M&P",
  "Stripe",
  "PayPal",
  "Afterpay",
];

const EXPERIENCE = [
  {
    title: "Senior Software Developer",
    company: "Saabsoft — Remote",
    period: "Nov 2024 — Present",
    projects: [
      {
        name: "UAE real estate platforms",
        stack: "Laravel · PHP · MySQL · React / Next.js",
        points: [
          "Engineered multiple Laravel-based real-estate platforms for UAE/MENA clients, covering listings, property management, projects, inventory, and media workflows.",
          "Integrated Property Finder, Bayut, Dubizzle, Xploon, Rightmove, and Sudonum for automated listing and lead synchronization.",
        ],
      },
      {
        name: "Real estate CRM & AI lead automation",
        stack: "Laravel · Next.js · Python · Bitrix24",
        points: [
          "Built Bitrix24 CRM automation for lead capture, qualification, synchronization, and owner assignment.",
          "Developed an AI-powered lead-qualification chatbot that captures budget, location, property type, and rent/sale preference before CRM handoff.",
          "Engineered reusable data mapping and CSV/XML workflows with validation and duplicate prevention for large property datasets.",
        ],
      },
      {
        name: "Developer project management platform",
        stack: "Laravel · Next.js · MySQL",
        points: [
          "Built a platform for managing developer projects, units, availability, pricing, sales pipeline, and property presentation workflows.",
        ],
      },
      {
        name: "UAE HRM & payroll platform",
        stack: "Laravel · Next.js · MySQL",
        points: [
          "Built HRM workflows covering employee management, attendance, leaves, payroll, payslips, loans & advances, and UAE-specific WPS processing.",
        ],
      },
    ],
  },
  {
    title: "Senior Software Developer",
    company: "Oz Techwork / WiseMarket — Lahore, Pakistan",
    period: "Aug 2022 — Oct 2024",
    projects: [
      {
        name: "WordPress & e-commerce development",
        stack: "WordPress · PHP · Custom themes & plugins",
        points: [
          "Developed and optimized 15+ WordPress e-commerce sites, improving performance, scalability, SEO, and reliability.",
          "Replaced heavy third-party plugins with custom PHP solutions to improve speed and maintainability.",
          "Upgraded and refactored existing sites: plugin cleanup, caching, database optimization, custom functionality.",
        ],
      },
      {
        name: "WiseMarket e-commerce platform",
        stack: "Laravel · Next.js · MySQL · REST APIs · SMS",
        points: [
          "Developed Laravel + Next.js workflows for a multi-country marketplace covering Australia, Pakistan, UAE, and New Zealand.",
          "Integrated TCS, Leopards, and M&P courier APIs for shipment and order management.",
          "Designed an end-to-end SMS OTP authentication workflow: generation, delivery, verification, account activation.",
          "Integrated Cin7 and ChannelAdvisor for inventory synchronization across marketplaces.",
          "Migrated legacy data with transformation, mapping, validation, and integrity checks.",
        ],
      },
    ],
  },
  {
    title: "Software Developer",
    company: "Rezaid — Lahore, Pakistan",
    period: "Sep 2020 — Jul 2022",
    projects: [
      {
        name: "Film production management platform",
        stack: "Laravel · React · REST APIs · HubSpot · Slack",
        points: [
          "Built a platform for film production workflows, project management, and business operations.",
          "Integrated HubSpot and Slack to automate CRM workflows, notifications, and team communication.",
        ],
      },
      {
        name: "Employee management system",
        stack: "Laravel · MySQL",
        points: [
          "Built an EMS for internal and commercial use, covering employees, roles, permissions, and business workflows.",
        ],
      },
      {
        name: "WordPress development",
        stack: "WordPress · PHP",
        points: [
          "Engineered custom themes and plugins, modernizing existing sites with optimized PHP in place of heavy third-party solutions.",
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="mark" href="#top">
            <span className="dot" />
            Khuzemah Saeed
          </a>
          <nav className="header-links">
            <a href="#work">Experience</a>
            <a href="#skills">Skills</a>
            <a className="always-show" href="mailto:khuzemasaeed@gmail.com">
              Email
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="gridpaper">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow-line">Senior Full Stack Developer & AI Engineer</p>
              <h1>Systems that connect, and hold together.</h1>
              <p className="tagline">
                Six-plus years building Laravel and Python platforms that sit at
                the center of real estate, e-commerce, and HR operations —
                wiring together CRMs, marketplaces, couriers, and AI
                chatbots into one working system.
              </p>
              <div className="hero-meta">
                <span>Lahore, Pakistan</span>
                <span>+92 347 5985699</span>
                <span>Remote-ready</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="mailto:khuzemasaeed@gmail.com">
                  Email me
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/KHUZEMAHSAEED"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/khuzemah-saeed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <SystemDiagram />
          </div>
        </section>

        <section className="section summary">
          <div className="wrap">
            <div className="section-head">
              <h2>Summary</h2>
              <span className="section-index">01</span>
            </div>
            <p>
              <strong>Senior Full Stack Developer & AI Engineer</strong> with
              6+ years of experience building scalable web applications,
              API-driven platforms, and intelligent business solutions.
              Strong in PHP/Laravel, Python, React.js, Next.js, REST APIs,
              CRM integrations, and cloud services, with proven delivery
              across real estate, e-commerce, HRM, and SaaS. Focused on
              AI-powered chatbots, LLM integrations, workflow automation,
              performance optimization, and production-ready systems.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Capabilities</h2>
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

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Platforms integrated</h2>
              <span className="section-index">03</span>
            </div>
            <div className="integrations">
              {INTEGRATIONS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
            <p className="integrations-note">
              Real estate portals, CRMs, couriers, and payment gateways
              wired into production systems across UAE, Pakistan,
              Australia, and New Zealand.
            </p>
          </div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Experience</h2>
              <span className="section-index">04</span>
            </div>
            <div className="timeline">
              {EXPERIENCE.map((role) => (
                <div className="role" key={role.title + role.period}>
                  <div className="role-head">
                    <h3 className="role-title">{role.title}</h3>
                    <span className="role-period">{role.period}</span>
                  </div>
                  <p className="role-company">{role.company}</p>
                  {role.projects.map((project) => (
                    <div className="project" key={project.name}>
                      <p className="project-title">{project.name}</p>
                      <p className="project-stack">{project.stack}</p>
                      <ul>
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Education</h2>
              <span className="section-index">05</span>
            </div>
            <div className="panel edu-panel">
              <div>
                <p className="edu-degree">Bachelor of Computer Science</p>
                <p className="edu-school">
                  National University of Sciences and Technology (NUST), Islamabad
                </p>
              </div>
              <span className="edu-years">2016 — 2020</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-lead">
            <h2>Building the next integration.</h2>
            <p>
              Open to senior full stack, backend, and AI engineering roles —
              especially where a platform needs several systems to work as one.
            </p>
          </div>
          <div className="footer-contacts">
            <a href="mailto:khuzemasaeed@gmail.com">khuzemasaeed@gmail.com</a>
            <a href="tel:+923475985699">+92 347 5985699</a>
            <a
              href="https://www.linkedin.com/in/khuzemah-saeed/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/khuzemah-saeed
            </a>
            <a
              href="https://github.com/KHUZEMAHSAEED"
              target="_blank"
              rel="noreferrer"
            >
              github.com/KHUZEMAHSAEED
            </a>
          </div>
        </div>
        <div className="wrap">
          <p className="footer-note">Lahore, Pakistan — © {new Date().getFullYear()} Khuzemah Saeed</p>
        </div>
      </footer>
    </>
  );
}
