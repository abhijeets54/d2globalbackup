// RegisterSystem.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

// World Map Component
const WorldMap = ({ onCountrySelect }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = {
    UK: { x: 400, y: 140, fullName: 'UK' },
    Canada: { x: 220, y: 130, fullName: 'Canada' },
    Europe: { x: 450, y: 150, fullName: 'Europe' },
    USA: { x: 200, y: 180, fullName: 'USA' },
    Dubai: { x: 520, y: 220, fullName: 'Dubai' },
    Australia: { x: 700, y: 350, fullName: 'Australia' }
  };

  const handlePinClick = (country) => {
    setSelectedCountry(country);
    onCountrySelect(country);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Select Your Destination</h2>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
      >
        {/* World map base */}
        <path
          d="M50,140 L750,140 L750,360 L50,360 Z"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        
        {/* Continents */}
        <path
          d="M100,120 Q200,150 250,200 Q300,250 200,300"
          fill="#e2e8f0"
          className="transition-colors duration-300 hover:fill-blue-100"
        />
        
        <path
          d="M400,120 Q450,150 500,180 Q520,200 480,250"
          fill="#e2e8f0"
          className="transition-colors duration-300 hover:fill-blue-100"
        />
        
        <path
          d="M650,300 Q700,320 730,340 Q750,350 700,380"
          fill="#e2e8f0"
          className="transition-colors duration-300 hover:fill-blue-100"
        />

        {/* Animated pins */}
        {Object.entries(countries).map(([country, position], index) => (
          <motion.g
            key={country}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            onClick={() => handlePinClick(country)}
            style={{ cursor: 'pointer' }}
          >
            <motion.circle
              cx={position.x}
              cy={position.y}
              r="6"
              fill={selectedCountry === country ? "#2563EB" : "#3B82F6"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.path
              d={`M${position.x},${position.y - 8} L${position.x},${position.y + 8}`}
              stroke={selectedCountry === country ? "#2563EB" : "#3B82F6"}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            />
            <text
              x={position.x}
              y={position.y - 15}
              textAnchor="middle"
              className="text-xs fill-current"
            >
              {country}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

// Modified Register Component
const Register = ({ initialCountry = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: initialCountry,
  });
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_3x7bjfj',
        'template_530xg64',
        form.current,
        {
          publicKey: 'I7UB0PZBIaKgzxane',
        }
      )
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-6xl mx-auto mt-8"
    >
      <div className="lg:flex">
        {/* Form Section */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Contact Us</h2>
          {responseMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center mb-4 p-3 rounded ${
                responseMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}
            >
              {responseMessage}
            </motion.div>
          )}
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            {/* Form fields */}
            {['name', 'phone', 'email', 'subject'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  {field === 'phone' && ' (with Country Code)'}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}

            {/* Country Selection */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a country</option>
                {['Canada', 'USA', 'Australia', 'UK', 'Dubai', 'Europe'].map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Address Section */}
        <div className="lg:w-1/2 p-6 bg-gray-50">
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
      </div>
    </motion.div>
  );
};

// Main Component that combines everything
const ContactSystem = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <WorldMap onCountrySelect={handleCountrySelect} />
        
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Register initialCountry={selectedCountry} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactSystem;