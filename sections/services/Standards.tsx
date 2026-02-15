"use client";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Leaf,
  Zap,
  Recycle,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
  },
  {
    icon: Award,
    title: "OHSAS 18001",
    subtitle: "Health & Safety",
  },
  {
    icon: Award,
    title: "AIB Standards",
    subtitle: "Food Safety Design",
  },
  {
    icon: Award,
    title: "EPA Compliant",
    subtitle: "Environmental Protection",
  },
];

const sustainabilityFeatures = [
  {
    icon: Leaf,
    title: "Green Progress",
    description: "Eco-friendly materials with reduced carbon footprint",
  },
  {
    icon: Zap,
    title: "Clean Efficiency",
    description: "Energy-efficient systems and renewable integration",
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description: "Waste management and recycling protocols",
  },
  {
    icon: BarChart3,
    title: "Low Carbon M",
    description: "Carbon emission tracking and reduction",
  },
];

export default function Standards() {
  return (
    <>
      {/* Sustainability Section */}
      <section className="py-16 lg:py-24 bg-[#2C2416] text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Green Buildings/GB_2.jpg"
            alt="Sustainable Engineering"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2416] via-[#2C2416]/95 to-[#2C2416]/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs lg:text-sm font-semibold tracking-widest text-primary mb-4 uppercase"
              >
                Environmental Standards
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Future-Proofing Through{" "}
                <span className="text-primary">Sustainable Engineering</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base lg:text-lg text-white/80 mb-8 leading-relaxed"
              >
                We integrate advanced eco-centric engineering practices into every
                project step-up – from site analysis, renewable energy integration,
                to waste minimization protocols. Our sustainable approach balances
                operational efficiency with long-term environmental stewardship,
                contributing to a cleaner industrial future.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {sustainabilityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-sm lg:text-base">
                          {feature.title}
                        </h4>
                        <p className="text-xs lg:text-sm text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/about#sustainability">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Learn About Our Green Initiatives
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative h-96"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Green Buildings/GB_2.jpg"
                  alt="Sustainable Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs lg:text-sm font-semibold tracking-widest text-primary mb-4 uppercase"
            >
              Accreditations & Compliance
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Built to the Highest Industrial Standards
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-primary mx-auto"
            />
          </div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-sm border border-foreground/5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base lg:text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-foreground/60">
                    {cert.subtitle}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm lg:text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality and safety is reflected in our comprehensive
              certifications and adherence to international engineering standards. We
              maintain rigorous quality control at every project phase.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
