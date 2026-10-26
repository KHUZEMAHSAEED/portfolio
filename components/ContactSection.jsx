"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

export default function ContactSection({ onOpenAssistant }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, fallback, error
  const [responseMsg, setResponseMsg] = useState("");
  const [draftData, setDraftData] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else if (data.configured === false) {
        setStatus("fallback");
        setResponseMsg(data.message);
        setDraftData({
          subject: data.draftSubject || formData.subject || "Project Discussion",
          body: data.draftBody || formData.message,
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "An error occurred while processing your message.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("fallback");
      setResponseMsg("Network dispatch unavailable. You can launch your mail client directly with this draft:");
      setDraftData({
        subject: formData.subject || "Project Discussion with Khuzemah",
        body: `Hi Khuzemah,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`,
      });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-eyebrow">Direct Engagement</span>
            <h2>Discuss a Project</h2>
          </div>
          <span className="section-index">07</span>
        </div>

        <div className="contact-editorial-grid">
          {/* Left Column: Direct channels and availability */}
          <div className="contact-channels panel">
            <h3 className="contact-col-title">Start a Conversation</h3>
            <p className="contact-col-desc">
              Whether you have an upcoming project on <strong>Upwork</strong>, <strong>Freelancer.pk</strong>,
              or need a dependable senior engineer for a contract or full-time remote role, I respond within 24 hours.
            </p>

            <div className="direct-channel-list">
              {/* WhatsApp direct */}
              <a
                href="https://wa.me/923475985699"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-icon whatsapp">💬</div>
                <div className="channel-details">
                  <span className="channel-title">WhatsApp Direct</span>
                  <span className="channel-sub">+92 347 5985699 · Instant messaging</span>
                </div>
                <span className="channel-action">Message ↗</span>
              </a>

              {/* Email channel with copy */}
              <div className="channel-card">
                <div className="channel-icon email">✉️</div>
                <div className="channel-details">
                  <span className="channel-title">Direct Email</span>
                  <a href="mailto:khuzemasaeed@gmail.com" className="channel-sub">
                    khuzemasaeed@gmail.com
                  </a>
                </div>
                <CopyButton text="khuzemasaeed@gmail.com" label="email" />
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/khuzemah-saeed/"
                target="_blank"
                rel="noreferrer"
                className="channel-card"
              >
                <div className="channel-icon linkedin">💼</div>
                <div className="channel-details">
                  <span className="channel-title">LinkedIn Profile</span>
                  <span className="channel-sub">linkedin.com/in/khuzemah-saeed</span>
                </div>
                <span className="channel-action">Connect ↗</span>
              </a>

              {/* Candidate Knowledge Base Assistant */}
              {onOpenAssistant && (
                <button
                  type="button"
                  onClick={onOpenAssistant}
                  className="channel-card assistant-trigger"
                >
                  <div className="channel-icon ai">⚡</div>
                  <div className="channel-details">
                    <span className="channel-title">Portfolio Q&amp;A Assistant</span>
                    <span className="channel-sub">Query verified experience &amp; tech stack</span>
                  </div>
                  <span className="channel-action">Open →</span>
                </button>
              )}
            </div>

            <div className="contact-location-pill">
              <span>📍 Lahore, Pakistan (GMT+5)</span>
              <span>·</span>
              <span>4+ Hours Daily Overlap with US / EU / Gulf</span>
            </div>
          </div>

          {/* Right Column: Embedded, honest contact form */}
          <div className="contact-form-panel panel">
            <h3 className="contact-col-title">Send a Direct Inquiry</h3>
            <p className="contact-col-desc">
              Briefly outline your technical requirements, existing stack, and expected timeline.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Anti-spam honeypot */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="sec-field">Do not fill this</label>
                <input
                  type="text"
                  id="sec-field"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Project Topic / Scope</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="e.g. API Integration, Real Estate Sync, or Full Stack Web App"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message / Details *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your current systems, integration needs, or role requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Processing..." : "Submit Inquiry"}
              </button>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="form-status success" role="alert">
                  ✓ {responseMsg}
                </div>
              )}

              {status === "error" && (
                <div className="form-status error" role="alert">
                  ⚠ {responseMsg}
                </div>
              )}

              {status === "fallback" && draftData && (
                <div className="form-status fallback" role="alert">
                  <p className="fallback-note">{responseMsg}</p>
                  <a
                    href={`mailto:khuzemasaeed@gmail.com?subject=${encodeURIComponent(
                      draftData.subject
                    )}&body=${encodeURIComponent(draftData.body)}`}
                    className="btn btn-secondary fallback-mail-btn"
                  >
                    ✉️ Launch Email Client with Pre-filled Draft
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
