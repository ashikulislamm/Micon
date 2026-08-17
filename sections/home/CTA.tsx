"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";

// ==================== CONFIGURATION ====================
const CONFIG = {
  badge: "Ready to Build?",
  heading: "Let's Turn Your Vision",
  subheading: "Into Reality",
  description:
    "Partner with Bangladesh's leading construction experts. From initial concept to final delivery, we're committed to engineering excellence and sustainable innovation.",
  features: [
    "Free Project Consultation",
    "Competitive Pricing",
    "On-Time Delivery Guaranteed",
    "ISO 9001:2015 Certified",
  ],
  stats: [
    { value: "100+", label: "Projects Delivered" },
    { value: "30+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ],
};

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group"
          >
            {/* Main Card */}
            <div className="relative bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16">
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20"
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="font-accent text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                      {CONFIG.badge}
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-card-foreground mb-3 tracking-tight"
                  >
                    {CONFIG.heading}
                    <br />
                    <span className="font-accent italic text-primary">{CONFIG.subheading}</span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-body text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed"
                  >
                    {CONFIG.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                  >
                    {CONFIG.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm lg:text-base text-card-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-body font-medium">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link href="/quote">
                      <Button
                        size="lg"
                        className="font-heading group w-full sm:w-auto relative overflow-hidden bg-primary hover:bg-accent text-white font-semibold px-8 h-14 text-sm uppercase tracking-wider rounded-full shadow-lg transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Get Free Quote
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </Button>
                    </Link>

                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="font-heading w-full sm:w-auto border-2 border-primary/40 hover:border-primary hover:bg-primary/10 text-card-foreground font-semibold px-8 h-14 text-sm uppercase tracking-wider rounded-full transition-all duration-300"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Schedule Consultation
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                {/* Right Column - Stats & Visual Elements */}
                <div className="flex flex-col justify-center gap-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 gap-4">
                    {CONFIG.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="group/card relative"
                      >
                        <div className="relative bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                              <TrendingUp className="w-7 h-7 text-primary" />
                            </div>

                            {/* Content */}
                            <div>
                              <div className="font-heading text-3xl lg:text-4xl font-bold text-card-foreground mb-1 tracking-tight">
                                {stat.value}
                              </div>
                              <div className="font-body text-sm lg:text-base text-muted-foreground font-medium">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative"
                  >
                    <div className="bg-muted/40 rounded-2xl p-6 border border-border">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-card-foreground mb-1">
                            Trusted by Industry Leaders
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            Join 100+ satisfied clients who chose excellence in
                            engineering and construction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Support Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              🔒 Your information is safe with us. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
