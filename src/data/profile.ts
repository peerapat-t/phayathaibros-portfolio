import type { Award, Education, Experience, Skill } from "./types";

export const profile = {
  name: "Peerapat Tancharoen",
  nameShort: "Peerapat",
  siteName: "Phayathai Bros",
  siteTagline: "Peerapat's Interests",
  title: "Data Scientist / AI Engineer",
  location: "Phayathai, Bangkok",
  email: "peerapat.tcr@gmail.com",
  lead: "I care more about the decision at the end than the model in the middle.",
  intro:
    "Most of my work starts with a business question — who the sales team should call, what customers actually respond to, which process is quietly eating everyone's afternoon — and works backwards to the data. These days that often means putting an LLM somewhere in the middle of it.",
  interestsLabel: "A few things I'm into at the moment:",
  bio: [
    "Economics for my bachelor's and master's degrees, then a second master's in business data science and a lot of AI training since. The economics part is probably why I start from the business question.",
    "I started out as a researcher at TDRI doing spatial analysis for transport policy, and later joined Kasikorn Asset Management, where I moved from marketing analytics into data science and now work on the company's AI transformation.",
    "Working in asset management also means I have picked up a fair bit about the products themselves: mutual funds, provident funds, private funds, equities and the tax-saving funds people buy at the end of the year. It helps when the data question is really a product question.",
    "I'm currently studying for an M.Sc. in Business Data Science at KMITL, looking at recommender systems for financial assets. On the side I build small projects, mostly as an excuse to learn how to get a model out of a notebook and in front of someone.",
  ],
  interests: [
    "Applying analytics, machine learning and AI to marketing",
    "Building web applications and using AI to solve real-life problems",
    "Social listening — what people are actually saying online",
    "Public transportation and how people move around a city",
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
  {
    group: "LLM & Automation",
    icon: "sparkle",
    items: ["LLM API", "LangChain", "LangGraph", "Langfuse", "Web Scraping", "Selenium"],
  },
  {
    group: "Financial Products",
    icon: "fund",
    items: ["Mutual Funds", "Provident Funds", "Private Funds", "Equities", "Tax-saving Funds (SSF/RMF)", "Asset Allocation"],
  },
  { group: "Web & Delivery", icon: "code", items: ["TypeScript", "React", "Vite", "Tailwind CSS", "Docker"] },
];

export const experiences: Experience[] = [
  {
    company: "Kasikorn Asset Management",
    role: "Senior Manager, Corporate Strategy — Process Improvement Engineer / Data Scientist",
    period: "2025 — Present",
    location: "Bangkok",
    summary:
      "Work on the company's AI transformation, turning internal processes into something an LLM can help with.",
    achievements: [
      {
        text: "Lead the AI transformation development project, covering tech stack selection, project feasibility and governance, with one AI engineer reporting to me",
      },
      {
        text: "Automated the KYC process: AI that checks the background of new account openings and summarises the customer risk profile",
        stack: ["LLM", "Python"],
      },
      {
        text: "AI email drafter for the call centre, built with the Salesforce team and integrated into the existing CRM",
        stack: ["LLM", "Python", "SQL", "Salesforce"],
      },
      {
        text: "Document OCR checker and reconciliation tool that reads and cross-checks customer documents for the call centre team",
        stack: ["LLM", "VLM", "Python"],
      },
    ],
  },
  {
    company: "Kasikorn Asset Management",
    role: "Manager, Corporate Strategy — Data Scientist",
    period: "2022 — 2025",
    location: "Bangkok",
    summary: "Built models and dashboards for the sales and marketing teams across mutual funds, provident funds and private funds.",
    achievements: [
      {
        text: "Social Listening Dashboard that uses web scraping and an LLM API to track customer sentiment and needs on our Facebook page",
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
      {
        text: "Network analysis of how customers move between funds, used to suggest the next fund to offer them",
        stack: ["Python", "NetworkX"],
      },
      {
        text: "Business financial tracking for fees, expenses and revenue across products",
        stack: ["SQL", "Python", "Power BI"],
      },
    ],
  },
  {
    company: "Kasikorn Asset Management",
    role: "Officer, Digital Marketing Strategy — Data Analyst / Business Intelligence",
    period: "Jul 2020 — 2022",
    location: "Bangkok",
    summary:
      "Worked closely with the marketing teams — digital marketing, the RM team and mass marketing — on reporting and customer analysis.",
    achievements: [
      {
        text: "Customer Tracking Dashboard that combines data from multiple products so the sales team can follow customers in real time",
        stack: ["SQL", "Python", "Power BI"],
      },
      {
        text: "In-depth analyses of mutual fund, provident fund and private fund topics to tailor communication and marketing strategies",
        stack: ["SQL", "Python", "Power BI"],
      },
    ],
  },
  {
    company: "Thailand Development Research Institute (TDRI)",
    role: "Researcher",
    period: "Nov 2018 — Jun 2022",
    location: "Bangkok",
    summary: "Public policy research, mostly spatial data analysis.",
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
  {
    title: "K Star 2023",
    issuer: "Kasikorn Asset Management",
    kind: "Award",
    icon: "star",
    image: { src: "/images/awards/k-star-2023.jpg", caption: "KA Star Awards 2023 ceremony" },
  },
  { title: "SQL & Machine Learning", issuer: "DataCamp", kind: "Training", icon: "course" },
  { title: "Social Listening", issuer: "MANDALA", kind: "Training", icon: "listening" },
];
