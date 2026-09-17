import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { articles, formatArticleDate } from "../data/articles";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-5xl px-5 pt-20 pb-16">
        <p className="text-sm tracking-widest text-accent uppercase">{profile.siteName}</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Hi, I'm {profile.nameShort}.</h1>
        <p className="mt-4 max-w-2xl font-display text-2xl leading-snug text-zinc-200">{profile.lead}</p>
        <p className="mt-5 text-sm text-zinc-500">{profile.title} based in Bangkok</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">{profile.intro}</p>
        <p className="mt-6 text-zinc-400">{profile.interestsLabel}</p>
        <ul className="mt-3 space-y-2">
          {profile.interests.map((item) => (
            <li key={item} className="flex gap-3 text-lg text-zinc-300">
              <span className="text-accent">·</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
          >
            Have a look around
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold transition hover:border-zinc-400"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-5xl border-t border-zinc-800 px-5 py-14">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-bold">Things I've built</h2>
          <Link to="/projects" className="text-sm text-zinc-400 hover:text-zinc-100">
            View all {projects.length} →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="mx-auto max-w-5xl border-t border-zinc-800 px-5 py-14">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-bold">Things I've written</h2>
          <Link to="/blog" className="text-sm text-zinc-400 hover:text-zinc-100">
            View all {articles.length} →
          </Link>
        </div>
        <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
          {articles.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="w-28 shrink-0 text-sm text-zinc-500">{formatArticleDate(a.date)}</span>
                <span className="font-medium group-hover:text-accent">{a.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-5xl border-t border-zinc-800 px-5 py-14">
        <h2 className="font-display text-2xl font-bold">Get in touch</h2>
        <p className="mt-2 text-zinc-400">
          If any of this overlaps with what you're working on, I'd be glad to hear about it.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-lg text-accent hover:underline">
          {profile.email}
        </a>
      </section>
    </>
  );
}
