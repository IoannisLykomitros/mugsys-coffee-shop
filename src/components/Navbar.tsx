import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import MugsysLogo from '../assets/mugsys-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={MugsysLogo} alt="Mugsys Logo" className="h-22 w-22" />
            <span className="font-logo text-3xl ml-2 text-blue-950 tracking-tight uppercase ">
              Mugsy's
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-700 text-blue-950 px-3 py-2 rounded-md text-2xl font-medium transition-colors">Home</a>
              <a href="#menu" className="hover:text-blue-700 text-blue-950 px-3 py-2 rounded-md text-2xl font-medium transition-colors">Menu</a>
              <a href="#about" className="hover:text-blue-700 text-blue-950 px-3 py-2 rounded-md text-2xl font-medium transition-colors">About</a>
              <a href="#location" className="hover:text-blue-700 text-blue-950 px-3 py-2 rounded-md text-2xl font-medium transition-colors">Visit Us</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-950 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-blue-950 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#menu" className="text-blue-950 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#about" className="text-blue-950 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="#location" className="text-blue-950 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Visit Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;