import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Best Passport Service Providers",
    description: "Planning a getaway or need a passport update? Look no further! We handle all the paperwork hassle so you can focus on your next adventure.",
    buttonText: "Get Started",
    bgImage: "/.jpg" // Replace with actual image path
  },
  {
    title: "Fast and Reliable Passport Services",
    description: "Need your passport in a hurry? Our expedited services ensure you get your travel documents on time. We offer various processing speeds to meet your needs.",
    buttonText: "Learn More",
    bgImage: "/path/to/your-image2.jpg"
  },
  {
    title: "Expert Guidance for All Passport Needs",
    description: "From first-time applications to renewals and replacements, our team of experts is here to guide you through every step of the passport process.",
    buttonText: "Contact Us",
    bgImage: "/path/to/your-image3.jpg"
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
    <div
      className="relative w-full flex flex-col h-[500px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }} // Set background image
    >
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prevSlide} className="text-white hover:text-gray-200">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text-white hover:text-gray-200">
          <ChevronRight size={48} />
        </button>
      </div>

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="w-1/2 p-8 bg-black bg-opacity-50 text-white">
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
      </div>
    </div>
  );
};

export default PassportServiceSlider;
