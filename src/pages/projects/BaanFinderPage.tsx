import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function BaanFinderPage() {
  return (
    <ProjectDetail slug="baan-finder">
      <Section title="โจทย์">
        <p>
          เว็บหาห้องเช่าส่วนใหญ่บอกระยะห่างจากสถานีเป็นเส้นตรง แต่ในความจริงต้องเดินอ้อมซอยหรือข้ามถนนใหญ่
          ผู้ใช้จึงอยากรู้ระยะเดินจริง
        </p>
      </Section>
      <Section title="วิธีแก้">
        <p>
          คำนวณเส้นทางเดินจากทุกโครงการไปทุกสถานีล่วงหน้าด้วย Mapbox Directions แล้วเก็บผลไว้ใน Firestore
          ทำให้กรองผลในแอปได้ทันทีโดยไม่ต้องเรียก API ทุกครั้ง
        </p>
      </Section>
      <Gallery captions={["แผนที่ heatmap ราคา", "ตัวกรองระยะเดิน", "หน้ารายละเอียดห้อง", "การแจ้งเตือนห้องใหม่"]} />
    </ProjectDetail>
  );
}
