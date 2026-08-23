import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Gallery from './components/Gallery';
import { InteractiveGridPattern } from './components/ui/interactive-grid-pattern';

function App() {
  return (
    <Loader>
      <div className="relative min-h-screen bg-background text-gray-100 selection:bg-primary/30 selection:text-white overflow-hidden">
        
        {/* Global Interactive Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-auto">
          <InteractiveGridPattern
            className="opacity-50 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
            width={40}
            height={40}
            squares={[40, 40]}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <FeaturedProjects />
            <Hackathons />
            <Certifications />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Loader>
  );
}

export default App;
