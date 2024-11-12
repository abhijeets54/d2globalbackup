import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import OurAssociates from '../components/OurAssociates';

const points = [
  { title: 'Globally Recognized Universities', description: 'Australia has world-renowned universities and offers internationally accepted qualifications.' },
  { title: 'Lower Studying Cost', description: 'The country has comparably lower tuition costs than many other destinations.' },
  { title: 'Advanced Research', description: 'Emphasis on scientific research and technical resources creates a great academic and working ground for international researchers.' },
  { title: 'Multicultural Environment', description: 'People from different ethnicities join Australian universities and workforce, creating a diverse and robust culture.' },
  { title: 'Similar Education System', description: 'Both India and Australia broadly follow the British system of education, making it easy to get admission without credential evaluation.' },
  { title: 'Work Opportunities', description: 'International students in Australia are allowed to work part-time for up to 48 hours a fortnight.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const StudyAus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: 'Australia',
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
    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, {
        publicKey: 'I7UB0PZBIaKgzxane',
      })
      .then(
        () => {
          setResponseMessage('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', phone: '', country: 'Australia', message: '' });
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.log('Failed...', error.text);
        }
      );
  };

  return (
    <>
      <div className="study-aus-container bg-white pt-16">
        {/* Top section */}
        <div className="bg-white p-4 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6">
              <img src="/aflag.png" alt="Australia Flag" className="w-6 h-6 md:w-8 md:h-8 mr-2" /> 
              Study in Australia
            </h1>
            <p className="mb-4 text-sm md:text-lg">
              Know everything about universities, costs, scholarships, and the admission process. Australian education focuses on practical aspects and research, making it one of the top five destinations for international students. It also houses the Group of Eight Universities, equivalent to Ivy League institutions.
            </p>
            <div className="flex justify-start space-x-6 md:space-x-10 text-center">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">180 +</h3>
                <p className="text-sm md:text-base">Academic Institutions</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">13000 +</h3>
                <p className="text-sm md:text-base">Programs</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img src="/aus1.webp" alt="Study in Australia" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover" />
          </div>
        </div>

        {/* Why study in Australia */}
        <div className="bg-blue-950 text-yellow-400 p-4 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Study in Australia</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-10">The land of leading academic institutions & pioneering innovations</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
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
                <h4 className="text-base md:text-lg font-semibold mb-2">{point.title}</h4>
                <p className="text-white text-sm md:text-base">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional info */}
        <div className="bg-gray-100 p-4 md:p-8 lg:p-10 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Additional Information</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Student Perks</h3>
          <p className="text-sm md:text-lg mb-4">
            Under the proposed arrangement, students can work up to 40 hours per fortnight. This benefits international students by offering flexibility in balancing work and studies.
          </p>
        </div>

        {/* Choose Your Destination Section */}
        <div 
          className="bg-cover bg-center p-8 md:p-12 lg:p-16 text-white relative" 
          style={{
            backgroundImage: "url('/register/form1.webp')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
            <div className="lg:w-1/2 mb-6 lg:mb-0 text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Destination</h2>
              <p className="text-sm md:text-lg">
                Discover the top locations for your educational journey in Australia. Explore diverse cities with thriving student communities and excellent academic institutions.
              </p>
            </div>

            <div
              className="lg:w-1/2 flex justify-center cursor-pointer" 
              onClick={handleMapClick}
            >
              <img 
                src="/maps/ausmap.png" 
                alt="Map of Australia" 
                className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-contain hover:opacity-90 transition-opacity duration-300" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={closeContactForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Form Section */}
                <div className="md:w-3/4 p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Contact Us - Australia</h2>
                    <button
                      onClick={closeContactForm}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit} ref={form}>
                    {responseMessage && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4"
                      >
                        {responseMessage}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['name', 'phone', 'email', 'subject'].map((field) => (
                        <div key={field}>
                          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor={field}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                          </label>
                          <input
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-customBlue focus:ring-1 focus:ring-customBlue transition duration-300"
                            id={field}
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="country">
                        Country (Preferred)
                      </label>
                      <input
                        className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-customBlue focus:ring-1 focus:ring-customBlue transition duration-300"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        disabled
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-customBlue focus:ring-1 focus:ring-customBlue transition duration-300"
                        id="message"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-customBlue text-white py-3 px-8 rounded-lg text-sm font-semibold flex items-center justify-center mx-auto transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-customBlue focus:ring-opacity-50"
                        type="submit"
                      >
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </div>

                {/* Address Section */}
                <div className="md:w-1/4 bg-customBlue p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Visit Us Today!</h3>
                  <div className="space-y-6">
                    <div className="text-white">
                      <div className="flex items-start mb-3">
                        <FaMapMarkerAlt className="text-xl mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-2">Main Branch</p>
                          <p className="text-sm text-left leading-relaxed">
                            Maks Shopping Plaza,
                            Dugri Road, Model Town,
                            Ludhiana
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="flex items-start mb-3">
                        <FaMapMarkerAlt className="text-xl mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-2">Sub Branch</p>
                          <p className="text-sm text-left leading-relaxed">
                            Rattan Bazar Adda,
                            Near Hungry Point Restaurant,
                            Jodhan, Ludhiana
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <OurAssociates />
    </>
  );
};

export default StudyAus;