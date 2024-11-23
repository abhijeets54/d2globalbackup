import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  return (
    <footer className="bg-customBlue text-customYellow py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg">

        {/* Logo and Company Name Section */}
        <div className="flex items-center md:items-start space-x-4">
          <img src="/logo.png" alt="D2 Global Logo" className="w-32 h-auto md:w-48" />
          <div className="flex flex-col">
            <p className="text-2xl font-bold font-poppins">D2 Global</p>
          </div>
        </div>

        {/* Enquiries Section */}
        <div className="space-y-2 text-center md:text-left">
          <p className="font-bold text-2xl font-gothic">Enquiries</p>
          <p>
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@d2global.com" className="text-gray-400 hover:text-customYellow font-openSans">
              info@d2global.in
            </a>
          </p>
          <p className="font-openSans">
            <i className="fas fa-phone mr-2"></i>
            +91 98789 90455
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-center md:text-left">
          <p className="font-bold text-2xl font-lora">Quick Links</p>
          <Link to="/AboutUs" className="text-gray-400 hover:text-customYellow font-openSans">About</Link> <br />
          <Link to="/StudyAbroad" className="text-gray-400 hover:text-customYellow font-openSans">Study Abroad</Link> <br />
          <Link to="/TouristVisa" className="text-gray-400 hover:text-customYellow font-openSans">Tourist Visa</Link> <br />
          <Link to="/ContactUs" className="text-gray-400 hover:text-customYellow font-openSans">Contact Us</Link> <br />
          <Link to="/PR" className="text-gray-400 hover:text-customYellow font-openSans">Permanent Residency</Link> <br />
          <Link to="/Training" className="text-gray-400 hover:text-customYellow font-openSans">Language C</Link>
        </div>

        {/* Google Maps Location Section */}
        <div className="space-y-2">
          <p className="font-bold text-2xl font-poppins text-center md:text-left">Our Location</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0981680924483!2d75.84533397619774!3d30.88391467830946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8256b1dba32d%3A0x89337467ae3275ed!2sD2%20Global!5e0!3m2!1sen!2sin!4v1728041069574!5m2!1sen!2sin"
            width="100%" 
            height="200" 
            allowFullScreen="" 
            loading="lazy" 
            title="Google Map"
            className="border-0"
          />
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-customYellow mt-8 text-lg font-inconsolata">
        <p>All rights reserved © D2 Global.</p>
      </div>
    </footer>
  );
};

export default ContactUs;
