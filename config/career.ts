import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[]; // summary copied exactly from resume (including bullets/header lines)
  // allow known ValidSkills or arbitrary strings (e.g. "Agile", "Android Studio", "scikit-learn")
  skills: (ValidSkills | string)[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "booz-allen",
    position: "Software Engineering Intern",
    company: "Booz Allen Hamilton",
    location: "Bethesda, MD",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "• Built an end-to-end RAG pipeline that extracted, embedded, and chunked 200+ Medicaid/CHIP policy PDFs using LangChain & Qdrant; exposed REST APIs to serve 50+ auditors with cited, section-linked answers",
      "• Engineered hybrid retrieval (vector + keyword search) with version-aware filtering and reranking logic, achieving 92% accuracy; integrated DynamoDB persistence and guardrail fallbacks to ensure 99% answer traceability"
    ],
    skills: ["Agile", "RESTful APIs", "Python", "LangChain", "Qdrant", "DynamoDB"],
    companyUrl: "https://www.boozallen.com",
    logo: "/career/booz.png",
  },
  {
    id: "aquila-clouds",
    position: "Software Engineering Intern",
    company: "Aquila Clouds",
    location: "Pleasanton, CA",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-09-30"),
    description: [
      "• Developed a RAG-enhanced text-to-SQL agent using Claude-MCP, Pinecone vector DB, and FastAPI to answer financial questions from relational PostgreSQL databases and eliminate idle resources with Azure Resource Graph, saving $0.63 million over a $6.9 million footprint of over 13K VMs and 7.5K storage containers",
      "• Designed, containerized, and deployed custom MCP server using Docker and Kubernetes and set up Jenkins CI/CD for rolling releases, achieving 99.9% uptime with sub-300ms median latency for 10+ concurrent enterprise users",
    ],
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
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
      "Built personalized XGBoost & SimCLR models in PyTorch to predict high stress (0.85 AUROC) and drug usage/craving (0.68 AUROC) from minute-level Fitbit data; two papers are in publication at NPJ Digital Medicine",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn"],
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
      "• Developed a facial expression classifier with 14× fewer parameters and only 1.12% lower accuracy than state-of-the-art models; deployed it on the lab’s Android version of the ”GuessWhat?” app (10K+ downloads) using TensorFlow Lite for real-time detection and treatment of autism-spectrum disorder in young children",
    ],
    skills: ["TensorFlow", "Android Studio", "Python", "Java"],
    companyUrl: "https://wall-lab.stanford.edu",
    logo: "/career/stanford.png",
  },
];
