import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { recommendationScreenshots, RecommendationItem } from '../../data/recommendations';

export default function Testimonials() {
  const [activeImageModal, setActiveImageModal] = useState<RecommendationItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef<number>(0);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = recommendationScreenshots.length; // 5

  // Update visible count based on screen size (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Smooth natural auto-scroll (changes slide every 3.8s, pauses immediately on hover, touch, or active modal)
  useEffect(() => {
    if (isPaused || activeImageModal !== null) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 3800);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, activeImageModal, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaXRef.current) > 40) {
      if (touchDeltaXRef.current < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    // Keep paused momentarily then resume
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 md:py-24 bg-[#FAFAF8] border-t border-stone-200/80 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Block - Unchanged title & style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8C701B]">
                CLIENT & COLLEAGUE REVIEWS
              </span>
            </div>

            <h2 
              id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight uppercase"
            >
              Recommendations & Words of Trust
            </h2>

            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
              Authentic recommendations given on LinkedIn by engineering managers, senior tech mentors, software engineers, and product designers who have worked directly with Sayed Ahmad.
            </p>
          </div>

          {/* Controls: Next/Prev & Indicators */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Pause/Play indicator */}
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play carousel autoplay" : "Pause carousel autoplay"}
              className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-900 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors bg-white shadow-2xs"
              title={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-current ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous recommendation"
              className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-900 flex items-center justify-center text-stone-700 hover:text-stone-900 transition-colors bg-white shadow-2xs hover:shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next recommendation"
              className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-900 flex items-center justify-center text-stone-700 hover:text-stone-900 transition-colors bg-white shadow-2xs hover:shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Selected target element: div:nth-of-type(2) inside section#testimonials */}
        {/* CAROUSEL WRAPPER: PC shows 3 per screen, Mobile shows 1 per screen. Touch/hover pauses */}
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {recommendationScreenshots.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  style={{
                    flex: `0 0 calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)`,
                  }}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-stone-400 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col shrink-0"
                >
                  {/* Screenshot Container with Click to Enlarge */}
                  <div 
                    className="relative cursor-pointer bg-stone-50 overflow-hidden"
                    onClick={() => {
                      setIsPaused(true);
                      setActiveImageModal(item);
                    }}
                  >
                    <img
                      src={item.src}
                      alt={`LinkedIn recommendation for Sayed Ahmad from ${item.name}`}
                      loading={idx < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                    />

                    {/* Hover Overlay to Enlarge */}
                    <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 text-stone-900 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge Screenshot</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide group ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-7 bg-stone-900'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL TO ENLARGE SCREENSHOT */}
      <AnimatePresence>
        {activeImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageModal(null)}
              className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={`LinkedIn Recommendation Screenshot from ${activeImageModal.name}`}
              className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Top Header */}
              <div className="px-6 py-4 bg-[#F3F2F0] border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center text-white font-bold text-xs">
                    in
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 font-display uppercase tracking-tight">
                      LinkedIn Recommendation Screenshot
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveImageModal(null)}
                  className="w-8 h-8 rounded-full border border-stone-300 hover:border-stone-500 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body: High Resolution Screenshot */}
              <div className="p-4 sm:p-6 overflow-y-auto bg-stone-100 flex flex-col items-center justify-center">
                <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-white">
                  <img
                    src={activeImageModal.src}
                    alt={`LinkedIn recommendation screenshot from ${activeImageModal.name}`}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="px-6 py-3.5 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <a
                  href="https://www.linkedin.com/in/sayedahmadbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white font-mono font-medium hover:bg-[#004182] transition-colors"
                >
                  <span>View Sayed's LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveImageModal(null)}
                  className="px-4 py-1.5 rounded-lg border border-stone-300 text-stone-700 font-mono hover:bg-stone-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
