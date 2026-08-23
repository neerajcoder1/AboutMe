import { useState } from 'react';
import { Award, X } from 'lucide-react';
import { selectedCertifications, allCertifications } from '../data/portfolioData';

function CertificateModal({ onClose }) {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(allCertifications.map(c => c.category))];
  
  const filteredCerts = filter === 'All' 
    ? allCertifications 
    : allCertifications.filter(c => c.category === filter);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-card border border-white/10 rounded-2xl shadow-2xl z-10">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-card rounded-t-2xl z-20">
          <h2 className="text-2xl font-bold text-white">All Certifications</h2>
          <button onClick={onClose} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-grow">
          <div className="flex flex-wrap gap-2 mb-8 sticky top-0 bg-card z-10 pb-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  filter === cat 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCerts.map((cert, idx) => (
              <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 transition-colors">
                <span className="text-xs text-primary font-medium mb-2 block">{cert.category}</span>
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">{cert.title}</h4>
                <p className="text-xs text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Education</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Certifications</h2>
          </div>
          <button onClick={() => setShowAll(true)} className="hidden sm:inline-flex px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedCertifications.map((cert, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-xl flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <Award size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 flex-grow">{cert.title}</h3>
              <p className="text-xs text-gray-400">{cert.issuer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <button onClick={() => setShowAll(true)} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium transition-colors w-full">
            View All Certifications
          </button>
        </div>
      </div>
      
      {showAll && <CertificateModal onClose={() => setShowAll(false)} />}
    </section>
  );
}
