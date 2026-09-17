import { Link } from "react-router-dom";
import Tag from "../components/Tag";
import { articles, formatArticleDate } from "../data/articles";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Things I've written</h1>
        <p className="mt-3 text-zinc-400">
          Rough notes to myself on machine learning, marketing analytics and whatever I'm currently trying to figure out.
        </p>
      </header>

      <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link to={`/blog/${a.slug}`} className="group flex gap-5 py-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-zinc-900 text-2xl">
                {a.emoji}
              </span>
              <div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <span>{formatArticleDate(a.date)}</span>
                  <span>·</span>
                  <span>{a.readingMinutes} min read</span>
                </div>
                <h2 className="mt-1 font-display text-xl font-semibold group-hover:text-accent">{a.title}</h2>
                <p className="mt-1 text-zinc-400">{a.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
