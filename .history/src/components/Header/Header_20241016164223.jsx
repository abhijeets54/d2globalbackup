import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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

  .social-icon {
    transition: transform 0.3s ease;
  }

  .social-icon:hover {
    transform: scale(1.1);
  }

  .hexagon-logo {
    width: 80px;
    height: 92px;
    background-color: #051b38;
    position: absolute;
    top: 30px;
    left: 150px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    z-index: 20;
  }

  .hexagon-logo img {
    width: 80%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    .hexagon-logo {
      width: 60px;
      height: 69px;
      top: 20px;
      left: 10px;
    }
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
      <style>{customStyles}</style>

      {/* Combined Header Section */}
      <header className="bg-customBlue text-customYellow relative">
        <Container>
          <div className="flex justify-between items-center relative" style={{ height: '80px' }}> 
            
            {/* Logo and Company Name */}
            <div className="flex items-center relative flex-shrink-0">
              {/* Hexagon Logo container */}
              <div className="hexagon-logo">
                <img src="/logo.png" alt="D2 Global Logo" />
              </div>
            </div>

            {/* Contact Info and Social Media */}
            <div className="hidden lg:flex items-center space-x-4 mr-4">
              <div className="flex items-center">
                <FaEnvelope className="text-xl mr-1" />
                <a href="mailto:info@d2global.com" className="text-sm">
                  info@d2global.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-xl mr-1 rotate-90" />
                <a href="tel:+919878990455" className="text-sm">
                  +91 98789 90455
                </a>
              </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Navigation Header */}
      <nav className="shadow bg-customBlue text-customYellow left-0 w-full z-50">
        <Container>
          <div className="py-1 flex justify-end items-center">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() =>
                      item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                    }
                    className={`underline-slide inline-block px-3 py-1 text-sm duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-40 bg-customBlue shadow-lg z-50 text-customYellow">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-3 py-1 hover:underline w-full text-left text-sm ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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
                <ul className="flex flex-col items-center space-y-2 py-3">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-4 py-1 text-sm ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
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
                                  className={`block px-3 py-1 hover:underline w-full text-left text-xs ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
                                >
                                  {subItem.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-customYellow px-3 py-1 text-xs"
                          >
                            Close
                          </button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Cross (X) button for mobile menu close */}
                <button onClick={toggleMenu} className="text-customYellow px-3 py-1 mt-2">
                  <FaTimes size={24} />
                </button>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;