import { ValidCategory, ValidSkills } from "./constants";

export interface ProjectInterface {
  id: string;
  name: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  publicationLink?: string;
  techStack: (ValidSkills | string)[];
  descriptionBullets: string[];
}

export const projects: ProjectInterface[] = [
  {
    id: "wikisurge",
    name: "WikiSurge",
    category: ["Full Stack", "Systems", "Data Engineering"],
    shortDescription:
      "Real-time analytics dashboard tracking 600K+ daily Wikipedia edits with Go, Kafka, and Elasticsearch.",
    websiteLink: "https://wikisurge.net",
    techStack: [
      "Go",
      "Kafka",
      "Elasticsearch",
      "Redis",
      "React",
      "WebSockets",
      "Grafana",
      "Prometheus",
    ],
    descriptionBullets: [
      "Built real-time analytics dashboard serving 1.5K+ monthly users tracking 600K+ daily Wikipedia edits using Go and Kafka with 3 parallel consumer groups, achieving 200ms p95 latency and indexing 2M+ events in Elasticsearch",
      "Engineered breaking news detector using Redis spike detection identifying events within 500ms by analyzing 10x edit rate anomalies across 50K+ pages, delivered via WebSocket dashboard with live edit feed and trending topics",
    ],
  },
  {
    id: "guesswhat",
    name: "GuessWhat?",
    category: ["AI/ML", "Mobile Dev"],
    shortDescription:
      "A Stanford University research game for families with children ages 3-12. Uses ML and AI to analyze children's behavioral expressions from home video to aid autism research.",
    websiteLink: "https://formative.jmir.org/2023/1/e39917",
    techStack: ["TensorFlow", "Java", "Android"],
    descriptionBullets: [
      "Shipped facial expression classifier to 10K+ users on Android and collaborated with Stanford's Wall Lab researchers to integrate on-device ML inference for real-time autism spectrum disorder screening during clinical therapy sessions",
      "Achieved 14x model compression with only 1.12% accuracy trade-off by applying TensorFlow Lite quantization and pruning, enabling sub-100ms classification on consumer devices; published research in JMIR Formative Research",
    ],
  },
];

export const featuredProjects = projects.slice(0, 2);
