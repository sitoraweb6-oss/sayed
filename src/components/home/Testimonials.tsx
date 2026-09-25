import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ExternalLink } from 'lucide-react';
import { recommendationScreenshots, RecommendationItem } from '../../data/recommendations';
import AutoDetectScreenshot from './AutoDetectScreenshot';

export default function Testimonials() {
  const [activeImageModal, setActiveImageModal] = useState<{
    item: RecommendationItem;
    resolvedSrc: string;
  } | null>(null);

  // Store resolved src paths if loaded
  const [resolvedSrcs, setResolvedSrcs] = useState<Record<string, string>>({});

  const handleImageFound = (id: string, src: string) => {
    setResolvedSrcs((prev) => ({ ...prev, [id]: src }));
  };

  return (
    <section 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 md:py-24 bg-[#FAFAF8] border-t border-stone-200/80 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Block - Unchanged title & style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
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

          {/* LinkedIn Verified Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full shadow-xs self-start md:self-auto">
            <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-stone-700">
              LinkedIn Screenshots
            </span>
          </div>
        </div>

        {/* ONLY Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recommendationScreenshots.map((item, idx) => {
            const reviewNumber = idx + 1;
            const currentResolved = resolvedSrcs[item.id] || item.imageCandidates[0];

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-stone-200 hover:border-stone-400 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                {/* Screenshot Container with Click to Enlarge */}
                <div 
                  className="relative cursor-pointer bg-stone-50 overflow-hidden"
                  onClick={() => setActiveImageModal({ item, resolvedSrc: currentResolved })}
                >
                  <AutoDetectScreenshot
                    candidates={item.imageCandidates}
                    alt={`LinkedIn recommendation for Sayed Ahmad from ${item.name}`}
                    reviewNumber={reviewNumber}
                    onImageFound={(foundSrc) => handleImageFound(item.id, foundSrc)}
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
              aria-label={`LinkedIn Recommendation Screenshot from ${activeImageModal.item.name}`}
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
                    src={activeImageModal.resolvedSrc}
                    alt={`LinkedIn recommendation screenshot from ${activeImageModal.item.name}`}
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
