"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, Clock, HeartHandshake, Leaf } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    index: "01",
    icon: Compass,
    title: "Engineering Precision & Smart Design",
    description:
      "Using 3D BIM modeling and careful structural analysis to ensure long-term durability and material efficiency.",
  },
  {
    index: "02",
    icon: Clock,
    title: "On-Time Project Delivery",
    description:
      "Coordinated design-build workflows, off-site factory fabrication, and strict project tracking ensure milestones are met on schedule.",
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Uncompromising Safety & Quality",
    description:
      "Zero compromise on worker safety, full compliance with BNBC and PWD Class-A codes, and earthquake-resilient engineering for every facility.",
  },
  {
    index: "04",
    icon: HeartHandshake,
    title: "Respect for People & Community",
    description:
      "We believe construction is a way to empower workers, support local communities, and build a stronger industrial future for Bangladesh.",
  },
  {
    index: "05",
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "Designing eco-friendly buildings with energy-efficient insulation, waste reduction, and sustainable steel materials.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          label="CORE VALUES"
          title="What Sets MICON"
          subtitle="Apart"
          description="Our work across Bangladesh is guided by engineering ethics, precise execution, workplace safety, and respect for our people and the environment."
        />

        {/* 5 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((val, index) => {
            const Icon = val.icon;
            const isLastSpan = index === 3 || index === 4;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-card border border-border p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 group ${
                  index === 3 ? "lg:col-span-1 md:col-span-1" : ""
                } ${index === 4 ? "lg:col-span-2 md:col-span-2" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-primary">
                      {val.index}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {val.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary shrink-0" />
                  <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                    Core Corporate Pillar
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
