import React from 'react';

// Array containing people information
const people = [
  { name: 'Mr. Amardeep Singh', designation: 'Managing Director', image: '/amar.webp' },
  { name: 'Mr. Rajesh Sharma', designation: 'Business Development Manager', image: '/rajesh.webp' },
  { name: 'Ms. Rajwinder Kaur', designation: 'Social Media Manager', image: '/rajwinder.webp' },
  { name: 'Ms. Rishika Duggal', designation: 'General Manager', image: '/rishika.webp' },
  { name: 'Ms. Harpreet Kaur', designation: 'Customer Care Head', image: '/harry.webp' },
  { name: 'Ms. Shanu', designation: 'Finance Head', image: '/shanu.webp' }
];

const People = () => {
  return (
    <div className="people-container bg-blue-950 text-white p-6 sm:p-8 md:p-10">
      {/* Left text section */}
      <div className="mb-8 text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">OUR PEOPLE ARE OUR BRAND.</h1>
      </div>

      {/* Photos grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-md shadow-lg p-1"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32">
              <img
                src={person.image}
                alt={person.name}
                className="rounded-md w-full h-full object-cover mb-2"
              />
            </div>
            <h4 className="text-md sm:text-lg font-semibold text-gray-800">{person.name}</h4>
            <p className="text-xs sm:text-sm text-gray-600">{person.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
