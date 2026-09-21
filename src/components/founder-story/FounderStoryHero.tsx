import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import LocalImage from './LocalImage';

export default function FounderStoryHero() {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono tracking-wider uppercase text-stone-600 hover:text-stone-950 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-stone-400">
            <span>HOME</span>
            <span className="mx-2 text-stone-300">/</span>
            <span className="text-[#8C701B] font-semibold">MY STORY</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#8C701B]">
                  MY STORY
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-bold text-stone-900 uppercase tracking-tight leading-[1.08] mb-6 sm:mb-8">
                <span className="block">I Didn’t Start in Web Development.</span>
                <span className="block text-stone-600">I Started by Understanding Businesses.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-[19px] text-stone-600 leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl">
                A journey from marketing and digital promotion to building websites, eCommerce experiences, and custom digital solutions that help businesses grow.
              </p>

              {/* Trajectory Metadata Marker */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2 sm:gap-3 text-[10.5px] sm:text-xs font-mono tracking-[0.16em] uppercase text-stone-500">
                <span className="text-stone-800 font-semibold">MARKETING</span>
                <span className="text-[#D4AF37]">→</span>
                <span className="text-stone-800 font-semibold">WEB DEVELOPMENT</span>
                <span className="text-[#D4AF37]">→</span>
                <span className="text-[#8C701B] font-bold">DIGITAL SOLUTIONS</span>
              </div>
            </motion.div>
          </div>

          {/* Image / Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <LocalImage
                src="/images/founder-story/founder.webp"
                alt="Sayed Ahmad — Founder of Sitora Web and Web Development Partner"
                aspectRatio="aspect-[4/5]"
                fallbackTitle="SAYED AHMAD"
                fallbackSubtitle="Founder & Web Development Partner"
                className="shadow-md border border-stone-200"
              />

              {/* Architectural Label Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white py-3 px-5 rounded-xl border border-stone-200 shadow-sm hidden sm:flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-[10px] font-mono tracking-wider uppercase text-stone-700">
                  <span className="block font-semibold">DHAKA, BANGLADESH</span>
                  <span className="text-stone-400">GLOBAL DELIVERY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
