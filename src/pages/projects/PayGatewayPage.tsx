import ProjectDetail, { Section } from "../../components/ProjectDetail";

export default function PayGatewayPage() {
  return (
    <ProjectDetail slug="pay-gateway">
      <Section title="โจทย์">
        <p>
          แต่ละทีมเชื่อมต่อ API ธนาคารเองคนละแบบ ทำให้ logic การ retry และการกันตัดเงินซ้ำกระจัดกระจาย
          ทีมบัญชีต้องกระทบยอดด้วยมือทุกวัน
        </p>
      </Section>
      <Section title="สถาปัตยกรรม">
        <ul className="list-disc space-y-1 pl-5">
          <li>API กลางรับคำขอพร้อม idempotency key และบันทึกลง Redis</li>
          <li>ส่ง event ผ่าน Kafka ไปยัง adapter ของแต่ละธนาคาร</li>
          <li>Retry แบบ exponential backoff พร้อม dead-letter queue</li>
          <li>Job ตอนสิ้นวันดึง statement มากระทบยอดอัตโนมัติ</li>
        </ul>
      </Section>
      <Section title="หมายเหตุ">
        <p>เป็นระบบภายในองค์กร จึงไม่มีภาพหน้าจอหรือ source code ให้ดู</p>
      </Section>
    </ProjectDetail>
  );
}
