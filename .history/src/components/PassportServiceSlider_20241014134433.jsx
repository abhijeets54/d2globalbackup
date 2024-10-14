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
    title: "Study Abroad with Confidence",
    description: "Let us guide you through your international education journey.",
    buttonText: "Get Started",
    bgImage: "/dash1.webp", 
    path: "/StudyAbroad"
  },
  {
    title: "Seamless Travel Solutions",
    description: "Experience hassle-free travel with our expert visa services.",
    buttonText: "Plan Your Trip",
    bgImage: "/dash2.webp", 
    path: "/TouristVisa"
  },
  {
    title: "Excel in IELTS",
    description: "Achieve your desired band score with our specialized training.",
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
            backgroundColor: 'white'
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <div className="text-customBlue font-bold text-2xl">D2 GLOBAL</div>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#" className="text-customBlue hover:text-customYellow">Home</a></li>
                  <li><a href="#" className="text-customBlue hover:text-customYellow">Services</a></li>
                  <li><a href="#" className="text-customBlue hover:text-customYellow">About Us</a></li>
                  <li><a href="#" className="text-customBlue hover:text-customYellow">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-1/2 text-black self-start mt-20">
              <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">{slide.title}</h1>
              <p className="text-lg mb-6 animate-fadeInUp animation-delay-200">{slide.description}</p>
              <button 
                onClick={(e) => handleButtonClick(slide.path, e)}
                className="bg-customBlue text-white px-6 py-2 rounded-full hover:bg-customYellow animate-fadeInUp animation-delay-400"
              >
                {slide.buttonText}
              </button>
            </div>

            {/* Footer */}
            <div className="w-full flex justify-between items-end">
              <div className="text-customBlue">
                <h3 className="font-semibold text-xl mb-2">Our Services</h3>
                <ul className="space-y-2">
                  <li><FaGlobeAmericas className="inline-block mr-2" /> Study Abroad</li>
                  <li><FaPassport className="inline-block mr-2" /> Visa Services</li>
                  <li><FaPlane className="inline-block mr-2" /> Travel Assistance</li>
                  <li><FaGraduationCap className="inline-block mr-2" /> IELTS Training</li>
                </ul>
              </div>
              <div className="text-customBlue text-right">
                <h3 className="font-semibold text-xl mb-2">Contact Us</h3>
                <p>123 Global Street, City, Country</p>
                <p>Phone: +1 234 567 8900</p>
                <p>Email: info@d2global.com</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
        <button onClick={prevSlide} className="text-black hover:text-gray-200 focus:outline-none pointer-events-auto">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="text-black hover:text-gray-200 focus:outline-none pointer-events-auto">
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Social Media Icons */}
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

export default PassportServiceSlider;