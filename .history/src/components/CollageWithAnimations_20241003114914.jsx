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
    <div className="relative w-full h-screen bg-white flex items-center justify-between px-4 md:px-8">
      <div className="w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Immigration Pathways
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mt-4">
          <span className="text-red-500">
            {texts[textIndex].split(' ')[0]}
          </span>{' '}
          <span className="text-gray-500">
            {texts[textIndex].split(' ')[1]}
          </span>
        </h2>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-full flex items-center">
          <span className="mr-2">📞</span> Get Callback
        </button>
      </div>

      {/* Student Image and Positioned Boxes */}
      <div className="relative w-1/2 -right-32 flex items-center">
        <motion.img
          src="/student.png" // replace with the actual image path
          alt="Woman with suitcase"
          className="h-72  md:h-96"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Box: Top-left of the image */}
        <motion.div
          className="absolute -top-12 -left-24 p-4 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Immigrate & Settle ➔
        </motion.div>

        {/* Box: Closer to the image */}
        <motion.div
          className="absolute bottom-10 right-80 p-4 bg-gradient-to-r from-customBlue to-customYellow rounded-lg text-white"
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
