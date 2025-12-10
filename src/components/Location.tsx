import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-30 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-logo text-5xl md:text-6xl text-mugsy-blue mb-6 drop-shadow-sm">
            Come Hang with Us
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We are just around the corner in Chalandri. <br />
            Grab a seat, plug in your laptop, or just enjoy the vibe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <div className="bg-stone-50 p-8 rounded-[2rem] border-2 border-stone-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-mugsy-blue text-white p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-1">Our Spot</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Agias Paraskevis 49,<br />
                  Chalandri 152 34
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mugsy's+Athens+Agias+Paraskevis+49+Chalandri" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-mugsy-blue font-bold mt-2 hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="bg-amber-400 text-mugsy-blue p-3 rounded-full shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold text-stone-800 mb-3">Opening Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-600">Mon - Fri</span>
                    <span className="font-bold text-mugsy-blue">07:30 - 19:30</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-600">Saturday</span>
                    <span className="font-bold text-mugsy-blue">08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-stone-600">Sunday</span>
                    <span className="font-bold text-red-400">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-stone-200 text-stone-600 p-3 rounded-full shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-1">Call Us</h3>
                <p className="text-stone-600 text-lg">
                  <a href="tel:+302111185563" className="hover:text-mugsy-blue transition-colors">
                    +30 21 1118 5563
                  </a>
                </p>
              </div>
            </div>

          </div>

          <div className="h-[500px] w-full bg-stone-200 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Mugsy's%20Athens%20Agias%20Paraskevis%2049%20Chalandri&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-stone-500 shadow-sm pointer-events-none">
              Agias Paraskevis 49
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;