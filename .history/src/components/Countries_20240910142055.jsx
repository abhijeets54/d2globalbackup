import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Countries() {
  const canadaImageUrl = '/canada.webp'; // Update with actual image URL
  const australiaImageUrl = '/aus.webp'; // Update with actual image URL
  const newZealandImageUrl = '/nz.webp'; // Update with actual image URL
  const ukImageUrl = '/uk.webp'; // Update with actual image URL
  const canadaFlagUrl = '/cflag.svg'; // Update with actual flag URL
  const australiaFlagUrl = '/aflag.png'; // Update with actual flag URL
  const newZealandFlagUrl = '/nzflag.svg'; // Update with actual flag URL
  const ukFlagUrl = '/ukflag.svg'; // Update with actual flag URL

  return (
    <div className="mx-auto bg-slate-100 p-6 md:p-10 shadow">
      <h4 className="text-center text-orange-500 mt-3 text-xl"></h4>
      <h2 className="text-center text-3xl sm:text-4xl mt-3 font-bold mb-10 md:mb-16">Choose your Favourite Country</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Country Card: Canada */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyCan">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              {/* Country Image */}
              <img src={canadaImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Canada" />

              {/* Circular Flag */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={canadaFlagUrl} className="w-10 h-10 rounded-full" alt="Canada Flag" />
              </div>

              {/* Country Info */}
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold">Canada</h5>
                <p className="text-sm text-gray-700 mt-2">
                  Study in Canada for world-class education and beautiful landscapes.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: Australia */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyAus">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              {/* Country Image */}
              <img src={australiaImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Australia" />

              {/* Circular Flag */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={australiaFlagUrl} className="w-10 h-10 rounded-full" alt="Australia Flag" />
              </div>

              {/* Country Info */}
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold">Australia</h5>
                <p className="text-sm text-gray-700 mt-2">
                  Explore educational opportunities in the land of beaches and wildlife.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: New Zealand */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/NewZealand">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              {/* Country Image */}
              <img src={newZealandImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="New Zealand" />

              {/* Circular Flag */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={newZealandFlagUrl} className="w-10 h-10 rounded-full" alt="New Zealand Flag" />
              </div>

              {/* Country Info */}
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold">New Zealand</h5>
                <p className="text-sm text-gray-700 mt-2">
                  Study in a peaceful country known for its high-quality education.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: UK */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyUK">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              {/* Country Image */}
              <img src={ukImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="UK" />

              {/* Circular Flag */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={ukFlagUrl} className="w-10 h-10 rounded-full" alt="UK Flag" />
              </div>

              {/* Country Info */}
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold">United Kingdom</h5>
                <p className="text-sm text-gray-700 mt-2">
                  Experience world-renowned universities and vibrant city life.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Countries;
