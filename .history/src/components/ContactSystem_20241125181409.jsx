import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const WorldMapContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const countries = {
    UK: { x: 460, y: 110, name: 'United Kingdom' },
    Canada: { x: 250, y: 120, name: 'Canada' },
    Europe: { x: 520, y: 160, name: 'Europe' },
    USA: { x: 220, y: 160, name: 'United States' },
    Dubai: { x: 600, y: 200, name: 'Dubai' },
    Australia: { x: 800, y: 350, name: 'Australia' },
  };

  const handlePinClick = (country, e) => {
    e.stopPropagation();
    setSelectedCountry(country);
    setFormData({ ...formData, country: countries[country].name });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedCountry(null);
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
          setFormData({ name: '', email: '', subject: '', phone: '', country: '', message: '' });
          setTimeout(() => {
            setResponseMessage('');
            closeForm();
          }, 3000);
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.log('Failed...', error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden px-4 py-8 sm:py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm"
        style={{ backgroundImage: 'url(/register/form1.webp)' }}
      />
      
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left side text */}
        <div className="w-full lg:w-1/3 text-center lg:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Choose Your Destination
          </h2>
          <p className="text-lg sm:text-xl text-gray-200">
            Select a location on the map to begin your journey
          </p>
        </div>
        
        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full lg:w-2/3 bg-white/95 rounded-xl shadow-xl p-4 sm:p-6 md:p-8"
        >
          <div className="relative aspect-[2/1] w-full">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full" 
              preserveAspectRatio="xMidYMid meet"
            >
              <image href="/register/world.svg" width="100%" height="100%" />
              {Object.entries(countries).map(([code, { x, y, name }], index) => (
                <motion.g
                  key={code}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.2,
                  }}
                  onClick={(e) => handlePinClick(code, e)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <image 
                    href="/register/pin.svg" 
                    x={x - 12} 
                    y={y - 24} 
                    width="24" 
                    height="24"
                    className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]" 
                  />
                  <rect
                    x={x - 60}
                    y={y - 40}
                    width="120"
                    height="30"
                    fill="white"
                    opacity="0.95"
                    rx="6"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={x}
                    y={y - 20}
                    textAnchor="middle"
                    className="text-sm sm:text-base md:text-lg font-semibold"
                  >
                    {name}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Form Section */}
                <div className="lg:w-3/4 p-4 sm:p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Us</h2>
                    <button
                      onClick={closeForm}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <FaTimes className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit} ref={form}>
                    {responseMessage && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
                      >
                        {responseMessage}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <select
                        className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-customBlue focus:ring-1 focus:ring-customBlue transition duration-300"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a country</option>
                        {Object.values(countries).map(({ name }) => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                      </select>
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
                <div className="lg:w-1/4 bg-customBlue p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">Visit Us Today!</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FaMapMarkerAlt className="text-xl flex-shrink-0" />
                        <p className="font-semibold">Main Branch</p>
                      </div>
                      <p className="text-sm leading-relaxed ml-7">
                        Maks Shopping Plaza,<br />
                        Dugri Road, Model Town,<br />
                        Ludhiana
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FaMapMarkerAlt className="text-xl flex-shrink-0" />
                        <p className="font-semibold">Sub Branch</p>
                      </div>
                      <p className="text-sm leading-relaxed ml-7">
                        Rattan Bazar Adda,<br />
                        Near Hungry Point Restaurant,<br />
                        Jodhan, Ludhiana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldMapContact;