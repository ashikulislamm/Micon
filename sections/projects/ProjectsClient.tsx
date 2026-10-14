"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Building2,
  X,
  Filter,
  CheckCircle2,
  Briefcase,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { Project, ProjectCategory } from "@/types/project";

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "peb-steel", label: "PEB Steel Buildings" },
  { id: "rcc", label: "Turnkey RCC" },
  { id: "green", label: "Green Factories" },
  { id: "facilities", label: "Utility & Treatment" },
  { id: "retrofitting", label: "Retrofitting" },
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalProject]);

  // Check URL hash on initial load (e.g. /projects#tvs-autos-central-facility)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashSlug = window.location.hash.replace("#", "");
      const matched = PROJECTS_DATA.find((p) => p.slug === hashSlug);
      if (matched) {
        setModalProject(matched);
      }
    }
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!q) return true;

      const titleMatch = project.title.toLowerCase().includes(q);
      const descMatch = project.description.toLowerCase().includes(q);
      const locMatch = project.location.toLowerCase().includes(q);
      const clientMatch = project.client?.toLowerCase().includes(q) ?? false;
      const tagsMatch = project.tags.some((tag) => tag.toLowerCase().includes(q));
      const highlightsMatch =
        project.highlights?.some((hl) => hl.toLowerCase().includes(q)) ?? false;

      return (
        titleMatch ||
        descMatch ||
        locMatch ||
        clientMatch ||
        tagsMatch ||
        highlightsMatch
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero */}
      <PageHero
        badge="PROJECT DOSSIER"
        title="Landmark Infrastructure &"
        highlight="Industrial Execution"
        description="Explore 100+ executed industrial facilities across Bangladesh, ranging from heavy PEB steel factories and high-voltage substations to USGBC LEED green manufacturing plants."
        bgImage="/Steel Building/SB_1.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      >
        {/* Integrated Search Input */}
        <div className="max-w-2xl mx-auto mt-2 w-full">
          <div className="relative flex items-center bg-card/95 border border-white/20 shadow-xl overflow-hidden focus-within:border-primary transition-colors">
            <Search className="ml-4 w-4 h-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search by client, structure type, location, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent px-3 py-3.5 font-body text-xs sm:text-sm text-foreground focus:outline-none placeholder:text-muted-foreground/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mr-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </PageHero>

      {/* Sticky Category Bar */}
      <section className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
              {CATEGORIES.map((cat) => {
                const count =
                  cat.id === "all"
                    ? PROJECTS_DATA.length
                    : PROJECTS_DATA.filter((p) => p.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`
                      font-heading text-xs uppercase font-semibold px-4 py-2.5 rounded-none transition-colors flex items-center gap-2 shrink-0 cursor-pointer
                      ${
                        isSelected
                          ? "bg-primary text-white"
                          : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
                      }
                    `}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.2 border ${
                        isSelected
                          ? "bg-black/20 text-white border-white/20"
                          : "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Active Filter Status & Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2 flex items-center justify-between text-xs font-mono text-muted-foreground">
        <div>
          <span>Showing </span>
          <span className="font-bold text-foreground">{filteredProjects.length}</span>
          <span> of {PROJECTS_DATA.length} verified projects</span>
          {searchQuery && (
            <span className="ml-2 text-primary">matching "{searchQuery}"</span>
          )}
        </div>
        {(searchQuery || selectedCategory !== "all") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-primary hover:underline font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="text-center py-20 bg-card border border-border max-w-md mx-auto p-8"
              >
                <Building2 className="w-10 h-10 mx-auto text-muted-foreground mb-3 opacity-60" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  No Projects Match Your Criteria
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-5 leading-relaxed">
                  Try adjusting your search terms or selecting another category.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  variant="outline"
                  size="sm"
                  className="rounded-none font-heading text-xs uppercase"
                >
                  Reset All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onSelect={(p) => setModalProject(p)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Blueprint Detail Modal */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-card border border-border shadow-2xl z-10 my-8 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border bg-muted/40 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                      {modalProject.category.replace("-", " ")}
                    </span>
                    {modalProject.client && (
                      <span className="font-mono text-xs text-muted-foreground border-l border-border pl-2">
                        Client: {modalProject.client}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    {modalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setModalProject(null)}
                  className="p-2 border border-border bg-card hover:bg-muted text-foreground transition-colors shrink-0"
                  aria-label="Close Blueprint"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 max-h-[70vh]">
                {/* Hero Showcase Image */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-muted border border-border">
                  <Image
                    src={modalProject.image}
                    alt={modalProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                    <span>Location: {modalProject.location}</span>
                    <span className="text-primary font-bold">Area: {modalProject.area}</span>
                  </div>
                </div>

                {/* Scope & Architecture */}
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    Engineering Scope & Structural Architecture
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {modalProject.longDescription || modalProject.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                {modalProject.highlights && modalProject.highlights.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Key Technical Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {modalProject.highlights.map((hl, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 bg-muted/40 border border-border text-xs font-body text-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags Strip */}
                {modalProject.tags && modalProject.tags.length > 0 && (
                  <div className="pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-2">
                      Technical Tags:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {modalProject.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-muted border border-border text-xs font-mono text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-border bg-muted/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span>Status: <strong className="text-foreground uppercase">{modalProject.status}</strong></span>
                  <span>Year: <strong className="text-foreground">{modalProject.year}</strong></span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Button
                    onClick={() => setModalProject(null)}
                    variant="outline"
                    size="sm"
                    className="rounded-none font-mono text-xs uppercase"
                  >
                    Close
                  </Button>
                  <Link href="/quote" className="w-full sm:w-auto">
                    <Button
                      size="sm"
                      className="rounded-none font-heading text-xs uppercase tracking-wider h-9 px-5 w-full sm:w-auto flex items-center justify-center gap-1.5"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Corporate Consultation CTA */}
      <CTASection
        title="Ready to Build Your Next Industrial Landmark?"
        subtitle="PROJECT INITIATION & EPC ADVISORY"
        description="Consult with MICON's structural engineers to discuss requirements, project feasibility, and turnkey delivery schedules."
        primaryCtaText="Request Technical Proposal"
        primaryCtaHref="/quote"
        secondaryCtaText="Contact Engineering HQ"
        secondaryCtaHref="/contact"
        showContactBar={true}
      />
    </div>
  );
}
