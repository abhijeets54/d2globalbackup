import React, { useState } from 'react';
import { Container } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';

const customStyles = `
  .hexagon-logo {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 50px;
  }

  @keyframes slideDown {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .slide-down {
    animation: slideDown 0.3s ease-out forwards;
  }

  .dropdown-hover > ul {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    transform: translateY(-10px);
  }

  .dropdown-hover:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .sub-dropdown > ul {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    transform: translateX(-10px);
  }

  .sub-dropdown:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About Us', slug: '/AboutUs' },
    { name: 'Success Stories', slug: '/SuccessStories' },
    {
      name: 'Visa',
      slug: '/StudyCan',
      dropdown: [
        {
          name: 'Study Visa',
          slug: '/StudyAbroad',
          subDropdown: [
            { name: 'Study in UK', slug: '/StudyUK' },
            { name: 'Study in Canada', slug: '/StudyCan' },
            { name: 'Study in Australia', slug: '/StudyAus' },
            { name: 'Study in USA', slug: '/StudyUSA' },
            { name: 'Study in Europe', slug: '/StudyEurope' },
            { name: 'Study in Dubai', slug: '/StudyDubai' },
          ],
        },
        { name: 'Visitor Visa', slug: '/VisitorVisa' },
        { name: 'Tourist Visa', slug: '/TouristVisa' },
        { name: 'Permanent Residency', slug: '/PR' },
      ],
    },
    {
      name: 'Language Coaching',
      slug: '/Training',
      dropdown: [
        { name: 'IELTS', slug: '/IELTSCoaching' },
        { name: 'PTE', slug: '/PTECoaching' },
      ],
    },
    { name: 'Contact Us', slug: '/Contactpage' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (e, slug) => {
    e.preventDefault();
    navigate(slug);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{customStyles}</style>

      <header className="bg-customBlue text-customYellow relative shadow-md">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center relative min-h-[80px]">
            <div className="flex items-center relative flex-shrink-0 w-full lg:w-auto mb-4 lg:mb-0">
              <button
                onClick={(e) => handleNavigation(e, '/')}
                className="hexagon-logo absolute w-[80px] h-[92px] bg-customBlue top-2 left-4 flex justify-center items-center shadow-xl z-20"
              >
                <img src="/logo.png" alt="D2 Global Logo" className="w-[85%] h-auto object-contain" />
              </button>
              <div className="ml-16 text-3xl font-bold">D2 Global</div>
            </div>

            <div className="flex flex-col items-center lg:items-end space-y-2">
              <nav className="hidden lg:block">
                <ul className="flex space-x-4">
                  {navItems.map((item) => (
                    <li key={item.name} className="relative dropdown-hover">
                      <a
                        href={item.slug}
                        onClick={(e) => handleNavigation(e, item.slug)}
                        className={`px-2 py-1 ${
                          location.pathname === item.slug ? 'font-bold' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="lg:hidden absolute top-2 right-2">
              <button onClick={toggleMenu} className="text-customYellow">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-customBlue text-customYellow z-50 p-4 slide-down">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.slug}
                  onClick={(e) => handleNavigation(e, item.slug)}
                  className="block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
