import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CollageWithAnimations = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Study Visa', 'Permanent Residency', 'Visitor Visa', 'Tourist Visa', 'IELTS Coaching', 'PTE Coaching'];
  const slideInDuration = 0.5; // Duration for slide-in animation

  useEffect(() => {
    // Set the displayed text with a small delay for the sliding effect
    const changeText = () => {
      setDisplayedText(texts[textIndex]);
    };

    changeText(); // Change text to the current index
  }, [textIndex]); // Re-run when the textIndex changes

  useEffect(() => {
    // Change the text index after a certain time
    const textChangeInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Adjust time for how long each text is displayed

    return () => clearInterval(textChangeInterval); // Cleanup interval
  }, []); // Run once on mount

  return (
    <div className="relative w-full h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
          D2 Global Immigration Services
        </h1>
        <motion.h2
          className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-4 text-red-500"
          initial={{ x: -50, opacity: 0 }} // Initial position
          animate={{ x: 0, opacity: 1 }} // Slide in position
          exit={{ x: -50, opacity: 0 }} // Slide out position
          transition={{ duration: slideInDuration }} // Transition duration
        >
          {displayedText}
        </motion.h2>
        <button
          className="mt-6 bg-customBlue text-customYellow px-6 py-2 rounded-full flex items-center mx-auto lg:mx-0"
          onClick={() => navigate('/Contactpage')}
        >
          Contact us
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <motion.img
          src="/student.png" // replace with the actual image path
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
