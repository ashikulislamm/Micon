"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver high-quality, safe, and sustainable industrial and civil construction projects that exceed client expectations and contribute to infrastructural growth.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be recognized as Bangladesh's leading construction company by setting benchmarks in innovation, safety, and sustainable infrastructure development that promotes national progress and prosperity.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full bg-background border-l-4 border-primary p-8 lg:p-10 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
