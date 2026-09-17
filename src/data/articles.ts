import type { Article } from "./types";

// NOTE: These articles are placeholders — replace the text with your own writing.
export const articles: Article[] = [
  {
    slug: "building-chick-n-cow",
    title: "Building a reading game for my kid",
    excerpt:
      "Why I ended up writing a small browser game instead of using an existing flashcard app, and the parts I got wrong on the way.",
    date: "2026-08-24",
    readingMinutes: 6,
    tags: ["Side Project", "TypeScript", "Web Audio"],
    emoji: "🐔",
  },
  {
    slug: "explainable-models",
    title: "Notes on models people actually use",
    excerpt:
      "Why I usually keep a simple decision tree next to the gradient boosting model when I hand something to a business team.",
    date: "2026-06-12",
    readingMinutes: 5,
    tags: ["Machine Learning", "Data Science"],
    emoji: "🌳",
  },
  {
    slug: "data-person-learns-frontend",
    title: "From notebook to something people use",
    excerpt: "Getting a model out of a notebook and in front of the people who are supposed to act on it.",
    date: "2026-04-03",
    readingMinutes: 4,
    tags: ["Data Science", "Delivery"],
    emoji: "🧠",
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
