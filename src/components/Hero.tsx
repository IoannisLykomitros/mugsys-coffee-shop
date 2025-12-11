import { ArrowRight, MapPin } from 'lucide-react';
import MugsysHero from '../assets/mugsys-hero.webp';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${MugsysHero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-mugsy-blue/20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 cursor-default">
        <h1 className="text-4xl md:text-7xl lg:text-7xl font-logo text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Get<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600"> Dirty,</span> <br />
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600"> Mugsy's.</span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Serving retro vibes, homemade treats, and the smoothest brew in town. Come enjoy the Mugsy's experience in the heart of Chalandri.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="group bg-white text-mugsy-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            Check the Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#location" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;