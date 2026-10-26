"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { IconClose, IconChevronLeft, IconChevronRight, IconZoom, IconArrowUpRight } from "./Icons";

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

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [items.length, currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    onNavigate((currentIndex + 1) % items.length);
  }, [items.length, currentIndex, onNavigate]);

  // Lock body scroll and restore focus on close
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      previousActiveElement.current?.focus?.();
    };
  }, [isOpen]);

  // Keyboard navigation (re-bound when the index changes so arrows never act on a stale slide)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

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
              aria-label={scale > 1 ? "Zoom out" : "Zoom in"}
            >
              <IconZoom size={16} />
              <span>{scale > 1 ? `${scale}×` : "Zoom"}</span>
            </button>
            <a
              href={activeItem.src}
              target="_blank"
              rel="noreferrer"
              className="lightbox-action-btn"
              aria-label="Open original image in a new tab"
            >
              <IconArrowUpRight size={16} />
              <span>Original</span>
            </a>
            <button
              type="button"
              className="lightbox-action-btn"
              onClick={onClose}
              aria-label="Close (Esc)"
            >
              <IconClose size={18} />
            </button>
          </div>
        </div>

        <div className="lightbox-viewport" onClick={toggleZoom}>
          {!isLoaded && <div className="lightbox-loader">Loading…</div>}
          <div
            className="lightbox-zoom-container"
            style={{
              transform: `scale(${scale})`,
              cursor: scale > 1 ? "zoom-out" : "zoom-in",
            }}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.title || "Project screenshot"}
              width={1600}
              height={1000}
              className={`lightbox-img ${isLoaded ? "is-loaded" : ""}`}
              onLoad={() => setIsLoaded(true)}
              priority
              quality={90}
            />
          </div>
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous screenshot"
            >
              <IconChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="lightbox-nav-btn lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next screenshot"
            >
              <IconChevronRight size={22} />
            </button>
          </>
        )}

        {activeItem.desc && (
          <div className="lightbox-caption">
            <p>{activeItem.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
