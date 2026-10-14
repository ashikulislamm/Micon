import { ServiceItem } from "@/types/service";

/**
 * Service catalogue. Content is sourced from COMPANY.md (Our Services section,
 * executed project registers). Do not add performance, warranty or timeline
 * claims that are not substantiated there.
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "peb",
    slug: "peb-steel",
    shortTag: "PEB Steel",
    iconName: "Building2",
    title: "Design-Build Pre-Engineered Steel Buildings",
    shortDescription:
      "A single entity manages design and construction, using factory-fabricated steel components for faster, consistent delivery.",
    description:
      "Design-Build Construction of Pre-Engineered Steel Buildings (PEB) places design and construction under one accountable entity. Pre-fabricated steel components deliver faster completion, cost efficiency and consistent quality for warehouses, factories and commercial structures.",
    features: [
      "Cost efficiency: early cost estimation and value engineering minimise budget overruns",
      "High quality control: factory-fabricated steel components ensure precision and durability",
      "Design flexibility: customisable layouts for functional and aesthetic needs",
      "Reduced risk: streamlined communication minimises errors, disputes and delays",
      "Ease of expansion: modular components allow simple future extensions",
      "Faster delivery: overlapping design and construction phases shorten completion time",
    ],
    specs: [
      { label: "Delivery Model", value: "Design-Build, single contract" },
      { label: "Fabrication", value: "In-house CNC plate cutting, profile sheet and purlin forming" },
      { label: "Licensing", value: "PWD Class-A enlisted contractor" },
      { label: "Quality System", value: "ISO 9001:2015" },
    ],
    image: "/Steel Building/SB_1.png",
    applications: [
      "Industrial sheds",
      "Warehouses",
      "Factories",
      "Commercial buildings",
      "Large-scale infrastructure",
    ],
    standards: ["BNBC 2020", "AISC 360-16", "ISO 9001:2015"],
    references: [
      { client: "Eurotex Spinning Mills Ltd", location: "Mauna, Gazipur", scope: "Factory building, civil and steel", area: "1,87,592 SFT" },
      { client: "TVS Autos Bangladesh Ltd.", location: "Beribadh, Dhaka", scope: "Warehouse building, civil and steel", area: "1,80,000 SFT" },
      { client: "Focus Auto Bricks & Ceramics Ltd", location: "Mawna, Gazipur", scope: "Steel work", area: "1,25,000 SFT" },
      { client: "Oscar Bangla Company Ltd", location: "Ishwardi EPZ, Pabna", scope: "Two-storied factory, civil and steel", area: "80,000 SFT" },
    ],
  },
  {
    id: "rcc",
    slug: "turnkey-construction",
    shortTag: "Turnkey RCC & Steel",
    iconName: "Layers",
    title: "Turnkey Construction of RCC and Steel Structures",
    shortDescription:
      "Engineering, procurement and construction of both RCC and steel structures, from concept design to project completion.",
    description:
      "Our EPC solutions cover every stage of the construction process, from concept design to completion, for industrial, commercial and infrastructure projects. We specialise in both RCC and pre-engineered steel structures, supported by modern construction technology.",
    features: [
      "Single-source accountability from design drawing to handover",
      "RCC civil design and construction alongside steel structure manufacturing",
      "Multi-storied factory, warehouse and utility buildings under one contract",
      "Modern construction technologies for optimal quality and timely delivery",
      "Strict focus on safety, functionality and sustainability",
    ],
    specs: [
      { label: "Delivery Model", value: "Engineering, Procurement and Construction (EPC)" },
      { label: "Structure Types", value: "RCC, pre-engineered steel and hybrid" },
      { label: "Licensing", value: "PWD Class-A, LGED, MES, BEPZA, BEZA" },
      { label: "Quality System", value: "ISO 9001:2015" },
    ],
    image: "/RCC/RCC_1.jpg",
    applications: [
      "Multi-storied factory buildings",
      "Warehouses and godowns",
      "Admin, utility and dormitory buildings",
      "Railway station civil works",
    ],
    standards: ["BNBC 2020", "ACI 318-19", "ISO 9001:2015"],
    references: [
      { client: "Flaxen Dress Maker Ltd", location: "Gazipur", scope: "5-storied LEED certified factory building, civil", area: "1,54,987 SFT" },
      { client: "SM Knitwear Ltd.", location: "Mouna, Gazipur", scope: "5-storied factory building, civil works", area: "1,30,000 SFT" },
      { client: "SM Accessories Ltd.", location: "Mauna, Gazipur", scope: "4-storied RCC warehouse", area: "80,000 SFT" },
      { client: "CREC (Padma Railway Link)", location: "Jajira, Shibchor, Joy-Bangla", scope: "Railway station civil works", area: "5 Nos" },
    ],
  },
  {
    id: "etp",
    slug: "treatment-plants",
    shortTag: "ETP, WTP, STP & RMS",
    iconName: "Droplets",
    title: "Construction of ETP, WTP, STP and RMS Rooms",
    shortDescription:
      "Specialised civil and structural facilities that house effluent, water and sewage treatment plants and metering stations.",
    description:
      "Development of specialised civil and structural facilities for Effluent Treatment Plants (ETP), Water Treatment Plants (WTP), Sewage Treatment Plants (STP) and Regulating & Metering Stations (RMS). Engineered for durability, chemical resistance and operational safety.",
    features: [
      "Customised design built to plant layout, capacity and operational requirements",
      "Enhanced durability against moisture, chemicals and environmental stress",
      "Safety and compliance with industrial standards and environmental norms",
      "Efficient space utilisation for access, maintenance and future expansion",
      "Cost and time efficiency through a streamlined construction process",
    ],
    specs: [
      { label: "Facility Types", value: "ETP, WTP, STP and RMS rooms" },
      { label: "Delivery Model", value: "End-to-end design-build under one roof" },
      { label: "Compliance", value: "National environmental regulations and DoE norms" },
      { label: "Materials", value: "High-performance, chemical-resistant construction" },
    ],
    image: "/Facilities/FC_3.jpg",
    applications: [
      "Textile and tannery effluent plants",
      "Industrial water treatment",
      "Sewage treatment",
      "Gas regulating and metering stations",
    ],
    standards: ["DoE Bangladesh", "ISO 14001", "BNBC 2020"],
    references: [
      { client: "Bay Tannery Ltd.", location: "Savar and Konabari", scope: "Construction of ETP works", area: "2 Nos" },
    ],
  },
  {
    id: "boundary",
    slug: "boundary-walls",
    shortTag: "Boundary Walls",
    iconName: "ShieldCheck",
    title: "Boundary Wall Construction",
    shortDescription:
      "Perimeter and boundary wall construction for factories, substations and industrial plots.",
    description:
      "Construction of boundary walls and security perimeters for industrial plots, power infrastructure and commercial facilities, delivered standalone or as part of a wider turnkey package.",
    features: [
      "Perimeter structures engineered to the site and client requirement",
      "Delivered standalone or integrated with building and substation works",
      "Civil execution backed by in-house engineering supervision",
      "Consistent quality control from foundation to finish",
    ],
    specs: [
      { label: "Scope", value: "Standalone or integrated with building works" },
      { label: "Construction", value: "Civil RCC works" },
      { label: "Licensing", value: "PWD Class-A enlisted contractor" },
      { label: "Quality System", value: "ISO 9001:2015" },
    ],
    image: "/Green Buildings/GB_1.jpg",
    applications: [
      "Factory compounds",
      "Power and substation sites",
      "Industrial plots",
      "Commercial land boundaries",
    ],
    standards: ["BNBC 2020", "ISO 9001:2015"],
    references: [
      { client: "Energypac Engineering Ltd / PGCB", location: "Kashimpur and Board Bazar, Gazipur", scope: "230/33 kV GIS substation building with boundary wall", area: "35,850 SFT and 1,230 RFT" },
      { client: "Bata Shoes Bangladesh", location: "Dhamrai", scope: "Boundary works" },
    ],
  },
  {
    id: "retrofitting",
    slug: "structural-retrofitting",
    shortTag: "Retrofitting",
    iconName: "Hammer",
    title: "Civil and Steel Structure Retrofitting",
    shortDescription:
      "Structural retrofitting of existing RCC and steel buildings to restore integrity and meet safety requirements.",
    description:
      "Retrofitting works for existing civil and steel structures, restoring structural integrity and upgrading capacity for continued industrial use. Delivered on live factory sites for garment and knit composite clients.",
    features: [
      "Civil retrofitting of multi-storied RCC factory buildings",
      "Steel structure retrofitting for existing industrial sheds",
      "Execution planned around operating facilities",
      "Engineering supervision from assessment to completion",
    ],
    specs: [
      { label: "Scope", value: "RCC and steel structure retrofitting" },
      { label: "Typical Sites", value: "Operating garment and knit factories" },
      { label: "Licensing", value: "PWD Class-A enlisted contractor" },
      { label: "Quality System", value: "ISO 9001:2015" },
    ],
    image: "/RCC/RCC_2.jpg",
    applications: [
      "Garment factory buildings",
      "Aged industrial warehouses",
      "Steel sheds",
      "Multi-storied RCC buildings",
    ],
    standards: ["BNBC 2020", "ISO 9001:2015"],
    references: [
      { client: "Lax Lingerie Ltd", location: "Chittagong", scope: "5-storied RCC building retrofitting" },
      { client: "Saiham Knit Composite Ltd", location: "Habiganj", scope: "RCC building retrofitting" },
      { client: "SM Knitwear Ltd.", location: "Gazipur", scope: "Steel retrofitting work" },
      { client: "Anfords BD Ltd", location: "Bangladesh", scope: "Steel retrofitting work" },
    ],
  },
  {
    id: "utility",
    slug: "industrial-infrastructure",
    shortTag: "Utility Infrastructure",
    iconName: "Factory",
    title: "Industrial Utility Infrastructure Construction",
    shortDescription:
      "Civil construction of utility buildings, substations, pump houses and supporting infrastructure for industrial facilities.",
    description:
      "Construction of the utility infrastructure that keeps a factory running: utility buildings, generator and AC plant buildings, substations and pump houses, delivered with the same engineering rigour as the main facility.",
    features: [
      "Utility, generator and AC plant buildings",
      "Substation and pump house civil works",
      "GIS substation buildings for power infrastructure",
      "Coordinated delivery alongside the main factory build",
    ],
    specs: [
      { label: "Scope", value: "Utility buildings, substations, pump houses" },
      { label: "Delivery Model", value: "Standalone or part of an EPC package" },
      { label: "Licensing", value: "PWD Class-A enlisted contractor" },
      { label: "Quality System", value: "ISO 9001:2015" },
    ],
    image: "/Facilities/FC_1.jpg",
    applications: [
      "Factory utility buildings",
      "Electrical substations",
      "Pump houses",
      "Generator and AC plant buildings",
    ],
    standards: ["BNBC 2020", "ISO 9001:2015"],
    references: [
      { client: "Power Grid Company of Bangladesh (PGCB)", location: "Board Bazar, Gazipur", scope: "230/33 kV GIS substation building with boundary wall" },
      { client: "Eurotex Spinning Mills Ltd", location: "Mauna, Gazipur", scope: "Utility building, substation and pump house", area: "6,945 SFT and 5,560 SFT" },
      { client: "PN Composite Mills Ltd", location: "Konabari, Gazipur", scope: "2-storied utility building", area: "10,000 SFT" },
    ],
  },
  {
    id: "bim",
    slug: "bim-technology",
    shortTag: "BIM & Modular",
    iconName: "Cpu",
    title: "BIM, Modular Construction and Automation Technologies",
    shortDescription:
      "Implementation of BIM, modular construction and automation to improve quality, precision and delivery.",
    description:
      "Our projects are supported by modern construction technologies such as BIM, modular building methods and automation, ensuring optimal quality and timely delivery across steel and RCC works.",
    features: [
      "BIM-based design coordination before work begins",
      "Modular building methods to shorten site programmes",
      "Automated fabrication in our steel manufacturing facility",
      "Reduced waste, improved precision and lower carbon emissions",
    ],
    specs: [
      { label: "Technologies", value: "BIM, modular construction, automation" },
      { label: "Fabrication", value: "CNC plate cutting and roll-forming lines" },
      { label: "Applied To", value: "PEB steel and RCC projects" },
      { label: "Quality System", value: "ISO 9001:2015" },
    ],
    image: "/Steel Building/SB_2.jpg",
    applications: [
      "Steel fabrication packages",
      "Multi-disciplinary projects",
      "Prefabricated components",
      "Complex coordination",
    ],
    standards: ["ISO 19650", "ISO 9001:2015"],
  },
];
