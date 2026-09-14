import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function SarabanAiPage() {
  return (
    <ProjectDetail slug="saraban-ai">
      <Section title="โจทย์">
        <p>
          เจ้าหน้าที่ธุรการต้องอ่านหนังสือราชการวันละหลายสิบฉบับ หลายฉบับเป็นไฟล์สแกนที่ค้นหาข้อความไม่ได้
          ทำให้พลาดวันกำหนดส่งบ่อย
        </p>
      </Section>
      <Section title="Pipeline">
        <ol className="list-decimal space-y-1 pl-5">
          <li>OCR ภาษาไทยพร้อมแก้คำผิดจากการสแกน</li>
          <li>แยกประเภทหนังสือ เช่น คำสั่ง ประกาศ บันทึกข้อความ</li>
          <li>ดึงวันที่ ผู้ส่ง และสิ่งที่ต้องดำเนินการ</li>
          <li>สร้างร่างหนังสือตอบกลับตามแบบฟอร์มของหน่วยงาน</li>
        </ol>
      </Section>
      <Section title="สิ่งที่ได้เรียนรู้">
        <p>ความแม่นยำของ OCR สำคัญกว่าตัวโมเดลสรุป ถ้าข้อความต้นทางผิด สรุปที่ได้ก็ผิดตาม</p>
      </Section>
      <Gallery captions={["หน้าอัปโหลดเอกสาร", "ผลสรุปและวันกำหนดส่ง"]} />
    </ProjectDetail>
  );
}
