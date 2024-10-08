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
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-stretch justify-between bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl min-h-[60vh] md:min-h-[50vh]" // Reduced the min height here
      >
        {/* Form Section */}
        <div className="md:w-2/5 w-full p-6 bg-white h-auto"> {/* Adjusted height to auto */}
          <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
          {responseMessage && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 mb-4 p-2 bg-green-100 rounded-md text-sm"
            >
              {responseMessage}
            </motion.p>
          )}
          <form onSubmit={handleSubmit} ref={form} className="space-y-3">
            {/* Form fields */}
          </form>
        </div>
  
        {/* Image Section */}
        <div className="md:w-2/5 w-full hidden md:block relative">
          <img 
            src="/register.webp" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-customBlue bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h3 className="text-3xl font-bold mb-3">Let's Connect</h3>
              <p className="text-lg">We're here to help you achieve your global aspirations.</p>
            </div>
          </div>
        </div>
  
        {/* Address Section */}
        <div className="md:w-1/5 w-full p-6 bg-gray-100 h-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Visit Us Today!</h3>
          <div className="space-y-4 text-center md:text-left">
            <p className="font-bold text-lg">Office Address</p>
            <div>
              <p className="font-bold">Main Branch:</p>
              <p className="text-sm">Maks Shopping Plaza, Dugri Road, Model Town, Ludhiana</p>
            </div>
            <div>
              <p className="font-bold">Second Branch:</p>
              <p className="text-sm">Rattan Bazar Adda, Near Hungry Point Restaurant, Jodhan, Ludhiana</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;