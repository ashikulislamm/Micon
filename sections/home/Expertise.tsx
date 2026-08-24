"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES_DATA } from "@/lib/data/services";

export default function Expertise() {
  const topServices = SERVICES_DATA.slice(0, 3);

  return (
    <section className="py-14 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="SPECIALIZATIONS"
          title="Key Industry"
          subtitle="Expertise"
          description="Delivering high-precision engineering solutions across PEB steel buildings, heavy civil RCC structures, and environmental treatment plants."
          alignment="center"
        />

        {/* 3-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {topServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-12 text-center"
        >
          <Link href="/services">
            <Button
              variant="outline"
              className="font-heading text-xs uppercase tracking-wider h-11 px-6 border-primary/50 text-primary hover:bg-primary hover:text-white rounded-full"
            >
              View All 7 Services & Capabilities
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
