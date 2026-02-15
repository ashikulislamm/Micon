"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Leaf,
  ShoppingCart,
  Hammer,
  Zap,
  Trash2,
  FileCheck,
  Users,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SustainabilityBG from "@/public/Sustainability.jpg";

const practices = [
  {
    icon: Leaf,
    title: "Sustainable Engineering & Design",
    description:
      "Incorporating green building principles, life-cycle cost analysis, and resource optimization into every design.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Procurement",
    description:
      "Selecting materials and equipment based on durability, low environmental footprint, and compliance with global sustainability standards.",
  },
  {
    icon: Hammer,
    title: "Efficient Construction Methodologies",
    description:
      "Utilizing modern techniques such as BIM, modular construction, and prefabrication to reduce waste, improve precision, and lower carbon emissions.",
  },
  {
    icon: Zap,
    title: "Energy & Water Efficiency",
    description:
      "Integrating renewable energy options, high-efficiency systems, and water conservation solutions into project designs.",
  },
  {
    icon: Trash2,
    title: "Waste & Emission Control",
    description:
      "Implementing on-site waste segregation, recycling programs, and emission control strategies during construction.",
  },
  {
    icon: FileCheck,
    title: "Environmental Compliance",
    description:
      "Ensuring strict adherence to national regulations and international environmental management frameworks.",
  },
];

export default function Sustainability() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          label="Environment"
          title="Commitment to Sustainability"
        />

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl text-left mb-12 lg:mb-16"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            At MICON, sustainability is an integral part of our EPC delivery
            model. We design, procure, and construct with a long-term
            vision—balancing performance, cost-efficiency, and environmental
            stewardship. Our goal is to create infrastructure that supports
            economic growth while minimizing environmental impact throughout its
            lifecycle.
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full mb-12 lg:mb-16"
        >
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <Image
              src={SustainabilityBG}
              alt="MICON Sustainability Commitment"
              fill
              className="object-cover"
              priority
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-8 lg:p-12">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                      <Leaf className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-white">
                        Green Building Excellence
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      Building Infrastructure for a Sustainable Tomorrow
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      Every project we deliver integrates environmental responsibility with
                      engineering excellence, creating lasting value for communities and the planet.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-green-500/20 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Practices Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Our EPC Sustainability Practices
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <practice.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {practice.title}
                </h4>

                {/* Description */}
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {practice.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/10 via-primary/5 to-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-foreground">
                Building a Greener Future
              </h4>
            </div>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Every project we deliver reflects our commitment to sustainable
              development and responsible construction. Together with our
              clients and partners, we're creating infrastructure that benefits
              both business and the environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
