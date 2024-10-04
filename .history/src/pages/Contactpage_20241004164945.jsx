import React from 'react';
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';

function Contactpage() {
  return (
    <>
      <div>
        <Register />
        <QuickEnquiry />

        {/* Heading above the Google Maps box */}
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-gray-700">Our Location</h2>
        </div>

        {/* Google Maps Location with Larger Box and Extra Spacing */}
        <div className="flex bg-white justify-center mt-6 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-2xl w-full">
            <div className="relative overflow-hidden pb-[56.25%] h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867463174487!2d144.95792961606264!3d-37.81636497975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1604120222901!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
