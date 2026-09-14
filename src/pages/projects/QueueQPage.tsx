import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function QueueQPage() {
  return (
    <ProjectDetail slug="queue-q">
      <Section title="โจทย์">
        <p>ลูกค้าคลินิกต้องนั่งรอหน้าร้านนานโดยไม่รู้ว่าเหลืออีกกี่คิว และมักลืมนัด ทำให้คิวว่างเสียเปล่า</p>
      </Section>
      <Section title="วิธีแก้">
        <p>
          ทำเป็น LINE LIFF app เพราะลูกค้าเกือบทุกคนมี LINE อยู่แล้ว ใช้ Supabase Realtime อัปเดตคิวทันที
          และส่งข้อความเตือนก่อนถึงคิว 15 นาที
        </p>
      </Section>
      <Gallery captions={["หน้าจองคิวใน LINE", "หน้าจอคิวของพนักงาน"]} />
    </ProjectDetail>
  );
}
