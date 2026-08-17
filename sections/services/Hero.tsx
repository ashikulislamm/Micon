"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlights = [
  "ISO 9001:2015 Certified",
  "100+ Projects Handed Over",
  "LEED Certified Engineering",
  "A-Class PWD License",
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
          >
            <Building2 className="w-4 h-4 text-primary" />
            <span className="font-accent text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Single-Source Engineering Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-6 leading-tight tracking-tight"
          >
            Comprehensive <span className="font-accent italic text-primary">Construction</span> & Engineering
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            From 60m+ clear span PEB steel buildings to turnkey RCC structures, environmental treatment plants, and 3D BIM technology — MICON delivers end-to-end industrial excellence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <Button size="lg" className="font-heading text-xs uppercase tracking-wider h-12 px-8 w-full sm:w-auto">
                Request Engineering Proposal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="font-heading text-xs uppercase tracking-wider h-12 px-8 border-primary/50 text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                View Executed Projects
              </Button>
            </Link>
          </motion.div>

          {/* Highlights Badge Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-xs border border-border"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-body text-xs font-semibold text-card-foreground">
                  {highlight}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
