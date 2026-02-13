"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BG from "@/public/Contact-bg.png";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Ka-6/A, 3 Floor, Jagannathpur",
        "Vatara , Dhaka - 1229, Bangladesh",
        "+880 1812 345 678",
        "info@micon.com.bd",
      ],
    },
    {
      icon: Phone,
      title: "Contact Info",
      details: [
        "Office: +880 2 8956 234",
        "Mobile: +880 1712 345 678",
        "Hotline: +880 1812 345 678",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday", "9:00 AM - 7:00 PM", "Friday - Saturday : Closed"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `url(${BG.src})`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
              Connect with MICON
            </h1>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed">
              Building excellence through vision. We reflect a profound
              commitment to innovation, quality, and integrity. Let&#39;s create
              the next landmark together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-20 lg:-mt-24 relative z-20">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 lg:p-8 shadow-xl border border-foreground/5"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-foreground/70 leading-relaxed"
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

      {/* Map Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.1368146757171!2d90.42338488590124!3d23.811876131183094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75a1d752763%3A0xdf5f392866a564c8!2sMetal%20Infrastructures%20and%20Constructions%20Ltd!5e0!3m2!1sen!2sbd!4v1770461386578!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MICON Office Location"
            />
            {/* View on Google Maps overlay button */}
            <div className="absolute bottom-4 right-4 z-10">
              <Link
                href="https://maps.app.goo.gl/pSfnGNKccW2VCfhQ8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="sm" className="shadow-lg">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Social Media */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Send us a Message
              </h2>
              <p className="text-sm text-foreground/60 mb-8">
                Have a specific project idea? Let us easily understand your
                message! Fill out the form below and our 24/7 Always on hand to
                support. We&#39;re with 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry - Industrial Warehouse"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Describe your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  SEND INQUIRY
                </Button>
              </form>
            </motion.div>

            {/* Social Media & Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Connect via Social Media
                </h3>
                <div className="space-y-4">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="flex items-start gap-4 p-4 rounded-lg border border-foreground/10 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#0A66C2] rounded flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        LinkedIn
                      </h4>
                      <p className="text-sm text-foreground/60">
                        Stay updated with industry insights
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="flex items-start gap-4 p-4 rounded-lg border border-foreground/10 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#1877F2] rounded flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Facebook
                      </h4>
                      <p className="text-sm text-foreground/60">
                        Follow us for latest Company news
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2">
                  Emergency Support?
                </h4>
                <p className="text-sm text-foreground/60 mb-4">
                  Need immediate technical assistance with structural issue?
                  Call us 24/7.
                </p>
                <a
                  href="tel:+8801812345678"
                  className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +880 181 234 5678
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm lg:text-base text-foreground/60">
              Get quick answers to common inquiries about our industrial
              construction processes, safety standards, and project management.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is the average timeline for a PEB project?",
                answer:
                  "Pre-Engineered Building projects typically take 4-6 months from design approval to completion, depending on the size and complexity.",
              },
              {
                question: "Are MICON buildings LEED certified?",
                answer:
                  "Yes, we specialize in LEED-certified construction and can help you achieve various certification levels based on your sustainability goals.",
              },
              {
                question: "Do you provide turnkey RCC solutions?",
                answer:
                  "Absolutely. We offer complete turnkey RCC construction services from foundation to finishing, including all MEP systems.",
              },
              {
                question:
                  "How do you handle project safety and quality control?",
                answer:
                  "We maintain strict ISO 9001:2015 quality standards and have comprehensive safety protocols with regular third-party audits.",
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg border border-foreground/10 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-foreground/5 transition-colors">
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-primary transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
