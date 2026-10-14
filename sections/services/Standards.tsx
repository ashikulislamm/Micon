"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const credentials = [
  { title: "ISO 9001:2015", detail: "Quality management" },
  { title: "PWD Class-A", detail: "Enlisted contractor, Dhaka district" },
  { title: "MES", detail: "Enlistment with DGFI security clearance" },
  { title: "BEPZA", detail: "Certified for EPZ works" },
  { title: "BEZA", detail: "Enlistment certificate" },
  { title: "LGED", detail: "Registered contractor" },
];

export default function Standards() {
  return (
    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <SectionTitle
              label="Credentials"
              title="Licensed and"
              subtitle="Certified"
              className="mb-6 lg:mb-0"
            />
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm lg:-mt-6">
              Full legal compliance and industry recognition for engineering, procurement and construction.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-card p-6 shadow-xs"
              >
                <h3 className="font-mono text-lg font-bold text-foreground">{item.title}</h3>
                <p className="font-body text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
