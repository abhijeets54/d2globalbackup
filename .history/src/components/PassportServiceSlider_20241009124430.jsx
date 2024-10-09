import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Best Study Visa Consultants",
    description: "Looking to study abroad? We are your trusted consultants for study visa services. We simplify the process so you can focus on your academic journey.",
    buttonText: "Get Started",
    bgImage: "/slide1bg.jpg" // Replace with actual image path
  },
  {
    title: "Fast and Reliable Study Visa Processing",
    description: "Need your study visa processed quickly? Our expedited services ensure timely delivery of all necessary documentation to start your educational journey.",
    buttonText: "Learn More",
    bgImage: "/path/to/your-image2.jpg"
  },
  {
    title: "Expert Guidance for All Study Visa Needs",
    description: "From application submissions to interview preparations, our team of experts will guide you through every step of your study visa process.",
    buttonText: "Contact Us",
    bgImage: "/path/to/your-image3.jpg"
  }
];

const PassportServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500); // 500ms animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div
      className="relative w-full flex flex-col h-[500px] bg-cover bg-center overflow-hidden transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
    >
      {/* Chevron Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prevSlide} className="text-white hover:text-gray-200">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text-white hover:text-gray-200">
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Slide Content */}
      <div className="absolute inset-0 flex flex-col items-left top-24 justify-start">
        <div className="w-1/2 p-8 text-black">
          <h1 className={`text-4xl font-bold mb-4 transform transition-all duration-500 ease-in-out ${isAnimating ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'}`}>
            {slides[currentSlide].title}
          </h1>
          <p className={`text-lg mb-6 transform transition-all duration-500 ease-in-out ${isAnimating ? 'translate-y-5 opacity-0 delay-100' : 'translate-y-0 opacity-100 delay-100'}`}>
            {slides[currentSlide].description}
          </p>
          <button className={`bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transform transition-all duration-500 ease-in-out ${isAnimating ? 'translate-y-5 opacity-0 delay-200' : 'translate-y-0 opacity-100 delay-200'}`}>
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassportServiceSlider;
