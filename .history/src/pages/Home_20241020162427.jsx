import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Collage from '../components/Collage';
import OurAssociates from '../components/OurAssociates';
import QuickNumbers from '../components/QuickNumbers';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import PassportServiceSlider from '../components/PassportServiceSlider';
import Register from '../components/Register';
import HoneycombBackground from '../components/HoneycombBackground';
import ContactSystem from '../components/ContactSystem';
import About from '../components/About';
import Offer from '../components/Offer';
import Countries from '../components/Countries';
import PopupForm from '../components/PopupForm';
import Events from '../components/Events';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import Choose from '../components/Choose';
import People from '../components/People';
import CollageWithAnimations from '../components/CollageWithAnimations';
import ResultsSlideshow from '../components/Results';
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
    <HoneycombBackground
   {/* <CollageWithAnimations/> */}
   {/* <PassportServiceSlider/> */}
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
            <ResultsSlideshow/>
          <WhatPeopleAreSaying />
         
          {/* <Events /> */}
          
          {/* <Register /> */}
          <ContactSystem/>
        

    </>
  );
}

export default Home;
