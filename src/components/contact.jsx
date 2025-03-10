import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full py-12 bg-[#0A0F1F] flex justify-center hidden">
      <div className="max-w-6xl text-center text-white">
        {/* Title/Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>

        <div className="bg-[#0D1326] p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            {/* Name Input */}
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

              {/* Email Input */}
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

            {/* Message Input */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
