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
  variant?: "default" | "outline" | "secondary" | "ghost" | "solid";
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
  children?: React.ReactNode; // Optional slot for extra elements like Search Bar
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
        "relative h-[660px] sm:h-[660px] lg:h-[700px] min-h-[720px] sm:min-h-[760px] lg:min-h-[800px] w-full overflow-hidden bg-foreground flex items-center justify-center",
        className
      )}
    >
      {/* Background Image & Layered Dark Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        />

        {/* Primary Dark Contrast Overlay */}
        <div className="absolute inset-0 bg-foreground/80 backdrop-blur-[2px]" />

        {/* Warm Light Orange Ambient Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(242,148,66,0.22),transparent_55%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />

        {/* Architectural Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Main Content Container (Centered & Height Constrained) */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full text-center flex flex-col items-center justify-center h-full">
        <div className="max-w-4xl mx-auto mt-16 mb-16 flex flex-col items-center justify-center">
          {/* Breadcrumbs 
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-6 text-xs font-body text-white/70 uppercase tracking-wider"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90 font-semibold">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}*/}

          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 mt-4"
          >
            <span className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary uppercase bg-primary/10 px-4 py-2.5 rounded-full border border-primary/30 shadow-xs">
              {badge}
            </span>
          </motion.div>

          {/* Main Title with Optional Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="font-accent italic text-primary">{highlight}</span>
                </>
              )}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-base sm:text-lg text-white/90 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed text-center"
          >
            {description}
          </motion.p>

          {/* Action Buttons (All Rounded Full) */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
            >
              {primaryCta && (
                primaryCta.href ? (
                  <Link href={primaryCta.href} className="w-full sm:w-auto">
                    <Button
                      size="xl"
                      variant={primaryCta.variant || "default"}
                      className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-full shadow-lg hover:scale-105 transition-all bg-primary hover:bg-primary/90 text-white"
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
                    className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-full shadow-lg hover:scale-105 transition-all bg-primary hover:bg-primary/90 text-white"
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
                      className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-full shadow-md backdrop-blur-xs transition-all"
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
                    className="font-heading text-xs uppercase tracking-wider font-semibold w-full sm:w-auto h-12 px-8 rounded-full shadow-md backdrop-blur-xs transition-all"
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

          {/* Optional Extra Slot (e.g. Search Bar) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
