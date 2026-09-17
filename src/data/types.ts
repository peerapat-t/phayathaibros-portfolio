export type ProjectCategory = "Game" | "Web App" | "Tool" | "Data";

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
  /** Emoji artwork shown on the cover */
  emoji: string;
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
  achievements: { text: string; stack: string[] }[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  note?: string;
  /** Campus photo in public/, with attribution required by its licence */
  image?: { src: string; credit: string; creditUrl: string };
}

export type BadgeIcon = "trophy" | "medal" | "star" | "course" | "listening" | "chart" | "network" | "sparkle" | "code";

export interface Skill {
  group: string;
  icon: BadgeIcon;
  items: string[];
}

export interface Award {
  title: string;
  issuer: string;
  kind: "Award" | "Hackathon" | "Training";
  icon: BadgeIcon;
}
