import React from 'react';
import { motion } from 'framer-motion'; // For animations, install via `npm install framer-motion`

const VisitorVisa = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      {/* Hero Section */}
      <section className="text-center">
        <motion.img 
          src="path-to-your-hero-image.jpg" 
          alt="Travel World" 
          className="mx-auto rounded-lg shadow-lg w-full md:w-2/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-blue-800 mt-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Explore the World with the Best Visitor Visa Consultants
        </motion.h1>
        <p className="text-lg text-gray-600 mt-5">
          Venture on a journey to explore the wonders of the world with expert guidance.
        </p>
      </section>

      {/* Dynamic Info Boxes */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Box 1 */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-blue-800">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Expert Visa Guidance</li>
            <li>Personalized Support</li>
            <li>Fast & Reliable Services</li>
            <li>Affordable Pricing</li>
          </ul>
        </motion.div>

        {/* Box 2 */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-blue-950">Types of Visitor Visas</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Tourist Visa</li>
            <li>Business Visa</li>
            <li>Medical Visa</li>
            <li>Family Visitor Visa</li>
          </ul>
        </motion.div>

        {/* Box 3 */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-blue-950">Countries We Cover</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>United States</li>
            <li>United Kingdom</li>
            <li>Schengen Area</li>
            <li>Canada</li>
            <li>Australia</li>
          </ul>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="mt-16">
        <motion.h2 
          className="text-center text-3xl font-bold text-blue-950"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          How to Apply for a Visitor Visa
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* United States */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-blue-950">United States</h3>
            <ol className="mt-4 list-decimal list-inside space-y-1 text-gray-700">
              <li>Apply online through the DS-160 form.</li>
              <li>Pay the application fee.</li>
              <li>Schedule an interview.</li>
              <li>Attend the interview with all documents.</li>
              <li>Wait for visa approval or denial.</li>
            </ol>
          </motion.div>

          {/* United Kingdom */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-blue-950">United Kingdom</h3>
            <ol className="mt-4 list-decimal list-inside space-y-1 text-gray-700">
              <li>Apply online through the UK government website.</li>
              <li>Pay the visa fee.</li>
              <li>Book an appointment at a visa application center.</li>
              <li>Provide biometric data.</li>
              <li>Wait for visa processing.</li>
            </ol>
          </motion.div>

          {/* Canada */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-blue-950">Canada</h3>
            <ol className="mt-4 list-decimal list-inside space-y-1 text-gray-700">
              <li>Complete the online application form.</li>
              <li>Pay the application fee.</li>
              <li>Provide biometrics if required.</li>
              <li>Attend an interview if needed.</li>
              <li>Wait for visa decision.</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       
      </motion.div>
    </div>
  );
};

export default VisitorVisa;
