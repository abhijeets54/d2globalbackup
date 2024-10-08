import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Register = () => {
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-stretch justify-between bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-6xl z-10"
      >
        {/* Form and Image Section */}
        <div className="lg:w-3/4 flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="md:w-1/2 p-6 bg-white">
            <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
            {responseMessage && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-600 mb-2 p-2 bg-green-100 rounded-md text-sm"
              >
                {responseMessage}
              </motion.p>
            )}
            <form onSubmit={handleSubmit} ref={form} className="space-y-3">
              {['name', 'phone', 'email', 'country', 'subject'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {field === 'phone' && ' (with Country Code)'}
                    {field === 'country' && ' (Preferred)'}
                  </label>
                  {field === 'country' ? (
                    <select
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a country</option>
                      {['Canada', 'USA', 'Australia', 'UK', 'Dubai', 'Europe'].map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}
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

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img 
              src="/api/placeholder/800/600" 
              alt="Immigration Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-3xl font-bold mb-3">Let's Connect</h3>
                <p className="text-lg">We're here to help you achieve your global aspirations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="lg:w-1/4 p-6 bg-gray-50 flex flex-col justify-between">
          <div>
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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-200 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-200 to-transparent opacity-50"></div>
    </div>
  );
};

export default Register;