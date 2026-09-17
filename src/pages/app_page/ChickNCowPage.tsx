import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function ChickNCowPage() {
  return (
    <ProjectDetail slug="chick-n-cow">
      <Section title="Why I built it">
        <p>
          The flashcard apps I tried came with generic pictures and voices. I wanted something where the cards could be
          familiar things, such as family photos, read out in a voice my kid already knows. It was also a good excuse to
          learn how to build one.
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
          Building without a UI framework showed me how much React usually handles for me. Audio timing on mobile
          browsers also took a few tries to get right, and I am sure there is a better way to do it.
        </p>
      </Section>
      <Gallery captions={["Gameplay", "Card editor with voice recording"]} />
    </ProjectDetail>
  );
}
