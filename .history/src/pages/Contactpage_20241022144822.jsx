import React from 'react';
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import WorldMapContact from '../components/ContactSystem';


function Contactpage() {
  return (
    <> <div className='bg-white'>
      <div>
        {/* <Register />
        <QuickEnquiry /> */}

        {/* Heading above the Google Maps box */}
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-gray-700">Our Location</h2>
        </div>

        {/* Google Maps Location with Larger Box and Extra Spacing */}
        <div className="flex bg-white justify-center ">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-2xl w-full">
            <div className="relative overflow-hidden pb-[56.25%] h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0981680924483!2d75.84533397619774!3d30.88391467830946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8256b1dba32d%3A0x89337467ae3275ed!2sD2%20Global!5e0!3m2!1sen!2sin!4v1728041069574!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contactpage;
