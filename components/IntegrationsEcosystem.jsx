export default function IntegrationsEcosystem() {
  const platforms = [
    {
      name: "Property Finder",
      category: "UAE PropTech",
      color: "#EF4136",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10.5" fill="#EF4136" />
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
          <circle cx="11.2" cy="10.6" r="4.8" stroke="#ffffff" strokeWidth="1.7" fill="none" />
          <path d="M14.6 14l3.6 3.6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
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
          <path d="M4.5 9.5c1.2-.8 2.6-1 4-.8l3.2 1.5c.8.4 1.7.4 2.5 0l3-1.5c.8-.4 1.7-.2 2.3.4l1 1-1.8 1.2c-.4-.3-.9-.4-1.4-.2l-2.8 1.2c-.8.4-1.7.3-2.5-.2L9.5 10.5c-.8-.5-1.8-.6-2.7-.3L4 11.2l.5-1.7z" fill="#111827" />
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
          <path
            d="M7.5 17.5l2-12h4.5c2.4 0 4 1.2 3.6 3.5-.4 2.2-2.2 3.6-4.5 3.6h-1.6l-1 5H7.5z"
            fill="#003087"
          />
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
          <path
            d="M7 6.5c0-.8.7-1.5 1.5-1.5h1.2c.6 0 1.1.4 1.3 1l.7 2c.2.6 0 1.2-.4 1.6l-1 1c.9 1.8 2.3 3.2 4.1 4.1l1-1c.4-.4 1-.6 1.6-.4l2 .7c.6.2 1 .7 1 1.3v1.2c0 .8-.7 1.5-1.5 1.5-6.6 0-12-5.4-12-12z"
            fill="#ffffff"
          />
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
          <path
            d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.784a4.47 4.47 0 0 1 2.34-1.974V12.4a.765.765 0 0 0 .387.674l5.843 3.369-2.02 1.168a.076.076 0 0 1-.071 0l-4.839-2.793A4.502 4.502 0 0 1 2.34 8.784zm15.823 4.148l-5.843-3.37 2.02-1.167a.076.076 0 0 1 .071 0l4.839 2.793a4.504 4.504 0 0 1-.684 8.083v-5.666a.78.78 0 0 0-.403-.673zm2.241-4.633a4.476 4.476 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.4 11.838V9.506a.08.08 0 0 1 .033-.062l4.839-2.793a4.5 4.5 0 0 1 6.14 1.646zm-8.108-3.023a4.476 4.476 0 0 1 2.876 1.04l-.141.081-4.779 2.758a.795.795 0 0 0-.392.681v6.737l-2.02-1.168a.071.071 0 0 1-.038-.052V9.77a4.504 4.504 0 0 1 4.494-4.494zm-1.077 8.283l2.873-1.658 2.873 1.658v3.316l-2.873 1.658-2.873-1.658z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Platforms &amp; APIs Integrated</h2>
          <span className="section-index">03</span>
        </div>
        <div className="integrations-grid">
          {platforms.map((item) => (
            <div
              className="integration-card"
              key={item.name}
              style={{
                "--brand-color": item.color,
              }}
            >
              <div className="integration-icon-wrap">{item.icon}</div>
              <div className="integration-info">
                <span className="integration-name">{item.name}</span>
                <span className="integration-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="integrations-arch-panel">
          <div className="integrations-arch-header">
            <span className="arch-badge">
              Integration Architecture &amp; Data Pipeline Specifications
            </span>
            <span className="arch-sub">
              Production standards engineered across UAE, Pakistan, Australia &amp; New Zealand
            </span>
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
  );
}
