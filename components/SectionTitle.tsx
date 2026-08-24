"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  showUnderline?: boolean;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  description,
  alignment = "left",
  showUnderline = true,
  className,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-10 lg:mb-14", alignmentClasses[alignment], className)}
    >
      {label && (
        <div className="mb-3">
          <span className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary uppercase">
            {label}
          </span>
        </div>
      )}

      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
        {subtitle && (
          <>
            {" "}
            <span className="font-accent italic text-primary">{subtitle}</span>
          </>
        )}
      </h2>

      {showUnderline && (
        <div
          className={cn(
            "w-20 h-1 bg-primary mt-4 rounded-full",
            alignment === "center" && "mx-auto",
            alignment === "right" && "ml-auto"
          )}
        />
      )}

      {description && (
        <p
          className={cn(
            "font-body text-sm sm:text-base lg:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed",
            alignment === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
