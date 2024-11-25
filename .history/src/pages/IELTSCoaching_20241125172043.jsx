import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import WorldMapContact from '../components/ContactSystem';

const IELTSCoaching = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
    <div className='bg-white'>
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
              Achieve your dreams with our comprehensive IELTS coaching for both Academic and General Training modules.
            </p>
          </div>
          <img src="/ielts-hero.jpg" alt="IELTS Coaching" className="w-full md:w-1/3 h-auto" />
        </div>
      </motion.div>

      {/* Quick Numbers Section */}
      <QuickNumbers />

      {/* IELTS Introduction Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">What is IELTS?</h2>
        <p className="text-base sm:text-lg mb-4">
          The International English Language Testing System (IELTS) is a standardized test designed to assess the language proficiency of non-native English speakers. It is recognized globally by universities, employers, and immigration authorities.
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg">
          <li><strong>IELTS Academic:</strong> For students applying to universities or professional institutions.</li>
          <li><strong>IELTS General Training:</strong> For those migrating to English-speaking countries or applying for secondary education, training programs, or work experience.</li>
        </ul>
      </motion.div>

      {/* IELTS Exam Structure Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Exam Structure</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex-1">
            <p className="text-base sm:text-lg mb-4">
              The IELTS test evaluates your English language skills across four key areas:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg">
              <li><strong>Listening:</strong> 30 minutes with an additional 10 minutes to transfer answers.</li>
              <li><strong>Reading:</strong> 60 minutes, including 40 questions based on texts.</li>
              <li><strong>Writing:</strong> 60 minutes for two tasks (Academic: describe data and write an essay; General: write a letter and an essay).</li>
              <li><strong>Speaking:</strong> 11-14 minutes, consisting of a face-to-face interview with an examiner.</li>
            </ul>
          </div>
          <img
            src="/ielts.webp"
            alt="IELTS Exam Structure Diagram"
            className="w-full md:w-1/3 h-auto mt-6 md:mt-0 md:ml-8"
          />
        </div>
      </motion.div>

      {/* IELTS Scoring System Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Scoring System</h2>
        <p className="text-base sm:text-lg mb-4">
          IELTS scores are reported on a 9-band scale, with each band reflecting a specific competency level. You will receive individual band scores for each section, along with an overall band score.
        </p>
        <p className="text-base sm:text-lg">
          Our coaching helps you identify weak areas and improve your band scores with targeted practice and feedback.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white p-4 sm:p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Take the First Step Towards Your Future!</h3>
        <p className="text-lg sm:text-xl mb-6">
          Join our IELTS coaching program today and achieve your desired band score to unlock global opportunities.
        </p>
        <WorldMapContact />
      </motion.div>
      </div>
    </>
  );
};

export default IELTSCoaching;
