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
    {
      image: '/student.webp',
      title: 'Student Visa',
      description: 'Your Gateway to Global Education',
      buttonText: 'Explore Opportunities',
      link: '/StudyAbroad'
    },
    {
      image: '/tourist.webp',
      title: 'Tourist Visa',
      description: 'Unlock Incredible Travel Experiences',
      buttonText: 'Plan Your Adventure',
      link: '/TouristVisa'
    },
    {
      image: '/ielts.webp',
      title: 'Language Coaching',
      description: 'Master English, Open Global Doors',
      buttonText: 'Boost Your Skills',
      link: '/Training'
    },
    {
      image: '/canadaa.webp',
      title: 'Permanent Residency',
      description: 'Your Path to a New Home Abroad',
      buttonText: 'Start Your Journey',
      link: '/PR'
    }
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
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {[
          { icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d' },
          { icon: FaYoutube, url: 'http://www.youtube.com/@D2Global' }
        ].map((social, index) => (
          <motion.button
            key={index}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-customBlue/80 hover:bg-customYellow text-white hover:text-customBlue transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => handleSocialClick(social.url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-2xl" />
          </motion.button>
        ))}
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex items-center z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-4 bg-white px-4 py-2 rounded-full shadow-md"
        >
          <p className="text-customBlue font-semibold text-sm md:text-base">Have any queries? Chat with us!</p>
        </motion.div>
        <motion.button
          className="w-14 h-14 flex items-center justify-center rounded-full bg-customBlue text-white hover:bg-customYellow hover:text-customBlue transition-all duration-300 shadow-md hover:shadow-lg"
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