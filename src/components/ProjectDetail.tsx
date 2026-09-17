import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectCover from "./ProjectCover";
import Tag from "./Tag";

/**
 * Shared shell for a project page. Each page in src/pages/app_page/ passes its slug
 * and its own content as children, which appear below the highlights.
 */
export default function ProjectDetail({ slug, children }: { slug: string; children?: ReactNode }) {
  const project = getProject(slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link to="/projects" className="text-sm text-zinc-400 hover:text-zinc-100">
        ← Back to all projects
      </Link>

      <header className="mt-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <span className="text-accent">{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.role}</span>
        </div>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{project.title}</h1>
        <p className="mt-2 text-xl text-zinc-400">{project.tagline}</p>
      </header>

      <ProjectCover project={project} className="aspect-[16/8] rounded-3xl" />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold">Overview</h2>
            <p className="leading-relaxed text-zinc-300">{project.description}</p>
          </section>
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold">Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </section>
          {children}
        </div>

        <aside className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:sticky lg:top-24 lg:self-start">
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl font-bold">{m.value}</div>
                  <div className="text-xs text-zinc-500">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          <div>
            <h3 className="mb-2 text-xs tracking-widest text-zinc-500 uppercase">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          {(project.links.live || project.links.repo) && (
            <div className="flex flex-col gap-2">
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-zinc-950 hover:brightness-110"
                >
                  Visit live site ↗
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  className="rounded-full border border-zinc-700 py-2.5 text-center text-sm font-semibold hover:border-zinc-400"
                >
                  Source code ↗
                </a>
              )}
            </div>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-zinc-800 pt-10">
          <h2 className="mb-6 font-display text-2xl font-bold">Related projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

/** Reusable block for page-specific content. */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-display text-xl font-semibold">{title}</h2>
      <div className="space-y-3 leading-relaxed text-zinc-300">{children}</div>
    </section>
  );
}

/** Mock screenshot placeholders — replace with real <img> tags. */
export function Gallery({ captions }: { captions: string[] }) {
  return (
    <section>
      <h2 className="mb-3 font-display text-xl font-semibold">Screenshots</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {captions.map((c) => (
          <figure key={c}>
            <div className="grid aspect-video place-items-center rounded-xl border border-dashed border-zinc-700 bg-zinc-900 text-sm text-zinc-600">
              Screenshot
            </div>
            <figcaption className="mt-2 text-xs text-zinc-500">{c}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
