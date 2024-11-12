import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const StudyAus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: 'Australia', // Default country set to Australia
  });
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef();
  const [showForm, setShowForm] = useState(false);

  const handleMapClick = () => {
    setShowForm(true); // Open the form when the map is clicked
  };

  const closeForm = () => {
    setShowForm(false); // Close the form
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
          setFormData({ name: '', email: '', subject: '', phone: '', message: '', country: 'Australia' });
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.error('Failed...', error.text);
        }
      );
  };

  return (
    <>
      <div className="study-aus-container pt-16">
        {/* Map section with click to open form */}
        <div 
          className="bg-cover bg-center p-8 md:p-12 lg:p-16 text-white relative" 
          style={{
            backgroundImage: "url('/register/form1.webp')",
            backgroundSize: "cover",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between">
            {/* Left text section */}
            <div className="lg:w-1/2 mb-6 lg:mb-0 text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Destination</h2>
              <p className="text-sm md:text-lg">
                Discover the top locations for your educational journey in Australia. Explore diverse cities with thriving student communities and excellent academic institutions.
              </p>
            </div>

            {/* Right image map section with onClick */}
            <div
              className="lg:w-1/3 cursor-pointer transform scale-110" 
              onClick={handleMapClick}
            >
              <img src="/maps/ausmap.png" alt="Map of Australia" className="w-full max-w-xs rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <AnimatePresence>
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closeForm}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl max-w-4xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Form Section */}
                  <div className="md:w-3/4 p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800">Contact Us - {formData.country}</h2>
                      <button onClick={closeForm} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit} ref={form}>
                      {responseMessage && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
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
                              className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
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
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
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
                          className="bg-blue-500 text-white py-3 px-8 rounded-lg text-sm font-semibold flex items-center justify-center mx-auto transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          type="submit"
                        >
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </motion.button>
                      </div>
                    </form>
                  </div>

                  {/* Address Section - Right Side */}
                  <div className="md:w-1/4 bg-blue-500 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Visit Us Today!</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center mb-3">
                          <FaMapMarkerAlt className="text-xl mr-2" />
                          <p className="font-semibold">Main Branch</p>
                        </div>
                        <p className="text-sm ml-7 leading-relaxed">Maks Shopping Plaza, Dugri Road, Model Town, Ludhiana</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-3">
                          <FaMapMarkerAlt className="text-xl mr-2" />
                          <p className="font-semibold">Sub Branch</p>
                        </div>
                        <p className="text-sm ml-7 leading-relaxed">Rattan Bazar Adda, Near Hungry Point Restaurant, Jodhan, Ludhiana</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default StudyAus;
