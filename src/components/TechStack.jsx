import { techStack } from '../data/portfolioData';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Tech Stack</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technologies I Work With</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStack}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
