import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorldMapContact = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const countries = {
    UK: { x: 470, y: 140, name: 'United Kingdom' },
    Canada: { x: 220, y: 130, name: 'Canada' },
    Europe: { x: 500, y: 150, name: 'Europe' },
    USA: { x: 200, y: 180, name: 'United States' },
    Dubai: { x: 580, y: 200, name: 'Dubai' },
    Australia: { x: 750, y: 350, name: 'Australia' }
  };

  const handlePinClick = (country, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedCountry(country);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h1 className="text-2xl font-bold text-center mb-8">Select Your Destination</h1>
          
          <div className="relative">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
            >
              {/* Detailed World Map SVG */}
              <path
                d="M 150 200 C 150 150, 250 100, 300 150 C 350 200, 400 250, 450 200 C 500 150, 550 100, 600 150 C 650 200, 700 250, 750 200"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              
              {/* North America */}
              <path
                d="M 100 100 
                   C 150 80, 200 90, 250 120
                   C 300 150, 280 200, 250 250
                   C 220 300, 150 280, 100 250
                   C 50 220, 50 150, 100 100"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />
              
              {/* Europe */}
              <path
                d="M 450 120
                   C 500 100, 550 110, 580 140
                   C 610 170, 600 220, 580 250
                   C 560 280, 500 270, 450 250
                   C 400 230, 400 150, 450 120"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />
              
              {/* Australia */}
              <path
                d="M 700 300
                   C 750 280, 800 290, 830 320
                   C 860 350, 850 400, 830 430
                   C 810 460, 750 450, 700 430
                   C 650 410, 650 330, 700 300"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />

              {/* Location Pins with Animations */}
              {Object.entries(countries).map(([code, { x, y, name }], index) => (
                <motion.g
                  key={code}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.2
                  }}
                  onClick={(e) => handlePinClick(code, e)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Pin SVG */}
                  <g transform={`translate(${x},${y})`}>
                    <circle r="8" fill="#3b82f6" />
                    <motion.circle
                      r="12"
                      fill="#3b82f6"
                      opacity="0.3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    />
                    <path
                      d="M0,-12 L4,-4 L-4,-4 Z"
                      fill="#3b82f6"
                    />
                    <text
                      y="-20"
                      textAnchor="middle"
                      className="text-sm font-medium fill-gray-700"
                    >
                      {name}
                    </text>
                  </g>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Modal Form with Fixed Position */}
        <AnimatePresence>
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking form
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Contact Us - {selectedCountry}</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ×
                  </button>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    type="submit"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorldMapContact;