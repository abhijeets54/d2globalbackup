import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Register from '../components/Register';
import WorldMapContact from '../components/ContactSystem';
const PTECoaching = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <QuickEnquiry />

      {/* Hero Section with Image */}
      <motion.div
        className="text-left bg-white px-4 sm:px-8 py-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mr-0 md:mr-8 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">PTE Coaching</h1>
            <p className="text-lg sm:text-xl">
              Ace the Pearson Test of English (PTE) with our comprehensive training and personalized approach.
            </p>
          </div>
          <img src="/ptec.webp" alt="PTE Coaching" className="w-full md:w-1/3 h-auto" />
        </div>
      </motion.div>

      <QuickNumbers />

      {/* PTE Training Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">PTE Coaching</h2>
        <p className="text-base sm:text-lg mb-4">
          The Pearson Test of English (PTE) is a computer-based test that assesses writing, speaking, reading, and listening skills.
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg">
          <li><strong>Writing & Speaking</strong>: 77-93 minutes covering both writing and speaking.</li>
          <li><strong>Reading</strong>: 32-41 minutes of fill-in-the-blanks, MCQs, and paragraph reordering.</li>
          <li><strong>Listening</strong>: 45-57 minutes with audio and video-based tests.</li>
        </ul>
        <p className="text-base sm:text-lg mt-4">
          Our personalized coaching ensures students are well-prepared with mock tests and performance feedback.
        </p>
      </motion.div>

      <OurAssociates />
      {/* <WhatPeopleAreSaying /> */}

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white p-4 sm:p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Start Your PTE Journey Today!</h3>
        <p className="text-lg sm:text-xl mb-6">
          Join our PTE coaching program to excel in your exam and achieve your global goals.
        </p>
        {/* <Register /> */}
        
      </motion.div>
    </>
  );
};

export default PTECoaching;
