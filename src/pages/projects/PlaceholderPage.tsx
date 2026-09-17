import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

/** Temporary page shared by placeholder projects. Give each real project its own page. */
export default function PlaceholderPage({ slug }: { slug: string }) {
  return (
    <ProjectDetail slug={slug}>
      <Section title="The problem">
        <p>Describe what this project solves and who it is for.</p>
      </Section>
      <Section title="How it works">
        <p>Describe the architecture and the interesting technical decisions.</p>
      </Section>
      <Gallery captions={["Screenshot one", "Screenshot two"]} />
    </ProjectDetail>
  );
}
