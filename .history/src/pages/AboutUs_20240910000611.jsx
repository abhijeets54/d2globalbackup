import React , { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CustomImageList } from '../components'
import QuickNumbers from '../components/QuickNumbers'
import About from '../components/About'
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying'
import Events from '../components/Events'
import Choose from '../components/Choose';
import Register from '../components/Register'



function AboutUs() {
  return (<>
  <div className='w-full'></div>
          <Choose/>
          <QuickNumbers />
          <Events/>
          <WhatPeopleAreSaying /> 
          <Register/>
    </>
  )
}

export default AboutUs
