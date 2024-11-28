import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Partners = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-poppins text-customBlue mb-4">Partner with D2 Global</h1>
          <p className="text-lg text-black font-openSans">
            At D2 Global, we are always looking for like-minded businesses to join hands and grow together.
            If you're interested in partnering with us, please reach out using the contact details below.
          </p>
        </div>

        {/* Why Partner Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">Why Partner with Us?</h2>
          <ul className="list-disc list-inside text-black space-y-2">
            <li>Expand your reach by collaborating with an industry-leading immigration company.</li>
            <li>Leverage our expertise in visa processing and global education consultancy.</li>
            <li>Access a wide network of international clients and business opportunities.</li>
            <li>Grow together with a trusted partner committed to mutual success.</li>
          </ul>
        </div>

        {/* How to Get Started Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">How to Get Started?</h2>
          <p className="text-black font-openSans">
            Contact us today to discuss how we can collaborate and create value for each other. We're excited to hear from you!
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-customYellow font-lora mb-4">Contact Details</h2>
          <p className="text-black font-openSans">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@d2global.in" className="text-customBlue hover:underline">info@d2global.in</a>
          </p>
          <p className="text-gray-700 font-openSans">
            <i className="fas fa-phone mr-2"></i>
            +91 98789 90455
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold font-poppins mb-2">Visit Us Today!</h3>
            <p className="text-gray-700 font-openSans">
              <strong>Main Branch</strong><br />
              Maks Shopping Plaza,<br />
              Dugri Road, Model Town,<br />
              Ludhiana
            </p>
            <p className="text-gray-700 font-openSans mt-4">
              <strong>Sub Branch</strong><br />
              Rattan Bazar Adda,<br />
              Near Hungry Point Restaurant,<br />
              Jodhan, Ludhiana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;