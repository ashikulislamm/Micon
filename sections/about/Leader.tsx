"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Leader() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Leader Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/20" />
              {/* Placeholder for image - replace with actual image */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Leader Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Leader Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Engr. Noman Or Rashid
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                With over 20 years of hands-on experience, Engr. Noman Or Rashid
                leads the MICON team in delivering world-class infrastructure and industrial
                construction projects. His commitment to engineering excellence has made us
                one of the most recognized names in the industry.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Under his leadership, MICON has successfully executed 100+ complex projects,
                establishing a track record of safety, quality, and on-time delivery. His vision
                for sustainable construction continues to drive innovation and technical
                precision across all our operations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
