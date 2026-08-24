"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion } from "@/components/ui/accordion";
import { useToast } from "@/components/ui/toast";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { COMPANY_CONTACT, FAQ_ITEMS } from "@/lib/data/company";
import Link from "next/link";
import BG from "@/public/Contact-bg.png";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfoCards = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        COMPANY_CONTACT.headOffice.addressLines[0],
        COMPANY_CONTACT.headOffice.addressLines[1],
        COMPANY_CONTACT.headOffice.phone,
        COMPANY_CONTACT.headOffice.email,
      ],
    },
    {
      icon: Phone,
      title: "Contact Info",
      details: [
        `Office: ${COMPANY_CONTACT.officePhone}`,
        `Mobile: ${COMPANY_CONTACT.mobile}`,
        `Hotline: ${COMPANY_CONTACT.hotline}`,
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        COMPANY_CONTACT.businessHours.days,
        COMPANY_CONTACT.businessHours.hours,
        COMPANY_CONTACT.businessHours.closedDays || "",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        type: "success",
        title: "Inquiry Sent Successfully!",
        description: `Thank you ${formData.fullName}, our engineering team will get back to you within 24 hours.`,
      });
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Symmetrical Dark Page Hero */}
      <PageHero
        badge="GET IN TOUCH"
        title="Connect with"
        highlight="MICON Engineering"
        description="Building engineering excellence through vision and precision. Reach out to our structural experts to discuss your upcoming project."
        bgImage={BG.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Contact Cards Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-40 lg:-mt-48 relative z-20">
            {contactInfoCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 lg:p-8 shadow-xl border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1.5">
                    {item.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <iframe
              src={COMPANY_CONTACT.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MICON Office Location"
            />
            <div className="absolute bottom-4 right-4 z-10">
              <Link
                href={COMPANY_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="shadow-lg font-heading text-xs uppercase">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form & Social Contact Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-xs"
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Send us a Message
              </h2>
              <p className="font-body text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
                Have a specific project inquiry? Fill out the form below and our engineering team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-heading text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Engr. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="PEB Steel Factory Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Describe your project specifications, area requirements, location, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full font-body text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto font-heading text-xs uppercase tracking-wider font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
                </Button>
              </form>
            </motion.div>

            {/* Social & Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Connect via Social Media
                </h3>
                <div className="space-y-4">
                  <Link
                    href={COMPANY_CONTACT.social.linkedin}
                    target="_blank"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group bg-card"
                  >
                    <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground mb-0.5">
                        LinkedIn Official Page
                      </h4>
                      <p className="font-body text-xs text-muted-foreground">
                        Stay updated with engineering insights & corporate news
                      </p>
                    </div>
                  </Link>

                  <Link
                    href={COMPANY_CONTACT.social.facebook}
                    target="_blank"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group bg-card"
                  >
                    <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground mb-0.5">
                        Facebook Community
                      </h4>
                      <p className="font-body text-xs text-muted-foreground">
                        Follow site progress & project handovers
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Emergency Technical Support */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-3">
                <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                  Emergency Technical Support?
                </h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Require immediate technical assistance with structural issue or site emergency? Call our hotline 24/7.
                </p>
                <a
                  href={`tel:${COMPANY_CONTACT.emergencyPhone}`}
                  className="inline-flex items-center gap-2 font-heading text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY_CONTACT.emergencyPhone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 lg:py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="FREQUENTLY ASKED QUESTIONS"
            title="Questions About Our"
            subtitle="Construction Process?"
            description="Get quick answers to common inquiries regarding timelines, LEED compliance, safety standards, and project estimates."
            alignment="center"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </div>
  );
}
