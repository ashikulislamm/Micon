"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, Quote, Building2, Briefcase } from "lucide-react";
import Noman from "@/public/Noman.png";

export default function Leader() {
  const achievements = [
    { icon: Briefcase, value: "20+", label: "Years Experience", sub: "Civil & PEB Engineering" },
    { icon: Building2, value: "100+", label: "Turnkey Projects", sub: "Delivered On-Time" },
    { icon: Award, value: "A-Class", label: "PWD License", sub: "Public Works Department" },
    { icon: ShieldCheck, value: "ISO Certified", label: "Quality Standards", sub: "ISO 9001:2015 Certified" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase"
          >
            EXECUTIVE LEADERSHIP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Guided by <span className="font-accent italic text-primary">Vision & Expertise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Leader Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-card">
              <Image
                src={Noman}
                alt="Engr. Noman Or Rashid - Managing Director"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Name Tag */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-accent text-xs uppercase tracking-wider text-primary font-semibold">
                  Managing Director
                </span>
                <h3 className="font-heading text-2xl font-bold mt-1">
                  Engr. Noman Or Rashid
                </h3>
                <p className="font-body text-xs text-white/80">
                  Founder & Principal Director, MICON
                </p>
              </div>
            </div>

            {/* Floating Experience Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-2 sm:right-6 bg-primary text-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-white/20"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-heading font-extrabold text-lg">
                20+
              </div>
              <div className="font-heading text-xs uppercase tracking-wider font-semibold">
                Years of Structural <br /> Engineering Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Leader Bio & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 pt-6 lg:pt-0"
          >
            <div>
              <span className="font-accent text-xs font-semibold text-primary uppercase tracking-widest">
                DIRECTOR'S ADDRESS
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-1 mb-4">
                Engr. Noman Or Rashid
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                With over 20 years of hands-on structural engineering and industrial construction leadership, Engr. Noman Or Rashid drives MICON’s mission to build high-capacity infrastructure across Bangladesh.
              </p>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Under his leadership, MICON has successfully executed over 100 complex projects spanning PEB steel buildings, multi-story RCC structures, and environmental treatment facilities with zero-compromise safety records.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-muted/40 rounded-xl p-5 border-l-4 border-primary relative shadow-xs">
              <Quote className="w-8 h-8 text-primary/20 absolute top-3 right-3" />
              <p className="font-accent italic text-sm sm:text-base text-foreground relative z-10 leading-relaxed">
                "Construction is more than erecting steel and pouring concrete; it is about building the foundation of economic progress and industrial resilience for Bangladesh."
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-card p-3.5 rounded-lg border border-border">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="font-heading text-lg font-bold">{item.value}</span>
                    </div>
                    <div className="font-heading text-xs font-bold text-card-foreground">
                      {item.label}
                    </div>
                    <div className="font-body text-[10px] text-muted-foreground truncate">
                      {item.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
