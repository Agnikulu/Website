import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category?: string;
}

export const skillsUnsorted: skillsInterface[] = [
  // Languages
  {
    name: "Python",
    description:
      "General-purpose programming language for scripting, automation, and ML.",
    rating: 5,
    icon: Icons.python,
    category: "Languages",
  },
  {
    name: "Java",
    description:
      "Object-oriented language for scalable backend and Android development.",
    rating: 5,
    icon: Icons.java,
    category: "Languages",
  },
  {
    name: "Go",
    description:
      "Statically typed language for high-performance concurrent systems.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Languages",
  },
  {
    name: "TypeScript",
    description:
      "Typed superset of JavaScript for scalable web applications.",
    rating: 5,
    icon: Icons.typescript,
    category: "Languages",
  },
  {
    name: "JavaScript",
    description: "Create interactive and dynamic web experiences.",
    rating: 5,
    icon: Icons.javascript,
    category: "Languages",
  },
  {
    name: "SQL",
    description: "Query language for relational databases.",
    rating: 4,
    icon: Icons.mysql,
    category: "Languages",
  },
  {
    name: "C/C++",
    description:
      "Low-level programming for performance-critical systems and applications.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Languages",
  },
  // Frameworks
  {
    name: "React",
    description: "Build interactive UIs with components and hooks.",
    rating: 5,
    icon: Icons.react,
    category: "Frameworks",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework with SSR and static generation.",
    rating: 5,
    icon: Icons.nextjs,
    category: "Frameworks",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for scalable backend services.",
    rating: 5,
    icon: Icons.nodejs,
    category: "Frameworks",
  },
  {
    name: "FastAPI",
    description: "High-performance Python web framework for APIs.",
    rating: 4,
    icon: Icons.python,
    category: "Frameworks",
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework for APIs and microservices.",
    rating: 4,
    icon: Icons.python,
    category: "Frameworks",
  },
  {
    name: "Spring Boot",
    description: "Java framework for production-ready enterprise applications.",
    rating: 3,
    icon: Icons.java,
    category: "Frameworks",
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for research and production.",
    rating: 5,
    icon: Icons.pytorch,
    category: "Frameworks",
  },
  {
    name: "TensorFlow",
    description: "End-to-end open source platform for machine learning.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Frameworks",
  },
  // Tools & Infrastructure
  {
    name: "AWS",
    description: "Amazon Web Services cloud computing platform.",
    rating: 5,
    icon: Icons.amazonaws,
    category: "Tools & Infrastructure",
  },
  {
    name: "Docker",
    description: "Containerization platform for deploying applications.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
    category: "Tools & Infrastructure",
  },
  {
    name: "Kubernetes",
    description: "Container orchestration for automating deployment.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Tools & Infrastructure",
  },
  {
    name: "Kafka",
    description: "Distributed event streaming platform for real-time data pipelines.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Tools & Infrastructure",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database system.",
    rating: 4,
    icon: Icons.mysql,
    category: "Tools & Infrastructure",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for flexible data storage.",
    rating: 5,
    icon: Icons.mongodb,
    category: "Tools & Infrastructure",
  },
  {
    name: "Redis",
    description: "In-memory data store for caching and real-time applications.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Tools & Infrastructure",
  },
  {
    name: "Elasticsearch",
    description: "Distributed search and analytics engine.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
    category: "Tools & Infrastructure",
  },
  {
    name: "Git",
    description: "Version control system for tracking code changes.",
    rating: 5,
    icon: Icons.gitBranch,
    category: "Tools & Infrastructure",
  },
  // AI/ML
  {
    name: "LangChain",
    description: "Framework for building LLM-powered applications with RAG.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
    category: "AI/ML",
  },
  {
    name: "scikit-learn",
    description: "Machine learning library for Python.",
    rating: 4,
    icon: Icons.python,
    category: "AI/ML",
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);
export const featuredSkills = skills.slice(0, 6);
