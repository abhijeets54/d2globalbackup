import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from '/'; // Use the correct path for your image

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, {
        publicKey: 'I7UB0PZBIaKgzxane',
      })
      .then(
        () => {
          setResponseMessage(' Your message was sent successfully, We will get back to you very soon!');
          // Reset form fields after successful submission
          setName('');
          setEmail('');
          setSubject('');
          setPhone('');
          setCountry('');
          setMessage('');
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.log('Failed...', error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg w-full md:max-w-6xl">
        {/* Form Section */}
        <div className="md:w-1/2 w-full p-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Feel Free to Contact Us</h2>
          {responseMessage && (
            <p className="text-center text-green-500 mb-4">{responseMessage}</p>
          )}
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
                rows="4"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button className="bg-customBlue text-customYellow py-2 px-4 rounded" type="submit">
                Send Message
              </button>
            </div>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-green-500">{responseMessage}</p>
          )}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full hidden md:block">
          <img src={image} alt="Pattern" className="w-full h-auto rounded-r-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;
