import type { Education, Experience } from "./types";

export const profile = {
  name: "Peerapat T.",
  nameTh: "พีรพัฒน์",
  title: "Full-stack Developer",
  location: "กรุงเทพฯ, ประเทศไทย",
  email: "hello@example.com",
  intro:
    "นักพัฒนาซอฟต์แวร์ที่ชอบสร้างของที่คนใช้งานจริง ทำงานทั้งฝั่ง frontend และ backend มากว่า 6 ปี สนใจเป็นพิเศษเรื่อง product ที่แก้ปัญหาให้ธุรกิจและชุมชนในประเทศไทย",
  bio: [
    "ผมเริ่มเขียนโปรแกรมตั้งแต่สมัยมัธยมจากการทำเว็บให้ชมรม จนได้เรียนต่อด้านวิศวกรรมคอมพิวเตอร์ และเข้าสู่วงการ startup ตั้งแต่ปีแรกหลังจบ",
    "ตลอดหลายปีที่ผ่านมาได้ทำงานกับทีมหลากหลายขนาด ตั้งแต่ทีม 3 คนที่ต้องทำทุกอย่างเอง ไปจนถึงองค์กรที่มีวิศวกรหลายร้อยคน ทำให้เข้าใจทั้งการ ship ให้เร็วและการดูแลระบบให้มั่นคงในระยะยาว",
    "นอกเวลางานชอบทำ open source เล็ก ๆ ที่ช่วยนักพัฒนาไทย ถ่ายภาพ street และปั่นจักรยานรอบกรุงเทพฯ",
  ],
  stats: [
    { label: "ปีประสบการณ์", value: "6+" },
    { label: "โปรเจกต์ที่ส่งมอบ", value: "40+" },
    { label: "ผู้ใช้งานรวม", value: "250K" },
  ],
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Vue", "Tailwind CSS", "React Native"] },
  { group: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Kafka"] },
  { group: "DevOps", items: ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions", "Terraform"] },
  { group: "Other", items: ["Figma", "System Design", "LLM Integration", "Technical Writing"] },
];

export const experiences: Experience[] = [
  {
    company: "Siam Commerce Tech",
    role: "Senior Full-stack Engineer",
    period: "2024 — ปัจจุบัน",
    location: "กรุงเทพฯ (Hybrid)",
    summary: "ดูแลทีม checkout และ payment ของแพลตฟอร์ม e-commerce ที่มีผู้ใช้หลายล้านคน",
    achievements: [
      "นำทีม 5 คนย้ายระบบ checkout จาก monolith ไป microservices",
      "เพิ่ม conversion rate ของหน้าชำระเงิน 12%",
      "วางมาตรฐาน code review และ mentoring วิศวกรรุ่นใหม่",
    ],
  },
  {
    company: "Kanom Labs",
    role: "Full-stack Developer",
    period: "2021 — 2024",
    location: "เชียงใหม่ / Remote",
    summary: "Software house ขนาดเล็กที่รับพัฒนาเว็บและแอปให้ลูกค้าทั้งไทยและต่างประเทศ",
    achievements: [
      "ส่งมอบโปรเจกต์ลูกค้ากว่า 20 โปรเจกต์",
      "สร้าง internal starter kit ที่ลดเวลาเริ่มโปรเจกต์ใหม่จาก 2 สัปดาห์เหลือ 2 วัน",
      "ดูแล infrastructure บน AWS ของลูกค้า 8 ราย",
    ],
  },
  {
    company: "StartBKK",
    role: "Junior Developer",
    period: "2019 — 2021",
    location: "กรุงเทพฯ",
    summary: "Startup ด้าน HR tech ช่วงระดมทุน Series A",
    achievements: [
      "พัฒนาระบบลงเวลาทำงานผ่านมือถือด้วย geofencing",
      "เขียน test อัตโนมัติจน coverage เพิ่มจาก 20% เป็น 75%",
    ],
  },
];

export const education: Education[] = [
  {
    school: "มหาวิทยาลัยตัวอย่าง",
    degree: "วศ.บ. วิศวกรรมคอมพิวเตอร์",
    period: "2015 — 2019",
    note: "เกียรตินิยมอันดับ 2 · ประธานชมรมโปรแกรมมิ่ง",
  },
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "Google Professional Cloud Developer",
  "Certified Kubernetes Application Developer (CKAD)",
];
