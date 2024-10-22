import React from 'react';
import Choose from '../components/Choose';
import Countries from '../components/Countries';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';

const StudyAbroad = () => {
  return (
    <>
      {/* <QuickEnquiry /> */}
      <div className="p-6 bg-white md:p-12 text-left">
        {/* Main Section */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-left">Study Visa Solutions for Global Opportunities</h1>
          <p className="text-lg md:text-xl text-left">
            At D2 Global Immigration, we provide comprehensive study visa services for major destinations worldwide, including Canada, Australia, USA, UK, Europe, and more. Our mission is to guide students step-by-step, ensuring they make informed decisions from course selection to visa applications, delivering a seamless experience.
          </p>
        </section>
      </div>
      <Choose />
      <QuickNumbers />

      {/* Our Reach */}
      <div className="bg-white p-6 md:p-12 text-left">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Global Reach</h2>
        <p className="text-lg md:text-xl">
          With over 1,250 universities and 140,000 programs across leading study destinations, including the USA, UK, Canada, Australia, Europe, and New Zealand, we provide students with the best academic opportunities around the globe.
        </p>
        <br />
      </div>

      <Countries />
      <OurAssociates />
      <WhatPeopleAreSaying/>

      {/* Contact Section */}
      <section className="bg-white p-6 md:p-12 text-left rounded-lg">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Ready to Start Your Study Abroad Journey?</h2>
        <p className="text-lg md:text-xl mb-4">
          Let D2 Global Immigration guide you through every step of the process. From selecting a program to getting your visa, we are here to make your dreams of studying abroad a reality.
        </p>
        <Register />
      </section>
    </>
  );
};

export default StudyAbroad;
