import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    bgImage: "/dash1.webp",
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

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Automatically change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full md:w-[1400px] h-[60vh] md:h-[700px] overflow-hidden mx-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? 'translate-x-0 z-10'
              : 'translate-x-full z-0'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
      ))}
    </div>
  );
};

export default SimpleImageSlider;
