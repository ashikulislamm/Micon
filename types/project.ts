export type ProjectCategory = "all" | "peb-steel" | "rcc" | "green" | "facilities";

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  year: string;
  area: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  status: ProjectStatus;
  client?: string;
  highlights?: string[];
}
