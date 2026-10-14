export interface OfficeLocation {
  title: string;
  addressLines: string[];
  phone: string;
  email: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
  closedDays?: string;
}

export interface SocialLinks {
  linkedin: string;
  facebook: string;
  youtube?: string;
  twitter?: string;
}

export interface ContactInfo {
  headOffice: OfficeLocation;
  hotline: string;
  mobile: string;
  officePhone: string;
  emergencyPhone: string;
  email: string;
  website: string;
  businessHours: BusinessHours;
  social: SocialLinks;
  googleMapsUrl: string;
  embedMapUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon?: string;
}
