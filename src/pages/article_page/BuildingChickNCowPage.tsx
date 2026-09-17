import ArticleDetail, { Section } from "../../components/ArticleDetail";

export default function BuildingChickNCowPage() {
  return (
    <ArticleDetail slug="building-chick-n-cow">
      <p>
        Placeholder text — replace this with your own post. The outline below is only here so you can see how an
        article page is laid out.
      </p>
      <Section title="Why not an existing app">
        <p>What was missing from the flashcard apps you tried, and what you wanted instead.</p>
      </Section>
      <Section title="What surprised me">
        <p>The parts that turned out harder or easier than expected, such as audio timing on mobile browsers.</p>
      </Section>
      <Section title="What's next">
        <p>What you would like to add to the game later.</p>
      </Section>
    </ArticleDetail>
  );
}
