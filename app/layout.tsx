import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MICON - Leading Construction & Engineering Solutions in Bangladesh",
    template: "%s | MICON",
  },
  description:
    "MICON delivers world-class industrial construction services including PEB Steel Buildings, RCC Structures, ETP/WTP Plants, and BIM Technology. ISO 9001:2015 certified with 500+ successful projects across Bangladesh.",
  keywords: [
    "construction company Bangladesh",
    "pre-engineered steel buildings",
    "PEB construction",
    "RCC structure construction",
    "turnkey construction services",
    "ETP WTP STP construction",
    "industrial construction",
    "BIM technology",
    "modular construction",
    "boundary wall construction",
    "retrofitting services",
    "utility infrastructure",
    "LEED certified construction",
    "ISO certified construction company",
    "engineering solutions Bangladesh",
    "factory construction",
    "warehouse construction",
    "sustainable construction",
  ],
  authors: [{ name: "MICON Engineering" }],
  creator: "MICON",
  publisher: "MICON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.micon.com.bd"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MICON - Leading Construction & Engineering Solutions",
    description:
      "ISO 9001:2015 certified construction company specializing in PEB Steel Buildings, RCC Structures, Treatment Plants, and advanced BIM technologies. 500+ projects delivered across Bangladesh.",
    url: "https://www.micon.com.bd",
    siteName: "MICON",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MICON - Construction & Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MICON - Leading Construction & Engineering Solutions",
    description:
      "ISO certified construction company delivering PEB, RCC, and industrial construction services across Bangladesh.",
    images: ["/twitter-image.jpg"],
    creator: "@micon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
