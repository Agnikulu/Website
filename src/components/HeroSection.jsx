// src/components/HeroSection.jsx

import React, { useState, useEffect } from 'react';
import profilePic from '../../pic.png';
import { projectData } from './ProjectsSection'; 
// Each project: { id, title, subtitle, description, techStack, date, image, link, category }

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  // Words to cycle through
  const words = ["Develop", "Design", "Create"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Track if user is on a mobile device
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedWord === current) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      const nextWord = isDeleting
        ? current.substring(0, displayedWord.length - 1)
        : current.substring(0, displayedWord.length + 1);
      setDisplayedWord(nextWord);
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [displayedWord, currentWordIndex, isDeleting, words]);

  // -------------------------------------------------------------
  // Mobile detection: UA sniff + pointer: coarse
  // -------------------------------------------------------------
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const mobileUaRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isUaMobile = mobileUaRegex.test(ua);

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    // Only treat as mobile if UA says mobile (prevents coarse‐pointer laptops from being flagged)
    const mobileDetected = isUaMobile || (isCoarsePointer && isUaMobile);

    setIsMobileDevice(mobileDetected);
  }, []);
  // -------------------------------------------------------------

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-start max-w-6xl mx-auto px-6 pt-10 min-h-screen"
    >
      {/* ← Left Side (Profile + Intro) */}
      <div className="w-full md:w-1/2 md:sticky md:top-20 self-start">
        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-600 shadow-lg"
          />

          {/* Name Section */}
          <div>
            <h2 className="text-lg text-gray-400">Hi, I'm</h2>
            {/* On mobile: text-4xl. At md+: text-5xl. */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple to-neon-pink to-neon-orange to-neon-purple bg-clip-text text-transparent animate-text-shimmer transition duration-800">
              Agnik Banerjee.
            </h1>
          </div>
        </div>

        {/* On mobile: text-xl. At md+: text-2xl. */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-200 mt-4">
          I <span className="text-neon-cyan">{displayedWord}</span>.
        </h1>
        <p className="text-gray-400 mt-2 leading-relaxed">
          Studying Computer Science at the University of Maryland with minors in Data Science and Technology
          Entrepreneurship &amp; Corporate Innovation. Passionate about building software and technology
          solutions, exploring AI’s potential in healthcare, and driving innovation in early-stage startups.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/agnikulu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300"
          >
            {/* GitHub SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/agnikbanerjee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300"
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            href="mailto:agnik@umd.edu"
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300"
          >
            {/* Gmail SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 6 12 13 2 6"></path>
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            </svg>
          </a>
        </div>

        {/* Terminal Box */}
        <div className="mt-8 w-full max-w-[480px] opacity-70 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-background-light border border-neon-cyan/30 rounded-md p-4 shadow-neon-glow">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-[10px] md:text-xs text-text-secondary ml-2">terminal</div>
            </div>
            <div className="font-mono text-[10px] md:text-xs">
              <div className="text-neon-purple">$ whoami</div>
              <div className="text-neon-cyan">agnik_banerjee</div>
              <div className="text-neon-purple">$ skills --top</div>
              <div className="text-neon-cyan">['python', 'react', 'fastapi']</div>
              <div className="text-neon-purple">$ status</div>
              <div className="text-neon-cyan">ready_to_collaborate</div>
              <div className="text-neon-purple mt-1">$ <span className="animate-pulse">█</span></div>
            </div>
          </div>
          {/* Copyright Text Below */}
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Agnik Banerjee. All rights reserved.
          </p>
        </div>
      </div>

      {/* ← Right Side (Experience Tiles) */}
      <div className="w-full md:w-1/2 md:overflow-y-auto md:max-h-screen p-4 self-start mt-8 md:mt-0">
        <h2 className="text-xl text-gray-300 font-medium mb-4">Experience</h2>
        <div className="space-y-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col md:flex-row items-start justify-between gap-4"
            >
              {/* Date Column */}
              <div className="text-gray-400 text-xs font-medium text-right w-full md:w-[100px]">
                {project.date}
              </div>

              {/* Project Tile */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  bg-background-light
                  border border-neon-cyan/20
                  rounded-md
                  overflow-hidden
                  w-full
                  h-32 md:h-[180px]
                  transition-all duration-500
                  hover:cursor-pointer
                "
              >
                {/* Background Image + Dark Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-5 right-4 bg-neon-purple/80 text-white text-xs px-3 py-1 rounded-full z-10 backdrop-blur-sm">
                  {project.category}
                </div>

                {/*
                  Title & Subtitle wrapper:
                  - On hover, translate up/left by the original amount so it doesn't fly off-screen
                  - group-hover:translate-y-[-100%] (for one-line title shift)
                  - md:group-hover:translate-y-[-160%] (for desktop)
                  - md:group-hover:translate-x-[-20%] (slide left a bit on desktop)
                */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-4 md:p-6
                    z-10
                    transition-all duration-500 ease-in-out
                    group-hover:translate-y-[-100%]
                    md:group-hover:translate-y-[-160%]
                    md:group-hover:translate-x-[-20%]
                  "
                >
                  <h3 className="text-lg md:text-2xl font-extrabold text-white font-cool uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 mt-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* ─── DESCRIPTION & TECH STACK (HOVER-ONLY) ─── */}
                {/* Only render if not mobile */}
                {!isMobileDevice && (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-end
                      items-center
                      text-center
                      p-4 md:p-6 pb-6
                      z-10
                      opacity-0
                      group-hover:opacity-100
                      transition-all duration-500
                    "
                  >
                    {/* Description Text */}
                    <p className="text-gray-300 mb-4 text-xs md:text-sm font-minimalist leading-relaxed">
                      {project.description}
                    </p>

                    {/* Skills: inline-blocks centered with margin */}
                    <div className="w-full text-center">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-1 bg-background/50 text-neon-cyan text-xs rounded border border-neon-cyan/30 mx-1 my-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {/* ────────────────────────────────────────────────────── */}
              </a>
            </div>
          ))}
        </div>

        {/*
          Resume Button (centered under the “tile” column):
          - grid-cols-1 on mobile → button spans full width, centered
          - md:grid-cols-[100px_1fr] on desktop:
              • first column = 100px (aligns under date)
              • second column = the rest (button centered)
        */}
        <div className="mt-6 pb-16 grid grid-cols-1 md:grid-cols-[100px_1fr]">
          {/* empty placeholder for 100px on md */}
          <div />

          {/* button container, centered */}
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1A70UP2_LppflOX7Tx_e-oIPva3B4zgLW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              View My 1-Page Resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
