import React from "react";

const ServicesSection = () => {
  const services = [
    { id: "01", name: "Web Development", icon: "💻", description: "Building responsive and modern web applications." },
    { id: "02", name: "UI/UX Design", icon: "🎨", description: "Creating intuitive and user-friendly designs." },
    { id: "03", name: "API Integration", icon: "🔗", description: "Seamlessly connecting backend services with frontend applications." },
    { id: "04", name: "Performance Optimization", icon: "⚡", description: "Enhancing speed and efficiency of web applications." },
  ];

  return (
   
    <div id="Blogs" className="w-full py-12 bg-[#0A0F1F] justify-center">
        <h2 className="text-3xl text-blue-300 uppercase tracking-wide mb-8">My Services</h2>
      <div className="flex justify-center"><div className="grid grid-cols-4 gap-6 max-w-6xl ">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 bg-[#0D1326] rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:border-b-2 hover:border-blue-400"
          >
            <div className="text-5xl text-blue-300">{service.icon}</div>
            <h3 className="text-lg mt-4 uppercase tracking-wide">{service.name}</h3>
            <p className="text-sm text-blue-400 mt-1">{service.description}</p>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default ServicesSection;
