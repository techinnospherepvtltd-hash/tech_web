import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Founders from './components/Founders';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Founders />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
