import { useState, useEffect } from 'react';
import { Menu, X, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { GlareCard } from './ui/glare-card';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

        {/* Profile Hover Card Trigger */}
        <div className="group relative flex items-center z-50">
          <div
            onClick={() => setIsPhotoModalOpen(true)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://cdn.inspira-ui.com/logo-dark.svg"
              alt="Logo"
              className="w-8 h-8 object-contain transition-all duration-300"
            />
          </div>
          <a href="#" className="ml-3 text-xl font-bold tracking-tighter hidden sm:block text-white">
            {personalInfo.name.split(' ')[0]}<span className="text-primary">.</span>
          </a>

          {/* Hover Card */}
          <div className="absolute top-full left-0 mt-4 w-[320px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
            <GlareCard className="bg-neutral-950 border-white/10 shadow-2xl p-6 flex flex-col items-start w-[320px] h-auto aspect-auto rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border shrink-0 border-white/20">
                  <img src="/trail-4.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-primary text-xs font-medium">{personalInfo.title}</p>
                </div>
              </div>
              <p className="text-sm mb-4 leading-relaxed text-gray-400">
                Passionate about building scalable backends, full-stack web applications, and AI integrations.
              </p>
              <div className="flex items-center gap-2 text-xs mb-4 text-gray-400">
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 border-t pt-4 w-full border-white/10">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg transition-colors bg-white/5 hover:bg-white/10 text-white">
                  <FaGithub size={16} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg transition-colors bg-white/5 hover:bg-white/10 text-white">
                  <FaLinkedin size={16} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg transition-colors bg-white/5 hover:bg-white/10 text-white">
                  <Mail size={16} />
                </a>
              </div>
            </GlareCard>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/resume.html" target="_blank" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary hover:text-white transition-all">
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white font-medium text-lg py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.html"
            target="_blank"
            rel="noreferrer"
            className="text-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-medium transition-colors mt-4"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}

      {/* Photo Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsPhotoModalOpen(false)}
          />
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/20 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors z-20"
            >
              <X size={24} />
            </button>
            <img
              src="/profile.jpg"
              alt="Profile Full View"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
