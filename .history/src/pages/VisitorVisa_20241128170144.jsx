import React from 'react';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import Register from '../components/Register';
import QuickNumbers from '../components/QuickNumbers';
import WorldMapContact from '../components/ContactSystem';

const VisitorVisa = () => {
  return (
    <>
    <div className='bg-white pt-28'>
      {/* Quick Enquiry Form */}
      <QuickEnquiry />

      {/* Main Content Section */}
      <div className="p-6 bg-white md:p-12 text-left">
        {/* Hero Section */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Explore the World with the Best Visitor Visa Consultants
          </h1>
          <p className="text-lg md:text-xl">
            Whether you are traveling for leisure, business, or to visit family and friends, our experienced team at D2 Global Immigration will ensure you get the best guidance to secure your visitor visa. Let us assist you in planning your journey with ease.
          </p>
          <img
            src="/visit.webp"
            alt="Travel World"
            className="mt-6 mx-auto rounded-lg shadow-lg w-[50%] h-[50%] md:w-2/3"
          />
        </section>
        <QuickNumbers/>
        <br />
        
        {/* Why Choose Us Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-3xl font-semibold mb-3">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl mb-4">
                At D2 Global Immigration, we are committed to providing you with expert guidance and support throughout your visa application process. Here’s why we stand out as the best choice:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                <li>Personalized Visa Solutions</li>
                <li>Expert Knowledge in Immigration Laws</li>
                <li>Fast, Reliable, and Transparent Process</li>
                <li>Affordable Pricing for All Visa Services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Visitor Visas */}
        <section className="mb-10">
          <h2 className="text-xl md:text-3xl font-semibold mb-3">Types of Visitor Visas</h2>
          <p className="text-lg md:text-xl">
            Depending on the purpose of your visit, we can help you obtain the following types of visitor visas:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-lg text-gray-700">
            <li>Tourist Visa</li>
            <li>Business Visa</li>
            <li>Medical Visa</li>
            <li>Family Visitor Visa</li>
          </ul>
        </section>

      
        {/* How to Apply Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-3xl font-semibold mb-3">How to Apply for a Visitor Visa</h2>
          <p className="text-lg md:text-xl">
            The visitor visa application process may vary depending on the country you're applying to. Below are the general steps involved:
          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-2 text-lg text-gray-700">
            <li>Complete the visa application form online.</li>
            <li>Pay the visa application fee.</li>
            <li>Submit your supporting documents.</li>
            <li>Schedule and attend an interview (if required).</li>
            <li>Wait for your visa decision.</li>
          </ul>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-white p-6 md:p-12 text-left rounded-lg">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">
          Ready to Explore the World?
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Let D2 Global Immigration guide you through the visitor visa application process with expert support every step of the way.
        </p>
        {/* <Register /> */}
        <WorldMapContact/>
      </section>
      </div>
    </>
  );
};

export default VisitorVisa;
