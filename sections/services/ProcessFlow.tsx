"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PenTool,
  Hammer,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
  number: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    title: "Consultation & Assessment",
    description:
      "We begin with a comprehensive site evaluation, understanding your requirements, budget constraints, and project timeline. Our team conducts feasibility studies and provides technical recommendations.",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Design & Engineering",
    description:
      "Our expert engineers create detailed 3D models, structural calculations, and complete blueprints. We ensure compliance with local regulations and international standards.",
    number: "02",
  },
  {
    icon: Hammer,
    title: "Construction & Execution",
    description:
      "With precision project management, we execute construction using quality materials and skilled labor. Real-time monitoring ensures adherence to timelines and safety protocols.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Handover",
    description:
      "Rigorous quality inspections, testing, and documentation are completed before final handover. We provide training, warranties, and ongoing technical support.",
    number: "04",
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs lg:text-sm font-semibold tracking-widest text-primary mb-4 uppercase"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Our Service Delivery Process
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            From initial consultation to final handover, we follow a systematic
            approach ensuring transparency, quality, and timely delivery.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-foreground/5 h-full flex flex-col relative z-10">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-foreground/70 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - Desktop Only */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-sm lg:text-base text-foreground/70 mb-4">
            Average project completion time: <span className="font-bold text-primary">6-12 months</span> depending on scope and complexity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
