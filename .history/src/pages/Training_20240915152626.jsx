import React from 'react';
import { useState, useEffect } from 'react';
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
    <QuickEnquiry/>

    
      {/* Hero Section */}
      <motion.div
        className="text-center bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">IELTS, PTE & Spoken English Training</h1>
        <p className="text-lg">
          Master language proficiency and conquer communication barriers with our expert training programs.
        </p>
        <br />
      </motion.div>
        <QuickNumbers/>
  

      {/* IELTS Training Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">IELTS Training</h2>
        <p className=" mb-4">
          IELTS (International English Language Testing System) is a key exam for students, professionals, and migrants aiming to go to English-speaking countries.
          We provide expert guidance for both **Academic** and **General Training** modules, covering all four sections of the exam.
        </p>
        <ul className="list-disc list-inside ">
          <li>**Listening**: 30 minutes + 10 minutes to transfer answers.</li>
          <li>**Reading**: 60 minutes to answer questions based on passages.</li>
          <li>**Writing**: 60 minutes split into two tasks (report/letter and essay).</li>
          <li>**Speaking**: 11-14 minutes for an oral interview.</li>
        </ul>
        <p className=" mt-4">
          Our training ensures you excel in all sections with tailored practice sessions, mock tests, and individualized feedback.
        </p>
      </motion.div>

      {/* PTE Training Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold  mb-4">PTE Training</h2>
        <p className=" mb-4">
          The **Pearson Test of English (PTE)** is a computer-based test aimed at evaluating a candidate's English proficiency in writing, speaking, reading, and listening.
        </p>
        <ul className="list-disc list-inside ">
          <li>**Writing & Speaking**: 77-93 minutes, testing both written and spoken English.</li>
          <li>**Reading**: 32-41 minutes with fill-in-the-blanks, MCQs, and paragraph reordering.</li>
          <li>**Listening**: 45-57 minutes with audio and video clips.</li>
        </ul>
        <p className=" mt-4">
          With personalized training sessions and regular assessments, we ensure students are fully prepared to meet PTE standards.
        </p>
      </motion.div>

      {/* Spoken English Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold  mb-4">Spoken English Training</h2>
        <p className=" mb-4">
          **Spoken English** is an essential skill in today's globalized world. Our course focuses on improving fluency, pronunciation, and overall communication skills.
        </p>
        <ul className="list-disc list-inside ">
          <li>Regular mock tests and feedback sessions to monitor progress.</li>
          <li>Personalized learning plans based on individual proficiency levels.</li>
          <li>Practical sessions to build confidence and enhance communication skills.</li>
        </ul>
        <p className=" ">
          Whether you're preparing for international exams or simply improving your conversational skills, our training provides the necessary tools for success.
        </p>
      </motion.div>
      <OurAssociates/>
      <WhatPeopleAreSaying/>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <br />
        <h3 className="text-2xl font-bold ">Take the Next Step!</h3>
        <p className=" ">Enroll in D2 Global Immigration's training programs and unlock your future opportunities abroad.</p>
        <Register/>
      </motion.div>
     
   
    </>
  );
};

export default Training;
