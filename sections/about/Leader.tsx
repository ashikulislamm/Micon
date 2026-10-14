"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, Quote, Briefcase, GraduationCap } from "lucide-react";
import Noman from "@/public/Noman.png";
import SectionTitle from "@/components/SectionTitle";

const credentials = [
  {
    icon: GraduationCap,
    value: "BUET M.Sc.",
    label: "Civil Engineering",
    sub: "Structural Engineering",
  },
  {
    icon: Briefcase,
    value: "15+ Years",
    label: "Industry Leadership",
    sub: "Civil & PEB Construction",
  },
  {
    icon: Award,
    value: "PWD Class-A",
    label: "Enlisted Contractor",
    sub: "Public Works Dept",
  },
  {
    icon: ShieldCheck,
    value: "100+ Sites",
    label: "Projects Delivered",
    sub: "Across Bangladesh",
  },
];

export default function Leader() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          label="LEADERSHIP & VISION"
          title="Guided by"
          subtitle="Purpose & Integrity"
        />

        {/* Managing Director Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] bg-muted/30 border border-border shadow-md overflow-hidden">
              <Image
                src={Noman}
                alt="Engr. Md. Noman Or Rashid - Managing Director, MICON"
                fill
                className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Title Plate */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-semibold">
                  Founder & Managing Director
                </span>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-white mt-1">
                  Engr. Md. Noman Or Rashid
                </h3>
                <p className="font-mono text-xs text-white/70 mt-1">
                  M.Sc. Civil Engineering (BUET) | 15+ Years Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Director's Narrative & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Building Industrial Infrastructure for Bangladesh
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Engr. Md. Noman Or Rashid holds a Master of Science in Civil Engineering from Bangladesh University of Engineering and Technology (BUET) and brings over 15 years of practical leadership to industrial construction. Having successfully completed large PEB steel factories, multi-story industrial buildings, and environmental treatment plants across the country, he established Metal Infrastructures & Constructions Ltd. (MICON) with a clear goal: to combine sound engineering practices with honesty, quality, and real value for clients.
              </p>
            </div>

            {/* Founder's Vision Quote */}
            <div className="p-6 bg-card border-l-2 border-primary border-y border-r border-border shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Quote className="w-5 h-5 shrink-0" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Founder's Perspective
                </span>
              </div>
              <p className="font-accent italic text-base sm:text-lg text-foreground leading-relaxed">
                &ldquo;True progress cannot be measured only by the tons of steel we erect or the concrete we pour, but by the real impact we create for people and businesses. At MICON, every project we undertake is built to provide safe working environments, support industries, and contribute to the economic growth of Bangladesh.&rdquo;
              </p>
              <div className="font-mono text-xs text-muted-foreground pt-1">
                — Engr. Md. Noman Or Rashid, Managing Director
              </div>
            </div>

            {/* 4 Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {credentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-card p-3.5 border border-border">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                        {item.value}
                      </span>
                    </div>
                    <div className="font-heading text-xs font-bold text-foreground truncate">
                      {item.label}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground truncate">
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
