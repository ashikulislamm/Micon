"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import LogoWhite from "@/public/Logo_White.png";
import LogoBlack from "@/public/Logo_Black.png";
import { COMPANY_CONTACT } from "@/lib/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const engineeringServices = [
    { label: "PEB Steel Buildings", href: "/services/peb-steel" },
    { label: "Turnkey RCC & Hybrid", href: "/services/turnkey-construction" },
    { label: "Industrial ETP / WTP", href: "/services/treatment-plants" },
    { label: "Precast Boundary Walls", href: "/services/boundary-walls" },
    { label: "Structural Retrofitting", href: "/services/structural-retrofitting" },
    { label: "Internal Roads & Infrastructure", href: "/services/industrial-infrastructure" },
    { label: "BIM 3D Modeling", href: "/services/bim-technology" },
  ];

  const corporateLinks = [
    { label: "Corporate Profile", href: "/about" },
    { label: "Executive Leadership", href: "/about#leadership" },
    { label: "Project Portfolio", href: "/projects" },
    { label: "Machinery & Equipment", href: "/about#machinery" },
    { label: "Sustainability & HSE", href: "/about#sustainability" },
    { label: "Industry Insights & News", href: "/news" },
    { label: "Request Technical Proposal", href: "/quote" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: COMPANY_CONTACT.social.linkedin, label: "LinkedIn" },
    { icon: Facebook, href: COMPANY_CONTACT.social.facebook, label: "Facebook" },
    { icon: Youtube, href: COMPANY_CONTACT.social.youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-card text-card-foreground">
      {/* Main Footer Matrix */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Organization & Certifications (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-36 h-12">
                <Image
                  src={LogoBlack}
                  alt="MICON - Metal Infrastructures & Constructions Ltd"
                  className="object-contain w-full h-full dark:hidden"
                />
                <Image
                  src={LogoWhite}
                  alt="MICON - Metal Infrastructures & Constructions Ltd"
                  className="object-contain w-full h-full hidden dark:block"
                />
              </div>
            </Link>

            <p className="text-xs font-medium text-muted-foreground tracking-wide">
              Established 2018 • Dhaka, Bangladesh
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
              Metal Infrastructures and Constructions Ltd (MICON) is an ISO 9001:2015 certified engineering and EPC contractor specializing in PEB steel superstructures, heavy industrial RCC, and environmental infrastructure.
            </p>
          </div>

          {/* Column 2: Engineering Disciplines (Col 3) */}
          <div className="lg:col-span-3">
            <div className="mb-5">
              <h4 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
                Disciplines
              </h4>
            </div>
            <ul className="space-y-2.5">
              {engineeringServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Projects (Col 2) */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <h4 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
                Corporate
              </h4>
            </div>
            <ul className="space-y-2.5">
              {corporateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engineering Headquarters (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="mb-5">
              <h4 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
                Headquarters
              </h4>
            </div>

            <a
              href={COMPANY_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span className="font-body text-sm leading-relaxed">
                {COMPANY_CONTACT.headOffice.addressLines.join(", ")}
              </span>
            </a>

            <div className="space-y-2 pt-1 font-body text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${COMPANY_CONTACT.hotline.replace(/\s+/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {COMPANY_CONTACT.hotline}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>
                  {COMPANY_CONTACT.businessHours.days}: {COMPANY_CONTACT.businessHours.hours}
                </span>
              </div>
            </div>
            {/* Social Channels */}
            <div className="pt-2">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                Follow Us
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 p-2 rounded-none bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Attribution */}
      <div className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {currentYear} (MICON). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-center md:text-right">
            <span>
              Powered by{" "}
              <Link
                href="https://kodesec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-semibold transition-colors underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-primary"
              >
                Kodesec Solutions
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
