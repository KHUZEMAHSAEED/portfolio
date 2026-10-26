"use client";

import { useEffect, useRef, useState } from "react";
import { RECRUITER_KNOWLEDGE } from "@/data/portfolioData";
import { IconClose } from "./Icons";

const QUICK_QUESTIONS = [
  ["UAE real estate experience", "Tell me about your UAE Real Estate experience"],
  ["Core stack", "What is your core tech stack and architecture background?"],
  ["AI & LLM work", "How do you build AI chatbots and integrations?"],
  ["HRM & WPS payroll", "Tell me about your UAE HRM and WPS payroll platform"],
  ["Availability & time zone", "What are your notice period and remote timezone availability?"],
];

export default function RecruiterDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hi! Pick a topic below or type a keyword (e.g. Laravel, Bitrix24, payroll, availability) and I'll pull up the relevant details from Khuzemah's work.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const chatBodyRef = useRef(null);

  // Auto-scroll chat body on new messages
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendPrompt = (promptText) => {
    const userMsg = { sender: "user", text: promptText };
    const query = promptText.toLowerCase();

    // Whole-word matching, so short keywords like "ai" don't fire inside "availability".
    const matched = RECRUITER_KNOWLEDGE.find((item) =>
      item.keywords.some((kw) =>
        new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(query)
      )
    );

    const reply = matched
      ? matched.answer
      : `Khuzemah is a Senior Full Stack & AI Systems Engineer (6+ years) experienced in Laravel, Python, Next.js, and complex third-party platforms (Property Finder, Bitrix24, Cin7). For specific inquiries, email him at khuzemasaeed@gmail.com or call +92 347 5985699.`;

    const action = matched?.action || null;

    setMessages((prev) => [
      ...prev,
      userMsg,
      { sender: "assistant", text: reply, action },
    ]);
  };

  const handleSubmitChat = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal.trim();
    setInputVal("");
    handleSendPrompt(text);
  };

  if (!isOpen) return null;

  return (
    <div
      className="ai-drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div className="ai-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="ai-drawer-header">
          <div>
            <div id="drawer-title" className="ai-drawer-title">
              Recruiter Q&amp;A
            </div>
            <span className="ai-drawer-subtitle">
              Answers drawn from Khuzemah&apos;s CV and case studies
            </span>
          </div>
          <button
            type="button"
            className="ai-close-btn"
            onClick={onClose}
            aria-label="Close Assistant"
          >
            <IconClose size={18} />
          </button>
        </div>

        <div className="ai-chat-body" ref={chatBodyRef}>
          {messages.map((m, idx) => (
            <div key={idx} className={`ai-msg ai-msg-${m.sender}`}>
              <span className="ai-msg-sender">
                {m.sender === "user" ? "You" : "Portfolio"}
              </span>
              <div className="ai-bubble">
                <p>{m.text}</p>
                {m.action && (
                  <div className="ai-bubble-action">
                    <a
                      href={m.action.href}
                      className="ai-action-btn"
                      onClick={() => {
                        if (m.action.href.startsWith("#")) {
                          onClose();
                        }
                      }}
                    >
                      {m.action.label} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="ai-chips-wrap">
          <span className="ai-chips-label">Common questions</span>
          {QUICK_QUESTIONS.map(([label, prompt]) => (
            <button key={label} type="button" className="ai-chip" onClick={() => handleSendPrompt(prompt)}>
              {label}
            </button>
          ))}
        </div>

        <form className="ai-input-wrap" onSubmit={handleSubmitChat}>
          <input
            type="text"
            className="ai-input"
            placeholder="Ask about a skill, project or availability…"
            aria-label="Your question"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="ai-send-btn">
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}
