import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with MICON",
  description:
    "Contact MICON for construction inquiries, project consultations, and engineering services. Our office is in Dhaka, Bangladesh. Call us at +880 1812-345-678 or email info@micon.com.bd",
  keywords: [
    "contact MICON",
    "construction company contact",
    "engineering consultation Bangladesh",
    "MICON office Dhaka",
    "construction inquiry",
  ],
  openGraph: {
    title: "Contact MICON - Construction & Engineering Services",
    description:
      "Get in touch with Bangladesh's leading construction company. Office in Dhaka with expert consultation available.",
    url: "https://www.micon.com.bd/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
