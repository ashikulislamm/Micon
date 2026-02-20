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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Minimal Gradient Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group"
          >
            {/* Subtle Shadow Enhancement */}
            <div className="absolute -inset-1 bg-gray-200 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-700" />

            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Minimal Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16">
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-slate-100 rounded-full mb-6 border border-slate-200"
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                      {CONFIG.badge}
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 tracking-tight"
                  >
                    {CONFIG.heading}
                    <br />
                    <span className="text-primary">{CONFIG.subheading}</span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed"
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
                        className="flex items-center gap-2 text-sm lg:text-base text-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
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
                        className="group w-full sm:w-auto relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14 text-base rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
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
                        className="group w-full sm:w-auto border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground font-semibold px-8 h-14 text-base rounded-full transition-all duration-300"
                      >
                        <MessageSquare className="w-5 h-5" />
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
                        {/* Card Glow */}
                        <div className="absolute -inset-0.5 bg-slate-200 rounded-2xl opacity-0 group-hover/card:opacity-60 blur transition duration-500" />

                        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover/card:bg-slate-200 transition-colors">
                              <TrendingUp className="w-8 h-8 text-primary" />
                            </div>

                            {/* Content */}
                            <div>
                              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm lg:text-base text-muted-foreground font-medium">
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
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">
                            Trusted by Industry Leaders
                          </h4>
                          <p className="text-sm text-muted-foreground">
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
            <p className="text-sm text-slate-500">
              🔒 Your information is safe with us. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
