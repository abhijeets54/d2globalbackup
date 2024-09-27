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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start text-center md:text-left">
        {/* Social Links Column */}
        <div className="space-y-4">
          <p className="font-bold text-lg md:text-xl">Follow Us</p>
          <a
            href="https://www.facebook.com/D2GlobalEducation/"
            className="text-gray-400 hover:text-customYellow flex items-center justify-center md:justify-start"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f mr-2"></i> D2 Global
          </a>
          <a
            href="https://youtube.com/@d2global?si=DcM0IJaeJbDmfpa2"
            className="text-gray-400 hover:text-customYellow flex items-center justify-center md:justify-start"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube mr-2"></i> D2 Global
          </a>
          <a
            href="https://www.instagram.com/d2globalinfo/"
            className="text-gray-400 hover:text-customYellow flex items-center justify-center md:justify-start"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram mr-2"></i> d2globalinfo
          </a>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <p className="font-bold text-lg md:text-xl">Quick Links</p>
          <a href="/AboutUs" className="text-gray-400 hover:text-customYellow">About</a> <br />
          <a href="/StudyAbroad" className="text-gray-400 hover:text-customYellow">Study Abroad</a> <br />
          <a href="/TouristVisa" className="text-gray-400 hover:text-customYellow">Tourist Visa</a> <br />
          <a href="/ContactUs" className="text-gray-400 hover:text-customYellow">Contact Us</a> <br />
          <a href="/PR" className="text-gray-400 hover:text-customYellow">Permanent Residency</a> <br />
          <a href="/Training" className="text-gray-400 hover:text-customYellow">Training</a>
        </div>

        {/* Address Column */}
        <div className="space-y-2">
          <p className="font-bold text-lg md:text-xl">D2 Global</p>
          <p className="leading-relaxed">
            Maks Shopping Plaza, Dugri Road, Model Town, Ludhiana
          </p>
          <p>
            <i className="fas fa-phone mr-2"></i>+91 98789 90455
          </p>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-2">
          <p className="font-bold text-lg md:text-xl">Enquiries</p>
          <p>
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@d2global.com" className="text-gray-400 hover:text-customYellow">
              Info@d2global.in
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-customYellow mt-8 text-sm font-light">
        <p>All rights reserved © D2 Global.</p>
      </div>
    </footer>
  );
};

export default ContactUs;
