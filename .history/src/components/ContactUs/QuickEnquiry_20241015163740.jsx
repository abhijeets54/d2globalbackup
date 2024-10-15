import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const QuickEnquiry = () => {
  const form = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, 'I7UB0PZBIaKgzxane')
      .then(
        () => {
          setName('');
          setEmail('');
          setSubject('');
          setPhone('');
          setMessage('');
          setCountry('');
          setSuccessMessage('Your message was sent successfully! We will get back to you very soon.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="fixed left-0 top-0 h-full flex items-center z-50">
      {/* Quick Enquiry Button */}
      <div
        className="bg-customBlue hover:bg-customYellow text-white px-1 py-6 rounded-r-lg cursor-pointer flex items-center justify-center h-32 w-8 sm:w-10 md:w-12"
        onClick={toggleForm}
      >
        <span className="transform -rotate-90 font-bold text-sm whitespace-nowrap">ENQUIRE NOW</span>
      </div>

      {/* Contact Form */}
      <div
        className={`fixed left-0 top-0 h-full w-full sm:w-80 md:w-96 lg:w-96 bg-white shadow-lg transition-transform duration-500 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Contact Us</h2>

          <form onSubmit={handleSubmit} ref={form} className="space-y-2 sm:space-y-3 flex-grow flex flex-col justify-between">
            <div className="space-y-2 sm:space-y-3">
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="phone">Phone number with Country Code</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="country">Preferred Country</label>
                <select
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a country</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">UK</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="subject">Subject</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="message">Message</label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-2 sm:mt-4">
              <button className="bg-blue-950 text-yellow-400 py-2 px-4 rounded text-sm sm:text-base hover:bg-blue-800 transition-colors duration-300" type="submit">
                Send Message
              </button>
            </div>
          </form>

          {successMessage && (
            <div className="mt-2 text-center text-green-500 text-xs sm:text-sm">
              {successMessage}
            </div>
          )}
        </div>

        {/* Close Button */}
        <div
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300"
          onClick={toggleForm}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default QuickEnquiry;