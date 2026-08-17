"use client";

import { motion } from "framer-motion";
import { Award, Shield, Leaf, CheckCircle } from "lucide-react";

export const Certifications = () => {
  const certificates = [
    {
      icon: Award,
      title: "A-Class PWD License",
      subtitle: "Public Works Dept Certified",
    },
    {
      icon: Shield,
      title: "BEPZA Certified",
      subtitle: "Export Processing Zone Authority",
    },
    {
      icon: CheckCircle,
      title: "BEZA Enlistment",
      subtitle: "Bangladesh Economic Zones",
    },
    {
      icon: Leaf,
      title: "LGED Projects",
      subtitle: "Sustainable Green Construction",
    },
    {
      icon: Award,
      title: "MES Clearance",
      subtitle: "DGFI Security Clearance",
    },
    {
      icon: Shield,
      title: "MES Enlistment",
      subtitle: "Enlistment Certificate Certified",
    },
    {
      icon: CheckCircle,
      title: "ISO 9001:2015",
      subtitle: "Quality Management Certified",
    },
  ];

  const duplicatedCertificates = [...certificates, ...certificates, ...certificates];

  return (
    <section className="py-12 lg:py-16 bg-background border-y border-border overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <p className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-2 uppercase">
            ACCREDITATIONS & LICENSES
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Certified by <span className="font-accent italic text-primary">Leading Authorities</span>
          </h2>
        </motion.div>

        {/* Infinite Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex gap-6 md:gap-8 animate-infinite-scroll py-2">
            {duplicatedCertificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={`${cert.title}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading text-sm sm:text-base font-bold text-card-foreground truncate">
                        {cert.title}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground truncate">
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
