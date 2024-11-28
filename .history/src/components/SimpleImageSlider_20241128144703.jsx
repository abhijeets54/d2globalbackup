import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    bgImage: "/dash1.p",
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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Automatically change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
    <div className='bg-white'>
    <div className="relative w-full md:w-[1400px] h-[60vh] md:h-[700px] overflow-hidden mx-auto bg-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? 'translate-x-0 z-10'
              : 'translate-x-full z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'contain', // Ensure the image fits within the container
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent image repetition
          }}
        />
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button onClick={prevSlide} className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index ? 'bg-customBlue' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default SimpleImageSlider;
