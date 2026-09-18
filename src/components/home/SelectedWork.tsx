import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects, Project } from '../../data/portfolio';
import ProjectCard from '../portfolio/ProjectCard';
import CaseStudyModal from '../portfolio/CaseStudyModal';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export default function SelectedWork() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 2 : 6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All Work');
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
          
          if (maxScroll > 0) {
            if (scrollLeft >= maxScroll - 5) {
              container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              container.scrollBy({ left: 150, behavior: 'smooth' });
            }
          }
        }
      }, 3500);
    };

    startAutoScroll();

    const handleInteraction = () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
      
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
    // Reset visible count when changing categories
    setVisibleCount(isMobile ? 2 : 6);
    
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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        // We do not auto-reset visibleCount here to prevent a jarring experience if user already loaded more.
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const totalProjects = filteredProjects.length;

  const handleLoadMore = () => {
    if (isMobile) {
      if (visibleCount === 2) {
        setVisibleCount(6);
      } else {
        setVisibleCount(totalProjects);
      }
    } else {
      if (visibleCount < totalProjects) {
        // Increment by 6 on desktop
        setVisibleCount(prev => Math.min(prev + 6, totalProjects));
      }
    }
  };

  const getButtonText = () => {
    if (isMobile) {
      if (visibleCount === 2) return "VIEW MORE PROJECTS";
      if (visibleCount === 6) return "VIEW ALL PROJECTS";
      return "";
    } else {
      return "LOAD MORE PROJECTS";
    }
  };

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const showLoadMore = visibleCount < totalProjects;

  return (
    <section className="py-20 md:py-32 bg-white scroll-mt-20 md:scroll-mt-24" id="selected-work">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-stone-900 mb-6 tracking-tight">Selected Work</h2>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
              A selection of websites, eCommerce experiences, and custom digital solutions built around real-world business needs.
            </p>
          </div>
          <Link 
            to="/work"
            className="inline-flex items-center justify-center px-8 py-4 text-[0.75rem] font-bold tracking-widest text-white uppercase bg-[#0B132B] rounded-full hover:bg-opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-[#0B132B]/20 transition-all duration-300 group shadow-md mt-8 md:mt-0 flex-shrink-0"
          >
            View all projects
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index >= visibleCount - 6 ? (index % 6) * 0.1 : 0 }}
              >
                <ProjectCard 
                  project={project} 
                  onOpenCaseStudy={setSelectedProject} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleProjects.length === 0 && (
          <div className="py-12 md:py-24 text-center w-full">
            <p className="text-[#0B132B]/50 font-medium">No projects found in this category.</p>
          </div>
        )}

        {/* Load More Action */}
        {showLoadMore && (
          <div className="mt-16 md:mt-24 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-4 bg-transparent border border-stone-200 text-stone-900 text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
            >
              {getButtonText()}
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal Overlay */}
      <CaseStudyModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
