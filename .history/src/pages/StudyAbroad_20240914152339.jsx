import React from 'react';

const StudyAbroad = () => {
  return (
    <div className="p-6 md:p-12">
      {/* Main Section */}
      <section className="mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Study Visa Solutions for Global Opportunities</h1>
        <p className="text-lg md:text-xl">
          At D2 Global Immigration, we provide comprehensive study visa services for major destinations worldwide, including Canada, Australia, USA, UK, Europe, and more. Our mission is to guide students step-by-step, ensuring they make informed decisions from course selection to visa applications, delivering a seamless experience.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Expert guidance for selecting the right course and country.</li>
          <li>Personalized support throughout the admission and visa process.</li>
          <li>Assistance with document preparation and interview readiness.</li>
          <li>Proven track record of visa success across 300+ institutions globally.</li>
          <li>End-to-end transparent and streamlined service.</li>
        </ul>
      </section>

      {/* Our Process */}
      <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Our Process</h2>
        <div className="space-y-5">
          <div>
            <h3 className="text-lg md:text-2xl font-bold">Step 1: Consultation</h3>
            <p className="text-base md:text-lg">
              We begin by understanding your aspirations, academic background, and preferences. Our expert counselors guide you in choosing the best country and course based on your goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-bold">Step 2: Application Assistance</h3>
            <p className="text-base md:text-lg">
              Our team assists with the entire application process, including admission forms, SOPs, and supporting documents. We ensure your profile is presented in the best way possible to universities.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-bold">Step 3: Visa Filing & Preparation</h3>
            <p className="text-base md:text-lg">
              We help you with the visa application process, preparing you for interviews, and ensuring all documents are in place for a hassle-free visa approval.
            </p>
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Global Reach</h2>
        <p className="text-lg md:text-xl">
          With over 1,250 universities and 140,000 programs across leading study destinations, including the USA, UK, Canada, Australia, Europe, and New Zealand, we provide students with the best academic opportunities around the globe.
        </p>
      </section>

      {/* Popular Destinations */}
      <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Popular Study Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold">Canada</h3>
            <p className="text-base">With world-class universities and a high standard of living, Canada is a top choice for students.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Australia</h3>
            <p className="text-base">Australia’s research-intensive education and post-study work opportunities make it ideal for academic growth.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">United States</h3>
            <p className="text-base">The USA offers unparalleled educational diversity with top-ranking institutions across all fields.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">UK</h3>
            <p className="text-base">Renowned for its historical universities and innovative academic methods, the UK remains a prime destination.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">New Zealand</h3>
            <p className="text-base">Offering a blend of quality education and work opportunities, New Zealand is an emerging hub for students.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Europe</h3>
            <p className="text-base">Europe offers affordable education, cutting-edge research, and a rich cultural experience.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">Ready to Start Your Study Abroad Journey?</h2>
        <p className="text-lg md:text-xl mb-4">
          Let D2 Global Immigration guide you through every step of the process. From selecting a program to getting your visa, we are here to make your dreams of studying abroad a reality.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Get in Touch</button>
      </section>
    </div>
  );
};

export default StudyAbroad;
