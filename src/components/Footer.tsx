import { Instagram, ArrowUp } from 'lucide-react';
import EfoodLogo from '../assets/efood-logo.png';
import WoltLogo from '../assets/wolt-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mugsy-blue text-white mt-14 pt-16 pb-8 rounded-t-[3rem] relative">
      
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToTop}
          className="bg-amber-400 hover:bg-amber-300 text-mugsy-blue p-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-logo text-3xl tracking-wide">Mugsy's</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              The happiest coffee corner in Chalandri. 
              Serving vibes, brews, and smiles since 2025.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-blue-100 hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#location" className="text-blue-100 hover:text-white transition-colors">Visit Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-300">Follow the Mug</h3>
            <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.instagram.com/mugsys_athens/" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-amber-400 hover:text-mugsy-blue transition-all">
                <Instagram className="w-8 h-8" />
                </a>
                <a href="https://www.e-food.gr/delivery/xalandri/mugsys-8107266" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-amber-400 hover:text-mugsy-blue transition-all">
                <img src={EfoodLogo} alt="efood" className="w-8 h-8 object-contain" />
                </a>
                <a href="https://wolt.com/el/grc/athens/restaurant/mugsys-coffee?srsltid=AfmBOop1R_rL65RKHUKtMe7KqOvpbznbru5R3EZJkGFjrB9nRTfTLNx9" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-amber-400 hover:text-mugsy-blue transition-all">
                <img src={WoltLogo} alt="Wolt" className="w-8 h-8 rounded-full object-contain " />
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-300">
          <p>© {new Date().getFullYear()} Mugsy's Athens. All rights reserved. Designed by 314.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;