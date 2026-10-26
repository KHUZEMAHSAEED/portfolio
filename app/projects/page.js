"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FEATURED_PROJECTS, PROJECT_CATEGORIES } from "@/data/portfolioData";
import SiteHeader from "@/components/SiteHeader";
import CaseStudies from "@/components/CaseStudies";
import SiteFooter from "@/components/SiteFooter";
import RecruiterDrawer from "@/components/RecruiterDrawer";
import ContactModal from "@/components/ContactModal";
import LightboxModal from "@/components/LightboxModal";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [galleryTabs, setGalleryTabs] = useState({
    "uae-proptech": 0,
    "reelly-luxe": 0,
    "talentfilter-ai": 0,
    "alkithab-academy": 0,
    "slowrise-pizza": 0,
    "hash-move": 0,
    zenawalk: 0,
    "uae-hrm": 0,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const handleGalleryTabChange = (projectId, tabIndex) => {
    setGalleryTabs((prev) => ({
      ...prev,
      [projectId]: tabIndex,
    }));
  };

  const handleOpenLightbox = (items, index) => {
    setLightboxState({
      isOpen: true,
      items,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handleNavigateLightbox = (nextIndex) => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: nextIndex,
    }));
  };

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FEATURED_PROJECTS.filter((proj) => {
      const matchesCategory =
        selectedCategory === "all" || proj.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const searchableString = [
        proj.title,
        proj.domain,
        proj.role,
        proj.stack,
        proj.summary,
        proj.problem,
        proj.solution,
      ]
        .join(" ")
        .toLowerCase();

      return searchableString.includes(query);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SiteHeader onOpenContact={() => setContactOpen(true)} />

      <main className="gridpaper projects-page-main">
        {/* ARCHIVE HERO HEADER */}
        <section className="archive-hero-section">
          <div className="wrap">
            <nav className="archive-breadcrumbs" aria-label="Breadcrumbs">
              <Link href="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Projects &amp; Architecture Archive</span>
            </nav>

            <div className="archive-hero-header">
              <div className="archive-hero-title-group">
                <span className="section-eyebrow">Production Architectures &amp; Case Studies</span>
                <h1 className="archive-hero-title">Engineering Projects Archive</h1>
              </div>
              <span className="archive-count-badge">
                {FEATURED_PROJECTS.length} Systems Cataloged
              </span>
            </div>

            <p className="archive-hero-lead">
              A comprehensive technical catalog of production systems engineered for UAE PropTech real estate
              synchronization, enterprise ATS resume screening &amp; AI candidate governance, peer-to-peer luggage capacity &amp; parcel delivery, European digital tourism,
              and enterprise fintech compliance. Each deployment includes deep problem analysis, system architecture
              solutions, and verified performance metrics.
            </p>

            {/* FILTER & SEARCH TOOLBAR */}
            <div className="archive-toolbar panel">
              <div className="archive-filter-pills" role="tablist" aria-label="Project Categories">
                {PROJECT_CATEGORIES.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? FEATURED_PROJECTS.length
                      : FEATURED_PROJECTS.filter((p) => p.category === cat.id).length;
                  const isActive = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`filter-pill ${isActive ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      <span className="filter-pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="archive-search-wrap">
                <div className="search-input-box">
                  <span className="search-icon" aria-hidden="true">
                    🔍
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stack (e.g. Laravel, Python, Bitrix24, WPS)..."
                    className="archive-search-input"
                    aria-label="Filter projects by keyword"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="search-clear-btn"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* ACTIVE FILTERS SUMMARY */}
            <div className="archive-results-bar">
              <span className="results-count">
                Showing <strong>{filteredProjects.length}</strong> of {FEATURED_PROJECTS.length} engineering case studies
              </span>
              {(selectedCategory !== "all" || searchQuery) && (
                <button
                  type="button"
                  className="reset-filters-btn"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Reset filters ↺
                </button>
              )}
            </div>
          </div>
        </section>

        {/* DETAILED CASE STUDIES */}
        {filteredProjects.length > 0 ? (
          <CaseStudies
            projects={filteredProjects}
            galleryTabs={galleryTabs}
            onTabChange={handleGalleryTabChange}
            onOpenLightbox={handleOpenLightbox}
            showHeader={false}
          />
        ) : (
          <section className="section empty-results-section">
            <div className="wrap">
              <div className="empty-panel panel">
                <span className="empty-icon">🔎</span>
                <h3>No engineering projects matched your query</h3>
                <p>
                  No case studies matched the criteria &ldquo;{searchQuery}&rdquo;. Try clearing your search
                  filter or exploring other architectural domains.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  View All Projects
                </button>
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM ARCHITECTURAL INQUIRY BANNER */}
        <section className="section archive-consult-section">
          <div className="wrap">
            <div className="archive-consult-panel panel">
              <div className="consult-content">
                <span className="section-eyebrow">Technical Leadership &amp; Engineering</span>
                <h2>Need High-Throughput System Architecture or Integration Pipelines?</h2>
                <p>
                  Whether it&apos;s architecting multi-region inventory synchronization, complex CRM automation,
                  or high-concurrency API integrations, let&apos;s build resilient systems that perform under load.
                </p>
                <div className="consult-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setContactOpen(true)}
                  >
                    Discuss a Project / Architecture Inquiry
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setDrawerOpen(true)}
                  >
                    Ask AI Recruiter Assistant ✨
                  </button>
                  <Link href="/" className="btn-link">
                    <span>Back to Overview</span>
                    <span aria-hidden="true">↑</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SITE FOOTER */}
      <SiteFooter onOpenContact={() => setContactOpen(true)} />

      {/* FLOATING ACTION BUTTON FOR RECRUITER AI ASSISTANT */}
      <button
        type="button"
        className="ai-fab"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open AI Recruiter Assistant"
      >
        <span className="ai-fab-indicator" />
        <span className="ai-fab-spark">✨</span>
        <span className="ai-fab-label">Ask Khuzemah AI</span>
      </button>

      {/* INTERACTIVE RECRUITER AI ASSISTANT DRAWER */}
      <RecruiterDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* DIRECT INQUIRY & CONTACT MODAL */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* IN-APP SCREENSHOT LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        items={lightboxState.items}
        currentIndex={lightboxState.currentIndex}
        onNavigate={handleNavigateLightbox}
      />
    </>
  );
}
