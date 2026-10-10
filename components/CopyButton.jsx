"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(false);
        setTimeout(() => setCopied(false), 2200);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (successful) {
          setCopied(true);
          setError(false);
          setTimeout(() => setCopied(false), 2200);
        } else {
          throw new Error("Copy command failed");
        }
      }
    } catch (err) {
      console.warn("Clipboard copy error:", err);
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <button
      type="button"
      className={`copy-btn ${copied ? "is-copied" : ""} ${error ? "is-error" : ""} ${className}`}
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : `Copy ${label}`}
      title={copied ? "Copied to clipboard!" : `Copy ${label}`}
    >
      {copied ? (
        <>
          <svg className="copy-icon" viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
          <span className="copy-text">Copied</span>
        </>
      ) : error ? (
        <>
          <span className="copy-text">Press Ctrl+C</span>
        </>
      ) : (
        <>
          <svg className="copy-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" width="13" height="13">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
            <path d="M10.5 5.5V3a1.5 1.5 0 0 0-1.5-1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h2.5" />
          </svg>
          <span className="copy-text">Copy</span>
        </>
      )}
    </button>
  );
}
