import React from 'react';

interface StoryQuoteProps {
  quote: string;
  attribution?: string;
  accentColor?: string;
  className?: string;
}

export default function StoryQuote({
  quote,
  attribution,
  className = '',
}: StoryQuoteProps) {
  return (
    <figure className={`my-8 sm:my-12 py-6 sm:py-8 px-6 sm:px-10 rounded-2xl bg-stone-100/80 border-l-4 border-[#D4AF37] relative ${className}`}>
      <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-stone-900 leading-snug tracking-tight">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-xs sm:text-[13px] font-mono tracking-wider uppercase text-stone-500">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
