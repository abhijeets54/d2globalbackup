import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Countries() {
  const canadaImageUrl = '/canada.webp'; 
  const australiaImageUrl = '/aus.webp'; 
  const usaImageUrl = '/usa.webp'; 
  const ukImageUrl = '/uk.webp'; 
  const europeImageUrl = '/eur.webp'; 
  const dubaiImageUrl = '/dubai.webp'; // Update with actual image URL
  const canadaFlagUrl = '/cflag.svg'; 
  const australiaFlagUrl = '/aflag.png'; 
  const usaFlagUrl = '/usaflag.webp'; 
  const ukFlagUrl = '/ukflag.svg'; 
  const europeFlagUrl = '/euflag.svg'; 
  const dubaiFlagUrl = '/dubaiflag.svg'; // Update with actual flag URL

  return (
    <div className="mx-auto bg-slate-100 p-6 md:p-10 shadow">
      <h4 className="text-center text-orange-500 mt-3 text-xl"></h4>
      <h2 className="text-center text-3xl sm:text-4xl mt-3 font-bold mb-10 md:mb-16">Choose your Favourite Country</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Existing Country Cards: Canada, Australia, USA, UK, Europe */}
        {/* ... */}

        {/* Country Card: Dubai */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/StudyDubai">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden relative">
              <img src={dubaiImageUrl} className="w-full h-48 sm:h-64 md:h-72 object-cover" alt="Dubai" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <img src={dubaiFlagUrl} className="w-10 h-10 rounded-full" alt="Dubai Flag" />
              </div>
              <div className="p-4 text-center mt-12">
                <h5 className="text-xl font-bold">Dubai</h5>
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
