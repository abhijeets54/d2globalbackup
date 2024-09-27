import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Collage from '../components/Collage';
import OurAssociates from '../components/OurAssociates';
import QuickNumbers from '../components/QuickNumbers';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';

import Register from '../components/Register';

import About from '../components/About';
import Offer from '../components/Offer';
import Countries from '../components/Countries';
import PopupForm from '../components/PopupForm';
import Events from '../components/Events';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import Choose from '../components/Choose';
import People from '../components/People';
import Plane from '../components'
function Home() {
  const navigate = useNavigate();
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    navigate('/About');
  };

  const handleMoreAboutUs = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
    <P
      {/* <PopupForm /> */}
      <QuickEnquiry />
      <Collage />
      
        <About />
        {/* <People/> */}
        <QuickNumbers />
        <Choose/>
        <Offer />

        {/* <Timeline /> */}

       
         
            <Countries />
           
          
            <OurAssociates />
          
          <WhatPeopleAreSaying />
          {/* <Events /> */}
          
          <Register />
        

    </>
  );
}

export default Home;
