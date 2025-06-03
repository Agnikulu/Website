// src/components/PublicationsSection.jsx

import React from 'react';

/*
  Only one publication is shown here—pointing to the JMIR Formative Research article:
  “Training and Profiling a Pediatric Facial Expression Classifier for Children on Mobile Devices: Machine Learning Study”
*/
const publicationsData = [
  {
    id: 1,
    title:
      "Training and Profiling a Pediatric Facial Expression Classifier for Children on Mobile Devices: Machine Learning Study",
    authors:
      "Agnik Banerjee, Onur Cezmi Mutlu, Aaron Kline, Saimourya Surabhi, Peter Washington, Dennis Paul Wall",
    venue: "JMIR Formative Research",
    date: "March 21, 2023",
    link: "https://formative.jmir.org/2023/1/e39917",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          A selection of my research publications.
        </p>
      </div>

      {/* Single Publication Card */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
        {publicationsData.map((pub) => (
          <a
            href={pub.link}
            key={pub.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-background-light border border-neon-cyan/20 rounded-md overflow-hidden transform transition-all duration-300 hover:shadow-neon-glow"
          >
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-white mb-2">
                {pub.title}
              </h3>
              <p className="text-gray-300 text-sm mb-1">{pub.authors}</p>
              <p className="text-gray-400 text-xs mb-3">
                {pub.venue} · {pub.date}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-neon-purple/80 text-white text-xs rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-neon-cyan">
                View Paper
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
