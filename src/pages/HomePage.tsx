import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";
import ProjectCover from "../components/ProjectCover";
import Tag from "../components/Tag";
import { profile, skills } from "../data/profile";
import { featuredProjects, projects } from "../data/projects";

const sides = [
  {
    eyebrow: "By day",
    title: "Data Scientist",
    body: "Dashboards, predictive models and customer segmentation for sales and marketing in asset management.",
    skills: skills.filter((s) => s.icon !== "code"),
    link: { to: "/about", label: "Experience & education" },
  },
  {
    eyebrow: "On the side",
    title: "Web Builder",
    body: "Small web apps and games that turn ideas into something people can actually click on.",
    skills: skills.filter((s) => s.icon === "code"),
    latest: true,
    link: { to: "/projects", label: "Browse projects" },
  },
];

export default function HomePage() {
  const [hero, ...rest] = featuredProjects;

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {profile.location}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl">
              Hi, I'm {profile.nameShort}.
            </h1>
            <p className="mt-5 font-display text-2xl leading-snug text-zinc-400 sm:text-3xl">
              A <span className="text-accent">data scientist</span> who builds{" "}
              <span className="text-zinc-100 underline decoration-accent decoration-2 underline-offset-4">
                things for the web
              </span>
              .
            </p>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-zinc-950 shadow-[0_0_40px_-8px] shadow-accent/60 transition hover:brightness-110"
              >
                See my projects →
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-400"
              >
                About me
              </Link>
            </div>
          </div>

          <CodeWindow />
        </div>
      </section>

      {/* Featured projects */}
      {hero && (
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs tracking-widest text-accent uppercase">Selected work</p>
              <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Top Projects</h2>
            </div>
            <Link to="/projects" className="text-sm text-zinc-400 hover:text-zinc-100">
              View all {projects.length} →
            </Link>
          </div>

          <Link
            to={`/projects/${hero.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 transition hover:border-zinc-600 lg:grid-cols-5"
          >
            <ProjectCover project={hero} className="min-h-72 lg:col-span-3" />
            <div className="flex flex-col gap-4 p-6 sm:p-8 lg:col-span-2">
              <span className="text-xs tracking-widest text-accent uppercase">★ Featured · {hero.year}</span>
              <h3 className="font-display text-3xl font-bold group-hover:text-accent">{hero.title}</h3>
              <p className="text-zinc-400">{hero.description}</p>
              {hero.metrics && (
                <div className="flex gap-8 border-y border-zinc-800 py-4">
                  {hero.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl font-bold">{m.value}</div>
                      <div className="text-xs text-zinc-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {hero.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <span className="mt-auto text-sm font-semibold text-zinc-300 group-hover:text-accent">Read more →</span>
            </div>
          </Link>

          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {rest.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Two sides */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {sides.map((side) => (
            <div
              key={side.title}
              className="flex flex-col rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-7"
            >
              <p className="text-xs tracking-widest text-zinc-500 uppercase">{side.eyebrow}</p>
              <h3 className="mt-1 font-display text-2xl font-bold">{side.title}</h3>
              <p className="mt-2 text-zinc-400">{side.body}</p>
              <div className="mt-6 space-y-4">
                {side.skills.map((s) => (
                  <div key={s.group} className="flex items-start gap-3">
                    <Badge icon={s.icon} className="h-10 w-10 shrink-0 drop-shadow-lg" />
                    <div>
                      <p className="text-sm font-semibold">{s.group}</p>
                      <p className="text-sm text-zinc-500">{s.items.join(" · ")}</p>
                    </div>
                  </div>
                ))}
              </div>
              {side.latest && hero && (
                <Link
                  to={`/projects/${hero.slug}`}
                  className="group mt-6 flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-3 transition hover:border-zinc-600"
                >
                  <div className={`grid h-14 w-20 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-2xl ${hero.cover}`}>
                    {hero.emoji}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-widest text-zinc-500 uppercase">Latest build</p>
                    <p className="truncate font-semibold group-hover:text-accent">{hero.title}</p>
                    <p className="truncate text-sm text-zinc-500">{hero.tagline}</p>
                  </div>
                </Link>
              )}
              <Link to={side.link.to} className="mt-auto pt-6 text-sm font-semibold text-zinc-300 hover:text-accent">
                {side.link.label} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 divide-x divide-zinc-800 rounded-3xl border border-zinc-800">
          {profile.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <div className="font-display text-3xl font-bold text-accent sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 px-6 py-16 text-center">
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative font-display text-3xl font-bold sm:text-5xl">Let's build something.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">
            Happy to talk about data science, machine learning or a web idea you have in mind.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="relative mt-8 inline-block rounded-full bg-zinc-100 px-8 py-3 font-semibold text-zinc-900 transition hover:bg-accent"
          >
            {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}

/** Decorative editor window mixing a data notebook with a web component. */
function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-lg min-w-0">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-violet-500/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <div className="ml-3 flex gap-1 text-xs">
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-200">model.py</span>
            <span className="px-2 py-1 text-zinc-500">App.tsx</span>
          </div>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-violet-400">import</span> <span className="text-zinc-200">lightgbm</span>{" "}
            <span className="text-violet-400">as</span> <span className="text-zinc-200">lgb</span>
            {"\n\n"}
            <span className="text-zinc-200">model</span> <span className="text-zinc-500">=</span>{" "}
            <span className="text-sky-400">lgb.LGBMClassifier</span>
            <span className="text-zinc-500">()</span>
            {"\n"}
            <span className="text-zinc-200">model</span>
            <span className="text-sky-400">.fit</span>
            <span className="text-zinc-500">(</span>
            <span className="text-zinc-200">X_train, y_train</span>
            <span className="text-zinc-500">)</span>
            {"\n\n"}
            <span className="text-zinc-500"># ship it to the web 🚀</span>
            {"\n"}
            <span className="text-zinc-200">app</span>
            <span className="text-sky-400">.deploy</span>
            <span className="text-zinc-500">(</span>
            <span className="text-amber-300">"phayathaibros.site"</span>
            <span className="text-zinc-500">)</span>
          </code>
        </pre>
        <div className="grid grid-cols-3 gap-px border-t border-zinc-800 bg-zinc-800">
          {[
            { label: "AUC", value: "0.82" },
            { label: "Build", value: "passing" },
            { label: "Deploy", value: "live" },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-900 px-4 py-3">
              <div className="text-[11px] text-zinc-500 uppercase">{s.label}</div>
              <div className="font-mono text-sm text-accent">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-12 left-8 hidden items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 shadow-xl sm:flex">
        <Badge icon="chart" className="h-8 w-8" />
        <span className="text-xs font-semibold">Data</span>
      </div>
      <div className="absolute -top-5 -right-4 hidden items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 shadow-xl sm:flex">
        <Badge icon="code" className="h-8 w-8" />
        <span className="text-xs font-semibold">Web</span>
      </div>
    </div>
  );
}
