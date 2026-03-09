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
    position: "Software Engineer",
    company: "Amazon Leo",
    location: "Arlington, VA",
    startDate: new Date("2026-01-05"),
    endDate: "Present",
    description: [
      "• Reduced sustainability research time by 70% by architecting analytics platform on AWS (Terraform, ECS Fargate, S3)",
      "• Automated cron-based ingestion of 3K+ docs/month with BeautifulSoup and Selenium via Amazon EventBridge",
      "• Discovered 15+ emerging topics with 90% precision using BERTopic and Amazon Bedrock zero-shot classification",
      "• Built dashboard with React and Express.js featuring ARIMA-powered predictions, detecting trends 6 weeks earlier",
      "• Led 5-person UMD App Dev Club team to deliver platform to Amazon SMEs; approved for production deployment",
    ],
    skills: ["Python", "AWS", "React", "Docker", "Express.js", "Selenium", "BeautifulSoup", "BERTopic", "Amazon Bedrock", "Terraform", "EventBridge", "ARIMA"],
    companyUrl: "https://www.amazon.com",
    logo: "/career/amazon.png",
  },
  {
    id: "booz-allen",
    position: "Software Engineer",
    company: "Booz Allen Hamilton",
    location: "Bethesda, MD",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-31"),
    description: [
      "• Reduced review time by 60% for 50+ auditors by building a RAG-powered AI chatbot for Medicaid policy analysis",
      "• Achieved 95% citation accuracy across 200+ policy documents using LangChain, Qdrant, and semantic reranking",
      "• Delivered sub-100ms latency via optimized prompt engineering, metadata filtering, and a Groq-hosted LLaMA LLM",
      "• Built full-stack platform with Next.js, React, and TypeScript with live chat, PDF annotation, and DynamoDB history",
      "• Demoed to Booz Allen senior engineers as part of UMD App Dev Club team; approved for Medicaid audit deployment",
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
      "• Submitted 2 manuscripts to NPJ Biosensing & NPJ Mental Health on biosignal-based health risk analysis",
      "• Achieved 0.85 AUROC for drug craving and hypertension prediction using BiLSTM-attention models in PyTorch",
      "• Reduced manual data processing by 90% engineering a Python ETL pipeline (Pandas, scikit-learn) to process 3M+ minute-level FitBit records across 40+ study participants",
    ],
    skills: ["Python", "PyTorch", "Pandas", "scikit-learn", "Deep Learning", "ETL"],
    companyUrl: "https://techlab.ucsf.edu",
    logo: "/career/ucsf.png",
  },
];
