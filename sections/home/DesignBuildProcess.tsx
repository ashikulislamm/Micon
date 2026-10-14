"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Factory, Layers, HardHat, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const STEPS = [
  {
    id: "01",
    icon: Compass,
    phaseTag: "Phase 01: Architectural & BIM",
    shortTitle: "3D BIM Design",
    title: "BIM 3D Modeling & Structural Detailing",
    subtitle: "Digital Twin Precision Before Groundbreaking",
    description:
      "Our in-house structural engineers utilize Tekla Structures and Revit BIM to engineer an exact 3D digital twin of your facility. Comprehensive clash detection between steel framing, RCC, and MEP services eliminates expensive site rework before fabrication begins.",
    highlights: [
      "Clash-free architectural and MEP structural integration",
      "Direct CNC machine fabrication code generation",
      "BNBC 2020 seismic & AISC 360-16 wind load simulation",
    ],
    deliverables: [
      { key: "Software Stack", value: "Tekla Structures, Revit, STAAD.Pro" },
      { key: "BIM Standard", value: "LOD 400 (Fabrication Level)" },
      { key: "Sign-Off Authority", value: "Registered Structural PE" },
    ],
  },
  {
    id: "02",
    icon: Factory,
    phaseTag: "Phase 02: Off-Site Production",
    shortTitle: "Steel Fabrication",
    title: "Automated Off-Site CNC Fabrication",
    subtitle: "Precision Automated Production & Ultrasonic Testing",
    description:
      "Primary built-up members and secondary framing are manufactured in our automated steel facility. Utilizing automated submerged arc welding, CNC beam drilling, and blast cleaning ensures exact geometric tolerances and long-term corrosion resistance.",
    highlights: [
      "Automated submerged arc welding (SAW) with full penetration",
      "Shot blasting to SA 2.5 standard with high-build epoxy primer",
      "100% Ultrasonic non-destructive weld testing (NDT)",
    ],
    deliverables: [
      { key: "Monthly Output", value: "5,000 MT Fabrication Capacity" },
      { key: "Steel Grade", value: "ASTM A572 Grade 50 High-Tensile" },
      { key: "Quality Testing", value: "Third-Party Certified NDT & UPV" },
    ],
  },
  {
    id: "03",
    icon: Layers,
    phaseTag: "Phase 03: Substructure & Civil",
    shortTitle: "RCC Foundations",
    title: "Civil RCC Substructure & Deep Bored Piling",
    subtitle: "Heavy Industrial Foundation Engineering",
    description:
      "Our civil engineering team executes geotechnical soil stabilization, cast-in-situ deep bored piling, and heavy reinforced concrete foundations engineered to absorb industrial equipment vibration and high column axial loads.",
    highlights: [
      "High-tonnage pile load testing and soil integrity verification",
      "C30 - C45 high-strength ready-mix concrete batching",
      "Anchor bolt placement with laser-guided total station accuracy",
    ],
    deliverables: [
      { key: "Piling Depth", value: "Up to 35m+ Cast-in-Situ Piles" },
      { key: "Concrete Standard", value: "ACI 318 & ASTM C39 Testing" },
      { key: "Survey Precision", value: "±2mm Anchor Bolt Alignment" },
    ],
  },
  {
    id: "04",
    icon: HardHat,
    phaseTag: "Phase 04: On-Site Craning & Erection",
    shortTitle: "Site Erection",
    title: "Fast-Track Craning & Structural Erection",
    subtitle: "Rapid Mechanical Assembly & High-Strength Bolting",
    description:
      "Precision pre-fabricated steel components arrive sequentially at the jobsite. Heavy mobile cranes and certified riggers assemble the primary frames using high-strength friction grip (HSFG) bolts, cutting erection time by up to 50% compared to traditional RCC.",
    highlights: [
      "50% faster completion speed compared to conventional concrete",
      "Grade 8.8 and 10.9 high-strength structural friction bolts",
      "Strict zero-incident HSE safety standards with daily toolboxes",
    ],
    deliverables: [
      { key: "Crane Fleet", value: "25-Ton to 100-Ton Hydraulic Cranes" },
      { key: "Safety Record", value: "Zero Incident HSE Protocol" },
      { key: "Fast-Track Speed", value: "1,500 to 2,500 sq.m / Month" },
    ],
  },
  {
    id: "05",
    icon: ShieldCheck,
    phaseTag: "Phase 05: Turnkey Testing & Handover",
    shortTitle: "Turnkey Handover",
    title: "Industrial Facilities Integration & Handover",
    subtitle: "Environmental Systems & ISO Certified Commissioning",
    description:
      "We complete insulated roofing panels, industrial floor hardeners, and environmental effluent treatment plants (ETP/WTP). The project concludes with formal authority approvals, as-built documentation, and comprehensive warranty guarantees.",
    highlights: [
      "Turnkey biological or chemical ETP / WTP commissioning",
      "Full as-built 3D digital model handover for facility ops",
      "25-year structural warranty backed by single-source contract",
    ],
    deliverables: [
      { key: "Environmental", value: "Department of Environment (DoE) Sign-off" },
      { key: "Quality Audit", value: "ISO 9001:2015 Handover Certificate" },
      { key: "Warranty Period", value: "25-Year Structural Integrity Guarantee" },
    ],
  },
];

export default function DesignBuildProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = STEPS[activeStep];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="EXECUTION LIFECYCLE"
          title="The Single-Source"
          subtitle="Design-Build Process"
          alignment="center"
        />

        {/* Step Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-200 shrink-0 font-heading text-xs sm:text-sm cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-xs font-bold opacity-80">{step.id}</span>
                <Icon className="w-4 h-4 shrink-0" />
                <span className="font-semibold">{step.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-card p-6 sm:p-8 lg:p-12 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column Information */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                    {currentStep.phaseTag}
                  </p>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-1.5 leading-tight">
                  {currentStep.title}
                </h3>
                <p className="font-accent italic text-base sm:text-lg text-primary mb-5">
                  {currentStep.subtitle}
                </p>

                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {currentStep.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-8">
                  {currentStep.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-card-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link href="/quote">
                    <Button size="lg" className="font-heading text-xs uppercase tracking-wider h-11 px-6">
                      <span>Request Turnkey Proposal</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column Technical Deliverables Blueprint Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full bg-muted/30 p-6 sm:p-8 flex flex-col justify-between relative min-h-[340px]">
                  <div className="flex items-center justify-between pb-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-primary/10 flex items-center justify-center text-primary">
                        {<currentStep.icon className="w-4 h-4" />}
                      </div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Technical Specs
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-primary/40">
                      #{currentStep.id}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {currentStep.deliverables.map((item) => (
                      <div key={item.key} className=" pb-2.5  last:pb-0">
                        <span className="text-[11px] text-muted-foreground uppercase tracking-wider block mb-0.5 font-medium">
                          {item.key}
                        </span>
                        <span className="font-body text-sm font-semibold text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>ISO 9001:2015 QA Checkpoint Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
