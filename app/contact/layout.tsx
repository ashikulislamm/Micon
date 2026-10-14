import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with MICON",
  description:
    "Contact MICON for construction inquiries, project consultations, and engineering services. Our corporate office is in Vatara, Gulshan, Dhaka. Call us at +880 1844 509 800 or email noman@miconbd.com",
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
    url: "https://www.miconbd.com/contact",
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
