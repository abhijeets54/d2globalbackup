import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaArrowRight, FaGlobeAmericas, FaPassport, FaPlane, FaGraduationCap, FaHouseUser, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
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
    description: "Explore educational opportunities around the globe",
    buttonText: "Get Started",
    bgImage: "/dash1.webp",
    path: "/StudyAbroad",
    icon: FaGraduationCap
  },
  {
    title: "Tourist Visa",
    description: "Plan your next adventure with ease",
    buttonText: "Plan Your Trip",
    bgImage: "/dash2.webp",
    path: "/TouristVisa",
    icon: FaGlobeAmericas
  },
  {
    title: "Training Programs",
    description: "Enhance your skills with our specialized courses",
    buttonText: "Enroll Now",
    bgImage: "/dash3.webp",
    path: "/Training",
    icon: FaPlane
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
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleButtonClick = useCallback((path, event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(path);
  }, [navigate]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0 z-10' 
              : index === (currentSlide - 1 + slides.length) % slides.length 
                ? '-translate-x-full z-0' 
                : 'translate-x-full z-0'
          }`}
        >
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 bg-white bg-opacity-90">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-customBlue text-white p-6 rounded-lg shadow-lg"
              >
                <slide.icon className="text-5xl mb-4 mx-auto md:mx-0" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.description}</p>
                <button 
                  onClick={(e) => handleButtonClick(slide.path, e)}
                  className="bg-white text-customBlue px-6 py-2 rounded-full hover:bg-customYellow hover:text-white transition-colors duration-300"
                >
                  {slide.buttonText}
                </button>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-96 relative">
              <img 
                src={slide.bgImage} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-customBlue' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button onClick={prevSlide} className="bg-white bg-opacity-50 p-2 rounded-r-lg hover:bg-opacity-75 transition-opacity duration-300">
          <ChevronLeft size={24} className="text-customBlue" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button onClick={nextSlide} className="bg-white bg-opacity-50 p-2 rounded-l-lg hover:bg-opacity-75 transition-opacity duration-300">
          <ChevronRight size={24} className="text-customBlue" />
        </button>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {[
          { icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm', color: '#E1306C' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d', color: '#1877F2' },
          { icon: FaYoutube, url: 'http://www.youtube.com/@D2Global', color: '#FF0000' }
        ].map((social, index) => (
          <motion.button
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => handleSocialClick(social.url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-xl" style={{ color: social.color }} />
          </motion.button>
        ))}
      </div>

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
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default PassportServiceSlider;