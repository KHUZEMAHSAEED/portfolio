"use client";

import { useEffect, useRef, useState } from "react";
import { RECRUITER_KNOWLEDGE } from "@/data/portfolioData";

export default function RecruiterDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hello! I am Khuzemah's portfolio assistant. Ask me anything about his technical stack, UAE PropTech experience, AI chatbots, or remote availability!",
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

    let matched = RECRUITER_KNOWLEDGE.find((item) =>
      item.keywords.some((kw) => query.includes(kw))
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
              <span>✨</span>
              <span>Khuzemah AI Assistant</span>
            </div>
            <span className="ai-drawer-subtitle">
              Instant recruiter answers grounded in verified production experience
            </span>
          </div>
          <button
            type="button"
            className="ai-close-btn"
            onClick={onClose}
            aria-label="Close Assistant"
          >
            ✕
          </button>
        </div>

        <div className="ai-chat-body" ref={chatBodyRef}>
          {messages.map((m, idx) => (
            <div key={idx} className={`ai-msg ai-msg-${m.sender}`}>
              <span className="ai-msg-sender">
                {m.sender === "user" ? "You" : "Khuzemah AI"}
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
                      {m.action.label} ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="ai-chips-wrap">
          <span className="ai-chips-label">Quick Recruiter Questions:</span>
          <button
            type="button"
            className="ai-chip"
            onClick={() => handleSendPrompt("Tell me about your UAE Real Estate experience")}
          >
            🏢 UAE Real Estate &amp; PropTech
          </button>
          <button
            type="button"
            className="ai-chip"
            onClick={() => handleSendPrompt("What is your core tech stack and architecture background?")}
          >
            🛠️ Core Stack &amp; Architecture
          </button>
          <button
            type="button"
            className="ai-chip"
            onClick={() => handleSendPrompt("How do you build AI chatbots and integrations?")}
          >
            🤖 AI Chatbots &amp; LLMs
          </button>
          <button
            type="button"
            className="ai-chip"
            onClick={() => handleSendPrompt("Tell me about your UAE HRM and WPS payroll platform")}
          >
            💼 UAE HRM &amp; WPS Payroll
          </button>
          <button
            type="button"
            className="ai-chip"
            onClick={() => handleSendPrompt("What are your notice period and remote timezone availability?")}
          >
            🌍 Timezones &amp; Availability
          </button>
        </div>

        <form className="ai-input-wrap" onSubmit={handleSubmitChat}>
          <input
            type="text"
            className="ai-input"
            placeholder="Ask about stack, projects, notice period..."
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
