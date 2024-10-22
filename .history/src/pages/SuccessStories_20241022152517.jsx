import React from 'react'
import Choose from '../components/Choose';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import ResultsSlideshow from '../components/Results';
import Register from '../components/Register';
import WorldMapContact from '../components/ContactSystem';
import SimpleImageSlider from '../components/SimpleImageSlider';


function SuccessStories() {
  return (
   <>
   <SimpleImageSlider/>
   <Choose />
   <QuickNumbers />
   <OurAssociates />
   {/* <WhatPeopleAreSaying />
   <ResultsSlideshow />
   <Register /> */}
   <WorldMapContact/>
   </>
  )
}

export default SuccessStories
