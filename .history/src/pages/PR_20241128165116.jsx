import React from 'react';
import prImage from '/pr.jpg';
import QuickNumbers from '../components/QuickNumbers';
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import WorldMapContact from '../components/ContactSystem';

const PR = () => {
  return (
    <>
    <div className='pt-24 bg-white'></div>
      <div className="w-full bg-white px-4 sm:px-6 md:px-8 py-5 pt-28">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-left text-black">
          Permanent Residency Program
        </h1>

        {/* Initial Text */}
        <p className="text-lg text-left text-black mb-6">
          We at D2 Global Immigration provide consultancy for the Permanent Residency program under Express Entry for Canada. We offer a free assessment to our clients, followed by a detailed counseling session, explaining the entire process. Our services include explaining the point-based system for Canada PR, the requirements, the filing process, and the fee structure—all with complete transparency. Visit our nearest branch to get your profile assessed.
        </p>

        {/* Image */}
        <div className="w-[50%] h-[50%] mx-36 flex justify-center mb-8">
          <img src={prImage} alt="Permanent Residency Consultation" className="rounded-lg shadow-md w-full md:w-2/3" />
        </div>

        <QuickNumbers/>
        <br />
        
        {/* Further Details */}
        <div className="text-lg text-left text-black space-y-4">
          <p>
            Migration overseas is an exciting opportunity for various reasons, such as acquiring a higher professional degree, settling down permanently, or working abroad. Citizens worldwide are moving to other countries for better financial prospects and professional challenges. Immigration to countries such as Canada, Australia, and the UK is highly sought after, but gaining permanent residency can be complex.
          </p>

          <p>
            D2 Global Immigration, as one of the best PR consultants, helps simplify this process by offering expert guidance. Whether it's understanding the point-based system or navigating the various requirements of the PR application, we ensure you receive comprehensive support.
          </p>
        </div>

        {/* Steps Section with Dynamic Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Step 1 */}
          <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-black mb-2 text-left">Research Immigration Policies</h3>
            <p className="text-black text-left">
              Understand the immigration laws and policies of the country where you wish to obtain permanent residency.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-black mb-2 text-left">Choose the Right Program</h3>
            <p className="text-black text-left">
              Many countries offer different programs such as skilled worker or family sponsorship for permanent residency.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-black mb-2 text-left">Gather Required Documentation</h3>
            <p className="text-black text-left">
              Ensure you have all the necessary documents, including identification, proof of work experience, and language test results.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-10 text-lg text-left text-black space-y-4">
          <p>
            D2 Global Immigration consultants provide personalized support to help you achieve permanent residency in countries like Canada, the UK, Australia, and more. Our experienced consultants will guide you through every step, from document preparation to interview preparation, ensuring a smooth and successful process.
          </p>
          <p>
            Contact us today to start your journey towards permanent residency and secure your future abroad!
          </p>
        </div>
      </div>
      
      {/* Added WorldMapContact component */}
      <WorldMapContact/>
    </>
  );
};

export default PR;