"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Layers, Droplets, Cpu, Hammer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

export default function Expertise() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="ENGINEERING DISCIPLINES"
          title="Engineering &"
          subtitle="Industrial Capabilities"
          alignment="center"
        />

        {/* Architectural Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Bento Item 1: Featured Major Module (Col span 7) - PEB Steel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover: transition-colors shadow-xs"
          >
            {/* Ambient Background Visual */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Flagship Discipline • Clear Span
                </span>
                <span className="text-[11px] px-2.5 py-0.5 bg-primary/10 text-primary font-medium">
                  AISC 360-16 / BNBC 2020
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                  Design-Build PEB Steel Buildings
                </h3>
              </div>

              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
                Industry-leading Pre-Engineered Building (PEB) systems engineered with 60m+ clear spans without intermediate columns. 3D BIM detailing paired with automated CNC fabrication for 50% faster completion.
              </p>

              {/* Engineering Spec Matrix Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 my-2 font-mono text-xs">
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase">Clear Span</span>
                  <span className="font-semibold text-foreground">Up to 60m+</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase">Steel Grade</span>
                  <span className="font-semibold text-foreground">ASTM A572 Gr50</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase">Speed Gain</span>
                  <span className="font-semibold text-foreground">50% vs RCC</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase">Warranty</span>
                  <span className="font-semibold text-foreground">25 Years</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link
                href="/services/peb-steel"
                className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors"
              >
                <span>Inspect PEB Engineering Specs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Item 2: Turnkey RCC Civil (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover: transition-colors shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Civil Foundations &amp; Hybrid
                </span>
                <span className="text-[11px] px-2.5 py-0.5 bg-muted text-muted-foreground">
                  ACI 318
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Turnkey RCC Superstructures
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                End-to-end turnkey civil construction—from soil testing and deep bored piling to cast-in-situ RCC framing and hybrid steel structures.
              </p>

              <div className="space-y-2 pt-4 font-mono text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Foundations:</span>
                  <span className="text-foreground font-medium">Cast-in-situ Deep Bored Piles</span>
                </div>
                <div className="flex justify-between">
                  <span>Concrete Grade:</span>
                  <span className="text-foreground font-medium">C30 - C45 High Strength</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality Protocol:</span>
                  <span className="text-foreground font-medium">ISO 9001:2015 Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/services/turnkey-construction"
                className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors"
              >
                <span>Civil Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Item 3: Environmental Treatment Facilities (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-4 bg-card p-6 flex flex-col justify-between group hover: transition-colors shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Environmental EPC
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">DoE Compliant</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  ETP / WTP &amp; RMS Facilities
                </h4>
              </div>

              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                EPC execution of biological/chemical Effluent Treatment Plants and Water Treatment Plants with SCADA PLC controls and Zero Liquid Discharge (ZLD) integration.
              </p>

              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>• Capacity: 50 to 10,000+ m³/day</div>
                <div>• Automated SCADA / Touchscreen PLC</div>
              </div>
            </div>

            <div className="pt-5 mt-4">
              <Link
                href="/services/treatment-plants"
                className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors"
              >
                <span>Inspect ETP Plants</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Item 4: BIM 3D Modeling (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-1 lg:col-span-4 bg-card p-6 flex flex-col justify-between group hover: transition-colors shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Digital Twin &amp; BIM Detailing
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">ISO 19650</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  BIM 3D Structural Modeling
                </h4>
              </div>

              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                Tekla Structures and Revit BIM Level 2 structural digital twins. Automated clash detection between steel framing, RCC, and MEP prevents site rework.
              </p>

              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>• LOD 400 Fabrication Level Precision</div>
                <div>• 98% Field Clash Reduction</div>
              </div>
            </div>

            <div className="pt-5 mt-4">
              <Link
                href="/services/bim-technology"
                className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors"
              >
                <span>BIM Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Item 5: Structural Retrofitting & Audit (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-4 bg-card p-6 flex flex-col justify-between group hover: transition-colors shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Structural Strengthening
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">Accord / RSC</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Hammer className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  Structural Strengthening &amp; Audit
                </h4>
              </div>

              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                NDT structural audits, carbon fiber (CFRP) wrapping, and concrete column jacketing to restore integrity and upgrade load capacities for compliance audits.
              </p>

              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>• NDT Core Test &amp; UPV Verification</div>
                <div>• Up to +50% Load Capacity Upgrade</div>
              </div>
            </div>

            <div className="pt-5 mt-4">
              <Link
                href="/services/structural-retrofitting"
                className="group/link font-heading text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-primary/80 transition-colors"
              >
                <span>Retrofitting Specs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* View All Disciplines Dock */}
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="font-heading text-xs uppercase tracking-wider h-11 px-8 group cursor-pointer"
            >
              <span>Explore All 7 Engineering Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
