"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Factory, Layers, HardHat, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    id: "01",
    icon: Compass,
    title: "BIM 3D Modeling & Structural Design",
    subtitle: "Digital Twin Precision Before Groundbreaking",
    description:
      "Our in-house structural engineers utilize Building Information Modeling (BIM) to construct a complete 3D digital model of your facility. Clash detection and load simulation eliminate field errors before fabrication begins.",
    highlights: ["Clash-free architectural 3D BIM", "LEED green building compliance", "Precision structural load estimation"],
    badge: "Phase 1: Engineering",
  },
  {
    id: "02",
    icon: Factory,
    title: "Off-Site Steel Fabrication",
    subtitle: "Automated Factory Production & Quality Testing",
    description:
      "Steel members are fabricated in our automated facility using CNC beam cutting and submerged arc welding. Factory-controlled conditions ensure superior weld strength, anti-corrosion coating, and exact tolerances.",
    highlights: ["Submerged arc automated welding", "Shot blasting & epoxy coating", "100% Ultrasonic non-destructive testing"],
    badge: "Phase 2: Manufacturing",
  },
  {
    id: "03",
    icon: Layers,
    title: "Civil RCC Substructure & Piling",
    subtitle: "Heavy Industrial Foundation Engineering",
    description:
      "Our heavy civil team executes pile driving, soil stabilization, and reinforced cement concrete (RCC) foundation casting engineered specifically for industrial equipment vibration and high-tonnage load capacity.",
    highlights: ["Deep foundation pile testing", "High-grade concrete batching", "Seismic-resistant design"],
    badge: "Phase 3: Civil Construction",
  },
  {
    id: "04",
    icon: HardHat,
    title: "On-Site Erection & Structural Assembly",
    subtitle: "Fast-Track Craning & High-Strength Bolting",
    description:
      "Pre-engineered steel components arrive on-site as ready-to-assemble modules. Heavy mobile cranes and certified riggers assemble the primary framing in weeks rather than months with minimal site disruption.",
    highlights: ["30% faster than traditional concrete", "High-strength friction grip bolting", "Zero-incident safety protocol"],
    badge: "Phase 4: Site Erection",
  },
  {
    id: "05",
    icon: ShieldCheck,
    title: "Turnkey ETP/WTP & Final Handover",
    subtitle: "Environmental Systems & ISO Certified Sign-Off",
    description:
      "We complete utility hookups, environmental treatment plants (ETP/WTP), roofing insulation, and industrial floor hardeners, providing single-point accountability from concept to operational key handover.",
    highlights: ["Turnkey ETP & WTP integration", "Comprehensive warranty sign-off", "ISO 9001:2015 quality guarantee"],
    badge: "Phase 5: Turnkey Handover",
  },
];

export default function DesignBuildProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase"
          >
            HOW WE BUILD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            The Single-Source <span className="font-accent italic text-primary">Design-Build</span> Lifecycle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm lg:text-base text-muted-foreground mt-4 leading-relaxed"
          >
            Eliminate subcontractor delays and budget overruns. MICON handles design, fabrication, civil engineering, and erection under one unified contract.
          </motion.p>
        </div>

        {/* Interactive Step Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 lg:gap-4 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 shrink-0 font-heading text-sm ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-md scale-105"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <span className="font-mono text-xs font-bold opacity-80">{step.id}</span>
                <Icon className="w-4 h-4" />
                <span className="font-semibold">{step.badge.split(":")[1] || step.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Step Card Showcase */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-10 lg:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column Info */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary uppercase tracking-wider mb-4 w-fit">
                  {currentStep.badge}
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-2">
                  {currentStep.title}
                </h3>
                <p className="font-accent italic text-base sm:text-lg text-primary mb-6">
                  {currentStep.subtitle}
                </p>

                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                  {currentStep.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  {currentStep.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-body text-sm sm:text-base text-card-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link href="/quote">
                    <Button size="lg" className="font-heading text-xs uppercase tracking-wider h-12 px-6">
                      Request Design-Build Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column Step Visual / Infographic Box */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full bg-muted/40 rounded-xl p-8 border border-border flex flex-col items-center justify-center text-center relative min-h-[320px]">
                  <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 text-primary border border-primary/30">
                    {<currentStep.icon className="w-10 h-10" />}
                  </div>
                  <span className="font-heading text-5xl font-extrabold text-primary/30 absolute top-4 right-6">
                    {currentStep.id}
                  </span>
                  <h4 className="font-heading text-xl font-bold text-card-foreground mb-2">
                    {currentStep.badge}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground max-w-xs leading-relaxed">
                    Integrated quality verification step enforced under MICON ISO 9001:2015 standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
