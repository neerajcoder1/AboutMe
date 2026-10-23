import { useState } from 'react';
import { ExternalLink, ArrowRight, X, AlertTriangle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors z-20">
          <X size={20} />
        </button>

        {/* Modal Header Thumbnail */}
        {project.thumbnail && (
          <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-2xl border-b border-white/10">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          </div>
        )}

        <div className="p-6 sm:p-10">
          {/* Category badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>

          {/* ⚠️ Demo Notice */}
          {project.isDemo && (
            <div className="flex items-start gap-3 mb-6 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-sm text-amber-300">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-400" />
              <span>
                <strong>Notice:</strong> This is a demo page / prototype. Some features may be limited or incomplete.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Problem</h3>
                <p className="text-gray-400 leading-relaxed">{project.problem}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">My Role</h3>
                <p className="text-gray-400 leading-relaxed">{project.role}</p>
              </section>

              {project.engineering && (
                <section>
                  <h3 className="text-lg font-semibold text-white mb-3">Engineering Details</h3>
                  <ul className="space-y-3">
                    {Object.entries(project.engineering).map(([key, value]) => (
                      <li key={key} className="text-gray-400 text-sm">
                        <strong className="text-gray-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <section className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Architecture</h3>
                <p className="text-sm text-gray-400 font-mono bg-background p-3 rounded border border-white/5">{project.architecture}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* ✅ Two links: Website + GitHub */}
              <section className="flex flex-col gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-accent text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    View Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Portfolio</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="group glass-panel rounded-2xl overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              
              {/* Project Card Image */}
              {project.thumbnail && (
                <div className="relative w-full h-52 overflow-hidden border-b border-white/10 bg-neutral-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-black/20" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-md text-primary rounded-full border border-primary/30 shadow-md">
                    {project.category}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                {/* Header row: if no thumbnail or supplementary badges */}
                <div className="flex justify-between items-start mb-3">
                  {project.isDemo && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                      <AlertTriangle size={12} />
                      Demo / Prototype
                    </div>
                  )}
                  <div className="flex gap-3 ml-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View on GitHub">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Website">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-xs text-gray-500 font-mono">#{tech}</span>
                  ))}
                  {project.technologies.length > 4 && <span className="text-xs text-gray-500 font-mono">...</span>}
                </div>

                {/* Bottom row: Case Study + Website + GitHub */}
                <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center text-primary text-sm font-semibold hover:text-secondary transition-colors group/btn"
                  >
                    Case Study <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-white text-sm font-medium transition-colors">
                      <ExternalLink size={14} className="mr-1.5" /> Website
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-white text-sm font-medium transition-colors">
                      <FaGithub size={14} className="mr-1.5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
