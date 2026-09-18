import { useState, useMemo, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioProjects, Project } from '../data/portfolio';
import ProjectCard from '../components/portfolio/ProjectCard';
import CaseStudyModal from '../components/portfolio/CaseStudyModal';
import { cn } from '../lib/utils';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Extract unique categories based on exact current project data
  const categories = useMemo(() => {
    const cats = new Set(portfolioProjects.map(p => p.category));
    return ['All Work', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Work') return portfolioProjects;
    return portfolioProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [categories]);

  // Auto-scrolling logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = setInterval(() => {
        if (container) {
          const { scrollLeft, scrollWidth, clientWidth } = container;
          const maxScroll = scrollWidth - clientWidth;
          
          // Only auto-scroll if there is scrollable space (mainly mobile)
          if (maxScroll > 0) {
            if (scrollLeft >= maxScroll - 5) {
              // Reset to start
              container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              // Scroll by an approximate button width
              container.scrollBy({ left: 150, behavior: 'smooth' });
            }
          }
        }
      }, 3500); // Slide every 3.5 seconds
    };

    startAutoScroll();

    const handleInteraction = () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
      
      // Resume auto-scroll after 5 seconds of inactivity
      autoScrollTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 5000);
    };

    container.addEventListener('touchstart', handleInteraction, { passive: true });
    container.addEventListener('touchmove', handleInteraction, { passive: true });
    container.addEventListener('scroll', handleInteraction, { passive: true });
    container.addEventListener('mouseenter', handleInteraction);
    container.addEventListener('mousemove', handleInteraction);

    return () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
      
      container.removeEventListener('touchstart', handleInteraction);
      container.removeEventListener('touchmove', handleInteraction);
      container.removeEventListener('scroll', handleInteraction);
      container.removeEventListener('mouseenter', handleInteraction);
      container.removeEventListener('mousemove', handleInteraction);
    };
  }, []);

  const handleCategoryClick = (category: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(category);
    
    // Smooth scroll the clicked button into the center of the view
    const container = scrollContainerRef.current;
    const btn = e.currentTarget;
    
    if (container && btn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      
      const scrollLeft = container.scrollLeft + (btnRect.left - containerRect.left) - (containerRect.width / 2) + (btnRect.width / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <>
      <Helmet>
        <title>Selected Work | Sayed Ahmad</title>
        <meta name="description" content="Explore selected websites, e-commerce stores, custom web applications, and interactive digital experiences designed and developed by Sayed Ahmad." />
      </Helmet>
      
      <main className="min-h-screen bg-[#FCFBFA] pt-32 pb-24 isolate">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-wide text-[#0B132B] mb-6 leading-[0.95]"
            >
              Work That Solves <br className="hidden md:block" />Real Problems
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-base md:text-[1.05rem] text-[#0B132B]/70 leading-relaxed max-w-2xl font-medium"
            >
              A comprehensive archive of selected websites, e-commerce stores, custom web applications, and interactive digital experiences designed to drive business growth.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 md:flex-wrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={(e) => handleCategoryClick(category, e)}
                  className={cn(
                    "whitespace-nowrap flex-shrink-0 snap-center px-5 py-2.5 rounded-full text-[0.7rem] md:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 border",
                    activeCategory === category 
                      ? "bg-[#0B132B] text-white border-[#0B132B] shadow-md" 
                      : "bg-white border-[#0B132B]/10 text-[#0B132B]/70 hover:border-[#0B132B]/30 hover:text-[#0B132B]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Scroll Indicator (Mobile only) */}
            <div className="h-[3px] w-full bg-[#0B132B]/10 rounded-full mt-4 relative overflow-hidden md:hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#0B132B] transition-all duration-150 ease-out rounded-full" 
                style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
              />
            </div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard 
                    project={project} 
                    onOpenCaseStudy={setSelectedProject} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="py-24 text-center w-full">
              <p className="text-[#0B132B]/50 font-medium">No projects found in this category.</p>
            </div>
          )}

        </div>
      </main>

      <CaseStudyModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
