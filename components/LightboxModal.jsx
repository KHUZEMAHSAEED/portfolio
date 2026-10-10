"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function LightboxModal({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onNavigate,
}) {
  const [scale, setScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  const activeItem = items[currentIndex];

  // Reset zoom on item change
  useEffect(() => {
    setScale(1);
    setIsLoaded(false);
  }, [currentIndex]);

  // Lock body scroll and handle focus trap / keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus?.();
      }
    };
  }, [isOpen, onClose]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [items.length, currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [items.length, currentIndex, onNavigate]);

  const toggleZoom = () => {
    setScale((prev) => (prev === 1 ? 1.6 : prev === 1.6 ? 2.2 : 1));
  };

  if (!isOpen || !activeItem) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title || "Full resolution project view"}
      ref={modalRef}
      tabIndex={-1}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <div className="lightbox-topbar">
          <div className="lightbox-meta">
            <span className="lightbox-counter">
              {currentIndex + 1} / {items.length}
            </span>
            <span className="lightbox-title">{activeItem.title}</span>
          </div>

          <div className="lightbox-actions">
            <button
              type="button"
              className="lightbox-action-btn"
              onClick={toggleZoom}
              title={`Zoom (current: ${scale}x)`}
              aria-label="Toggle Zoom"
            >
              {scale > 1 ? "🔍 Zoom Out" : "🔎 Zoom In"}
            </button>
            <a
              href={activeItem.src}
              target="_blank"
              rel="noreferrer"
              className="lightbox-action-btn"
              title="Open raw image in new tab"
            >
              Raw ↗
            </a>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close Lightbox (Esc)"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="lightbox-viewport" onClick={toggleZoom}>
          {!isLoaded && <div className="lightbox-loader">Loading image...</div>}
          <div
            className="lightbox-zoom-container"
            style={{
              transform: `scale(${scale})`,
              cursor: scale > 1 ? "zoom-out" : "zoom-in",
            }}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.title || "Project Screenshot"}
              width={1600}
              height={1000}
              className={`lightbox-img ${isLoaded ? "is-loaded" : ""}`}
              onLoad={() => setIsLoaded(true)}
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Screenshot (Arrow Left)"
              title="Previous Screenshot (←)"
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox-nav-btn lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Screenshot (Arrow Right)"
              title="Next Screenshot (→)"
            >
              ›
            </button>
          </>
        )}

        {/* Caption Footbar */}
        {activeItem.desc && (
          <div className="lightbox-caption">
            <p>{activeItem.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
