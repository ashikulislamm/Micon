"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Ruler, Wrench, HardHat, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const constructionMachinaries = [
  { name: "Excavator", quantity: "01 NOS" },
  { name: "Pay Loader", quantity: "01 NOS" },
  { name: "Road Roller", quantity: "01 (15 MT)" },
  { name: "Hand Roller 02", quantity: "(5 MT)" },
  { name: "Plate Compactor", quantity: "02 NOS" },
  { name: "Jumping Compactor", quantity: "01 NOS" },
  { name: "Digital Survey Machine", quantity: "02 NOS" },
  { name: "Braker Machine", quantity: "06 NOS" },
];

const equipmentsTools = [
  { name: "Generator", quantity: "02 NOS" },
  { name: "MIG Welding", quantity: "04 NOS" },
  { name: "ARC Welding", quantity: "04 NOS" },
  { name: "SWG Auto Welding", quantity: "01 NOS" },
  { name: "CNC Plate Cutting", quantity: "01 NOS" },
  { name: "Profile Sheet Forming Machine", quantity: "01 NOS" },
  { name: "Purlin Forming Machine", quantity: "01 NOS" },
  { name: '7" Grinding Machine', quantity: "02 NOS" },
  { name: '4" Grinding Machine', quantity: "02 NOS" },
  { name: "Gas Drill Machine", quantity: "02 NOS" },
  { name: "Auto Cutter Set", quantity: "02 NOS" },
  { name: "Iron Worker", quantity: "01" },
];

const formWorksTools = [
  { name: "Steel Shutter", quantity: "15000 SFT" },
  { name: "Scaffolding", quantity: "1000 SET" },
  { name: "Poops", quantity: "5000 NOS" },
  { name: "Welding Machine", quantity: "25 NOS" },
  { name: "Mixture Machine", quantity: "06 NOS" },
  { name: "Roof Woost", quantity: "02 NOS" },
  { name: 'Hollow Box (1" × 2" / 1.5" × 1.5")', quantity: "25000 NOS" },
  { name: 'Hollow Box (3" × 3")', quantity: "2000 NOS" },
  { name: "Hydraulic Rebar Cutting Machine", quantity: "04 NOS" },
  { name: "Rebar Bending Machine", quantity: "04 NOS" },
];

export default function Machinaries() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      title: "Constructions",
      subtitle: "Machinaries",
      icon: HardHat,
      items: constructionMachinaries,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: "Heavy-duty construction machinery for large projects",
    },
    {
      title: "Equipments &",
      subtitle: "Tools",
      icon: Wrench,
      items: equipmentsTools,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: "Precision tools and welding equipment for fabrication",
    },
    {
      title: "Form Works &",
      subtitle: "Tools",
      icon: Ruler,
      items: formWorksTools,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: "Formwork systems and concrete construction tools",
    },
  ];

  const openModal = (index: number) => {
    setSelectedCategory(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-background overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionTitle
            label="Resources"
            title="Our Machinaries & Equipment"
          />

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="group"
              >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/30">
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon and Title Section */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`flex-shrink-0 w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                      >
                        <category.icon
                          className={`w-8 h-8 ${category.iconColor}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight mb-2">
                          {category.title}
                          <br />
                          <span className="text-primary">
                            {category.subtitle}
                          </span>
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-primary/5 rounded-lg">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Total Items
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {category.items.length}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>

                    {/* View Equipment Button */}
                    <Button
                      onClick={() => openModal(categoryIndex)}
                      className="w-full bg-primary hover:bg-primary/90 text-white group/btn"
                    >
                      View Equipment List
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  Quality Assurance
                </h4>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                All equipment is regularly maintained and certified to meet
                international safety and quality standards. Additional machinery
                available upon project requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Modal */}
      <AnimatePresence>
        {selectedCategory !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50"
              onClick={closeModal}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                  className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="relative bg-gradient-to-r from-primary to-primary/80 p-8 text-white">
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        {categories[selectedCategory].icon &&
                          (() => {
                            const Icon = categories[selectedCategory].icon;
                            return <Icon className="w-8 h-8 text-white" />;
                          })()}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">
                          {categories[selectedCategory].title}
                        </h3>
                        <p className="text-xl text-white/90">
                          {categories[selectedCategory].subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/90">
                      {categories[selectedCategory].description}
                    </p>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8 max-h-[60vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categories[selectedCategory].items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.02 }}
                          className="group/item flex items-center justify-between p-4 bg-background hover:bg-primary/5 rounded-lg border border-border hover:border-primary/30 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-2 h-2 rounded-full bg-primary/60 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-200 flex-shrink-0" />
                            <p className="text-sm lg:text-base text-foreground font-medium group-hover/item:text-primary transition-colors duration-200">
                              {item.name}
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <span className="text-xs lg:text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                              {item.quantity}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          <span className="text-sm text-muted-foreground">
                            All equipment available and operational
                          </span>
                        </div>
                        <Button
                          onClick={closeModal}
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
