import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { InteractiveGridPattern } from './components/ui/interactive-grid-pattern';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-gray-100 selection:bg-primary/30 selection:text-white overflow-hidden">
      
      {/* 3s Dynamic Background Animation Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glowing Orb 1 (Top Left) - 3s Loop */}
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] bg-primary/20 rounded-full blur-[130px] animate-bg-glow-1" />
        
        {/* Glowing Orb 2 (Bottom Right) - 3s Loop */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] bg-secondary/20 rounded-full blur-[140px] animate-bg-glow-2" />
        
        {/* Glowing Orb 3 (Center Ambient) - 3s Loop */}
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent/15 rounded-full blur-[150px] animate-bg-glow-3" />
      </div>

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
  );
}

export default App;
