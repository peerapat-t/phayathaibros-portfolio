import type { Project, ProjectCategory } from "./types";

export const categories: ProjectCategory[] = ["Web App", "Mobile", "Backend", "Design", "Open Source"];

export const projects: Project[] = [
  {
    slug: "kinkao-delivery",
    title: "KinKao Delivery",
    tagline: "แพลตฟอร์มสั่งอาหารสำหรับร้านท้องถิ่น",
    description:
      "ระบบสั่งอาหารออนไลน์ที่ช่วยให้ร้านอาหารเล็ก ๆ ในชุมชนเปิดรับออเดอร์ได้เองโดยไม่ต้องเสียค่า GP สูง มีทั้งหน้าร้านสำหรับลูกค้า แดชบอร์ดสำหรับเจ้าของร้าน และแอปสำหรับไรเดอร์",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Stripe"],
    year: 2026,
    role: "Lead Full-stack Developer",
    featured: true,
    cover: "from-orange-500 via-rose-500 to-fuchsia-600",
    highlights: [
      "ออกแบบระบบ real-time order tracking ด้วย WebSocket",
      "รองรับการชำระเงินผ่าน PromptPay QR และบัตรเครดิต",
      "ลดเวลาโหลดหน้าเมนูจาก 3.2s เหลือ 0.8s",
    ],
    metrics: [
      { label: "ร้านค้าที่ใช้งาน", value: "320+" },
      { label: "ออเดอร์ / เดือน", value: "45K" },
      { label: "Lighthouse", value: "98" },
    ],
    links: { live: "#", repo: "#" },
  },
  {
    slug: "saraban-ai",
    title: "Saraban AI",
    tagline: "ผู้ช่วยสรุปเอกสารราชการด้วย AI",
    description:
      "เครื่องมือที่อ่านหนังสือราชการ PDF แล้วสรุปใจความสำคัญ ดึงวันที่กำหนดส่ง และสร้างร่างหนังสือตอบกลับให้อัตโนมัติ ช่วยงานธุรการประหยัดเวลาได้หลายชั่วโมงต่อสัปดาห์",
    category: "Web App",
    tags: ["React", "TypeScript", "Python", "FastAPI", "LLM"],
    year: 2026,
    role: "Founder & Developer",
    featured: true,
    cover: "from-sky-500 via-indigo-500 to-violet-600",
    highlights: [
      "OCR ภาษาไทยแม่นยำสูงสำหรับเอกสารสแกน",
      "Pipeline แยกประเภทหนังสือ เช่น คำสั่ง ประกาศ บันทึกข้อความ",
      "ผู้ใช้งานจริงในหน่วยงานนำร่อง 12 แห่ง",
    ],
    metrics: [
      { label: "เอกสารที่ประมวลผล", value: "180K" },
      { label: "เวลาที่ประหยัดได้", value: "-70%" },
      { label: "หน่วยงานนำร่อง", value: "12" },
    ],
    links: { live: "#" },
  },
  {
    slug: "baan-finder",
    title: "BaanFinder",
    tagline: "แอปหาคอนโดใกล้รถไฟฟ้า",
    description:
      "แอปมือถือสำหรับค้นหาคอนโดและห้องเช่า โดยกรองตามระยะเดินไปสถานี BTS/MRT พร้อมแผนที่ความหนาแน่นราคาและการแจ้งเตือนเมื่อมีห้องใหม่ตรงตามเงื่อนไข",
    category: "Mobile",
    tags: ["React Native", "TypeScript", "Mapbox", "Firebase"],
    year: 2025,
    role: "Mobile Developer",
    featured: true,
    cover: "from-emerald-400 via-teal-500 to-cyan-600",
    highlights: [
      "คำนวณระยะเดินจริงจาก walking route ไม่ใช่เส้นตรง",
      "Heatmap ราคาเช่าแบบ interactive",
      "คะแนน 4.8 บน App Store",
    ],
    metrics: [
      { label: "ดาวน์โหลด", value: "60K+" },
      { label: "App Store", value: "4.8★" },
      { label: "MAU", value: "18K" },
    ],
    links: { live: "#" },
  },
  {
    slug: "thai-slugify",
    title: "thai-slugify",
    tagline: "ไลบรารีแปลงข้อความไทยเป็น URL slug",
    description:
      "แพ็กเกจ npm ขนาดเล็กที่แปลงข้อความภาษาไทยเป็น slug แบบถอดเสียงอ่าน (romanization) ตามหลักราชบัณฑิตยสภา ใช้งานได้ทั้ง Node และเบราว์เซอร์ ไม่มี dependency",
    category: "Open Source",
    tags: ["TypeScript", "npm", "Vitest"],
    year: 2025,
    role: "Maintainer",
    featured: false,
    cover: "from-lime-400 via-green-500 to-emerald-700",
    highlights: ["Zero dependencies, 3KB gzipped", "Test coverage 100%", "มี contributor จากชุมชน 15 คน"],
    metrics: [
      { label: "Weekly downloads", value: "8.2K" },
      { label: "GitHub stars", value: "640" },
    ],
    links: { repo: "#" },
  },
  {
    slug: "pay-gateway",
    title: "Unified Pay Gateway",
    tagline: "บริการรวมช่องทางชำระเงินหลายธนาคาร",
    description:
      "Microservice กลางสำหรับรวม API การชำระเงินของหลายธนาคารไว้หลัง interface เดียว มีระบบ retry, idempotency และ reconciliation อัตโนมัติทุกสิ้นวัน",
    category: "Backend",
    tags: ["Node.js", "TypeScript", "Kafka", "Redis", "Docker"],
    year: 2024,
    role: "Backend Engineer",
    featured: true,
    cover: "from-zinc-500 via-slate-600 to-zinc-800",
    highlights: [
      "รองรับ 1,500 transactions ต่อวินาทีช่วงพีค",
      "Idempotency key ป้องกันการตัดเงินซ้ำ",
      "Reconciliation อัตโนมัติ ลดงาน manual ของทีมบัญชี",
    ],
    metrics: [
      { label: "TPS peak", value: "1.5K" },
      { label: "Uptime", value: "99.98%" },
    ],
    links: {},
  },
  {
    slug: "wat-guide",
    title: "Wat Guide",
    tagline: "คู่มือเที่ยววัดแบบ audio tour",
    description:
      "เว็บแอปแบบ PWA ที่ให้นักท่องเที่ยวสแกน QR ในวัดเพื่อฟังเรื่องราวประวัติศาสตร์ได้ 4 ภาษา ทำงานแบบ offline ได้แม้สัญญาณอินเทอร์เน็ตไม่ดี",
    category: "Web App",
    tags: ["Vue", "PWA", "Service Worker", "i18n"],
    year: 2024,
    role: "Frontend Developer",
    featured: false,
    cover: "from-amber-400 via-yellow-500 to-orange-600",
    highlights: ["Offline-first ด้วย Service Worker", "รองรับ 4 ภาษา", "ใช้งานจริงใน 8 วัดสำคัญ"],
    links: { live: "#" },
  },
  {
    slug: "fintrack-design-system",
    title: "FinTrack Design System",
    tagline: "Design system สำหรับแอปการเงิน",
    description:
      "ออกแบบและพัฒนา design system ครบชุด ตั้งแต่ token, component library บน Figma ไปจนถึง React component พร้อม Storybook ให้ทีม 5 ทีมใช้ร่วมกัน",
    category: "Design",
    tags: ["Figma", "React", "Storybook", "Tailwind"],
    year: 2023,
    role: "Design Engineer",
    featured: false,
    cover: "from-pink-400 via-purple-500 to-indigo-600",
    highlights: ["Component กว่า 60 ชิ้น", "รองรับ dark mode และ accessibility AA", "ลดเวลาทำ UI ใหม่ลง 40%"],
    links: { live: "#" },
  },
  {
    slug: "farm-sense",
    title: "FarmSense",
    tagline: "ระบบ IoT วัดความชื้นดินสำหรับเกษตรกร",
    description:
      "เซ็นเซอร์วัดความชื้นดินที่ส่งข้อมูลผ่าน LoRaWAN ขึ้น dashboard และแจ้งเตือนผ่าน LINE เมื่อถึงเวลาต้องรดน้ำ ออกแบบให้ใช้แบตเตอรี่ได้นานเกือบปี",
    category: "Backend",
    tags: ["Go", "MQTT", "TimescaleDB", "LINE API"],
    year: 2023,
    role: "IoT & Backend Developer",
    featured: false,
    cover: "from-green-600 via-lime-600 to-yellow-500",
    highlights: ["แจ้งเตือนผ่าน LINE Notify", "เก็บข้อมูล time-series 2 ปีย้อนหลัง", "ติดตั้งจริง 40 แปลง"],
    links: { repo: "#" },
  },
  {
    slug: "queue-q",
    title: "QueueQ",
    tagline: "ระบบจองคิวคลินิกผ่าน LINE",
    description:
      "LINE LIFF app สำหรับจองคิวคลินิกและร้านเสริมสวย ลูกค้าเห็นคิวแบบ real-time และได้รับแจ้งเตือนก่อนถึงคิว ไม่ต้องนั่งรอหน้าร้าน",
    category: "Mobile",
    tags: ["LINE LIFF", "React", "Supabase", "TypeScript"],
    year: 2022,
    role: "Full-stack Developer",
    featured: false,
    cover: "from-green-400 via-emerald-500 to-teal-700",
    highlights: ["ไม่ต้องติดตั้งแอปเพิ่ม", "ลดการยกเลิกนัดลง 35%", "ใช้งานใน 25 สาขา"],
    links: { live: "#" },
  },
  {
    slug: "dotfiles-cli",
    title: "dotsync",
    tagline: "CLI ซิงก์ dotfiles ข้ามเครื่อง",
    description:
      "เครื่องมือ command line สำหรับ backup และซิงก์ไฟล์ config ระหว่างเครื่อง รองรับ macOS, Linux และ Windows พร้อมระบบ template ตามชื่อเครื่อง",
    category: "Open Source",
    tags: ["Rust", "CLI", "GitHub Actions"],
    year: 2022,
    role: "Author",
    featured: false,
    cover: "from-orange-600 via-red-600 to-rose-800",
    highlights: ["Binary เดียว ไม่ต้องติดตั้ง runtime", "Cross-platform", "320 stars บน GitHub"],
    links: { repo: "#" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
