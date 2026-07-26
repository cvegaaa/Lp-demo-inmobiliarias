import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedStrip from './components/FeaturedStrip';
import Properties from './components/Properties';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedStrip />
        <Properties />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
