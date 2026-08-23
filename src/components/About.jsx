import { about, personalInfo } from '../data/portfolioData';
import { Terminal, Code, Cpu, Database } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Code size={24} />, title: "Full-Stack Development", desc: "End-to-end web applications." },
    { icon: <Database size={24} />, title: "Backend Systems", desc: "API-driven architecture & databases." },
    { icon: <Cpu size={24} />, title: "AI Integration", desc: "Building AI-powered solutions." },
    { icon: <Terminal size={24} />, title: "Problem Solving", desc: "Focus on practical engineering." }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">About Me</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineering Practical Solutions</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {about}
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <span className="block text-sm text-gray-400 mb-1">Education</span>
                <span className="font-semibold text-white">{personalInfo.education.degree}</span>
                <span className="block text-sm text-primary mt-1">{personalInfo.education.university} • {personalInfo.education.graduation}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
