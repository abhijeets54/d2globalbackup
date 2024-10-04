import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CollageWithAnimations = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Student Path', 'Work Path', 'PR Path', 'Tourist Path'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
          Immigration Pathways
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-4">
          <span className="text-red-500">
            {texts[textIndex].split(' ')[0]}
          </span>{' '}
          <span className="text-gray-500">
            {texts[textIndex].split(' ')[1]}
          </span>
        </h2>
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
          alt="Woman with suitcase"
          className="h-48 sm:h-64 md:h-72 lg:h-96"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Box at the top left near the image */}
        <motion.div
          className="absolute -top-6 left-2 lg:left-56 p-2 sm:p-4 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white text-sm sm:text-base"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Immigrate & Settle ➔
        </motion.div>

        {/* Box at the bottom right near the image */}
        <motion.div
          className="absolute bottom-6 right-4 lg:right-12 p-2 sm:p-4 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white text-sm sm:text-base"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          Foreign Immigration Lawyers
        </motion.div>
      </div>
    </div>
  );
};

export default CollageWithAnimations;
