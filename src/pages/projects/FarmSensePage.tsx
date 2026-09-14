import ProjectDetail, { Gallery, Section } from "../../components/ProjectDetail";

export default function FarmSensePage() {
  return (
    <ProjectDetail slug="farm-sense">
      <Section title="โจทย์">
        <p>
          เกษตรกรรดน้ำตามความเคยชิน ทำให้บางช่วงเปลืองน้ำและบางช่วงพืชขาดน้ำ แปลงอยู่ไกลจากบ้านและไม่มี Wi-Fi
        </p>
      </Section>
      <Section title="วิธีแก้">
        <p>
          เซ็นเซอร์ส่งค่าผ่าน LoRaWAN ทุก 30 นาทีเพื่อประหยัดแบตเตอรี่ Gateway รับข้อมูลแล้วส่ง MQTT เข้า backend
          ที่เขียนด้วย Go ข้อมูลเก็บใน TimescaleDB และแจ้งเตือนผ่าน LINE เมื่อความชื้นต่ำกว่าเกณฑ์
        </p>
      </Section>
      <Gallery captions={["ตัวเซ็นเซอร์ที่ติดตั้งในแปลง", "กราฟความชื้นย้อนหลัง"]} />
    </ProjectDetail>
  );
}
