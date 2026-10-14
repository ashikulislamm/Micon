"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion } from "@/components/ui/accordion";
import { useToast } from "@/components/ui/toast";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { COMPANY_CONTACT, FAQ_ITEMS } from "@/lib/data/company";

export default function ContactClient() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfoCards = [
    {
      icon: MapPin,
      tag: "ADDRESS",
      title: "Head Office",
      details: [
        COMPANY_CONTACT.headOffice.addressLines[0],
        COMPANY_CONTACT.headOffice.addressLines[1],
      ],
      actionLabel: "View on Google Maps",
      actionHref: COMPANY_CONTACT.googleMapsUrl,
    },
    {
      icon: Phone,
      tag: "PHONE & EMAIL",
      title: "Contact Info",
      details: [
        `Phone: ${COMPANY_CONTACT.officePhone}`,
        `Email: ${COMPANY_CONTACT.email}`,
        `Website: ${COMPANY_CONTACT.website.replace("https://", "")}`,
      ],
      actionLabel: "Call Us",
      actionHref: `tel:${COMPANY_CONTACT.officePhone.replace(/\s+/g, "")}`,
    },
    {
      icon: Clock,
      tag: "WORKING HOURS",
      title: "Office Hours",
      details: [
        COMPANY_CONTACT.businessHours.days,
        COMPANY_CONTACT.businessHours.hours,
        COMPANY_CONTACT.businessHours.closedDays || "Friday - Saturday: Closed",
      ],
      actionLabel: "Get a Quote",
      actionHref: "/quote",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        type: "success",
        title: "Message Sent",
        description: `Thank you, ${formData.fullName}. We have received your message and will get back to you soon.`,
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Symmetrical Hero */}
      <PageHero
        badge="CONTACT US"
        title="Get in Touch"
        highlight="With Us"
        description="Have a question or want to discuss a project? Reach out to our team by phone, email, or visit our head office in Dhaka."
        bgImage="/Contact-bg.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        primaryCta={{
          label: "Get a Quote",
          href: "/quote",
        }}
        secondaryCta={{
          label: "Call Us Now",
          href: `tel:${COMPANY_CONTACT.officePhone.replace(/\s+/g, "")}`,
        }}
      />

      {/* Contact Info Cards Section */}
      <section className="py-12 lg:py-16 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {contactInfoCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 sm:p-8 border border-border shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    <div className="space-y-1.5 font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border">
                    {item.actionHref.startsWith("http") ? (
                      <a
                        href={item.actionHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-xs font-bold uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{item.actionLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : item.actionHref.startsWith("tel:") ? (
                      <a
                        href={item.actionHref}
                        className="font-heading text-xs font-bold uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{item.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={item.actionHref}
                        className="font-heading text-xs font-bold uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{item.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Google Map in One Row */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-card p-6 sm:p-8 lg:p-10 border border-border shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 pb-4 border-b border-border">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
                    SEND A MESSAGE
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                    Contact Us
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-[11px] font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="rounded-none font-body text-xs sm:text-sm h-11"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-[11px] font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-none font-body text-xs sm:text-sm h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-[11px] font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-none font-body text-xs sm:text-sm h-11"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-[11px] font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-none font-body text-xs sm:text-sm h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading text-[11px] font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Write your message or project details here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="rounded-none font-body text-xs sm:text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-heading text-xs uppercase tracking-wider font-semibold rounded-none h-11 px-8"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Column: Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 border border-border bg-card shadow-xs overflow-hidden flex flex-col"
            >
              {/* Map Header Bar */}
              <div className="p-4 sm:p-5 border-b border-border bg-muted/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                    HEAD OFFICE LOCATION
                  </span>
                </div>
                <a
                  href={COMPANY_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-heading text-xs uppercase tracking-wider font-semibold text-primary hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Google Maps Iframe */}
              <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[420px] bg-muted">
                <iframe
                  src={COMPANY_CONTACT.embedMapUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MICON Head Office Location Map"
                />
              </div>

              {/* Map Footer Address Strip */}
              <div className="p-4 border-t border-border bg-muted/20 font-mono text-xs text-muted-foreground flex items-center justify-between gap-2">
                <span className="truncate">
                  {COMPANY_CONTACT.headOffice.addressLines[0]}, {COMPANY_CONTACT.headOffice.addressLines[1]}
                </span>
                <span className="text-primary font-semibold shrink-0 hidden sm:inline">
                  Dhaka 1229
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 lg:py-24 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked"
            subtitle="Questions"
            alignment="center"
          />

          <div className="max-w-3xl mx-auto mt-8">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <CTASection
        title="Need a Quote for Your Project?"
        subtitle="GET STARTED"
        description="Tell us about your project requirements and our team will prepare a clear, detailed estimate for you."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/quote"
        secondaryCtaText="View Our Services"
        secondaryCtaHref="/services"
        showContactBar={true}
      />
    </div>
  );
}
