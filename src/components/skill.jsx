import React from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiBootstrap } from "react-icons/si";

const SkillSection = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "HTML & CSS", icon: <FaHtml5 /> },
  ];

  return (
    <div id="skills" className="w-full py-16 bg-[#0A0F1F] flex flex-col items-center">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-[#0D1326] rounded-xl text-white text-center shadow-lg backdrop-blur-lg bg-opacity-90 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 flex flex-col items-center"
          >
            <div className="text-6xl text-blue-300">{skill.icon}</div>
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;