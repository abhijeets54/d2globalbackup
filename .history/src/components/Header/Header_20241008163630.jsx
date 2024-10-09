import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';

const customStyles = `
  .underline-slide {
    position: relative;
    display: inline-block;
    font-weight: normal;
  }

  .underline-slide::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: yellow;
    transition: width 0.3s ease;
  }

  .underline-slide:hover::after {
    width: 100%;
  }

  .underline-slide:hover {
    font-weight: bold;
  }

  .active-page {
    font-weight: bold;
    border: none;
  }

  .mobile-menu-enter {
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  .mobile-menu-enter-active {
    transform: translateY(0);
    opacity: 1;
  }

  .mobile-menu-exit {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s ease-in;
  }

  .mobile-menu-exit-active {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About Us', slug: '/AboutUs' },
    {
      name: 'Study Abroad',
      slug: '/StudyAbroad',
      dropdown: [
        { name: 'Study in UK', slug: '/StudyUK' },
        { name: 'Study in Canada', slug: '/StudyCan' },
        { name: 'Study in Australia', slug: '/StudyAus' },
        { name: 'Study in USA', slug: '/StudyUSA' },
        { name: 'Study in Europe', slug: '/StudyEurope' },
        { name: 'Study in Dubai', slug: '/StudyDubai' },
      ],
    },
    {
      name: 'Visa',
      slug: '/visa',
      dropdown: [
        { name: 'Study Visa', slug: '/StudyAbroad' },
        { name: 'Visitor Visa', slug: '/VisitorVisa' },
        { name: 'Tourist Visa', slug: '/TouristVisa' },
        { name: 'Permanent Residency', slug: '/PR' },
      ],
    },
    {
      name: 'Language Coaching',
      slug: '/Training',
    },
    { name: 'Contact Us', slug: '/Contactpage' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavigation = (slug) => {
    navigate(slug);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Include custom styles in the header */}
      <style>{customStyles}</style>

      {/* Contact Information Section */}
      <div className="bg-customBlue py-2 text-customYellow text-sm">
  <div className="container mx-auto flex justify-end lg:justify-end items-center px-4 lg:px-8">
    <div className="flex space-x-6 items-center">
      <p className="flex items-center space-x-2 text-sm lg:text-lg">
        <FaEnvelope className="inline-block text-xl" />
        <a href="mailto:info@d2global.com" className="underline hover:text-yellow-300">
          info@d2global.com
        </a>
      </p>
      <p className="flex items-center space-x-2 text-sm lg:text-lg">
        <FaPhone className="inline-block text-xl" />
        <a href="tel:+123456789" className="underline hover:text-yellow-300">
          +123 456 789
        </a>
      </p>
    </div>
  </div>
</div>


      {/* Navigation Header */}
      <header className="shadow bg-customBlue text-customYellow top-12 left-0 w-full z-50">
        <Container>
          <nav className="py-1 flex justify-between items-center">
            <div className="flex items-center mr-3 ml-5 w-18 h-18">
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-full h-full object-contain" />
              </button>

              {/* Add the company name and tagline here */}
              <div className="ml-3 text-customYellow text-left">
                <p className="text-2xl lg:text-4xl font-semibold">D2 Global</p>
                <p className="text-lg lg:text-lg">Education and Immigration</p>
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden mr-5">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex ml-auto">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() =>
                      item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                    }
                    className={`underline-slide inline-block px-6 py-2 lg:py-3 text-lg lg:text-xl duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-48 bg-customBlue shadow-lg z-50 text-customYellow">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-2 hover:underline hover:text-customYellow w-full text-left text-lg lg:text-xl ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="lg:hidden absolute top-16 left-0 w-full bg-customBlue shadow-md z-40 text-customYellow">
                <ul className="flex flex-col items-center space-y-4 py-6">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-6 py-2 duration-200 text-lg ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <>
                          <ul className="bg-customBlue shadow-lg z-50 w-full text-customYellow">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.name}>
                                <button
                                  onClick={() => handleNavigation(subItem.slug)}
                                  className={`block px-4 py-2 hover:underline hover:text-customYellow w-full text-left text-lg ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
                                >
                                  {subItem.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-customYellow px-4 py-2 text-sm"
                          >
                            Close
                          </button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Cross (X) button for mobile menu close */}
                <button onClick={toggleMenu} className="text-customYellow px-4 py-2 mt-4">
                  <FaTimes size={28} />
                </button>
              </div>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
