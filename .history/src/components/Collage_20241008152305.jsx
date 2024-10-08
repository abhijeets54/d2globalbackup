import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CollageWithAnimations from './CollageWithAnimations';

function Collage() {
  const navigate = useNavigate();

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_whatsapp_number', '_blank');
  };

  const slideContent = [
    // ... (keep existing slide content)
  ];

  return (
    <div className="relative">
      {/* Existing carousel code */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* ... (keep the existing carousel code) ... */}
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
            className="w-12 h-12 flex items-center justify-center rounded-full bg-customBlue/80 hover:bg-customYellow text-white hover:text-customBlue transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => handleSocialClick(social.url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-xl" />
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
          <p className="text-customBlue font-semibold text-sm">Have any queries? Chat with us!</p>
        </motion.div>
        <motion.button
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-2xl" />
        </motion.button>
      </div>
    </div>
  );
}

export default Collage;