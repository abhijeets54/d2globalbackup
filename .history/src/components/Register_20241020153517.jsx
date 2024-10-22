import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Register = ({ preferredCountry, onClose }) => {
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

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, country: preferredCountry }));
  }, [preferredCountry]);

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
    <div className="w-full min-h-fit flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-stretch justify-between bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-6xl"
      >
        <div className="lg:w-3/4 flex flex-col md:flex-row">
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
              {/* Your form fields as shown in your example */}
              <div>
                <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="country">
                  Country (Preferred)
                </label>
                <input
                  className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-customBlue text-white py-2 px-6 rounded-full text-sm font-semibold flex items-center justify-center mx-auto transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="submit"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
