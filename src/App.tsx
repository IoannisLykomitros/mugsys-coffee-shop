import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <Menu />

      <section id="about" className="h-screen flex items-center justify-center bg-stone-100">
        <h2 className="text-3xl font-bold text-stone-800">Our Story</h2>
      </section>

      <Location />
    </div>
  );
}

export default App;