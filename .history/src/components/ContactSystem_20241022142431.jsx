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
    UK: { x: 540, y: 90, name: 'United Kingdom' },
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
      className="h-[80vh] bg-cover bg-center bg-no-repeat relative overflow-hidden" 
      style={{ backgroundImage: 'url(/register/form1.webp)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full max-w-7xl mx-auto flex items-center px-4 justify-items-end flex-col md:flex-row">
        {/* Left side text */}
        <div className="md:w-1/3 pr-8">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white leading-tight text-center md:text-left">
            Choose Your Destination
          </h2>
          <p className="text-lg md:text-xl font-mukta text-gray-200 mt-4 text-center md:text-left">
            Select a location on the map to begin your educational journey
          </p>
        </div>
        
        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-2/3 max-w-[900px] bg-white bg-opacity-95 rounded-xl shadow-lg p-6 mt-6 md:mt-0 ml-0 md:ml-8"
        >
          <h1 className="text-xl md:text-2xl font-poppins font-bold text-center mb-8">Select Your Destination</h1>

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
                  <image href="/register/pin.svg" x={x - 12} y={y - 24} width="40" height="40" />
                  <rect
                    x={x - 90}
                    y={y - 50}
                    width="170"
                    height="50"
                    fill="white"
                    opacity="1.0"
                    rx="8"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={x}
                    y={y - 16}
                    textAnchor="middle"
                    className="text-xl font-bold font-inconsolata"
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
              className="bg-white rounded-xl shadow-xl p-6 max-w-4xl w-full flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Form Section */}
              <div className="md:w-3/4 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-poppins font-bold">Contact Us - {formData.country}</h2>
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
                      <label className="block text-gray-700 text-xs font-inconsolata font-semibold mb-1" htmlFor={field}>
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
                    <label className="block text-gray-700 text-xs font-inconsolata font-semibold mb-1" htmlFor="country">
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
                    <label className="block text-gray-700 text-xs font-inconsolata font-semibold mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    className="w-full py-3 bg-blue-500 text-white font-poppins font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                    type="submit"
                  >
                    <FaPaperPlane className="inline-block mr-2" /> Send Message
                  </button>
                </form>
              </div>

              {/* Address Section */}
              <div className="md:w-1/4 p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-xl flex flex-col justify-center">
                <FaMapMarkerAlt className="text-3xl mx-auto mb-2" />
                <p className="text-sm font-mukta text-center">123 Immigration Avenue, City, Country</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldMapContact;
