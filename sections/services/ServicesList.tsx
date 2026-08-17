"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Layers,
  Droplets,
  ShieldCheck,
  Hammer,
  Factory,
  Cpu,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Steel from "@/public/Steel Building/SB_1.png";
import Green from "@/public/Green Buildings/GB_2.jpg";
import Facility from "@/public/Facilities/FC_3.jpg";
import RCC from "@/public/RCC/RCC_1.jpg";

interface Service {
  id: string;
  shortTag: string;
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  timeline: string;
  warranty: string;
  image: string;
  badge: string;
}

const servicesData: Service[] = [
  {
    id: "peb",
    shortTag: "PEB Steel",
    icon: Building2,
    title: "Design-Build PEB Steel Buildings",
    shortDescription:
      "Industry-leading Pre-Engineered Steel Building systems with 60m+ clear span capability and 50% faster erection.",
    description:
      "Our comprehensive Pre-Engineered Building (PEB) systems combine 3D BIM structural modeling with off-site CNC steel fabrication. We deliver optimal clear spans suitable for industrial factories, warehouses, garment manufacturing units, and logistic hubs across Bangladesh under a single design-build contract.",
    features: [
      "Single-source design-build execution eliminating contractor friction",
      "Clear spans up to 60+ meters without intermediate columns",
      "Seismic Zone 4 earthquake resilience & wind load engineering",
      "35-50% faster construction compared to conventional RCC",
      "Thermal insulation & solar-ready high-slope roofing panels",
    ],
    specs: [
      { label: "Clear Span", value: "Up to 60+ Meters" },
      { label: "Steel Grade", value: "ASTM A572 Grade 50 High-Tensile" },
      { label: "Design Code", value: "AISC 360-16 & BNBC 2020" },
      { label: "Erection Speed", value: "50% Faster Than RCC" },
    ],
    timeline: "3 to 6 Months",
    warranty: "25-Year Structural Warranty",
    image: Steel.src,
    badge: "Most Popular",
  },
  {
    id: "rcc",
    shortTag: "RCC Turnkey",
    icon: Layers,
    title: "Turnkey Construction of RCC & Steel Hybrid Structures",
    shortDescription:
      "End-to-end turnkey civil construction combining heavy RCC deep bored piling foundations with structural steel superstructures.",
    description:
      "Integrated turnkey construction services combining high-strength Reinforced Cement Concrete (RCC) foundations, cast-in-situ columns, and structural steel frames under a single contract. Complete project delivery from soil testing to final handover.",
    features: [
      "Hybrid structural solutions combining heavy RCC & PEB steel",
      "Single-source accountability from architectural drafting to handover",
      "Deep bored piling & high-load capacity substructure foundations",
      "In-house quality control and laboratory material certification",
      "Strict compliance with BNBC 2020 & ACI structural standards",
    ],
    specs: [
      { label: "Foundation Type", value: "Cast-in-situ Deep Bored Piles" },
      { label: "Concrete Grade", value: "C30 - C45 High-Strength RCC" },
      { label: "Quality Standard", value: "ISO 9001:2015 Verified" },
      { label: "Safety Record", value: "Zero Incident Protocol" },
    ],
    timeline: "6 to 12 Months",
    warranty: "30-Year Foundation & Structure",
    image: RCC.src,
    badge: "Turnkey Solution",
  },
  {
    id: "etp",
    shortTag: "ETP/WTP",
    icon: Droplets,
    title: "Construction of ETP, WTP, STP & RMS Facilities",
    shortDescription:
      "Turnkey Effluent & Water Treatment Facilities with Zero Liquid Discharge (ZLD) complying with DoE Bangladesh regulations.",
    description:
      "Specialized civil and mechanical construction of Effluent Treatment Plants (ETP), Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Reliable Mechanical Systems (RMS) rooms. Designed with chemical-resistant concrete and automated SCADA controls.",
    features: [
      "Complete DoE Bangladesh Department of Environment compliance",
      "Chemical-resistant RCC tanks with anti-corrosive epoxy coatings",
      "Integrated RMS rooms with centralized mechanical & electrical setups",
      "SCADA automated PLC control for real-time water quality monitoring",
      "Zero Liquid Discharge (ZLD) & industrial water recycling loops",
    ],
    specs: [
      { label: "Plant Capacity", value: "10 m³/hr to 500+ m³/hr" },
      { label: "Compliance", value: "Department of Environment (DoE)" },
      { label: "Tank Coating", value: "Heavy Chemical Epoxy Resin" },
      { label: "Control System", value: "Automated SCADA PLC" },
    ],
    timeline: "4 to 8 Months",
    warranty: "15-Year Environmental Integrity",
    image: Facility.src,
    badge: "Eco-Certified",
  },
  {
    id: "boundary",
    shortTag: "Perimeter Wall",
    icon: ShieldCheck,
    title: "Industrial Boundary Wall Construction",
    shortDescription:
      "Heavy-duty precast & cast-in-situ perimeter security walls with anti-climb provisions and aesthetic finishes.",
    description:
      "Engineered perimeter boundary wall construction providing physical security, site demarcation, and weather-resistant security solutions for industrial factories, export processing zones (BEPZA), and commercial properties.",
    features: [
      "Heavy RCC footing foundations designed for high wind load pressure",
      "Height options customizable from 6ft to 14ft with security caps",
      "Anti-climb razor wire mounts, CCTV conduit, and security lighting",
      "Plastered, painted, or textured architectural exterior finishes",
      "Automated heavy sliding gate integration and guard post structures",
    ],
    specs: [
      { label: "Height Range", value: "6 ft to 14 ft Height" },
      { label: "Wall Thickness", value: "5 inch to 10 inch Heavy RCC" },
      { label: "Security Mesh", value: "Concertina Razor Wire Mounted" },
      { label: "Wind Rating", value: "Up to 240 km/h Wind Resistance" },
    ],
    timeline: "1 to 3 Months",
    warranty: "20-Year Perimeter Protection",
    image: Steel.src,
    badge: "Perimeter Security",
  },
  {
    id: "retro",
    shortTag: "Retrofitting",
    icon: Hammer,
    title: "Civil & Steel Structure Retrofitting Works",
    shortDescription:
      "Structural rehabilitation, carbon-fiber jacketing, and seismic strengthening for existing factories and commercial buildings.",
    description:
      "Expert structural health auditing, retrofitting, and load capacity upgrading for aging or damaged RCC and steel facilities. We apply advanced carbon fiber reinforcement, concrete column jacketing, and steel member replacement.",
    features: [
      "Non-destructive testing (NDT), ultrasonic & core load testing",
      "Carbon fiber reinforced polymer (CFRP) wrapping & jacketing",
      "Structural steel beam & column flange plate reinforcement",
      "Seismic retrofitting for Zone 4 earthquake compliance",
      "Official safety certification & regulatory compliance approval",
    ],
    specs: [
      { label: "Assessment Tech", value: "NDT Ultrasonic & Core Testing" },
      { label: "Strength Upgrade", value: "Up to 50%+ Load Enhancement" },
      { label: "Materials", value: "High-Modulus CFRP & Steel Plates" },
      { label: "Approval", value: "Certified Structural Audit" },
    ],
    timeline: "2 to 4 Months",
    warranty: "15-Year Structural Enhancement",
    image: RCC.src,
    badge: "Rehabilitation Expert",
  },
  {
    id: "infra",
    shortTag: "Utility Infrastructure",
    icon: Factory,
    title: "Industrial Utility Infrastructure Construction",
    shortDescription:
      "Complete civil infrastructure including heavy heavy-duty roads, underground drainage, electrical substations, and gas pipelines.",
    description:
      "Comprehensive utility infrastructure development for manufacturing plants, industrial parks, and EPZ zones. We build internal heavy-vehicle road networks, underground storm water drainage, electrical substations, and utility distribution grids.",
    features: [
      "Heavy-duty RCC pavement & asphalt roads for 50T container trucks",
      "Underground storm water drainage & sewage retention networks",
      "Substation civil foundations, transformer yards & cable trenches",
      "Fire hydrant loop piping & high-pressure compressed air distribution",
      "Water supply networks with underground reservoir tanks",
    ],
    specs: [
      { label: "Road Capacity", value: "50-100 Ton Axle Load Rating" },
      { label: "Drainage Type", value: "Covered RCC Box Culverts" },
      { label: "Fire Piping", value: "NFPA Standard Hydrant Loop" },
      { label: "Substation Civil", value: "Transformer Base & Trenches" },
    ],
    timeline: "3 to 6 Months",
    warranty: "25-Year Utility Infrastructure",
    image: Green.src,
    badge: "Infrastructure",
  },
  {
    id: "bim",
    shortTag: "BIM & Automation",
    icon: Cpu,
    title: "BIM, Modular Construction & Automation",
    shortDescription:
      "Building Information Modeling (BIM LOD-400), 3D clash detection, off-site modular fabrication, and CNC automated welding.",
    description:
      "Cutting-edge construction technology integration using Building Information Modeling (BIM LOD-400), off-site modular pre-fabrication, and automated CNC beam fabrication. We eliminate field clashes and reduce construction timelines significantly.",
    features: [
      "Full BIM LOD-400 digital twin modeling from engineering to handover",
      "3D clash detection eliminating field rework & structural conflicts",
      "Off-site modular component fabrication for rapid site assembly",
      "Automated CNC beam cutting & submerged arc welding systems",
      "Digital asset management for long-term facility maintenance",
    ],
    specs: [
      { label: "BIM Standard", value: "LOD-400 3D Digital Twin" },
      { label: "Accuracy", value: "100% Clash-Free Digital Model" },
      { label: "Fabrication", value: "Automated CNC Robotic Welding" },
      { label: "Time Savings", value: "Up to 40% Field Time Reduction" },
    ],
    timeline: "Integrated Across Project Lifecycle",
    warranty: "Lifecycle Digital Model",
    image: Facility.src,
    badge: "Technology Leader",
  },
];

export default function ServicesList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const currentService = servicesData[currentIndex];
  const Icon = currentService.icon;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-accent text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 uppercase"
          >
            CAPABILITIES & SPECIALIZATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Complete <span className="font-accent italic text-primary">Engineering</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            Explore our specialized turnkey construction capabilities. Select any service tab below to inspect detailed specifications.
          </motion.p>
        </div>

        {/* Quick Tab Selector Strip 
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto scrollbar-none gap-2 pb-4 mb-8">
          {servicesData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`font-heading text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl whitespace-nowrap transition-all cursor-pointer border ${
                currentIndex === idx
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              0{idx + 1}. {item.shortTag}
            </button>
          ))}
        </div>*/}

        {/* Hero Slider Card Showcase */}
        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Image Side */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[300px]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="font-heading px-3 py-1 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-xs">
                    {currentService.badge}
                  </span>
                </div>
              </div>

              {/* Right Details Side */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        0{currentIndex + 1} / 0{servicesData.length}
                      </span>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                        aria-label="Previous Service"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                        aria-label="Next Service"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-card-foreground leading-snug mb-2">
                    {currentService.title}
                  </h3>

                  <p className="font-accent text-sm font-semibold text-primary mb-3">
                    {currentService.shortDescription}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {currentService.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    {currentService.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs font-body text-card-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <Button
                    onClick={() => setSelectedService(currentService)}
                    className="font-heading text-xs uppercase tracking-wider h-11 px-5"
                  >
                    View Detailed Specifications
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Link href={`/quote?service=${currentService.id}`}>
                    <Button variant="outline" className="font-heading text-xs uppercase tracking-wider h-11 px-5 border-primary/50 text-primary hover:bg-primary hover:text-white">
                      Request Proposal
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Detailed Spec Modal Drawer */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border shadow-2xl p-6 sm:p-8 space-y-6 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 pr-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {(() => {
                      const ModalIcon = selectedService.icon;
                      return <ModalIcon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="font-accent text-xs font-semibold text-primary uppercase tracking-wider">
                      TECHNICAL SPECIFICATIONS
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-card-foreground">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/40 p-4 rounded-xl border border-border">
                  {selectedService.specs.map((sp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-body text-[11px] text-muted-foreground uppercase tracking-wider">
                        {sp.label}
                      </div>
                      <div className="font-heading text-xs sm:text-sm font-bold text-card-foreground">
                        {sp.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Full Features List */}
                <div className="space-y-3">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-card-foreground">
                    Engineering Scope & Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-body text-card-foreground bg-card p-2.5 rounded-lg border border-border">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline & Warranty */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 p-3.5 bg-primary/5 rounded-xl border border-primary/20">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <div className="font-body text-[11px] text-muted-foreground uppercase">Estimated Timeline</div>
                      <div className="font-heading text-xs sm:text-sm font-bold text-foreground">{selectedService.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 bg-primary/5 rounded-xl border border-primary/20">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <div className="font-body text-[11px] text-muted-foreground uppercase">Warranty Coverage</div>
                      <div className="font-heading text-xs sm:text-sm font-bold text-foreground">{selectedService.warranty}</div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground">
                    Ready to build? Consult our principal engineers for custom site specs.
                  </p>
                  <Link href={`/quote?service=${selectedService.id}`} className="w-full sm:w-auto">
                    <Button className="font-heading text-xs uppercase tracking-wider h-11 px-6 w-full sm:w-auto">
                      Get Tailored Proposal <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
