import React, { useState, useEffect, useRef } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, phone, country, message }),
      });
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        ref={formRef}
        className="flex flex-col md:flex-row items-center justify-center p-8 bg-white shadow-md rounded-lg md:max-w-6xl w-full"
      >
        {/* Form Section */}
        <div
          className={`md:w-1/2 w-full p-4 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-center text-3xl font-bold mb-6">Feel Free to Contact Us</h2>
          {responseMessage && (
            <p className="text-center text-green-500 mb-4">{responseMessage}</p>
          )}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
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
                <option value="New Zealand">New Zealand</option>
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
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button className="bg-blue-950 text-white py-2 px-4 rounded" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div
          className={`md:w-1/2 w-full p-4 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src="/student.jpg"
            alt="Contact"
            className="w-full h-auto object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
