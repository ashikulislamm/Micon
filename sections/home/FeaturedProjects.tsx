"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { Project } from "@/types/project";
import {
  ArrowRight,
  MapPin,
  Building2,
  X,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  Layers,
} from "lucide-react";

export default function FeaturedProjects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const heroProject = PROJECTS_DATA[0]; // CREC Padma Railway Link
  const stackProject1 = PROJECTS_DATA[1]; // TVS Autos 180,000 sq.ft Hub
  const stackProject2 = PROJECTS_DATA[2]; // Flaxen Dress Maker 5-Storied LEED Factory

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="ENGINEERING DOSSIER"
          title="Featured Turnkey"
          subtitle="Project Portfolio"
          alignment="center"
        />

        {/* Flagship Dossier Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Dominant Hero Card (Col span 7) - Mega Rail Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-card shadow-xs hover: transition-colors flex flex-col justify-between overflow-hidden group"
          >
            {/* High-Resolution Hero Visual Container */}
            <div className="relative h-[300px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden bg-muted">
              <Image
                src={heroProject.image}
                alt={heroProject.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

              {/* Top Telemetry Badges */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs px-3 py-1 bg-black/70 backdrop-blur-md text-white uppercase font-semibold">
                  National Transit Infrastructure
                </span>
                <span className="font-body text-xs px-3 py-1 bg-primary text-primary-foreground font-semibold uppercase tracking-wider">
                  Client: {heroProject.client}
                </span>
              </div>

              {/* Bottom Overlaid Coordinates Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">5 Stations • Padma, Shibchor, Joy-Bangla, Nagarkandha</span>
                </div>
                <span className="hidden sm:inline-flex bg-black/70 backdrop-blur-md px-2.5 py-1.5 text-[11px] text-white/80">
                  Delivered 2024
                </span>
              </div>
            </div>

            {/* Architectural Data Section */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Flagship Execution • Mega Rail Works
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Completed &amp; Handed Over</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-card-foreground mb-3 leading-snug">
                  {heroProject.title}
                </h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {heroProject.description}
                </p>

                {/* Technical Spec Matrix Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 font-mono text-xs mb-6">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Built Metric</span>
                    <span className="font-semibold text-foreground mt-0.5 block">{heroProject.area}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Structural Scope</span>
                    <span className="font-semibold text-foreground mt-0.5 block">Heavy Civil &amp; Steel</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Design Codes</span>
                    <span className="font-semibold text-foreground mt-0.5 block">BNBC 2020 / AREMA</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Safety Standard</span>
                    <span className="font-semibold text-foreground mt-0.5 block">Zero-LTI Protocol</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  onClick={() => setModalProject(heroProject)}
                  className="font-heading text-xs uppercase tracking-wider w-full sm:w-auto h-11 px-6 group/btn cursor-pointer"
                >
                  <span>Inspect Technical Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>

                <Link
                  href="/projects"
                  className="font-heading text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  <span>Explore Infrastructure Archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stacked Column (Col span 5) - Industrial PEB & Green LEED */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            {/* Secondary Card 1: TVS Autos Industrial Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card shadow-xs hover: transition-colors flex flex-col overflow-hidden group flex-1"
            >
              <div className="relative h-[200px] w-full overflow-hidden bg-muted shrink-0">
                <Image
                  src={stackProject1.image}
                  alt={stackProject1.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 bg-black/70 backdrop-blur-md text-white uppercase font-semibold">
                    Heavy PEB Steel
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 bg-primary text-primary-foreground font-semibold">
                    180,000 Sq.Ft
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">{stackProject1.location}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                    Client: {stackProject1.client}
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-card-foreground mb-2 leading-snug">
                    {stackProject1.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {stackProject1.description}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    AISC 360-16 • 60m Clear Span
                  </span>
                  <button
                    onClick={() => setModalProject(stackProject1)}
                    className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Secondary Card 2: Flaxen Dress Maker Green Factory */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card shadow-xs hover: transition-colors flex flex-col overflow-hidden group flex-1"
            >
              <div className="relative h-[200px] w-full overflow-hidden bg-muted shrink-0">
                <Image
                  src={stackProject2.image}
                  alt={stackProject2.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 bg-black/70 backdrop-blur-md text-white uppercase font-semibold">
                    Sustainable Green EPC
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 bg-primary text-primary-foreground font-semibold">
                    154,987 Sq.Ft
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">{stackProject2.location}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                    Client: {stackProject2.client}
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-card-foreground mb-2 leading-snug">
                    {stackProject2.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {stackProject2.description}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    USGBC LEED • 5-Story C35 RCC
                  </span>
                  <button
                    onClick={() => setModalProject(stackProject2)}
                    className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Telemetry Dock */}
        <div className="mt-10 lg:mt-12 p-6 bg-card shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Nationwide Footprint
              </span>
              <span className="text-[11px] px-2.5 py-0.5 bg-primary/10 text-primary font-medium font-mono">
                24 Districts
              </span>
            </div>
            <p className="font-heading text-sm sm:text-base font-bold text-foreground">
              100+ Turnkey Industrial &amp; Infrastructure Projects Delivered Across Bangladesh
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              PWD Class-A • MES Security Cleared • BEPZA &amp; BEZA Enlisted • ISO 9001:2015
            </p>
          </div>

          <Link href="/projects" className="shrink-0">
            <Button
              variant="outline"
              size="lg"
              className="font-heading text-xs uppercase tracking-wider h-11 px-7 group cursor-pointer"
            >
              <span>Explore Full 20+ Project Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Engineering Dossier Modal */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-2xl bg-card shadow-2xl overflow-hidden z-10 max-h-[88vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 flex items-center justify-between bg-muted/20">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {modalProject.category.replace("-", " ")}
                    </span>
                    {modalProject.client && (
                      <span className="text-xs font-mono text-muted-foreground">
                        • Client: {modalProject.client}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-card-foreground">
                    {modalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="p-2 bg-muted/60 hover:bg-muted text-card-foreground transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="relative w-full h-60 overflow-hidden bg-muted">
                  <Image
                    src={modalProject.image}
                    alt={modalProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 text-white text-xs font-mono">
                    {modalProject.location} • Area: {modalProject.area}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    Engineering Scope &amp; Structural Architecture
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {modalProject.longDescription || modalProject.description}
                  </p>
                </div>

                {modalProject.highlights && (
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
                      Key Technical Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {modalProject.highlights.map((hl, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 bg-muted/40"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="font-body text-xs font-medium text-card-foreground">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer CTAs */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      Status: {modalProject.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      Year: {modalProject.year}
                    </span>
                  </div>

                  <Link href="/quote" className="w-full sm:w-auto">
                    <Button
                      size="sm"
                      className="font-heading text-xs uppercase tracking-wider h-10 px-5 w-full sm:w-auto cursor-pointer"
                    >
                      <span>Request Technical Proposal</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
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
