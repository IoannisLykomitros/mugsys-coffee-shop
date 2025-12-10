import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Location />
    </div>
  );
}

export default App;