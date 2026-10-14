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
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const cleanLabel = label ? label.replace(/^\/\/\s*/, "").trim() : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col mb-10 lg:mb-14 max-w-3xl",
        alignmentClasses[alignment],
        className
      )}
    >
      {cleanLabel && (
        <div className="mb-2.5">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {cleanLabel}
          </span>
        </div>
      )}

      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
        {title}
        {subtitle && (
          <>
            {" "}
            <span className="font-accent italic font-normal text-primary">
              {subtitle}
            </span>
          </>
        )}
      </h2>

      {showUnderline && (
        <div
          className={cn(
            "flex items-center gap-2 mt-3.5",
            alignment === "center" && "justify-center",
            alignment === "right" && "justify-end"
          )}
          aria-hidden="true"
        >
          <div className="w-8 h-0.5 bg-primary" />
          <div className="w-1.5 h-1.5 bg-primary/40" />
        </div>
      )}

      {description && (
        <p className="font-body text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
