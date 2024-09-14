import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components';
import Collage from '../components/Collage';
import ChairmanAddress from '../components/ChairmanAddress';
import ThreePillars from '../components/ThreePillars';
import OurAssociates from '../components/OurAssociates';
import QuickNumbers from '../components/QuickNumbers';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import DonateComponent from '../components/Donate/DonateComponent';
import Register from '../components/Register';
import Timeline from '../components/Timeline';
import imageUrl from '/IOC Website pictures/ioc website content/About us/team.png';
import About from '../components/About';
import Offer from '../components/Offer';
import Countries from '../components/Countries';
import PopupForm from '../components/PopupForm';
import Events from '../components/Events';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import Choose from '../components/Choose';
import P

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
      {/* <PopupForm /> */}
      <QuickEnquiry />
      <Collage />
      
        <About />
        <QuickNumbers />
        <Choose/>
        <Offer />

        <Timeline />

       
         
            <Countries />
            {/* <ChairmanAddress /> */}
            {/* <ThreePillars /> */}
            {/* <OurAssociates /> */}
          
          <WhatPeopleAreSaying />
          {/* <Events /> */}
          {/* <DonateComponent /> */}
          <Register />
        

    </>
  );
}

export default Home;
