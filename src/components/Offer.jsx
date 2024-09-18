import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Offer() {
  const studyAbroadImageUrl = '/student.webp'; // Update with actual image URL
  const ieltsPteImageUrl = '/ielts3.webp'; // Update with actual image URL
  const touristVisaImageUrl = '/tourist.webp'; // Update with actual image URL

  return (
    <div className="mx-auto bg-blue-950
    0 p-6 md:p-10 shadow">
      <h4 className="text-center text-blue-950 mt-3 text-xl"></h4>
      <h2 className="text-center text-3xl text-yellow-400 sm:text-4xl mt-3 font-bold mb-10 md:mb-16">What We Offer</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* First card: Study Abroad */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyAbroad">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={studyAbroadImageUrl} 
                className="w-full h-52 sm:h-64 md:h-72 object-cover" 
                alt="Study Abroad" 
              />
              <div className="p-4">
                <h5 className="text-center text-lg sm:text-xl font-bold">Study Abroad</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* Second card: IELTS/PTE */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/Training">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={ieltsPteImageUrl} 
                className="w-full h-52 sm:h-64 md:h-72 object-cover" 
                alt="IELTS/PTE" 
              />
              <div className="p-4">
                <h5 className="text-center text-lg sm:text-xl font-bold">Training</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* Third card: Tourist Visa */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/TouristVisa">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={touristVisaImageUrl} 
                className="w-full h-52 sm:h-64 md:h-72 object-cover" 
                alt="Tourist Visa" 
              />
              <div className="p-4">
                <h5 className="text-center text-lg sm:text-xl font-bold">Tourist Visa</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
