import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  skills: (ValidSkills | string)[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "amazon",
    position: "Technical Project Manager, Contract",
    company: "Amazon Leo",
    location: "Arlington, VA",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-05-31"),
    description: [
      "• Reduced sustainability research time by 70% by architecting an AWS platform (ECS Fargate, S3) using Terraform",
      "• Automated cron-based ingestion of 3K+ docs/month with BeautifulSoup and Selenium via Amazon EventBridge",
      "• Discovered 15+ emerging topics with 90% precision using BERTopic and Amazon Bedrock zero-shot classification",
      "• Built dashboard with React and Express.js featuring ARIMA-powered predictions, detecting trends 6 weeks earlier",
      "• Met weekly with Amazon Leo lead engineers to review progress, align on deliverables, and ensure achievement of KPIs",
    ],
    skills: ["Python", "AWS", "React", "Docker", "Express.js", "Selenium", "BeautifulSoup", "BERTopic", "Amazon Bedrock", "Terraform", "EventBridge", "ARIMA"],
    companyUrl: "https://www.amazon.com",
    logo: "/career/amazon.png",
  },
  {
    id: "booz-allen",
    position: "Software Engineer, Contract",
    company: "Booz Allen Hamilton",
    location: "Bethesda, MD",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-31"),
    description: [
      "• Reduced review time by 60% for 50+ auditors by building a RAG-powered AI chatbot for Medicaid policy analysis",
      "• Achieved 95% citation accuracy across 20K+ policy documents using LangChain, Qdrant, and semantic reranking",
      "• Delivered sub-100ms latency via optimized prompt engineering, metadata filtering, and a Groq-hosted LLaMA LLM",
      "• Built full-stack platform with Next.js, React, and TypeScript with live chat, PDF annotation, and DynamoDB history",
      "• Demoed platform to Booz Allen senior engineers; approved for Medicaid audit deployment saving $50K+ annually",
    ],
    skills: ["Python", "LangChain", "Qdrant", "LLaMA", "Groq", "Next.js", "React", "TypeScript", "DynamoDB"],
    companyUrl: "https://www.boozallen.com",
    logo: "/career/booz.png",
  },
  {
    id: "aquila-clouds",
    position: "Software Engineer Intern",
    company: "Aquila Clouds",
    location: "Pleasanton, CA",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-09-30"),
    description: [
      "• Saved $630K in annual cloud costs for a global banking client by building a FinOps agent using Claude MCP",
      "• Eliminated 150+ idle Azure resources by automating rightsizing and enabling Q&A over PostgreSQL billing databases",
      "• Scaled agent to 10+ enterprise customers with 99.9% uptime and sub-300ms latency by deploying on multi-tenant Kubernetes with CI/CD using Jenkins, Docker, and AWS EKS",
    ],
    skills: ["Python", "Claude MCP", "PostgreSQL", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS EKS"],
    companyUrl: "https://aquilaclouds.com",
    logo: "/career/aquila.png",
  },
  {
    id: "ucsf-techlab",
    position: "AI Research Assistant",
    company: "University of California, San Francisco - TECH Lab",
    location: "Remote",
    startDate: new Date("2024-06-01"),
    endDate: "Present",
    description: [
      "• Authored 2 papers under review at NPJ Biosensing & NPJ Mental Health on biosignal-based health risk analysis",
      "• Achieved 0.85 AUROC for drug craving and hypertension prediction using BiLSTM-attention models in PyTorch",
      "• Reduced manual data processing by 90% engineering a Python ETL pipeline (Pandas, scikit-learn) to process 3M+ minute-level FitBit records across 40+ study participants",
    ],
    skills: ["Python", "PyTorch", "Pandas", "scikit-learn", "Deep Learning", "ETL"],
    companyUrl: "https://techlab.ucsf.edu",
    logo: "/career/ucsf.png",
  },
  {
    id: "stanford-wall-lab",
    position: "AI Research Intern",
    company: "The Wall Lab, Stanford Medicine",
    location: "Stanford, CA",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2023-05-01"),
    description: [
      "• Published paper in JMIR Formative Research; collaborated with Stanford's Wall Lab on real-time autism screening",
      "• Shipped facial expression classifier to 10K+ users on Android with on-device ML inference for clinical therapy sessions",
      "• Achieved 14× model compression with 1.12% accuracy trade-off via TensorFlow Lite quantization and weight pruning",
    ],
    skills: ["TensorFlow", "TensorFlow Lite", "Python", "Java", "Android"],
    companyUrl: "https://med.stanford.edu/wall-lab.html",
    logo: "/career/stanford.png",
  },
];
