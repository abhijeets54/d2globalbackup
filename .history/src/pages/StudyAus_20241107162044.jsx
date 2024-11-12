import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const WorldMapContact = ({ selectedCountry, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: selectedCountry || '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef();

  const countries = {
    UK: { x: 540, y: 90, name: 'United Kingdom' },
    Canada: { x: 220, y: 100, name: 'Canada' },
    Europe: { x: 630, y: 140, name: 'Europe' },
    USA: { x: 290, y: 180, name: 'United States' },
    Dubai: { x: 710, y: 230, name: 'Dubai' },
    Australia: { x: 860, y: 380, name: 'Australia' },
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
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
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
                <button
                  onClick={onClose}
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

            {/* Address Section - Right Side */}
            <div className="md:w-1/4 bg-customBlue p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Visit Us Today!</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-3">
                    <FaMapMarkerAlt className="text-xl mr-2" />
                    <p className="font-semibold">Main Branch</p>
                  </div>
                  <p className="text-sm ml-7 leading-relaxed">
                    Maks Shopping Plaza,<br />
                    Dugri Road, Model Town,<br />
                    Ludhiana
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <FaMapMarkerAlt className="text-xl mr-2" />
                    <p className="font-semibold">Sub Branch</p>
                  </div>
                  <p className="text-sm ml-7 leading-relaxed">
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
    </AnimatePresence>
  );
};

export default WorldMapContact;