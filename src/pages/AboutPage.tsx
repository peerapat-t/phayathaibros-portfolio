import Badge from "../components/Badge";
import Tag from "../components/Tag";
import { awards, education, experiences, profile, skills } from "../data/profile";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      {/* Profile header */}
      <section className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <div className="relative mx-auto h-48 w-48 md:mx-0">
          <div className="absolute inset-0 rotate-6 rounded-3xl bg-accent" />
          <div className="relative grid h-full w-full place-items-center rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-700 to-zinc-900 font-display text-6xl font-bold text-zinc-300">
            {profile.name.charAt(0)}
          </div>
        </div>
        <div>
          <p className="text-sm text-accent">{profile.location}</p>
          <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">{profile.name}</h1>
          <p className="mt-1 text-xl text-zinc-400">{profile.title}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-zinc-950 hover:brightness-110"
            >
              Contact me
            </a>
            <a
              href="#"
              className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold hover:border-zinc-400"
            >
              Download résumé (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="mt-14 space-y-4 text-lg leading-relaxed text-zinc-300">
        {profile.bio.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </section>

      {/* Experience timeline */}
      <section className="mt-16">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Work Experience</h2>
        <ol className="relative space-y-10 border-l border-zinc-800 pl-8">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative">
              <span className="absolute top-1.5 -left-[37px] h-3 w-3 rounded-full border-2 border-zinc-950 bg-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold">
                  {exp.role} <span className="text-zinc-500">@ {exp.company}</span>
                </h3>
                <span className="shrink-0 text-sm text-zinc-500">{exp.period}</span>
              </div>
              <p className="text-sm text-zinc-500">{exp.location}</p>
              <p className="mt-2 text-zinc-300">{exp.summary}</p>
              <ul className="mt-4 space-y-4">
                {exp.achievements.map((a) => (
                  <li key={a.text} className="flex gap-3 text-sm text-zinc-400">
                    <span className="text-accent">▸</span>
                    <div>
                      <p>{a.text}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="mr-1 text-xs tracking-widest text-zinc-500 uppercase">Stack</span>
                        {a.stack.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-bold sm:text-3xl">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.group}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-600"
            >
              <div className="mb-4 flex items-center gap-3">
                <Badge icon={s.icon} className="h-12 w-12 shrink-0 drop-shadow-lg" />
                <h3 className="font-display text-lg font-semibold">{s.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-bold sm:text-3xl">Education</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((ed) => (
            <article key={ed.school} className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              {ed.image && (
                <figure className="relative">
                  <img
                    src={ed.image.src}
                    alt={ed.school}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute right-2 bottom-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-zinc-300">
                    Photo:{" "}
                    <a href={ed.image.creditUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
                      {ed.image.credit}
                    </a>
                  </figcaption>
                </figure>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-accent">{ed.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{ed.degree}</h3>
                <p className="text-sm text-zinc-400">{ed.school}</p>
                {ed.note && <p className="mt-3 text-sm text-zinc-500">{ed.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Awards & training */}
      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-bold sm:text-3xl">Awards & Training</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a) => (
            <li
              key={a.title}
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-zinc-600"
            >
              <Badge icon={a.icon} className="h-14 w-14 shrink-0 drop-shadow-lg" />
              <div>
                <p className="text-[11px] tracking-widest text-zinc-500 uppercase">{a.kind}</p>
                <h3 className="font-semibold leading-snug">{a.title}</h3>
                <p className="text-sm text-zinc-400">{a.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
