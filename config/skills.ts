import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Languages
  {
    name: "Python",
    description:
      "General-purpose programming language for scripting, automation, and ML.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Java",
    description:
      "Object-oriented language for scalable backend and Android development.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "C/C++",
    description:
      "Low-level programming for performance-critical systems and applications.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "SQL",
    description: "Query language for relational databases.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Rust",
    description: "Memory-safe systems programming language.",
    rating: 3,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "OCaml",
    description: "Functional programming language for type-safe applications.",
    rating: 3,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Kotlin",
    description: "Modern language for Android and multiplatform development.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Swift",
    description: "Apple's language for iOS and macOS development.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Javascript",
    description: "Create interactive and dynamic web experiences.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description: "Structure web content with HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description: "Style web pages with Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  // Frameworks & Libraries
  {
    name: "React",
    description: "Build interactive UIs with components and hooks.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for scalable backend services.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "FastAPI",
    description: "High-performance Python web framework for APIs.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for research and production.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "TensorFlow",
    description: "End-to-end open source platform for machine learning.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Scikit-Learn",
    description: "Machine learning library for Python.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Seaborn",
    description: "Statistical data visualization library for Python.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Pandas",
    description: "Data analysis and manipulation tool for Python.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
  },
  // Cloud & DevOps Tools
  {
    name: "Git",
    description: "Version control system for tracking code changes.",
    rating: 5,
    icon: Icons.gitBranch,
  },
  {
    name: "Azure",
    description: "Microsoft's cloud computing platform.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "GCP",
    description: "Google Cloud Platform for scalable cloud solutions.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Docker",
    description: "Containerization platform for deploying applications.",
    rating: 5,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Kubernetes",
    description: "Container orchestration for automating deployment.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Postman",
    description: "API development and testing tool.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "MongoDB",
    description: "NoSQL database for flexible data storage.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Android Studio",
    description: "IDE for Android app development.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Xcode",
    description: "Apple's IDE for iOS/macOS development.",
    rating: 4,
    icon: Icons.nodejs, // fallback icon
  },
  {
    name: "Unity",
    description: "Game engine for cross-platform development.",
    rating: 3,
    icon: Icons.nodejs, // fallback icon
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);
export const featuredSkills = skills.slice(0, 6);
