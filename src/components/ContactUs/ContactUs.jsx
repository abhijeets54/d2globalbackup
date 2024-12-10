import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <footer className="bg-customBlue text-customYellow py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex items-start mb-6 md:mb-0">
          <img src="/logo.png" alt="D2 Global" className="w-24 h-24 mr-4" />
          <div>
            <h3 className="text-xl font-poppins font-bold">D2 Global</h3>
            <Link to="/AboutUs" className="text-gray-400 hover:text-yellow-500 block font-openSans text-base">About</Link>
            <Link to="/Partners" className="text-gray-400 hover:text-yellow-500 block font-openSans text-base">Partner with Us</Link>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-poppins font-bold">Enquiries</h3>
          <Link to="mailto:info@d2global.in" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">info@d2global.in</Link>
          <Link to="tel:+918427670455" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">+91 84276 70455</Link>
          <Link to="tel:+917696900455" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">+91 76969 00455</Link>
          <a href="https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-yellow-500 font-openSans text-base mt-2">
            <FaInstagram className="mr-2" /> Follow us
          </a>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-poppins font-bold">Quick Links</h3>
          <ul>
            <li><Link to="/StudyAbroad" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">Study Abroad</Link></li>
            <li><Link to="/TouristVisa" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">Tourist Visa</Link></li>
            <li><Link to="/PR" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">Permanent Residency</Link></li>
            <li><Link to="/Contactpage" className="text-gray-400 hover:text-yellow-500 font-openSans block text-base">Contact Us</Link></li>

          </ul>
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold">Our Location</h3>
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0981680924483!2d75.84533397619774!3d30.88391467830946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8256b1dba32d%3A0x89337467ae3275ed!2sD2%20Global!5e0!3m2!1sen!2sin!4v1728041069574!5m2!1sen!2sin"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center font-inconsolata font-semibold text-customYellow mt-8 text-base">
        &copy; D2 Global. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactUs;
