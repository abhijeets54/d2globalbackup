import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, GraduationCap, Book, Globe, } from 'lucide-react';
import { FaArrowRight, FaGlobeAmericas, FaPassport, FaPlane, FaGraduationCap, FaHouseUser, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';


const FloatingIcon = ({ Icon, left, top }) => (
  <motion.div
    className="absolute z-50 text-customBlue"
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Icon size={40} />
  </motion.div>
);

const handleSocialClick = (url) => {
  window.open(url, '_blank');
};

const handleWhatsAppClick = () => {
  window.open('https://wa.me/8427670455', '_blank');
};

const slides = [
  {
    title: "",
    description: "",
    buttonText: "Get Started",
    bgImage: "/dash1.webp", 
    path: "/StudyAbroad"
  },
  {
    title: "",
    description: "",
    buttonText: "Plan Your Trip",
    bgImage: "/dash2.webp", 
    path: "/TouristVisa"
  },
  {
    title: "",
    description: "",
    buttonText: "Enroll Now",
    bgImage: "/dash3.webp", 
    path: "/Training"
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
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-no-repeat transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0 z-10' 
              : index === (currentSlide - 1 + slides.length) % slides.length 
                ? '-translate-x-full z-0' 
                : 'translate-x-full z-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'contain',
            backgroundColor: 'white'  // Add customBlue background color here
          }}
        >
          <div className="absolute inset-0 flex flex-col items-left -top-40 justify-center p-8">
            <div className="w-full md:w-1/2 text-black">
              <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">{slide.title}</h1>
              <p className="text-lg mb-6 animate-fadeInUp animation-delay-200">{slide.description}</p>
              {/* <button 
                onClick={(e) => handleButtonClick(slide.path, e)}
                className="bg-customBlue text-white px-6 py-2 rounded-full hover:bg-customYellow animate-fadeInUp animation-delay-400"
              >
                {slide.buttonText}
              </button> */}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
        <button onClick={prevSlide} className="text-black hover:text-gray-200 focus:outline-none pointer-events-auto">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text- hover:text-gray-200 focus:outline-none pointer-events-auto">
          <ChevronRight size={48} />
        </button>
      </div>
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
      <FloatingIcon Icon={GraduationCap} left={85} top={15} />
      <FloatingIcon Icon={Book} left={15} top={80} />
      <FloatingIcon Icon={Globe} left={90} top={75} />

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
