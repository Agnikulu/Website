import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Agnik Banerjee's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Agnik Banerjee's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Agnik Banerjee's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Agnik Banerjee.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Agnik Banerjee's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Agnik Banerjee's resume.",
    metadata: {
      title: "Resume",
      description: "Agnik Banerjee's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Agnik Banerjee's professional journey and career timeline.",
    },
  },
  projects: {
    title: "Projects",
    description: "Personal and research projects I've built.",
    metadata: {
      title: "Projects",
      description: "Agnik Banerjee's personal and research projects.",
    },
  },
};
