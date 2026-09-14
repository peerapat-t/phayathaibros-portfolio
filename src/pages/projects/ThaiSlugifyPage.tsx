import ProjectDetail, { Section } from "../../components/ProjectDetail";

const usage = `npm install thai-slugify

import { slugify } from "thai-slugify";

slugify("สวัสดีชาวโลก"); // "sawatdi-chao-lok"`;

export default function ThaiSlugifyPage() {
  return (
    <ProjectDetail slug="thai-slugify">
      <Section title="การใช้งาน">
        <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-200">
          <code>{usage}</code>
        </pre>
      </Section>
      <Section title="ทำไมถึงสร้าง">
        <p>
          URL ที่เป็นภาษาไทยจะถูก encode เป็นตัวอักษรยาวเหยียดเวลาแชร์ ไลบรารีที่มีอยู่ก็ลากเอา dependency ใหญ่ ๆ
          มาด้วย จึงเขียนตัวที่เล็กและไม่พึ่งอะไรเลยขึ้นมาเอง
        </p>
      </Section>
    </ProjectDetail>
  );
}
