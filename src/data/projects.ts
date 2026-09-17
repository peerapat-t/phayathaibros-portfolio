import type { Project, ProjectCategory } from "./types";

export const categories: ProjectCategory[] = ["Game", "Web App", "Tool", "Data"];

// NOTE: Only Chick n Cow is a real project. The others are placeholders — replace or remove them.
export const projects: Project[] = [
  {
    slug: "chick-n-cow",
    title: "Chick n Cow",
    tagline: "A picture-reading game for young kids",
    description:
      "A browser game that helps kids practise reading pictures out loud. Cards flash on screen across 10 levels that get faster as you go, and parents can build their own card deck with photos and recorded voices.",
    category: "Game",
    tags: ["TypeScript", "Vite", "Tailwind CSS", "Web Audio API", "REST API"],
    year: 2026,
    role: "Solo Side Project",
    featured: true,
    cover: "from-amber-200 via-orange-300 to-emerald-400",
    emoji: "🐔🐄",
    highlights: [
      "10 levels with game speed and background music tempo increasing per level",
      "Card editor: upload an image and record the word in the browser, with automatic silence trimming",
      "Drag-and-drop level builder to choose which cards appear in each level",
      "Play history with stats, plus light / dark / system themes",
    ],
    metrics: [
      { label: "Levels", value: "10" },
      { label: "Themes", value: "3" },
    ],
    links: { live: "https://chickncow.phayathaibros.site/" },
  },
  {
    slug: "placeholder-web-app",
    title: "Project Two",
    tagline: "Placeholder — describe your next web app here",
    description:
      "This is a placeholder project. Replace it with another app hosted under phayathaibros.site, or delete it from src/data/projects.ts.",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    year: 2026,
    role: "Solo Side Project",
    featured: true,
    cover: "from-sky-500 via-indigo-500 to-violet-600",
    emoji: "🧩",
    highlights: ["Key feature one", "Key feature two", "Key feature three"],
    links: { live: "#" },
  },
  {
    slug: "placeholder-tool",
    title: "Project Three",
    tagline: "Placeholder — a small utility or tool",
    description:
      "This is a placeholder project. Replace it with a real tool you have built, or delete it from src/data/projects.ts.",
    category: "Tool",
    tags: ["Python", "FastAPI", "Docker"],
    year: 2025,
    role: "Solo Side Project",
    featured: true,
    cover: "from-zinc-500 via-slate-600 to-zinc-800",
    emoji: "🛠️",
    highlights: ["Key feature one", "Key feature two"],
    links: { repo: "#" },
  },
  {
    slug: "placeholder-data-viz",
    title: "Project Four",
    tagline: "Placeholder — an interactive data visualization",
    description:
      "This is a placeholder project. Replace it with a public data project or visualization, or delete it from src/data/projects.ts.",
    category: "Data",
    tags: ["Python", "pandas", "D3.js"],
    year: 2025,
    role: "Solo Side Project",
    featured: false,
    cover: "from-emerald-500 via-teal-500 to-cyan-600",
    emoji: "📊",
    highlights: ["Key feature one", "Key feature two"],
    links: { live: "#" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
