"use client";

import { motion } from "framer-motion";
import { Shield, Settings, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Upholding the highest safety standards in every construction site. We believe zero-harm is the only acceptable goal for our workforce.",
  },
  {
    icon: Settings,
    title: "Technical Precision",
    description:
      "Expert engineering with meticulous attention to detail. Every rivet, weld, and beam is calibrated for maximum structural integrity.",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    description:
      "Eco-friendly building practices for a greener future. We optimize material usage to reduce waste and carbon footprint.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="mb-4">
            <span className="text-primary text-sm lg:text-base font-semibold tracking-wider uppercase">
              FOUNDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Card */}
              <div className="h-full bg-background p-8 lg:p-10 rounded-lg hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
