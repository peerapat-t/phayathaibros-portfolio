import type { Project } from "../data/types";

/** Mock cover image: a gradient with the project's initials. Swap for a real <img> later. */
export default function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  const initials = project.title
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${project.cover} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute -right-6 -bottom-10 font-display text-[9rem] leading-none font-bold text-white/15 select-none">
        {initials}
      </div>
      <div className="absolute top-4 left-4 rounded-md bg-black/25 px-2 py-1 font-display text-xs font-semibold text-white backdrop-blur">
        {project.title}
      </div>
    </div>
  );
}
