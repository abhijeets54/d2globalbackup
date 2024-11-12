import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import OurAssociates from '../components/OurAssociates';
import WorldMapContact from '../components/ContactSystem';

const points = [
  { title: 'Globally Acclaimed Institutes', description: 'Canadian universities and colleges are renowned for their advanced pedagogical methods & enhanced learning experiences.' },
  { title: 'Post Study Work Options', description: 'The country offers work opportunities to students for up to 3 years after graduation, helping them gain international work experience.' },
  { title: 'Affordable Tuition Fee and Living Cost', description: 'The average course fee and expenses one incurs for living in Canada are less compared to other study abroad destinations.' },
  { title: 'Ample Work Opportunities', description: 'The growth of industries in Canada creates a constant increase in the demand for skilled professionals from across borders.' },
  { title: 'Enriching Multicultural Environment', description: 'With a diverse population, Canada offers a rich and vibrant cultural environment, promoting inclusivity and respect in the community.' },
  { title: 'Excellent Quality of Life', description: 'Students studying in Canada enjoy a high quality of life with advanced healthcare facilities, multiple job options, safety and security.' },
];

// Variants for staggered fade-in effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const StudyCan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: 'Canada',
  });
  
  const [responseMessage, setResponseMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  
  const form = useRef();

  const handleMapClick = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3x7bjfj', 'template_530xg64', form.current, {
      publicKey: 'I7UB0PZBIaKgzxane',
    }).then(() => {
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', phone: '', country: 'Canada', message: '' });
    }, (error) => {
      setResponseMessage('Error submitting form. Please try again.');
      console.log('Failed...', error.text);
    });
  };

  return ( 
    <>
      <div className="study-can-container bg-white pt-16">
        {/* Top section */}
        <div className="bg-white p-6 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Left text section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6">
              <img src="/cflag.svg" alt="Canada Flag" className="w-6 lg:w-8 h-6 lg:h-8 mr-2" /> 
              Study in Canada
            </h1>
            <p className="mb-4 lg:mb-6 text-left text-base lg:text-lg">
              Learn everything about universities, costs, scholarships, admission process & more. Canada facilitates academic, professional, and personal development for students with a constantly upgraded education system in a multicultural environment.
            </p>
            <div className="flex justify-start space-x-6 lg:space-x-10 text-left">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-red-600">300 +</h3>
                <p className="text-sm lg:text-base">Academic Institutions</p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-red-600">11000 +</h3>
                <p className="text-sm lg:text-base">Programs</p>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img src="/can1.webp" alt="Study in Canada" className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Why study in Canada */}
        <div className="bg-blue-950 text-yellow-400 p-6 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-left">Why Study in Canada?</h2>
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-10 text-left">A popular study abroad destination nurturing the dreams of millions of students.</h3>

          {/* Sequential fade-in effect for each point */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-800 rounded-md shadow-lg text-left"
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                <p className="text-white">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Information */}
        <div className="bg-white text-gray-800 p-6 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-left">Programs Offered:</h2>
          <ul className="list-disc list-inside text-left">
            <li>Diploma: 2 years</li>
            <li>Advanced Diploma: 3 years (Fast Track 2 years)</li>
            <li>Bachelors: 4 years</li>
            <li>PG Diploma: 1 year (very few programs are for 2 years)</li>
            <li>Masters: 2 years</li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-bold mt-6 lg:mt-8 mb-4 lg:mb-6 text-left">Top Universities & Colleges:</h2>
          <ul className="list-disc list-inside text-left">
            {/* List of universities */}
          </ul>

          {/* Map Section */}
          <div className="bg-cover bg-center p-8 md:p-12 lg:p-16 text-white relative" style={{ backgroundImage: "url('/register/form1.webp')", backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-xl mx-auto cursor-pointer" onClick={handleMapClick}>
              <img src="/maps/canada-map.png" alt="Map of Canada" className="w-full max-w-sm rounded-lg shadow-lg object-cover hover:bg-opacity-90 transition-opacity duration-300" />
              <h2 className="text-xl md:text-xl font-bold mb-4">Choose Your Destination</h2>
              <p>Discover top locations for your educational journey in Canada.</p>
            </div>
          </div>

          {/* Contact Form Modal */}
          <AnimatePresence>
            {showContactForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto" onClick={closeContactForm}>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-xl shadow-xl w-full max-w-lg my-auto">
                  {/* Form Section */}
                  <form ref={form} onSubmit={handleSubmit} className="p-6 space-y-4">
                    {responseMessage && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`border ${responseMessage.includes('successfully') ? 'border-green' : 'border-red'} p-[10px] rounded`}>
                        {responseMessage}
                      </motion.div>
                    )}
                    {/* Input fields */}
                    {/* ...additional input fields... */}
                    <button type="submit" className="bg-blue py-[10px] px-[20px] rounded">Send Message</button>
                  </form>

                  {/* Address Section */}
                  {/* ...address details... */}
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Other Components */}
      <OurAssociates/>
      {/* Uncomment if needed */}
      {/*<Register/>*/}
      {/*<WhatPeopleAreSaying/>*/}
      <WorldMapContact/>
    </>
  );
};

export default StudyCan;