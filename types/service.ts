import { ElementType } from "react";

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  shortTag: string;
  iconName: string; // Serialized icon identifier for dynamic lookup if needed
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: ServiceSpec[];
  timeline: string;
  warranty: string;
  image: string;
  badge?: string;
  applications?: string[];
  standards?: string[];
}
