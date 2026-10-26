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
import MobileActionBar from "@/components/MobileActionBar";
import { IconSearch, IconClose, IconArrowRight } from "@/components/Icons";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [galleryTabs, setGalleryTabs] = useState({});
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

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader onOpenContact={() => setContactOpen(true)} />

      <main id="main">
        <section className="archive-hero">
          <div className="wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumbs">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Case studies</span>
            </nav>

            <p className="eyebrow">Case studies</p>
            <h1 className="archive-title">{FEATURED_PROJECTS.length} production systems, in detail</h1>
            <p className="section-lead">
              The problem, what I built, the stack and the measurable result for each project — with
              real screenshots from the running systems.
            </p>

            <div className="archive-toolbar">
              <div className="filter-pills" role="group" aria-label="Filter by industry">
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
                      aria-pressed={isActive}
                      className={`filter-pill ${isActive ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.label}
                      <span className="filter-pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <label className="search-box">
                <IconSearch size={17} />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by tech, e.g. Laravel, FastAPI, Bitrix24"
                  aria-label="Search case studies"
                />
                {searchQuery && (
                  <button type="button" className="icon-btn" onClick={() => setSearchQuery("")} aria-label="Clear search">
                    <IconClose size={16} />
                  </button>
                )}
              </label>
            </div>

            <p className="results-bar" aria-live="polite">
              Showing {filteredProjects.length} of {FEATURED_PROJECTS.length}
              {(selectedCategory !== "all" || searchQuery) && (
                <button type="button" className="text-link" onClick={resetFilters}>
                  Reset filters
                </button>
              )}
            </p>
          </div>
        </section>

        {filteredProjects.length > 0 ? (
          <CaseStudies
            projects={filteredProjects}
            galleryTabs={galleryTabs}
            onTabChange={handleGalleryTabChange}
            onOpenLightbox={handleOpenLightbox}
          />
        ) : (
          <section className="section">
            <div className="wrap">
              <div className="empty-state">
                <h2>No case studies match &ldquo;{searchQuery}&rdquo;</h2>
                <p>Try a different technology or clear the filters.</p>
                <button type="button" className="btn btn-primary" onClick={resetFilters}>
                  Show all projects
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="wrap">
            <div className="cta-band">
              <div>
                <h2>Want the short version?</h2>
                <p>The homepage has the two-minute overview — experience, skills and availability.</p>
              </div>
              <div className="cta-band-actions">
                <Link href="/" className="btn btn-secondary">
                  Back to overview
                </Link>
                <button type="button" className="btn btn-primary" onClick={() => setDrawerOpen(true)}>
                  Ask a question <IconArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onOpenContact={() => setContactOpen(true)} />
      <MobileActionBar onOpenContact={() => setContactOpen(true)} />

      <RecruiterDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
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
