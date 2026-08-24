"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/lib/data/company";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showContactBar?: boolean;
  variant?: "primary" | "dark" | "compact";
  className?: string;
}

export default function CTASection({
  title = "Ready to Build Your Next Project?",
  subtitle,
  description = "Partner with MICON for reliable, cost-effective, and sustainable engineering solutions. Let's discuss how we can bring your vision to life.",
  primaryCtaText = "Request a Quote",
  primaryCtaHref = "/quote",
  secondaryCtaText = "Contact Us",
  secondaryCtaHref = "/contact",
  showContactBar = false,
  variant = "primary",
  className,
}: CTASectionProps) {
  if (variant === "compact") {
    return (
      <section className={cn("py-12 lg:py-16 bg-primary text-white relative overflow-hidden", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {title}
              </h2>
              {description && (
                <p className="font-body text-base lg:text-lg text-white/90">
                  {description}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shrink-0"
            >
              <Link href={primaryCtaHref}>
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-white font-heading text-sm uppercase tracking-wider px-8 h-12 rounded-full shadow-lg"
                >
                  {primaryCtaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "py-16 lg:py-24 relative overflow-hidden text-white",
        variant === "primary"
          ? "bg-gradient-to-br from-primary via-primary to-accent"
          : "bg-secondary text-secondary-foreground",
        className
      )}
    >
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20"
            >
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white tracking-tight"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/90"
            >
              {description}
            </motion.p>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCtaText && (
              <Link href={primaryCtaHref}>
                <Button
                  size="xl"
                  variant="solid"
                  className="font-heading text-sm font-semibold tracking-wider uppercase px-8 shadow-xl hover:scale-105 transition-transform"
                >
                  {primaryCtaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}

            {secondaryCtaText && (
              <Link href={secondaryCtaHref}>
                <Button
                  size="xl"
                  variant="heroOutline"
                  className="font-heading text-sm font-semibold tracking-wider uppercase px-8 rounded-full shadow-lg backdrop-blur-xs transition-all"
                >
                  {secondaryCtaText}
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Contact Bar */}
          {showContactBar && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-12 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-[10px] uppercase tracking-widest opacity-80">Call Us</p>
                    <p className="font-heading font-bold text-base">{COMPANY_CONTACT.hotline}</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-[10px] uppercase tracking-widest opacity-80">Email Us</p>
                    <p className="font-heading font-bold text-base">{COMPANY_CONTACT.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
