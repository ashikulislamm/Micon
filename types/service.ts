export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceReference {
  client: string;
  location: string;
  scope: string;
  area?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  shortTag: string;
  iconName: string; // Serialized icon identifier for dynamic lookup if needed
  title: string;
  shortDescription: string;
  description: string;
  /** Advantages / key deliverables, sourced from COMPANY.md */
  features: string[];
  /** Verifiable specification matrix (no unverified performance claims) */
  specs: ServiceSpec[];
  image: string;
  applications?: string[];
  standards?: string[];
  /** Executed projects from COMPANY.md that evidence this service line */
  references?: ServiceReference[];
}
