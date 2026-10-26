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
      "WooCommerce Subscriptions & Gifting",
      "Headless Moodle 4.5 (LTS)",
      "Custom LMS Portals",
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
      "Google Drive API Sync",
      "Git / GitHub / Bitbucket",
      "Docker Basics",
      "Postman",
      "Jira / Agile",
      "Linux / Nginx",
    ],
  },
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "proptech", label: "🏢 UAE PropTech & Portals" },
  { id: "ai-systems", label: "🤖 Enterprise AI & Governance" },
  { id: "edtech", label: "🎓 EdTech & Headless LMS" },
  { id: "ecommerce", label: "📦 P2P Logistics & E-Commerce" },
  { id: "traveltech", label: "🎧 TravelTech & CMS" },
  { id: "fintech", label: "💳 Fintech & Enterprise SaaS" },
];

export const FEATURED_PROJECTS = [
  {
    id: "uae-proptech",
    category: "proptech",
    domain: "UAE PropTech & Real Estate",
    role: "Lead Systems Architect",
    stack: "Laravel · Next.js · Python · Bitrix24 · Sudonum · XML/JSON",
    title: "UAE Real Estate Portal Synchronization & AI Lead Qualification Hub",
    shortDescription:
      "Enterprise infrastructure powering bi-directional listing synchronization, real-time telephony tracking, and conversational AI lead qualification across UAE property portals.",
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
    previewImage: "/projects/real-estate/unit-matrix-2d-view.png",
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
    id: "reelly-luxe",
    category: "proptech",
    domain: "Luxury PropTech & Bitrix24 CRM Engine",
    role: "Full Stack & PropTech Integration Architect",
    stack: "React 19 · TypeScript 5 · Node.js / Express (BFF) · Vite · Leaflet (Dark Matter) · Reelly API v2.0 · Bitrix24 CRM · Multi-Currency",
    title: "Reelly Luxe — High-Net-Worth Real Estate Portal & Bitrix24 CRM Deal Matching Engine",
    shortDescription:
      "Enterprise real estate platform unifying Reelly API v2.0 off-plan feeds with Bitrix24 CRM, featuring dual-mode luxury discovery, Leaflet dark maps, live currency conversions, and automated VIP proposal generation.",
    summary:
      "Full-stack off-plan real estate ecosystem engineered in Obsidian & Gold (#0A0B10, #C5A059), bridging the Reelly API v2.0 with Bitrix24 CRM deals. Features an interactive Dark Matter map with gold coordinate pins, multi-currency pricing (AED, USD, EUR, GBP), financial payment schedule breakdown, and an automated broker workspace that matches buyer criteria and syncs proposal dispatches directly into Bitrix24 CRM activity timelines.",
    problem:
      "Luxury UAE brokerage teams waste hours manually cross-referencing developer off-plan launches against CRM deals, converting foreign currencies for international buyers, and calculating complex payment milestones without direct CRM synchronization.",
    solution:
      "Engineered a secure Node.js/TypeScript BFF gateway with server-side in-memory caching and strict key masking, paired with a React 19/TypeScript frontend. Built a dual-mode interface supporting both high-net-worth public browsing and embedded Bitrix24 CRM deal mode with one-click inventory attachment, WhatsApp VIP proposal dispatch, and activity timeline logging.",
    metrics: [
      { num: "100%", label: "Key Security (Masked BFF)" },
      { num: "4 Currencies", label: "Live Conversion (AED/USD/EUR/GBP)" },
      { num: "< 1s", label: "CRM Deal Matching" },
      { num: "Zero", label: "Credential Exposure" },
    ],
    previewImage: "/projects/reelly/reelly-catalog-grid.png",
    gallery: [
      {
        id: "reelly-catalog",
        title: "Obsidian & Gold Luxury Off-Plan Catalog Grid",
        desc: "Curated high-net-worth property discovery catalog (Sobha SeaHaven, Bugatti Residences, The Lana by Dorchester, Creek Waters 2, Bvlgari Lighthouse) with live pricing, handover milestones, and developer badges.",
        src: "/projects/reelly/reelly-catalog-grid.png",
        tabLabel: "🏛️ Luxury Catalog Grid",
      },
      {
        id: "reelly-split",
        title: "Split Portal View & Synchronized Dark Map",
        desc: "Interactive split layout combining searchable property cards with synchronized Leaflet CartoDB Dark Matter map pins, coordinate auto-fit, and glowing gold price markers.",
        src: "/projects/reelly/reelly-split-portal.png",
        tabLabel: "🗺️ Split View & Dark Map",
      },
      {
        id: "reelly-dossier",
        title: "Project Dossier Modal & Payment Plan Milestones",
        desc: "High-net-worth project inspection modal featuring multi-photo gallery, amenities matrix, floor plans, 8.2% gross ROI calculator, and structured milestone schedules (20% booking, 40% construction, 40% handover).",
        src: "/projects/reelly/reelly-project-modal.png",
        tabLabel: "📋 Project Dossier & ROI",
      },
      {
        id: "reelly-bitrix",
        title: "Bitrix24 CRM Deal Matching Workspace",
        desc: "Embedded CRM workspace reading active deal criteria (Client: Sheikh Mohammed Al-Qasimi, Budget: AED 35M, 4+ BR), filtering matching inventory in real-time with one-click deal attachment.",
        src: "/projects/reelly/reelly-bitrix-mode.png",
        tabLabel: "💼 Bitrix24 Deal Mode",
      },
      {
        id: "reelly-proposal",
        title: "Bitrix24 VIP Client Proposal & Timeline Activity Sync",
        desc: "Broker dispatch modal formatting customized luxury property links, prefilling client WhatsApp messages, and recording instant activity notes directly into Bitrix24 deal timelines.",
        src: "/projects/reelly/reelly-proposal-modal.png",
        tabLabel: "📲 VIP Proposal & Timeline",
      },
      {
        id: "reelly-settings",
        title: "BFF Gateway Security & API Key Masking Architecture",
        desc: "Production security diagnostics verifying upstream Reelly v2.0 gateway health, endpoint latency, and complete server-side masking (re_...****) with zero client-side credential exposure.",
        src: "/projects/reelly/reelly-settings-modal.png",
        tabLabel: "🔒 BFF Security & Key Masking",
      },
      {
        id: "reelly-currency",
        title: "Real-Time Multi-Currency Engine (USD / EUR / GBP / AED)",
        desc: "Global investor pricing engine dynamically converting off-plan development prices, unit rates, and deposit schedules across AED, USD ($), EUR (€), and GBP (£).",
        src: "/projects/reelly/reelly-currency-switcher.png",
        tabLabel: "💱 Multi-Currency Engine",
      },
    ],
  },
  {
    id: "talentfilter-ai",
    category: "ai-systems",
    domain: "Enterprise ATS & AI Candidate Governance",
    role: "Lead AI Systems & Backend Architect",
    stack: "Python 3.11/3.13 · FastAPI · Next.js 14 · TypeScript · PostgreSQL / SQLite · PyMuPDF · Pydantic v2 · Celery / Redis · JWT / bcrypt",
    title: "TalentFilter AI — Enterprise ATS Resume Screening & Human-in-the-Loop Governance System",
    shortDescription:
      "High-throughput resume ingestion and deterministic scoring platform parsing PDFs/DOCX, extracting structured qualifications, and enforcing mandatory Human-in-the-Loop decision governance under EU AI Act & EEOC compliance standards.",
    summary:
      "Enterprise-grade Applicant Tracking System (ATS) combining FastAPI, PyMuPDF, and Next.js 14 App Router with strict Human-in-the-Loop (HITL) decision governance. Built on deterministic word-boundary parsing, explainable evidence extractions, and zero automated rejections. Features an interactive GRC audit center aligned with Deloitte Tech Risk Standards, EU AI Act High-Risk Employment AI requirements, and EEOC Four-Fifths compliance auditing.",
    problem:
      "Recruiting teams face thousands of unstructured candidate resumes per opening, leading to slow hiring cycles, biased heuristic rejections, and legal exposure under modern high-risk AI employment regulations (EEOC, EU AI Act, GDPR Art. 22).",
    solution:
      "Architected a deterministic, 100% explainable screening pipeline that decouples automated advisory recommendations from human HR decisions. Integrated PyMuPDF for resilient multi-page parsing, magic-byte inspection, SHA-256 deduplication, and an interactive GRC audit center verifying statutory compliance.",
    metrics: [
      { num: "100%", label: "Explainable Match Evidence" },
      { num: "Zero", label: "Automated Rejections (HITL)" },
      { num: "4 Statutory", label: "Standards Aligned (EEOC/EU AI/GDPR)" },
      { num: "< 2s", label: "Multi-Page Resume Parsing" },
    ],
    previewImage: "/projects/talentfilter/talentfilter-dashboard.png",
    gallery: [
      {
        id: "tf-dashboard",
        title: "Executive ATS Screening Dashboard & Operational Metrics",
        desc: "Enterprise recruitment cockpit displaying real-time processing statistics, deterministic match tiers, pipeline throughput, and candidate review queues.",
        src: "/projects/talentfilter/talentfilter-dashboard.png",
        tabLabel: "📊 Screening Dashboard",
      },
      {
        id: "tf-candidates",
        title: "Candidate Screening Directory & Blind Review Interface",
        desc: "Filterable candidate directory featuring blind review anonymization toggles, deterministic qualification percentages (0-100%), and decoupled human decision status.",
        src: "/projects/talentfilter/talentfilter-candidates.png",
        tabLabel: "👥 Candidate Directory",
      },
      {
        id: "tf-detail",
        title: "100% Explainable Match Breakdown & Resume Evidence",
        desc: "Deep candidate qualification dossier verifying mandatory competencies (Python, FastAPI, Docker, PostgreSQL) with exact text evidence snippets, bonus skill credits, and duration clarification flags.",
        src: "/projects/talentfilter/talentfilter-candidate-detail.png",
        tabLabel: "🔍 Explainable Scoring & Evidence",
      },
      {
        id: "tf-jobs",
        title: "Job Openings & Screening Criteria Engine",
        desc: "Configurable job screening criteria manager supporting minimum experience thresholds, required skill weights, and automated talent rediscovery across candidate pools.",
        src: "/projects/talentfilter/talentfilter-jobs.png",
        tabLabel: "💼 Screening Criteria Engine",
      },
      {
        id: "tf-upload",
        title: "Multi-File Batch Resume Parser & Ingestion Queue",
        desc: "Drag-and-drop batch ingestion portal supporting multi-page PDF and DOCX documents with magic-byte validation and SHA-256 duplicate detection.",
        src: "/projects/talentfilter/talentfilter-upload.png",
        tabLabel: "📥 Batch Ingestion Portal",
      },
      {
        id: "tf-audit",
        title: "Governance, Risk & Compliance (GRC) Audit Center",
        desc: "Enterprise compliance center aligned with Deloitte Tech Risk Standards, monitoring EEOC Four-Fifths disparate impact ratios, EU AI Act High-Risk requirements, and immutable audit logs.",
        src: "/projects/talentfilter/talentfilter-audit.png",
        tabLabel: "🛡️ GRC & AI Bias Compliance",
      },
    ],
  },
  {
    id: "hash-move",
    category: "ecommerce",
    domain: "P2P Logistics & Luggage Capacity Marketplace",
    role: "Lead Full Stack & Custom Architecture Engineer",
    stack: "PHP 8+ · WordPress Core API · Custom OOP Plugins · Vanilla JS (ES6+) · REST API · AES-256 Storage · WhatsApp E.164 · PWA",
    title: "HashMove — Peer-to-Peer Luggage Capacity & Cross-Border Parcel Delivery Platform",
    shortDescription:
      "Production-engineered peer-to-peer parcel delivery directory connecting international travelers with spare luggage capacity to senders, featuring automated route matching, AES-256 encrypted ID verification, and zero-fee WhatsApp handoffs.",
    summary:
      "Full-featured peer-to-peer parcel delivery ecosystem engineered in Deep Navy (#0A192F) and Emerald Green (#10B981), featuring custom OOP plugin architecture (`hash-move-core`), bi-directional route/date proximity matching, encrypted government ID verification, and mandatory Open Box safety inspection workflows.",
    problem:
      "Cross-border express couriers between Pakistan, the UAE, Saudi Arabia, and the UK charge exorbitant rates ($25+/kg) with 5–7 day delays, while international travelers fly with underutilized luggage allowances without a secure, identity-verified peer matching framework.",
    solution:
      "Architected a custom PHP 8/WordPress core engine featuring CPTs (`hm_traveler`, `hm_parcel`), an automated route/date matching engine, secure AES-256 encrypted storage for government ID credentials (CNIC/Passport) bypassing web accessibility, zero-middleman prefilled WhatsApp routing, and mandatory Open Box safety declarations.",
    metrics: [
      { num: "50%+", label: "Cheaper Than Air Express" },
      { num: "< 3s", label: "Automated Route Matching" },
      { num: "100%", label: "Encrypted ID Storage (.htaccess)" },
      { num: "Zero", label: "Third-Party Bloat (Pure Vanilla JS)" },
    ],
    previewImage: "/projects/hash-move/hashmove-homepage.png",
    gallery: [
      {
        id: "hashmove-hero",
        title: "HashMove P2P Marketplace Hero & Live Route Search",
        desc: "High-conversion landing experience in Deep Navy (#0A192F) and Emerald Green (#10B981) highlighting 0% platform fee, encrypted verification, live ticket preview, and instant route queries.",
        src: "/projects/hash-move/hashmove-homepage.png",
        tabLabel: "📦 Hero & Route Search",
      },
      {
        id: "hashmove-directory",
        title: "Interactive Traveler & Parcel Directory with Route Matrix",
        desc: "Real-time searchable directory with origin/destination city filters (KHI, LHE, DXB, RUH, ISB, LHR), transport modes (Flight, Train, Bus), price/kg rates, and direct WhatsApp contact.",
        src: "/projects/hash-move/hashmove-directory.png",
        tabLabel: "✈️ Travelers Directory",
      },
      {
        id: "hashmove-parcel-requests",
        title: "Active Parcel Requests Board & Baggage Matchmaker",
        desc: "Sender marketplace displaying live parcel delivery requests with verified sender badges, destination deadlines, parcel descriptions, weight allocations, and pre-negotiated budgets.",
        src: "/projects/hash-move/hashmove-parcel-requests.png",
        tabLabel: "📬 Parcel Requests Board",
      },
      {
        id: "hashmove-traveler-form",
        title: "4-Step Traveler Offer Workflow & Live Ticket Preview",
        desc: "Multi-step listing wizard capturing route dates, weight allowance, expected fee/kg, live dynamic ticket card preview, and encrypted CNIC/Passport photo upload.",
        src: "/projects/hash-move/hashmove-traveler-form.png",
        tabLabel: "📝 Post a Trip Wizard",
      },
      {
        id: "hashmove-parcel-form",
        title: "Sender Parcel Request Portal & Category Specification",
        desc: "Structured sender workflow specifying parcel categories (Documents, Clothes, Gifts, Prescription Medicines), weight, budget, and mandatory prohibited items declaration.",
        src: "/projects/hash-move/hashmove-parcel-form.png",
        tabLabel: "📋 Send a Parcel Form",
      },
      {
        id: "hashmove-open-box",
        title: "Open Box Safety & Legal Compliance Architecture",
        desc: "Strict compliance framework mandating physical inspection of every parcel prior to travel to eliminate illicit baggage risk and enforce aviation security laws.",
        src: "/projects/hash-move/hashmove-open-box-policy.png",
        tabLabel: "🛡️ Safety & Inspection",
      },
      {
        id: "hashmove-mobile",
        title: "Mobile PWA Experience & Native App Tab Bar",
        desc: "Mobile-first responsive architecture with custom bottom navigation bar, quick listing tiles, and offline-capable Service Worker caching.",
        src: "/projects/hash-move/hashmove-mobile.png",
        tabLabel: "📱 Mobile App & PWA",
      },
    ],
  },
  {
    id: "alkithab-academy",
    category: "edtech",
    domain: "EdTech & Headless LMS Engineering",
    role: "Lead Portal Architect & Full Stack Engineer",
    stack: "PHP 8+ · Moodle 4.5.13+ (LTS Core) · Custom Moodle Plugin (local_alkithabportal) · Vanilla JS (ES6+) · REST / AJAX · Mustache Templates · Google Drive Sync · Zoom / Google Meet API",
    title: "Al Kithab Academy — Headless Student Learning Portal & Zero-Redirect LMS Sandbox",
    shortDescription:
      "Enterprise Islamic EdTech platform and custom student portal engineered on Moodle 4.5.13+ LTS core, enforcing the strict 'Zero-Redirect In-Portal Sandbox' rule with reverse-chronological record books, 4-tier certificate approvals, and headless timed quizzes.",
    summary:
      "Enterprise Islamic EdTech platform and custom student portal (`local_alkithabportal`) engineered on Moodle 4.5.13+ (LTS). Enforces the strict 'Zero-Redirect In-Portal Sandbox' architectural invariant — students never encounter raw Moodle backend interfaces. 100% of the student journey runs within an emerald/mint (#14B8A6) and dark navy (#0F2744) portal interface featuring dynamic course curricula, reverse-chronological attendance record books with teacher remarks, headless quiz runners, multi-tier certificate approvals, and automated cloud backup synchronization.",
    problem:
      "Traditional LMS setups like out-of-the-box Moodle present steep cognitive friction for young Islamic studies students: cluttered navigation bars, jarring page redirects to `/course/view.php` or `/mod/quiz/`, disorienting chronologies, and confusing assessment feedback lacking teacher audio/recitation context.",
    solution:
      "Architected a custom headless student portal plugin (`local_alkithabportal`) that completely decouples Moodle's core database (`mdl_quiz`, `mdl_assign`, `mdl_grade_grades`) from the presentation tier. Engineered reverse-chronological session record books, universal dropdown state persistence, headless modal quiz execution and question breakdowns, and an automated 4-stage certificate verification checklist with zero native redirects.",
    metrics: [
      { num: "100%", label: "In-Portal Sandbox (Zero Moodle Leakage)" },
      { num: "8 Curricula", label: "Multi-Subject Islamic Foundations" },
      { num: "4-Tier", label: "Certificate Approval Gates" },
      { num: "< 1s", label: "Headless Quiz Evaluation & Telemetry" },
    ],
    previewImage: "/projects/alkithab/alkithab-student-home.png",
    gallery: [
      {
        id: "alkithab-home",
        title: "Student Home & Interactive Learning Pathway",
        desc: "Centralized student dashboard featuring daily Islamic reflections, next class timetable with direct join launcher, tuition fee balance overview ($120), and prerequisite learning pathway graph.",
        src: "/projects/alkithab/alkithab-student-home.png",
        tabLabel: "🏠 Student Dashboard",
      },
      {
        id: "alkithab-assessments",
        title: "Square Assessments Grid & Oral Recitation Rubric",
        desc: "4-column responsive square card grid tracking unlocked quizzes with status pills, scores (10/10, 9/10), unlock/closed deadlines, and an oral assessment breakdown evaluating Pronunciation, Fluency, and Accuracy.",
        src: "/projects/alkithab/alkithab-assessments-grid.png",
        tabLabel: "📝 Assessments Grid",
      },
      {
        id: "alkithab-quiz",
        title: "Zero-Redirect In-Portal Timed Quiz Runner",
        desc: "Headless modal quiz runner executing directly inside the portal without navigating to Moodle /mod/quiz/. Features clean radio option selections, timed attempts, and asynchronous AJAX submission.",
        src: "/projects/alkithab/alkithab-quiz-modal.png",
        tabLabel: "⚡ Headless Quiz Runner",
      },
      {
        id: "alkithab-result",
        title: "In-Portal Question Breakdown & Scoring Telemetry",
        desc: "Instant post-submission audit breakdown displaying immediate grade (3/3), question-by-question correctness pills, submitted answers, and audit notification for teachers and administrators.",
        src: "/projects/alkithab/alkithab-quiz-result.png",
        tabLabel: "📊 Instant Quiz Results",
      },
      {
        id: "alkithab-recordbook",
        title: "Reverse-Chronological Record Book & Video Archive",
        desc: "Live class attendance ledger ordering sessions newest-first, rendering multi-subject lines (Qur'an Reading Practice + 99 Names of Allah), Present/Late/Absent status pills, teacher remarks callouts, and cloud video links.",
        src: "/projects/alkithab/alkithab-classes-recordbook.png",
        tabLabel: "📖 Attendance Record Book",
      },
      {
        id: "alkithab-certs",
        title: "Certificates Grid & 4-Gate Approval Workflow",
        desc: "Course completion milestone checklist enforcing all 4 signoffs (Course Content, Assessment, Teacher Approval, Headmistress Approval) before unlocking dynamic PDF certificate downloads.",
        src: "/projects/alkithab/alkithab-certificates-grid.png",
        tabLabel: "🎓 4-Tier Certificates",
      },
      {
        id: "alkithab-shop",
        title: "Curriculum Catalog & Prerequisite Learning Engine",
        desc: "Interactive course shop and study materials catalog with structured progression paths (Beginner Level Sarf → Advanced Level Nahw → Balaghah) and instant enrollment checks.",
        src: "/projects/alkithab/alkithab-shop-catalogue.png",
        tabLabel: "🛍️ Curriculum & Shop",
      },
      {
        id: "alkithab-course",
        title: "Chapter Syllabus & Lesson Resource Unlock Gating",
        desc: "Dynamic course dashboard with universal dropdown accordions, tutor profile, and sequential lesson resource locks (Worksheets and quizzes unlock only after teacher conducts the live class).",
        src: "/projects/alkithab/alkithab-course-detail.png",
        tabLabel: "📚 Course Detail & Gating",
      },
      {
        id: "alkithab-portal",
        title: "Public Academy Storefront & Course Discovery",
        desc: "High-conversion public portal for staging.alkithabacademy.com featuring course catalogs, faculty credentials, structured learning pathways, and direct student registration.",
        src: "/projects/alkithab/alkithab-portal-home.png",
        tabLabel: "🌐 Public Web Storefront",
      },
    ],
  },
  {
    id: "slowrise-pizza",
    category: "ecommerce",
    domain: "D2C Subscriptions & Artisan FoodTech",
    role: "Lead Full Stack & Subscription Systems Architect",
    stack: "PHP 8+ · WordPress Core · WooCommerce Subscriptions · Subscriptions Gifting · The Events Calendar Pro · Event Tickets Plus · Stripe / PayPal SDK · OceanWP Child Theme · REST API",
    title: "Slow Rise Pizza — D2C Artisan Masterclass Subscriptions & Recurring Gifting Engine",
    shortDescription:
      "Production D2C culinary education platform engineered for artisan masterclasses, recurring course bundle subscriptions ($100–$400), automated subscription gifting, and virtual livestream ticketing.",
    summary:
      "Enterprise-grade culinary e-commerce platform engineered for artisan pizza authority Noel Brohner (`slowrisepizza.com`). Built on an optimized PHP 8+ WordPress and WooCommerce Subscriptions core, the platform powers tiered video course subscriptions, on-demand masterclass streaming, and an automated Subscription Gifting Engine with interactive recipient email validation, personalized gifting messages, scheduled deliveries, and automated multi-party transaction notifications.",
    problem:
      "High-ticket artisan culinary masterclasses ($100–$400) face unique checkout friction: students frequently purchase courses as gifts for friends and family without an automated way to schedule delivery, pre-assign recipient credentials, or grant time-gated access to streaming curriculum without exposing the purchaser's personal billing account.",
    solution:
      "Engineered a customized WooCommerce Subscriptions & Gifting architecture with automated 3-way email dispatching (Recipient voucher, Purchaser confirmation, and Admin audit ledger). Implemented time-gated on-demand video bundle streaming (2-month access windows), real-time virtual live masterclass scheduling via The Events Calendar Pro & Event Tickets Plus, and decoupled recipient redemption with zero account credential leakage.",
    metrics: [
      { num: "100%", label: "Automated Subscription Gifting" },
      { num: "$100 – $400", label: "Tiered Course Subscriptions" },
      { num: "3-Way", label: "Automated Email Notification Engine" },
      { num: "< 2s", label: "On-Demand Video Curriculum Delivery" },
    ],
    previewImage: "/projects/slowrise/slowrise-subscription-gifting.png",
    gallery: [
      {
        id: "slowrise-gifting",
        title: "Interactive Subscription & Course Gifting Engine",
        desc: "In-line subscription gifting workflow featuring dynamic 'This is a gift' checkbox, recipient email validation, recipient name assignment, personalized congratulatory message, and automated gift redemption tracking.",
        src: "/projects/slowrise/slowrise-subscription-gifting.png",
        tabLabel: "🎁 Subscription Gifting",
      },
      {
        id: "slowrise-hero",
        title: "Artisan Pizza Authority & Digital Academy Hero",
        desc: "Clean high-conversion landing page presenting master baker Noel Brohner's consulting credentials (Food & Wine 'dough guru', Bestia 'mad scientist'), direct on-demand video access, and live class registration.",
        src: "/projects/slowrise/slowrise-homepage.png",
        tabLabel: "🍕 Brand & Masterclasses",
      },
      {
        id: "slowrise-ondemand",
        title: "On-Demand Video Course Library & Tiered Bundles",
        desc: "Filterable video masterclass catalog featuring Level 1 & Level 2 3-class bundles ($300–$400), hands-on beginner seminars, and artisan sourdough gas-fired deck oven deep dives with 2-month streaming windows.",
        src: "/projects/slowrise/slowrise-ondemand-classes.png",
        tabLabel: "📚 On-Demand Bundles",
      },
      {
        id: "slowrise-calendar",
        title: "Interactive Live Masterclass Schedule & Ticket RSVPs",
        desc: "Real-time livestream class schedule integrated with The Events Calendar Pro, Event Tickets Plus, and Zoom virtual conferencing with iCal feed subscriptions.",
        src: "/projects/slowrise/slowrise-events-calendar.png",
        tabLabel: "📅 Virtual Live Schedule",
      },
      {
        id: "slowrise-single",
        title: "Artisan Masterclass Detail & Gifting Checkbox",
        desc: "Comprehensive class curriculum breakdown (Artisan New York & Sicilian-Style pizza in professional bread ovens, $200.00) with rating reviews, ingredient guides, and one-click gifting selection.",
        src: "/projects/slowrise/slowrise-class-single.png",
        tabLabel: "🧑‍🍳 Single Class & Gifting",
      },
      {
        id: "slowrise-overview",
        title: "Dual Learning Pathways: On-Demand & Gift-A-Class",
        desc: "High-engagement storefront navigation directing students into On-Demand & Gift-A-Class channels alongside live class registrations and customer reviews.",
        src: "/projects/slowrise/slowrise-classes-gift-overview.png",
        tabLabel: "✨ Gifting & Reviews",
      },
    ],
  },
  {
    id: "zenawalk",
    category: "traveltech",
    domain: "TravelTech & Multilingual CMS Platforms",
    role: "Full Stack & Systems Engineer",
    stack: "Python (Flask) · MySQL · Cloudflare R2 · OpenRouteService · Boto3 · Vanilla JS (ES6+) · Stripe",
    title: "ZenaWalk — Multilingual Audio Tour Platform & Centralized CMS Engine",
    shortDescription:
      "Pedestrian walking tour platform for Genoa (Italy) featuring zero-code central CMS, 5-language localization with Italian fallback, and Cloudflare R2 audio streaming.",
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
    previewImage: "/projects/zenawalk/genova-hero.jpg",
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
    category: "ecommerce",
    domain: "Global E-Commerce & Logistics",
    role: "Senior Full Stack Developer",
    stack: "Laravel · Next.js · MySQL · Cin7 · ChannelAdvisor · Courier APIs",
    title: "WiseMarket 4-Country Marketplace & Logistics Automation Engine",
    shortDescription:
      "Cross-border e-commerce backbone operating across Australia, New Zealand, UAE, and Pakistan with automated courier API dispatch (TCS, Leopards, M&P) and Cin7 sync.",
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
    previewImage: null,
    isArchitectureVisual: true,
  },
  {
    id: "uae-hrm",
    category: "fintech",
    domain: "Enterprise SaaS & Fintech Compliance",
    role: "Full Stack Engineer",
    stack: "Laravel · Next.js · MySQL · AWS S3 · WPS Banking Specs",
    title: "UAE Enterprise HRM & WPS Compliant Payroll Platform",
    shortDescription:
      "Enterprise workforce management and 100% compliant UAE Central Bank Wages Protection System (WPS) automated SIF payroll generation.",
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
    previewImage: "/projects/hrm/hrm-wps-payslips-payroll.png",
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
  {
    name: "Reelly API v2.0",
    category: "UAE Off-Plan Data",
    color: "#C5A059",
    id: "reelly",
  },
  {
    name: "Moodle 4.5 Core",
    category: "Headless LMS Engine",
    color: "#F98012",
    id: "moodle",
  },
  {
    name: "Google Drive API",
    category: "Automated Cloud Backup",
    color: "#4285F4",
    id: "gdrive",
  },
  {
    name: "WooCommerce Subscriptions",
    category: "Recurring Billing & Gifting",
    color: "#96588A",
    id: "woo-sub",
  },
  {
    name: "The Events Calendar Pro",
    category: "Virtual Event Ticketing",
    color: "#334AFF",
    id: "events-calendar",
  },
];

export const RECRUITER_KNOWLEDGE = [
  {
    keywords: ["slowrise", "slow rise", "pizza", "subscription", "gifting", "noel brohner", "foodtech", "d2c", "woocommerce subscriptions"],
    answer:
      "Slow Rise Pizza Co. (slowrisepizza.com) is an artisan culinary masterclass and subscription platform engineered by Khuzemah. Built with PHP 8, custom WordPress/OceanWP architecture, and WooCommerce Subscriptions & Gifting, it specializes in recurring course bundle subscriptions ($100–$400) and an automated Subscription Gifting Engine with recipient email verification, personalized gifting notes, scheduled delivery, automated 3-way notification workflows (Recipient, Purchaser, Admin), and virtual live masterclass ticketing via The Events Calendar Pro.",
    action: { label: "Inspect Slow Rise Pizza Case Study", href: "/projects#case-slowrise-pizza" },
  },
  {
    keywords: ["alkithab", "alkithab academy", "moodle", "edtech", "lms", "learning portal", "zero-redirect", "quiz"],
    answer:
      "Al Kithab Academy is an enterprise EdTech platform and headless student learning portal engineered by Khuzemah. Built on Moodle 4.5.13+ (LTS) core and a custom plugin (local_alkithabportal), it enforces the strict 'Zero-Redirect In-Portal Sandbox' rule — students never see raw Moodle pages. Features an emerald & navy UI (#14B8A6, #0F2744), reverse-chronological attendance record books with teacher remarks, headless timed quiz modals with instant grading telemetry, 4-tier certificate approval workflows (Course Content, Assessment, Teacher Approval, Headmistress Approval), and automated Google Drive cloud backup synchronization.",
    action: { label: "Inspect Al Kithab Academy Case Study", href: "/projects#case-alkithab-academy" },
  },
  {
    keywords: ["reelly", "reelly luxe", "off-plan", "luxury", "sobha", "emaar", "binghatti", "omniyat"],
    answer:
      "Reelly Luxe is an ultra-luxury real estate platform and Bitrix24 CRM deal matching engine architected by Khuzemah. Built with React 19, TypeScript, and a Node.js/Express BFF gateway with masked key security, it integrates the Reelly API v2.0 with Bitrix24 CRM deals. Features an Obsidian & Gold design system, Leaflet Dark Matter map with gold coordinate pins, multi-currency engine (AED/USD/EUR/GBP), luxury Dossier payment plan schedules, and automated WhatsApp VIP client proposal dispatching directly into CRM deal timelines.",
    action: { label: "Inspect Reelly Luxe Case Study", href: "/projects#case-reelly-luxe" },
  },
  {
    keywords: ["talentfilter", "ats", "resume", "screening", "python-scrapper", "hitl", "governance", "fastapi", "pymupdf"],
    answer:
      "TalentFilter AI is an enterprise ATS resume screening and candidate governance system architected by Khuzemah. Built with FastAPI (Python 3.13), Next.js 14 App Router, and PostgreSQL/SQLite, it features deterministic keyword/synonym matching, PyMuPDF extraction, 100% explainable qualification scores with exact text evidence snippets, and mandatory Human-in-the-Loop (HITL) governance compliant with EEOC 4/5ths rules, EU AI Act, and Deloitte Tech Risk Standards.",
    action: { label: "Inspect TalentFilter AI Case Study", href: "/projects#case-talentfilter-ai" },
  },
  {
    keywords: ["hashmove", "hash-move", "parcel", "luggage", "traveler", "p2p", "delivery"],
    answer:
      "HashMove is a production-engineered peer-to-peer parcel delivery directory connecting international travelers with spare luggage capacity to parcel senders. Architected by Khuzemah with custom PHP 8 OOP plugin (hash-move-core), automated route matching, AES-256 encrypted ID storage for CNIC/passport uploads, and zero-fee direct WhatsApp chat handoffs.",
    action: { label: "Inspect HashMove Case Study", href: "/projects#case-hash-move" },
  },
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
