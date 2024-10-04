import React from 'react';
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';

function Contactpage() {
  return (
    <> <div className='bg-white'>
      <div>
        <Register />
        <QuickEnquiry />

        {/* Heading above the Google Maps box */}
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-gray-700">Our Location</h2>
        </div>

        {/* Google Maps Location with Larger Box and Extra Spacing */}
        <div className="flex bg-white justify-center ">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-2xl w-full">
            <div className="relative overflow-hidden pb-[56.25%] h-0">
              <iframe
                src="https://maps.app.goo.gl/oDE98e2EjswQ5Yyx6?g_st=iw"
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
