import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import QuickNumbers from '../components/QuickNumbers';
import Choose from '../components/Choose';
import OurAssociates from '../components/OurAssociates';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';


const Training = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <QuickEnquiry />

      {/* Hero Section with Image */}
      <motion.div
        className="text-left bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center">
          <img src="/ielts" alt="Training Banner" className="w-1/2 h-auto mr-8" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">IELTS, PTE & Spoken English Training</h1>
            <p className="text-xl">
              Master language proficiency and overcome communication barriers with our expert training programs.
            </p>
          </div>
        </div>
        <br />
      </motion.div>

      <QuickNumbers />

      {/* IELTS Training Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">IELTS Training</h2>
        <p className="text-lg mb-4">
          IELTS (International English Language Testing System) is essential for students, professionals, and migrants seeking to go to English-speaking countries.
          We provide tailored training for both the **Academic** and **General Training** modules, focusing on all four sections of the exam.
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>**Listening**: 30 minutes + 10 minutes to transfer answers.</li>
          <li>**Reading**: 60 minutes for passage-based questions.</li>
          <li>**Writing**: 60 minutes, split into two tasks (report/letter and essay).</li>
          <li>**Speaking**: 11-14 minutes for an oral interview.</li>
        </ul>
        <p className="text-lg mt-4">
          Our training helps you succeed in each section with dedicated practice sessions, mock tests, and individualized feedback.
        </p>
      </motion.div>

      {/* PTE Training Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">PTE Training</h2>
        <p className="text-lg mb-4">
          The **Pearson Test of English (PTE)** is a computer-based test assessing writing, speaking, reading, and listening skills.
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>**Writing & Speaking**: 77-93 minutes covering both writing and speaking.</li>
          <li>**Reading**: 32-41 minutes of fill-in-the-blanks, MCQs, and paragraph reordering.</li>
          <li>**Listening**: 45-57 minutes with audio and video-based tests.</li>
        </ul>
        <p className="text-lg mt-4">
          Our personalized training and assessments ensure that students are well-prepared for the PTE exam.
        </p>
      </motion.div>

      {/* Spoken English Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Spoken English Training</h2>
        <p className="text-lg mb-4">
          **Spoken English** is a critical skill in today's interconnected world. Our course focuses on enhancing fluency, pronunciation, and communication skills.
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Regular mock tests and personalized feedback sessions.</li>
          <li>Customized learning plans based on individual proficiency.</li>
          <li>Practical sessions to build confidence and enhance communication skills.</li>
        </ul>
        <p className="text-lg">
          Whether preparing for international exams or improving conversational skills, our training equips you for success.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="bg-blue-900 text-white p-8 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Why Choose Us for Training?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Proven track record of success with thousands of students.",
            "Expert instructors with extensive experience in language training.",
            "Tailored study plans to address individual weaknesses.",
            "Affordable, high-quality training designed to maximize your results.",
            "Comprehensive learning resources and mock exams.",
            "Registered member of recognized organizations like IDP Australia."
          ].map((point, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-blue-900 rounded shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <p className="text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <OurAssociates />
      <WhatPeopleAreSaying />

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4">Take the Next Step!</h3>
        <p className="text-xl mb-6">
          Enroll in D2 Global Immigration's training programs and unlock your future opportunities abroad.
        </p>
        <Register />
      </motion.div>
    </>
  );
};

export default Training;
