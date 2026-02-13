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
            <div className="bg-primary px-4 py-1.5 rounded-sm">
              <span className="text-xs lg:text-sm font-semibold text-white tracking-wider">
                ESTABLISHED SINCE 2018
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group text-base font-semibold px-8 h-12 lg:h-14 lg:px-10 lg:text-lg"
            >
              VIEW PORTFOLIO
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outlineSecondary"
              size="lg"
              className="text-base font-semibold px-8 h-12 lg:h-14 lg:px-10 lg:text-lg"
            >
              EXPERTISE
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
