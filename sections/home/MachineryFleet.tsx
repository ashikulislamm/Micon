"use client";

import { motion } from "framer-motion";
import { Wrench, ShieldAlert, Cpu, Truck, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fleetItems = [
  {
    icon: Cpu,
    title: "CNC Beam Cutting & H-Beam Welding Lines",
    capacity: "5,000 MT / Month",
    description: "Fully automated CNC submerged arc welding lines for ultra-precise PEB structural fabrication.",
  },
  {
    icon: Truck,
    title: "Heavy Crane Fleet & Transport Rigging",
    capacity: "50-100 Ton Lifting Capacity",
    description: "Mobile hydraulic cranes and heavy trailers for rapid structural steel site erection across Bangladesh.",
  },
  {
    icon: Wrench,
    title: "Concrete Batching & Pumping Fleet",
    capacity: "60 m³/hr Continuous Output",
    description: "On-site automated concrete batching plants and boom pumps for heavy foundation pouring.",
  },
  {
    icon: ShieldAlert,
    title: "3D Laser Total Station & GPS Surveying",
    capacity: "Sub-Millimeter Accuracy",
    description: "Advanced geospatial and laser alignment tools for exact anchor bolt and column placement.",
  },
];

export default function MachineryFleet() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <p className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase">
            HEAVY INDUSTRIAL CAPACITY
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            In-House <span className="font-accent italic text-primary">Machinery & Fleet</span>
          </h2>
          <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
            We own and operate high-capacity machinery to ensure 100% schedule reliability and uncompromised structural build quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-1 bg-primary/10 text-primary font-heading text-xs font-semibold rounded-md mb-3">
                  {item.capacity}
                </div>
                <h3 className="font-heading text-base font-bold text-card-foreground mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/about">
            <Button variant="outline" className="font-heading text-xs uppercase tracking-wider h-11 px-6 border-primary/50 text-primary hover:bg-primary hover:text-white">
              View Complete Machinery & Equipment Fleet List
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
