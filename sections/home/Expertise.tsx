"use client";

import { motion } from "framer-motion";
import { Building2, Layers, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Steel from "@/public/Steel Building/SB_1.png";
import Facility from "@/public/Facilities/FC_3.jpg";
import RCC from "@/public/RCC/RCC_1.jpg";

const expertiseItems = [
  {
    id: "peb",
    icon: Building2,
    badge: "Steel Engineering",
    title: "Design-Build PEB Steel Buildings",
    description:
      "Pre-engineered steel building systems for factories and warehouses. 60m+ column-free clear spans, seismic resilience, and 50% faster erection.",
    highlights: ["Up to 60m Column-Free Spans", "25-Year Structural Warranty"],
    image: Steel.src,
    link: "/services/peb-steel",
  },
  {
    id: "rcc",
    icon: Layers,
    badge: "Turnkey Civil",
    title: "Turnkey RCC & Hybrid Structures",
    description:
      "Integrated turnkey construction combining high-strength RCC foundations with heavy structural steel superstructures under a single contract.",
    highlights: ["Integrated Single-Source Delivery", "Deep Bored Piling Foundations"],
    image: RCC.src,
    link: "/services/turnkey-construction",
  },
  {
    id: "etp",
    icon: Wrench,
    badge: "Environmental",
    title: "ETP/WTP & RMS Treatment Facilities",
    description:
      "Specialized Effluent Treatment Plants (ETP) and Water Treatment Plants (WTP) complying with Department of Environment standards.",
    highlights: ["DoE Bangladesh Compliant", "SCADA Automated PLC Control"],
    image: Facility.src,
    link: "/services/treatment-plants",
  },
];

export default function Expertise() {
  return (
    <section className="py-14 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase"
          >
            SPECIALIZATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Key Industry <span className="font-accent italic text-primary">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            Delivering high-precision engineering solutions across PEB steel buildings, heavy civil RCC structures, and environmental treatment plants.
          </motion.p>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {expertiseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Card Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-heading px-3 py-1 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-card-foreground leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-border">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-body text-card-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <Link
                      href={item.link}
                      className="font-heading text-xs font-bold uppercase tracking-wider text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group/link"
                    >
                      Explore Capability <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-12 text-center"
        >
          <Link href="/services">
            <Button variant="outline" className="font-heading text-xs uppercase tracking-wider h-11 px-6 border-primary/50 text-primary hover:bg-primary hover:text-white">
              View All Services & Capabilities
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
