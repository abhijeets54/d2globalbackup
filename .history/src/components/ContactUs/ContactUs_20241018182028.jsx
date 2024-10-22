import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  const [visitors, setVisitors] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch('http://localhost:3001/visitors');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVisitors(data.count);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <footer className="bg-customBlue text-customYellow py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-lg">
        
        {/* Logo and Enquiries Section */}
        <div className="space-y-4 text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/path/to/d2global-logo.png" alt="D2 Global Logo" className="w-32 h-auto md:w-48" />
          </div>
          
          {/* Enquiries Section */}
          <div className="md:ml-8 space-y-2">
            <p className="font-bold text-2xl">Enquiries</p>
            <p>
              <i className="fas fa-envelope mr-2"></i>
              <a href="mailto:info@d2global.com" className="text-gray-400 hover:text-customYellow">
                info@d2global.in
              </a>
            </p>
            <p>
              <i className="fas fa-phone mr-2"></i>
              +91 98789 90455
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-center md:text-left">
          <p className="font-bold text-2xl">Quick Links</p>
          <a href="/AboutUs" className="text-gray-400 hover:text-customYellow">About</a> <br />
          <a href="/StudyAbroad" className="text-gray-400 hover:text-customYellow">Study Abroad</a> <br />
          <a href="/TouristVisa" className="text-gray-400 hover:text-customYellow">Tourist Visa</a> <br />
          <a href="/ContactUs" className="text-gray-400 hover:text-customYellow">Contact Us</a> <br />
          <a href="/PR" className="text-gray-400 hover:text-customYellow">Permanent Residency</a> <br />
          <a href="/Training" className="text-gray-400 hover:text-customYellow">Training</a>
        </div>

        {/* Google Maps Location Section */}
        <div className="col-span-1 md:col-span-2 mt-8 md:mt-0">
          <p className="font-bold text-2xl mb-4 text-center md:text-left">Our Location</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176012.52074006327!2d75.78521997895174!3d30.900965649711306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83c93dba839b%3A0x9a5adf94620bb803!2sLudhiana%2C%20Punjab%20141001%2C%20India!5e0!3m2!1sen!2sus!4v1696111112222" 
            width="100%" 
            height="300" 
            allowFullScreen="" 
            loading="lazy" 
            title="Google Map"
            className="border-0"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-customYellow mt-8 text-lg">
        <p>All rights reserved © D2 Global.</p>
      </div>
    </footer>
  );
};

export default ContactUs;
