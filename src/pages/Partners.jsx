import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Partners = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef(null);

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
          setFormData({
            name: '',
            companyName: '',
            phone: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.error('Failed...', error.text);
        }
      );
  };

  return (
    <div className="bg-white min-h-screen py-8 pt-20">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-poppins text-customBlue mb-4">Partner with D2 Global</h1>
          <p className="text-lg text-black font-openSans">
            At D2 Global, we are always looking for like-minded businesses to join hands and grow together.
            If you're interested in partnering with us, please reach out using the contact form below.
          </p>
        </div>

        {/* Why Partner Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">Why Partner with Us?</h2>
          <ul className="list-disc list-inside text-black space-y-2">
            <li>Expand your reach by collaborating with an industry-leading immigration company.</li>
            <li>Leverage our expertise in visa processing and global education consultancy.</li>
            <li>Access a wide network of international clients and business opportunities.</li>
            <li>Grow together with a trusted partner committed to mutual success.</li>
          </ul>
        </div>

        {/* How to Get Started Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">How to Get Started?</h2>
          <p className="text-black font-openSans">
            Contact us today to discuss how we can collaborate and create value for each other. We're excited to hear from you!
          </p>
        </div>

        {/* Partnership Form Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">Partnership Inquiry Form</h2>
          
          {/* Response Message */}
          {responseMessage && (
            <div className={`
              ${responseMessage.includes('successfully') 
                ? 'bg-green-50 border-green-200 text-green-700' 
                : 'bg-red-50 border-red-200 text-red-700'}
              border p-3 rounded-lg text-center mb-4
            `}>
              {responseMessage}
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about our potential partnership"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 h-32 resize-none"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-customBlue text-white p-3 rounded-lg text-sm font-semibold hover:bg-customYellow transition-colors"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">Contact Details</h2>
          <p className="text-black font-openSans">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@d2global.in" className="text-customBlue hover:underline">info@d2global.in</a>
          </p>
          <p className="text-black font-openSans">
          <Link to="tel:+918427670455" className="text-black font-openSans block text-base">+91 84276 70455</Link>
          <Link to="tel:+917696900455" className="text-black font-openSans block text-base">+91 76969 00455</Link>
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold font-poppins mb-2">Visit Us Today!</h3>
            <p className="text-black font-openSans">
              <strong>Main Branch</strong><br />
              Maks Shopping Plaza,<br />
              Dugri Road, Model Town,<br />
              Ludhiana
            </p>
            <p className="text-black font-openSans mt-4">
              <strong>Sub Branch</strong><br />
              Rattan Bazar Adda,<br />
              Near Hungry Point Restaurant,<br />
              Jodhan, Ludhiana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;