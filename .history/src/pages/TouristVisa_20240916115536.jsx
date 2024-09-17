import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Register from '../components/Register';
import QuickNumbers from '../components/QuickNumbers';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';

const TouristVisa = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const countries = [
    { name: 'Canada', img: '/canadatour.webp', description: 'Explore the scenic beauty of Canada with the help of our tourist visa services.' },
    { name: 'Australia', img: '/austour.webp', description: 'Visit Australia’s stunning landscapes by applying for a tourist visa with us.' },
    { name: 'UK', img: '/uktour.webp', description: 'Discover the historical charm of the UK with our swift visa processing.' },
    { name: 'USA', img: '/usatour.webp', description: 'Travel to the USA to reconnect with family or explore famous attractions.' },
    { name: 'Europe', img: '/europetour.webp', description: 'Experience Europe’s rich cultural diversity with our comprehensive visa services.' }
  ];

  return (
    <>
      <QuickEnquiry />

      <div className="bg-gray-100 p-4">
        {/* Hero Section */}
        <motion.div 
          className="bg-white p-8 flex flex-col lg:flex-row items-center lg:items-start text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Text on the left */}
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl font-bold mb-4">Explore the World with D2 Global Immigration</h1>
            <p className="text-xl mb-6">Your trusted tourist visa consultant for smooth, reliable, and swift visa processing services.</p>
          </div>
          
          {/* Image on the right */}
          <motion.img 
            src="/touristmain.webp" 
            alt="World Map" 
            className="w-full lg:w-1/2 h-auto"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>

        <QuickNumbers />

        {/* Visa Info Section */}
        <motion.div 
          className="bg-blue-950 text-white p-8 mt-6 text-left" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us for Your Tourist Visa?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Magnificent consultation with visa experts.</li>
            <li>Complete privacy and security for your documents.</li>
            <li>A strong reputation for integrity and client satisfaction.</li>
            <li>Over 100+ stamped visas for international travelers.</li>
            <li>Affordable and transparent visa services.</li>
          </ul>
        </motion.div>

        {/* Country-Specific Visa Services */}
        <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
            >
              <img src={country.img} alt={`${country.name} Tourist`} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-2xl font-bold mb-2">{country.name} Tourist Visa</h3>
              <p>{country.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-left bg-white p-8 mt-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4">Start Your Journey Today!</h3>
          <p className="text-xl mb-6">
            Contact D2 Global to get started with your tourist visa application. Our expert consultants are here to assist you every step of the way.
          </p>
          <Register /> {/* Assuming a component that handles user registration or inquiries */}
        </motion.div>
      </div>
    </>
  );
};

export default TouristVisa;
