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

const INTEGRATIONS_DATA = [
  {
    name: "Property Finder",
    category: "UAE PropTech",
    color: "#EF4136",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#EF4136" />
        {/* Authentic Property Finder single quotation mark */}
        <path
          d="M14.5 7.5c1.9 0 3.5 1.6 3.5 3.5 0 2.5-1.5 4.8-3.2 6.5-1.5 1.5-3.3 2.5-4.8 2.9l-.7-1.8c1.3-.4 2.8-1.2 4-2.4 1.1-1.1 2-2.6 2.2-4-.3.2-.8.3-1.3.3-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.8-3.5z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "Bayut",
    category: "UAE PropTech",
    color: "#25A656",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#25A656" />
        {/* Bayut magnifying glass ring & search handle */}
        <circle cx="11.2" cy="10.6" r="4.8" stroke="#ffffff" strokeWidth="1.7" fill="none" />
        <path d="M14.6 14l3.6 3.6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        {/* House inside search lens */}
        <path d="M11.2 7.6l-2.8 2.3v3.3h1.8v-1.8h2v1.8h1.8V9.9L11.2 7.6z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: "Dubizzle",
    category: "UAE Classifieds",
    color: "#E41E26",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#E41E26" />
        {/* Dubizzle official lowercase 'd' */}
        <path
          d="M15.5 5.8v12.4h-2.5v-1.2c-.8.9-1.9 1.5-3.2 1.5-2.8 0-4.8-2.1-4.8-5s2-5 4.8-5c1.3 0 2.4.6 3.2 1.5V5.8h2.5zm-2.5 7.7c0-1.6-1.1-2.8-2.6-2.8s-2.6 1.2-2.6 2.8 1.1 2.8 2.6 2.8 2.6-1.2 2.6-2.8z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "Rightmove",
    category: "UK / Global Portal",
    color: "#00DF89",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#002D3B" />
        {/* Rightmove green house-chevron */}
        <path
          d="M5.5 17.5V11L12 5.5l6.5 5.5v6.5h-4.2v-4.5h-4.6v4.5H5.5z"
          fill="#00DF89"
        />
      </svg>
    ),
  },
  {
    name: "Bitrix24 CRM",
    category: "Enterprise CRM",
    color: "#00AEEF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#00AEEF" />
        {/* Bitrix24 official b24 brand lettering */}
        <text
          x="12"
          y="15.8"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="8.8"
          fontWeight="900"
          letterSpacing="-0.3px"
          textAnchor="middle"
        >
          b24
        </text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    category: "Marketing & CRM",
    color: "#FF7A59",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#2E3A4B" />
        {/* HubSpot Sprocket */}
        <circle cx="12" cy="13.2" r="3.2" fill="#FF7A59" />
        <rect x="11.1" y="7.2" width="1.8" height="4" fill="#FF7A59" />
        <circle cx="12" cy="6.2" r="2" fill="#FF7A59" />
        <path d="M14.5 11.8l3.2-2" stroke="#FF7A59" strokeWidth="1.8" />
        <circle cx="18.5" cy="9.2" r="1.6" fill="#FF7A59" />
        <rect x="5.5" y="12.3" width="4" height="1.8" fill="#FF7A59" />
      </svg>
    ),
  },
  {
    name: "Cin7",
    category: "Inventory & ERP",
    color: "#6366F1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1E1B4B" />
        <path d="M12 4.5l6.5 3.8v7.4L12 19.5l-6.5-3.8V8.3L12 4.5z" stroke="#6366F1" strokeWidth="1.5" fill="#312E81" />
        <path d="M12 4.5v15M5.5 8.3l6.5 3.7 6.5-3.7" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.2" fill="#A5B4FC" />
      </svg>
    ),
  },
  {
    name: "ChannelAdvisor",
    category: "E-Commerce Feeds",
    color: "#00A3E0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0A2540" />
        <circle cx="12" cy="6.5" r="2.5" fill="#00A3E0" />
        <circle cx="6.5" cy="16.5" r="2.5" fill="#00A3E0" />
        <circle cx="17.5" cy="16.5" r="2.5" fill="#00A3E0" />
        <path d="M12 9v3.5m0 0l-4 2.5m4-2.5l4 2.5" stroke="#00A3E0" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "TCS Express",
    category: "Logistics & COD",
    color: "#D32F2F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#D32F2F" />
        {/* Bold TCS block lettering */}
        <text
          x="12"
          y="13"
          fill="#ffffff"
          fontFamily="'Arial Black', Impact, sans-serif"
          fontSize="7"
          fontWeight="900"
          letterSpacing="0.6px"
          textAnchor="middle"
        >
          TCS
        </text>
        {/* Iconic yellow speed streak */}
        <polygon points="4.5,15.8 19.5,15.8 18,17.8 3,17.8" fill="#FFD200" />
      </svg>
    ),
  },
  {
    name: "Leopards Courier",
    category: "Logistics Dispatch",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#F59E0B" />
        {/* Leaping leopard silhouette */}
        <path d="M4.5 9.5c1.2-.8 2.6-1 4-.8l3.2 1.5c.8.4 1.7.4 2.5 0l3-1.5c.8-.4 1.7-.2 2.3.4l1 1-1.8 1.2c-.4-.3-.9-.4-1.4-.2l-2.8 1.2c-.8.4-1.7.3-2.5-.2L9.5 10.5c-.8-.5-1.8-.6-2.7-.3L4 11.2l.5-1.7z" fill="#111827" />
        {/* Bold LCS mark */}
        <text
          x="12"
          y="19"
          fill="#111827"
          fontFamily="'Arial Black', Impact, sans-serif"
          fontSize="6.2"
          fontWeight="900"
          letterSpacing="1px"
          textAnchor="middle"
        >
          LCS
        </text>
      </svg>
    ),
  },
  {
    name: "M&P Logistics",
    category: "Freight Logistics",
    color: "#0A2240",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0A2240" />
        {/* Authentic M&P corporate typography */}
        <text
          x="12"
          y="14.8"
          fill="#F47920"
          fontFamily="'Arial Black', Impact, sans-serif"
          fontSize="7.5"
          fontWeight="900"
          letterSpacing="0px"
          textAnchor="middle"
        >
          <tspan fill="#ffffff">M</tspan><tspan fill="#F47920">&amp;</tspan><tspan fill="#F47920">P</tspan>
        </text>
        <rect x="4.5" y="17.2" width="15" height="1.6" rx="0.8" fill="#F47920" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    category: "Payment Gateway",
    color: "#635BFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#635BFF" />
        {/* Official Stripe 's' glyph */}
        <path
          d="M13.976 9.15c0-.684-.555-1.011-1.488-1.011-1.327 0-2.859.458-4.004 1.082l-.65-3.047C9.176 5.485 11.08 5 13.064 5c3.553 0 5.86 1.83 5.86 4.88 0 4.298-5.882 3.617-5.882 5.488 0 .81.674 1.157 1.637 1.157 1.626 0 3.376-.649 4.38-1.282l.654 3.047c-1.309.736-3.235 1.144-5.034 1.144-3.727 0-6.077-1.841-6.077-4.945 0-4.52 5.974-3.791 5.974-5.339z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "PayPal",
    category: "Global Checkout",
    color: "#003087",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#001428" />
        {/* Back P (Dark Blue) */}
        <path
          d="M7.5 17.5l2-12h4.5c2.4 0 4 1.2 3.6 3.5-.4 2.2-2.2 3.6-4.5 3.6h-1.6l-1 5H7.5z"
          fill="#003087"
        />
        {/* Front P (Light Blue) */}
        <path
          d="M9.8 19l1.6-9.5h4.2c2.2 0 3.8 1.1 3.4 3.2-.4 2.1-2.1 3.5-4.2 3.5h-1.5l-.9 5H9.8z"
          fill="#0079C1"
        />
      </svg>
    ),
  },
  {
    name: "Afterpay",
    category: "BNPL Financing",
    color: "#B2FCE4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#111827" />
        {/* Afterpay Mint Looping Chevrons */}
        <path
          d="M16.8 8.2L12 11 7.2 8.2M7.2 15.8L12 13l4.8 2.8"
          stroke="#B2FCE4"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8 8.2c1.2.7 1.7 2.1 1.2 3.4l-.8 1.4M7.2 15.8c-1.2-.7-1.7-2.1-1.2-3.4l.8-1.4"
          stroke="#B2FCE4"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Sudonum Telephony",
    category: "Virtual Call Tracking",
    color: "#FF5A36",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#FF5A36" />
        {/* Telephony handset */}
        <path
          d="M7 6.5c0-.8.7-1.5 1.5-1.5h1.2c.6 0 1.1.4 1.3 1l.7 2c.2.6 0 1.2-.4 1.6l-1 1c.9 1.8 2.3 3.2 4.1 4.1l1-1c.4-.4 1-.6 1.6-.4l2 .7c.6.2 1 .7 1 1.3v1.2c0 .8-.7 1.5-1.5 1.5-6.6 0-12-5.4-12-12z"
          fill="#ffffff"
        />
        {/* Call tracking audio waves */}
        <path d="M14.8 6c2.2.6 3.9 2.3 4.5 4.5M13.8 8.5c1.2.4 2.1 1.3 2.5 2.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "OpenAI API",
    category: "LLMs & Automation",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#10A37F" />
        {/* Official 6-fold OpenAI rosette */}
        <path
          d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.784a4.47 4.47 0 0 1 2.34-1.974V12.4a.765.765 0 0 0 .387.674l5.843 3.369-2.02 1.168a.076.076 0 0 1-.071 0l-4.839-2.793A4.502 4.502 0 0 1 2.34 8.784zm15.823 4.148l-5.843-3.37 2.02-1.167a.076.076 0 0 1 .071 0l4.839 2.793a4.504 4.504 0 0 1-.684 8.083v-5.666a.78.78 0 0 0-.403-.673zm2.241-4.633a4.476 4.476 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.4 11.838V9.506a.08.08 0 0 1 .033-.062l4.839-2.793a4.5 4.5 0 0 1 6.14 1.646zm-8.108-3.023a4.476 4.476 0 0 1 2.876 1.04l-.141.081-4.779 2.758a.795.795 0 0 0-.392.681v6.737l-2.02-1.168a.071.071 0 0 1-.038-.052V9.77a4.504 4.504 0 0 1 4.494-4.494zm-1.077 8.283l2.873-1.658 2.873 1.658v3.316l-2.873 1.658-2.873-1.658z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
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
            <div className="integrations-grid">
              {INTEGRATIONS_DATA.map((item) => (
                <div
                  className="integration-card"
                  key={item.name}
                  style={{
                    "--brand-color": item.color,
                  }}
                >
                  <div className="integration-icon-wrap">
                    {item.icon}
                  </div>
                  <div className="integration-info">
                    <span className="integration-name">{item.name}</span>
                    <span className="integration-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="integrations-arch-panel">
              <div className="integrations-arch-header">
                <span className="arch-badge">Integration Architecture &amp; Data Pipeline Specifications</span>
                <span className="arch-sub">Production standards engineered across UAE, Pakistan, Australia &amp; New Zealand</span>
              </div>
              <div className="integrations-arch-grid">
                <div className="integrations-arch-col">
                  <div className="arch-col-title">
                    <span className="arch-icon">🔄</span>
                    <h4>Fault-Tolerant Webhooks</h4>
                  </div>
                  <p>
                    Asynchronous event consumers with Redis queue workers, dead-letter retries, and sub-second payload dispatch for real-time CRM lead routing.
                  </p>
                  <div className="arch-tags">
                    <span>Redis Queues</span>
                    <span>Dead-Letter Retries</span>
                    <span>Rate-Limiting</span>
                  </div>
                </div>

                <div className="integrations-arch-col">
                  <div className="arch-col-title">
                    <span className="arch-icon">📡</span>
                    <h4>Automated Feed Ingestion</h4>
                  </div>
                  <p>
                    Scheduled bi-directional XML/JSON portal syndication, listing deduplication algorithms, and high-frequency 50,000+ SKU catalog sync.
                  </p>
                  <div className="arch-tags">
                    <span>XML/JSON Syndication</span>
                    <span>Deduplication</span>
                    <span>Multi-Region Sync</span>
                  </div>
                </div>

                <div className="integrations-arch-col">
                  <div className="arch-col-title">
                    <span className="arch-icon">🛡️</span>
                    <h4>Compliance &amp; FinTech Protocols</h4>
                  </div>
                  <p>
                    PCI-DSS compliant payment tokenization, idempotent courier dispatch, and UAE Central Bank WPS (Wage Protection System) banking integration.
                  </p>
                  <div className="arch-tags">
                    <span>PCI-DSS Tokenization</span>
                    <span>WPS Central Bank</span>
                    <span>Idempotent Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
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
