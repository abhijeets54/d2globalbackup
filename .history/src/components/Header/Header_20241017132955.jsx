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
    width: 100px;
    height: 115px;
    background-color: #051b38;
    position: absolute;
    left: 80px;
    top: -20px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 20;
  }

  .hexagon-logo img {
    width: 85%;
    height: auto;
    object-fit: contain;
  }

  .header-shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo-text {
    font-family: Arial, sans-serif;
    line-height: 1.2;
  }

  .logo-text-large {
    font-size: 24px;
    font-weight: bold;
    color: #FFD700;
  }

  .logo-text-small {
    font-size: 18px;
    color: #FFFFFF;
  }

  @media (max-width: 1024px) {
    .hexagon-logo {
      width: 80px;
      height: 92px;
      top: -15px;
      left: 40px;
    }
    .logo-text-large {
      font-size: 20px;
    }
    .logo-text-small {
      font-size: 16px;
    }
  }

  @media (max-width: 640px) {
    .hexagon-logo {
      width: 60px;
      height: 69px;
      top: -10px;
      left: 20px;
    }
    .logo-text-large {
      font-size: 16px;
    }
    .logo-text-small {
      font-size: 14px;
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

      <header className="bg-customBlue text-customYellow relative header-shadow">
        <Container>
          <div className="flex justify-between items-center relative py-2" style={{ minHeight: '80px' }}> 
            
            {/* Logo */}
            <div className="flex-shrink-0 relative w-40">
              <div className="hexagon-logo">
                <img src="/logo.png" alt="D2 Global Logo" />
              </div>
            </div>

            {/* Company Name, Contact Info, and Navigation */}
            <div className="flex flex-col items-end space-y-2 ml-auto">
              {/* Company Name */}
              <div className="logo-text text-right">
                <div className="logo-text-large">D2 Global</div>
                <div className="logo-text-small">Education and Immigration</div>
              </div>

              {/* Contact Info */}
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-sm mr-1" />
                  <a href="mailto:info@d2global.com" className="text-xs">
                    info@d2global.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-sm mr-1 rotate-90" />
                  <a href="tel:+919878990455" className="text-xs">
                    +91 98789 90455
                  </a>
                </div>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <li key={item.name} className="relative">
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-2 py-1 text-sm duration-200 ${
                          location.pathname === item.slug ? 'active-page' : 'text-customYellow'
                        }`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <ul className="absolute right-0 mt-1 w-40 bg-customBlue shadow-lg z-50 text-customYellow">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <button
                                onClick={() => handleNavigation(subItem.slug)}
                                className={`block px-3 py-1 hover:underline w-full text-left text-sm ${
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
              </nav>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-customBlue shadow-md z-40 text-customYellow">
          <ul className="flex flex-col items-center space-y-2 py-3">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <button
                  onClick={() =>
                    item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                  }
                  className={`underline-slide inline-block px-4 py-1 text-sm ${
                    location.pathname === item.slug ? 'active-page' : 'text-customYellow'
                  }`}
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
                            className={`block px-3 py-1 hover:underline w-full text-left text-xs ${
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
                      className="text-customYellow px-3 py-1 text-xs"
                    >
                      Close
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;