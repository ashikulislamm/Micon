"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wrench, HardHat, Layers, X, ArrowRight, Search, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const constructionMachineries = [
  { name: "Heavy Hydraulic Excavator", quantity: "01 NOS", spec: "Earthmoving & Deep Trenching" },
  { name: "Pay Loader", quantity: "01 NOS", spec: "Bulk Material Handling" },
  { name: "Heavy Road Roller (15 MT)", quantity: "01 NOS", spec: "Sub-base Soil Compaction" },
  { name: "Hand Tandem Roller (5 MT)", quantity: "02 NOS", spec: "Precision Asphalt & Edge Roll" },
  { name: "Plate Compactors", quantity: "02 NOS", spec: "High-density Surface Finish" },
  { name: "Jumping Rammer Compactor", quantity: "01 NOS", spec: "Confined Space Backfill" },
  { name: "Digital Survey Total Stations", quantity: "02 NOS", spec: "Laser-Guided Topography" },
  { name: "Concrete Mixture Machines", quantity: "06 NOS", spec: "High-Slump Site Concrete" },
  { name: "Heavy Demolition Breakers", quantity: "06 NOS", spec: "RCC Breaking & Preparation" },
];

const fabricationEquipment = [
  { name: "CNC Plate Cutting Machine", quantity: "01 NOS", spec: "Automated Oxy/Plasma Profiling" },
  { name: "Profile Sheet Forming Machine", quantity: "01 NOS", spec: "Cold-Roll Cladding Production" },
  { name: "Purlin Roll Forming Machine", quantity: "01 NOS", spec: "C & Z Structural Sections" },
  { name: "Submerged Arc Welding (SWG)", quantity: "01 NOS", spec: "Built-up Beam Automated Weld" },
  { name: "Heavy Industrial Iron Worker", quantity: "01 NOS", spec: "Multi-Angle Shearing & Punching" },
  { name: "MIG Shielded Welding Fleet", quantity: "04 NOS", spec: "Precision Structural Joists" },
  { name: "ARC Heavy Welding Stations", quantity: "04 NOS", spec: "High-Strength Structural Welds" },
  { name: "Site Mobile Power Generators", quantity: "02 NOS", spec: "Continuous Uninterrupted Power" },
  { name: '7" & 4" Heavy Angle Grinders', quantity: "04 NOS", spec: "Weld Pre-Cleaning & Grinding" },
  { name: "Magnetic & Gas Drilling Units", quantity: "02 NOS", spec: "Heavy Flange High-Tensile Holes" },
  { name: "Automated Gas Cutter Sets", quantity: "02 NOS", spec: "Heavy Beam On-Site Profiling" },
];

const formworkAndTooling = [
  { name: "Heavy Steel Shuttering", quantity: "15,000 SFT", spec: "High-Cycle RCC Wall & Slab Shutter" },
  { name: "Modular Steel Scaffolding Sets", quantity: "1,000 SET", spec: "Multi-Tier Heavy Load Staging" },
  { name: "Heavy-Duty Formwork Props", quantity: "5,000 NOS", spec: "High-Load Adjustable Props" },
  { name: 'Structural Hollow Box Sections (1"×2" / 1.5"×1.5")', quantity: "25,000 NOS", spec: "Formwork Bracing & Stiffeners" },
  { name: 'Heavy Hollow Box Sections (3"×3")', quantity: "2,000 NOS", spec: "Heavy Shoring & Framework" },
  { name: "Hydraulic Rebar Cutting Machines", quantity: "04 NOS", spec: "High-Diameter Deformed Bars" },
  { name: "Automated Rebar Bending Machines", quantity: "04 NOS", spec: "Exact Hook & Stirrup Angles" },
  { name: "High-Rise Material Roof Hoists", quantity: "02 NOS", spec: "Vertical Site Material Logistics" },
  { name: "Site Shielded Welding Units", quantity: "25 NOS", spec: "Full-Scale Site Erection Fleet" },
];

export default function Machinaries() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Civil Construction",
      subtitle: "Earthmoving & Machinery Fleet",
      icon: HardHat,
      items: constructionMachineries,
      description: "Dedicated fleet of heavy excavators, compactors, transit mixers, and survey equipment for large-scale construction work.",
    },
    {
      title: "Steel Fabrication",
      subtitle: "Plant Machinery & CNC Tools",
      icon: Wrench,
      items: fabricationEquipment,
      description: "Modern automated CNC cutting, cold purlin forming, and submerged arc welding machines ensuring high precision in factory fabrication.",
    },
    {
      title: "Formwork Systems",
      subtitle: "Staging, Shuttering & Tooling",
      icon: Layers,
      items: formworkAndTooling,
      description: "Extensive inventory of steel shuttering, scaffolding sets, rebar bending machinery, and support props for multi-tier concrete structures.",
    },
  ];

  const openModal = (index: number) => {
    setSelectedCategory(index);
    setSearchQuery("");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    document.body.style.overflow = "unset";
  };

  const activeCategory = selectedCategory !== null ? categories[selectedCategory] : null;

  const filteredItems = activeCategory
    ? activeCategory.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.quantity.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          label="EQUIPMENT & ASSETS"
          title="Machinery &"
          subtitle="Equipment Fleet"
          description="MICON owns and operates a full fleet of heavy construction machinery, steel fabrication equipment, and modular formwork systems to ensure smooth and timely execution."
        />

        {/* 3 Capital Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-card border border-border shadow-xs hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold px-2.5 py-1 bg-primary/10 border border-primary/20">
                      {cat.items.length} Asset Lines
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {cat.title}
                  </h3>
                  <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider mb-4">
                    {cat.subtitle}
                  </div>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Highlights Matrix */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    {cat.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-foreground truncate max-w-[200px]">{item.name}</span>
                        <span className="text-primary font-semibold shrink-0 ml-2">{item.quantity}</span>
                      </div>
                    ))}
                    {cat.items.length > 3 && (
                      <div className="text-[11px] font-mono text-muted-foreground pt-1">
                        + {cat.items.length - 3} additional equipment lines
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                  <Button
                    onClick={() => openModal(idx)}
                    variant="outline"
                    className="w-full font-heading text-xs uppercase tracking-wider font-semibold rounded-none h-11 border-border hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Asset Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Assurance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-6 bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground">
                Regular Maintenance & Safety Inspections
              </h4>
              <p className="font-body text-xs text-muted-foreground">
                All construction machinery and equipment undergo regular safety checks and routine maintenance before site deployment.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-muted-foreground shrink-0 border-l border-border pl-4 hidden md:block">
            Standard: ISO 9001:2015 & BNBC
          </div>
        </motion.div>
      </div>

      {/* Equipment Dossier Modal */}
      <AnimatePresence>
        {selectedCategory !== null && activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
              onClick={closeModal}
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-card border border-border shadow-2xl z-10 my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border bg-muted/40 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
                      CAPITAL ASSET INVENTORY
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    {activeCategory.title}: {activeCategory.subtitle}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Total {activeCategory.items.length} verified asset lines deployed across MICON industrial project sites.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 border border-border bg-card hover:bg-muted text-foreground transition-colors shrink-0"
                  aria-label="Close Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search / Filter Bar */}
              <div className="p-4 border-b border-border bg-background flex items-center gap-2">
                <Search className="w-4 h-4 text-muted-foreground shrink-0 ml-1" />
                <input
                  type="text"
                  placeholder="Filter machinery by name, quantity, or application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs font-mono text-muted-foreground hover:text-foreground mr-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Machinery Table / List */}
              <div className="max-h-[55vh] overflow-y-auto divide-y divide-border">
                {filteredItems.length > 0 ? (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/20 font-mono text-[11px] uppercase text-muted-foreground border-b border-border">
                        <th className="py-2.5 px-6 font-semibold">Equipment / Machine</th>
                        <th className="py-2.5 px-6 font-semibold hidden sm:table-cell">Technical Application</th>
                        <th className="py-2.5 px-6 font-semibold text-right">Inventory Count</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border font-body text-xs">
                      {filteredItems.map((item, i) => (
                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-6 font-heading font-semibold text-foreground">
                            {item.name}
                            <div className="font-mono text-[11px] text-muted-foreground sm:hidden mt-0.5">
                              {item.spec}
                            </div>
                          </td>
                          <td className="py-3 px-6 font-mono text-muted-foreground hidden sm:table-cell">
                            {item.spec}
                          </td>
                          <td className="py-3 px-6 text-right">
                            <span className="inline-block px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold">
                              {item.quantity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="p-12 text-center text-muted-foreground font-mono text-xs">
                    No equipment matched "{searchQuery}"
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-border bg-muted/40 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  Showing {filteredItems.length} of {activeCategory.items.length} records
                </span>
                <Button
                  onClick={closeModal}
                  size="sm"
                  variant="outline"
                  className="rounded-none font-mono text-xs uppercase"
                >
                  Close Dossier
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
