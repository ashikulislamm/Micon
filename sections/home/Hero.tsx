"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

const TELEMETRY_METRICS = [
  { value: "60M+", label: "Clear Span Steel", detail: "AISC & BNBC Compliant" },
  { value: "5,000 MT", label: "Monthly Output", detail: "Automated CNC Fabrication" },
  { value: "100+", label: "Turnkey Delivered", detail: "Single-Source EPC" },
  { value: "ISO 9001", label: "Quality Certified", detail: "Zero Incident Protocol" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-foreground flex flex-col justify-between pt-28 lg:pt-36">
      {/* Background Image & Architectural Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />

        {/* High-density industrial charcoal contrast overlay */}
        <div className="absolute inset-0 bg-[#0A0D12]/85 backdrop-blur-[1.5px]" />
        {/* Subtle, restrained amber ambient illumination (no neon blobs) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[160px]" />

      </div>

      {/* Main Center Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 my-auto py-12 lg:py-16 text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Established Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Established 2018
            </p>
          </motion.div>

          {/* High-Impact Architectural Dual-Font Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 lg:mb-10 text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              PRECISION STEEL &amp;
              <span className="font-accent italic text-primary font-normal block my-1 sm:my-2">
                Turnkey Industrial
              </span>
              INFRASTRUCTURE
            </h1>
          </motion.div>

          {/* Senior Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="xl"
                className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-13 px-8 shadow-lg bg-primary hover:bg-primary/90 text-white transition-colors"
              >
                <span>Inspect Project Portfolio</span>
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="xl"
                variant="heroOutline"
                className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-13 px-8 hover: text-white backdrop-blur-xs transition-colors"
              >
                <Layers className="mr-2 h-4 w-4 text-primary" />
                <span>Engineering Capabilities</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
