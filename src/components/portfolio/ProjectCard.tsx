import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../../data/portfolio';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl border border-stone-200/60 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0B132B]/10 hover:border-[#0B132B]/10">
      <div 
        className="relative w-full aspect-[16/11] overflow-hidden bg-stone-100 cursor-pointer isolate" 
        onClick={() => onOpenCaseStudy(project)}
      >
        {!imageError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-400 p-6 text-center">
             <span className="text-xs uppercase tracking-widest mb-2">{project.category}</span>
             <span className="font-medium text-stone-500">{project.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#0B132B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
        
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-200/50 shadow-sm">
            <span className="text-[10px] font-bold tracking-wider text-[#0B132B] uppercase">Featured</span>
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-20">
        <div className="mb-4">
          <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#0B132B]/50 mb-3">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#0B132B] mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-[#0B132B]/70 line-clamp-2 leading-relaxed font-medium">
            {project.shortDescription}
          </p>
        </div>
        
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-auto pt-4 pb-8">
            <p className="text-[0.7rem] text-[#0B132B]/40 font-bold tracking-[0.1em] uppercase">
              {project.techStack.slice(0, 3).join(' • ')}
            </p>
          </div>
        )}
        
        <div className="flex flex-col xl:flex-row gap-3 mt-auto pt-2">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#0B132B] text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-[#0B132B]/20 w-full xl:w-auto flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              Live Site
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          )}
          <button 
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center justify-center px-5 py-3 bg-white border border-[#0B132B]/10 text-[#0B132B] text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#FCFBFA] hover:border-[#0B132B]/30 hover:text-[#0B132B] transition-all duration-300 w-full xl:w-auto flex-shrink-0 group/btn"
          >
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
