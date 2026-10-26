"use client";

import IntegrationHub from "./IntegrationHub";
import IntegrationsEcosystem from "./IntegrationsEcosystem";

export default function IntegrationHubSection({ activeNode, onSelectNode }) {
  return (
    <section id="integrations" className="section integrations-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-eyebrow">Enterprise Topology</span>
            <h2>Connected Systems &amp; Ecosystem</h2>
          </div>
          <span className="section-index">05</span>
        </div>
        <p className="section-lead">
          Interactive mapping of third-party platforms, real estate portals, CRMs, payment gateways,
          and AI endpoints integrated across production client projects.
        </p>

        <div className="integration-hub-layout panel">
          <div className="hub-layout-inner">
            <div className="hub-diagram-col">
              <IntegrationHub
                activeNode={activeNode}
                onSelectNode={onSelectNode}
              />
            </div>
            <div className="hub-info-col">
              <div className="hub-info-lead">
                <h3>Third-Party Platform Interoperability</h3>
                <p>
                  Modern web applications rarely exist in isolation. My engineering focus is ensuring that
                  heterogeneous platforms — whether an XML property portal feed, a legacy courier SOAP API,
                  or a webhook-driven Bitrix24 deal stage — communicate reliably with zero data loss.
                </p>
              </div>

              <div className="hub-feature-list">
                <div className="hub-feature-item">
                  <span className="feature-dot" />
                  <div>
                    <strong>Idempotent Event Workers:</strong> Prevents duplicate record creation when third-party APIs retry webhooks.
                  </div>
                </div>
                <div className="hub-feature-item">
                  <span className="feature-dot" />
                  <div>
                    <strong>Schema Validation &amp; Dead-Letter Queues:</strong> Isolates malformed payloads without halting ingestion pipelines.
                  </div>
                </div>
                <div className="hub-feature-item">
                  <span className="feature-dot" />
                  <div>
                    <strong>Sub-3-Second Routing:</strong> Connects customer intent directly to active sales reps in CRM deal pipelines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Ecosystem Grid */}
        <div className="ecosystem-container">
          <IntegrationsEcosystem />
        </div>
      </div>
    </section>
  );
}
