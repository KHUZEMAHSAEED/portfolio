"use client";

import { useState, useEffect, useRef } from "react";
import CopyButton from "./CopyButton";
import { PROFILE } from "@/data/portfolioData";
import { IconClose, IconCheck, IconMail, IconWhatsApp } from "./Icons";

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
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-head">
          <div>
            <h3 id="contact-modal-title" className="contact-modal-title">
              Get in touch
            </h3>
            <p className="contact-modal-sub">
              Roles, interviews or a quick intro call — send a note and I&apos;ll get back to you.
            </p>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close contact dialog"
          >
            <IconClose size={18} />
          </button>
        </div>

        <div className="contact-quick-strip">
          <div className="quick-contact-chip">
            <IconMail size={16} />
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <CopyButton text={PROFILE.email} label="email" />
          </div>
          <div className="quick-contact-chip">
            <IconWhatsApp size={16} />
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">{PROFILE.phone}</a>
            <CopyButton text={PROFILE.phone} label="phone" />
          </div>
        </div>

        {status === "success" ? (
          <div className="contact-success-box">
            <span className="success-icon"><IconCheck size={22} /></span>
            <h4>Message sent</h4>
            <p>{responseMsg}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setStatus("idle");
                onClose();
              }}
            >
              Close
            </button>
          </div>
        ) : status === "fallback" ? (
          <div className="contact-fallback-box">
            <h4>Your email draft is ready</h4>
            <p>{responseMsg}</p>
            <div className="draft-actions">
              <a
                className="btn btn-primary"
                href={`mailto:khuzemasaeed@gmail.com?subject=${encodeURIComponent(
                  draftData?.subject || ""
                )}&body=${encodeURIComponent(draftData?.body || "")}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in mail app
              </a>
              <CopyButton
                text={draftData?.body || formData.message}
                label="message draft"
                idleText="Copy draft"
                className="btn btn-secondary"
              />
            </div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setStatus("idle")}
            >
              Back to form
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
              className="visually-hidden"
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Alex Vance"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Work email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Role / subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Senior Full Stack Engineer — Company"
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
                placeholder="A line or two about the role, team and next steps…"
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
                {status === "loading" ? "Sending…" : "Send message"}
              </button>

              {calLink && (
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Book a 15-min call
                </a>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
