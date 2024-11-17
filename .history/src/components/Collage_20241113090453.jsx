import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Collage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/dashboard/svisa2.webp',
      title: 'Best Study Visa services in Ludhiana',
      description: 'Explore opportunities for studying abroad with our comprehensive visa services.',
      link: '/StudyAbroad'
    },
    {
      image: '/dashboard/tvisa3.webp',
      title: 'Tourist Visa',
      description: 'Plan your perfect vacation with hassle-free tourist visa assistance.',
      link: '/TouristVisa'
    },
    {
      image: '/dashboard/idash.webp',
      title: 'Language Coaching',
      description: 'Enhance your language skills with our expert coaching programs.',
      link: '/Training'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_whatsapp_number', '_blank');
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full min-h-[500px] md:h-[700px] mx-auto overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex"
        >
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-left bg-black bg-opacity-50 flex items-start justify-start px-6 md:px-12 lg:px-32 py-16 md:py-40">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">{slides[currentSlide].title}</h2>
                <p className="text-lg md:text-xl mb-6 text-white">{slides[currentSlide].description}</p>
                {/* Updated Learn More Button */}
                <StyledWrapper>
                  <button className="learn-more" onClick={() => window.location.href = slides[currentSlide].link}>
                    <span aria-hidden="true" className="circle">
                      <span className="icon arrow" />
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </StyledWrapper>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors duration-300"
      >
        <FaChevronLeft className="text-lg md:text-2xl text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors duration-300"
      >
        <FaChevronRight className="text-lg md:text-2xl text-gray-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentSlide === index ? 'bg-customBlue' : 'bg-gray-300'
            } transition-colors duration-300`}
          />
        ))}
      </div>

      {/* Social Icons */}
      <div className="fixed right-2 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {[ 
          { icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm', color: '#E1306C' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d', color: '#1877F2' },
          { icon: FaYoutube, url: 'http://www.youtube.com/@D2Global', color: '#FF0000' }
        ].map((social, index) => (
          <motion.button
            key={index}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-customBlue/80 hover:bg-customYellow transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => handleSocialClick(social.url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-lg md:text-xl" style={{ color: social.color }} />
          </motion.button>
        ))}
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-4 right-4 flex items-center z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-2 bg-white px-3 py-2 rounded-full shadow-md hidden md:block"
        >
          <p className="text-customBlue font-semibold text-xs md:text-sm">Chat with us!</p>
        </motion.div>
        <motion.button
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-lg md:text-2xl" />
        </motion.button>
      </div>
    </div>
  );
};

// Styled components for the button
const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: customBlue;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    box-shadow: 0 0 5px 1px white;
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: 2829#36;
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: rgba(255, 255, 255, 0.493);
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
    box-shadow: 0 0 10px 2px white;
  }

  button:hover .button-text {
    transform: translate(-1.7rem, 0);
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(8.7rem, 0);
  }

  button:active .circle .icon.arrow {
    transform: translate(9.5rem, 0);
    transition: all 0.3s;
  }

  button:active .circle {
    transform: scale(0.9);
    transition: all 0.3s;
    box-shadow: 0 0 5px 0.5px white;
  }

  button:hover .button-text {
    color: #fff;
  }

  button:active .button-text {
    color: rgba(255, 255, 255, 0.459);
  }
`;

export default Collage;
