import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Countries() {
  const canadaImageUrl = '/canada.webp';
  const australiaImageUrl = '/aus.webp';
  const usaImageUrl = '/usa2.webp';
  const ukImageUrl = '/uk.webp';
  const europeImageUrl = '/eur.webp';
  const dubaiImageUrl = '/dub.webp';
  const canadaFlagUrl = '/cflag.svg';
  const australiaFlagUrl = '/aflag.png';
  const usaFlagUrl = '/usaflag.webp';
  const ukFlagUrl = '/ukflag.svg';
  const europeFlagUrl = '/euflag.svg';
  const dubaiFlagUrl = '/dflag.svg';

  return (
    <div className="mx-auto bg-customBlue p-6 md:p-10 shadow">
      <h2 className="text-center text-customYellow text-3xl sm:text-4xl mt-3 font-serif font-extrabold mb-10 md:mb-16">Choose your Favourite Country</h2>

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
                <h5 className="text-xl font-bold font-poppins">Canada</h5> {/* Applied Poppins font */}
                <p className="text-sm text-gray-700 mt-2 font-mukta"> {/* Applied Mukta font */}
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
                <h5 className="text-xl font-bold font-poppins">Australia</h5> {/* Applied Poppins font */}
                <p className="text-sm text-gray-700 mt-2 font-mukta"> {/* Applied Mukta font */}
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
                <h5 className="text-xl font-bold font-poppins">USA</h5> {/* Applied Poppins font */}
                <p className="text-sm text-gray-700 mt-2 font-mukta"> {/* Applied Mukta font */}
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
                <h5 className="text-xl font-bold font-poppins">United Kingdom</h5> {/* Applied Poppins font */}
                <p className="text-sm text-gray-700 mt-2 font-mukta"> {/* Applied Mukta font */}
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
                <h5 className="text-xl font-bold font-poppins">Europe</h5> {/* Applied Poppins font */}
                <p className="text-sm text-gray-700 mt-2 font-mukta"> {/* Applied Mukta font */}
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
                <h5 className="text-xl font-bold font-poppins">Dubai</h5> {/* Applied Poppins font */}
                <p className="text-sm text-gray-700 mt-2 font-mukta"> {/* Applied Mukta font */}
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
