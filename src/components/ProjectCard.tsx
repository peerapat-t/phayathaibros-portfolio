import { Link } from "react-router-dom";
import type { Project } from "../data/types";
import ProjectCover from "./ProjectCover";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition hover:border-zinc-600"
    >
      <ProjectCover project={project} className="aspect-[2/1]" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold group-hover:text-accent">{project.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{project.tagline}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 3).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {project.tags.length > 3 && <Tag>+{project.tags.length - 3}</Tag>}
        </div>
      </div>
    </Link>
  );
}
