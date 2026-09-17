import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { articles, formatArticleDate, getArticle } from "../data/articles";
import Tag from "./Tag";

/**
 * Shared shell for an article page. Each page in src/pages/article_page/ passes its slug
 * and its own content as children.
 */
export default function ArticleDetail({ slug, children }: { slug: string; children?: ReactNode }) {
  const article = getArticle(slug);
  if (!article) throw new Error(`Unknown article slug: ${slug}`);

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link to="/blog" className="text-sm text-zinc-400 hover:text-zinc-100">
        ← Back to all posts
      </Link>

      <header className="mt-6 mb-8 border-b border-zinc-800 pb-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span>{formatArticleDate(article.date)}</span>
          <span>·</span>
          <span>{article.readingMinutes} min read</span>
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{article.title}</h1>
        <p className="mt-3 max-w-3xl text-lg text-zinc-400">{article.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {article.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </header>

      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-300">{children}</div>

      {more.length > 0 && (
        <section className="mt-16 border-t border-zinc-800 pt-8">
          <h2 className="mb-4 font-display text-xl font-bold">More posts</h2>
          <ul className="space-y-3">
            {more.map((a) => (
              <li key={a.slug}>
                <Link to={`/blog/${a.slug}`} className="group flex items-baseline gap-3">
                  <span className="text-sm text-zinc-500">{formatArticleDate(a.date)}</span>
                  <span className="font-medium group-hover:text-accent">{a.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

/** Reusable heading + body block for article content. */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-display text-xl font-semibold text-zinc-100">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
