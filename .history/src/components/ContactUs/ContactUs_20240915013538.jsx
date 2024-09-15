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
    <footer className="bg-blue-950 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 w-full">
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 mt-4">
          {/* Left Column */}
          <div className="flex font-semibold flex-col space-y-4 items-start">
            <a href="https://www.facebook.com/D2GlobalEducation/" className="text-gray-400 hover:text-gray-100" target='_blank' rel='noreferrer'>
              <i className="fab fa-facebook-f"></i> D2 Global
            </a> 
            <a href="https://youtube.com/@d2global?si=DcM0IJaeJbDmfpa2" className="text-gray-400 hover:text-gray-100" target='_blank' rel='noreferrer'>
              <i className="fab fa-youtube"></i> D2 Global
            </a> 
            <a href="https://www.instagram.com/d2globalinfo/" className="text-gray-400 hover:text-gray-100" target='_blank' rel='noreferrer'>
              <i className="fab fa-instagram"></i> d2globalinfo
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full md:w-1/3">
          <p className="font-semibold">D2 Global</p>
          <p>Maks Shopping Plaza, Dugri Road, Model Town , Ludhiana </p>
          
          <p className="mt-1"><i className="fas fa-phone mr-2"></i>+91 98789 90455</p>
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-1/3">
          <p>For all enquiries, contact</p>
          <p className="mt-1">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@intitiatorsofchange@gmail.com" className="text-gray-400 hover:text-gray-100">
              info@d2global@gmail.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p>All rights reserved © D2 Global.</p>
      </div>
    </footer>
  );
};

export default ContactUs;
