"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";
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
  title = "Ready to Engineer Your Next Industrial Landmark?",
  subtitle,
  description = "Partner with Bangladesh's premier ISO 9001:2015 certified engineering firm for PEB steel buildings, turnkey RCC structures, and environmental treatment facilities.",
  primaryCtaText = "Request Technical Proposal",
  primaryCtaHref = "/quote",
  secondaryCtaText = "Direct Engineering Hotline",
  secondaryCtaHref = "/contact",
  showContactBar = false,
  variant = "primary",
  className,
}: CTASectionProps) {
  if (variant === "compact") {
    return (
      <section className={cn("py-10 sm:py-12 bg-[#0D0F12] text-white relative overflow-hidden", className)}>
        <div className="absolute inset-0 opacity-10 blueprint-grid pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center md:text-left"
            >
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 tracking-tight">
                {title}
              </h2>
              {description && (
                <p className="font-body text-sm text-white/70 max-w-xl">
                  {description}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="shrink-0"
            >
              <Link href={primaryCtaHref}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-heading text-xs uppercase tracking-wider px-6 h-11 rounded-none shadow-md transition-colors"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  const cleanSubtitle = subtitle
    ? subtitle.replace(/^\/\/\s*/, "").trim()
    : "Project Initiation & EPC Advisory";

  return (
    <section
      className={cn(
        "py-16 lg:py-24 relative overflow-hidden bg-[#0D0F12] text-white",
        className
      )}
    >
      {/* Background Restrained Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Subtitle Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              {cleanSubtitle}
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-[1.15] text-white tracking-tight"
          >
            {title}
          </motion.h2>
          {/* Senior Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full sm:w-auto"
          >
            {primaryCtaText && (
              <Link href={primaryCtaHref} className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="font-heading text-xs font-semibold tracking-wider uppercase px-8 h-12 rounded-none bg-primary hover:bg-primary/90 text-white shadow-md transition-colors w-full sm:w-auto"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}

            {secondaryCtaText && (
              <Link href={secondaryCtaHref} className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="ghost"
                  className="font-heading text-xs font-semibold tracking-wider uppercase px-8 h-12 rounded-none bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  <span>{secondaryCtaText}</span>
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Contact Bar */}
          {showContactBar && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-8 w-full max-w-2xl"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-white/90">
                <a
                  href={`tel:${COMPANY_CONTACT.hotline.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Engineering Hotline</p>
                    <p className="font-semibold text-sm text-white">{COMPANY_CONTACT.hotline}</p>
                  </div>
                </a>

                <div className="hidden sm:block w-px h-8 bg-white/10" />

                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Direct Email</p>
                    <p className="font-semibold text-sm text-white">{COMPANY_CONTACT.email}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
