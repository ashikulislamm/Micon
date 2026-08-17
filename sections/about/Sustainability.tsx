"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, ShoppingCart, Hammer, Zap, Trash2, FileCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import SustainabilityBG from "@/public/Sustainability.jpg";

const practices = [
  {
    icon: Leaf,
    badge: "Design Stage",
    title: "Sustainable Engineering & BIM Design",
    description:
      "Incorporating LEED green building principles, life-cycle carbon analysis, and 3D BIM structural optimization to eliminate material waste before construction begins.",
    highlights: ["LEED Gold Standards", "Life-Cycle Carbon Reduction"],
  },
  {
    icon: ShoppingCart,
    badge: "Sourcing",
    title: "Smart Eco-Procurement",
    description:
      "Procuring ISO 14001 eco-certified steel, low-carbon cement, and non-toxic insulation materials from verified sustainable global supply chains.",
    highlights: ["Low-Carbon Certified Steel", "100% Recyclable Materials"],
  },
  {
    icon: Hammer,
    badge: "Manufacturing",
    title: "Off-Site Zero-Waste Prefabrication",
    description:
      "Utilizing automated CNC beam cutting and submerged arc welding in factory-controlled environments to reduce raw material waste by up to 40%.",
    highlights: ["40% Reduced Site Waste", "Factory Quality Precision"],
  },
  {
    icon: Zap,
    badge: "Efficiency",
    title: "Energy & Water Conservation Systems",
    description:
      "Designing solar-ready roof trusses, high R-value thermal roof insulation, and rainwater harvesting infrastructure into factory footprints.",
    highlights: ["35% Energy Conservation", "Rainwater Harvesting Tech"],
  },
  {
    icon: Trash2,
    badge: "Water Recycling",
    title: "Zero Liquid Discharge (ZLD) Plants",
    description:
      "Constructing advanced Effluent Treatment Plants (ETP) and Water Treatment Plants (WTP) to treat and recycle industrial wastewater completely.",
    highlights: ["Zero Liquid Discharge", "Automated SCADA PLC Control"],
  },
  {
    icon: FileCheck,
    badge: "Compliance",
    title: "DoE & Global Compliance",
    description:
      "Enforcing strict adherence to Bangladesh Department of Environment regulations and international ISO 14001 environmental management frameworks.",
    highlights: ["100% DoE Clearance", "ISO 14001 Compliant"],
  },
];

const metrics = [
  { value: "40%", label: "Site Waste Reduction", sub: "Via Off-Site PEB Fabrication" },
  { value: "35%", label: "Energy Conservation", sub: "Via Thermal Roof Insulation" },
  { value: "100%", label: "DoE Compliance", sub: "Department of Environment" },
  { value: "ZLD", label: "Wastewater Recycling", sub: "ETP/WTP Turnkey Systems" },
];

export default function Sustainability() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase"
          >
            ENVIRONMENTAL STEWARDSHIP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Commitment to <span className="font-accent italic text-primary">Sustainability</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            Integrating green engineering, resource optimization, and zero-waste construction into every design-build project across Bangladesh.
          </motion.p>
        </div>

        {/* Real-World Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border shadow-xs text-center"
            >
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mb-1">
                {item.value}
              </div>
              <div className="font-heading text-xs sm:text-sm font-bold text-card-foreground">
                {item.label}
              </div>
              <div className="font-body text-[11px] text-muted-foreground mt-1 truncate">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full mb-12 lg:mb-16 rounded-2xl overflow-hidden shadow-2xl border border-border"
        >
          <div className="relative h-[350px] sm:h-[450px] lg:h-[500px]">
            <Image
              src={SustainabilityBG}
              alt="MICON Sustainability Commitment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-12 text-white">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 text-xs font-heading font-semibold uppercase tracking-wider text-primary">
                  <Leaf className="w-4 h-4 text-primary" /> Green Engineering Standard
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Building Infrastructure for a Sustainable Tomorrow
                </h3>
                <p className="font-body text-xs sm:text-sm lg:text-base text-white/85 leading-relaxed">
                  Every PEB factory building and RCC complex engineered by MICON incorporates resource conservation, reduced operational energy footprints, and full environmental compliance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 EPC Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-full">
                      {practice.badge}
                    </span>
                  </div>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-card-foreground mb-3">
                    {practice.title}
                  </h4>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-border">
                  {practice.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-body text-card-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
