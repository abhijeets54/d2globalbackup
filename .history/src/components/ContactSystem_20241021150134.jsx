import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorldMapContact = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const countries = {
    UK: { x: 540, y: 120, name: 'United Kingdom' }, // Adjusted x and y for UK (moved left and up)
    Canada: { x: 220, y: 100, name: 'Canada' },
    Europe: { x: 630, y: 140, name: 'Europe' }, // Adjusted slightly for Europe
    USA: { x: 290, y: 180, name: 'United States' }, // Adjusted x and y for US (moved slightly down)
    Dubai: { x: 710, y: 230, name: 'Dubai' },
    Australia: { x: 910, y: 380, name: 'Australia' },
  };

  const handlePinClick = (country, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedCountry(country);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedCountry(null);
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
            {/* World map with a custom image */}
            <svg viewBox="0 0 1200 600" className="w-full h-auto">
              <image href="/register/world.svg" width="100%" height="100%" />

              {/* Custom pins */}
              {Object.entries(countries).map(([code, { x, y, name }], index) => (
                <motion.g
                  key={code}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.2,
                  }}
                  onClick={(e) => handlePinClick(code, e)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  <image href="/register/pin.svg" x={x - 12} y={y - 24} width="24" height="24" />
                  <rect
                    x={x - 50}
                    y={y - 28}
                    width="100"
                    height="24"
                    fill="white"
                    opacity="1"
                    rx="5"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={x}
                    y={y - 10}
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
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={closeForm}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Contact Us - {selectedCountry}</h2>
                  <button
                    onClick={closeForm}
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
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
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