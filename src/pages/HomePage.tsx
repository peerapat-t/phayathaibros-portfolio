import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectCover from "../components/ProjectCover";
import Tag from "../components/Tag";
import { profile } from "../data/profile";
import { featuredProjects, projects } from "../data/projects";

export default function HomePage() {
  const [hero, ...rest] = featuredProjects;

  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:pt-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          เปิดรับงาน freelance ไตรมาสหน้า
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-tight font-bold sm:text-6xl">
          สวัสดีครับ ผม{profile.nameTh}
          <span className="block text-zinc-500">{profile.title} ที่ชอบสร้างของที่ใช้งานได้จริง</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-zinc-950 transition hover:brightness-110"
          >
            ดูผลงานทั้งหมด ({projects.length})
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-400"
          >
            เกี่ยวกับผม
          </Link>
        </div>
      </section>

      {/* Hero project */}
      {hero && (
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Top Projects</h2>
            <span className="text-sm text-zinc-500">ผลงานเด่นที่คัดมาแล้ว</span>
          </div>

          <Link
            to={`/projects/${hero.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 transition hover:border-zinc-600 lg:grid-cols-5"
          >
            <ProjectCover project={hero} className="min-h-64 lg:col-span-3" />
            <div className="flex flex-col gap-4 p-6 sm:p-8 lg:col-span-2">
              <span className="text-xs tracking-widest text-accent uppercase">★ Featured · {hero.year}</span>
              <h3 className="font-display text-3xl font-bold group-hover:text-accent">{hero.title}</h3>
              <p className="text-zinc-400">{hero.description}</p>
              {hero.metrics && (
                <div className="grid grid-cols-3 gap-3 border-y border-zinc-800 py-4">
                  {hero.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-xl font-bold">{m.value}</div>
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
              <span className="mt-auto text-sm font-semibold text-zinc-300 group-hover:text-accent">
                อ่าน case study →
              </span>
            </div>
          </Link>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-5 py-10 text-center">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-accent sm:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">มีไอเดียอยากให้ช่วยสร้าง?</h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">ทักมาคุยกันได้เลยครับ ยินดีรับฟังทุกโปรเจกต์</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-zinc-100 px-8 py-3 font-semibold text-zinc-900 transition hover:bg-accent"
        >
          {profile.email}
        </a>
      </section>
    </>
  );
}
