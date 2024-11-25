import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import WorldMapContact from '../components/ContactSystem';

const PTECoaching = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
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
              Achieve your goals with our expert coaching for the Pearson Test of English (PTE), a computer-based English proficiency test for non-native speakers.
            </p>
          </div>
          <img src="/ptec.webp" alt="PTE Coaching" className="w-full md:w-1/3 h-auto" />
        </div>
      </motion.div>

      {/* Quick Numbers Section */}
      <QuickNumbers />

      {/* PTE Introduction Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">What is PTE?</h2>
        <p className="text-base sm:text-lg mb-4">
          The Pearson Test of English (PTE) assesses the English language skills of non-native speakers aiming to study or migrate to English-speaking countries.
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg">
          <li><strong>PTE Academic:</strong> Designed for students and migrants.</li>
          <li><strong>PTE Core:</strong> A simpler version for Canadian PR applications.</li>
          <li><strong>PTE Academic UKVI:</strong> Approved for UK visa applications.</li>
        </ul>
      </motion.div>

      {/* PTE Scoring System */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Scoring System</h2>
        <p className="text-base sm:text-lg mb-4">
          Scores range from 10 to 90 points, based on communicative (listening, reading, speaking, writing) and enabling skills. Tasks are scored for accuracy, fluency, and pronunciation.
        </p>
      </motion.div>

      {/* PTE Exam Structure */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-8 text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Exam Structure</h2>
        <p className="text-base sm:text-lg mb-4">
          The PTE exam is divided into three sections:
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg">
          <li><strong>Speaking & Writing (54-67 mins):</strong> Includes personal introduction, read aloud, repeat sentence, describe image, retell lecture, and essay writing.</li>
          <li><strong>Reading (29-30 mins):</strong> Tests comprehension through multiple choice, reordering paragraphs, and fill-in-the-blanks.</li>
          <li><strong>Listening (30-43 mins):</strong> Involves summarizing spoken text, highlighting incorrect words, and more.</li>
        </ul>
        <div className="mt-6">
          <img src="/pte/pte.png" alt="PTE Exam Structure Diagram" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white p-4 sm:p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Start Your PTE Journey Today!</h3>
        <p className="text-lg sm:text-xl mb-6">
          Join our program and achieve success in the PTE exam.
        </p>
        <WorldMapContact />
      </motion.div>
    </>
  );
};

export default PTECoaching;
