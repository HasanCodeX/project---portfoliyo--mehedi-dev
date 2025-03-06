

export default function Navbar()
 {
    return (
      <>
        
 <nav className="w-full bg-[#0A0F1F] py-4 flex items-center justify-center">
      <ul className="flex items-center space-x-8 text-gray-400 uppercase text-sm tracking-widest">
        <li className="hover:text-orange-400 cursor-pointer">About</li>
        <li className="hover:text-orange-400 cursor-pointer">Projects</li>
        <li>
        <span className="text-4xl font-bold text-blue-400">


MH
  
</span>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">Services</li>
        <li className="hover:text-orange-400 cursor-pointer">Contacts</li>
      </ul>
    </nav>

      </>
    );
  }
  