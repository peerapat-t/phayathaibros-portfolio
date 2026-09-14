import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

const tokens = ["#0f172a", "#1e293b", "#6366f1", "#a855f7", "#ec4899", "#f8fafc"];

export default function FintrackDesignSystemPage() {
  return (
    <ProjectDetail slug="fintrack-design-system">
      <Section title="โจทย์">
        <p>5 ทีมทำ UI กันเองคนละแบบ ปุ่มหน้าตาต่างกันเกือบ 20 แบบ ผู้ใช้สับสน และทีมเสียเวลาทำ component ซ้ำ</p>
      </Section>
      <Section title="Color tokens">
        <div className="flex flex-wrap gap-3">
          {tokens.map((c) => (
            <div key={c} className="text-center">
              <div className="h-14 w-14 rounded-xl border border-zinc-700" style={{ backgroundColor: c }} />
              <div className="mt-1 font-mono text-[10px] text-zinc-500">{c}</div>
            </div>
          ))}
        </div>
      </Section>
      <Gallery captions={["Component library บน Figma", "Storybook"]} />
    </ProjectDetail>
  );
}
