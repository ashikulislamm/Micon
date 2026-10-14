"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Target, Compass } from "lucide-react";
import MissionVission from "@/public/MissionVission.png";
import SectionTitle from "@/components/SectionTitle";

const missionPoints = [
  "Complete single-source design and turnkey construction",
  "3D BIM modeling to eliminate design conflicts before building",
  "Full compliance with BNBC, PWD Class-A, and environmental rules",
  "On-time project delivery with transparent communication",
];

const visionPoints = [
  "Leading contractor for pre-engineered steel buildings in Bangladesh",
  "Energy-efficient, eco-friendly green factory design",
  "Earthquake-resilient structural engineering for all facilities",
  "Safe workplaces and meaningful growth for our workers",
];

export default function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20 relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          label="MISSION & VISION"
          title="Our Purpose &"
          subtitle="Long-Term Vision"
        />

        {/* Dual Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 lg:p-10 border border-border shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
                      Core Purpose
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 font-bold">
                  What We Do
                </span>
              </div>

              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                To advance industrial construction in Bangladesh by delivering reliable, high-quality engineering solutions with structural safety, complete honesty, and lasting value for our clients.
              </p>

              <div className="space-y-3 pt-4 border-t border-border">
                {missionPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-body text-xs sm:text-sm font-medium text-foreground">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card p-8 lg:p-10 border border-border shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
                      Future Goals
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 font-bold">
                  Where We Aim
                </span>
              </div>

              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                To be the most trusted industrial engineering and construction partner in Bangladesh, known for building modern PEB structures, sustainable green factories, and safe workplaces.
              </p>

              <div className="space-y-3 pt-4 border-t border-border">
                {visionPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-body text-xs sm:text-sm font-medium text-foreground">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[300px] sm:h-[380px] border border-border shadow-md overflow-hidden bg-muted/40"
        >
          <Image
            src={MissionVission}
            alt="MICON Engineering Horizon and Industrial Construction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-semibold block mb-1">
                CORPORATE MOTTO: BUILDING BEYOND
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Building Enduring Projects Across Bangladesh
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
                Over 100 industrial facilities, PEB complexes, and utility treatment plants delivered under certified ISO 9001:2015 quality standards and PWD Class-A guidelines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
