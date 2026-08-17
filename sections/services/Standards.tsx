"use client";

import { motion } from "framer-motion";
import { Award, Leaf, Zap, Recycle, BarChart3, ShieldCheck } from "lucide-react";

const certifications = [
  { icon: Award, title: "ISO 9001:2015", subtitle: "Quality Management Certified" },
  { icon: ShieldCheck, title: "OHSAS 18001", subtitle: "Health & Safety Compliance" },
  { icon: Award, title: "BEPZA Certified", subtitle: "Export Processing Zone Standard" },
  { icon: Leaf, title: "DoE Compliant", subtitle: "Department of Environment" },
];

const sustainabilityFeatures = [
  { icon: Leaf, title: "Green Progress", description: "Low-carbon eco materials & LEED gold design" },
  { icon: Zap, title: "Clean Efficiency", description: "Solar-ready roof trusses & thermal insulation" },
  { icon: Recycle, title: "Zero Waste", description: "Off-site CNC prefabrication reducing site scrap" },
  { icon: BarChart3, title: "Carbon Tracking", description: "BIM life-cycle environmental modeling" },
];

export default function Standards() {
  return (
    <section className="py-16 lg:py-24 bg-card border-y border-border relative overflow-hidden">
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
            QUALITY & SUSTAINABILITY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Engineered to <span className="font-accent italic text-primary">Highest Global Standards</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            Integrating BNBC 2020, AISC 360-16, and ISO 9001:2015 quality control across every project stage.
          </motion.p>
        </div>

        {/* 4 Sustainability Features Grid - Centered Symmetrical Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-10">
          {sustainabilityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border shadow-xs text-center flex flex-col items-center justify-between hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3.5 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Badge Grid - Matching Centered Symmetrical Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border shadow-xs text-center flex flex-col items-center justify-between hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3.5 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-base mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">
                    {cert.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
