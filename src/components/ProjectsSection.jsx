import React, { useState } from 'react';

// Update with personal experiences only
const projectData = [
  {
    id: 1,
    title: "Aquila Clouds",
    description: "Software Engineering Intern",
    category: "Internship",
    techStack: [
      "RAG-Enhanced LLMs",
      "MCP Servers",
      "Vector DB",
      "FastAPI",
      "PostgreSQL",
      "Kubernetes",
      "Spring Boot"
    ],
    date: "May 2025 – Present",
    image: "/aquila.png",
    link: "https://aquilaclouds.com/",
  },
  {
    id: 2,
    title: "TECH Lab",
    description: "Research Assistant",
    category: "Research",
    techStack: [
      "Signal Processing",
      "Contrastive Learning",
      "Autoregressive Forecasting",
      "PyTorch"
    ],
    date: "June 2024 – Present",
    image: "/ucsf.png",
    link: "https://www.ucsf.edu/",
  },
  {
    id: 3,
    title: "Wall Lab",
    description: "Research Intern",
    category: "Research",
    techStack: [
      "Edge Computing",
      "Model Optimization",
      "Federated Learning",
      "TensorFlow Lite",
      "Kotlin",
      "Swift"
    ],
    date: "June 2021 – May 2023",
    image: "/stanford.png",
    link: "https://med.stanford.edu/",
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projectData.map(project => project.category))];

  const filteredProjects =
    filter === 'All'
      ? projectData
      : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          A showcase of my professional experiences and research roles.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
              filter === category
                ? 'bg-neon-cyan text-background shadow-neon-glow'
                : 'bg-background-light text-text-secondary hover:text-neon-cyan'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="group relative px-6 py-3 bg-background-light border border-neon-cyan rounded-sm overflow-hidden hover:shadow-neon-glow transition duration-300">
          <span className="relative z-10 text-neon-cyan group-hover:text-background transition duration-300">
            View All Experiences
          </span>
          <span className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  // Pick out the “first three” badges, and lump the rest into a separate array
  const alwaysVisible = project.techStack.slice(0, 3);
  const onHoverOnly = project.techStack.slice(3);

  return (
    <article className="group relative bg-background-light border border-neon-cyan/20 rounded-md overflow-hidden aspect-[3/2] transform transition-all duration-500">
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
        <span className="inline-block px-2 md:px-3 py-1 bg-neon-purple/80 text-white text-[10px] md:text-xs rounded-full mb-2 md:mb-3 backdrop-blur-sm">
          {project.category}
        </span>

        <h3 className="text-xl md:text-2xl font-extrabold text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

        {/* ALWAYS‐VISIBLE TECH BADGES (up to 3) */}
        <div className="flex flex-wrap gap-1 md:gap-2 mt-2 mb-3">
          {alwaysVisible.map(tech => (
            <span
              key={tech}
              className="px-1 md:px-2 py-0.5 md:py-1 bg-background/50 text-neon-cyan text-[8px] md:text-xs rounded backdrop-blur-sm border border-neon-cyan/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* HOVER‐ONLY SECTION (md+): rest of badges + “Learn More” */}
        {onHoverOnly.length > 0 && (
          <div className="hidden md:flex md:flex-col md:gap-2">
            {/* Tech badges hidden by default; appear only on group‐hover */}
            <div className="flex flex-wrap gap-1 md:gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {onHoverOnly.map(tech => (
                <span
                  key={tech}
                  className="px-1 md:px-2 py-0.5 md:py-1 bg-background/50 text-neon-cyan text-[8px] md:text-xs rounded backdrop-blur-sm border border-neon-cyan/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* “Learn More” link hidden by default; appear on hover */}
            <div className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 mt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 md:gap-2 text-neon-cyan text-[10px] md:text-sm hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-4 md:h-4"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-0 right-0 border-t-2 border-r-2 border-neon-cyan w-6 h-6 md:w-8 md:h-8 opacity-70" />
      <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-neon-cyan w-6 h-6 md:w-8 md:h-8 opacity-70" />
    </article>
  );
};

export { projectData };
export default ProjectsSection;
