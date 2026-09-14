import ProjectDetail, { Section } from "../../components/ProjectDetail";

const usage = `$ dotsync init git@github.com:me/dotfiles.git
$ dotsync add ~/.zshrc ~/.config/nvim
$ dotsync push

# on another machine
$ dotsync pull`;

export default function DotsyncPage() {
  return (
    <ProjectDetail slug="dotfiles-cli">
      <Section title="การใช้งาน">
        <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-200">
          <code>{usage}</code>
        </pre>
      </Section>
      <Section title="ทำไมถึงเลือก Rust">
        <p>อยากได้ binary ไฟล์เดียวที่ใช้ได้ทั้ง 3 OS โดยไม่ต้องติดตั้ง runtime อะไรเพิ่ม และ start เร็ว</p>
      </Section>
    </ProjectDetail>
  );
}
