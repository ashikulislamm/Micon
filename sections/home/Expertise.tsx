"use client";

import { motion } from "framer-motion";
import { Building2, Layers, Wrench, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import BG from "@/public/hero-bg.jpg";

const expertiseData = [
  {
    icon: Building2,
    title: "PEB Steel Buildings",
    description:
      "Advanced Pre-Engineered Building systems for factories, warehouses, and industrial facilities. Fast construction, cost-effective, and highly durable.",
    image: BG.src,
    link: "/services/peb-steel",
  },
  {
    icon: Layers,
    title: "Turnkey RCC Structures",
    description:
      "Complete Reinforced Cement Concrete construction services from foundation to finishing. Engineered for strength and longevity.",
    image: BG.src,
    link: "/services/rcc-structures",
  },
  {
    icon: Wrench,
    title: "ETP/WTP Facilities",
    description:
      "Specialized construction of Effluent Treatment Plants and Water Treatment Plants with environmental compliance and efficiency.",
    image: BG.src,
    link: "/services/etp-wtp",
  },
  {
    icon: Factory,
    title: "Sustainable Green Construction",
    description:
      "LEED-certified factory buildings and eco-friendly construction solutions that reduce environmental impact while maximizing efficiency.",
    image: BG.src,
    link: "/services/green-construction",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 lg:mb-4 uppercase"
            >
              SPECIALIZATION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3"
            >
              Key Industry Expertise
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-primary"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm lg:text-base text-foreground/70 max-w-md leading-relaxed"
          >
            Delivering high-precision engineering solutions across diverse
            industrial sectors with a focus on durability and efficiency.
          </motion.p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-foreground/5"
              >
                {/* Image */}
                <div className="relative w-full h-48 lg:h-56 overflow-hidden bg-foreground/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <Link href="/services">
            <Button size="lg" className="group text-base font-semibold px-8">
              Explore Our All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
