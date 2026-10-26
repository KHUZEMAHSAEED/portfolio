"use client";

import { useState } from "react";

export default function CrediPostVisual() {
  const [activeTab, setActiveTab] = useState("pipeline");

  return (
    <div className="wisemarket-visual">
      <div className="wisemarket-visual-head">
        <div className="wisemarket-tag">
          <span className="wisemarket-pulse-dot" />
          <span>Architecture · CrediPost v2.0</span>
        </div>
        <div className="wisemarket-nav" role="tablist" aria-label="CrediPost architecture views">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "pipeline"}
            className={`gallery-tab ${activeTab === "pipeline" ? "active" : ""}`}
            onClick={() => setActiveTab("pipeline")}
          >
            Curation pipeline
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "security"}
            className={`gallery-tab ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            Security layers
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "rewrite"}
            className={`gallery-tab ${activeTab === "rewrite" ? "active" : ""}`}
            onClick={() => setActiveTab("rewrite")}
          >
            v1 → v2 rewrite
          </button>
        </div>
      </div>

      <div className="wisemarket-canvas">
        {activeTab === "pipeline" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">1 · Editor input</span>
              <div className="wm-node-box">
                <span className="wm-flag">Article URL</span>
                <span className="wm-node-sub">Any public web page</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">Video link</span>
                <span className="wm-node-sub">YouTube, Vimeo, Dailymotion…</span>
              </div>
              <div className="wm-node-box">
                <span className="wm-flag">[CREDIPOST] shortcode</span>
                <span className="wm-node-sub">Same tool on a front-end page</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">2 · Fetch, clean &amp; prune</span>
              <div className="wm-core-box">
                <div className="wm-core-title">Credipost_Scraper (DOMDocument + XPath)</div>
                <p className="wm-core-desc">
                  Fetches through wp_safe_remote_get(), strips scripts, nav, headers, footers, sidebars and
                  comments, keeps headings, paragraphs, lists, quotes and images, and rewrites relative links
                  to absolute URLs. Videos become responsive embeds via wp_oembed_get(). Editors then remove any
                  block with one click — with an undo bar.
                </p>
                <div className="wm-core-tags">
                  <span>15s timeout</span>
                  <span>5 redirects max</span>
                  <span>Click-to-prune + undo</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">3 · Publish</span>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Title, status &amp; categories</span>
                <span className="wm-node-sub">Draft, pending review or publish</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Target subsite</span>
                <span className="wm-node-sub">switch_to_blog() on Multisite</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">wp_insert_post()</span>
                <span className="wm-node-sub">Sanitised with wp_kses_post()</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Outbound requests</span>
              <div className="wm-node-box brand-tcs">
                <span className="wm-flag">SSRF protection</span>
                <span className="wm-node-sub">wp_safe_remote_get() rejects loopback &amp; private IPs</span>
              </div>
              <div className="wm-node-box brand-tcs">
                <span className="wm-flag">URL validation</span>
                <span className="wm-node-sub">esc_url_raw() + FILTER_VALIDATE_URL, https by default</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">Every AJAX endpoint</span>
              <div className="wm-core-box">
                <div className="wm-core-title">scrape · embed · save</div>
                <p className="wm-core-desc">
                  Each request must pass check_ajax_referer() (CSRF) and current_user_can(&apos;edit_posts&apos;)
                  before any work happens. Publishing to another subsite also requires
                  current_user_can_for_blog() on that site.
                </p>
                <div className="wm-core-tags">
                  <span>Nonce</span>
                  <span>Capability</span>
                  <span>Per-site permission</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">Stored content &amp; assets</span>
              <div className="wm-node-box brand-mnp">
                <span className="wm-flag">XSS prevention</span>
                <span className="wm-node-sub">wp_kses_post() on scraped and saved HTML</span>
              </div>
              <div className="wm-node-box brand-mnp">
                <span className="wm-flag">Scoped assets</span>
                <span className="wm-node-sub">CSS/JS load only on the plugin&apos;s own screen</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rewrite" && (
          <div className="wm-blueprint-grid">
            <div className="wm-col">
              <span className="wm-col-label">Legacy v1</span>
              <div className="wm-node-box brand-tcs">
                <span className="wm-flag">1,034-line regex scraper</span>
                <span className="wm-node-sub">Fragile when page markup changes</span>
              </div>
              <div className="wm-node-box brand-tcs">
                <span className="wm-flag">Bundled jQuery copies</span>
                <span className="wm-node-sub">Conflicted with WordPress core and other plugins</span>
              </div>
              <div className="wm-node-box brand-tcs">
                <span className="wm-flag">Unverified AJAX actions</span>
                <span className="wm-node-sub">No nonce or capability checks</span>
              </div>
            </div>

            <div className="wm-col wm-col-center">
              <span className="wm-col-label">The rewrite</span>
              <div className="wm-core-box">
                <div className="wm-core-title">2,748 lines removed · 2,226 added</div>
                <p className="wm-core-desc">
                  Restructured onto the WordPress plugin boilerplate — a loader for hooks and shortcodes,
                  separate admin, public and scraper classes, clean activation / uninstall, and a
                  translation template — so each concern can change without touching the others.
                </p>
                <div className="wm-core-tags">
                  <span>Boilerplate structure</span>
                  <span>i18n (.pot)</span>
                  <span>PHP 7.4–8.3</span>
                </div>
              </div>
            </div>

            <div className="wm-col">
              <span className="wm-col-label">v2.0</span>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">441-line DOM/XPath scraper</span>
                <span className="wm-node-sub">Semantic, resilient extraction</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">WordPress core jQuery</span>
                <span className="wm-node-sub">No bundled libraries</span>
              </div>
              <div className="wm-node-box brand-accent">
                <span className="wm-flag">Verified endpoints</span>
                <span className="wm-node-sub">Nonce + capability on all three</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="wisemarket-visual-foot">
        <span>
          <strong>Source:</strong> open on GitHub at KHUZEMAHSAEED/crediblock — line counts taken from the v2.0
          refactor commit.
        </span>
      </div>
    </div>
  );
}
