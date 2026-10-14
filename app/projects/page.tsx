import { Metadata } from "next";
import ProjectsClient from "@/sections/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects Portfolio - Landmark Industrial & Infrastructure Execution | MICON",
  description:
    "Explore 100+ executed industrial construction projects across Bangladesh by MICON. Verified track record in PEB steel factories, turnkey RCC structures, LEED green buildings, and high-voltage substation facilities.",
  keywords: [
    "MICON projects",
    "industrial construction portfolio Bangladesh",
    "PEB steel building projects",
    "turnkey RCC projects Dhaka",
    "CREC railway link stations",
    "TVS Autos warehouse",
    "Flaxen Dress Maker LEED factory",
    "GIS substation building Gazipur",
    "industrial construction track record",
  ],
  openGraph: {
    title: "Projects Portfolio - MICON Engineering Excellence",
    description:
      "100+ turnkey industrial and infrastructure projects delivered across Bangladesh by ISO 9001:2015 certified contractor MICON.",
    url: "https://www.miconbd.com/projects",
    type: "website",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
