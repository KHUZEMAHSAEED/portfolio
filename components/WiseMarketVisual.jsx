"use client";

import { useState } from "react";

export default function WiseMarketVisual() {
  const [activeTab, setActiveTab] = useState("inventory");

  return (
    <div className="wisemarket-visual panel">
      {/* Visual Header */}
      <div className="wisemarket-visual-head">
        <div className="wisemarket-tag">
          <span className="wisemarket-pulse-dot" />
          <span>Architecture Specification · Multi-Region Pipeline</span>
        </div>
        <div className="wisemarket-nav" role="tablist" aria-label="Architecture Pipelines">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "inventory"}
            className={`gallery-tab ${activeTab === "inventory" ? "active" : ""}`}
            onClick={() => setActiveTab("inventory")}
          >
            📦 4-Country Inventory Sync
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "dispatch"}
            className={`gallery-tab ${activeTab === "dispatch" ? "active" : ""}`}
            onClick={() => setActiveTab("dispatch")}
          >
            🚚 Automated Courier Dispatch
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "security"}
            className={`gallery-tab ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            🛡️ SMS OTP &amp; Concurrency
          </button>
        </div>
      </div>

      {/* Interactive Blueprint Viewport */}
      <div className="wisemarket-canvas">
        {activeTab === "inventory" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Regional Warehouses (4 Hubs)</span>
              <div className="wm-node-box">
                <span className="wm-flag">🇦🇺 Australia</span>
                <span className="wm-node-sub">Warehouse Hub AU-01</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">🇳🇿 New Zealand</span>
                <span className="wm-node-sub">Warehouse Hub NZ-01</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">🇦🇪 UAE</span>
                <span className="wm-node-sub">Dubai Logistics Hub</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">🇵🇰 Pakistan</span>
                <span className="wm-node-sub">Lahore Central Hub</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">Central Orchestration Engine</span>
              <div className="wm-core-box">
                <div className="wm-core-title">Laravel Event Bus &amp; Redis Queues</div>
                <p className="wm-core-desc">
                  Bi-directional SKU stock reconciliation worker handling 50,000+ catalog items with idempotent locking to prevent overselling.
                </p>
                <div className="wm-core-tags">
                  <span>Idempotent Locking</span>
                  <span>Dead-Letter Retries</span>
                  <span>Rate Limiter</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">Marketplace &amp; ERP Endpoints</span>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Cin7 ERP</span>
                <span className="wm-node-sub">Multi-warehouse stock sync</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">ChannelAdvisor</span>
                <span className="wm-node-sub">Catalog syndication feeds</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Storefront Next.js</span>
                <span className="wm-node-sub">Sub-second stock availability</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "dispatch" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Order Intake</span>
              <div className="wm-node-box">
                <span className="wm-flag">Verified Checkout</span>
                <span className="wm-node-sub">Validated destination &amp; COD/Card</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">Stock Allocated</span>
                <span className="wm-node-sub">Nearest regional hub selected</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">Unified Logistics Gateway</span>
              <div className="wm-core-box">
                <div className="wm-core-title">Multi-Carrier Dispatch Worker</div>
                <p className="wm-core-desc">
                  Automated consignment creation, PDF airway bill generation, and real-time webhook listeners reducing manual dispatch time by 80%.
                </p>
                <div className="wm-core-tags">
                  <span>Automated Airway Bills</span>
                  <span>Status Webhooks</span>
                  <span>Multi-Carrier Routing</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">Logistics Providers</span>
              <div className="wm-node-box brand-tcs">
                <span className="wm-flag">🔴 TCS Express API</span>
                <span className="wm-node-sub">Consignment booking &amp; tracking</span>
              </div>
              <div className="wm-node-box brand-lcs">
                <span className="wm-flag">🟡 Leopards Courier</span>
                <span className="wm-node-sub">COD disbursement webhooks</span>
              </div>
              <div className="wm-node-box brand-mnp">
                <span className="wm-flag">🔵 M&amp;P Logistics</span>
                <span className="wm-node-sub">Bulk consignment manifests</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Customer Initiation</span>
              <div className="wm-node-box">
                <span className="wm-flag">Phone Verification</span>
                <span className="wm-node-sub">Mobile number formatting &amp; country code</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">Order COD Confirmation</span>
                <span className="wm-node-sub">Cash-on-delivery risk score</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">Fraud Prevention &amp; Throttling</span>
              <div className="wm-core-box">
                <div className="wm-core-title">Resilient SMS Gateway Service</div>
                <p className="wm-core-desc">
                  Rate-limited OTP dispatch protecting telecom billing from abuse with fallback gateway failover and Redis token expiration.
                </p>
                <div className="wm-core-tags">
                  <span>IP/Device Throttling</span>
                  <span>Multi-Gateway Failover</span>
                  <span>10,000+ Monthly OTPs</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">Verification Gate</span>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Carrier Gateways</span>
                <span className="wm-node-sub">Direct telecom carrier bindings</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">OTP Abuse Protection</span>
                <span className="wm-node-sub">Anti-bot cooldown timers</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Architecture Footer Note */}
      <div className="wisemarket-visual-foot">
        <span className="icon">📐</span>
        <span>
          <strong>Architecture Blueprint:</strong> Production data flow engineered by Khuzemah Saeed at WiseMarket (Oz Techwork), orchestrating cross-border inventory and automated courier fulfillment.
        </span>
      </div>
    </div>
  );
}
