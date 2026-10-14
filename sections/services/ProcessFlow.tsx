"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: "design",
    number: "01",
    title: "Design",
    description:
      "Concept design and engineering, with early cost estimation and value engineering to protect the budget.",
    points: ["Architectural and structural design", "BIM-based coordination", "Early cost estimation"],
  },
  {
    id: "procurement",
    number: "02",
    title: "Procurement",
    description:
      "Materials and equipment selected for durability and compliance, supported by robust supply chain capability.",
    points: ["Durable, compliant materials", "Factory-fabricated steel components", "Managed supply chain"],
  },
  {
    id: "construction",
    number: "03",
    title: "Construction",
    description:
      "Site execution by our own engineers, machinery and formwork fleet under rigorous schedule and safety control.",
    points: ["In-house engineers and equipment", "Modular and prefabricated methods", "Safety and quality supervision"],
  },
  {
    id: "handover",
    number: "04",
    title: "Handover",
    description:
      "Final inspection, regulatory compliance and turnkey handover so the facility is ready to operate.",
    points: ["Quality inspection", "Regulatory compliance", "Turnkey commissioning"],
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Methodology" title="How We" subtitle="Deliver" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Step selector */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {processSteps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex items-center gap-4 p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-card-foreground hover:bg-muted"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-sm font-bold",
                      isActive ? "text-primary-foreground/80" : "text-primary"
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="font-heading text-base font-bold">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active step detail */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-card p-8 lg:p-10 h-full shadow-xs"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                  Stage {step.number}
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-card-foreground mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 font-body text-sm text-card-foreground">
                      <span className="h-1.5 w-1.5 bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
