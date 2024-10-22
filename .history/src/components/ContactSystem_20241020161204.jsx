import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

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

  const handlePinClick = (country) => {
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
            {/* World Map SVG */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
            >
              {/* World map paths */}
              <path
                d="M150,50 L850,50 L850,450 L150,450"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              
              {/* North America */}
              <path
                d="M170,80 C250,80 280,150 280,200 C280,250 250,300 170,300 C90,300 60,250 60,200 C60,150 90,80 170,80Z"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />
              
              {/* Europe */}
              <path
                d="M450,100 C530,100 560,170 560,220 C560,270 530,320 450,320 C370,320 340,270 340,220 C340,170 370,100 450,100Z"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />
              
              {/* Australia */}
              <path
                d="M700,250 C780,250 810,320 810,370 C810,420 780,470 700,470 C620,470 590,420 590,370 C590,320 620,250 700,250Z"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />

              {/* Animated Location Pins */}
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
                  onClick={() => handlePinClick(code)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#3b82f6"
                    className="origin-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill="#3b82f6"
                    opacity="0.3"
                    className="origin-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />
                  <text
                    x={x}
                    y={y - 20}
                    textAnchor="middle"
                    className="text-sm font-medium fill-gray-700"
                  >
                    {name}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Modal Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Contact Us - {selectedCountry}</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorldMapContact;