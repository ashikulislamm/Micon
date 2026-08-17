"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Compass, CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";
import MissionVission from "@/public/MissionVission.png";

const missionPoints = [
  "Single-Source Design-Build Accountability",
  "BIM 3D Precision & Clash-Free Execution",
  "Zero Subcontractor Delay & Budget Safety",
  "Strict DoE Environmental Compliance",
];

const visionPoints = [
  "Leading Industrial Partner in Bangladesh",
  "LEED Certified Eco-Friendly Factories",
  "Seismic Zone 4 Earthquake Resilience",
  "Nation-Building Infrastructure Development",
];

export default function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20 relative overflow-hidden">
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
            PURPOSE & DIRECTION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Our Driving <span className="font-accent italic text-primary">Mission & Vision</span>
          </motion.h2>
        </div>

        {/* Dual Blueprint Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Target className="w-7 h-7" />
                </div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-primary/10 rounded-full">
                  Action Core
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                Our Mission
              </h3>

              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                To advance industrial infrastructure in Bangladesh by delivering turnkey, design-build construction solutions engineered with technical precision, complete integrity, and single-source accountability.
              </p>

              <div className="space-y-3 pt-4 border-t border-border">
                {missionPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-body text-xs sm:text-sm font-medium text-card-foreground">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-primary/10 rounded-full">
                  Future Horizon
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                Our Vision
              </h3>

              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                To be the premier engineering force shaping the industrial landscape of Bangladesh, establishing new global benchmarks for structural durability, environmental safety, and sustainable economic growth.
              </p>

              <div className="space-y-3 pt-4 border-t border-border">
                {visionPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-body text-xs sm:text-sm font-medium text-card-foreground">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-border"
        >
          <Image src={MissionVission} alt="MICON Mission & Vision Showcase" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6 sm:p-10 text-white">
            <div className="max-w-2xl">
              <span className="font-accent text-xs uppercase tracking-widest text-primary font-semibold">
                NATION BUILDING INFRASTRUCTURE
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-1 mb-2">
                Building Industrial Bangladesh for Generations
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed">
                Over 100+ industrial factories, high-rise complexes, and environmental treatment plants delivered with ISO 9001:2015 quality standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
