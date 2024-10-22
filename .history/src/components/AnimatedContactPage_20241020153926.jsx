import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';
import Register from './Register'; // Assuming this is your form component

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const pinData = [
  { name: 'UK', coordinates: [-0.1276, 51.5074] },
  { name: 'Canada', coordinates: [-106.3468, 56.1304] },
  { name: 'USA', coordinates: [-95.7129, 37.0902] },
  { name: 'Dubai', coordinates: [55.2708, 25.2048] },
  { name: 'Australia', coordinates: [133.7751, -25.2744] },
  { name: 'Europe', coordinates: [10.4515, 51.1657] }, // Approximation
];

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePinClick = (country) => {
    setSelectedCountry(country);
    setIsFormOpen(true);
  };

  return (
    <div className="relative flex justify-between items-start">
      {/* Map Section */}
      <div className="w-2/3 p-6">
        <ComposableMap projectionConfig={{ scale: 200 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#DDD" stroke="#FFF" />
              ))
            }
          </Geographies>

          {pinData.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <motion.circle
                cx={0}
                cy={0}
                r={10}
                fill="red"
                stroke="#fff"
                strokeWidth={2}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                onClick={() => handlePinClick(name)}
              />
              <text
                textAnchor="middle"
                y={25}
                style={{ fontFamily: 'system-ui', fill: '#5D5A6D', fontSize: '10px' }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Register preferredCountry={selectedCountry} onClose={() => setIsFormOpen(false)} />
        </motion.div>
      )}

      {/* Additional content to the right */}
      <div className="w-1/3 bg-white p-4">
        <h2>Visit Us Today!</h2>
        {/* Place your branch details here */}
      </div>
    </div>
  );
};

export default WorldMap;
