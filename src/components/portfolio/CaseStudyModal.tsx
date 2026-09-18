import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { Project, getPortfolioImageUrl } from '../../data/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function resolveAssetUrl(rawPath: string): string {
  if (!rawPath) return '';
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://') || rawPath.startsWith('data:')) {
    return rawPath;
  }
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  return baseUrl ? `${baseUrl}${cleanPath}` : cleanPath;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  const [imageError, setImageError] = useState(false);

  // Reset image error state when project changes
  useEffect(() => {
    setImageError(false);
  }, [project]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B132B]/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col z-10"
          >
            {/* Header with Close Button */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full border border-stone-200/50 flex items-center justify-center text-[#0B132B] hover:text-[#D4AF37] hover:bg-white hover:scale-105 transition-all shadow-sm"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Column: Image (Sticky on Desktop) */}
                <div className="w-full lg:w-5/12 bg-stone-100 relative">
                  <div className="lg:sticky lg:top-0 w-full h-[40vh] lg:h-[calc(95vh-4rem)] min-h-[300px]">
                    {!imageError ? (
                      <img 
                        src={resolveAssetUrl(project.image || getPortfolioImageUrl(project.id))} 
                        alt={project.title}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-[#0B132B]/40 bg-stone-100">
                        <span className="text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
                        <span className="font-medium">{project.title}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full lg:w-7/12 p-6 sm:p-10 lg:p-16">
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-12">
                      <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                        {project.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0B132B] mb-6 leading-tight">
                        {project.title}
                      </h2>
                      <div className="w-16 h-[2px] bg-[#D4AF37]/50 mb-8" />
                    </div>

                    <div className="space-y-12 text-[#0B132B]/80 font-medium">
                      {project.overview && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-3">Overview</h3>
                          <p className="leading-relaxed">{project.overview}</p>
                        </section>
                      )}

                      {project.challenge && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-3">The Challenge</h3>
                          <p className="leading-relaxed">{project.challenge}</p>
                        </section>
                      )}

                      {project.solution && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-3">The Approach</h3>
                          <p className="leading-relaxed">{project.solution}</p>
                        </section>
                      )}

                      {(project.keyFeatures && project.keyFeatures.length > 0) && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-4">Key Features</h3>
                          <ul className="list-disc pl-5 space-y-2">
                            {project.keyFeatures.map((feature, idx) => (
                              <li key={idx} className="leading-relaxed pl-1 marker:text-[#D4AF37]">{feature}</li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {project.role && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-3">My Role</h3>
                          <p className="leading-relaxed">{project.role}</p>
                        </section>
                      )}

                      {project.outcome && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-3">Outcome</h3>
                          <p className="leading-relaxed">{project.outcome}</p>
                        </section>
                      )}

                      {(project.techStack && project.techStack.length > 0) && (
                        <section>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B] mb-5">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                              <span key={idx} className="px-4 py-2 bg-[#FCFBFA] border border-[#0B132B]/10 text-[#0B132B] text-xs font-bold tracking-wider rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </section>
                      )}

                      {project.liveUrl && (
                        <div className="pt-10 mt-12 border-t border-stone-200">
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#0B132B] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                          >
                            View Live Website
                            <ArrowUpRight className="ml-3 w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
