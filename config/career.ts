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
    company: "Amazon",
    location: "Arlington, VA",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "• Reduced sustainability research time by 70% with an automated ingestion pipeline using BeautifulSoup, Selenium, and AWS Step Functions, scraping 3K+ monthly documents across government, academic, and industry sources",
      "• Discovered 15+ sustainability topics over 24 months of historical data with 90% classification accuracy using BERTopic clustering, Amazon Bedrock zero-shot extraction, and pgvector semantic search",
      "• Built full-stack dashboard with Express.js and React featuring 5 visualizations and ARIMA-powered trend predictions achieving 70% accuracy; deployed on AWS (ECS Fargate, S3, CloudFront) using Docker and GitHub Actions",
    ],
    skills: ["Python", "AWS", "React", "Docker", "Express.js", "Selenium", "BeautifulSoup", "BERTopic", "Amazon Bedrock", "pgvector", "GitHub Actions", "ARIMA"],
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
      "• Reduced regulatory audit preparation time by 60% for 50+ government auditors by architecting a RAG-powered AI chatbot with LangChain, Qdrant vector database, and Groq-hosted LLaMA for Medicaid/CHIP policy analysis",
      "• Achieved 95% citation accuracy and sub-100ms latency across 200+ policy documents through optimized prompt engineering, metadata filtering, and semantic reranking via Flask API with MCP tool integration",
      "• Built a full-stack platform with Next.js, React, and TypeScript featuring real-time chat interface and PDF annotation tools with DynamoDB-backed collaborative document review and version history",
    ],
    skills: ["Python", "LangChain", "Qdrant", "LLaMA", "Groq", "Flask", "MCP", "Next.js", "React", "TypeScript", "DynamoDB"],
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
      "• Saved $630K in annual cloud costs for a global banking client by building a FinOps agent using Claude MCP and FastAPI that answers financial queries across PostgreSQL billing databases and rightsizes idle Azure resources",
      "• Scaled agent to 10+ enterprise customers by deploying on multi-tenant Kubernetes with CI/CD pipelines using Jenkins, Docker, and AWS EKS, achieving 99.9% uptime and sub-300ms latency",
    ],
    skills: ["Python", "Claude MCP", "FastAPI", "PostgreSQL", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS EKS"],
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
      "• Achieved 0.85 AUROC for drug craving and hypertension prediction by training BiLSTM-attention deep learning models with PyTorch on wearable biosignal data (2 papers under review at NPJ Biosensing & NPJ Mental Health)",
      "• Reduced manual data processing by 90% by engineering ETL pipeline with Python, Pandas, and scikit-learn to process 3M+ minute-level biosignal records from Fitbit devices across 40+ study participants",
    ],
    skills: ["Python", "PyTorch", "Pandas", "scikit-learn", "Deep Learning", "ETL"],
    companyUrl: "https://techlab.ucsf.edu",
    logo: "/career/ucsf.png",
  },
];
