import { ContactInfo, FaqItem, Certification } from "@/types/company";

export const COMPANY_CONTACT: ContactInfo = {
  headOffice: {
    title: "Head Office",
    addressLines: [
      "Ka-6/A, 3rd Floor, Jagannathpur",
      "Vatara, Dhaka - 1229, Bangladesh",
    ],
    phone: "+880 1812 345 678",
    email: "info@micon.com.bd",
  },
  hotline: "+880 1812 345 678",
  mobile: "+880 1712 345 678",
  officePhone: "+880 2 8956 234",
  emergencyPhone: "+880 1812 345 678",
  email: "info@micon.com.bd",
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
    question: "What is the average timeline for a PEB project?",
    answer:
      "Pre-Engineered Building (PEB) projects typically take 3 to 6 months from design approval to final handover, depending on scale and site conditions.",
    category: "PEB",
  },
  {
    question: "Are MICON buildings LEED certified?",
    answer:
      "Yes, we specialize in green factory construction and LEED-certified building design, incorporating energy-efficient cladding, natural day-lighting, and eco-friendly structural systems.",
    category: "Sustainability",
  },
  {
    question: "Do you provide turnkey RCC & hybrid solutions?",
    answer:
      "Absolutely. We offer complete single-source turnkey civil construction—from soil testing and deep bored piling to RCC superstructures, structural steel fabrication, and MEP installation.",
    category: "Civil",
  },
  {
    question: "How do you handle project safety and quality control?",
    answer:
      "We strictly adhere to ISO 9001:2015 Quality Management Systems and BNBC 2020 codes. Our project sites maintain a Zero Incident HSE Protocol with daily safety briefings and third-party material certifications.",
    category: "Quality",
  },
  {
    question: "Can MICON handle specialized ETP/WTP environmental facilities?",
    answer:
      "Yes, we construct Department of Environment (DoE) Bangladesh compliant Effluent Treatment Plants (ETP) and Water Treatment Plants (WTP) equipped with modern SCADA automated controls.",
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
