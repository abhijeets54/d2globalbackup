import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie'; // Import Lottie
import planeAnimationData from '; // Import the plane.json file

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

  // Lottie animation options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: planeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-gradient-to-r from-gray-50 via-gray-100 to-white">
      {/* Lottie Animation */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-20">
        <Lottie options={lottieOptions} height={200} width={200} />
      </div>

      {/* Blurred Background */}
      <div className="blurred-bg bg-white"></div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
          Best Immigration Services in Ludhiana 
        </h1>
        <motion.h2
          className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-4 text-red-500"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: slideInDuration }}
        >
          {displayedText}
        </motion.h2>
        <button
          className="px-4 mx-auto py-2 md:px-6 md:py-3 bg-customBlue text-customYellow rounded-3xl text-sm md:text-lg flex items-center justify-center mt-6"
          onClick={() => navigate('/Contactpage')}
        >
          Contact Us
          <FaArrowRight className="ml-2 text-customYellow" />
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 z-10">
        <motion.img
          src="/student.png"
          alt="Student with backpack"
          className="h-48 sm:h-64 md:h-72 lg:h-96"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Box at the top left near the image */}
        <motion.div
          className="absolute -top-6 left-2 py-2 px-4 lg:left-56 p-2 sm:p-4 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white text-sm sm:text-base"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Your Gateway to the World 
        </motion.div>

        {/* Box at the bottom right near the image */}
        <motion.div
          className="absolute bottom-6 right-4 lg:right-20 py-2 px-4 sm:p-4 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white text-sm sm:text-base"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          Professional Immigration Consultants
        </motion.div>
      </div>
    </div>
  );
};

export default CollageWithAnimations;
