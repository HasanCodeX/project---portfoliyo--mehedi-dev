import { FaReact, FaGithub, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#0A0F1F] text-white py-16 px-6 ">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-12">
        About Me
      </h2>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl px-6">
        {/* profile image  */}
          <div className="min-lg:w-7xl bg-[#0D1326] p-6 rounded-lg shadow-lg h-112 flex flex-col items-center ">
            <img 
              src="https://i.ibb.co.com/0jdw9xHJ/image.png" 
              alt="Mehedi Hasan" 
              className="w-64 rounded-lg "
            />
          
          {/* Icons Section */}
          <div className="flex justify-center gap-4 mt-4">
            <FaReact size={40} className="text-blue-500" />
            <FaGithub size={40} className="text-gray-700" />
            <FaCode size={40} className="text-blue-400" />
          </div>
        </div>

        {/* About Content */}
        <div className="bg-[#0D1326]  text-white p-6 rounded-lg shadow-lg   h-112">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-xl font-bold mt-4">Hello :)</h2>
          <p className="mt-4 leading-relaxed">
            👋 I'm <strong>Mehedi Hasan</strong>! A dedicated <strong>Frontend Developer</strong> and <strong>MERN Stack Expert</strong> 
            passionate about crafting high-performance, scalable, and visually appealing web applications. 
            I specialize in <strong>React.js, Angular, and Vue.js</strong>, along with full-stack development. 🚀
          </p>
          <p className="mt-2">
            I’m always open to exciting projects, collaborations, and new opportunities. 
            Feel free to reach out on <a href="https://wa.me/your-number" className="text-blue-500 underline">WhatsApp</a> to discuss how we can work together! 
            💜 Thank you for visiting!
          </p>

          {/* Buttons Section */}
          <div className="flex gap-4 mt-6 justify-around ">
            {/* Download CV Button */}
            <a 
              href="/your-cv.pdf" 
              download="Mehedi-Hasan-CV.pdf" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Download CV
            </a>

            {/* Hire Me Button */}
            {/* <a 
              href="https://your-hiring-page.com" 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
            >
              Hire Me
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
