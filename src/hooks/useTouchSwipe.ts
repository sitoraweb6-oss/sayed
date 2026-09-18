import { useState, TouchEvent } from 'react';

interface UseTouchSwipeOptions {
  itemCount: number;
  minSwipeDistance?: number;
}

export function useTouchSwipe({ itemCount, minSwipeDistance = 45 }: UseTouchSwipeOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance && currentSlide < itemCount - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (distance < -minSwipeDistance && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const nextSlide = () => {
    if (currentSlide < itemCount - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < itemCount) {
      setCurrentSlide(index);
    }
  };

  return {
    currentSlide,
    setCurrentSlide: goToSlide,
    nextSlide,
    prevSlide,
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
}
