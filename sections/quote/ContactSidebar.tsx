"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Shield } from "lucide-react";

export default function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-border"
      >
        <h3 className="text-xl font-bold text-foreground mb-6">Contact Details</h3>

        <div className="space-y-6">
          {/* Office Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase mb-1">
                BASHUNDHARA OFFICE
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Block C, Bashurdhara R/A, Dhaka<br />
                1229, Bangladesh
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase mb-1">
                EMAIL US
              </p>
              <a
                href="mailto:info@micon.com.bd"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                info@micon.com.bd
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase mb-1">
                CALL US
              </p>
              <a
                href="tel:+8801234567890"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                +880 1234-567890
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6">
          <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564920567891!2d90.42668!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d8342195df%3A0xf58ef93431f67382!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <a
              href="https://maps.google.com/?q=Bashundhara,Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 left-2 bg-white px-3 py-1.5 rounded text-xs font-medium text-foreground shadow-md hover:shadow-lg transition-shadow flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              View on Google Maps
            </a>
          </div>
        </div>
      </motion.div>

      {/* Safety Certified Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-primary/5 rounded-lg p-6 border border-primary/20"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div>
            <h4 className="text-base font-bold text-foreground mb-2">Safety Certified</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All MICON projects adhere to international ISO and OSHA standards.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
