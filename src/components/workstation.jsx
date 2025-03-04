import React from "react";

const WorkSection = () => {
  const projects = [
    { id: "01", name: "Studio 74", logo: "⚡" },
    { id: "02", name: "Gloster", logo: "🅖" },
    { id: "03", name: "Linea Vol.1", logo: "🌊" },
    { id: "04", name: "Cube 2.0", logo: "⬜" },
  ];

  return (
    <div className="w-full py-12 bg-[#0A0F1F] flex justify-center">
      <div className="grid grid-cols-4 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-6 bg-[#0D1326] rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:border-b-2 hover:border-blue-400"
          >
            <div className="text-5xl text-blue-300">{project.logo}</div>
            <h3 className="text-lg mt-4 uppercase tracking-wide">{project.name}</h3>
            <p className="text-sm text-blue-400 mt-1">{project.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
