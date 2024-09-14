import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const popupInterval = setInterval(() => {
      setShowPopup(true);
    }, 5 * 60 * 1000); // Show popup every 5 minutes

    return () => clearInterval(popupInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/submitForm', formData);
      alert('Form submitted successfully');
      setShowPopup(false);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md md:max-w-sm">
        {/* Cross button */}
        <button
          className="absolute top-2 right-2 text-lg text-gray-500 hover:text-gray-700"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>

        <h2 className="text-xl mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number with Country Code"
            value={formData.phone}
            onChange={handleInputChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
