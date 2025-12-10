import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

const About = () => {
  return (
    <section id="about" className="py-40 bg-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="font-logo text-5xl md:text-6xl text-mugsy-blue leading-tight drop-shadow-sm">
              More Than Just <br/>
              <span className="text-amber-500">A Caffeine Fix.</span>
            </h2>
            
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              Mugsy's is your daily dopamine hit. We combine specialty roasting, 
              homemade comfort food, and a retro vibe.
            </p>

            <p className="text-stone-500 leading-relaxed">
              We started with a simple mission: to make the best coffee in the neighborhood 
              without the attitude. Whether you need a morning boost or a mid-day escape, 
              we've got the brew for you.
            </p>

            <div className="flex justify-center lg:justify-start gap-8 pt-4">
              <div>
                <span className="block font-logo text-4xl text-mugsy-blue">100%</span>
                <span className="text-sm text-stone-500 font-bold uppercase tracking-wide">Arabica</span>
              </div>
              <div>
                <span className="block font-logo text-4xl text-mugsy-blue">5.0</span>
                <span className="text-sm text-stone-500 font-bold uppercase tracking-wide">Google Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-mugsy-blue/5 rounded-[2rem] transform rotate-3 scale-105 pointer-events-none"></div>

            <div className="grid gap-6 relative z-10">
              {REVIEWS.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">
                      Google Review
                    </span>
                  </div>
                  
                  <p className="text-stone-700 italic mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-mugsy-blue w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-bold text-stone-900 text-sm">
                      {review.name}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-4">
                <a 
                  href="https://www.google.com/search?sa=X&sca_esv=d44b221d688bac1f&sxsrf=AE3TifPgx6fzsBzHaANUp4IxTguvdP0Qwg:1765391677469&q=Mugsy%27s+Athens+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MjGzMLU0NjIzMLMwMDazMLM02cDI-IpRzLc0vbhSvVjBsSQjNa9YISi1LDO1vHgRKw4JAPo8chFMAAAA&rldimm=2468593260680368694&tbm=lcl&hl=en-GR&ved=2ahUKEwjs6Me-1LORAxUY9wIHHWQRNvYQ9fQKegQIThAG&biw=1536&bih=729&dpr=1.25#lkt=LocalPoiReviews" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-mugsy-blue font-bold hover:underline"
                >
                  See all reviews on Google
                  <Quote className="w-4 h-4 transform scale-x-[-1]" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;