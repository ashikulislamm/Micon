import { ContactInfo, FaqItem, Certification } from "@/types/company";

// Canonical contact details — source: COMPANY.md (Corporate Office block).
// COMPANY.md lists a single official phone number, so every phone field resolves to it.
const OFFICIAL_PHONE = "+880 1844 509 800";
const OFFICIAL_EMAIL = "noman@miconbd.com";

export const COMPANY_CONTACT: ContactInfo = {
  headOffice: {
    title: "Corporate Office",
    addressLines: [
      "Ka-6/A, 3rd Floor, Jagannathpur",
      "Vatara, Gulshan, Dhaka 1229, Bangladesh",
    ],
    phone: OFFICIAL_PHONE,
    email: OFFICIAL_EMAIL,
  },
  hotline: OFFICIAL_PHONE,
  mobile: OFFICIAL_PHONE,
  officePhone: OFFICIAL_PHONE,
  emergencyPhone: OFFICIAL_PHONE,
  email: OFFICIAL_EMAIL,
  website: "https://www.miconbd.com",
  businessHours: {
    days: "Sunday - Thursday",
    hours: "9:00 AM - 7:00 PM",
    closedDays: "Friday - Saturday : Closed",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/miconbuild/",
    facebook: "https://www.facebook.com/miconbuild",
    youtube: "https://www.youtube.com/@miconengineering",
  },
  googleMapsUrl: "https://maps.app.goo.gl/pSfnGNKccW2VCfhQ8",
  embedMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.1368146757171!2d90.42338488590124!3d23.811876131183094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75a1d752763%3A0xdf5f392866a564c8!2sMetal%20Infrastructures%20and%20Constructions%20Ltd!5e0!3m2!1sen!2sbd!4v1770461386578!5m2!1sen!2sbd",
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does a PEB steel building project take?",
    answer:
      "Most Pre-Engineered Building (PEB) projects take 3 to 6 months from design approval to final handover, depending on building size and site conditions.",
    category: "PEB",
  },
  {
    question: "Do you build LEED-certified green factories?",
    answer:
      "Yes, we design and build green factories with energy-efficient insulation, natural daylighting, solar readiness, and eco-friendly construction practices.",
    category: "Sustainability",
  },
  {
    question: "Do you handle complete turnkey construction?",
    answer:
      "Yes, we manage the entire construction process from start to finish—including soil testing, piling, civil RCC work, steel fabrication, and building utilities.",
    category: "Civil",
  },
  {
    question: "How do you ensure project safety and quality?",
    answer:
      "We follow ISO 9001:2015 quality standards and Bangladesh National Building Code (BNBC) rules, with strict safety checks and tested materials on every site.",
    category: "Quality",
  },
  {
    question: "Do you build ETP and WTP treatment plants?",
    answer:
      "Yes, we construct Effluent Treatment Plants (ETP), Water Treatment Plants (WTP), and Sewage Treatment Plants (STP) for industrial facilities.",
    category: "Environmental",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Certified",
    issuer: "International Organization for Standardization",
    description: "Quality Management System certification for civil & steel engineering excellence.",
  },
  {
    id: "bnbc-2020",
    title: "BNBC 2020 Compliant",
    issuer: "Bangladesh National Building Code",
    description: "Full compliance with structural, seismic Zone 4, and safety guidelines.",
  },
  {
    id: "leed-green",
    title: "LEED Green Building Partner",
    issuer: "USGBC Standards",
    description: "Expertise in sustainable industrial construction & carbon footprint reduction.",
  },
];
