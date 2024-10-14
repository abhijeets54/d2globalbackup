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
    description: "Explore educational opportunities around the globe",
    buttonText: "Get Started",
    bgImage: "/dash1.webp",
    path: "/StudyAbroad"
  },
  {
    title: "Tourist Visa",
    description: "Plan your next adventure with ease",
    buttonText: "Plan Your Trip",
    bgImage: "/dash2.webp",
    path: "/TouristVisa"
  },
  {
    title: "Training Programs",
    description: "Enhance your skills with our specialized courses",
    buttonText: "Enroll Now",
    bgImage: "/dash3.webp",
    path: "/Training"
  }
];

const PassportServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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

  const handleButtonClick = useCallback((path, event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(path);
  }, [navigate]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={slide.bgImage} 
              alt={slide.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-white text-center p-4 bg-black bg-opacity-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-4">{slide.description}</p>
                <button 
                  onClick={(e) => handleButtonClick(slide.path, e)}
                  className="bg-customBlue text-white px-6 py-2 rounded-full hover:bg-customYellow transition-colors duration-300"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-customBlue' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 z-20"
      >
        <ChevronLeft size={24} className="text-customBlue" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 z-20"
      >
        <ChevronRight size={24} className="text-customBlue" />
      </button>

      {/* Social media buttons and WhatsApp button (unchanged) */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {[
          { icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm', color: '#E1306C' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d', color: '#1877F2' },
          { icon: FaYoutube, url: 'http://www.youtube.com/@D2Global', color: '#FF0000' }
        ].map((social, index) => (
          <motion.button
            key={index}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-customBlue/80 hover:bg-customYellow transition-all duration-300 shadow-md hover:shadow-lg"
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