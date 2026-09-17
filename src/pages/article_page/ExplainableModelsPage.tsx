import ArticleDetail, { Section } from "../../components/ArticleDetail";

export default function ExplainableModelsPage() {
  return (
    <ArticleDetail slug="explainable-models">
      <p>
        Placeholder text — replace this with your own post. The outline below is only here so you can see how an
        article page is laid out.
      </p>
      <Section title="The accuracy trap">
        <p>Why the best scoring model is not always the one that gets used.</p>
      </Section>
      <Section title="Keeping a simple model around">
        <p>How a small decision tree helps a business team trust and act on the scores.</p>
      </Section>
    </ArticleDetail>
  );
}
