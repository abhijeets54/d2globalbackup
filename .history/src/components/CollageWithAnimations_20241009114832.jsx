import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGlobeAmericas, FaPassport, FaPlane, FaGraduationCap, FaHouseUser, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const handleSocialClick = (url) => {
  window.open(url, '_blank');
};

const handleWhatsAppClick = () => {
  window.open('https://wa.me/8427670455', '_blank');
};

const CollageWithAnimations = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Study Visa', 'Permanent Residency', 'Visitor Visa', 'Tourist Visa', 'IELTS Coaching', 'PTE Coaching'];
  const slideInDuration = 0.5;

  useEffect(() => {
    const changeText = () => {
      setDisplayedText(texts[textIndex]);
    };
    changeText();
  }, [textIndex]);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(textChangeInterval);
  }, []);

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center bg-gradient-to-br from-customYellow/50 via-customYellow/30 to-white p-4 md:p-8">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-4xl text-customBlue opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaGlobeAmericas />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-4xl text-customBlue opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaPlane />
      </motion.div>

      {/* Main content container */}
      <div className="w-full bg-customBlue shadow-2xl h-[400px] rounded-lg p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between transition-all duration-500 hover:shadow-3xl relative overflow-hidden">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10 mb-6 lg:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-customYellow mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            D2 Global
          </motion.h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-customYellow mb-4">
            Best Immigration Center in Ludhiana
          </h2>
         
          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: slideInDuration }}
          >
            {displayedText}
          </motion.h3>
          <motion.button
            className="px-6 py-3 bg-customYellow text-customBlue rounded-full text-base font-bold flex items-center justify-center mx-auto lg:mx-0 hover:bg-white hover:text-customBlue transition-colors duration-300"
            onClick={() => navigate('/Contactpage')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <motion.img
            src="/tower2.png"
            alt="Student with backpack"
            className="h-72 md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating boxes */}
          <motion.div
            className="absolute -top-3 -left-4 py-2 px-4 bg-customYellow text-customBlue rounded-lg text-sm md:text-base shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaGraduationCap className="inline-block mr-1" />
            Your Gateway to the World
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -right-3 py-2 px-4 bg-customYellow text-customBlue rounded-lg text-sm md:text-base shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <FaHouseUser className="inline-block mr-1" />
            Professional Consultants
          </motion.div>
        </div>

        {/* Additional decorative element */}
        <motion.div
          className="absolute -bottom-12 -left-12 text-8xl text-white opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <FaPassport />
        </motion.div>
      </div>

      {/* Social and WhatsApp buttons */}
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

export default CollageWithAnimations;
