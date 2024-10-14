import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

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
    background-color: #8B0000;
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
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT', slug: '/about' },
    { name: 'COURSES', slug: '/courses', dropdown: [
      // Add dropdown items here
    ]},
    { name: 'SUCCESSFUL STUDENTS', slug: '/successful-students', dropdown: [
      // Add dropdown items here
    ]},
    { name: 'BLOG', slug: '/blog' },
    { name: 'CONTACT US', slug: '/contact' },
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

      <header className="bg-white shadow-md">
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo className="w-16 h-16 mr-4" />
              <h1 className="text-2xl font-serif">ENGLISH LANGUAGE EXPERTS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon text-[#8B0000]">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon text-[#8B0000]">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon text-[#8B0000]">
                <FaYoutube size={20} />
              </a>
              <div className="flex items-center space-x-2 text-[#8B0000]">
                <FaEnvelope size={20} />
                <span className="text-sm">Info@englishlanguageexperts.com.au</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8B0000]">
                <FaPhone size={20} />
                <span className="text-sm">0426 205 638</span>
              </div>
            </div>
          </div>
        </Container>

        <nav className="bg-[#F5F5F5] py-4">
          <Container>
            <div className="flex justify-between items-center">
              <ul className="hidden lg:flex space-x-6">
                {navItems.map((item, index) => (
                  <li key={item.name} className="relative">
                    <button
                      onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                      className={`underline-slide text-[#8B0000] text-lg ${location.pathname === item.slug ? 'active-page' : ''}`}
                    >
                      {item.name}
                    </button>
                    {item.dropdown && activeDropdown === index && (
                      <ul className="absolute left-0 mt-1 w-48 bg-white shadow-lg z-50 text-[#8B0000]">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <button
                              onClick={() => handleNavigation(subItem.slug)}
                              className={`block px-4 py-2 hover:bg-[#F5F5F5] w-full text-left ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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
              <button className="bg-[#8B0000] text-white px-4 py-2 rounded hover:bg-[#6B0000] transition duration-300">
                Need Help
              </button>
              <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-[#8B0000] focus:outline-none">
                  {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
              </div>
            </div>
          </Container>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md z-40">
            <Container>
              <ul className="py-4">
                {navItems.map((item, index) => (
                  <li key={item.name} className="mb-2">
                    <button
                      onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                      className={`text-[#8B0000] text-lg ${location.pathname === item.slug ? 'font-bold' : ''}`}
                    >
                      {item.name}
                    </button>
                    {item.dropdown && activeDropdown === index && (
                      <ul className="ml-4 mt-2">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <button
                              onClick={() => handleNavigation(subItem.slug)}
                              className={`block py-1 text-[#8B0000] ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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
            </Container>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;