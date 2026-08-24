"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Building2, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusVariant =
    project.status === "completed"
      ? "success"
      : project.status === "ongoing"
      ? "default"
      : "secondary";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full flex flex-col"
    >
      <div className="relative flex-1 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <Badge variant={statusVariant} size="sm">
            {project.status.toUpperCase()}
          </Badge>
        </div>

        {/* Image Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

          {/* Category Tag */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="font-heading px-3 py-1 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full border border-border">
              {project.category.replace("-", " ")}
            </span>
          </div>

          {/* Hover Action Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-primary/20 backdrop-blur-xs flex items-center justify-center pointer-events-none"
          >
            <Link href={`/projects#${project.slug}`} className="pointer-events-auto">
              <Button size="sm" variant="solid" className="font-heading text-xs font-semibold uppercase tracking-wider shadow-lg">
                View Project Details
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-border/60">
            <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">{project.location.split(",")[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-body text-muted-foreground col-span-2">
              <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{project.area}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="font-body px-2.5 py-0.5 bg-muted text-[11px] font-medium text-muted-foreground rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
