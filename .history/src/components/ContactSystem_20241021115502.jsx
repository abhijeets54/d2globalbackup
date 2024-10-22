import React, { useState } from 'react';

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
    e.stopPropagation();
    setSelectedCountry(country);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowForm(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-8">Select Your Destination</h1>
          
          <div className="relative">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
            >
              {/* You'll replace these paths with your downloaded SVG map */}
              <path
                d="M 100 100 
                   C 150 80, 200 90, 250 120
                   C 300 150, 280 200, 250 250
                   C 220 300, 150 280, 100 250
                   C 50 220, 50 150, 100 100"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />
              
              {/* Location Pins */}
              {Object.entries(countries).map(([code, { x, y, name }]) => (
                <g
                  key={code}
                  onClick={(e) => handlePinClick(code, e)}
                  className="cursor-pointer transform transition-transform hover:scale-110"
                >
                  <g transform={`translate(${x},${y})`}>
                    <circle r="8" fill="#3b82f6" />
                    <circle r="12" fill="#3b82f6" fillOpacity="0.3" />
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
                </g>
              ))}
            </svg>
          </div>
        </div>

        {showForm && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleOverlayClick}
          >
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Contact Us - {selectedCountry}</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMapContact;