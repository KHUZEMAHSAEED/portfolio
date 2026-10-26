"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "./Icons";

export default function CopyButton({ text, label = "Copy", idleText = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
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
        if (!successful) throw new Error("Copy command failed");
      }
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2200);
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
      title={copied ? "Copied to clipboard" : `Copy ${label}`}
    >
      {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
      <span className="copy-text" aria-live="polite">
        {copied ? "Copied" : error ? "Press Ctrl+C" : idleText}
      </span>
    </button>
  );
}
