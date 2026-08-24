"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const featuredList = PROJECTS_DATA.slice(0, 4);
  const currentProject = featuredList[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredList.length) % featuredList.length);
  };

  return (
    <section className="py-14 lg:py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="FEATURED PORTFOLIO"
          title="Showcasing Engineering"
          subtitle="Excellence"
          description="Explore our featured industrial complexes, high-rise commercial structures, and environmental treatment facilities."
          alignment="center"
        />

        {/* Compact Carousel Showcase Box */}
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 items-center"
            >
              {/* Left Image Box */}
              <div className="lg:col-span-7 relative h-[320px] sm:h-[400px] lg:h-[450px] overflow-hidden bg-muted">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" size="sm">
                    {currentProject.category.replace("-", " ")}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 font-heading text-white text-xs font-bold bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md">
                  Project 0{activeIndex + 1} / 0{featuredList.length}
                </div>
              </div>

              {/* Right Content Info */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-card-foreground mb-3">
                    {currentProject.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Meta Pills */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border mb-6 font-body text-xs text-card-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{currentProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{currentProject.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Completed {currentProject.year}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => setModalProject(currentProject)}
                    size="lg"
                    className="font-heading text-xs uppercase tracking-wider w-full h-11 px-6"
                  >
                    Inspect Project Specs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Controls & Thumbnail Strip Bar */}
          <div className="p-4 bg-muted/40 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Thumbnail Selectors */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-hide">
              {featuredList.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-heading transition-all shrink-0 cursor-pointer ${
                    activeIndex === idx
                      ? "bg-primary text-white font-bold shadow-xs"
                      : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                  <span>0{idx + 1}. {p.title.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-card rounded-2xl border border-border shadow-2xl overflow-hidden z-10 max-h-[88vh] flex flex-col"
            >
              <div className="p-5 border-b border-border flex items-center justify-between bg-muted/30">
                <div>
                  <span className="font-accent text-xs font-semibold text-primary uppercase tracking-wider">
                    {modalProject.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-card-foreground">
                    {modalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="p-2 rounded-full bg-muted hover:bg-primary/20 text-card-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={modalProject.image}
                    alt={modalProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    Engineering Overview
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {modalProject.longDescription || modalProject.description}
                  </p>
                </div>

                {modalProject.highlights && (
                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Key Technical Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {modalProject.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/50 border border-border">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="font-body text-xs font-medium text-card-foreground">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs font-body text-muted-foreground">
                    <span>📍 {modalProject.location}</span>
                    <span>🏗️ {modalProject.area}</span>
                  </div>

                  <Link href="/quote">
                    <Button size="sm" className="font-heading text-xs uppercase tracking-wider h-10 px-5">
                      Request Proposal <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
