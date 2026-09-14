import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function WatGuidePage() {
  return (
    <ProjectDetail slug="wat-guide">
      <Section title="โจทย์">
        <p>
          นักท่องเที่ยวต่างชาติอยากรู้ประวัติของวัด แต่ป้ายข้อมูลมีแค่ภาษาไทย และสัญญาณอินเทอร์เน็ตในวัดหลายแห่งไม่ดี
        </p>
      </Section>
      <Section title="วิธีแก้">
        <p>
          ทำเป็น PWA ที่ดาวน์โหลดไฟล์เสียงและเนื้อหาของวัดเก็บไว้ทั้งหมดตั้งแต่สแกน QR ครั้งแรก
          หลังจากนั้นใช้งานแบบ offline ได้ตลอดการเที่ยว
        </p>
      </Section>
      <Gallery captions={["หน้าเลือกภาษา", "เครื่องเล่น audio tour"]} />
    </ProjectDetail>
  );
}
