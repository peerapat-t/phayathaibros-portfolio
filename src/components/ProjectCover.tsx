import type { Project } from "../data/types";

/** Illustrated cover: gradient, dotted texture and the project's emoji. Swap for a real <img> later. */
export default function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${project.cover} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:18px_18px] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />

      {/* Stacked "cards" behind the emoji */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div className="absolute inset-0 -translate-x-6 translate-y-2 -rotate-12 rounded-3xl bg-white/25 shadow-xl" />
          <div className="absolute inset-0 translate-x-6 translate-y-2 rotate-12 rounded-3xl bg-white/35 shadow-xl" />
          <div className="relative grid h-28 min-w-28 place-items-center rounded-3xl bg-white/80 px-5 text-5xl whitespace-nowrap shadow-2xl backdrop-blur transition duration-500 group-hover:scale-110 group-hover:-rotate-3 sm:h-32 sm:min-w-32 sm:text-6xl">
            <span className="tracking-[-0.15em]">{project.emoji}</span>
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {project.category}
      </div>
    </div>
  );
}
