"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, ShoppingCart, Hammer, Zap, Trash2, FileCheck, Check } from "lucide-react";
import SustainabilityBG from "@/public/Sustainability.jpg";
import SectionTitle from "@/components/SectionTitle";

const practices = [
  {
    icon: Leaf,
    badge: "STAGE 01",
    title: "Sustainable Engineering & BIM Design",
    description:
      "Incorporating LEED green building principles and 3D BIM structural modeling to eliminate material waste before on-site construction starts.",
    highlights: ["LEED Gold Design Standards", "Material Waste Reduction"],
  },
  {
    icon: ShoppingCart,
    badge: "STAGE 02",
    title: "Eco-Friendly Procurement",
    description:
      "Procuring ISO 14001 certified steel, low-carbon slag cement, and non-toxic thermal insulation from reliable supply chains.",
    highlights: ["Recyclable Structural Steel", "Low-Emission Insulation"],
  },
  {
    icon: Hammer,
    badge: "STAGE 03",
    title: "Off-Site Prefabrication",
    description:
      "Using automated CNC cutting and submerged arc welding in controlled factory environments to reduce on-site cutting waste by up to 40%.",
    highlights: ["40% Site Waste Reduction", "High Factory Precision"],
  },
  {
    icon: Zap,
    badge: "STAGE 04",
    title: "Energy & Thermal Efficiency",
    description:
      "Engineering solar-ready roof trusses, high-performance insulated wall panels, and natural daylight louvers into factory buildings.",
    highlights: ["35% Thermal Energy Saved", "Solar-Ready Roof Systems"],
  },
  {
    icon: Trash2,
    badge: "STAGE 05",
    title: "Water Treatment & Recycling",
    description:
      "Constructing civil Effluent Treatment Plants (ETP) and Water Treatment Plants (WTP) to safely treat and recycle industrial wastewater.",
    highlights: ["Zero Liquid Discharge (ZLD)", "Chemical-Resistant Linings"],
  },
  {
    icon: FileCheck,
    badge: "STAGE 06",
    title: "Environmental Compliance",
    description:
      "Ensuring full compliance with Bangladesh Department of Environment (DoE) standards and international environmental frameworks.",
    highlights: ["100% DoE Clearance", "ISO 14001 Standards"],
  },
];

const metrics = [
  { value: "40%", label: "Site Waste Reduction", sub: "Via Off-Site PEB Fabrication" },
  { value: "35%", label: "Thermal Energy Saved", sub: "Via Insulated Cladding Systems" },
  { value: "100%", label: "DoE Clearance Rate", sub: "Department of Environment" },
  { value: "ZLD", label: "Zero Liquid Discharge", sub: "ETP & WTP Turnkey Systems" },
];

export default function Sustainability() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          label="SUSTAINABILITY"
          title="Committed to"
          subtitle="Sustainable Construction"
          description="Integrating eco-friendly practices, energy efficiency, and waste reduction into our industrial construction projects across Bangladesh."
        />

        {/* Real-World Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-card p-6 border border-border shadow-xs text-left"
            >
              <div className="font-mono text-3xl sm:text-4xl font-bold text-primary mb-1">
                {item.value}
              </div>
              <div className="font-heading text-xs sm:text-sm font-bold text-foreground">
                {item.label}
              </div>
              <div className="font-mono text-[11px] text-muted-foreground mt-1 truncate">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full mb-12 lg:mb-16 border border-border shadow-md overflow-hidden bg-muted/40"
        >
          <div className="relative h-[320px] sm:h-[400px] lg:h-[450px]">
            <Image
              src={SustainabilityBG}
              alt="MICON Sustainable Engineering and Green Construction"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-12 text-white">
              <div className="max-w-3xl space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                  EPC SUSTAINABILITY BENCHMARK
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Industrial Infrastructure Engineered for Tomorrow
                </h3>
                <p className="font-body text-xs sm:text-sm lg:text-base text-white/85 max-w-2xl leading-relaxed">
                  Every pre-engineered steel factory and turnkey RCC facility engineered by MICON complies with strict environmental standards, ensuring reduced operating costs and enduring environmental protection.
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card p-6 lg:p-8 border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-primary px-2.5 py-1 bg-primary/10 border border-primary/20">
                      {practice.badge}
                    </span>
                  </div>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {practice.title}
                  </h4>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  {practice.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-foreground">
                      <div className="w-3.5 h-3.5 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
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
