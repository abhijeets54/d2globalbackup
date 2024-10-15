import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from '../Logo'; // Ensure this import is correct
import Container from '../Container'; // Ensure this import is correct

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

      <header className="bg-blue-500 text-yellow-500">
        <Container>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center flex-shrink-0 ml-4">
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-16 h-16 object-contain" />
              </button>
              <div className="ml-2 text-yellow-500 text-left">
                <p className="text-xl lg:text-3xl font-semibold">D2 Global</p>
                <p className="text-base lg:text-lg">Education and Immigration</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mr-40">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-lg" />
                <a href="mailto:info@d2global.com" className="text-sm">
                  info@d2global.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-lg rotate-90" />
                <a href="tel:+919878990455" className="text-sm">
                  +91 98789 90455
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <nav className="shadow bg-blue-500 text-yellow-500 left-0 w-full z-50">
        <Container>
          <div className="py-2 flex justify-between items-center">
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none">
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>

            <ul className="hidden lg:flex ml-auto space-x-4">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() =>
                      item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                    }
                    className={`underline-slide inline-block px-4 py-1 lg:py-2 text-sm lg:text-base duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-yellow-500'}`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-48 bg-blue-500 shadow-lg z-50 text-yellow-500">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-2 text-sm lg:text-base hover:underline hover:text-yellow-500 w-full text-left ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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

            {menuOpen && (
              <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-500 shadow-md z-40 text-yellow-500">
                <ul className="flex flex-col items-center space-y-4 py-4">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-6 py-2 duration-200 text-sm ${location.pathname === item.slug ? 'active-page' : 'text-yellow-500'}`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <>
                          <ul className="bg-blue-500 shadow-lg z-50 w-full text-yellow-500">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.name}>
                                <button
                                  onClick={() => handleNavigation(subItem.slug)}
                                  className={`block px-4 py-2 hover:underline hover:text-yellow-500 w-full text-left text-sm ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
                                >
                                  {subItem.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-yellow-500 px-4 py-2 text-sm"
                          >
                            Close
                          </button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <button onClick={toggleMenu} className="text-yellow-500 px-4 py-2 mt-4">
                  <FaTimes size={28} />
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
