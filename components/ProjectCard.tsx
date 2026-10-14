"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Maximize2 } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index = 0,
  onSelect,
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  const handleClick = () => {
    if (onSelect) {
      onSelect(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="h-full"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        className="group flex h-full flex-col bg-card border border-border/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* Project Image Container */}
        <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Top Telemetry Tags */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <span className="font-mono text-xs font-semibold tracking-widest text-white/90 bg-black/60 px-2 py-0.5 border border-white/10">
              {number}
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-black/80 text-primary border border-primary/30">
              {project.status.toUpperCase()}
            </span>
          </div>

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-3 left-3.5 right-3.5 pointer-events-none">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold block mb-0.5">
              {project.category.replace("-", " ")}
            </span>
            {project.client && (
              <span className="font-body text-xs text-white/90 font-medium truncate block">
                {project.client}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col justify-between gap-5 p-6">
          <div className="space-y-2.5">
            <h3 className="font-heading text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Telemetry Strip */}
          <div className="pt-4 border-t border-border/60 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
              <div className="truncate">
                <span className="text-foreground/80 font-medium">LOC: </span>
                <span>{project.location.split(",")[0]}</span>
              </div>
              <div className="text-right truncate">
                <span className="text-foreground/80 font-medium">AREA: </span>
                <span className="text-primary font-semibold">{project.area}</span>
              </div>
            </div>

            {/* Inspect Action */}
            <div className="flex items-center justify-between pt-1 text-primary">
              <span className="font-heading text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                Inspect Blueprint
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <Maximize2 className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
