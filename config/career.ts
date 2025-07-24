import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "aquila-clouds",
    position: "Software Engineering Intern",
    company: "Aquila Clouds",
    location: "Pleasanton, CA",
    startDate: new Date("2025-05-01"),
    endDate: "Present",
    description: [
      "Developed a RAG-enhanced text-to-SQL agent using Claude-MCP, Pinecone vector DB, and PostgreSQL via FastAPI to eliminate idle Azure resources for Mashreq Bank (UAE).",
      "Implemented real‑time voice assistant for financial Q\&A via VAPI by streaming user speech into the MCP server",
      "Containerized and deployed the agent Designed and deployed end‑to‑end HTTPS/SSE architecture with load balancing, connection pooling, auto‑scaling, OAuth 2.1, and RBAC.",
    ],
    achievements: [
      "Trimmed annual cloud spend by >$630,000 over a $6.9 million footprint from over 13,000 VMs and 7,500 storage buckets.",
      "Delivered 99.9% uptime and sub-300 ms median query latency for 10+ concurrent enterprise users.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Azure",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    companyUrl: "https://aquilaclouds.com",
    logo: "/career/aquila.png",
  },
  {
    id: "ucsf-techlab",
    position: "Machine Learning Researcher",
    company: "TECH Lab, University of California, San Francisco",
    location: "Remote",
    startDate: new Date("2024-06-01"),
    endDate: "Present",
    description: [
      "Built self-supervised foundation models from scratch using PyTorch on thousands of hours of Fitbit data.",
      "Trained classifiers using contrastive learning to diagnose drug usage and craving.",
    ],
    achievements: [
      "Achieved less than 6 BPM and 300 steps average error per hour on large-scale Fitbit datasets.",
      "Achieved >70% sensitivity in hypertension and drug usage & craving diagnosis.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow"],
    companyUrl: "https://techlab.ucsf.edu",
    logo: "/career/ucsf.png",
  },
  {
    id: "stanford-walllab",
    position: "AI Intern",
    company: "The Wall Lab, Stanford University School of Medicine",
    location: "Palo Alto, CA",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2023-05-01"),
    description: [
      "Developed a facial expression classifier with 14× fewer parameters and only 1.12% lower accuracy than state-of-the-art models",
      "Led federated learning research by coordinating a team to create iOS and Android federated learning ecosystems.",
    ],
    achievements: [
      "Deployed classifier on 'GuessWhat?' app (10K+ downloads) for real-time detection and treatment of autism-spectrum disorder in young children.",
      "Created federated learning ecosystem for future lab initiatives.",
    ],
    skills: ["Python", "TensorFlow", "Java"],
    companyUrl: "https://wall-lab.stanford.edu",
    logo: "/career/stanford.png",
  },
];
