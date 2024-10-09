import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Best Study Visa Consultants in Ludhiana",
    description: "Looking to study abroad? We are your trusted consultants for study visa services. We simplify the process so you can focus on your academic journey.",
    buttonText: "Get Started",
    bgImage: "/slide1bg.jpg", // Replace with actual image path
    path: "/study-visa"
  },
  {
    title: "Explore the World with Our Tourist Visa Services",
    description: "Planning your next adventure? Our expert tourist visa services ensure a smooth journey. From application to approval, we've got you covered.",
    buttonText: "Plan Your Trip",
    bgImage: "/tour3.jpg",
    path: "/tourist-visa"
  },
  {
    title: "Excel in IELTS and PTE with Our Coaching",
    description: "Boost your language proficiency scores with our specialized IELTS and PTE coaching. Our experienced trainers will help you achieve your target scores.",
    buttonText: "Enroll Now",
    bgImage: "/path/to/your-image3.jpg",
    path: "/language-coaching"
  }
];

const PassportServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const navigate = useNavigate();

  const changeSlide = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const nextSlide = newDirection === 'next'
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length;
      return nextSlide;
    });
  }, []);

  const nextSlide = useCallback(() => changeSlide('next'), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide('prev'), [changeSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0 z-10' 
              : index === (currentSlide - 1 + slides.length) % slides.length 
                ? '-translate-x-full' 
                : 'translate-x-full'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="absolute inset-0 flex flex-col items-left justify-center  p-8">
            <div className="w-full md:w-1/2 text-black">
              <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">{slide.title}</h1>
              <p className="text-lg mb-6 animate-fadeInUp animation-delay-200">{slide.description}</p>
              <button 
                onClick={() => handleButtonClick(slide.path)}
                className="bg-customBlue text-white px-6 py-2 rounded-full hover:bg-blue-700 animate-fadeInUp animation-delay-400"
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Chevron Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
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