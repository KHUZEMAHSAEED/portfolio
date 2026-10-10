"use client";

import { useState, useEffect, useRef } from "react";
import CopyButton from "./CopyButton";

export default function ContactModal({ isOpen, onClose }) {
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
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

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
          subject: data.draftSubject || formData.subject || "Senior Engineering Opportunity",
          body: data.draftBody || formData.message,
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "An error occurred while dispatching your message.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("fallback");
      setResponseMsg("Network dispatch unavailable. You can launch your mail client with this draft directly:");
      setDraftData({
        subject: formData.subject || "Senior Engineering Opportunity",
        body: `Hi Khuzemah,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`,
      });
    }
  };

  if (!isOpen) return null;

  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      ref={modalRef}
    >
      <div className="contact-modal panel" onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-head">
          <div>
            <div className="status-badge" style={{ marginBottom: "8px" }}>
              <span className="status-dot-pulse" />
              <span>Direct Channel</span>
            </div>
            <h3 id="contact-modal-title" className="contact-modal-title">
              Get in Touch with Khuzemah
            </h3>
            <p className="contact-modal-sub">
              Discuss senior engineering roles, architecture consulting, or remote opportunities.
            </p>
          </div>
          <button
            type="button"
            className="ai-close-btn"
            onClick={onClose}
            aria-label="Close Contact Dialog"
          >
            ✕
          </button>
        </div>

        {/* Quick Contact Strip */}
        <div className="contact-quick-strip">
          <div className="quick-contact-chip">
            <span>✉️ khuzemasaeed@gmail.com</span>
            <CopyButton text="khuzemasaeed@gmail.com" label="email" />
          </div>
          <div className="quick-contact-chip">
            <span>📞 +92 347 5985699</span>
            <CopyButton text="+92 347 5985699" label="phone" />
          </div>
        </div>

        {status === "success" ? (
          <div className="contact-success-box">
            <span className="success-icon">✅</span>
            <h4>Message Dispatched!</h4>
            <p>{responseMsg}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setStatus("idle");
                onClose();
              }}
              style={{ marginTop: "16px" }}
            >
              Close Window
            </button>
          </div>
        ) : status === "fallback" ? (
          <div className="contact-fallback-box">
            <span className="info-icon">ℹ️</span>
            <h4>Direct Email Draft Ready</h4>
            <p style={{ fontSize: "13px", color: "var(--muted)" }}>{responseMsg}</p>
            <div className="draft-actions">
              <a
                className="btn btn-primary"
                href={`mailto:khuzemasaeed@gmail.com?subject=${encodeURIComponent(
                  draftData?.subject || ""
                )}&body=${encodeURIComponent(draftData?.body || "")}`}
                target="_blank"
                rel="noreferrer"
              >
                🚀 Open in Mail Client
              </a>
              <CopyButton
                text={draftData?.body || formData.message}
                label="Message Draft"
                className="btn btn-ghost"
              />
            </div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setStatus("idle")}
              style={{ marginTop: "12px", width: "100%" }}
            >
              Back to Form
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="e.g. Senior Full Stack / Lead Systems Role"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                placeholder="Briefly describe the role, team, or platform architecture..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {status === "error" && (
              <div className="form-error-alert">{responseMsg}</div>
            )}

            <div className="form-footer-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Dispatching..." : "Send Message"}
              </button>

              {calLink && (
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  📅 Book 15-min Call
                </a>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
