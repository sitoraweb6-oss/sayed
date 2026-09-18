import React from 'react';
import { motion } from 'motion/react';

interface StoryChapterProps {
  id?: string;
  chapterNumber: string;
  chapterTitle: string;
  heading: string | React.ReactNode;
  children: React.ReactNode;
  sideElement?: React.ReactNode;
  className?: string;
}

export default function StoryChapter({
  id,
  chapterNumber,
  chapterTitle,
  heading,
  children,
  sideElement,
  className = '',
}: StoryChapterProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 border-b border-stone-200/80 last:border-b-0 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8"
      >
        {/* Chapter Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10.5px] sm:text-[11.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#8C701B]">
              {chapterNumber} / {chapterTitle}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-bold text-stone-900 uppercase tracking-tight leading-[1.12] max-w-3xl">
            {heading}
          </h2>
        </div>

        {/* Content Layout */}
        {sideElement ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7 text-base sm:text-[17px] text-stone-600 leading-relaxed space-y-5">
              {children}
            </div>
            <div className="lg:col-span-5">
              {sideElement}
            </div>
          </div>
        ) : (
          <div className="text-base sm:text-[17px] text-stone-600 leading-relaxed">
            {children}
          </div>
        )}
      </motion.div>
    </section>
  );
}
