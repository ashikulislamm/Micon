"use client";

import { motion } from "framer-motion";
import { Award, Shield, Leaf } from "lucide-react";

export const Certifications = () => {
  const certificates = [
    {
      icon: Award,
      title: "A-Class PWD License",
      subtitle: "Public Works Department Certified",
    },
    {
      icon: Shield,
      title: "BEPZA Certified",
      subtitle: "Export Processing Zone Authority",
    },
    {
        icon: Award,
        title: "BEZA ENLISTMENT CERTIFICATE",
        subtitle: "Bangladesh Economic Zones Authority",
    },
    {
      icon: Leaf,
      title: "LGED Certified Projects",
      subtitle: "Sustainable Green Construction",
    },
    {
        icon: Award,
        title: "MES",
        subtitle: "DGFI SECURITY CLEARANCE",
    },
    {
        icon: Shield,
        title: "MES ENLISTMENT CERTIFICATE",
        subtitle: "Fee Deposite Notice",
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs lg:text-sm font-bold tracking-widest text-foreground/70 uppercase">
            ACCREDITED & CERTIFIED BY
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-foreground/5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-bold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
