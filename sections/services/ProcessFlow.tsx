"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, PenTool, Hammer, CheckCircle2, ArrowRight, ShieldCheck, FileCheck2, Cpu, Wrench } from "lucide-react";

interface ProcessStep {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  standards: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "survey",
    number: "01",
    icon: ClipboardCheck,
    title: "Site Survey & Feasibility",
    subtitle: "Geotechnical & Architectural Analysis",
    description:
      "Comprehensive soil bore testing, site topography survey, architectural requirement audit, and preliminary structural budget estimation.",
    deliverables: [
      "Soil Bearing Capacity Report",
      "Site Topography 3D Scan",
      "Architectural Feasibility Blueprint",
      "Preliminary Cost & Timeline Estimation",
    ],
    duration: "1 to 2 Weeks",
    standards: "BNBC 2020 Geotechnical Code",
  },
  {
    id: "bim",
    number: "02",
    icon: PenTool,
    title: "3D BIM Engineering",
    subtitle: "Digital Twin & Structural Calculations",
    description:
      "Drafting LOD-400 Building Information Modeling (BIM) digital twins, AISC wind & seismic load calculations, and 100% clash detection.",
    deliverables: [
      "LOD-400 3D BIM Digital Model",
      "AISC 360-16 Structural Calculation Sheet",
      "Zero-Clash MEP & Civil Coordination",
      "Automated Material Bill of Quantities (BOQ)",
    ],
    duration: "2 to 4 Weeks",
    standards: "AISC 360-16 & BNBC 2020",
  },
  {
    id: "fabrication",
    number: "03",
    icon: Hammer,
    subtitle: "Off-Site Manufacturing & Heavy Erection",
    title: "CNC Fabrication & Erection",
    description:
      "Off-site automated CNC beam cutting & submerged arc welding in factory controlled environments, paired with rapid crane site erection.",
    deliverables: [
      "CNC Cut & Welded Steel Beams",
      "Deep Bored RCC Piling Foundations",
      "Heavy Mobile Crane Site Erection",
      "Ultrasonic & NDT Weld Inspection",
    ],
    duration: "6 to 12 Weeks",
    standards: "ISO 9001:2015 & AWS D1.1",
  },
  {
    id: "handover",
    number: "04",
    icon: CheckCircle2,
    subtitle: "Final Testing & Turnkey Commissioning",
    title: "Quality Audit & Handover",
    description:
      "Rigorous non-destructive testing, environmental DoE clearance verification, full load testing, and turnkey facility handover.",
    deliverables: [
      "Non-Destructive Structural Test Audit",
      "DoE Environmental Clearance Certificate",
      "As-Built BIM Documentation Package",
      "25-Year Structural Warranty Certification",
    ],
    duration: "1 to 2 Weeks",
    standards: "ISO 14001 & DoE Bangladesh",
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const step = processSteps[activeStep];
  const StepIcon = step.icon;

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase"
          >
            PROJECT METHODOLOGY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Our Service <span className="font-accent italic text-primary">Delivery Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            A 4-phase single-source construction methodology engineered for 100% on-time delivery and zero safety incidents.
          </motion.p>
        </div>

        {/* 4 Interactive Phase Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveStep(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative group ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-102"
                    : "bg-card text-card-foreground border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`font-heading text-xs font-extrabold uppercase ${isActive ? "text-white/80" : "text-primary"}`}>
                    PHASE {item.number}
                  </span>
                </div>

                <div>
                  <h3 className={`font-heading text-base sm:text-lg font-bold mb-1 ${isActive ? "text-white" : "text-card-foreground"}`}>
                    {item.title}
                  </h3>
                  <p className={`font-body text-xs line-clamp-2 ${isActive ? "text-white/85" : "text-muted-foreground"}`}>
                    {item.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Phase Details Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-border shadow-lg space-y-6 max-w-5xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-accent text-xs font-semibold text-primary uppercase tracking-wider">
                    PHASE {step.number} EXECUTION SCOPE
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-card-foreground">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-xs font-heading font-semibold text-primary uppercase">
                  Duration: {step.duration}
                </div>
                <div className="px-3.5 py-1.5 bg-muted rounded-full text-xs font-heading font-semibold text-muted-foreground uppercase">
                  {step.standards}
                </div>
              </div>
            </div>

            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            {/* Deliverables Checklist Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-card-foreground">
                Key Engineering Deliverables & Milestones:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {step.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 bg-muted/40 p-3 rounded-xl border border-border">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-body text-xs font-semibold text-card-foreground">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
