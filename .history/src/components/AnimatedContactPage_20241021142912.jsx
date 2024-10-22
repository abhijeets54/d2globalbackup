import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorldMap = ({ onCountrySelect }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = {
    UK: { x: 400, y: 140 },
    Canada: { x: 220, y: 130 },
    Europe: { x: 450, y: 150 },
    USA: { x: 200, y: 180 },
    Dubai: { x: 520, y: 220 },
    Australia: { x: 700, y: 350 }
  };

  const handlePinClick = (country) => {
    setSelectedCountry(country);
    setShowForm(true);
    onCountrySelect(country);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
      >
        {/* Simple world map paths */}
        <path
          d="M50,140 L750,140 L750,360 L50,360 Z"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        
        {/* North America */}
        <path
          d="M100,120 Q200,150 250,200 Q300,250 200,300"
          fill="#e2e8f0"
        />
        
        {/* Europe */}
        <path
          d="M400,120 Q450,150 500,180 Q520,200 480,250"
          fill="#e2e8f0"
        />
        
        {/* Australia */}
        <path
          d="M650,300 Q700,320 730,340 Q750,350 700,380"
          fill="#e2e8f0"
        />

        {/* Animated dropping pins */}
        {Object.entries(countries).map(([country, position], index) => (
          <motion.g
            key={country}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            onClick={() => handlePinClick(country)}
            style={{ cursor: 'pointer' }}
          >
            <motion.circle
              cx={position.x}
              cy={position.y}
              r="10" // Increased size
              fill="#3B82F6"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.path
              d={`M${position.x},${position.y - 10} L${position.x},${position.y + 10}`} // Adjusted path for bigger circle
              stroke="#3B82F6"
              strokeWidth="3" // Increased stroke width
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            />
            <text
              x={position.x}
              y={position.y - 20} // Adjusted position to match larger circle
              textAnchor="middle"
              className="text-sm md:text-base lg:text-lg fill-current" // Adjusted for larger text and responsiveness
            >
              {country}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Animated selection indicator */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm md:text-base lg:text-lg"
          >
            Selected: {selectedCountry}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main component that combines WorldMap with your existing Register form
const AnimatedContactPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <WorldMap onCountrySelect={handleCountrySelect} />
        
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-8"
            >
              <Register initialCountry={selectedCountry} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AnimatedContactPage;
