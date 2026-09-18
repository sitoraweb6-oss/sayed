import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

interface ServiceCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  services: string[];
  cta: string;
  linkParam: string;
  theme: 'champagne' | 'cool' | 'neutral' | 'graphite';
}

const categories: ServiceCategory[] = [
  {
    id: 'agencies',
    category: 'FOR DIGITAL AGENCIES',
    title: 'White-Label Development Partnerships',
    description: 'I help agencies handle client projects with reliable white-label development, clean execution, and dependable communication—so they can focus on strategy, client relationships, and growth.',
    services: [
      'Overflow project support',
      'White-label WordPress development',
      'WooCommerce projects',
      'Figma implementation',
      'Ongoing technical support'
    ],
    cta: 'Partner With Me',
    linkParam: 'agency',
    theme: 'champagne'
  },
  {
    id: 'established',
    category: 'FOR ESTABLISHED BUSINESSES',
    title: 'Direct Web Solutions',
    description: 'I build professional websites, eCommerce platforms, and custom digital solutions that help businesses strengthen their online presence and serve customers better.',
    services: [
      'Business websites',
      'eCommerce platforms',
      'Website redesign',
      'Custom functionality',
      'Performance improvements'
    ],
    cta: 'Discuss Your Project',
    linkParam: 'business',
    theme: 'cool'
  },
  {
    id: 'small-business',
    category: 'FOR SMALL BUSINESSES',
    title: 'Professional Online Foundations',
    description: 'I help small businesses establish a professional online presence that makes them easier to discover, trust, and contact.',
    services: [
      'Local business websites',
      'Service business websites',
      'Landing pages',
      'Starter online stores',
      'Digital presence setup'
    ],
    cta: 'Start Your Website',
    linkParam: 'business',
    theme: 'neutral'
  },
  {
    id: 'founders',
    category: 'FOR FOUNDERS & ORGANIZATIONS',
    title: 'Custom Systems & MVPs',
    description: 'I create custom digital solutions that connect data, simplify workflows, and turn complex business requirements into usable products.',
    services: [
      'MVP development',
      'Dashboards',
      'Authentication',
      'Database-connected systems',
      'Custom workflows'
    ],
    cta: 'Build Something Custom',
    linkParam: 'business',
    theme: 'graphite'
  }
];

export default function WhoIWorkWith() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance && currentSlide < categories.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (distance < -minSwipeDistance && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const nextSlide = () => {
    if (currentSlide < categories.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="audience" className="py-20 md:py-28 bg-[#FCFBFA] border-t border-[#0B132B]/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#0B132B]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-3xl mb-12 sm:mb-14 md:mb-18"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-[12px] font-bold tracking-[0.14em] uppercase text-[#D4AF37] mb-3"
          >
            WHO I WORK WITH
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[44px] font-display font-medium tracking-tight text-[#0B132B] mb-5 leading-[1.18]"
          >
            Different Businesses. One Reliable Development Partner.
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-[16px] sm:text-[17px] text-[#0B132B]/70 leading-relaxed max-w-2xl font-normal"
          >
            Whether you need behind-the-scenes development support, a complete business website, or a custom digital product, I adapt my approach to fit your goals.
          </motion.p>
        </motion.div>

        {/* DESKTOP & TABLET: 2x2 Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              className="h-full"
            >
              <ServiceCard category={cat} />
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE-ONLY: Premium Carousel (<768px) */}
        <div className="block md:hidden">
          {/* Carousel Track */}
          <div 
            className="overflow-hidden w-full select-none touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              className="flex items-stretch"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              {categories.map((cat) => (
                <div 
                  key={cat.id} 
                  className="w-full flex-shrink-0 px-0.5 box-border"
                >
                  <ServiceCard category={cat} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation & Progress Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Progress Indicator & Dots */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#0B132B]">
                {String(currentSlide + 1).padStart(2, '0')}{' '}
                <span className="text-[#0B132B]/30">/</span>{' '}
                {String(categories.length).padStart(2, '0')}
              </span>

              {/* Four Pagination Dots */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Audience category slides">
                {categories.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-selected={currentSlide === idx}
                    role="tab"
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx 
                        ? 'w-6 bg-[#D4AF37]' 
                        : 'w-1.5 bg-[#0B132B]/20 hover:bg-[#0B132B]/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                aria-label="Previous audience slide"
                className={`w-10 h-10 rounded-full border border-[#0B132B]/15 bg-white flex items-center justify-center text-[#0B132B] shadow-sm transition-all duration-200 active:scale-95 ${
                  currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#D4AF37] hover:text-[#8C701B]'
                }`}
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                disabled={currentSlide === categories.length - 1}
                aria-label="Next audience slide"
                className={`w-10 h-10 rounded-full border border-[#0B132B]/15 bg-white flex items-center justify-center text-[#0B132B] shadow-sm transition-all duration-200 active:scale-95 ${
                  currentSlide === categories.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#D4AF37] hover:text-[#8C701B]'
                }`}
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ category }: { category: ServiceCategory }) {
  // Visual variations per theme
  const getCardClasses = () => {
    switch (category.theme) {
      case 'champagne':
        return {
          wrapper: 'bg-gradient-to-br from-[#FCFAF6] via-[#FFFDF9] to-[#F8F3EA] border-[#D4AF37]/25 hover:border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(212,175,55,0.03)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.08)]',
          badge: 'bg-[#D4AF37]/10 text-[#8C701B] border-[#D4AF37]/30',
          title: 'text-[#0B132B]',
          desc: 'text-[#0B132B]/70',
          divider: 'border-[#D4AF37]/15',
          label: 'text-[#8C701B]/70',
          listItem: 'text-[#0B132B]/80',
          dot: 'bg-[#D4AF37]',
          cta: 'text-[#0B132B] hover:text-[#8C701B]',
          iconColor: 'text-[#D4AF37]'
        };
      case 'cool':
        return {
          wrapper: 'bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] border-slate-200/90 hover:border-slate-400/80 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]',
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
          title: 'text-[#0B132B]',
          desc: 'text-[#0B132B]/70',
          divider: 'border-slate-200/80',
          label: 'text-slate-500',
          listItem: 'text-[#0B132B]/80',
          dot: 'bg-slate-400',
          cta: 'text-[#0B132B] hover:text-slate-900',
          iconColor: 'text-slate-600'
        };
      case 'neutral':
        return {
          wrapper: 'bg-gradient-to-br from-[#FAFAF8] via-[#FFFFFF] to-[#F5F4EE] border-stone-200/90 hover:border-stone-400/80 shadow-[0_4px_20px_rgba(28,25,23,0.02)] hover:shadow-[0_12px_32px_rgba(28,25,23,0.06)]',
          badge: 'bg-stone-100 text-stone-700 border-stone-200',
          title: 'text-[#0B132B]',
          desc: 'text-[#0B132B]/70',
          divider: 'border-stone-200/80',
          label: 'text-stone-500',
          listItem: 'text-[#0B132B]/80',
          dot: 'bg-stone-400',
          cta: 'text-[#0B132B] hover:text-stone-900',
          iconColor: 'text-stone-600'
        };
      case 'graphite':
        return {
          wrapper: 'bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#141E38] border-slate-700/60 hover:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(11,19,43,0.2)] hover:shadow-[0_16px_40px_rgba(11,19,43,0.3)]',
          badge: 'bg-white/10 text-[#D4AF37] border-[#D4AF37]/30',
          title: 'text-white',
          desc: 'text-slate-300',
          divider: 'border-white/10',
          label: 'text-slate-400',
          listItem: 'text-slate-200',
          dot: 'bg-[#D4AF37]',
          cta: 'text-white hover:text-[#D4AF37]',
          iconColor: 'text-[#D4AF37]'
        };
    }
  };

  const styles = getCardClasses();

  return (
    <div className={`group rounded-2xl md:rounded-3xl p-6 sm:p-9 lg:p-10 border flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 ${styles.wrapper}`}>
      
      {/* Top Section */}
      <div>
        {/* Card Header: Eyebrow + Minimal Abstract Indicator */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10.5px] font-bold tracking-[0.12em] uppercase border ${styles.badge}`}>
            {category.category}
          </span>
          
          <div className="opacity-75 group-hover:opacity-100 transition-opacity duration-300">
            <AbstractIndicator id={category.id} className={styles.iconColor} />
          </div>
        </div>

        {/* Service Title */}
        <h3 className={`text-xl sm:text-2xl lg:text-[1.65rem] font-display font-medium tracking-tight mb-3.5 leading-[1.22] ${styles.title}`}>
          {category.title}
        </h3>

        {/* Description */}
        <p className={`text-[14px] sm:text-[15px] leading-relaxed mb-8 ${styles.desc}`}>
          {category.description}
        </p>

        {/* Included Capabilities List */}
        <div className={`border-t pt-6 mb-8 ${styles.divider}`}>
          <p className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-4 ${styles.label}`}>
            Included Capabilities
          </p>
          <ul className="space-y-2.5">
            {category.services.map((service, index) => (
              <li key={index} className="flex items-start text-[13.5px] sm:text-[14px] leading-normal">
                <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${styles.dot}`} />
                <span className={styles.listItem}>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Footer */}
      <div className={`pt-4 border-t ${styles.divider}`}>
        <Link 
          to={`/contact?inquiry=${category.linkParam}`}
          className={`inline-flex items-center text-[13.5px] sm:text-[14px] font-semibold tracking-wide transition-colors group/cta ${styles.cta}`}
        >
          <span>{category.cta}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
        </Link>
      </div>

    </div>
  );
}

/**
 * Minimal, delicate architectural SVGs representing each audience category
 */
function AbstractIndicator({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case 'agencies':
      // Connected nodes / collaboration line
      return (
        <svg viewBox="0 0 44 44" fill="none" className={`w-9 h-9 ${className}`} aria-hidden="true">
          <circle cx="12" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="31" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 20.5L29 14.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
          <path d="M15 23.5L29 29.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="22" cy="22" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'established':
      // Structured website / interface composition
      return (
        <svg viewBox="0 0 44 44" fill="none" className={`w-9 h-9 ${className}`} aria-hidden="true">
          <rect x="7" y="9" width="30" height="26" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="7" y1="16" x2="37" y2="16" stroke="currentColor" strokeWidth="1.2" />
          <line x1="17" y1="16" x2="17" y2="35" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="11" cy="12.5" r="1" fill="currentColor" />
          <circle cx="14" cy="12.5" r="1" fill="currentColor" />
          <rect x="21" y="21" width="12" height="2" rx="1" fill="currentColor" fillOpacity="0.45" />
          <rect x="21" y="26" width="8" height="2" rx="1" fill="currentColor" fillOpacity="0.3" />
        </svg>
      );
    case 'small-business':
      // Clean storefront aperture & online beacon signal
      return (
        <svg viewBox="0 0 44 44" fill="none" className={`w-9 h-9 ${className}`} aria-hidden="true">
          <path d="M10 18L13 10H31L34 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 18C8 20 9.6 21.5 11.5 21.5C13.4 21.5 15 20 15 18C15 20 16.6 21.5 18.5 21.5C20.4 21.5 22 20 22 18C22 20 23.6 21.5 25.5 21.5C27.4 21.5 29 20 29 18C29 20 30.6 21.5 32.5 21.5C34.4 21.5 36 20 36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="11" y="21.5" width="22" height="13.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="19" y="27" width="6" height="8" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'founders':
      // Connected data / workflow flow pattern
      return (
        <svg viewBox="0 0 44 44" fill="none" className={`w-9 h-9 ${className}`} aria-hidden="true">
          <rect x="7" y="9" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="28" y="9" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="17.5" y="26" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 13.5H28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
          <path d="M11.5 18V22C11.5 24 13 25 15 25H22V26" stroke="currentColor" strokeWidth="1.2" />
          <path d="M32.5 18V22C32.5 24 31 25 29 25H22" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="22" cy="25" r="1.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
