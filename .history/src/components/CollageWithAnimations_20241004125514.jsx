import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGlobeAmericas, FaPassport, FaPlane, FaGraduationCap, FaHouseUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CollageWithAnimations = () => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Study Visa', 'Permanent Residency', 'Visitor Visa', 'Tourist Visa', 'IELTS Coaching', 'PTE Coaching'];
  const slideInDuration = 0.5;

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(textChangeInterval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8 overflow-hidden">
      {/* Background decorative elements */}
      <BackgroundElements />

      {/* Main content container */}
      <motion.div 
        className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Section */}
        <TextSection texts={texts} textIndex={textIndex} slideInDuration={slideInDuration} navigate={navigate} />

        {/* Image Section */}
        <ImageSection />
      </motion.div>
    </div>
  );
};

const BackgroundElements = () => (
  <>
    <motion.div
      className="absolute top-10 left-10 text-7xl text-blue-500 opacity-10"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <FaGlobeAmericas />
    </motion.div>
    <motion.div
      className="absolute bottom-10 right-10 text-7xl text-blue-500 opacity-10"
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaPlane />
    </motion.div>
    <motion.div
      className="absolute -bottom-20 -left-20 text-[200px] text-blue-300 opacity-5"
      animate={{ rotate: -360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <FaPassport />
    </motion.div>
  </>
);

const TextSection = ({ texts, textIndex, slideInDuration, navigate }) => (
  <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10 mb-12 lg:mb-0">
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      D2 Global
    </motion.h1>
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
      Best Immigration Services in Ludhiana
    </h2>
    <p className="text-lg text-gray-600 mb-4">
      Your Trusted Partner for Global Opportunities
    </p>
    <p className="text-lg text-gray-600 mb-8">
      Providing Expert Guidance for Your Immigration Journey
    </p>
    <AnimatePresence mode="wait">
      <motion.h3
        key={textIndex}
        className="text-2xl md:text-3xl font-semibold text-blue-500 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: slideInDuration }}
      >
        {texts[textIndex]}
      </motion.h3>
    </AnimatePresence>
    <motion.button
      className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-bold flex items-center justify-center mx-auto lg:mx-0 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
      onClick={() => navigate('/Contactpage')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
      <FaArrowRight className="ml-2" />
    </motion.button>
  </div>
);

const ImageSection = () => (
  <div className="relative w-full lg:w-1/2 flex justify-center items-center">
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/student.png"
        alt="Student with backpack"
        className="h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-xl"
      />
      <FloatingBox
        className="absolute -top-4 -left-4"
        icon={<FaGraduationCap className="inline-block mr-2" />}
        text="Your Gateway to the World"
      />
      <FloatingBox
        className="absolute -bottom-4 -right-4"
        icon={<FaHouseUser className="inline-block mr-2" />}
        text="Professional Immigration Consultants"
        delay={1}
      />
    </motion.div>
  </div>
);

const FloatingBox = ({ className, icon, text, delay = 0 }) => (
  <motion.div
    className={`py-3 px-6 bg-white text-blue-600 rounded-lg text-sm md:text-base shadow-lg ${className}`}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {icon}
    {text}
  </motion.div>
);

export default CollageWithAnimations;