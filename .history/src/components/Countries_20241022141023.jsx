import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Countries() {
  const canadaImageUrl = '/canada.webp'; // Update with actual image URL
  const australiaImageUrl = '/aus.webp'; // Update with actual image URL
  const usaImageUrl = '/usa2.webp'; // Update with actual image URL
  const ukImageUrl = '/uk.webp'; // Update with actual image URL
  const europeImageUrl = '/eur.webp'; // Update with actual image URL
  const dubaiImageUrl = '/dub.webp'; // Update with actual image URL
  const canadaFlagUrl = '/cflag.svg'; // Update with actual flag URL
  const australiaFlagUrl = '/aflag.png'; // Update with actual flag URL
  const usaFlagUrl = '/usaflag.webp'; // Update with actual flag URL
  const ukFlagUrl = '/ukflag.svg'; // Update with actual flag URL
  const europeFlagUrl = '/euflag.svg'; // Update with actual flag URL
  const dubaiFlagUrl = '/dflag.svg'; // Update with actual flag URL

  return (
    <div className="mx-auto bg-customBlue p-6 md:p-10 shadow">
      <h2 className="text-center text-customYellow text-3xl sm:text-4xl mt-3 font-serif font-extrabold mb-10 md:mb-16">
        Choose your Favourite Country
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Country Card: Canada */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyCan">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              <img src={canadaImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Canada" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={canadaFlagUrl} className="w-10 h-10 rounded-full" alt="Canada Flag" />
              </div>
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold font-poppins"> {/* Use Poppins font */}
                  Canada
                </h5>
                <p className="text-sm font-semibold text-gray-700 mt-2">
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
              <img src={australiaImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Australia" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={australiaFlagUrl} className="w-10 h-10 rounded-full" alt="Australia Flag" />
              </div>
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold font-poppins"> {/* Use Poppins font */}
                  Australia
                </h5>
                <p className="text-sm font-semibold text-gray-700 mt-2">
                  Explore educational opportunities in the land of beaches and wildlife.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: USA */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyUSA">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              <img src={usaImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="USA" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={usaFlagUrl} className="w-10 h-10 rounded-full" alt="USA Flag" />
              </div>
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold font-poppins"> {/* Use Poppins font */}
                  USA
                </h5>
                <p className="text-sm font-semibold text-gray-700 mt-2">
                  Pursue your studies in the USA with its diverse programs and campuses.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: UK */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyUK">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              <img src={ukImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="UK" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={ukFlagUrl} className="w-10 h-10 rounded-full" alt="UK Flag" />
              </div>
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold font-poppins"> {/* Use Poppins font */}
                  United Kingdom
                </h5>
                <p className="text-sm font-semibold text-gray-700 mt-2">
                  Experience world-renowned universities and vibrant city life.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: Europe */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyEurope">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              <img src={europeImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Europe" />
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold font-poppins"> {/* Use Poppins font */}
                  Europe
                </h5>
                <p className="text-sm  text-gray-700 mt-2">
                  Discover opportunities across European universities and cultures.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Country Card: Dubai */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyDubai">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              <img src={dubaiImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Dubai" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={dubaiFlagUrl} className="w-10 h-10 rounded-full" alt="Dubai Flag" />
              </div>
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold font-poppins"> {/* Use Poppins font */}
                  Dubai
                </h5>
                <p className="text-sm text-gray-700 mt-2">
                  Study in Dubai, a growing hub of innovation and technology in the UAE.
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
