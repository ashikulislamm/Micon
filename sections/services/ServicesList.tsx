"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Layers,
  Droplets,
  ShieldCheck,
  Hammer,
  Shield,
  Factory,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Steel from "@/public/Steel Building/SB_1.png";
import Green from "@/public/Green Buildings/GB_2.jpg";
import Facility from "@/public/Facilities/FC_3.jpg";
import RCC from "@/public/RCC/RCC_1.jpg";

interface Service {
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
  link: string;
}

const servicesData: Service[] = [
  {
    icon: Building2,
    title: "Design-Build Construction of Pre-Engineered Steel Buildings",
    shortDescription:
      "Industry-leading PEB solutions with integrated design-build approach for rapid deployment and maximum efficiency.",
    description:
      "Our comprehensive Pre-Engineered Building systems combine design excellence with construction expertise. We deliver optimal structural integrity through engineered steel frameworks suitable for factories, warehouses, and large-scale industrial facilities. Our design-build methodology ensures seamless project execution from concept to completion.",
    features: [
      "Complete design-build approach for streamlined delivery",
      "Clear span up to 60+ meters without intermediate columns",
      "Seismic-resistant design with wind load calculations",
      "35% faster construction compared to conventional methods",
      "Energy-efficient roofing and insulation systems",
    ],
    image: Steel.src,
    badge: "Most Popular",
    link: "/services/peb-steel",
  },
  {
    icon: Layers,
    title: "Turnkey Construction of Both RCC and Steel Structures",
    description:
      "Complete end-to-end construction services combining both Reinforced Cement Concrete and Steel structural systems. Our turnkey solutions encompass design, engineering, procurement, construction, and commissioning for hybrid or standalone structures, offering clients a single point of responsibility.",
    shortDescription:
      "Comprehensive turnkey solutions integrating RCC and steel construction with complete project management.",
    features: [
      "Hybrid structural solutions combining RCC and steel",
      "Single-source accountability from design to handover",
      "Foundation to finishing - complete construction services",
      "Optimized structural design for cost-effectiveness",
      "In-house quality control and material certification",
    ],
    image: RCC.src,
    badge: "Turnkey Solution",
    link: "/services/turnkey-construction",
  },
  {
    icon: Droplets,
    title: "Construction of ETP, WTP, STP, and RMS Rooms",
    description:
      "Specialized construction services for Effluent Treatment Plants, Water Treatment Plants, Sewage Treatment Plants, and Reliable Mechanical Systems rooms. We deliver fully integrated environmental compliance facilities with chemical-resistant infrastructure, automated controls, and sustainable treatment technologies.",
    shortDescription:
      "Complete environmental facility construction with ETP, WTP, STP, and mechanical systems integration.",
    features: [
      "Multi-disciplinary treatment plant construction expertise",
      "Chemical-resistant concrete and specialized coatings",
      "RMS rooms with mechanical and electrical integration",
      "Automated monitoring and SCADA systems",
      "Zero Liquid Discharge (ZLD) and environmental compliance",
    ],
    image: Facility.src,
    badge: "Eco-Certified",
    link: "/services/treatment-plants",
  },
  {
    icon: ShieldCheck,
    title: "Boundary Wall Construction",
    description:
      "Professional boundary wall construction services providing security, demarcation, and aesthetic perimeter solutions for industrial facilities. Our boundary walls are engineered for durability, security, and compliance with local regulations, featuring options for decorative finishes, security enhancements, and long-term weather resistance.",
    shortDescription:
      "Robust industrial boundary wall construction with security features and aesthetic finishes.",
    features: [
      "Reinforced concrete foundation and structural design",
      "Height customization from 6ft to 12ft or more",
      "Security enhancements - barbed wire, CCTV mounts",
      "Decorative options with plastering and painting",
      "Gate integration and access control systems",
    ],
    image: Steel.src,
    badge: "Security & Aesthetics",
    link: "/services/boundary-wall",
  },
  {
    icon: Hammer,
    title: "Civil and Steel Structure Retrofitting Works",
    description:
      "Expert retrofitting and rehabilitation services to strengthen, modernize, and extend the lifespan of existing civil and steel structures. We employ advanced assessment techniques, structural strengthening methods, and code compliance upgrades to ensure safety, functionality, and regulatory adherence for aging or damaged structures.",
    shortDescription:
      "Structural rehabilitation and strengthening services for existing RCC and steel buildings.",
    features: [
      "Structural health assessment and load testing",
      "Carbon fiber reinforcement and jacketing techniques",
      "Steel member strengthening and replacement",
      "Seismic retrofitting for enhanced earthquake resistance",
      "Code compliance upgrades and regulatory approvals",
    ],
    image: RCC.src,
    badge: "Rehabilitation Expert",
    link: "/services/retrofitting",
  },
  {
    icon: Factory,
    title: "Industrial Utility Infrastructure Construction",
    description:
      "Comprehensive industrial utility infrastructure development including roads, drainage systems, electrical distribution networks, water supply lines, compressed air systems, and sewage networks. We create robust utility backbones that support seamless industrial operations with reliability and efficiency.",
    shortDescription:
      "Complete utility infrastructure development for industrial complexes and manufacturing facilities.",
    features: [
      "Internal road networks with heavy-duty pavement design",
      "Underground drainage and stormwater management systems",
      "Electrical substation and distribution infrastructure",
      "Water supply networks with fire hydrant systems",
      "Compressed air, steam, and gas distribution lines",
    ],
    image: Green.src,
    badge: "Infrastructure",
    link: "/services/utility-infrastructure",
  },
  {
    icon: Cpu,
    title: "Implementation of BIM, Modular Construction, and Automation Technologies",
    description:
      "Cutting-edge technology integration services featuring Building Information Modeling (BIM), modular construction techniques, and automated construction processes. We leverage Industry 4.0 technologies to enhance project accuracy, reduce construction timelines, minimize waste, and deliver data-driven project insights throughout the construction lifecycle.",
    shortDescription:
      "Advanced construction technology implementation with BIM, modular systems, and automation for next-gen projects.",
    features: [
      "Full BIM implementation from design through operations",
      "3D modeling, clash detection, and virtual construction",
      "Off-site modular fabrication for faster assembly",
      "Automated construction robotics and machinery",
      "Digital twin technology for lifecycle management",
    ],
    image: Facility.src,
    badge: "Technology Leader",
    link: "/services/technology",
  },
];

export default function ServicesList() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 lg:mb-4 uppercase"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Complete Engineering Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          />
        </div>

        {/* Services */}
        <div className="space-y-16 lg:space-y-24">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        {service.badge}
                      </div>
                    </div>
                    {/* Decorative Element */}
                    <div
                      className={`hidden lg:block absolute top-8 ${
                        isEven ? "-right-8" : "-left-8"
                      } w-32 h-32 bg-primary/5 rounded-2xl -z-10`}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-base lg:text-lg text-primary font-semibold mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Full Description */}
                  <p className="text-sm lg:text-base text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-foreground/70"
                        >
                          <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.link}>
                    <Button
                      size="lg"
                      className="group text-base font-semibold"
                    >
                      View Detailed Specifications
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
