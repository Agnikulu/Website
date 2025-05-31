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
      "Vector DB",
      "MCP Servers",
      "FastAPI",
      "PostgreSQL",
      "Kubernetes"
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
      "Autoregressive-based Forecasting",
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
  const [hoveredProject, setHoveredProject] = useState(null);

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
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
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

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <article
      className="group relative bg-background-light border border-neon-cyan/20 rounded-md overflow-hidden h-[400px] transform transition-all duration-500"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 md:group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <span className="inline-block px-3 py-1 bg-neon-purple/80 text-white text-xs rounded-full mb-3 backdrop-blur-sm">
          {project.category}
        </span>

        <h3 className="text-2xl font-extrabold text-white group-hover:text-neon-cyan md:group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300">{project.description}</p>

        {/* TechStack: only show on md+; on mobile, hover does nothing */}
        <div className="hidden md:flex flex-wrap gap-2 mb-4 transition-all duration-300">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className={`px-2 py-1 bg-background/50 text-neon-cyan text-xs rounded backdrop-blur-sm border border-neon-cyan/30
                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* “Learn More” link: only show on md+ */}
        <div className={`hidden md:flex gap-3 transition-all duration-300`}>
          {isHovered && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="absolute top-0 right-0 border-t-2 border-r-2 border-neon-cyan w-8 h-8 opacity-70"></div>
      <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-neon-cyan w-8 h-8 opacity-70"></div>
    </article>
  );
};

export { projectData };
export default ProjectsSection;
