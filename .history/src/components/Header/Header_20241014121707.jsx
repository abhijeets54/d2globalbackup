import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT', slug: '/AboutUs' },
    { name: 'COURSES', slug: '/Courses', dropdown: [] },
    { name: 'SUCCESSFUL STUDENTS', slug: '/SuccessfulStudents', dropdown: [] },
    { name: 'BLOG', slug: '/Blog' },
    { name: 'CONTACT US', slug: '/Contactpage' },
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
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-customBlue text-white py-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@englishlanguageexperts.com.au">Info@englishlanguageexperts.com.au</a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:0426205638">0426 205 638</a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <Container>
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo className="w-16 h-16" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-customBlue">ENGLISH LANGUAGE EXPERTS</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                <button
                  onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                  className={`text-customBlue hover:text-customYellow ${location.pathname === item.slug ? 'font-bold' : ''}`}
                >
                  {item.name}
                </button>
                {item.dropdown && activeDropdown === index && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-50">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <button
                          onClick={() => handleNavigation(subItem.slug)}
                          className="block px-4 py-2 text-customBlue hover:bg-customYellow hover:text-white w-full text-left"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-customBlue focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Need Help Button */}
          <button className="hidden lg:block bg-customRed text-white px-4 py-2 rounded hover:bg-red-700">
            Need Help
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="py-4">
              {navItems.map((item, index) => (
                <li key={item.name} className="px-4 py-2">
                  <button
                    onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                    className={`text-customBlue ${location.pathname === item.slug ? 'font-bold' : ''}`}
                  >
                    {item.name}
                  </button>
                  {item.dropdown && activeDropdown === index && (
                    <ul className="ml-4 mt-2">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className="block py-1 text-customBlue hover:text-customYellow"
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="px-4 py-2">
                <button className="bg-customRed text-white px-4 py-2 rounded hover:bg-red-700 w-full">
                  Need Help
                </button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;