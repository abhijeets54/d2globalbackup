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

const collageSlides = [
  {
    title: "Global Immigration",
    description: "Get comprehensive immigration services worldwide.",
    buttonText: "Learn More",
    bgImage: "/collage/immigration1.webp", 
    path: "/StudyAbroad"
  },
  {
    title: "Visa Assistance",
    description: "We provide support for all types of visas.",
    buttonText: "Apply Now",
    bgImage: "/collage/visa1.webp", 
    path: "/AboutUs"
  },
  {
    title: "Work Permits",
    description: "Find opportunities to work abroad with our help.",
    buttonText: "Start Your Journey",
    bgImage: "/collage/workpermit1.webp", 
    path: "/PR"
  }
];

const Collage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const navigate = useNavigate();

  const changeSlide = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const nextSlide = newDirection === 'next'
        ? (prev + 1) % collageSlides.length
        : (prev - 1 + collageSlides.length) % collageSlides.length;
      return nextSlide;
    });
  }, []);

  const nextSlide = useCallback(() => changeSlide('next'), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide('prev'), [changeSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {collageSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0 z-10' 
              : index === (currentSlide - 1 + collageSlides.length) % collageSlides.length 
                ? '-translate-x-full z-0' 
                : 'translate-x-full z-0'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
         
          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 z-20">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-white text-lg md:text-xl mb-6">{slide.description}</p>
            <button className=''></button>
          </div>
        </div>
      ))}

      {/* Arrow Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30 pointer-events-auto">
        <button onClick={prevSlide} className="text-white hover:text-gray-300 focus:outline-none">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text-white hover:text-gray-300 focus:outline-none">
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Social Icons */}
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

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-2 z-30">
        {collageSlides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index ? 'bg-customBlue' : 'bg-gray-300'
            }`}
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

export default Collage;
