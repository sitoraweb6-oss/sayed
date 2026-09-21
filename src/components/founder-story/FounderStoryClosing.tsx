import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FounderStoryClosing() {
  return (
    <div className="my-12 sm:my-16 py-12 sm:py-16 px-6 sm:px-12 rounded-3xl bg-stone-900 text-stone-50 text-center relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-[10.5px] sm:text-[11.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
            08 / STILL BUILDING
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-50 uppercase tracking-tight leading-[1.12] mb-6">
          <span className="block">Not Just More Websites.</span>
          <span className="block text-stone-300">Better Digital Experiences.</span>
        </h3>

        <p className="text-[15px] sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8">
          So far, I have completed 50+ web development projects for clients and businesses across approximately five countries, covering eCommerce websites, business websites, landing pages, interactive experiences, and functionality-rich digital solutions.
        </p>

        <p className="text-sm sm:text-[15px] text-stone-400 font-mono italic mb-10">
          I’m still building—not simply more websites, but better digital experiences that help businesses communicate who they are, earn trust, generate more leads and sales, and create real value.
        </p>

        {/* Closing Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-[#FAF8F5] text-stone-900 text-xs sm:text-[13px] font-semibold tracking-wider uppercase hover:bg-white transition-all shadow-sm group"
          >
            <span>Explore Selected Work</span>
            <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.05] border border-white/20 text-stone-50 text-xs sm:text-[13px] font-semibold tracking-wider uppercase hover:bg-white/[0.1] transition-all"
          >
            <span>Start a Conversation</span>
          </Link>
        </div>

        {/* Final Understated Line */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-[11px] font-mono tracking-[0.2em] uppercase text-stone-500">
          The journey is still being built.
        </div>
      </div>
    </div>
  );
}
