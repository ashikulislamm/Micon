"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MissionVission from "@/public/MissionVission.png";
import SectionTitle from "@/components/SectionTitle";

export default function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionTitle
        label="Our Core"
          title="Mission & Vision"
        />

        {/* Mission Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-12 lg:mb-16"
        >
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            Our mission is to advance sustainable industrial infrastructure development by
            delivering efficient, design-build solutions with integrity and expertise.
          </p>

          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            We are dedicated to combining innovation, technical excellence, and modern
            engineering practices to meet the diverse needs of our clients. Through
            collaboration, professionalism, and an unwavering commitment to quality, we strive
            to build enduring structures that support industries, empower businesses, and uplift
            communities.
          </p>

          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            At MICON, every project is more than construction—it is a promise of reliability,
            sustainability, and long-term value creation.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-12 lg:mb-16"
        >
          {/* Background Image - Replace with actual image */}
          <div className="absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={MissionVission} alt="MICON Mission & Vision" fill className="object-cover" />
          </div>
          
          {/* You can replace the above placeholder with actual image like: */}
          {/* <Image
            src="/mission-vision-hero.jpg"
            alt="MICON Construction Vision"
            fill
            className="object-cover"
          /> */}
        </motion.div>

        {/* Vision Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            Our vision is to be the leading force in shaping the future of industrial infrastructure in
            Bangladesh. We are committed to advancing sustainable infrastructure development
            that not only strengthens the nation's growth but also enhances its resilience for future
            generations.
          </p>

          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            We aspire to create world-class industrial and commercial facilities that embody
            innovation, durability, and sustainability. By setting new benchmarks in construction
            excellence, we aim to contribute to the economic transformation of Bangladesh and build
            a brighter future for Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
