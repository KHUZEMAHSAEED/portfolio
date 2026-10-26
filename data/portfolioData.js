// Portfolio datasets extracted from app/page.js
// Verified against Khuzemah Saeed's production experience and resume.

// Recruiter-facing profile. Anything left empty ("" / null / []) is hidden
// on the site, so fill these in only with facts you're happy to stand behind.
export const PROFILE = {
  name: "Khuzemah Saeed",
  initials: "KS",
  title: "Senior Full Stack Developer",
  specialty: "Backend & AI Engineering",
  summary:
    "I build and integrate the platforms businesses run on — property portals, CRMs, payroll, logistics and AI lead automation — using Python, Laravel and Next.js. 6+ years shipping production systems for teams in the UAE, Australia and beyond.",
  location: "Lahore, Pakistan",
  timezone: "GMT+5 (PKT)",
  overlap: "4+ hours with US, EU & Gulf teams",
  workMode: "Remote",
  openTo: ["Senior Full Stack", "Backend Engineer", "Lead Engineer"],
  // Optional — shown only when set. e.g. "Full-time, Contract"
  employmentType: "Full-time or contract",
  // Optional — e.g. "30 days" or "Immediate". Recruiters ask this first.
  noticePeriod: "30 days",
  // Optional — e.g. "Open to relocating to UAE"
  relocation: "Remote only",
  // Optional — e.g. ["English (Professional)", "Urdu (Native)"]
  languages: ["English", "Urdu"],
  // Optional — drop a square headshot in /public and set e.g. "/headshot.jpg"
  photo: "/headshot.jpg",
  email: "khuzemasaeed@gmail.com",
  phone: "+92 347 5985699",
  phoneHref: "+923475985699",
  whatsapp: "https://wa.me/923475985699",
  linkedin: "https://www.linkedin.com/in/khuzemah-saeed/",
  // Count shown as social proof, linking to the recommendations on LinkedIn.
  linkedinRecommendations: 8,
  github: "https://github.com/KHUZEMAHSAEED",
  resume: "/Khuzemah_Saeed_Resume.pdf",
  coreStack: ["Python", "Laravel / PHP", "Next.js", "React", "MySQL", "REST APIs", "LLM integrations"],
  education: {
    degree: "Bachelor of Computer Science",
    school: "National University of Sciences and Technology (NUST)",
    city: "Islamabad",
    years: "2016 — 2020",
  },
  // Optional — e.g. [{ name: "AWS Certified Developer", issuer: "Amazon", year: "2025" }]
  certifications: [],
};

// LinkedIn recommendations, transcribed verbatim. `pull` is an exact excerpt used as the headline quote.
// The first entry is featured; the rest follow by relevance to senior roles.
export const RECOMMENDATIONS = [
  {
    name: "Yan Naing Lin",
    headline: "Software Engineer · Node.js, Python, React, Next.js and TypeScript",
    relationship: "Worked on the same team",
    date: "Dec 2025",
    pull: "When Khuzemah leads a piece of work, it moves forward with stability, clarity, and minimal supervision.",
    full: [
      "I've had the opportunity to work with Khuzemah Saeed across multiple projects, and he consistently demonstrates the level of discipline, foresight, and technical maturity you would expect from a senior engineer. His approach combines architectural thinking with a strong delivery mindset, allowing him to move seamlessly from high-level design to hands-on execution.",
      "Khuzemah has a clear command of modern web technologies, particularly Laravel, PHP ecosystems, API integrations, and scalable backend structures. He anticipates challenges early, aligns stakeholders quickly, and ensures solutions are both technically sound and operationally sustainable. His decisions are grounded in business impact, not just code.",
      "What I appreciate most is his sense of ownership. When Khuzemah leads a piece of work, it moves forward with stability, clarity, and minimal supervision. He is dependable, composed under pressure, and brings a thoughtful, results-driven energy to every engagement.",
      "Khuzemah would be an asset to any team looking for an engineer who not only delivers but elevates the overall standard of execution. I recommend him without hesitation.",
    ],
  },
  {
    name: "Rana Arslan Javaid",
    headline: "Full Stack Software Engineer · IoT Developer · AWS Certified",
    relationship: "Managed Khuzemah directly",
    managed: true,
    date: "Feb 2024",
    pull: "He has a natural ability to inspire and lead others, making him an invaluable asset in team environments.",
    full: [
      "It was my privilege to manage Khuzemah Saeed, a standout web developer whose dedication and hard work have left a lasting impact on our team. During our time together, Khuzemah's commitment to excellence and his comprehensive skill set in technologies such as Laravel, WordPress, PHP, CodeIgniter, React Js, and Shopify consistently elevated the quality of our web development projects. Khuzemah's contributions extend beyond his individual tasks. He has a natural ability to inspire and lead others, making him an invaluable asset in team environments. His management of multiple web development projects demonstrated not only his organizational skills but also his capacity to uplift and guide his team members toward achieving collective goals. In every aspect of his work, Khuzemah exhibits a level of dedication that is truly rare.",
    ],
  },
  {
    name: "Bilal Azhar",
    headline: "Senior Software Engineer · Backend & AI Engineering · Python, FastAPI, Django, Laravel, Next.js",
    relationship: "Senior colleague",
    date: "Aug 2026",
    pull: "He approached every task intelligently, took strong ownership, and delivered quality solutions without compromising production stability.",
    full: [
      "I had the pleasure of working with him and was consistently impressed by his technical expertise, reliability, and problem-solving skills. He approached every task intelligently, took strong ownership, and delivered quality solutions without compromising production stability. I highly recommend him as a dependable and skilled software engineer.",
    ],
  },
  {
    name: "Muhammad Waseem Alam",
    headline: "Senior Software Engineer · .NET Core, ASP.NET, Angular · CRM & Enterprise Systems",
    relationship: "Worked together",
    date: "Oct 2023",
    pull: "Khuzemah's problem-solving skills, coupled with his creativity, ensure he tackles challenges effectively.",
    full: [
      "Khuzemah Saeed is an exceptional talent in Laravel and WordPress development. His in-depth expertise and adaptability in these platforms consistently deliver top-tier solutions. Khuzemah's problem-solving skills, coupled with his creativity, ensure he tackles challenges effectively. He's a fantastic team player, fostering a collaborative environment and offering support to peers. His contributions have been invaluable, showcasing both technical prowess and a great work ethic. I highly recommend Khuzemah for any role requiring a skilled, dedicated, and versatile developer; working with him has been both a pleasure and a lesson in excellence.",
    ],
  },
  {
    name: "Talal Ghauri",
    headline: "API architecture, integrations & backend automation with Bitrix24 CRM",
    relationship: "Worked on the same team",
    date: "Oct 2023",
    pull: "His mastery of the Laravel framework, both in front-end and back-end development, has consistently delivered outstanding results.",
    full: [
      "I am delighted to provide a strong recommendation for Khuzema Saeed as an exceptional Full Stack Developer, with a primary focus on Laravel development and a strong secondary expertise in Shopify. Khuzema's proficiency in Laravel, along with his versatility in Shopify, is truly commendable. His mastery of the Laravel framework, both in front-end and back-end development, has consistently delivered outstanding results. His ability to design efficient and user-friendly interfaces, optimize website performance, and create custom Laravel solutions sets him apart. Additionally, Khuzema's adaptability and commitment to staying current with the latest trends in Laravel development, while also contributing to Shopify projects, make him a valuable asset to any team. I have no doubt that Khuzema will continue to excel in Full Stack Development with a strong emphasis on Laravel and Shopify, making him an excellent choice for any related project.",
    ],
  },
  {
    name: "Waqas Ikram",
    headline: "Technical Project Manager · Scalable Web & E-Commerce Products",
    relationship: "Managed Khuzemah directly",
    managed: true,
    date: "Oct 2023",
    pull: "He quickly grasped complex concepts and consistently demonstrated a strong work ethic.",
    full: [
      "Khuzemah's dedication and passion for learning were evident throughout our collaboration. I had the opportunity to teach him various technologies, including PHP, MySQL, CodeIgniter, Laravel, WordPress, and React. He quickly grasped complex concepts and consistently demonstrated a strong work ethic. His ability to apply these technologies to real-world projects showcased his proficiency and adaptability.",
      "I have no doubt that Khuzemah's continued growth and expertise in these technologies will make him a valuable asset to any team or project. His commitment to excellence and continuous learning make him a standout professional in the field. I wholeheartedly recommend Khuzemah for any opportunity where his skills and enthusiasm can shine.",
      "Feel free to reach out to me if you have any questions or need further information about Khuzemah's outstanding abilities.",
    ],
  },
  {
    name: "Muhammad Asad",
    headline: "Product Manager · Strategy & UX · LUMS",
    relationship: "Worked on the same team at Rezaid",
    date: "Dec 2023",
    pull: "His contributions significantly enhanced our team's capabilities.",
    full: [
      "Khuzemah and I collaborated in the latter part of 2020, marking our entry into the industry as part of the Class of 2020. Our professional journey spanned over a year at Rezaid, where Khuzemah, a key member of my development team, showcased his exceptional skills as a backend developer.",
      "From the onset, Khuzemah took on pivotal projects, demonstrating proficiency in tech stacks such as PHP, WordPress, and React JS. This proficiency played a crucial role in Rezaid's timely delivery of much-needed products for our clients. Khuzemah's problem-solving acumen proved invaluable, offering support to peers during critical stages of product development.",
      "I wholeheartedly recommend Khuzemah as an outstanding software engineer with exceptional logic-building skills. His contributions significantly enhanced our team's capabilities.",
    ],
  },
];

// Headline impact numbers. Every figure comes from the resume / case studies.
export const IMPACT = [
  { value: "6+", label: "years in production", detail: "Full stack delivery since 2020" },
  { value: "15,000+", label: "property units synced", detail: "Across Property Finder, Bayut & Dubizzle" },
  { value: "80%", label: "less manual fulfilment", detail: "Automated courier dispatch at WiseMarket" },
  { value: "58%", label: "faster page loads", detail: "LCP cut across 15+ e-commerce sites" },
];

export const DOMAINS = [
  "UAE real estate & PropTech",
  "E-commerce & logistics",
  "HR, payroll & WPS compliance",
  "AI lead qualification & ATS",
  "EdTech & LMS",
  "Payments & subscriptions",
  "Travel & multilingual CMS",
];

// Short, scannable card copy for the homepage. Full detail lives in FEATURED_PROJECTS.
export const PROJECT_CARDS = {
  "uae-proptech": {
    name: "UAE Property Portal Sync & AI Lead Hub",
    oneLiner: "Two-way listing sync with Property Finder, Bayut and Dubizzle, call tracking, and an AI bot that qualifies buyers before they reach the CRM.",
    outcome: "15,000+ units synced across 3 portals",
  },
  "reelly-luxe": {
    name: "Reelly Luxe — Off-Plan Portal & Bitrix24 Deal Matching",
    oneLiner: "React 19 + TypeScript portal on the Reelly API with a secure Node BFF, live currency conversion and one-click proposals logged to Bitrix24.",
    outcome: "Buyer criteria matched to inventory in < 1s",
  },
  "talentfilter-ai": {
    name: "TalentFilter AI — Explainable Resume Screening",
    oneLiner: "FastAPI + Next.js ATS that parses PDFs/DOCX, scores candidates with visible evidence, and keeps every hiring decision with a human.",
    outcome: "Multi-page resumes parsed in < 2s",
  },
  "uae-hrm": {
    name: "UAE HRM & WPS Payroll Platform",
    oneLiner: "Attendance, leave, loans and end-of-service calculations with one-click, Central Bank-compliant WPS SIF payroll files.",
    outcome: "300+ employees on automated payroll",
  },
  "alkithab-academy": {
    name: "Al Kithab Academy — Headless Moodle Portal",
    oneLiner: "Custom Moodle 4.5 plugin that gives students a clean portal for classes, quizzes and certificates without ever touching raw Moodle.",
    outcome: "8 curricula, 4-step certificate approvals",
  },
  "wisemarket": {
    name: "WiseMarket — 4-Country Marketplace & Logistics",
    oneLiner: "Laravel + Next.js marketplace with Cin7 / ChannelAdvisor inventory sync, SMS OTP onboarding and automated courier dispatch.",
    outcome: "50,000+ SKUs across AU, NZ, UAE & PK",
  },
  "hash-move": {
    name: "HashMove — Peer-to-Peer Parcel Delivery",
    oneLiner: "Custom PHP 8 platform matching travellers' spare luggage with senders, with encrypted ID verification and WhatsApp handoff.",
    outcome: "Route matching in < 3s",
  },
  "slowrise-pizza": {
    name: "Slow Rise Pizza — Subscriptions & Gifting",
    oneLiner: "WooCommerce Subscriptions build for $100–$400 masterclass bundles, gift redemption flows and live-class ticketing.",
    outcome: "Fully automated subscription gifting",
  },
  "crediblock": {
    name: "CrediPost — Secure WordPress Curation Plugin",
    oneLiner: "Pulls an article or video into WordPress, lets editors prune it with undo, and publishes across a Multisite network — rewritten for security.",
    outcome: "Every AJAX endpoint nonce- and capability-checked",
  },
  "zenawalk": {
    name: "ZenaWalk — Multilingual Audio Tours",
    oneLiner: "Flask + MySQL platform for walking tours of Genoa with a no-code CMS, 5 languages and Cloudflare R2 audio streaming.",
    outcome: "5 languages with automatic fallback",
  },
};

// Homepage order — the strongest, most relevant work first.
export const HOMEPAGE_PROJECTS = [
  "uae-proptech",
  "talentfilter-ai",
  "reelly-luxe",
  "uae-hrm",
  "wisemarket",
];

export const FAQ = [
  {
    q: "What roles are you looking for?",
    a: "Senior Full Stack, Backend or Lead Engineer roles — ideally where several systems (CRMs, portals, payments, AI) need to work together reliably.",
  },
  {
    q: "Where are you based, and which hours can you work?",
    a: "Lahore, Pakistan (GMT+5). I've worked remotely with UAE and Australian teams for years and keep 4+ hours of overlap with US, EU and Gulf time zones.",
  },
  {
    q: "What's your strongest stack?",
    a: "Python (Django / FastAPI) and PHP (Laravel) on the backend, React / Next.js on the frontend, MySQL / PostgreSQL for data — plus deep experience with third-party APIs and LLM integrations.",
  },
  {
    q: "Have you led projects end to end?",
    a: "Yes. At Saabsoft I build the UAE real estate, CRM automation and HRM/payroll platforms across the whole stack — data model, APIs, UI and integrations — and at WiseMarket I built core marketplace and logistics modules.",
  },
];

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
    impact: "Synced 15,000+ units across Dubai & Abu Dhabi with automated duplicate prevention.",
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
    impact: "Subscription and checkout flows with webhook-driven reconciliation.",
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
  { id: "all", label: "All" },
  { id: "proptech", label: "UAE PropTech" },
  { id: "ai-systems", label: "AI & ATS" },
  { id: "edtech", label: "EdTech & LMS" },
  { id: "ecommerce", label: "E-commerce & Logistics" },
  { id: "traveltech", label: "TravelTech & CMS" },
  { id: "fintech", label: "HR & Payroll SaaS" },
  { id: "wordpress", label: "WordPress Plugins" },
];

const ALL_PROJECTS = [
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
      { num: "15,000+", label: "Units synchronized" },
      { num: "< 30s", label: "AI lead response time" },
      { num: "3 portals", label: "Property Finder, Bayut & Dubizzle" },
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
    repo: "https://github.com/KHUZEMAHSAEED/reelly-realestate-integration-platform",
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
      { num: "4 currencies", label: "Live conversion (AED / USD / EUR / GBP)" },
      { num: "< 1s", label: "CRM deal matching" },
      { num: "Server-side", label: "API keys kept behind a Node BFF" },
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
        desc: "Embedded CRM workspace reading active deal criteria (e.g. budget AED 35M, 4+ bedrooms), filtering matching inventory in real-time with one-click deal attachment.",
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
        desc: "Production security diagnostics verifying upstream Reelly v2.0 gateway health, endpoint latency, and server-side key masking (re_...****) so credentials never reach the browser.",
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
    repo: "https://github.com/KHUZEMAHSAEED/ats-screening-platform",
    category: "ai-systems",
    domain: "Enterprise ATS & AI Candidate Governance",
    role: "Lead AI Systems & Backend Architect",
    stack: "Python 3.11/3.13 · FastAPI · Next.js 14 · TypeScript · PostgreSQL / SQLite · PyMuPDF · Pydantic v2 · Celery / Redis · JWT / bcrypt",
    title: "TalentFilter AI — Enterprise ATS Resume Screening & Human-in-the-Loop Governance System",
    shortDescription:
      "High-throughput resume ingestion and deterministic scoring platform parsing PDFs/DOCX, extracting structured qualifications, and enforcing mandatory Human-in-the-Loop decision governance under EU AI Act & EEOC compliance standards.",
    summary:
      "Applicant Tracking System (ATS) built with FastAPI, PyMuPDF and the Next.js 14 App Router, designed so software recommends and people decide. Scoring is deterministic and explainable — every match points to the resume text behind it — and the system never auto-rejects a candidate. An audit view tracks EEOC four-fifths adverse-impact ratios, with the human-in-the-loop design shaped by EU AI Act guidance for high-risk hiring tools.",
    problem:
      "Recruiting teams face thousands of unstructured candidate resumes per opening, leading to slow hiring cycles, biased heuristic rejections, and legal exposure under modern high-risk AI employment regulations (EEOC, EU AI Act, GDPR Art. 22).",
    solution:
      "Architected a deterministic, explainable screening pipeline that decouples automated advisory recommendations from human HR decisions. Integrated PyMuPDF for resilient multi-page parsing, magic-byte inspection, SHA-256 deduplication, and an audit view for monitoring bias across hiring decisions.",
    metrics: [
      { num: "Every score", label: "Backed by quoted resume evidence" },
      { num: "Human", label: "Final decision on every candidate" },
      { num: "4/5ths", label: "EEOC adverse-impact check built in" },
      { num: "< 2s", label: "Multi-page resume parsing" },
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
        title: "Explainable Match Breakdown & Resume Evidence",
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
        title: "Bias Monitoring & Audit View",
        desc: "Audit view monitoring EEOC four-fifths adverse-impact ratios across hiring decisions, backed by an immutable decision log.",
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
      "Peer-to-peer parcel delivery directory connecting international travelers with spare luggage capacity to senders, featuring automated route matching, AES-256 encrypted ID verification, and zero-fee WhatsApp handoffs.",
    summary:
      "Full-featured peer-to-peer parcel delivery ecosystem engineered in Deep Navy (#0A192F) and Emerald Green (#10B981), featuring custom OOP plugin architecture (`hash-move-core`), bi-directional route/date proximity matching, encrypted government ID verification, and mandatory Open Box safety inspection workflows.",
    problem:
      "Cross-border express couriers between Pakistan, the UAE, Saudi Arabia, and the UK charge exorbitant rates ($25+/kg) with 5–7 day delays, while international travelers fly with underutilized luggage allowances without a secure, identity-verified peer matching framework.",
    solution:
      "Architected a custom PHP 8/WordPress core engine featuring CPTs (`hm_traveler`, `hm_parcel`), an automated route/date matching engine, secure AES-256 encrypted storage for government ID credentials (CNIC/Passport) bypassing web accessibility, zero-middleman prefilled WhatsApp routing, and mandatory Open Box safety declarations.",
    metrics: [
      { num: "50%+", label: "Cheaper than air express (est.)" },
      { num: "< 3s", label: "Automated route matching" },
      { num: "AES-256", label: "Encrypted ID document storage" },
      { num: "Vanilla JS", label: "No front-end framework or plugin bloat" },
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
      "Enterprise Islamic EdTech platform and custom student portal (`local_alkithabportal`) engineered on Moodle 4.5.13+ (LTS). Enforces a strict 'Zero-Redirect In-Portal Sandbox' rule — students never encounter raw Moodle backend interfaces. The whole student journey runs within an emerald/mint (#14B8A6) and dark navy (#0F2744) portal interface featuring dynamic course curricula, reverse-chronological attendance record books with teacher remarks, headless quiz runners, multi-tier certificate approvals, and automated cloud backup synchronization.",
    problem:
      "Traditional LMS setups like out-of-the-box Moodle present steep cognitive friction for young Islamic studies students: cluttered navigation bars, jarring page redirects to `/course/view.php` or `/mod/quiz/`, disorienting chronologies, and confusing assessment feedback lacking teacher audio/recitation context.",
    solution:
      "Architected a custom headless student portal plugin (`local_alkithabportal`) that completely decouples Moodle's core database (`mdl_quiz`, `mdl_assign`, `mdl_grade_grades`) from the presentation tier. Engineered reverse-chronological session record books, universal dropdown state persistence, headless modal quiz execution and question breakdowns, and an automated 4-stage certificate verification checklist with zero native redirects.",
    metrics: [
      { num: "One portal", label: "Students never see raw Moodle pages" },
      { num: "8 Curricula", label: "Multi-subject Islamic foundations" },
      { num: "4-Tier", label: "Certificate approval gates" },
      { num: "< 1s", label: "Headless quiz evaluation & telemetry" },
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
      "Culinary e-commerce platform built for artisan pizza authority Noel Brohner (`slowrisepizza.com`). Built on an optimized PHP 8+ WordPress and WooCommerce Subscriptions core, the platform powers tiered video course subscriptions, on-demand masterclass streaming, and an automated Subscription Gifting Engine with interactive recipient email validation, personalized gifting messages, scheduled deliveries, and automated multi-party transaction notifications.",
    problem:
      "High-ticket artisan culinary masterclasses ($100–$400) face unique checkout friction: students frequently purchase courses as gifts for friends and family without an automated way to schedule delivery, pre-assign recipient credentials, or grant time-gated access to streaming curriculum without exposing the purchaser's personal billing account.",
    solution:
      "Engineered a customized WooCommerce Subscriptions & Gifting architecture with automated 3-way email dispatching (Recipient voucher, Purchaser confirmation, and Admin audit ledger). Implemented time-gated on-demand video bundle streaming (2-month access windows), real-time virtual live masterclass scheduling via The Events Calendar Pro & Event Tickets Plus, and recipient redemption that never exposes the purchaser's account.",
    metrics: [
      { num: "Automated", label: "Gift scheduling & redemption" },
      { num: "$100 – $400", label: "Tiered course subscriptions" },
      { num: "3-Way", label: "Automated email notification engine" },
      { num: "< 2s", label: "On-demand video curriculum delivery" },
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
    id: "crediblock",
    repo: "https://github.com/KHUZEMAHSAEED/crediblock",
    category: "wordpress",
    domain: "WordPress Plugin Engineering & Security",
    role: "Original Author (Rezaid) · v2.0 Rewrite",
    stack: "PHP 7.4–8.3 · WordPress Plugin API · DOMDocument / DOMXPath · WordPress Multisite · oEmbed · jQuery (core) · AJAX · i18n",
    title: "CrediPost (Crediblock) — Secure Content Curation & Multisite Publishing Plugin",
    shortDescription:
      "WordPress plugin that pulls an external article or video into the editor, lets editors strip unwanted blocks with undo, and publishes to any site in a Multisite network.",
    summary:
      "Content curation plugin for WordPress editors: paste a URL, get a clean, readable version of the article (or a responsive video embed), remove any paragraph or image with one click, then publish as a draft, for review, or live — on the current site or any subsite in a Multisite network. Khuzemah built the original plugin for Crediblock while at Rezaid, and later rewrote it from the ground up as v2.0, focused on security, maintainability and modern PHP.",
    problem:
      "The original v1 — written early in Khuzemah's career — scraped pages with a 1,000-line regex parser, shipped its own copies of jQuery that clashed with WordPress and other plugins, and exposed AJAX actions without request verification — fragile, hard to maintain, and open to SSRF, CSRF and stored-XSS issues.",
    solution:
      "Rebuilt the plugin on the standard WordPress plugin boilerplate structure. Fetching now goes through wp_safe_remote_get(), which refuses internal and loopback addresses; parsing uses DOMDocument and DOMXPath to drop scripts, navigation, sidebars and comments while keeping headings, paragraphs, lists, quotes and images, with relative URLs resolved to absolute ones. Every AJAX endpoint checks a nonce and the user's capability, all saved content passes through wp_kses_post(), Multisite publishing verifies permission on the target subsite, and assets load only on the plugin's own screen.",
    metrics: [
      { num: "1,034 → 441", label: "Lines in the rewritten scraper" },
      { num: "3 of 3", label: "AJAX endpoints with nonce & capability checks" },
      { num: "PHP 7.4–8.3", label: "Supported runtime range" },
      { num: "Multisite", label: "Publish to any subsite, permission-checked" },
    ],
    previewImage: null,
  },
  {
    id: "zenawalk",
    category: "traveltech",
    domain: "TravelTech & Multilingual CMS Platforms",
    role: "Full Stack & Systems Engineer",
    stack: "Python (Flask) · MySQL · Cloudflare R2 · OpenRouteService · Boto3 · Vanilla JS (ES6+) · Stripe",
    title: "ZenaWalk — Multilingual Audio Tour Platform & Centralized CMS Engine",
    shortDescription:
      "Pedestrian walking tour platform for Genoa (Italy) featuring a no-code central CMS, 5-language localization with Italian fallback, and Cloudflare R2 audio streaming.",
    summary:
      "Full-stack digital walking tour ecosystem for Genoa (Italy), featuring a centralized no-code homepage CMS, 5-language localization with intelligent fallback to Italian, and Cloudflare R2 media streaming for high-definition audio guides and walking routes.",
    problem:
      "Tour creators and certified guides required a centralized way to manage texts, media, and audio commentary across 5 languages (Italian, English, French, German, Spanish) without developer intervention or redeployment, while serving heavy audio and image files quickly to visitors worldwide.",
    solution:
      "Architected a Python/Flask REST backend with idempotent MySQL migrations (zw_settings, zw_translations), integrated Cloudflare R2 object storage via Boto3 with S3v4 signing for zero-egress audio distribution, built an OpenRouteService GPS walking route engine, and engineered a dynamic translation engine with Italian fallback.",
    metrics: [
      { num: "5", label: "Supported languages (IT/EN/FR/DE/ES)" },
      { num: "10+", label: "Curated walking routes" },
      { num: "Cloudflare R2", label: "Audio & media served from the edge" },
      { num: "No-code", label: "Content publishing with Italian fallback" },
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
      { num: "50,000+", label: "Catalog SKUs managed" },
      { num: "4", label: "International markets" },
      { num: "80%", label: "Less manual fulfilment work" },
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
    title: "UAE Enterprise HRM & WPS Payroll Platform",
    shortDescription:
      "Workforce management with automated SIF payroll files in the UAE Central Bank Wages Protection System (WPS) format.",
    summary:
      "Comprehensive workforce management and automated payroll platform compliant with the UAE Ministry of Human Resources and Emiratisation (MOHRE) Wages Protection System (WPS).",
    problem:
      "Manual payroll calculation with complex variable overtime, deductions, gratuity, and strict UAE central bank WPS formatting led to payroll delays and compliance penalties.",
    solution:
      "Architected deterministic payroll engine calculating leaves, loans, and end-of-service benefits, generating WPS-format SIF files ready for bank upload.",
    metrics: [
      { num: "300+", label: "Employees managed" },
      { num: "1-click", label: "WPS SIF file generation" },
      { num: "Automated", label: "Leave, loan & gratuity calculations" },
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

// Case-study order, strongest first for senior full stack / backend roles:
// scale and AI work, then public code, then smaller builds.
const PROJECT_ORDER = [
  "uae-proptech",
  "talentfilter-ai",
  "reelly-luxe",
  "uae-hrm",
  "wisemarket",
  "crediblock",
  "alkithab-academy",
  "hash-move",
  "zenawalk",
  "slowrise-pizza",
];

const projectRank = (id) => {
  const i = PROJECT_ORDER.indexOf(id);
  return i === -1 ? PROJECT_ORDER.length : i;
};

export const FEATURED_PROJECTS = [...ALL_PROJECTS].sort((a, b) => projectRank(a.id) - projectRank(b.id));

export const EXPERIENCE = [
  {
    title: "Senior Software Developer",
    company: "Saabsoft",
    location: "Remote",
    start: "2024-11",
    end: null,
    period: "Nov 2024 — Present",
    highlights: [
      "Engineered UAE/MENA real estate platforms integrating Property Finder, Bayut, Dubizzle, Xploon and Rightmove.",
      "Built Bitrix24 CRM automation and an AI lead-qualification chatbot that routes clean leads to brokers in under 3 seconds.",
      "Delivered a UAE HRM & payroll platform with Central Bank-compliant WPS SIF file generation.",
    ],
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
    company: "Oz Techwork / WiseMarket",
    location: "Lahore, Pakistan",
    start: "2022-08",
    end: "2024-10",
    period: "Aug 2022 — Oct 2024",
    highlights: [
      "Built core Laravel + Next.js modules for a marketplace live in Australia, New Zealand, UAE and Pakistan.",
      "Automated courier dispatch (TCS, Leopards, M&P), cutting manual fulfilment time by 80%.",
      "Optimised 15+ WordPress e-commerce sites, reducing LCP by up to 58%.",
    ],
    projects: [
      {
        name: "WiseMarket International E-Commerce Platform",
        stack: "Laravel · Next.js · MySQL · REST APIs · SMS Gateways",
        points: [
          "Developed core backend modules for a multi-regional marketplace serving Australia, Pakistan, UAE, and New Zealand.",
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
    company: "Rezaid",
    location: "Lahore, Pakistan",
    start: "2020-09",
    end: "2022-07",
    period: "Sep 2020 — Jul 2022",
    highlights: [
      "Built a Laravel + React film-production management platform with HubSpot and Slack automation.",
      "Developed a role-based Employee Management System for internal and commercial use.",
    ],
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
          "Built CrediPost for Crediblock — a WordPress plugin for curating external articles and videos and publishing them across a Multisite network (rebuilt as v2.0 in 2026, now public on GitHub).",
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
      "Reelly Luxe is a luxury off-plan real estate platform and Bitrix24 CRM deal matching engine architected by Khuzemah. Built with React 19, TypeScript, and a Node.js/Express BFF gateway with masked key security, it integrates the Reelly API v2.0 with Bitrix24 CRM deals. Features an Obsidian & Gold design system, Leaflet Dark Matter map with gold coordinate pins, multi-currency engine (AED/USD/EUR/GBP), luxury Dossier payment plan schedules, and automated WhatsApp VIP client proposal dispatching directly into CRM deal timelines.",
    action: { label: "Inspect Reelly Luxe Case Study", href: "/projects#case-reelly-luxe" },
  },
  {
    keywords: ["talentfilter", "ats", "resume", "screening", "python-scrapper", "hitl", "governance", "fastapi", "pymupdf"],
    answer:
      "TalentFilter AI is an enterprise ATS resume screening and candidate governance system architected by Khuzemah. Built with FastAPI (Python 3.13), Next.js 14 App Router, and PostgreSQL/SQLite, it features deterministic keyword/synonym matching, PyMuPDF extraction, explainable qualification scores with exact text evidence snippets, and mandatory human-in-the-loop review, with EEOC four-fifths bias monitoring built in.",
    action: { label: "Inspect TalentFilter AI Case Study", href: "/projects#case-talentfilter-ai" },
  },
  {
    keywords: ["hashmove", "hash-move", "parcel", "luggage", "traveler", "p2p", "delivery"],
    answer:
      "HashMove is a peer-to-peer parcel delivery directory connecting international travelers with spare luggage capacity to parcel senders. Architected by Khuzemah with custom PHP 8 OOP plugin (hash-move-core), automated route matching, AES-256 encrypted ID storage for CNIC/passport uploads, and zero-fee direct WhatsApp chat handoffs.",
    action: { label: "Inspect HashMove Case Study", href: "/projects#case-hash-move" },
  },
  {
    keywords: ["crediblock", "credipost", "wordpress plugin", "plugin", "scraper", "curation", "multisite", "ssrf"],
    answer:
      "CrediPost is a WordPress content-curation plugin Khuzemah originally built for Crediblock while at Rezaid, and later rebuilt from the ground up as v2.0. Editors paste a URL, get a clean version of the article or a responsive video embed, remove unwanted blocks with undo, and publish to the current site or any subsite in a Multisite network. The rewrite replaced a 1,000-line regex scraper with DOMDocument/XPath parsing, routes fetching through wp_safe_remote_get() to block SSRF, adds nonce and capability checks to every AJAX endpoint, sanitises saved content with wp_kses_post(), and supports PHP 7.4 to 8.3. The code is public on GitHub.",
    action: { label: "Inspect CrediPost Case Study", href: "/projects#case-crediblock" },
  },
  {
    keywords: ["zenawalk", "genoa", "genova", "audio", "tour", "multilingual", "r2", "cms"],
    answer:
      "ZenaWalk is a full-stack digital walking tour platform for Genoa (Italy) engineered by Khuzemah. Key systems: Python (Flask) REST API with MySQL, Cloudflare R2 object storage via Boto3 (S3v4) for fast audio streaming, a centralized no-code CMS (/api/settings/public/), and 5-language localization (Italian, English, French, German, Spanish) with intelligent fallback to Italian.",
    action: { label: "Inspect ZenaWalk Case Study", href: "/projects#case-zenawalk" },
  },
  {
    keywords: ["stack", "technology", "technologies", "framework", "languages"],
    answer:
      "Khuzemah is a Senior Full Stack Developer (Backend & AI) with 6+ years of production experience. Core stack: Python (Django, FastAPI, LLM orchestration), PHP (Laravel, CodeIgniter), React.js, Next.js (App Router), MySQL, Redis, and RESTful API architecture. He specializes in deep third-party integrations (Bitrix24, PropTech, logistics, payments) and practical AI automation.",
    action: { label: "View skills", href: "/#skills" },
  },
  {
    keywords: ["real estate", "proptech", "property finder", "bayut", "dubai", "uae"],
    answer:
      "At Saabsoft, Khuzemah engineered multiple UAE/MENA real estate platforms handling 15,000+ units. He integrated Property Finder, Bayut, and Dubizzle for automated listing sync, built Bitrix24 CRM lead automation, and implemented Sudonum virtual numbers for lead tracking.",
    action: { label: "Explore PropTech Case Study", href: "/projects#case-uae-proptech" },
  },
  {
    keywords: ["hrm", "payroll", "wps", "attendance", "leaves", "salary", "saabsoft"],
    answer:
      "At Saabsoft, Khuzemah architected a full UAE HRM & Payroll platform covering biometric attendance CSV ingestion, automated overtime and late deductions, multi-tier leave approval pipelines, employee loan reconciliations, and compliant 1-click UAE Central Bank Wages Protection System (WPS) SIF file generation.",
    action: { label: "Inspect HRM Case Study", href: "/projects#case-uae-hrm" },
  },
  {
    keywords: ["ai", "chatbot", "llm", "intelligence", "gpt", "openai"],
    answer:
      "Khuzemah builds operational AI systems that drive revenue. For UAE real estate, he built an AI conversational lead qualifier using Python and LLM APIs that captures budget, preferred property type, and investment readiness before routing clean leads directly into Bitrix24 CRM in under 30 seconds.",
    action: { label: "Explore TalentFilter AI", href: "/projects#case-talentfilter-ai" },
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
      "Khuzemah holds a Bachelor of Computer Science (2016 — 2020) from the National University of Sciences and Technology (NUST), Islamabad.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire"],
    answer:
      "You can reach Khuzemah directly at khuzemasaeed@gmail.com or via phone/WhatsApp at +92 347 5985699. His LinkedIn is linkedin.com/in/khuzemah-saeed.",
    action: { label: "Email Directly", href: "mailto:khuzemasaeed@gmail.com" },
  },
];

// Skills highlighted as primary on the homepage skills matrix.
export const CORE_SKILLS = [
  "Python",
  "Django",
  "FastAPI",
  "PHP 8+",
  "Laravel",
  "RESTful APIs",
  "React.js",
  "Next.js (App Router)",
  "LLM API Integrations",
  "Workflow Automation",
  "MySQL",
  "PostgreSQL",
  "Bitrix24 CRM",
  "Property Finder API",
];
