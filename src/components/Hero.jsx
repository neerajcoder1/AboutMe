import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { Meteors } from './ui/meteors';
import { RobertSpline } from './ui/robert-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Meteors effect */}
      <div className="absolute inset-0 w-full h-full">
        <Meteors number={30} />
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start w-full pr-0 lg:pr-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-2 leading-[1.1] font-sans">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-500 mb-6 tracking-tight">
            {personalInfo.title}
          </h2>
          
          {/* Bio */}
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl font-light">
            Building modern web applications, backend systems, and AI-powered products with a focus on clean architecture, real-world problem solving, and scalable development.
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {['React', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'].map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-medium bg-black/5 text-slate-700 dark:bg-white/5 dark:text-gray-300 rounded-md transition-colors hover:bg-black/10 dark:hover:bg-white/10 cursor-default">
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-7 py-3 bg-emerald-600 text-[#fff] dark:bg-white dark:text-black hover:bg-emerald-700 dark:hover:bg-gray-200 font-semibold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group text-sm">
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.html" target="_blank" className="w-full sm:w-auto px-7 py-3 bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
              <Download size={16} />
              Resume
            </a>
            <div className="flex items-center gap-3 ml-0 sm:ml-2 mt-2 sm:mt-0">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl text-black dark:text-gray-300 transition-all">
                <FaGithub size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl text-black dark:text-gray-300 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full">
          <RobertSpline title="Neeraj Gahlout" subtitle="Interact with my virtual assistant!" />
        </div>
      </div>
    </section>
  );
}
