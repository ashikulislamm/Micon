"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES_DATA } from "@/lib/data/services";

export default function ServicesList() {
  return (
    <section className="py-14 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="OUR CAPABILITIES"
          title="7 Core Engineering"
          subtitle="Specializations"
          description="Explore our end-to-end industrial construction capabilities—engineered for speed, structural longevity, and complete BNBC compliance."
          alignment="center"
        />

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
