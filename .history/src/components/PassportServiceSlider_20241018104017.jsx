import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const handleSocialClick = (url) => {
  window.open(url, '_blank');
};

const handleWhatsAppClick = () => {
  window.open('https://wa.me/8427670455', '_blank');
};

const slides = [
  {
    title: "Study Abroad",
    description: "Explore global education opportunities.",
    buttonText: "Get Started",
    bgImage: "/dashboard/svisa2.webp", 
    path: "/StudyAbroad"
  },
  {
    title: "Tourist Visa",
    description: "Plan your dream vacation.",
    buttonText: "Plan Your Trip",
    bgImage: "/dashboard/tvisa3.webp", 
    path: "/TouristVisa"
  },
  {
    title: "Training",
    description: "Enroll in our professional training courses.",
    buttonText: "Enroll Now",
    bgImage: "/dashboard/idash.webp", 
    path: "/Training"
  }
];

const PassportServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const changeSlide = useCallback((newDirection) => {
    setCurrentSlide((prev) => {
      const nextSlide = newDirection === 'next'
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length;
      return nextSlide;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => changeSlide('next'), 5000);
    return () => clearInterval(timer);
  }, [changeSlide]);

  const handleButtonClick = useCallback((path, event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(path);
  }, [navigate]);

  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0 z-10' : 'translate-x-full z-0'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

          <motion.div
            className="absolute z-30 w-full text-left px-8"
            style={{ top: '30%', left: '8%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="w-full md:w-1/2 text-white space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">{slide.title}</h1>
              <p className="text-base md:text-lg">{slide.description}</p>
              <button
                onClick={(e) => handleButtonClick(slide.path, e)}
                className="px-6 py-3 bg-customBlue text-white font-semibold rounded-md hover:bg-customYellow transition duration-300 z-40"
              >
                {slide.buttonText}
              </button>
            </div>
          </motion.div>
        </div>
      ))}

      {/* Arrow Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30 pointer-events-auto">
        <button onClick={() => changeSlide('prev')} className="text-white hover:text-gray-300 focus:outline-none">
          <ChevronLeft size={48} />
        </button>
        <button onClick={() => changeSlide('next')} className="text-white hover:text-gray-300 focus:outline-none">
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Social Icons */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {[{ icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo' }, { icon: FaFacebookF, url: 'https://www.facebook.com' }].map((social, index) => (
          <motion.button
            key={index}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-customBlue/80 hover:bg-customYellow transition-all duration-300 shadow-md"
            onClick={() => handleSocialClick(social.url)}
          >
            <social.icon className="text-xl" />
          </motion.button>
        ))}
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-customBlue' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 flex items-center z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-2 bg-white px-3 py-2 rounded-full shadow-md hidden md:block"
        >
          <p className="text-customBlue font-semibold text-sm">Have any queries? Chat with us!</p>
        </motion.div>
        <motion.button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-md"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp className="text-xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default PassportServiceSlider;
