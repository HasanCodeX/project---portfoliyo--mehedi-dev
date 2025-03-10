import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0A0F1F] py-4 flex items-center justify-between px-6 md:px-12">
      {/* Mobile Menu Button (Hidden on Desktop) */}
      <button
        className="md:hidden text-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Menu */}
      <ul
  className={`md:flex justify-center flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 text-gray-400 uppercase text-sm tracking-widest transition-all duration-300 ease-in-out ${
    isOpen ? "flex" : "hidden"
  } md:flex mx-auto`}
>
  <li className="hover:text-orange-400 cursor-pointer">About</li>
  <li className="hover:text-orange-400 cursor-pointer">Projects</li>

  {/* MH Logo (Always Centered) */}
  <li className="text-4xl font-bold text-blue-400">MH</li>

  <li className="hover:text-orange-400 cursor-pointer">Services</li>
  <li className="hover:text-orange-400 cursor-pointer">Contacts</li>
</ul>

    </nav>
  );
}
