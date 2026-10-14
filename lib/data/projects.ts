import { Project } from "@/types/project";

/**
 * Canonical Project Portfolio.
 * Sourced directly from COMPANY.md (Top Prestigious Projects & RMG Projects).
 * All clients, locations, scopes, and areas reflect actual contracted works.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    slug: "crec-padma-railway-stations",
    title: "CREC Padma Railway Link Transit Stations",
    category: "facilities",
    location: "Padma, Shibchor, Joy-Bangla, Nagarkandha",
    year: "2024",
    area: "5 Station Complexes",
    description:
      "Turnkey civil works and structural steel framing for 5 strategic rail transit stations along the Padma Bridge Rail Link Project.",
    longDescription:
      "Commissioned by China Railway Engineering Corporation (CREC) for the Padma Railway Link Project, MICON executed turnkey civil works and structural steel framing across 5 passenger stations: Padma, Shibchor, Joy-Bangla, and Nagarkandha. Constructed in strict adherence to rail safety standards and BNBC structural regulations.",
    image: "/Facilities/FC_1.jpg",
    tags: ["Rail Infrastructure", "MNC Client", "Turnkey Civil"],
    status: "completed",
    client: "China Railway Engineering Corporation (CREC)",
    highlights: [
      "5 Landmark Rail Transit Stations",
      "Heavy Civil Foundations & Structural Steel Framing",
      "BNBC Structural & Railway Safety Compliance",
      "Platform Enclosures & Passenger Transit Facilities",
    ],
  },
  {
    id: "2",
    slug: "tvs-autos-central-facility",
    title: "TVS Autos Industrial Assembly & Logistics Hub",
    category: "peb-steel",
    location: "Beribadh, Mirpur, Dhaka",
    year: "2024",
    area: "180,000 SFT",
    description:
      "180,000 SFT clear-span pre-engineered steel warehouse and civil construction for TVS Auto Bangladesh Ltd.",
    longDescription:
      "Design, engineering drawings, automated steel fabrication, and site construction of both civil and steel structure works for TVS Autos Bangladesh Ltd at Beribadh, Mirpur, Dhaka. Features wide column-free assembly spans, reinforced floor slabs, and integrated industrial logistics bays.",
    image: "/Steel Building/SB_1.png",
    tags: ["PEB Steel", "Automotive", "MNC Client"],
    status: "completed",
    client: "TVS Autos Bangladesh Ltd.",
    highlights: [
      "180,000 SFT Continuous Industrial Footprint",
      "Design-Build Civil Foundations & PEB Steel Superstructure",
      "High-Clearance Assembly & Storage Spans",
      "Industrial Floor Hardener & Logistics Bays",
    ],
  },
  {
    id: "3",
    slug: "flaxen-dress-maker-leed-factory",
    title: "Flaxen Dress Maker 5-Storied LEED Factory",
    category: "green",
    location: "Mirer Bazar, Gazipur",
    year: "2024",
    area: "154,987 SFT",
    description:
      "5-storied LEED certified garment manufacturing factory building executed with turnkey RCC civil construction.",
    longDescription:
      "Design, architectural drawings, and turnkey civil construction execution of a 154,987 SFT 5-storied industrial manufacturing plant for Flaxen Dress Maker Ltd in Mirer Bazar, Gazipur. Engineered to USGBC LEED green building parameters with structural seismic resilience, optimal natural lighting, and industrial safety compliance.",
    image: "/Green Buildings/GB_1.jpg",
    tags: ["LEED Certified", "Green Factory", "Turnkey RCC"],
    status: "completed",
    client: "Flaxen Dress Maker Ltd",
    highlights: [
      "154,987 SFT 5-Storied Production Facility",
      "USGBC LEED Environmental Architecture",
      "High-Strength Reinforced Concrete (RCC) Superstructure",
      "Seismic Resilience & Energy-Efficient Lighting",
    ],
  },
  {
    id: "4",
    slug: "pgcb-gis-substation",
    title: "PGCB 230/33 KVA GIS Substation Building & Boundary",
    category: "facilities",
    location: "Board Bazar, Gazipur",
    year: "2024",
    area: "35,850 SFT & 1,230 RFT",
    description:
      "High-voltage GIS substation building and reinforced perimeter boundary wall for Energypac and Power Grid Company of Bangladesh.",
    longDescription:
      "Turnkey civil construction of a 230/33 KVA Gas-Insulated Substation (GIS) building spanning 35,850 SFT alongside 1,230 RFT of reinforced concrete boundary security walls for Energypac Engineering Ltd and Power Grid Company of Bangladesh (PGCB) at Board Bazar, Gazipur.",
    image: "/Facilities/FC_2.jpg",
    tags: ["Substation", "High Voltage", "National Grid"],
    status: "completed",
    client: "Energypac Engineering Ltd / PGCB",
    highlights: [
      "230/33 KVA GIS Substation Facility",
      "35,850 SFT Heavy Civil Enclosure",
      "1,230 RFT Reinforced Security Boundary Wall",
      "National Power Grid Infrastructure Rigor",
    ],
  },
  {
    id: "5",
    slug: "eurotex-spinning-mills-complex",
    title: "Eurotex Spinning Mills Mega Factory Complex",
    category: "peb-steel",
    location: "Mauna & Sreepur, Gazipur",
    year: "2023",
    area: "187,592 SFT",
    description:
      "Integrated textile spinning complex spanning 187,592 SFT of both civil and steel structures, godowns, and utility facilities.",
    longDescription:
      "Complete design drawing and turnkey construction of both civil and steel structures for Eurotex Spinning Mills Ltd at Mauna and Sreepur, Gazipur. Scope encompassed the 187,592 SFT main factory building, raw cotton godowns, 3,000 SFT central store, 4-storied admin building, dormitory, AC plant, and substation pump house.",
    image: "/Steel Building/SB_2.jpg",
    tags: ["Textile Complex", "PEB Steel", "Turnkey Civil"],
    status: "completed",
    client: "Eurotex Spinning Mills Ltd",
    highlights: [
      "187,592 SFT Main Industrial Production Plant",
      "Multi-Component Civil & Steel Structure Scope",
      "Raw Cotton Godowns, Central Store & Admin Building",
      "Substation, Pump House & Utility Enclosures",
    ],
  },
  {
    id: "6",
    slug: "sm-knitwear-factory-building",
    title: "SM Knitwear 5-Storied Industrial Plant",
    category: "rcc",
    location: "Mawna, Gazipur",
    year: "2023",
    area: "130,000 SFT",
    description:
      "5-storied industrial garment manufacturing facility and steel shed building constructed with turnkey civil works.",
    longDescription:
      "Design, structural engineering drawings, and complete civil construction of a 130,000 SFT 5-storied factory building alongside a 30,000 SFT steel shed building for SM Knitwear Ltd at Mawna, Gazipur. Engineered for high-load industrial knitting machinery and fire safety compliance.",
    image: "/RCC/RCC_1.jpg",
    tags: ["Turnkey RCC", "Garment Industry", "Multi-Story"],
    status: "completed",
    client: "SM Knitwear Ltd.",
    highlights: [
      "130,000 SFT 5-Storied Manufacturing Facility",
      "30,000 SFT Supporting Steel Shed Structure",
      "Heavy Vibration Load Capacity for Textile Machinery",
      "Accord / Alliance Aligned Industrial Fire Safety",
    ],
  },
  {
    id: "7",
    slug: "focus-auto-bricks-ceramics",
    title: "Focus Auto Bricks & Ceramics Production Facility",
    category: "peb-steel",
    location: "Mawna, Gazipur",
    year: "2023",
    area: "125,000 SFT",
    description:
      "Large-scale 125,000 SFT pre-engineered industrial steel structure for automatic brick and ceramics manufacturing.",
    longDescription:
      "Engineering, off-site fabrication, and on-site erection of 125,000 SFT of heavy pre-engineered steel structures for Focus Auto Bricks & Ceramics Ltd at Mawna, Gazipur. Engineered for high-temperature kiln environments, automated tunnel lines, and continuous raw material handling.",
    image: "/Steel Building/SB_3.jpg",
    tags: ["PEB Steel", "Heavy Industrial", "Ceramics"],
    status: "completed",
    client: "Focus Auto Bricks & Ceramics Ltd",
    highlights: [
      "125,000 SFT Continuous Steel Structural Frame",
      "Engineered for Industrial Kiln & Thermal Environments",
      "CNC Cut Built-Up Beams & Cold-Rolled Purlins",
      "High Eaves Clearance for Automated Gantry Operations",
    ],
  },
  {
    id: "8",
    slug: "bay-tannery-etp-plants",
    title: "Bay Tannery Industrial ETP Water Treatment Facilities",
    category: "facilities",
    location: "Savar & Konabari",
    year: "2023",
    area: "2 Treatment Plants",
    description:
      "Turnkey civil construction of 2 specialized biological and chemical Effluent Treatment Plant (ETP) facilities.",
    longDescription:
      "Turnkey civil construction of 2 specialized Effluent Treatment Plant (ETP) facilities for Bay Tannery Ltd across Savar and Konabari. Engineered with water-tight reinforced concrete tanks, chemical-resistant epoxy coatings, and environmental safety infrastructure complying with Bangladesh Department of Environment regulations.",
    image: "/Facilities/FC_3.jpg",
    tags: ["ETP", "Water Treatment", "DoE Compliant"],
    status: "completed",
    client: "Bay Tannery Ltd.",
    highlights: [
      "2 Complete Industrial ETP Plant Facilities",
      "Chemical-Resistant & Water-Tight Reinforced Tanks",
      "Department of Environment (DoE) Compliance",
      "Industrial Effluent Neutralization Architecture",
    ],
  },
  {
    id: "9",
    slug: "sm-accessories-warehouse-complex",
    title: "SM Accessories 4-Storied RCC Bounded Warehouse",
    category: "rcc",
    location: "Mauna, Gazipur",
    year: "2024",
    area: "80,000 SFT",
    description:
      "4-storied heavy RCC bounded warehouse and 5-storied main factory building design drawing and construction.",
    longDescription:
      "Design drawing and complete civil construction of an 80,000 SFT 4-storied RCC bounded warehouse and 122,750 SFT 5-storied factory building for SM Accessories Ltd at Mauna, Gazipur. Features high-capacity floor loading, dedicated utility structures, and autoboard carton factory sheds.",
    image: "/Steel Building/SB_4.jpg",
    tags: ["Turnkey RCC", "Warehouse", "Industrial Logistics"],
    status: "completed",
    client: "SM Accessories Ltd.",
    highlights: [
      "80,000 SFT 4-Storied RCC Warehouse",
      "122,750 SFT 5-Storied Main Factory Building Scope",
      "High-Density Floor Load Capacity for Raw Material Storage",
      "Integrated Utility & Production Connectivity",
    ],
  },
  {
    id: "10",
    slug: "oscar-bangla-epz-factory",
    title: "Oscar Bangla 2-Storied EPZ Factory Building",
    category: "peb-steel",
    location: "Ishwardi EPZ, Pabna",
    year: "2023",
    area: "80,000 SFT",
    description:
      "2-storied industrial factory building combining civil foundations and pre-engineered steel structure works for multinational client.",
    longDescription:
      "Design, engineering drawings, and turnkey construction of both civil and steel structures for Oscar Bangla Company Ltd (MNC) within the Ishwardi Export Processing Zone (EPZ), Pabna. Executed in full compliance with BEPZA regulatory standards, seismic codes, and export compliance benchmarks.",
    image: "/Green Buildings/GB_2.jpg",
    tags: ["MNC Client", "BEPZA Certified", "Civil & Steel"],
    status: "completed",
    client: "Oscar Bangla Company Ltd",
    highlights: [
      "80,000 SFT 2-Storied EPZ Production Facility",
      "Export Processing Zone (BEPZA) Compliance",
      "Hybrid Deep Civil Substructure & Steel Superstructure",
      "Accelerated Industrial Fast-Track Erection",
    ],
  },
  {
    id: "11",
    slug: "lax-lingerie-retrofitting",
    title: "Lax Lingerie 5-Storied RCC Building Retrofitting",
    category: "retrofitting",
    location: "Chittagong, Bangladesh",
    year: "2023",
    area: "5-Storied Facility",
    description:
      "Comprehensive structural retrofitting and strengthening works for an active 5-storied industrial RCC garment factory.",
    longDescription:
      "Structural rehabilitation and capacity upgrading for a 5-storied RCC factory building for Lax Lingerie Ltd in Chittagong. Included column and beam section enlargement, structural jacketing, and safety compliance strengthening carried out with zero disruption to continuous plant manufacturing.",
    image: "/RCC/RCC_2.jpg",
    tags: ["Retrofitting", "RCC Strengthening", "Safety Compliance"],
    status: "completed",
    client: "Lax Lingerie Ltd",
    highlights: [
      "5-Storied RCC Industrial Structure Retrofitting",
      "Concrete Jacketing & Load-Capacity Enhancement",
      "Executed in Operating Industrial Garment Facility",
      "RSC & Accord / Alliance Structural Safety Certification",
    ],
  },
  {
    id: "12",
    slug: "saiham-knit-composite-retrofitting",
    title: "Saiham Knit Composite Multistoried Retrofitting",
    category: "retrofitting",
    location: "Noyapara, Habiganj",
    year: "2023",
    area: "5 Industrial Blocks",
    description:
      "Structural retrofitting and engineering strengthening of multistoried civil and steel structure factory buildings.",
    longDescription:
      "Specialized retrofitting of multistoried civil and steel structure buildings across 5 facilities for Saiham Knit Composite Ltd in Noyapara, Habiganj. Works encompassed foundation underpinning, structural steel connection re-engineering, and seismic integrity restoration.",
    image: "/Facilities/FC_1.jpg",
    tags: ["Retrofitting", "Steel & Civil", "Seismic Upgrade"],
    status: "completed",
    client: "Saiham Knitwear Ltd",
    highlights: [
      "Retrofitting Across 5 Multistoried Buildings",
      "Combined Civil Concrete & Structural Steel Retrofit",
      "Seismic Zone Integrity Restoration",
      "Verified Material Quality & Engineering Testing",
    ],
  },
];
