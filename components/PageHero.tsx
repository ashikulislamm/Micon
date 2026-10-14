"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CtaButton {
  label: string;
  href?: string;
  icon?: React.ElementType;
  variant?: "default" | "outline" | "secondary" | "ghost" | "solid" | "heroOutline";
  onClick?: () => void;
}

export interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  bgImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  bgImage = "/AboutBG.jpg",
  breadcrumbs = [{ label: "Home", href: "/" }],
  primaryCta,
  secondaryCta,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[580px] sm:min-h-[640px] lg:min-h-[800px] h-auto w-full overflow-hidden bg-foreground flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24",
        className
      )}
    >
      {/* Background Image & Layered Architectural Dark Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        />

        {/* High-density industrial dark contrast overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

        {/* Senior designer ambient radial warmth (restrained, no neon blobs) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          {/* Breadcrumb Navigation with Schema.org Microdata */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <ol className="inline-flex flex-wrap items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-xs font-mono">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li
                      key={crumb.label + idx}
                      className="inline-flex items-center gap-1.5"
                    >
                      {idx > 0 && (
                        <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      )}
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="text-white/70 hover:text-primary transition-colors font-normal"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-primary font-medium">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>

              {breadcrumbs.length > 1 && (
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BreadcrumbList",
                      itemListElement: breadcrumbs.map((crumb, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: crumb.label,
                        ...(crumb.href
                          ? {
                              item: crumb.href.startsWith("http")
                                ? crumb.href
                                : `https://www.miconbd.com${crumb.href}`,
                            }
                          : {}),
                      })),
                    }),
                  }}
                />
              )}
            </motion.nav>
          )}

          {/* Section Kicker */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
                {badge.replace(/^\/\/\s*/, "")}
              </p>
            </motion.div>
          )}

          {/* Dual-Font Editorial Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 text-center"
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-xs">
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="font-accent italic text-primary font-normal block sm:inline mt-1 sm:mt-0">
                    {highlight}
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed text-center"
          >
            {description}
          </motion.p>

          {/* Senior Action Buttons */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3.5 items-center justify-center w-full sm:w-auto"
            >
              {primaryCta && (
                primaryCta.href ? (
                  <Link href={primaryCta.href} className="w-full sm:w-auto">
                    <Button
                      size="xl"
                      variant={primaryCta.variant || "default"}
                      className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-none shadow-md hover:bg-primary/90 transition-colors"
                    >
                      {primaryCta.label}
                      {primaryCta.icon ? (
                        <primaryCta.icon className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="xl"
                    variant={primaryCta.variant || "default"}
                    onClick={primaryCta.onClick}
                    className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-none shadow-md hover:bg-primary/90 transition-colors"
                  >
                    {primaryCta.label}
                    {primaryCta.icon ? (
                      <primaryCta.icon className="ml-2 h-4 w-4" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                )
              )}

              {secondaryCta && (
                secondaryCta.href ? (
                  <Link href={secondaryCta.href} className="w-full sm:w-auto">
                    <Button
                      size="xl"
                      variant={secondaryCta.variant || "heroOutline"}
                      className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-none backdrop-blur-xs transition-colors"
                    >
                      {secondaryCta.icon && (
                        <secondaryCta.icon className="mr-2 h-4 w-4" />
                      )}
                      {secondaryCta.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="xl"
                    variant={secondaryCta.variant || "heroOutline"}
                    onClick={secondaryCta.onClick}
                    className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-none backdrop-blur-xs transition-colors"
                  >
                    {secondaryCta.icon && (
                      <secondaryCta.icon className="mr-2 h-4 w-4" />
                    )}
                    {secondaryCta.label}
                  </Button>
                )
              )}
            </motion.div>
          )}

          {/* Children Slot (e.g. Filter Bar or Search) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 w-full max-w-2xl mx-auto"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
