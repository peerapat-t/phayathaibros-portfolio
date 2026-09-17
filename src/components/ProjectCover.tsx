import type { Project } from "../data/types";

/** Simple cover: a muted tinted panel with the project's emoji. Swap for a real <img> later. */
export default function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`relative grid place-items-center bg-zinc-900 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br opacity-15 ${project.cover}`} />
      <span className="relative text-5xl">{project.emoji}</span>
    </div>
  );
}
