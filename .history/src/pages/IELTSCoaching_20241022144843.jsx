import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Register from '../components/Register';

const IELTSCoaching = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* <QuickEnquiry /> */}

      {/* Hero Section with Image */}
      <motion.div
        className="text-left bg-white px-4 sm:px-8 py-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mr-0 md:mr-8 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">IELTS Coaching</h1>
            <p className="text-lg sm:text-xl">
              Master the IELTS exam with our tailored coaching for both the Academic and General Training modules.
            </p>
          </div>
          <img src="/ieltsc.webp" alt="IELTS Coaching" className="w-full md:w-1/3 h-auto" />
        </div>
      </motion.div>

      <QuickNumbers />

      {/* IELTS Training Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">IELTS Coaching</h2>
        <p className="text-base sm:text-lg mb-4">
          IELTS (International English Language Testing System) is essential for students, professionals, and migrants seeking to go to English-speaking countries.
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg">
          <li><strong>Listening</strong>: 30 minutes + 10 minutes to transfer answers.</li>
          <li><strong>Reading</strong>: 60 minutes for passage-based questions.</li>
          <li><strong>Writing</strong>: 60 minutes, split into two tasks (report/letter and essay).</li>
          <li><strong>Speaking</strong>: 11-14 minutes for an oral interview.</li>
        </ul>
        <p className="text-base sm:text-lg mt-4">
          Our training provides dedicated practice sessions, mock tests, and personalized feedback to ensure success.
        </p>
      </motion.div>

      <OurAssociates />
      <WhatPeopleAreSaying />

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white p-4 sm:p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Excel in IELTS?</h3>
        <p className="text-lg sm:text-xl mb-6">
          Enroll in our IELTS coaching program and open doors to your future abroad.
        </p>
        <Register />
      </motion.div>
    </>
  );
};

export default IELTSCoaching;
