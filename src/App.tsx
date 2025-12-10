import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <section id="home" className="h-screen flex items-center justify-center bg-stone-100">
        <h1 className="text-4xl font-bold text-stone-800">Hero Section</h1>
      </section>

      <section id="menu" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-stone-800">Our Menu</h2>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-stone-100">
        <h2 className="text-3xl font-bold text-stone-800">Our Story</h2>
      </section>

      <section id="location" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-stone-800">Find Us in Chalandri</h2>
      </section>
    </div>
  );
}

export default App;