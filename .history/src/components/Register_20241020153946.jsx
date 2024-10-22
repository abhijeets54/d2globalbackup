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
    country: preferredCountry || '',
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
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Contact Us</h2>
      {responseMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-green-600 mb-2 p-2 bg-green-100 rounded-md"
        >
          {responseMessage}
        </motion.p>
      )}
      <form onSubmit={handleSubmit} ref={form} className="space-y-3">
        {/* Form fields */}
        <div>
          <label htmlFor="country">Country (Preferred)</label>
          <input
            className="w-full border p-2 rounded"
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
            className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold"
            type="submit"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </motion.button>
        </div>
      </form>
      <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Register;
