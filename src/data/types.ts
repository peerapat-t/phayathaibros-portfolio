export type ProjectCategory = "Web App" | "Mobile" | "Backend" | "Design" | "Open Source";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  role: string;
  featured: boolean;
  /** Tailwind gradient classes used as a mock cover image */
  cover: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  links: { live?: string; repo?: string };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  note?: string;
}
