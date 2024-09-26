import React from 'react';
import 'tailwindcss/tailwind.css';

const logos = [
  '/oxford.webp',
  '/regent.webp',
  '/webster.webp',
  '/avila.svg',
  '/iau.webp',
  '/bcnlip.webp',
  '/camino.webp',
  '/ihmgs.webp',
  '/uclan.webp',
  '/aura.webp',
  '/lyon.webp'
];

function OurAssociates() {
  return (
    <div className="bg-white py-10"> {/* Reduced padding */}
      <h4 className="text-center text-blue-950 mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold">
        OUR PARTNERS
      </h4>
      <br />
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll space-x-6 sm:space-x-8 lg:space-x-10">
          {/* Duplicating logos to create seamless infinite scroll */}
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                className="h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
      {/* Adding additional space at the bottom */}
      <div className="mt-10"></div>
    </div>
  );
}

export default OurAssociates;
