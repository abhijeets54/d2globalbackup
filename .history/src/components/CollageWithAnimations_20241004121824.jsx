import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGlobeAmericas, FaPassport, FaPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 via-gray-100 to-white p-4 md:p-8">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-4xl text-customBlue opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaGlobeAmericas />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-4xl text-customYellow opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaPlane />
      </motion.div>

      {/* Main content container */}
      <div className="w-full max-w-7xl bg-white shadow-2xl rounded-lg p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between transition-all duration-500 hover:shadow-3xl relative overflow-hidden">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10 mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Best Immigration Services in Ludhiana
          </h1>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-500 mb-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: slideInDuration }}
          >
            {displayedText}
          </motion.h2>
          <button
            className="px-6 py-3 bg-customBlue text-customYellow rounded-full text-lg flex items-center justify-center mx-auto lg:mx-0 hover:bg-customYellow hover:text-customBlue transition-colors duration-300"
            onClick={() => navigate('/Contactpage')}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <motion.img
            src="/student.png"
            alt="Student with backpack"
            className="h-80 md:h-96 lg:h-[550px] object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating boxes */}
          <motion.div
            className="absolute -top-4 -left-4 py-3 px-6 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white text-base md:text-lg shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Your Gateway to the World
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -right-4 py-3 px-6 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white text-base md:text-lg shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            Professional Immigration Consultants
          </motion.div>
        </div>

        {/* Additional decorative element */}
        <motion.div
          className="absolute -bottom-16 -left-16 text-9xl text-customBlue opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <FaPassport />
        </motion.div>
      </div>
    </div>
  );
};

export default CollageWithAnimations;