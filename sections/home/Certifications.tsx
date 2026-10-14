"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, CheckCircle2, ShieldAlert } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const CERTIFICATES = [
  {
    icon: Award,
    tag: "REG. CLASS-A",
    title: "PWD Enlisted Contractor",
    subtitle: "Public Works Department Bangladesh",
  },
  {
    icon: ShieldCheck,
    tag: "ISO 9001:2015",
    title: "Quality Management System",
    subtitle: "Certified Civil & PEB Construction",
  },
  {
    icon: CheckCircle2,
    tag: "BEPZA REG",
    title: "BEPZA Enlisted Contractor",
    subtitle: "Export Processing Zones Authority",
  },
  {
    icon: Leaf,
    tag: "USGBC / LEED",
    title: "Green Building Partner",
    subtitle: "Sustainable EPC Design & Audits",
  },
  {
    icon: ShieldCheck,
    tag: "MES / DGFI",
    title: "MES Security Clearance",
    subtitle: "Military Engineer Services Enlisted",
  },
  {
    icon: CheckCircle2,
    tag: "BEZA REG",
    title: "BEZA Enlisted Contractor",
    subtitle: "Bangladesh Economic Zones Authority",
  },
  {
    icon: Award,
    tag: "BNBC 2020",
    title: "Structural Code Compliant",
    subtitle: "Seismic Zone 4 Structural Resilience",
  },
];

export const Certifications = () => {
  const duplicatedCertificates = [
    ...CERTIFICATES,
    ...CERTIFICATES,
    ...CERTIFICATES,
  ];

  return (
    <section className="py-12 lg:py-16 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="ACCREDITATIONS & LICENSES"
          title="Certified by"
          subtitle="Regulatory Authorities"
          alignment="center"
          className="mb-8 lg:mb-10"
        />

        {/* Infinite Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track with Pause on Hover */}
          <div className="flex gap-4 md:gap-6 animate-infinite-scroll py-2">
            {duplicatedCertificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={`${cert.title}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 bg-card p-4 sm:p-5 shadow-xs hover:bg-card/90 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] text-primary uppercase tracking-wider font-semibold block mb-0.5">
                        {cert.tag}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-card-foreground truncate">
                        {cert.title}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground truncate mt-0.5">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
