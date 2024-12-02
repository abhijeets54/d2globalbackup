import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuickNumbers from '../components/QuickNumbers';
import WorldMapContact from '../components/ContactSystem';
import { 
  BookOpen, 
  Globe, 
  Target, 
  BookmarkCheck, 
  BookText, 
  Award, 
  Calendar, 
  Lightbulb 
} from 'lucide-react';

const PTECoaching = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const benefitsList = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Comprehensive Skill Development",
      details: [
        "Targeted practice for Speaking & Writing",
        "Advanced Reading comprehension strategies",
        "Listening skill enhancement techniques",
        "Full-spectrum English proficiency training"
      ]
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Exam Preparation Workshops",
      details: [
        "Expert-led exam strategy sessions",
        "Detailed breakdown of exam sections",
        "Techniques for maximum score optimization",
        "Personalized performance feedback"
      ]
    },
    {
      icon: <Calendar className="w-10 h-10 text-purple-600" />,
      title: "Mock Tests & Analysis",
      details: [
        "Regular full-length practice tests",
        "Comprehensive performance analysis",
        "Detailed error tracking",
        "Real exam environment simulation"
      ]
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-600" />,
      title: "Additional Support",
      details: [
        "Personal coaching sessions",
        "Vocabulary and grammar workshops",
        "Pronunciation and fluency training",
        "Confidence-building communication exercises"
      ]
    }
  ];

  return (
    <>
      <div className='bg-gray-50 pt-16'>
        {/* Hero Section with Image */}
        <motion.div
          className="container mx-auto text-left px-4 sm:px-8 py-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                PTE Coaching: Your Gateway to Global Communication
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Expert coaching for the Pearson Test of English (PTE), designed to help you achieve your academic and migration goals.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Start Your PTE Journey
                </button>
              </div>
            </div>
            <img 
              src="/ptec.webp" 
              alt="PTE Coaching" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Quick Numbers Section */}
        <QuickNumbers />

        {/* PTE Purpose Section */}
        <motion.div
          className="container mx-auto bg-white shadow-lg rounded-lg p-8 mb-8 text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">PTE Test Variants</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">PTE Academic</h3>
                  <p className="text-gray-700">
                    Comprehensive test designed for students and migrants seeking to demonstrate English proficiency for international education and professional opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Additional PTE Variants</h3>
                  <p className="text-gray-700">
                    Including PTE Core for Canadian PR applications and PTE Academic UKVI for UK visa processes. Tailored to meet specific immigration and educational requirements.
                  </p>
                </div>
              </div>
            </div>
            <img 
              src="/pte/pte.png" 
              alt="PTE Exam Structure" 
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </motion.div>

        {/* Scoring & Structure Section */}
        <motion.div
          className="container mx-auto bg-blue-50 rounded-lg p-8 mb-8 text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Scoring System</h2>
              <p className="text-gray-700 mb-4">
                PTE uses a comprehensive scoring model ranging from 10 to 90 points, evaluating:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Communicative Skills</li>
                <li>✓ Listening Comprehension</li>
                <li>✓ Reading Proficiency</li>
                <li>✓ Speaking Clarity</li>
                <li>✓ Writing Accuracy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Exam Structure</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Speaking & Writing:</strong> 54-67 minutes</li>
                <li><strong>Reading:</strong> 29-30 minutes</li>
                <li><strong>Listening:</strong> 30-43 minutes</li>
                <li>Computer-based test with diverse task types</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="container mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive PTE Training Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsList.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold ml-4">{benefit.title}</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <BookmarkCheck className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto ">
          <motion.div
            className="bg-blue-50 rounded-xl p-8 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-6">Begin Your PTE Success Journey</h3>
            <p className="text-xl text-gray-700 mb-8">
              Connect with our experts and unlock your global communication potential!
            </p>
            <WorldMapContact />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PTECoaching;