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

const IELTSCoaching = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const benefitsList = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Vocabulary Sessions",
      details: [
        "Thematic Vocabulary to enhance linguistic range",
        "Fun and engaging vocabulary activities",
        "Specific vocabulary for 7+ band in writing and speaking",
        "Daily vocabulary revision"
      ]
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Free IELTS Workshops",
      details: [
        "Expert trainers every week",
        "Comprehensive module coverage",
        "Techniques to score 9 band",
        "Detailed module insights"
      ]
    },
    {
      icon: <Calendar className="w-10 h-10 text-purple-600" />,
      title: "Mock Test & Analysis",
      details: [
        "Mock test every Saturday",
        "Detailed results and mistake analysis",
        "Performance tracking",
        "Exam simulation experience"
      ]
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-600" />,
      title: "Additional Support",
      details: [
        "Free IELTS Simulation Test",
        "Free Visa Counseling",
        "Monthly Personality Development Sessions",
        "Weekly Performance Report Card"
      ]
    }
  ];

  return (
    <>
      <div className='bg-white pt-16'>
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
                IELTS Coaching: Your Global Communication Gateway
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive training to unlock international education and career opportunities through proven IELTS preparation strategies.
              </p>
              <div className="flex space-x-4">
              </div>
            </div>
            <img 
              src="/ieltsc.webp" 
              alt="IELTS Coaching" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Quick Numbers Section */}
        <QuickNumbers />

        {/* Test Purpose Section */}
        <motion.div
          className="container mx-auto bg-white shadow-lg rounded-lg p-8 mb-8 text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">IELTS Test Purposes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">IELTS Academic</h3>
                  <p className="text-gray-700">
                    Designed to help you secure university acceptance, student visas, and prove your English proficiency to professional organizations. Ideal for measuring workplace English skills when applying to international companies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">IELTS General Training</h3>
                  <p className="text-gray-700">
                    Focuses on practical, everyday English skills. Perfect for individuals planning to work, live, or study in English-speaking countries. Tasks and tests reflect real-world workplace and social situations.
                  </p>
                </div>
              </div>
            </div>
            <img 
              src="/ielts/ielts.webp" 
              alt="IELTS Exam Structure" 
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </motion.div>
        <div class="bg-customBlue pt-16">
  <div class="container mx-auto text-left px-4 sm:px-8 py-8">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold text-customYellow mb-6">Our Key Features</h2>
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center mb-4">
          <i class="fas fa-chalkboard-teacher text-cus text-3xl mr-4"></i>
          <h3 class="text-lg font-semibold">Experienced and Certified Trainers</h3>
        </div>
        <p class="text-gray-700">
          We have experienced and certified trainers who are well-versed in the exam format, scoring system, and strategies to improve your score.
        </p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center mb-4">
          <i class="fas fa-book-reader text-blue-600 text-3xl mr-4"></i>
          <h3 class="text-lg font-semibold">Comprehensive Study Material</h3>
        </div>
        <p class="text-gray-700">
          We provide you with comprehensive study material, including practice tests, mock exams, and other resources to help you prepare for the exam.
        </p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center mb-4">
          <i class="fas fa-user-tie text-blue-600 text-3xl mr-4"></i>
          <h3 class="text-lg font-semibold">Personalized Coaching</h3>
        </div>
        <p class="text-gray-700">
          We provide personalized coaching to each student based on their strengths and weaknesses, and tailor the coaching program accordingly.
        </p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center mb-4">
          <i class="fas fa-users text-blue-600 text-3xl mr-4"></i>
          <h3 class="text-lg font-semibold">Small Batch Size</h3>
        </div>
        <p class="text-gray-700">
          We have a small batch size to ensure that each student receives individual attention and personalized coaching.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Benefits Grid */}
        <div className="container mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Training Benefits</h2>
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
        <div className="container mx-auto bg-white ">
          <motion.div
            className="bg-blue-50 rounded-xl p-8 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-6">Take Your First Step Towards Success</h3>
            <p className="text-xl text-gray-700 mb-8">
              Connect with our experts and start your IELTS preparation journey today!
            </p>
            <WorldMapContact />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IELTSCoaching;