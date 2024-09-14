import React from 'react'
import { Container, CustomImageList } from '../components'
import QuickNumbers from '../components/QuickNumbers'
import About from '../components/About'
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying'
import Events from '../components/Events'



function AboutUs() {
  return (<>
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
          <About />
          <QuickNumbers />
          <Events/>
          <WhatPeopleAreSaying />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
    
  )
}

export default AboutUs
