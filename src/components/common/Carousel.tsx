import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  ariaLabel: string;
  theme?: 'light' | 'dark' | 'subtle';
  className?: string;
}

export default function Carousel<T>({
  items,
  renderItem,
  keyExtractor,
  ariaLabel,
  theme = 'subtle',
  className,
}: CarouselProps<T>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

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
    if (distance > minSwipeDistance && currentSlide < items.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (distance < -minSwipeDistance && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const nextSlide = () => {
    if (currentSlide < items.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={cn("relative w-full", className)} aria-label={ariaLabel}>
      {/* Desktop Grid Layout (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={keyExtractor(item, index)} className="h-full flex flex-col">
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Swipe Carousel (visible below lg) */}
      <div 
        className="lg:hidden relative overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item, index) => (
            <div 
              key={keyExtractor(item, index)} 
              className="w-full flex-shrink-0 px-2 sm:px-4"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>

        {/* Navigation Controls: Prev / Next / Dots */}
        <div className="flex items-center justify-between mt-8 pt-4 px-2 border-t border-black/5">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {items.map((item, idx) => (
              <button
                key={keyExtractor(item, idx)}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentSlide === idx 
                    ? (isDark ? "w-6 bg-[#D4AF37]" : "w-6 bg-[#0B132B]") 
                    : (isDark ? "w-2 bg-white/20 hover:bg-white/40" : "w-2 bg-[#0B132B]/20 hover:bg-[#0B132B]/40")
                )}
              />
            ))}
          </div>

          {/* Prev / Next Action Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
              className={cn(
                "p-2.5 rounded-full border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed",
                isDark 
                  ? "border-white/10 text-white hover:bg-white/5 active:scale-95" 
                  : "border-[#0B132B]/10 text-[#0B132B] hover:bg-[#0B132B]/5 active:scale-95"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === items.length - 1}
              aria-label="Next slide"
              className={cn(
                "p-2.5 rounded-full border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed",
                isDark 
                  ? "border-white/10 text-white hover:bg-white/5 active:scale-95" 
                  : "border-[#0B132B]/10 text-[#0B132B] hover:bg-[#0B132B]/5 active:scale-95"
              )}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
