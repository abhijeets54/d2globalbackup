import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Best Study Visa Consultants in Ludhiana",
    description: "Looking to study abroad? We are your trusted consultants for study visa services. We simplify the process so you can focus on your academic journey.",
    buttonText: "Get Started",
    bgImage: "/slide1bg.jpg" // Replace with actual image path
  },
  {
    title: "Fast and Reliable Tourist Visa Processing",
    description: "Planning to travel abroad? Our fast and reliable tourist visa services ensure a smooth and hassle-free process for your trip.",
    buttonText: "Learn More",
    bgImage: "/tour3.jpg"
  },
  {
    title: "Expert IELTS & PTE Coaching",
    description: "Prepare for your IELTS or PTE exams with expert coaching from our experienced trainers. Get the scores you need to achieve your goals.",
    buttonText: "Contact Us",
    bgImage: "/path/to/your-image3.jpg"
  }
];

const PassportServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback((direction) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => {
        const nextSlide = direction === 'next'
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length;
        return nextSlide;
      });
    }
  }, [isAnimating]);

  const nextSlide = useCallback(() => changeSlide('next'), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide('prev'), [changeSlide]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col items-left top-16 justify-start">
              <div className="w-full md:w-1/2 p-8 text-black">
                <h1 className="text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg mb-6">
                  {slide.description}
                </p>
                <button className="bg-customBlue text-white px-6 py-2 rounded-full hover:bg-blue-700">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chevron Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button onClick={prevSlide} className="text-white hover:text-gray-200 focus:outline-none">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text-white hover:text-gray-200 focus:outline-none">
          <ChevronRight size={48} />
        </button>
      </div>
    </div>
  );
};

export default PassportServiceSlider;
