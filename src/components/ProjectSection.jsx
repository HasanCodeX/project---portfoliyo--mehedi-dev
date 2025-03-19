import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const projects = [
    { 
      id: "01", 
      name: "Pet House", 
      logo: "🐶", 
      description: "The most expanded application I had the opportunity to work on. My code was reviewed by an awesome curator. The application handles all adoption processes and allows storing all evidence on adopting animals from the animal shelter.",
      liveLink: "https://github.com/HasanCodeX/web-b11-A3",
      githubLink: "https://github.com/HasanCodeX/web-b11-A3"
    },
    { 
      id: "02", 
      name: "Kids School", 
      logo: "🏫", 
      description: "Personal project for a study subject. I've earned an A+ grade :)",
      liveLink: "https://github.com/HasanCodeX/web-b11-A2",
      githubLink: "https://github.com/HasanCodeX/web-b11-A2"
    },
    { 
      id: "03", 
      name: "Bangladesh 2.0", 
      logo: "🇧🇩", 
      description: "A comprehensive project aimed at showcasing the beauty and culture of Bangladesh. This project involved creating an interactive and visually appealing website using modern web technologies. It was a great learning experience in web development and design.",
      liveLink: "https://github.com/HasanCodeX/web-b11-A1",
      githubLink: "https://github.com/HasanCodeX/web-b11-A1"
    },
    { 
      id: "04", 
      name: "English Janala", 
      logo: "📖", 
      description: "A web application to help users learn English efficiently through interactive exercises and lessons. Built with modern frontend technologies for a seamless learning experience.",
      liveLink: "https://github.com/HasanCodeX/english-janala",
      githubLink: "https://github.com/HasanCodeX/english-janala"
    },
    { 
      id: "05", 
      name: "PH Tube", 
      logo: "📺", 
      description: "A video streaming platform with dynamic content, category-based browsing, and search functionality. Designed to provide an engaging and smooth user experience.",
      liveLink: "https://github.com/HasanCodeX/ph-tube",
      githubLink: "https://github.com/HasanCodeX/ph-tube"
    },
    { 
      id: "05", 
      name: "PH Tube", 
      logo: "📺", 
      description: "A video streaming platform with dynamic content, category-based browsing, and search functionality. Designed to provide an engaging and smooth user experience.",
      liveLink: "https://github.com/HasanCodeX/ph-tube",
      githubLink: "https://github.com/HasanCodeX/ph-tube"
    },
    { 
      id: "05", 
      name: "PH Tube", 
      logo: "📺", 
      description: "A video streaming platform with dynamic content, category-based browsing, and search functionality. Designed to provide an engaging and smooth user experience.",
      liveLink: "https://github.com/HasanCodeX/ph-tube",
      githubLink: "https://github.com/HasanCodeX/ph-tube"
    },
    { 
      id: "05", 
      name: "PH Tube", 
      logo: "📺", 
      description: "A video streaming platform with dynamic content, category-based browsing, and search functionality. Designed to provide an engaging and smooth user experience.",
      liveLink: "https://github.com/HasanCodeX/ph-tube",
      githubLink: "https://github.com/HasanCodeX/ph-tube"
    }
  ];
  return (
    <div id="projects" className="w-full py-16 bg-[#0A0F1F] flex flex-col items-center">
      <div><h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-12">
        My Projects
      </h2></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl px-6 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative p-6 bg-[#0D1326] backdrop-blur-lg bg-opacity-90 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 max-h-80 overflow-scroll "
          >
            <div className="text-6xl text-blue-300">{project.logo}</div>
            <h3 className="text-2xl font-semibold mt-4 uppercase tracking-wide text-white">{project.name}</h3>
            <p className="hidden text-md text-gray-300 mt-2">{project.description}</p>
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