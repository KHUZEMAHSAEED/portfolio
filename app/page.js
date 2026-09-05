"use client";

import { useState } from "react";

const NODES = [
  {
    id: "proptech",
    x: 300,
    y: 95,
    label: "Property Finder / Bayut",
    anchor: "middle",
    lx: 300,
    ly: 72,
    badge: "PropTech Integration",
    role: "Bi-directional listing & lead ingestion",
    stack: "Laravel · XML Feeds · Webhooks · Sudonum",
    impact: "Synced 15,000+ units across Dubai & Abu Dhabi with zero duplicate listings.",
  },
  {
    id: "bitrix",
    x: 445,
    y: 155,
    label: "Bitrix24 CRM",
    anchor: "start",
    lx: 462,
    ly: 150,
    badge: "CRM Architecture",
    role: "Automated lead distribution & deal pipelines",
    stack: "Bitrix24 REST API · Webhooks · Laravel",
    impact: "Automated lead assignment to agents in <3 seconds with full audit logging.",
  },
  {
    id: "payments",
    x: 505,
    y: 300,
    label: "Stripe / PayPal",
    anchor: "start",
    lx: 522,
    ly: 305,
    badge: "Fintech & Payments",
    role: "Secure payment gateway orchestration",
    stack: "Stripe Connect · PayPal SDK · Webhooks",
    impact: "Zero-failure subscription & escrow checkout flows with automated reconciliation.",
  },
  {
    id: "supplychain",
    x: 445,
    y: 445,
    label: "Cin7 / ChannelAdvisor",
    anchor: "start",
    lx: 462,
    ly: 450,
    badge: "Inventory & ERP",
    role: "Real-time stock sync across marketplaces",
    stack: "REST APIs · Cron Queues · Event Workers",
    impact: "Maintained concurrency for 50,000+ SKUs across 4 international regions.",
  },
  {
    id: "aichat",
    x: 300,
    y: 505,
    label: "AI Lead Chatbot",
    anchor: "middle",
    lx: 300,
    ly: 532,
    badge: "AI Automation",
    role: "Conversational qualification & routing",
    stack: "Python · OpenAI API · LangChain · FastAPI",
    impact: "Pre-qualified 4,000+ buyer leads on budget and location before CRM handoff.",
  },
  {
    id: "hubspot",
    x: 155,
    y: 445,
    label: "HubSpot / Slack",
    anchor: "end",
    lx: 138,
    ly: 450,
    badge: "Ops Automation",
    role: "Real-time team alerts & lifecycle sync",
    stack: "HubSpot API · Slack Webhooks · Laravel",
    impact: "Streamlined sales communication with instant deal stage event dispatches.",
  },
  {
    id: "cms",
    x: 95,
    y: 300,
    label: "WordPress Engine",
    anchor: "end",
    lx: 78,
    ly: 305,
    badge: "High-Traffic CMS",
    role: "Custom headless & high-speed PHP themes",
    stack: "Custom PHP · REST API · Redis Cache",
    impact: "Refactored 15+ portals, reducing LCP by 58% and eliminating plugin bloat.",
  },
  {
    id: "couriers",
    x: 155,
    y: 155,
    label: "TCS / Leopards / M&P",
    anchor: "end",
    lx: 138,
    ly: 150,
    badge: "Logistics Automation",
    role: "Automated courier dispatch & tracking",
    stack: "SOAP / REST APIs · Webhook Listeners",
    impact: "Processed 10,000+ monthly shipments with automated airway bill generation.",
  },
];

const SKILLS = [
  {
    group: "Backend Engineering",
    items: [
      "PHP 8+",
      "Laravel",
      "Python",
      "CodeIgniter",
      "RESTful APIs",
      "FastAPI",
      "Microservices",
      "Queue Workers",
    ],
  },
  {
    group: "Frontend & Web",
    items: [
      "React.js",
      "Next.js (App Router)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind / Vanilla CSS",
      "State Management",
    ],
  },
  {
    group: "AI & Intelligent Systems",
    items: [
      "LLM API Integrations",
      "Conversational Chatbots",
      "Lead Qualification AI",
      "Prompt Engineering",
      "Workflow Automation",
      "Vector Embeddings",
    ],
  },
  {
    group: "Databases & Architecture",
    items: [
      "MySQL",
      "PostgreSQL",
      "Database Optimization",
      "Redis Caching",
      "Data Migration & ETL",
      "XML / CSV Ingestion",
    ],
  },
  {
    group: "Enterprise CRM & Portals",
    items: [
      "Bitrix24 CRM",
      "HubSpot",
      "Property Finder API",
      "Bayut / Dubizzle API",
      "Cin7 Inventory",
      "WPS Payroll Processing",
    ],
  },
  {
    group: "Cloud, DevOps & Tools",
    items: [
      "AWS S3 & EC2",
      "Git / GitHub / Bitbucket",
      "Docker Basics",
      "Postman",
      "Jira / Agile",
      "Linux / Nginx",
    ],
  },
];

const FEATURED_PROJECTS = [
  {
    id: "uae-proptech",
    domain: "UAE PropTech & Real Estate",
    role: "Lead Systems Architect",
    stack: "Laravel · Next.js · Python · Bitrix24 · Sudonum · XML/JSON",
    title: "UAE Real Estate Portal Synchronization & AI Lead Qualification Hub",
    summary:
      "Enterprise infrastructure powering bi-directional listing synchronization, real-time call tracking, and intelligent AI lead pre-qualification across the UAE's major real estate portals.",
    problem:
      "Managing 15,000+ property units across Property Finder, Bayut, and Dubizzle caused frequent inventory drift, delayed lead assignments, and missed sales opportunities during off-hours.",
    solution:
      "Architected automated XML/JSON sync pipelines with strict deduplication schemas, webhook retry queues, and a Python-powered conversational bot capturing buyer budget, property type, and tenure.",
    metrics: [
      { num: "15,000+", label: "Units Synchronized" },
      { num: "< 30s", label: "AI Lead Response Time" },
      { num: "100%", label: "Deduplication Reliability" },
    ],
    gallery: [
      {
        id: "unit-matrix",
        title: "Developer Project Unit Matrix (Interactive 2D/3D Grid)",
        desc: "Real-time master project inventory matrix tracking 282 units across 8 floors with instant status classification (Available, Reserved, EOI, Booked, Sold, Blocked) and multi-filter pipeline.",
        src: "/projects/real-estate/unit-matrix-2d-view.png",
        tabLabel: "🏢 Unit Matrix (2D Grid)",
      },
      {
        id: "wizard-details",
        title: "Property Details Wizard & Multi-Type Specifications",
        desc: "Multi-step property listing workflow capturing property categorization (Residential vs Commercial, Rent vs Sale), specifications (Sq ft/sq m, Unit No, Bedrooms, Title Deed), and agent assignment.",
        src: "/projects/real-estate/property-details-wizard.png",
        tabLabel: "⚙️ Details Wizard",
      },
      {
        id: "publishing",
        title: "Multi-Portal Sync & Publishing Gateway (Bayut & Property Finder API)",
        desc: "Centralized publishing control with per-portal toggles (Bayut, Dubizzle, Property Finder API, Office Website), account mapping, and Sudonum telephony tracking.",
        src: "/projects/real-estate/multi-portal-publishing.png",
        tabLabel: "🔄 Multi-Portal Publishing",
      },
      {
        id: "listings",
        title: "Enterprise Property Listings & Live Feed Dashboard",
        desc: "High-scale inventory table managing 841+ active properties with multi-portal sync indicators (Bayut, PF, Dubizzle), status lifecycle filters, and bulk WhatsApp sharing.",
        src: "/projects/real-estate/property-listings-dashboard.png",
        tabLabel: "📋 Listings Dashboard",
      },
      {
        id: "compliance",
        title: "RERA Legal Compliance & Document Automation (Form A & Title Deeds)",
        desc: "Strict UAE regulatory compliance pipeline automating document verification, Form A validation, Title Deed attachments, and legal authorization tracking.",
        src: "/projects/real-estate/rera-document-compliance.png",
        tabLabel: "📄 Form A & Title Deeds",
      },
      {
        id: "media",
        title: "Media Asset Pipeline & Automated Watermarking",
        desc: "Multi-step property creation wizard featuring automated watermark injection, high-res photo sequencing, and optimized cloud CDN delivery.",
        src: "/projects/real-estate/media-gallery-watermark.png",
        tabLabel: "🖼️ Media & Watermarking",
      },
    ],
  },
  {
    id: "wisemarket",
    domain: "Global E-Commerce & Logistics",
    role: "Senior Full Stack Developer",
    stack: "Laravel · Next.js · MySQL · Cin7 · ChannelAdvisor · Courier APIs",
    title: "WiseMarket 4-Country Marketplace & Logistics Automation Engine",
    summary:
      "High-scale e-commerce backbone operating across Australia, New Zealand, UAE, and Pakistan, orchestrating cross-border inventory and automated dispatch across 3 courier logistics APIs.",
    problem:
      "Multi-currency operations across 4 countries caused stock desynchronization across marketplaces (Cin7, ChannelAdvisor) and manual bottlenecks in courier consignment creation.",
    solution:
      "Built an event-driven inventory synchronization worker, automated SMS OTP customer verification, and unified courier dispatch engine for TCS, Leopards, and M&P with automated label printing and tracking webhooks.",
    metrics: [
      { num: "50,000+", label: "Catalog SKUs Managed" },
      { num: "4", label: "International Markets" },
      { num: "99.9%", label: "Inventory Sync Uptime" },
    ],
    mediaNote: "Multi-country order dashboard preview",
  },
  {
    id: "uae-hrm",
    domain: "Enterprise SaaS & Fintech Compliance",
    role: "Full Stack Engineer",
    stack: "Laravel · Next.js · MySQL · AWS S3 · WPS Banking Specs",
    title: "UAE Enterprise HRM & WPS Compliant Payroll Platform",
    summary:
      "Comprehensive workforce management and automated payroll platform compliant with the UAE Ministry of Human Resources and Emiratisation (MOHRE) Wages Protection System (WPS).",
    problem:
      "Manual payroll calculation with complex variable overtime, deductions, gratuity, and strict UAE central bank WPS formatting led to payroll delays and compliance penalties.",
    solution:
      "Architected deterministic payroll engine calculating leaves, loans, and end-of-service benefits, generating certified banking SIF files with 100% regulatory audit compliance.",
    metrics: [
      { num: "300+", label: "Employees Managed" },
      { num: "100%", label: "WPS SIF Audit Compliance" },
      { num: "Zero", label: "Calculation Discrepancies" },
    ],
    gallery: [
      {
        id: "hrm-wps",
        title: "UAE Wages Protection System (WPS) & Automated Payroll Engine",
        desc: "Deterministic payroll processing with direct 'Generate WPS' banking compliance SIF file generation, automated batch payslip downloads, and net pay computation.",
        src: "/projects/hrm/hrm-wps-payslips-payroll.png",
        tabLabel: "💳 WPS & Payroll Engine",
      },
      {
        id: "hrm-employees",
        title: "Enterprise Employee Directory & Real-Time Workforce Analytics",
        desc: "Centralized workforce registry tracking active/inactive employees, designation hierarchies (Leasing Agents, Property Managers), and contact records.",
        src: "/projects/hrm/hrm-employees-directory.png",
        tabLabel: "👥 Employee Directory",
      },
      {
        id: "hrm-attendance",
        title: "Biometric Attendance Tracking & CSV Batch Ingestion",
        desc: "Attendance reconciliation engine supporting CSV biometric device imports, check-in/out logging, overtime computation, and automated late deduction calculations.",
        src: "/projects/hrm/hrm-attendance-csv-import.png",
        tabLabel: "⏱️ Attendance & CSV Import",
      },
      {
        id: "hrm-leaves",
        title: "Leave Management & Multi-Tier Approval Workflow",
        desc: "Leave tracking portal with planned/unplanned utilization dashboards, CSV exports, and manager approval/rejection pipelines for casual, annual, and paternity leaves.",
        src: "/projects/hrm/hrm-leave-management.png",
        tabLabel: "📅 Leave Approvals",
      },
      {
        id: "hrm-loans",
        title: "Employee Loans & Advance Salary Ledger",
        desc: "Automated loan installment tracking and advance salary reconciliation, deducting repayments directly from monthly payroll runs.",
        src: "/projects/hrm/hrm-loans-advances.png",
        tabLabel: "🏦 Loans & Advances",
      },
    ],
  },
];

const EXPERIENCE = [
  {
    title: "Senior Software Developer",
    company: "Saabsoft — Remote",
    period: "Nov 2024 — Present",
    projects: [
      {
        name: "UAE Real Estate Ecosystem & Portals",
        stack: "Laravel · PHP · MySQL · React / Next.js · Sudonum",
        points: [
          "Engineered high-concurrency Laravel platforms for UAE/MENA property brokerages, handling thousands of live property listings, media assets, and broker inventory.",
          "Integrated Property Finder, Bayut, Dubizzle, Xploon, and Rightmove APIs to achieve automated real-time listing updates and lead ingestion.",
          "Implemented Sudonum virtual telephony tracking to trace lead source attribution across advertising channels.",
        ],
      },
      {
        name: "Real Estate CRM & Conversational AI Automation",
        stack: "Laravel · Next.js · Python · Bitrix24 · OpenAI API",
        points: [
          "Architected custom Bitrix24 CRM integration pipelines: automated lead capture, duplicate scrubbing, and round-robin broker assignment in <3 seconds.",
          "Developed an AI-powered conversational qualification bot capturing buyer budget, preferred communities, and financing readiness prior to CRM handoff.",
          "Constructed reusable ETL mapping workflows for large CSV/XML property datasets with automated validation schemas.",
        ],
      },
      {
        name: "Developer Project Management & Sales Platform",
        stack: "Laravel · Next.js · MySQL",
        points: [
          "Built full-lifecycle project management platform managing developer master developments, unit availability matrices, pricing tiers, and presentation collateral.",
        ],
      },
      {
        name: "UAE Enterprise HRM & WPS Payroll Platform",
        stack: "Laravel · Next.js · MySQL · Cloud Storage",
        points: [
          "Delivered enterprise HRM system managing leaves, biometric attendance, loans, advances, and end-of-service gratuity calculations.",
          "Engineered automated UAE Wages Protection System (WPS) SIF file generator ensuring full compliance with Central Bank standards.",
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
        name: "WiseMarket International E-Commerce Platform",
        stack: "Laravel · Next.js · MySQL · REST APIs · SMS Gateways",
        points: [
          "Developed mission-critical backend modules for a multi-regional marketplace serving Australia, Pakistan, UAE, and New Zealand.",
          "Engineered automated courier dispatch integrations for TCS, Leopards, and M&P, slashing manual fulfillment processing time by 80%.",
          "Designed resilient SMS OTP authentication architecture with fraud-prevention rate limiting for user activation.",
          "Integrated Cin7 and ChannelAdvisor for multi-channel inventory synchronization across regional warehouses.",
        ],
      },
      {
        name: "WordPress & High-Traffic E-Commerce Engineering",
        stack: "WordPress · PHP · Custom Architecture & Themes",
        points: [
          "Architected and optimized 15+ e-commerce portals, replacing bloated third-party plugins with custom PHP micro-solutions.",
          "Reduced Core Web Vitals LCP by up to 58%, significantly improving search rankings and checkout conversion.",
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
        name: "Film Production Management & Operations Platform",
        stack: "Laravel · React · REST APIs · HubSpot · Slack",
        points: [
          "Built a collaborative platform for film production scheduling, asset tracking, and resource management.",
          "Connected HubSpot CRM and Slack bots to automate client lead notifications and team sprint updates.",
        ],
      },
      {
        name: "Enterprise Employee Management System (EMS)",
        stack: "Laravel · MySQL · Role-Based Access Control",
        points: [
          "Developed modular EMS supporting dynamic hierarchical roles, granular access permissions, and departmental reporting.",
        ],
      },
      {
        name: "Custom Web Application Engineering",
        stack: "WordPress · PHP · Custom Plugins",
        points: [
          "Engineered bespoke plugins and optimized database queries for commercial clients across diverse industries.",
        ],
      },
    ],
  },
];

const INTEGRATIONS = [
  "Property Finder",
  "Bayut",
  "Dubizzle",
  "Rightmove",
  "Bitrix24 CRM",
  "HubSpot",
  "Cin7",
  "ChannelAdvisor",
  "TCS Express",
  "Leopards Courier",
  "M&P Logistics",
  "Stripe",
  "PayPal",
  "Afterpay",
  "Sudonum Telephony",
  "OpenAI API",
];

const RECRUITER_KNOWLEDGE = [
  {
    keywords: ["stack", "technology", "technologies", "framework", "languages"],
    answer:
      "Khuzemah is a Senior Full Stack & AI Systems Engineer with 6+ years of production experience. Core stack: PHP (Laravel, CodeIgniter), Python (FastAPI, LLM orchestration), React.js, Next.js (App Router), MySQL, Redis, and RESTful API architecture. He specializes in deep third-party integrations (CRMs, PropTech, logistics, payments) and practical AI automation.",
  },
  {
    keywords: ["real estate", "proptech", "property finder", "bayut", "dubai", "uae"],
    answer:
      "At Saabsoft, Khuzemah engineered multiple UAE/MENA real estate platforms handling 15,000+ units. He integrated Property Finder, Bayut, and Dubizzle for automated listing sync, built Bitrix24 CRM lead automation, and implemented Sudonum virtual numbers for lead tracking.",
  },
  {
    keywords: ["hrm", "payroll", "wps", "attendance", "leaves", "salary", "saabsoft"],
    answer:
      "At Saabsoft, Khuzemah architected a full UAE HRM & Payroll platform covering biometric attendance CSV ingestion, automated overtime and late deductions, multi-tier leave approval pipelines, employee loan reconciliations, and compliant 1-click UAE Central Bank Wages Protection System (WPS) SIF file generation.",
  },
  {
    keywords: ["ai", "chatbot", "llm", "intelligence", "gpt", "openai"],
    answer:
      "Khuzemah builds operational AI systems that drive revenue. For UAE real estate, he built an AI conversational lead qualifier using Python and LLM APIs that captures budget, preferred property type, and investment readiness before routing clean leads directly into Bitrix24 CRM in under 30 seconds.",
  },
  {
    keywords: ["remote", "availability", "notice", "location", "timezone", "hire"],
    answer:
      "Khuzemah is based in Lahore, Pakistan (GMT+5) and is remote-ready with proven experience working with UAE, Australian, and international teams. He is currently open to Senior Full Stack, Backend, or Lead Engineer roles with flexible 4+ hour overlap for US, EU, and Gulf timezones.",
  },
  {
    keywords: ["education", "degree", "university", "nust"],
    answer:
      "Khuzemah holds a Bachelor of Science in Computer Science (2016 — 2020) from the National University of Sciences and Technology (NUST), Islamabad — Pakistan's top-ranked engineering institution.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire"],
    answer:
      "You can reach Khuzemah directly at khuzemasaeed@gmail.com or via phone/WhatsApp at +92 347 5985699. His LinkedIn is linkedin.com/in/khuzemah-saeed.",
  },
];

export default function Home() {
  const [activeNode, setActiveNode] = useState(NODES[1]); // Default to Bitrix24
  const [galleryTabs, setGalleryTabs] = useState({ "uae-proptech": 0, "uae-hrm": 0 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hello! I am Khuzemah's portfolio assistant. Ask me anything about his technical stack, UAE PropTech experience, AI chatbots, or remote availability!",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSendPrompt = (promptText) => {
    const userMsg = { sender: "user", text: promptText };
    const query = promptText.toLowerCase();

    let matched = RECRUITER_KNOWLEDGE.find((item) =>
      item.keywords.some((kw) => query.includes(kw))
    );

    const reply = matched
      ? matched.answer
      : `Khuzemah is a Senior Full Stack & AI Systems Engineer (6+ years) experienced in Laravel, Python, Next.js, and complex third-party platforms (Property Finder, Bitrix24, Cin7). For specific inquiries, email him at khuzemasaeed@gmail.com or call +92 347 5985699.`;

    setMessages((prev) => [
      ...prev,
      userMsg,
      { sender: "assistant", text: reply },
    ]);
  };

  const handleSubmitChat = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal.trim();
    setInputVal("");
    handleSendPrompt(text);
  };

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="mark" href="#top">
            <span className="dot" />
            Khuzemah Saeed
          </a>
          <nav className="header-links">
            <a href="#cases">Case Studies</a>
            <a href="#work">Experience</a>
            <a href="#skills">Capabilities</a>
            <a
              href="/Khuzemah_Saeed_Resume.pdf"
              download="Khuzemah_Saeed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="always-show"
            >
              Resume (PDF)
            </a>
            <a className="always-show" href="mailto:khuzemasaeed@gmail.com">
              Email
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="gridpaper">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="status-badge">
                <span className="status-dot-pulse" />
                <span>Available for Senior Roles · US/EU/Gulf Remote</span>
              </div>
              <p className="eyebrow-line">
                Senior Full Stack Developer & AI Systems Engineer
              </p>
              <h1>Systems that connect, scale, and hold together.</h1>
              <p className="tagline">
                Six-plus years architecting resilient Laravel, Python, and Next.js
                platforms that sit at the core of UAE real estate, international
                e-commerce, and enterprise operations — orchestrating CRMs,
                marketplaces, logistics, and AI bots into unified ecosystems.
              </p>
              <div className="hero-meta">
                <span>📍 Lahore, Pakistan</span>
                <span>📞 +92 347 5985699</span>
                <span>🎓 NUST CS Graduate</span>
                <span>⚡ 4+ Hrs Global Overlap</span>
              </div>
              <div className="cta-row">
                <a
                  className="btn btn-primary"
                  href="mailto:khuzemasaeed@gmail.com?subject=Senior%20Engineering%20Opportunity"
                >
                  Email me
                </a>
                <button
                  type="button"
                  className="btn btn-accent"
                  onClick={() => setDrawerOpen(true)}
                >
                  ✨ Ask AI Assistant
                </button>
                <a
                  className="btn btn-ghost"
                  href="/Khuzemah_Saeed_Resume.pdf"
                  download="Khuzemah_Saeed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Download CV
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/khuzemah-saeed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/KHUZEMAHSAEED"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* INTERACTIVE HUB DIAGRAM */}
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
                      onClick={() => setActiveNode(n)}
                      onMouseEnter={() => setActiveNode(n)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Inspect ${n.label}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveNode(n);
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
          </div>

          {/* KEY METRICS STRIP */}
          <div className="wrap">
            <div className="metrics-strip">
              <div className="metric-card">
                <div className="metric-val">6+</div>
                <div className="metric-label">Years Experience</div>
                <div className="metric-desc">
                  Building enterprise web platforms & automated pipelines
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-val">15+</div>
                <div className="metric-label">Connected Platforms</div>
                <div className="metric-desc">
                  Portals, CRMs, logistics, payment gateways & AI APIs
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-val">4</div>
                <div className="metric-label">Global Markets</div>
                <div className="metric-desc">
                  Live systems in UAE, Australia, New Zealand & Pakistan
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-val">99.9%</div>
                <div className="metric-label">Sync Availability</div>
                <div className="metric-desc">
                  Resilient webhook listeners, retries & queue architecture
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED CASE STUDIES (PREPARED FOR UPCOMING USER IMAGES) */}
        <section id="cases" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Featured Case Studies</h2>
              <span className="section-index">01</span>
            </div>
            <p style={{ color: "var(--muted)", maxWidth: "66ch", marginBottom: "32px" }}>
              Deep architectural dives into production systems handling multi-portal
              real estate synchronization, international marketplace logistics, and
              strict enterprise compliance.
            </p>

            <div className="case-grid">
              {FEATURED_PROJECTS.map((proj) => (
                <article className="case-card panel" key={proj.id}>
                  <div className="case-card-top">
                    <div className="case-badges">
                      <span className="case-badge badge-domain">{proj.domain}</span>
                      <span className="case-badge badge-role">{proj.role}</span>
                    </div>
                    <span style={{ fontSize: "12.5px", color: "var(--muted-dim)" }}>
                      {proj.stack}
                    </span>
                  </div>

                  <h3 className="case-title">{proj.title}</h3>
                  <p className="case-summary">{proj.summary}</p>

                  <div className="case-columns">
                    <div className="case-col">
                      <h4>The Architectural Challenge</h4>
                      <p>{proj.problem}</p>
                    </div>
                    <div className="case-col">
                      <h4>Engineered Solution</h4>
                      <p>{proj.solution}</p>
                    </div>
                  </div>

                  <div className="case-metrics-bar">
                    {proj.metrics.map((m) => (
                      <div className="case-metric-item" key={m.label}>
                        <span className="case-metric-num">{m.num}</span>
                        <span className="case-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visual Drop-in Placeholder or Interactive Gallery */}
                  {proj.gallery && proj.gallery.length > 0 ? (
                    <div className="project-gallery">
                      <div
                        className="gallery-nav"
                        role="tablist"
                        aria-label={`${proj.title} views`}
                      >
                        {proj.gallery.map((item, gIdx) => {
                          const currentTab = galleryTabs[proj.id] || 0;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              role="tab"
                              aria-selected={currentTab === gIdx}
                              className={`gallery-tab ${
                                currentTab === gIdx ? "active" : ""
                              }`}
                              onClick={() =>
                                setGalleryTabs((prev) => ({
                                  ...prev,
                                  [proj.id]: gIdx,
                                }))
                              }
                            >
                              {item.tabLabel}
                            </button>
                          );
                        })}
                      </div>

                      {(() => {
                        const currentTab = galleryTabs[proj.id] || 0;
                        const activeItem = proj.gallery[currentTab] || proj.gallery[0];
                        return (
                          <div className="gallery-viewport">
                            <img
                              src={activeItem.src}
                              alt={activeItem.title || "Project Screenshot"}
                              className="gallery-img"
                              loading="lazy"
                            />
                            <div className="gallery-caption">
                              <div>
                                <span className="gallery-caption-title">
                                  {activeItem.title}
                                </span>
                                <span className="gallery-caption-desc">
                                  {activeItem.desc}
                                </span>
                              </div>
                              <a
                                href={activeItem.src}
                                target="_blank"
                                rel="noreferrer"
                                className="gallery-expand-link"
                                title="Open full resolution screenshot in new tab"
                              >
                                <span>View Full Resolution</span>
                                <span>↗</span>
                              </a>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="case-media-placeholder">
                      <span className="icon">🖼️</span>
                      <span>
                        <strong>Visual Artifact Slot:</strong> {proj.mediaNote}
                      </span>
                      <span
                        style={{ fontSize: "11.5px", color: "var(--muted-dim)" }}
                      >
                        (Ready to embed user project screenshots and diagrams)
                      </span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL CAPABILITIES */}
        <section id="skills" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Core Capabilities & Stack</h2>
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

        {/* INTEGRATED ECOSYSTEM */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Platforms & APIs Integrated</h2>
              <span className="section-index">03</span>
            </div>
            <div className="integrations">
              {INTEGRATIONS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
            <p className="integrations-note">
              Bi-directional API integrations, webhook pipelines, XML/JSON feeds, and
              payment gateways wired into high-reliability production systems across
              the UAE, Pakistan, Australia, and New Zealand.
            </p>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Professional Experience</h2>
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

        {/* EDUCATION */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Education & Foundation</h2>
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
                  distributed systems, data structures, algorithms & software architecture.
                </p>
              </div>
              <span className="edu-years">2016 — 2020</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-lead">
            <h2>Let&apos;s architect your next platform.</h2>
            <p>
              Open to senior full-stack, backend, and AI engineering opportunities —
              especially where multiple distributed systems, APIs, and AI workflows
              need to operate seamlessly as one.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <a
                className="btn btn-primary"
                href="mailto:khuzemasaeed@gmail.com?subject=Senior%20Engineering%20Role"
              >
                Send Email
              </a>
              <a
                className="btn btn-ghost"
                href="/Khuzemah_Saeed_Resume.pdf"
                download="Khuzemah_Saeed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="footer-contacts">
            <a href="mailto:khuzemasaeed@gmail.com">khuzemasaeed@gmail.com</a>
            <a href="tel:+923475985699">+92 347 5985699 (WhatsApp / Call)</a>
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
          <p className="footer-note">
            Lahore, Pakistan · Remote-ready worldwide · © {new Date().getFullYear()} Khuzemah Saeed
          </p>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON FOR RECRUITER AI ASSISTANT */}
      <button
        type="button"
        className="ai-fab"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open AI Recruiter Assistant"
      >
        <span className="ai-fab-indicator" />
        <span className="ai-fab-spark">✨</span>
        <span className="ai-fab-label">Ask Khuzemah AI</span>
      </button>

      {/* INTERACTIVE RECRUITER AI ASSISTANT DRAWER */}
      {drawerOpen && (
        <div
          className="ai-drawer-backdrop"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="ai-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="ai-drawer-header">
              <div>
                <div id="drawer-title" className="ai-drawer-title">
                  <span>✨</span>
                  <span>Khuzemah AI Assistant</span>
                </div>
                <span className="ai-drawer-subtitle">
                  Instant recruiter answers grounded in verified experience
                </span>
              </div>
              <button
                type="button"
                className="ai-close-btn"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close Assistant"
              >
                ✕
              </button>
            </div>

            <div className="ai-chat-body">
              {messages.map((m, idx) => (
                <div key={idx} className={`ai-msg ai-msg-${m.sender}`}>
                  <span className="ai-msg-sender">
                    {m.sender === "user" ? "You" : "Khuzemah AI"}
                  </span>
                  <div className="ai-bubble">
                    <p>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ai-chips-wrap">
              <span className="ai-chips-label">Quick Recruiter Questions:</span>
              <button
                type="button"
                className="ai-chip"
                onClick={() => handleSendPrompt("Tell me about your UAE Real Estate experience")}
              >
                🏢 UAE Real Estate & PropTech
              </button>
              <button
                type="button"
                className="ai-chip"
                onClick={() => handleSendPrompt("What is your core tech stack and architecture background?")}
              >
                🛠️ Core Stack & Architecture
              </button>
              <button
                type="button"
                className="ai-chip"
                onClick={() => handleSendPrompt("How do you build AI chatbots and integrations?")}
              >
                🤖 AI Chatbots & LLMs
              </button>
              <button
                type="button"
                className="ai-chip"
                onClick={() => handleSendPrompt("Tell me about your UAE HRM and WPS payroll platform")}
              >
                💼 UAE HRM & WPS Payroll
              </button>
              <button
                type="button"
                className="ai-chip"
                onClick={() => handleSendPrompt("What are your notice period and remote timezone availability?")}
              >
                🌍 Timezones & Availability
              </button>
            </div>

            <form className="ai-input-wrap" onSubmit={handleSubmitChat}>
              <input
                type="text"
                className="ai-input"
                placeholder="Ask about stack, projects, notice period..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button type="submit" className="ai-send-btn">
                Ask
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
