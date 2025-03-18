import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className=" items-center justify-center gap-8 p-10 bg-[#0A0F1C] text-white">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide mb-12">
        Get in Touch
      </h2>
      
     <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl px-6"> {/* Left Side - Contact Info */}
      <div className="flex flex-col gap-6 bg-[#0D1326] p-8 rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 w-full max-w-3xl h-112 justify-center  items-center">
        <div className="flex items-center gap-4">
          <MapPin size={24} className="text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-gray-400">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone size={24} className="text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold">Phone</h2>
            <p className="text-gray-400">+8801747874773</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-gray-400">mehedi@example.com</p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-[#0D1326] p-8 rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 w-full max-w-3xl h-112 ">
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-[#1A2138] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-[#1A2138] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full p-3 bg-[#1A2138] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div></div>
    </section>
  );
};

export default ContactSection;
