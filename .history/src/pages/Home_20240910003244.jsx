import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Collage from '../components/Collage';
import Offer from '../components/Offer';
import QuickNumbers from '../components/QuickNumbers';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import Register from '../components/Register';
import Countries from '../components/Countries';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import About from '../components/About';
import Choose from '../components/Choose';

function Home() {
  const navigate = useNavigate();
  const [showFullText, setShowFullText] = useState(false);

  // Create a ref for the Offer section
  const offerRef = useRef(null);

  const handleLearnMoreScroll = () => {
    // Scroll to the "Offer" section when "Learn More" is clicked
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <QuickEnquiry />
      {/* Pass the handleLearnMoreScroll function as a prop to Collage */}
      <Collage onLearnMore={handleLearnMoreScroll} />

      <About />
      <QuickNumbers />
      <Choose />
      
      {/* Attach the ref to the Offer component */}
      <Offer ref={offerRef} />

      <Countries />
      <WhatPeopleAreSaying />
      <Register />
    </>
  );
}

export default Home;
