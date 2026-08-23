import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-white font-bold">{personalInfo.name}</p>
          <p className="text-gray-500 text-sm">{personalInfo.title}</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href={personalInfo.github} className="hover:text-white transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">Email</a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
