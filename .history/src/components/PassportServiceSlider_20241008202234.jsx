import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Best Passport service providers.",
    description: "Planning a getaway or need a passport update? Look no further! We are your trusted passport services provider. We handle all the paperwork hassle so you can focus on your next adventure. Contact us today to start your passport journey.",
    buttonText: "Get Started"
  },
  {
    title: "Fast and Reliable Passport Services",
    description: "Need your passport in a hurry? Our expedited services ensure you get your travel documents on time. We offer various processing speeds to meet your needs.",
    buttonText: "Learn More"
  },
  {
    title: "Expert Guidance for All Passport Needs",
    description: "From first-time applications to renewals and replacements, our team of experts is here to guide you through every step of the passport process.",
    buttonText: "Contact Us"
  }
];

const PassportServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAnimating(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative w-full flex flex-col bg-sky-300 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prevSlide} className="text-white hover:text-gray-200">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text-white hover:text-gray-200">
          <ChevronRight size={48} />
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="w-1/2 p-8">
          <h1 className={`text-4xl font-bold mb-4 ${isAnimating ? 'animate-slide-up' : ''}`}>
            {slides[currentSlide].title}
          </h1>
          <p className={`text-lg mb-6 ${isAnimating ? 'animate-slide-up animation-delay-200' : ''}`}>
            {slides[currentSlide].description}
          </p>
          <button className={`bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 ${isAnimating ? 'animate-slide-up animation-delay-400' : ''}`}>
            {slides[currentSlide].buttonText}
          </button>
        </div>
        <div className="w-1/2 p-8 flex justify-end items-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 bg-brown-500 rounded-md transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-md transform -rotate-3 flex items-center justify-center text-2xl font-bold">
              PASSPORT
            </div>
          </div>
          <div className="ml-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
            <div className="mt-4 w-32 h-8 bg-gray-300 rounded"></div>
            <div className="mt-2 w-32 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportServiceSlider;