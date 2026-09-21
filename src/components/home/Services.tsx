import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechnicalFoundations from './TechnicalFoundations';
import { useTouchSwipe } from '../../hooks/useTouchSwipe';

interface Capability {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  isFeatured?: boolean;
}

const capabilities: Capability[] = [
  {
    id: 'business-website-development',
    number: '01',
    title: 'Business Website Development',
    tag: 'Websites Built for Business',
    description: 'Modern, responsive websites that communicate your business identity clearly, build trust, and help turn visitors into customers.',
    deliverables: ['Business Websites & WordPress', 'Responsive Design & Presentation', 'Lead-Focused Pages & Custom Features'],
    isFeatured: true
  },
  {
    id: 'saas-mvp-development',
    number: '02',
    title: 'SaaS & MVP Development',
    tag: 'Product & SaaS Foundations',
    description: 'Turn SaaS ideas, startup concepts, and business requirements into functional web products and MVPs with the structure, features, and connected data needed to validate and grow an idea.',
    deliverables: ['SaaS MVPs & Web Applications', 'Authentication & Role Dashboards', 'Database Integration & Custom Workflows'],
    isFeatured: true
  },
  {
    id: 'woocommerce-ecommerce',
    number: '03',
    title: 'WooCommerce & E-commerce',
    tag: 'Commerce & Conversion',
    description: 'WooCommerce stores, product experiences, checkout flows, payment integrations, and custom e-commerce functionality built around how customers shop.',
    deliverables: ['WooCommerce Stores & Product Catalogs', 'Checkout Optimization & Payments', 'Custom Store Features & Extensions']
  },
  {
    id: 'custom-web-solutions',
    number: '04',
    title: 'Custom Web Solutions',
    tag: 'Business Systems & Logic',
    description: 'Custom functionality, integrations, dashboards, workflows, and business-specific systems that go beyond what a standard website can provide.',
    deliverables: ['Custom Functionality & Workflows', 'Dashboards & API Integrations', 'Database-Connected Systems']
  },
  {
    id: 'website-redesign-optimization',
    number: '05',
    title: 'Website Redesign & Optimization',
    tag: 'Modernization & UX',
    description: 'Modernize outdated websites, improve usability, strengthen the customer experience, and make your existing website work better for your business.',
    deliverables: ['Website Redesign & Modernization', 'UX & Mobile Optimization', 'Conversion & Usability Improvements']
  },
  {
    id: 'performance-technical-optimization',
    number: '06',
    title: 'Performance & Technical Optimization',
    tag: 'Speed & Reliability',
    description: 'Improve loading performance, mobile experience, technical structure, and unnecessary complexity for a faster and more reliable website.',
    deliverables: ['Speed Optimization & Core Web Vitals', 'Mobile Performance & Technical Cleanup', 'Plugin & Frontend Optimization']
  }
];

export default function Services() {
  const {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide,
    handlers: { onTouchStart, onTouchMove, onTouchEnd },
  } = useTouchSwipe({ itemCount: capabilities.length });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section 
      id="services"
      className="py-14 sm:py-20 md:py-24 lg:py-32 bg-[#FAF8F5] text-[#0B132B] relative overflow-hidden border-t border-[#0B132B]/5 scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background Architectural Subtle Grid & Glow */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0B132B06_1px,transparent_1px),linear-gradient(to_bottom,#0B132B06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/[0.025] rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#0B132B]/[0.02] rounded-full blur-[110px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="max-w-3xl mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#D4AF37]">
              CAPABILITIES
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-display font-medium text-[#0B132B] tracking-tight leading-[1.14] mb-3 sm:mb-6"
          >
            Digital Solutions Built Around Your Goals
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-[14.5px] sm:text-[16px] md:text-[17.5px] text-[#0B132B]/70 leading-relaxed font-normal max-w-2xl"
          >
            From business websites and online stores to custom digital systems, I build practical web solutions around what your project needs to achieve.
          </motion.p>
        </motion.div>

        {/* DESKTOP & TABLET: 3-Column Capability Grid (2 rows x 3 columns on Desktop, 2 columns on Tablet) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8 items-stretch"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={itemVariants}
              className="h-full"
            >
              <CapabilityCard capability={cap} />
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE-ONLY: Premium Carousel / Slider (<768px) */}
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
              {capabilities.map((cap) => (
                <div 
                  key={cap.id} 
                  className="w-full flex-shrink-0 px-0.5 box-border"
                >
                  <CapabilityCard capability={cap} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation & Progress Controls */}
          <div className="flex items-center justify-between mt-4 sm:mt-6 px-1">
            {/* Progress Indicator & Dots */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#0B132B]">
                {String(currentSlide + 1).padStart(2, '0')}{' '}
                <span className="text-[#0B132B]/30">/</span>{' '}
                {String(capabilities.length).padStart(2, '0')}
              </span>

              {/* Six Pagination Dots */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Capabilities slides">
                {capabilities.map((_, idx) => (
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
                aria-label="Previous capability slide"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#0B132B]/15 bg-white flex items-center justify-center text-[#0B132B] shadow-sm transition-all duration-200 active:scale-95 ${
                  currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#D4AF37] hover:text-[#8C701B]'
                }`}
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                disabled={currentSlide === capabilities.length - 1}
                aria-label="Next capability slide"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#0B132B]/15 bg-white flex items-center justify-center text-[#0B132B] shadow-sm transition-all duration-200 active:scale-95 ${
                  currentSlide === capabilities.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#D4AF37] hover:text-[#8C701B]'
                }`}
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Foundations & Tooling Showcase */}
        <TechnicalFoundations />

      </div>
    </section>
  );
}

function CapabilityCard({ capability }: { capability: Capability }) {
  const isPrimary = capability.isFeatured;

  return (
    <div 
      id={`capability-${capability.number}`}
      className={`group relative h-full rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${
        isPrimary 
          ? 'bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF9] to-[#F7F3EB] border-[#D4AF37]/35 hover:border-[#D4AF37]/70 shadow-[0_4px_24px_rgba(212,175,55,0.04)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.08)]' 
          : 'bg-white border-[#0B132B]/8 hover:border-[#0B132B]/20 shadow-[0_4px_20px_rgba(11,19,43,0.02)] hover:shadow-[0_12px_28px_rgba(11,19,43,0.05)]'
      }`}
    >
      {/* Top Hairline Accent Line on Hover */}
      <div 
        className={`absolute top-0 left-6 right-6 h-[2px] rounded-t-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          isPrimary ? 'bg-[#D4AF37]' : 'bg-[#0B132B]/60'
        }`} 
        aria-hidden="true" 
      />

      <div>
        {/* Header: Number, Tag & Directional Arrow */}
        <div className="flex items-center justify-between gap-4 mb-3.5 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className={`text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider transition-colors duration-300 ${
              isPrimary ? 'text-[#D4AF37]' : 'text-[#0B132B]/40 group-hover:text-[#D4AF37]'
            }`}>
              {capability.number}
            </span>
            <span className="text-[#0B132B]/20">/</span>
            <span className={`text-[9.5px] sm:text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded ${
              isPrimary ? 'bg-[#D4AF37]/10 text-[#8C701B]' : 'bg-[#0B132B]/5 text-[#0B132B]/60'
            }`}>
              {capability.tag}
            </span>
          </div>

          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#0B132B]/10 flex items-center justify-center text-[#0B132B]/40 group-hover:text-[#0B132B] group-hover:border-[#0B132B]/30 transition-all duration-300 bg-white/60">
            <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-[22px] font-display font-medium tracking-tight text-[#0B132B] mb-2 sm:mb-3 leading-[1.25] group-hover:text-[#0B132B] transition-colors">
          {capability.title}
        </h3>

        {/* Description */}
        <p className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#0B132B]/70 leading-relaxed font-normal mb-3 sm:mb-6">
          {capability.description}
        </p>
      </div>

      {/* Deliverables / Scope details */}
      <div className="pt-3.5 sm:pt-5 border-t border-[#0B132B]/6 mt-3 sm:mt-4">
        <ul className="space-y-1 sm:space-y-1.5">
          {capability.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-center text-[12px] sm:text-[12.5px] text-[#0B132B]/60 leading-normal">
              <span className={`w-1 h-1 rounded-full mr-2 sm:mr-2.5 flex-shrink-0 ${isPrimary ? 'bg-[#D4AF37]' : 'bg-[#0B132B]/30 group-hover:bg-[#D4AF37]'} transition-colors`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Bottom subtle link action */}
        <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#0B132B]/5 flex items-center justify-between">
          <Link
            to="/contact?inquiry=project"
            className="text-[11.5px] sm:text-[12px] font-semibold tracking-wide text-[#0B132B]/70 group-hover:text-[#0B132B] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Inquire About This</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <span className="text-[9.5px] sm:text-[10px] font-mono text-[#0B132B]/30 tracking-widest uppercase">PRACTICAL TECH</span>
        </div>
      </div>

    </div>
  );
}
