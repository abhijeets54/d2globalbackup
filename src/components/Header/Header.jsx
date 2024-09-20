import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaSnapchat } from 'react-icons/fa';

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
        { name: 'Work Visa', slug: '/WorkVisa' },
        { name: 'Visitor Visa', slug: '/VisitorVisa' },
        { name: 'Tourist Visa', slug: '/TouristVisa' },
        { name: 'Permanent Residency', slug: '/PR' },
      ],
    },
    {
      name: 'Training',
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
      <div className="bg-blue-950 py-2 text-yellow-400 text-sm">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center px-16 lg:px-16">
            <div className="flex items-center text-md mb-2 lg:mb-1 space-x-4">
              <span>
                <i className="fas fa-map-marker-alt"></i> Maks Shopping Plaza, Dugri Road, Model Town , Ludhiana 
              </span>
              <span>
                <i className="fas fa-envelope"></i> Info@d2global.in 
              </span>
            </div>
            <div className="flex space-x-4 items-center text-xl">
              <a href="https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://snapchat.com/t/oAdKBVHs" target="_blank" rel="noopener noreferrer" className="text-red-600">
                <FaSnapchat />
              </a>
              <a href="http://www.youtube.com/@D2Global" target="_blank" rel="noopener noreferrer" className="text-blue-800">
                <FaYoutube />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Header */}
      <header className="shadow bg-blue-950 text-yellow-400 top-12 left-0 w-full z-50">
        <Container>
          <nav className="py-3 flex justify-between  items-center">
            <div className="mr-3 ml-5 w-18 h-18">
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-full h-full object-contain" />
              </button>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden  mr-5">
              <button onClick={toggleMenu} className="text-yellow-400 focus:outline-none">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
                    className={`underline-slide inline-block px-6 py-2 duration-200 ${
                      location.pathname === item.slug ? 'active-page' : 'text-yellow-400'
                    }`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-40 bg-blue-950 shadow-lg z-50 text-yellow-400">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-2 hover:underline hover:text-yellow-400 w-full text-left ${
                              location.pathname === subItem.slug ? 'font-bold' : ''
                            }`}
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
              <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-950 shadow-md z-40 text-yellow-400">
                <ul className="flex flex-col items-center space-y-4 py-6">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-6 py-2 duration-200 ${
                          location.pathname === item.slug ? 'active-page' : 'text-yellow-400'
                        }`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <>
                          <ul className="bg-blue-950 shadow-lg z-50 w-full text-yellow-400">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.name}>
                                <button
                                  onClick={() => handleNavigation(subItem.slug)}
                                  className={`block px-4 py-2 hover:underline hover:text-yellow-400 w-full text-left ${
                                    location.pathname === subItem.slug ? 'font-bold' : ''
                                  }`}
                                >
                                  {subItem.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-yellow-400 px-4 py-2 text-sm"
                          >
                            Close
                          </button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Cross (X) button for mobile menu close */}
                <button onClick={toggleMenu} className="text-yellow-400 px-4 py-2 mt-4">
                  <FaTimes size={24} />
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
