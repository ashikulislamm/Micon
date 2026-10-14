"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Shield } from "lucide-react";
import { COMPANY_CONTACT } from "@/lib/data/company";

export default function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border"
      >
        <h3 className="font-heading text-xl font-bold text-foreground mb-6">
          Contact Details
        </h3>

        <div className="space-y-6">
          {/* Office Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="font-heading text-xs font-bold text-primary uppercase tracking-wider mb-1">
                {COMPANY_CONTACT.headOffice.title}
              </p>
              <p className="font-body text-sm text-card-foreground leading-relaxed">
                {COMPANY_CONTACT.headOffice.addressLines[0]}
                <br />
                {COMPANY_CONTACT.headOffice.addressLines[1]}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Mail className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="font-heading text-xs font-bold text-primary uppercase tracking-wider mb-1">
                EMAIL DIRECTORS
              </p>
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="font-body text-sm text-card-foreground hover:text-primary transition-colors"
              >
                {COMPANY_CONTACT.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="font-heading text-xs font-bold text-primary uppercase tracking-wider mb-1">
                ENGINEERING HOTLINE
              </p>
              <a
                href={`tel:${COMPANY_CONTACT.hotline.replace(/\s+/g, "")}`}
                className="font-body text-sm font-semibold text-card-foreground hover:text-primary transition-colors"
              >
                {COMPANY_CONTACT.hotline}
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border bg-muted">
            <iframe
              src={COMPANY_CONTACT.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MICON Head Office Map"
            />
            <a
              href={COMPANY_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 left-2 bg-card/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-heading font-semibold text-foreground border border-border shadow-md hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </motion.div>

      {/* Safety & Quality Certified Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-primary/5 rounded-2xl p-6 border border-primary/20"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center border border-primary/30">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-1.5">
              ISO 9001:2015 & BNBC Compliant
            </h4>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Every proposal is engineered in strict accordance with BNBC 2020 seismic guidelines and ISO 9001 quality protocols.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
