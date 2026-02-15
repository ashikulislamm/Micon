"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: Building2,
    title: "Civil Expert Crafting",
    description:
      "Master-level concrete work and structural engineering for industrial and commercial buildings with precision and durability.",
    image: "/hero-bg.jpg",
  },
  {
    icon: Wrench,
    title: "Heavy Machinery",
    description:
      "State-of-the-art equipment fleet including excavators, cranes, and earthmoving machinery for large-scale projects.",
    image: "/hero-bg.jpg",
    featured : true,
  },
  {
    icon: Leaf,
    title: "Soil Technology",
    description:
      "Advanced geotechnical analysis and soil stabilization techniques ensuring strong foundations and environmental sustainability.",
    image: "/hero-bg.jpg",
    featured: false,
  },
];

export default function TechnicalCapacity() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionTitle
          label="Capabilities"
          title="Technical Capacity"
          description="Operating a fleet of advanced machinery and a technically trained staff allows us to execute complex projects with unmatched efficiency and reliability."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Card Container */}
              <div
                className={`relative h-full min-h-[320px] flex flex-col justify-end p-6 lg:p-8 ${
                  service.featured ? "bg-primary" : "bg-foreground"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 ${
                    service.featured
                      ? "bg-primary/90"
                      : "bg-gradient-to-t from-foreground via-foreground/95 to-foreground/80"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <service.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-white/90 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <button className="inline-flex items-center text-sm font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
