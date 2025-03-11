import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const projects = [
    { 
      id: "01", 
      name: "Studio 74", 
      logo: "⚡", 
      description: "A modern digital agency providing creative solutions.",
      liveLink: "https://studio74.com",
      githubLink: "https://github.com/user/studio74"
    },
    { 
      id: "02", 
      name: "Gloster", 
      logo: "🅖", 
      description: "An e-commerce platform designed for seamless shopping.",
      liveLink: "https://gloster.com",
      githubLink: "https://github.com/user/gloster"
    },
    { 
      id: "03", 
      name: "Linea Vol.1", 
      logo: "🌊", 
      description: "A collection of minimalist web templates.",
      liveLink: "https://lineavol1.com",
      githubLink: "https://github.com/user/lineavol1"
    },
    { 
      id: "04", 
      name: "Cube 2.0", 
      logo: "⬜", 
      description: "A 3D design tool for creative professionals.",
      liveLink: "https://cube2.com",
      githubLink: "https://github.com/user/cube2"
    },
  ];

  return (
    <div id="projects" className="w-full py-16 bg-[#0A0F1F] flex flex-col items-center">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative p-6 bg-[#0D1326] backdrop-blur-lg bg-opacity-90 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
          >
            <div className="text-6xl text-blue-300">{project.logo}</div>
            <h3 className="text-2xl font-semibold mt-4 uppercase tracking-wide text-white">{project.name}</h3>
            <p className="text-md text-gray-300 mt-2">{project.description}</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition">
                Live <FaExternalLinkAlt />
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition">
                Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;