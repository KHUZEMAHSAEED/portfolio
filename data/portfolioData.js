// Portfolio datasets extracted from app/page.js
// Verified against Khuzemah Saeed's production experience and resume.

export const NODES = [
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

export const SKILLS = [
  {
    group: "Backend Engineering",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "PHP 8+",
      "Laravel",
      "CodeIgniter",
      "RESTful APIs",
      "Microservices & Queues",
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

export const FEATURED_PROJECTS = [
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
    id: "zenawalk",
    domain: "TravelTech & Multilingual CMS Platforms",
    role: "Full Stack & Systems Engineer",
    stack: "Python (Flask) · MySQL · Cloudflare R2 · OpenRouteService · Boto3 · Vanilla JS (ES6+) · Stripe",
    title: "ZenaWalk — Multilingual Audio Tour Platform & Centralized CMS Engine",
    summary:
      "Full-stack digital walking tour ecosystem for Genoa (Italy), featuring a centralized zero-code homepage CMS, 5-language localization with intelligent fallback to Italian, and Cloudflare R2 media streaming for high-definition audio guides and walking routes.",
    problem:
      "Tour creators and certified guides required a centralized way to manage texts, media, and audio commentary across 5 languages (Italian, English, French, German, Spanish) without developer intervention or redeployment, while serving heavy audio/image payloads globally with zero streaming latency.",
    solution:
      "Architected a Python/Flask REST backend with idempotent MySQL migrations (zw_settings, zw_translations), integrated Cloudflare R2 object storage via Boto3 with S3v4 signing for zero-egress audio distribution, built an OpenRouteService GPS walking route engine, and engineered a dynamic translation engine with Italian fallback.",
    metrics: [
      { num: "5", label: "Supported Languages (IT/EN/FR/DE/ES)" },
      { num: "10+", label: "Curated Walking Routes" },
      { num: "100%", label: "Cloudflare R2 CDN Streaming" },
      { num: "Zero-Code", label: "CMS Publishing & Fallback" },
    ],
    gallery: [
      {
        id: "zenawalk-hero",
        title: "ZenaWalk Genoa Itinerary Hub & Mobile Audio Guide Experience",
        desc: "Interactive pedestrian tour platform featuring GPS waypoint navigation, audio commentary, and mobile-first responsive layout.",
        src: "/projects/zenawalk/genova-hero.jpg",
        tabLabel: "🇮🇹 Genoa Tour Experience",
      },
    ],
    isZenaWalkVisual: true,
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
    isArchitectureVisual: true,
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

export const EXPERIENCE = [
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

export const INTEGRATIONS_DATA = [
  {
    name: "Property Finder",
    category: "UAE PropTech",
    color: "#EF4136",
    id: "pf",
  },
  {
    name: "Bayut",
    category: "UAE PropTech",
    color: "#25A656",
    id: "bayut",
  },
  {
    name: "Dubizzle",
    category: "UAE Classifieds",
    color: "#E41E26",
    id: "dubizzle",
  },
  {
    name: "Rightmove",
    category: "UK / Global Portal",
    color: "#00DF89",
    id: "rightmove",
  },
  {
    name: "Bitrix24 CRM",
    category: "Enterprise CRM",
    color: "#00AEEF",
    id: "bitrix24",
  },
  {
    name: "HubSpot",
    category: "Marketing & CRM",
    color: "#FF7A59",
    id: "hubspot",
  },
  {
    name: "Cin7",
    category: "Inventory & ERP",
    color: "#6366F1",
    id: "cin7",
  },
  {
    name: "ChannelAdvisor",
    category: "E-Commerce Feeds",
    color: "#00A3E0",
    id: "channeladvisor",
  },
  {
    name: "TCS Express",
    category: "Logistics & COD",
    color: "#D32F2F",
    id: "tcs",
  },
  {
    name: "Leopards Courier",
    category: "Logistics Dispatch",
    color: "#F59E0B",
    id: "leopards",
  },
  {
    name: "M&P Logistics",
    category: "Freight Logistics",
    color: "#0A2240",
    id: "mnp",
  },
  {
    name: "Stripe",
    category: "Payment Gateway",
    color: "#635BFF",
    id: "stripe",
  },
  {
    name: "PayPal",
    category: "Global Checkout",
    color: "#003087",
    id: "paypal",
  },
  {
    name: "Afterpay",
    category: "BNPL Financing",
    color: "#B2FCE4",
    id: "afterpay",
  },
  {
    name: "Sudonum Telephony",
    category: "Virtual Call Tracking",
    color: "#FF5A36",
    id: "sudonum",
  },
  {
    name: "Cloudflare R2",
    category: "Object Storage CDN",
    color: "#F38020",
    id: "cloudflare-r2",
  },
  {
    name: "OpenAI API",
    category: "LLMs & Automation",
    color: "#10A37F",
    id: "openai",
  },
];

export const RECRUITER_KNOWLEDGE = [
  {
    keywords: ["zenawalk", "genoa", "genova", "audio", "tour", "multilingual", "r2", "cms"],
    answer:
      "ZenaWalk is a full-stack digital walking tour platform for Genoa (Italy) engineered by Khuzemah. Key systems: Python (Flask) REST API with MySQL, Cloudflare R2 object storage via Boto3 (S3v4) for zero-latency audio streaming, a centralized zero-code CMS (/api/settings/public/), and 5-language localization (Italian, English, French, German, Spanish) with intelligent fallback to Italian.",
    action: { label: "Inspect ZenaWalk Case Study", href: "#cases" },
  },
  {
    keywords: ["stack", "technology", "technologies", "framework", "languages"],
    answer:
      "Khuzemah is a Senior Full Stack & AI Systems Engineer with 6+ years of production experience. Core stack: Python (Django, FastAPI, LLM orchestration), PHP (Laravel, CodeIgniter), React.js, Next.js (App Router), MySQL, Redis, and RESTful API architecture. He specializes in deep third-party integrations (Bitrix24, PropTech, logistics, payments) and practical AI automation.",
    action: { label: "View Capabilities", href: "#skills" },
  },
  {
    keywords: ["real estate", "proptech", "property finder", "bayut", "dubai", "uae"],
    answer:
      "At Saabsoft, Khuzemah engineered multiple UAE/MENA real estate platforms handling 15,000+ units. He integrated Property Finder, Bayut, and Dubizzle for automated listing sync, built Bitrix24 CRM lead automation, and implemented Sudonum virtual numbers for lead tracking.",
    action: { label: "Explore PropTech Case Study", href: "#cases" },
  },
  {
    keywords: ["hrm", "payroll", "wps", "attendance", "leaves", "salary", "saabsoft"],
    answer:
      "At Saabsoft, Khuzemah architected a full UAE HRM & Payroll platform covering biometric attendance CSV ingestion, automated overtime and late deductions, multi-tier leave approval pipelines, employee loan reconciliations, and compliant 1-click UAE Central Bank Wages Protection System (WPS) SIF file generation.",
    action: { label: "Inspect HRM Case Study", href: "#cases" },
  },
  {
    keywords: ["ai", "chatbot", "llm", "intelligence", "gpt", "openai"],
    answer:
      "Khuzemah builds operational AI systems that drive revenue. For UAE real estate, he built an AI conversational lead qualifier using Python and LLM APIs that captures budget, preferred property type, and investment readiness before routing clean leads directly into Bitrix24 CRM in under 30 seconds.",
    action: { label: "View Architecture Diagram", href: "#top" },
  },
  {
    keywords: ["remote", "availability", "notice", "location", "timezone", "hire"],
    answer:
      "Khuzemah is based in Lahore, Pakistan (GMT+5) and is remote-ready with proven experience working with UAE, Australian, and international teams. He is currently open to Senior Full Stack, Backend, or Lead Engineer roles with flexible 4+ hour overlap for US, EU, and Gulf timezones.",
    action: { label: "Send Email", href: "mailto:khuzemasaeed@gmail.com" },
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
    action: { label: "Email Directly", href: "mailto:khuzemasaeed@gmail.com" },
  },
];
