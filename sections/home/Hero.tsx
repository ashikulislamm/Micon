"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";

const certifications = [
  { name: "REGISTERED", subtitle: "" },
  { name: "ISO 9001:2015", subtitle: "" },
  { name: "GREEN BUILDING", subtitle: "COUNCIL" },
  { name: "PWD", subtitle: "A-CLASS" },
  { name: "BEPZA", subtitle: "CERTIFIED" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-foreground/75" />

        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-12 pb-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Established Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 lg:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-sm font-semibold text-white">
                Established Since 1995
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 lg:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block text-white">BUILDING</span>
              <span className="block text-primary italic font-extrabold">
                BEYOND
              </span>
              <span className="block text-white">EXCELLENCE</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 max-w-2xl leading-relaxed"
          >
            Pioneering sustainable engineering and high-impact structural
            integrity for the future of industrial growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center"
          >
            {/* Primary CTA - Portfolio */}
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-semibold px-10 lg:px-12 h-14 lg:h-16 text-base lg:text-lg rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 border-2 border-primary hover:border-primary/80"
            >
              <span className="relative z-10 flex items-center gap-3">
                VIEW PORTFOLIO
                <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-2 duration-300" />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Button>

            {/* Secondary CTA - Expertise */}
            <Button
              size="lg"
              className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white font-semibold px-10 lg:px-12 h-14 lg:h-16 text-base lg:text-lg rounded-full border-2 border-white/40 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Wrench className="h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:rotate-12 duration-300" />
                OUR EXPERTISE
              </span>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
