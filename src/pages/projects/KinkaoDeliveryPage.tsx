import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function KinkaoDeliveryPage() {
  return (
    <ProjectDetail slug="kinkao-delivery">
      <Section title="โจทย์">
        <p>
          ร้านอาหารในชุมชนต้องจ่ายค่า GP ให้แพลตฟอร์มใหญ่สูงถึง 30% ทำให้กำไรแทบไม่เหลือ
          เป้าหมายคือทำระบบที่ร้านเปิดรับออเดอร์เองได้ในราคาที่จ่ายไหว
        </p>
      </Section>
      <Section title="วิธีแก้">
        <p>
          แยกระบบเป็น 3 ส่วน คือหน้าร้านสำหรับลูกค้า แดชบอร์ดเจ้าของร้าน และแอปไรเดอร์
          ใช้ PostgreSQL เป็นแหล่งข้อมูลหลัก และส่งสถานะออเดอร์แบบ real-time ผ่าน WebSocket
        </p>
        <p>หน้าเมนูทำเป็น static แล้ว revalidate เมื่อร้านแก้ไขเมนู ทำให้โหลดเร็วแม้ใช้ 4G</p>
      </Section>
      <Gallery captions={["หน้าเมนูร้านบนมือถือ", "แดชบอร์ดเจ้าของร้าน", "แอปไรเดอร์", "หน้าติดตามออเดอร์"]} />
    </ProjectDetail>
  );
}
