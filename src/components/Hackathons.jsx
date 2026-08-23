import { Trophy } from 'lucide-react';
import { hackathons } from '../data/portfolioData';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Collaboration</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Hackathons & Achievements</h2>
        </div>
        
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {hackathons.map((hackathon, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-card border border-white/10 rounded-full flex items-center justify-center text-primary">
                <Trophy size={18} />
              </div>
              
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{hackathon.name}</h3>
                    <p className="text-primary text-sm font-medium">{hackathon.theme}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 w-fit">
                    {hackathon.year}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 font-medium mb-1">Project: <span className="text-white">{hackathon.project}</span></p>
                  <p className="text-gray-400 text-sm mb-3">{hackathon.description}</p>
                  <p className="text-gray-300 text-sm">Role: <span className="text-white">{hackathon.role}</span></p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {hackathon.technology.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
