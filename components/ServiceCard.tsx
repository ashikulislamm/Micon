"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Layers, Droplets, ShieldCheck, Hammer, Factory, Cpu } from "lucide-react";
import { ServiceItem } from "@/types/service";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Layers,
  Droplets,
  ShieldCheck,
  Hammer,
  Factory,
  Cpu,
};

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl overflow-hidden border border-border shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
    >
      {/* Card Header Image */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-muted">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-80" />
        {service.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="default" size="sm">
              {service.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-card-foreground leading-snug">
              {service.title}
            </h3>
          </div>
          <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Key Highlights */}
        {service.features && service.features.length > 0 && (
          <div className="space-y-2 pt-3 border-t border-border">
            {service.features.slice(0, 2).map((feat, hIdx) => (
              <div key={hIdx} className="flex items-center gap-2 text-xs font-body text-card-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Link */}
        <div className="pt-2">
          <Link
            href={`/services/${service.slug}`}
            className="font-heading text-xs font-bold uppercase tracking-wider text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group/link"
          >
            Explore Service Detail <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
