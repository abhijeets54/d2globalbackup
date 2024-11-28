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
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

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
          setErrorMessage('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="fixed left-0 top-0 h-full flex items-center z-50">
      {/* Quick Enquiry Button */}
      <div 
        className="quick-enquiry-btn cursor-pointer flex items-center justify-center h-24 w-8 md:w-10 rounded-r-lg"
        onClick={toggleForm}
      >
        <span className="transform -rotate-90 font-bold text-xs sm:text-sm py- whitespace-nowrap">ENQUIRE NOW</span>
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
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="name">
                  Name
                </label>
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

              {/* Phone Input */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="phone">
                  Phone number with Country Code
                </label>
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

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="email">
                  Email
                </label>
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

              {/* Country Select */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="country">
                  Preferred Country
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-1 sm:py-2 px-2 sm:px-3 text-gray-700 text-xs sm:text-sm leading-tight focus:outline-none focus:shadow-outline"
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

              {/* Subject Input */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="subject">
                  Subject
                </label>
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

              {/* Message Textarea */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1" htmlFor="message">
                  Message
                </label>
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

            {/* Submit Button */}
            <div className="text-center mt-2 sm:mt-4">
              <button
                className="custom-button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {successMessage && <div className="mt-4 text-center text-green-500 text-sm sm:text-base">{successMessage}</div>}
          
          {/* Error Message */}
          {errorMessage && <div className="mt-4 text-center text-red-500 text-sm sm:text-base">{errorMessage}</div>}
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

      <style jsx global>{`
        .quick-enquiry-btn {
          position: relative;
          border: 1px solid rgb(61, 106, 255);
          background: transparent;
          color: #fff;
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          transition: all 0.2s ease-in;
        }

        .quick-enquiry-btn {
          background: rgb(61, 106, 255);
        }

        .quick-enquiry-btn::before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          transform: skewX(-20deg);
        }

        .quick-enquiry-btn:hover {
          background: rgb(61, 106, 255);
          box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
          transition: all 0.2s ease-out;
        }

        .quick-enquiry-btn:hover::before {
          animation: sh02 0.5s 0s linear;
        }

        @keyframes sh02 {
          from {
            opacity: 0;
            left: 0%;
          }
          50% {
            opacity: 1;
          }
          to {
            opacity: 0;
            left: 100%;
          }
        }

        .quick-enquiry-btn:active {
          box-shadow: 0 0 0 0 transparent;
          transition: box-shadow 0.2s ease-in;
        }

        .custom-button {
          position: relative;
          padding: 10px 20px;
          border-radius: 7px;
          border: 1px solid rgb(61, 106, 255);
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 2px;
          background: transparent;
          color: #fff;
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          transition: all 0.2s ease-in;
        }

        .custom-button:hover {
          background: rgb(61, 106, 255);
          box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
          transition: all 0.2s ease-out;
        }

        .custom-button:hover::before {
          animation: sh02 0.5s 0s linear;
        }

        .custom-button::before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          transform: skewX(-20deg);
        }

        .custom-button:active {
          box-shadow: 0 0 0 0 transparent;
          transition: box-shadow 0.2s ease-in;
        }
      `}</style>
    </div>
  );
};

export default QuickEnquiry;