import React from 'react';
import QuickNumbers from '../components/QuickNumbers';
import Events from '../components/Events';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Choose from '../components/Choose';
import Register from '../components/Register';

function AboutUs() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      {/* Responsive container */}
      <div className="container mx-auto">
        
        {/* Choose Section */}
        <div className="w-full my-8">
          <Choose />
        </div>

        {/* QuickNumbers Section */}
        <div className="w-full my-8">
          <QuickNumbers />
        </div>

        {/* Events Section */}
        
          <Events />
        </div>

        {/* WhatPeopleAreSaying Section */}
        
          <WhatPeopleAreSaying />
       

        {/* Register Section */}
        <div className="w-full my-8">
          <Register />
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
