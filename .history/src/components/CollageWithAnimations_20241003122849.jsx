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
          className="h-48 sm:h-64 md:h-72 lg:h-96 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Top-left box - closer to the image */}
        <motion.div
          className="absolute"
          style={{ top: '10%', left: '-5%', padding: '10px', background: 'linear-gradient(to right, #1D4ED8, #F59E0B)', borderRadius: '10px', color: 'white', fontSize: '14px', zIndex: 5 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Immigrate & Settle ➔
        </motion.div>

        {/* Bottom-right box - closer to the image */}
        <motion.div
          className="absolute"
          style={{ bottom: '5%', left: '55%', padding: '10px', background: 'linear-gradient(to right, #1D4ED8, #F59E0B)', borderRadius: '10px', color: 'white', fontSize: '14px', zIndex: 5 }}
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
