import type { Award, Education, Experience, Skill } from "./types";

export const profile = {
  name: "Peerapat T.",
  nameShort: "Peerapat",
  title: "Data Scientist",
  location: "Phayathai, Bangkok",
  email: "peerapat.tcr@gmail.com",
  intro:
    "I work with data in asset management by day, and build small web apps and games on the side. This is where I share the things I make for fun.",
  bio: [
    "I studied economics for both my bachelor's and master's degrees, so I like to start from the business problem before touching the data.",
    "I began my career as a researcher at TDRI, working on spatial analysis for transport policy. I then joined the Corporate Strategy team at Kasikorn Asset Management, where I build dashboards, predictive models and customer segmentation for the sales and marketing teams.",
    "I'm now studying for an M.Sc. in Business Data Science at KMITL on a KMITL & KBTG scholarship. In my spare time I build web apps to learn how to turn ideas and models into things people can use.",
  ],
  stats: [
    { label: "Years working with data", value: "6+" },
    { label: "Side projects", value: "4" },
    { label: "Awards & hackathons", value: "3" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/peerapat-t" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:peerapat.tcr@gmail.com" },
  ],
};

export const skills: Skill[] = [
  { group: "Data & Analytics", icon: "chart", items: ["SQL", "Python", "pandas", "Power BI", "QGIS"] },
  { group: "Machine Learning", icon: "network", items: ["scikit-learn", "LightGBM", "K-Means", "Decision Tree", "Matrix Factorization"] },
  { group: "LLM & Automation", icon: "sparkle", items: ["LLM API", "Web Scraping", "Selenium"] },
  { group: "Web Dev (learning)", icon: "code", items: ["TypeScript", "React", "Vite", "Tailwind CSS", "Docker"] },
];

export const experiences: Experience[] = [
  {
    company: "Kasikorn Asset Management",
    role: "Manager, Corporate Strategy",
    period: "Jul 2020 — Present",
    location: "Bangkok",
    summary:
      "Apply data analytics and machine learning to improve customer experience, sales and marketing for mutual funds and provident funds.",
    achievements: [
      {
        text: "Customer Tracking Dashboard that combines data from multiple products so the sales team can follow customers in real time",
        stack: ["SQL", "Python", "Power BI"],
      },
      {
        text: "In-depth analyses of mutual fund and provident fund topics to tailor communication and marketing strategies",
        stack: ["SQL", "Python", "Power BI"],
      },
      {
        text: "Social Listening Dashboard that uses web scraping and an LLM API to track customer sentiment and needs",
        stack: ["Python", "Selenium", "LLM API", "Power BI"],
      },
      {
        text: "Predictive model for tax-saving funds, used for upselling and customer acquisition",
        stack: ["SQL", "Python", "LightGBM", "Decision Tree"],
      },
      {
        text: "Clustering model for customer segmentation based on behaviour, preferences and purchasing patterns",
        stack: ["SQL", "Python", "K-Means"],
      },
    ],
  },
  {
    company: "Thailand Development Research Institute (TDRI)",
    role: "Researcher",
    period: "Nov 2018 — Jun 2022",
    location: "Bangkok",
    summary: "Public policy research with a focus on spatial data analysis.",
    achievements: [
      { text: "Analysed bus accessibility across Thailand using spatial data", stack: ["Python", "QGIS"] },
    ],
  },
];

export const education: Education[] = [
  {
    school: "King Mongkut's Institute of Technology Ladkrabang",
    degree: "M.Sc. Business Data Science",
    period: "Nov 2024 — Present",
    note: "Full scholarship from KMITL & KBTG (research program) · Thesis proposal: Hybrid Matrix Factorization for Financial Asset Recommendation",
    image: {
      src: "/images/education/kmitl.jpg",
      credit: "Adirach Toumlamoon, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bunnag_Building_KMITL_in_2023.jpg",
    },
  },
  {
    school: "Thammasat University",
    degree: "M.A. Economics",
    period: "Graduated Aug 2023",
    note: "GPA 3.97 · Thesis: Taxation Optimization to Control Air Pollution from Automobile",
    image: {
      src: "/images/education/thammasat.jpg",
      credit: "ScorpianPK, CC BY-SA 3.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Dome_of_Thammasat_University.jpg",
    },
  },
  {
    school: "Srinakharinwirot University",
    degree: "B.A. Economics",
    period: "Graduated May 2018",
    note: "GPA 3.65, first-class honours · Top 10 team in the Economics Phetyot Mongkut National Competition",
    image: {
      src: "/images/education/swu.jpg",
      credit: "Chainwit., CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Srinakharinwirot_University_Bangkok.jpg",
    },
  },
];

export const awards: Award[] = [
  { title: "Winner — M.A.D Data Science Hackathon", issuer: "KBTG", kind: "Hackathon", icon: "trophy" },
  { title: "K Heroes 2023", issuer: "KASIKORNBANK", kind: "Award", icon: "medal" },
  { title: "K Star 2023", issuer: "Kasikorn Asset Management", kind: "Award", icon: "star" },
  { title: "SQL & Machine Learning", issuer: "DataCamp", kind: "Training", icon: "course" },
  { title: "Social Listening", issuer: "MANDALA", kind: "Training", icon: "listening" },
];
