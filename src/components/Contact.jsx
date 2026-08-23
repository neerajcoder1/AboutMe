import { useState } from 'react';
import { Mail, Check, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Connect</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something Together</h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              I'm always open to discussing new projects, internships, or opportunities in full-stack development.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 glass-panel rounded-xl w-fit">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <span className="font-medium">Contact via Email</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 glass-panel rounded-xl w-fit">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FaLinkedin size={20} className="text-primary" />
                </div>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 glass-panel rounded-xl w-fit">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FaGithub size={20} className="text-primary" />
                </div>
                <span className="font-medium">Follow on GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input type="text" id="name" required className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" id="email" required className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea id="message" required rows={4} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formState === 'loading' || formState === 'success'}
                className="w-full py-3.5 bg-primary hover:bg-accent text-[#fff] font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {formState === 'idle' && 'Send Message'}
                {formState === 'loading' && <span className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />}
                {formState === 'success' && <><Check size={20} /> Message Sent!</>}
                {formState === 'error' && <><X size={20} /> Error Sending</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
