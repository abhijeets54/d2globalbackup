import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef(null);

  // Set interval to show popup every 5 minutes
  useEffect(() => {
    const popupInterval = setInterval(() => {
      setShowPopup(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(popupInterval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, {
        publicKey: 'I7UB0PZBIaKgzxane',
      })
      .then(
        () => {
          setResponseMessage('Message sent successfully! We will get back to you soon.');
          setShowPopup(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.error('Failed...', error.text);
        }
      );
  };

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2"
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative bg-white rounded-xl shadow-xl w-full max-w-xs p-4 border border-gray-100"
        >
          {/* Close button with hover effect */}
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setShowPopup(false)}
          >
            <X size={20} />
          </motion.button>

          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Contact Us</h2>
            <p className="text-xs text-gray-500">We'd love to hear from you!</p>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-700 p-2 rounded-lg text-center text-xs mb-3"
            >
              {responseMessage}
            </motion.div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-3">
            {/* Input Fields with Icons */}
            <div className="relative">
        
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-7 w-full p-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
         
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-7 w-full p-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
   
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-7 w-full p-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
           
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="pl-7 w-full p-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 h-20 resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-customBlue text-white p-2 rounded-lg text-xs font-semibold hover:bg-customYellow transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupForm;