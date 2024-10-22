import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Collage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/api/placeholder/800/600',
      title: 'Sample 1',
      description: 'Description for Sample 1',
    },
    {
      image: '/api/placeholder/800/600',
      title: 'Sample 2',
      description: 'Description for Sample 2',
    },
    {
      image: '/api/placeholder/800/600',
      title: 'Sample 3',
      description: 'Description for Sample 3',
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

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Slideshow */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full relative overflow-hidden">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-lg mb-6">{slides[currentSlide].description}</p>
            <motion.button
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <FaArrowRight className="inline-block ml-2" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40">
        {[
          { icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d' },
          { icon: FaYoutube, url: 'http://www.youtube.com/@D2Global' }
        ].map((social, index) => (
          <motion.button
            key={index}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-yellow-400 text-white hover:text-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => handleSocialClick(social.url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-lg md:text-xl" />
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
          <p className="text-blue-500 font-semibold text-sm">Have any queries? Chat with us!</p>
        </motion.div>
        <motion.button
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default Collage;