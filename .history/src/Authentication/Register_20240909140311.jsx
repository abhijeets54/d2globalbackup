import React, { useEffect, useRef, useState } from 'react';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  // Intersection Observer to handle the animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        ref={formRef}
        className="flex flex-col md:flex-row items-center justify-center p-8 bg-white shadow-md rounded-lg md:max-w-6xl w-full"
      >
        {/* Google Form Embed Section */}
        <div
          className={`md:w-1/2 w-full p-4 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-center text-3xl font-bold mb-6">Feel Free to Contact Us</h2>
          <div className="w-full h-96">
            <iframe
              src="YOUR_GOOGLE_FORM_URL_HERE"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Us Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`md:w-1/2 w-full p-4 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src="/student.webp"
            alt="Contact"
            className="w-full h-auto object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
