import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const QuickEnquiry = () => {
  const form = useRef(null);
  
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');

  // State variables for success message and form visibility
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Toggle form visibility
  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSuccessMessage(''); // Clear any previous success message
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, 'I7UB0PZBIaKgzxane')
      .then(
        () => {
          // Clear form fields after successful submission
          setName('');
          setEmail('');
          setSubject('');
          setPhone('');
          setMessage('');
          setCountry('');
          
          // Display success message
          setSuccessMessage('Your message was sent successfully! We will get back to you very soon.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      {/* Quick Enquiry Button */}
      <div
        className="bg-customBlue hover:bg-blue-800 text-customYellow p-3 sm:p-3 md:p-4 lg:p- rounded-r-lg cursor-pointer flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16"
        onClick={toggleForm}
      >
        <span className="transform -rotate-90 text-xs sm:text-sm md:text-lg">Quick Enquiry</span>
      </div>

      {/* Contact Form */}
      <div
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-white shadow-lg w-full sm:w-80 md:w-96 lg:w-96 transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Contact Us</h2>

          <form onSubmit={handleSubmit} ref={form}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone number with Country Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Preferred Country Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Preferred Country
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
                <option value="UK">UK</option>
                <option value="Dubai">Dubai</option>
                <option value="Europe">Europe</option>
              </select>
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button className="bg-blue-950 text-yellow-400 py-2 px-4 rounded" type="submit">
                Send Message
              </button>
            </div>

            {/* Success Message Below Button */}
            {successMessage && (
              <div className="mt-4 text-center text-green-500">
                {successMessage}
              </div>
            )}
          </form>
        </div>

        {/* Close Button */}
        <div
          className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer text-gray-500"
          onClick={toggleForm}
        >
          &#x2715;
        </div>
      </div>
    </div>
  );
};

export default QuickEnquiry;
