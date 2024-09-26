import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    }, 5 * 60 * 1000); // Show popup every 5 minutes

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
    // Using EmailJS to send form data
    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, {
        publicKey: 'I7UB0PZBIaKgzxane',
      })
      .then(
        () => {
          setResponseMessage('Your message was sent successfully, We will get back to you very soon!');
          setShowPopup(false);
          // Reset form fields after submission
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2">
      <div className="relative bg-white p-3 rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] transition-transform transform">
        {/* Close button */}
        <button
          className="absolute top-1 right-2 text-lg text-gray-500 hover:text-gray-700"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>

        <h2 className="text-base mb-4 text-center font-semibold text-gray-700">Contact Us</h2>
        {/* Display response message at the top */}
        {responseMessage && <p className="text-center text-green-500 mb-3">{responseMessage}</p>}
        <form ref={form} onSubmit={handleSubmit}>
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 h-20"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-3 bg-blue-950 text-yellow-400 py-2 px-4 text-sm rounded w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
        {/* Display response message at the bottom */}
        {responseMessage && (
          <p className="mt-3 text-center text-green-500">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
