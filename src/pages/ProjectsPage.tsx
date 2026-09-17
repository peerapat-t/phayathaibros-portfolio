import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { categories, projects } from "../data/projects";
import type { ProjectCategory } from "../data/types";

type SortKey = "newest" | "oldest" | "az";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("newest");

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => category === "All" || p.category === category)
      .filter((p) => !tag || p.tags.includes(tag))
      .filter(
        (p) =>
          !q ||
          [p.title, p.tagline, p.description, ...p.tags].some((field) => field.toLowerCase().includes(q)),
      )
      .sort((a, b) => {
        if (sort === "az") return a.title.localeCompare(b.title);
        return sort === "newest" ? b.year - a.year : a.year - b.year;
      });
  }, [query, category, tag, sort]);

  const hasFilters = query || category !== "All" || tag;

  const pill = (active: boolean) =>
    `rounded-full px-4 py-1.5 text-sm transition-colors ${
      active ? "bg-accent font-semibold text-zinc-950" : "border border-zinc-800 text-zinc-400 hover:text-zinc-100"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Browse Projects</h1>
        <p className="mt-3 text-zinc-400">All {projects.length} projects. Search, or filter by category or technology.</p>
      </header>

      {/* Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <svg
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-zinc-500"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, description or technology..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pr-4 pl-11 text-sm outline-none placeholder:text-zinc-500 focus:border-accent"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-accent"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="az">Name A–Z</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button key={c} type="button" className={pill(category === c)} onClick={() => setCategory(c)}>
              {c === "All" ? "All" : c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs text-zinc-500">Tech:</span>
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? null : t)}
              className={`rounded-full px-2.5 py-0.5 text-xs transition-colors ${
                tag === t
                  ? "bg-zinc-100 text-zinc-900"
                  : "border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between text-sm text-zinc-500">
        <span>{filtered.length} {filtered.length === 1 ? "project" : "projects"}</span>
        {hasFilters && (
          <button
            type="button"
            className="text-zinc-300 underline-offset-4 hover:underline"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setTag(null);
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-800 py-20 text-center text-zinc-500">
          No projects match. Try a different search.
        </div>
      )}
    </div>
  );
}
