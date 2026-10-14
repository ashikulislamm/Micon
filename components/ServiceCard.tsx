"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/types/service";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col bg-card shadow-xs hover:shadow-md transition-shadow duration-300"
      >
        <div className="relative h-52 w-full overflow-hidden bg-muted">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-4 font-mono text-xs font-semibold tracking-widest text-white">
            {number}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          <div className="space-y-3">
            <span className="block font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
              {service.shortTag}
            </span>
            <h3 className="font-heading text-lg font-bold leading-snug text-card-foreground">
              {service.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              {service.shortDescription}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-primary">
            View Service
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
