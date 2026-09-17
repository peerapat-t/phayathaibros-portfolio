import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function ChickNCowPage() {
  return (
    <ProjectDetail slug="chick-n-cow">
      <Section title="Why I built it">
        <p>
          Flashcard apps for kids come with generic pictures and voices. I wanted a game where the cards could be
          anything familiar to the child, such as family photos, with a voice they recognise.
        </p>
      </Section>
      <Section title="How it works">
        <ul className="list-disc space-y-1 pl-5">
          <li>Hash-based routing for the game, card library, history and settings screens</li>
          <li>Web Audio API for sound effects, music that speeds up with each level, and voice clips</li>
          <li>In-browser voice recording with a waveform trimmer and automatic silence removal</li>
          <li>A small REST API stores cards, sounds and play history</li>
        </ul>
      </Section>
      <Section title="What I learned">
        <p>
          Building without a UI framework taught me how much React normally handles for me, and how to keep audio
          timing reliable across mobile browsers.
        </p>
      </Section>
      <Gallery captions={["Gameplay", "Card editor with voice recording"]} />
    </ProjectDetail>
  );
}
