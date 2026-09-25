import React, { useState, useEffect } from 'react';

interface AutoDetectScreenshotProps {
  candidates: string[];
  alt: string;
  className?: string;
  onImageFound?: (src: string) => void;
  reviewNumber: number;
}

export default function AutoDetectScreenshot({
  candidates,
  alt,
  className = '',
  onImageFound,
  reviewNumber,
}: AutoDetectScreenshotProps) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAllFailed, setHasAllFailed] = useState(false);

  const currentSrc = candidates[candidateIndex];

  useEffect(() => {
    // Reset if candidates change
    setCandidateIndex(0);
    setIsLoaded(false);
    setHasAllFailed(false);
  }, [candidates]);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasAllFailed(true);
    }
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth > 5 && img.naturalHeight > 5) {
      setIsLoaded(true);
      if (onImageFound) {
        onImageFound(currentSrc);
      }
    } else {
      handleError();
    }
  };

  if (hasAllFailed) {
    return (
      <div className="w-full aspect-[16/10] bg-stone-100 rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-3">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
          </svg>
        </div>
        <p className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider mb-1">
          LinkedIn Screenshot #{reviewNumber}
        </p>
        <p className="text-[11px] font-mono text-stone-500 max-w-xs leading-normal">
          Upload file to: <span className="font-semibold text-stone-700 bg-stone-200/80 px-1.5 py-0.5 rounded">public/image/recomend/reviw{reviewNumber}.png</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-stone-50 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center">
          <span className="text-[11px] font-mono text-stone-400">Loading screenshot...</span>
        </div>
      )}
      <img
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-auto block object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
