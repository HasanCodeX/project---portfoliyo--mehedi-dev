import { Twitter, Globe, Linkedin } from 'lucide-react'; // Use correct Lucide icon names

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
      {/* Left Side - Social Icons */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <div className="bg-gray-900 p-4 rounded-lg flex justify-center items-center">
          <span className="text-4xl font-bold text-blue-400">


          MH
            
          </span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-400">
            <Linkedin size={20} />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-400">
            <Globe size={20} />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-400">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Right Side - Navigation & Copyright */}
      <div className="text-center md:text-right">
        <nav className="flex gap-6 text-lg font-light">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#work" className="hover:text-blue-400">Work</a>
          <a href="#shop" className="hover:text-blue-400">Shop</a>
          <a href="#contact" className="hover:text-blue-400">Contacts</a>
        </nav>
        <p className="text-gray-400 text-sm mt-2">2024 COPYRIGHT | MEHEDI HASAN| ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
