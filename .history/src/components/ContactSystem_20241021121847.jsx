import React, { useState } from 'react';

const WorldMapContact = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Updated coordinates to match the black world map image
  const countries = {
    UK: { x: 485, y: 160, name: 'United Kingdom' },
    Canada: { x: 240, y: 150, name: 'Canada' },
    Europe: { x: 510, y: 170, name: 'Europe' },
    USA: { x: 250, y: 200, name: 'United States' },
    Dubai: { x: 620, y: 230, name: 'Dubai' },
    Australia: { x: 800, y: 380, name: 'Australia' }
  };

  const handlePinClick = (country, e) => {
    e.stopPropagation();
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
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-8">Select Your Destination</h1>

          <div className="relative">
            <svg viewBox="0 0 1000 500" className="w-full h-auto">
              <image href="/register/world.svg" width="100%" height="100%" />

              {Object.entries(countries).map(([code, { x, y, name }]) => (
                <g
                  key={code}
                  onClick={(e) => handlePinClick(code, e)}
                  className="cursor-pointer transform transition-transform hover:scale-110"
                >
                  <image 
                    href="/register/pin.svg" 
                    x={x - 12} 
                    y={y - 24} 
                    width="24" 
                    height="24" 
                  />
                  {/* Updated text styling for better visibility */}
                  <text
                    x={x}
                    y={y - 30}
                    textAnchor="middle"
                    className="text-sm font-bold"
                    fill="white"
                    stroke="black"
                    strokeWidth="0.5"
                  >
                    {name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {showForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeForm}
          >
            <div
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
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMapContact;