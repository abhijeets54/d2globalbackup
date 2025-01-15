import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    bgImage: "/visa1.jpeg",
  },
  {
    bgImage: "/dash2.webp",
  },
  {
    bgImage: "/dash3.webp",
  }
];

const SimpleImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide(); // Swipe left
    }
    if (touchStart - touchEnd < -75) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className="w-full bg-white">
      <div 
        className="relative w-full max-w-[90rem] mx-auto aspect-video sm:aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? 'translate-x-0 z-10'
                : 'translate-x-full z-0'
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'white'
            }}
          />
        ))}

        {/* Navigation Arrows - Hidden on mobile */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-between px-4 z-30">
          <button 
            onClick={prevSlide} 
            className="bg-white/90 rounded-full shadow-md p-1 sm:p-2 hover:bg-gray-200 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button 
            onClick={nextSlide} 
            className="bg-white/90 rounded-full shadow-md p-1 sm:p-2 hover:bg-gray-200 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center space-x-1 sm:space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-customBlue scale-125' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleImageSlider;