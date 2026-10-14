import { Metadata } from "next";
import ContactClient from "@/sections/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | MICON",
  description:
    "Get in touch with Metal Infrastructures & Constructions Ltd. (MICON) at our Head Office in Vatara, Gulshan, Dhaka. Call +880 1844 509 800 or email noman@miconbd.com.",
  keywords: [
    "contact MICON",
    "MICON office address",
    "construction company contact Dhaka",
    "Vatara Gulshan head office",
    "PEB contractor phone Bangladesh",
  ],
  openGraph: {
    title: "Contact Us | MICON",
    description:
      "Get in touch with Metal Infrastructures & Constructions Ltd. (MICON) for project inquiries and general questions.",
    url: "https://www.miconbd.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
