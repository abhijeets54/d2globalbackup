import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const CustomStyles = () => (
  <style>{`
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

    .social-icon {
      transition: transform 0.3s ease;
    }

    .social-icon:hover {
      transform: scale(1.1);
    }
  `}</style>
);

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
      dropdown: [
        { name: 'IELTS Coaching', slug: '/IELTSCoaching' },
        { name: 'PTE Coaching', slug: '/PTECoaching' },
      ],
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
      <CustomStyles />

      {/* Combined Header Section */}
      <header className="bg-blue-900 text-yellow-400 py-2">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center flex-shrink-0 ml-4 md:ml-8">
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </button>
              <div className="ml-2 text-yellow-400 text-left">
                <p className="text-lg md:text-2xl lg:text-3xl font-semibold">D2 Global</p>
                <p className="text-sm md:text-base lg:text-lg">Education and Immigration</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 mr-4 md:mr-8">
              <div className="flex flex-col items-center">
                <p className="flex items-center space-x-2 text-sm md:text-base">
                  <FaEnvelope className="inline-block text-lg md:text-xl" />
                  <a href="mailto:info@d2global.com" className="hover:underline">
                    info@d2global.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="flex items-center space-x-2 text-sm md:text-base">
                  <FaPhone className="inline-block text-lg md:text-xl rotate-90" />
                  <a href="tel:+919878990455" className="hover:underline">
                    +91 98789 90455
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Navigation Header */}
      <nav className="shadow bg-blue-900 text-yellow-400 left-0 w-full z-50 py-1">
        <Container>
          <div className="flex justify-between items-center">
            {/* Hamburger Menu */}
            <div className="lg:hidden">
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
                    className={`underline-slide inline-block px-4 py-2 text-base lg:text-lg duration-200 ${
                      location.pathname === item.slug ? 'active-page' : 'text-yellow-400'
                    }`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-48 bg-blue-900 shadow-lg z-50 text-yellow-400">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-2 hover:underline hover:text-yellow-400 w-full text-left text-base ${
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
              <div className="lg:hidden absolute top-14 left-0 w-full bg-blue-900 shadow-md z-40 text-yellow-400">
                <ul className="flex flex-col items-center space-y-4 py-4">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-4 py-2 duration-200 text-base ${
                          location.pathname === item.slug ? 'active-page' : 'text-yellow-400'
                        }`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <ul className="bg-blue-900 shadow-lg z-50 w-full text-yellow-400 mt-2">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <button
                                onClick={() => handleNavigation(subItem.slug)}
                                className={`block px-4 py-2 hover:underline hover:text-yellow-400 w-full text-left text-sm ${
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
              </div>
            )}
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;