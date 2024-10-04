import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

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
          setResponseMessage('Your message was sent successfully. We will get back to you very soon!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            country: '',
            message: '',
          });
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.log('Failed...', error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-stretch justify-between bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl"
      >
        {/* Form Section */}
        <div className="md:w-1/2 w-full p-8 bg-white">
          <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          {responseMessage && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 mb-4 p-3 bg-green-100 rounded-md"
            >
              {responseMessage}
            </motion.p>
          )}
          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            {['name', 'phone', 'email', 'country', 'subject'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  {field === 'phone' && ' (with Country Code)'}
                  {field === 'country' && ' (Preferred)'}
                </label>
                {field === 'country' ? (
                  <select
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
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
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
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
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
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
                className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center mx-auto transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="submit"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full hidden md:block relative">
          <img 
            src="/contact-image.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-4xl font-bold mb-4">Let's Connect</h3>
              <p className="text-xl">We're here to help you achieve your global aspirations.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;