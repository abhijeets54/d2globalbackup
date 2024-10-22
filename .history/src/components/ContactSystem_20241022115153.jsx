import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
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
    UK: { x: 540, y: 120, name: 'United Kingdom' },
    Canada: { x: 220, y: 100, name: 'Canada' },
    Europe: { x: 630, y: 140, name: 'Europe' },
    USA: { x: 290, y: 180, name: 'United States' },
    Dubai: { x: 710, y: 230, name: 'Dubai' },
    Australia: { x: 910, y: 380, name: 'Australia' },
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
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.log('Failed...', error.text);
        }
      );
  };

  return (
    <div 
      className="h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden" 
      style={{ backgroundImage: 'url(/register/form1.webp)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full max-w-7xl mx-auto flex items-center -mr px-4">
        {/* Left side text */}
        <div className="w-1/3 pr-8">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Choose Your Destination
          </h2>
          <p className="text-xl text-gray-200 mt-4">
            Select a location on the map to begin your educational journey
          </p>
        </div>
        
        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-2/3 bg-white bg-opacity-95 rounded-xl shadow-lg p-6 ml-8"
        >
          <h1 className="text-2xl font-bold text-center mb-8">Select Your Destination</h1>

          <div className="relative">
            <svg viewBox="0 0 1200 600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
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
                  <image href="/register/pin.svg" x={x - 12} y={y - 24} width="24" height="24" />
                  <rect
                    x={x - 80}  // Increased width
                    y={y - 40}  // Adjusted position
                    width="160"  // Increased width
                    height="36"  // Increased height
                    fill="white"
                    opacity="0.9"
                    rx="8"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={x}
                    y={y - 16}
                    textAnchor="middle"
                    className="text-lg font-semibold fill-gray-800"  // Increased text size
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-4xl w-full flex"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Form Section */}
              <div className="w-3/4 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Contact Us - {formData.country}</h2>
                  <button
                    onClick={closeForm}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ×
                  </button>
                </div>

                <form className="space-y-3" onSubmit={handleSubmit} ref={form}>
                  {responseMessage && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-green-600 mb-2 p-2 bg-green-100 rounded-md text-sm"
                    >
                      {responseMessage}
                    </motion.p>
                  )}
                  {['name', 'phone', 'email', 'subject'].map((field) => (
                    <div key={field}>
                      <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor={field}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                        id={field}
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="country">
                      Country (Preferred)
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
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
                    <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
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
                      className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold flex items-center justify-center mx-auto transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      type="submit"
                    >
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* Address Section */}
              <div className="w-1/4 p-6 bg-gray-50 flex flex-col justify-between rounded-r-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Visit Us Today!</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Main Branch:</p>
                    <p className="text-sm text-gray-600 flex items-start mt-1">
                      <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                      Maks Shopping Plaza, Dugri Road, Model Town, Ludhiana
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Second Branch:</p>
                    <p className="text-sm text-gray-600 flex items-start mt-1">
                      <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                      Rattan Bazar Adda, Near Hungry Point Restaurant, Jodhan, Ludhiana
                    </p>
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