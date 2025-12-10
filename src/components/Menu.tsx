import { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-logo text-5xl md:text-6xl text-mugsy-blue mb-4 drop-shadow-sm">
            What's Brewing?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Freshly made in Mugsy's. Pick your favorite.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat.id
                  ? 'bg-mugsy-blue text-white shadow-lg shadow-blue-900/20'
                  : 'bg-white text-stone-500 hover:text-mugsy-blue hover:bg-white border-2 border-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-stone-800 mb-2 group-hover:text-mugsy-blue transition-colors">
                  {item.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;