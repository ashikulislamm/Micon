"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, Wrench, RefreshCw, ArrowRight, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const disciplines = [
  {
    icon: Building2,
    code: "DISCIPLINE 01",
    title: "Pre-Engineered Steel Buildings (PEB)",
    description:
      "Automated CNC plate profiling, cold-formed purlins, and submerged-arc welded built-up frames engineered for clear spans up to 60 meters. Ideal for heavy factories and automated warehouses.",
    href: "/services/peb-steel",
    specs: ["Clear Spans up to 60m", "Factory Pre-Fabrication", "High-Strength ASTM A572"],
  },
  {
    icon: Cpu,
    code: "DISCIPLINE 02",
    title: "Turnkey Industrial RCC & Civil Works",
    description:
      "Heavy industrial machine foundations, high-rise multi-story RCC facilities, deep piling, and chemical-hardened industrial flooring delivered under Class-A PWD licensing.",
    href: "/services/turnkey-construction",
    specs: ["Class-A PWD License", "Seismic Zone 4 Engineering", "Heavy Vibration Pads"],
  },
  {
    icon: Wrench,
    code: "DISCIPLINE 03",
    title: "ETP, WTP, STP & RMS Utility Enclosures",
    description:
      "Precision civil construction for industrial Effluent Treatment Plants (ETP), Water Treatment Plants (WTP), and Regulating & Metering Stations (RMS) with chemical resistance.",
    href: "/services/treatment-plants",
    specs: ["Acid/Chemical Resistant", "Zero Liquid Discharge (ZLD)", "DoE Clearance Ready"],
  },
  {
    icon: RefreshCw,
    code: "DISCIPLINE 04",
    title: "Civil & Steel Structural Retrofitting",
    description:
      "Comprehensive structural remediation, seismic strengthening, steel column jacketing, and industrial safety compliance upgrades aligned with Accord/RSC structural guidelines.",
    href: "/services/structural-retrofitting",
    specs: ["Non-Destructive Core Testing", "Structural Load Jacketing", "Compliance Upgrades"],
  },
];

const expertBreakdown = [
  { role: "B.Sc. Civil Engineers & Project Directors", count: "8+", detail: "BUET & Leading Engineering Alumni" },
  { role: "Registered Senior Architects", count: "3+", detail: "Industrial Masterplanning & Fire Safety" },
  { role: "Diploma Civil Engineers & Supervisors", count: "13+", detail: "Continuous On-Site Quality Assurance" },
  { role: "3D BIM & AutoCAD Structural Detailers", count: "4+", detail: "Tekla, ETABS & Revit Modeling" },
  { role: "Electrical & Mechanical (EME) Engineers", count: "4+", detail: "Substation, HVAC & Utility Integration" },
];

export default function TechnicalCapacity() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20 relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          label="OUR CAPABILITIES"
          title="Technical Expertise &"
          subtitle="Execution Power"
          description="From structural engineering and 3D modeling to off-site prefabrication and on-site construction, we deliver complete solutions across Bangladesh."
        />

        {/* 4 Core Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {item.code}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Spec Chips */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-border">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-card-foreground">
                        <span className="w-1 h-1 bg-primary shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={item.href} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full font-heading text-xs uppercase tracking-wider font-semibold rounded-none h-11 border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Human Capital Matrix (from COMPANY.md) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border"
        >
          <div className="p-6 sm:p-8 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                  TECHNICAL WORKFORCE
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                30+ Certified Industry Experts
              </h3>
            </div>
            <p className="font-body text-xs text-muted-foreground max-w-md">
              From BUET civil engineers to specialized AutoCAD detailers, our permanent technical roster ensures zero compromise on safety and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {expertBreakdown.map((expert, idx) => (
              <div key={idx} className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {expert.count}
                  </div>
                  <h4 className="font-heading text-xs font-bold text-foreground mb-1 leading-snug">
                    {expert.role}
                  </h4>
                </div>
                <p className="font-mono text-[10px] text-muted-foreground mt-3">
                  {expert.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
