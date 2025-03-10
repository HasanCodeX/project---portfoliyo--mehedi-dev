import React from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiBootstrap } from "react-icons/si";

const SkillSection = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaHtml5 /> }, // Replace with an appropriate JS icon if available
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "HTML", icon: <FaHtml5 /> },
  ];

  return (
    <div className="w-full py-12 bg-[#0A0F1F] flex justify-center hidden">
      <div className="max-w-6xl text-center">
        {/* Title/Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-[#0D1326] rounded-lg text-white transition-transform duration-300 hover:scale-105 hover:border-b-2 hover:border-blue-400 flex flex-col items-center"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
