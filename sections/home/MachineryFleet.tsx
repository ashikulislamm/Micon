"use client";

import { motion } from "framer-motion";
import { Cpu, Truck, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const FLEET_ITEMS = [
  {
    icon: Cpu,
    category: "CNC Fabrication",
    title: "CNC Beam Lines & Submerged Arc Welding",
    capacity: "5,000 MT / Month",
    description:
      "Fully automated CNC submerged arc welding and plasma plate cutters for high-precision PEB structural fabrication and tight tolerances.",
  },
  {
    icon: Truck,
    category: "Heavy Rigging",
    title: "Heavy Crane Fleet & Transport Rigging",
    capacity: "50-100 Ton Lifting",
    description:
      "Owned mobile hydraulic cranes, boom trucks, and multi-axle trailers ensuring rapid structural steel and precast erection across Bangladesh.",
  },
  {
    icon: Wrench,
    category: "Concrete Fleet",
    title: "Concrete Batching & Pumping Fleet",
    capacity: "60 m³/hr Output",
    description:
      "Mobile concrete batching plants, transit mixers, and boom pumps for continuous, defect-free deep foundation and superstructure casting.",
  },
  {
    icon: ShieldCheck,
    category: "Geospatial Survey",
    title: "3D Laser Total Stations & GPS Survey",
    capacity: "±1mm Survey Precision",
    description:
      "Advanced Leica laser total stations and GNSS geospatial instruments for exact anchor bolt alignment and foundation coordinates.",
  },
];

export default function MachineryFleet() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="CAPITAL EQUIPMENT"
          title="Owned Heavy"
          subtitle="Machinery & Fleet"
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background p-6 shadow-xs hover: transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-primary uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 bg-primary/10 text-primary font-medium">
                      {item.capacity}
                    </span>
                  </div>

                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 lg:mt-12 text-center">
          <Link href="/about#machinery">
            <Button
              variant="outline"
              size="lg"
              className="font-heading text-xs uppercase tracking-wider h-11 px-6 group cursor-pointer"
            >
              <span>View Complete 35+ Equipment Fleet</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
