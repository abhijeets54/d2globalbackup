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
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks which dropdown is active
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
        { name: 'Study Visa', slug: '/StudyAbroad', subDropdown: [
            { name: 'Study in UK', slug: '/StudyUK' },
            { name: 'Study in Canada', slug: '/StudyCan' },
            { name: 'Study in Australia', slug: '/StudyAus' },
            { name: 'Study in USA', slug: '/StudyUSA' },
            { name: 'Study in Europe', slug: '/StudyEurope' },
            { name: 'Study in Dubai', slug: '/StudyDubai' },
          ] 
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

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      <style>{customStyles}</style>

      <header className="bg-customBlue text-customYellow relative shadow-md">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center relative min-h-[80px]">
            {/* Logo and Company Name */}
            <div className="flex items-center relative flex-shrink-0 w-full lg:w-auto mb-4 lg:mb-0">
              <button
                onClick={(e) => handleNavigation(e, '/')}
                className="hexagon-logo absolute w-[80px] h-[92px] bg-customBlue top-2 left-4 md:w-[100px] md:h-[115px] md:top-4 md:left-10 lg:w-[120px] lg:h-[138px] lg:top-0 lg:left-20 flex justify-center items-center shadow-xl z-20"
              >
                <img src="/logo.png" alt="D2 Global Logo" className="w-[85%] h-auto object-contain" />
              </button>
              <div className="ml-16 md:ml-24 lg:ml-40 xl:ml-48 text-left px-4 pt-1 -mb-12">
                <div className="text-3xl font-bold font-poppins text-customYellow">D2 Global</div>
              </div>
            </div>

            <div className="lg:hidden absolute top-2 right-2">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-customBlue shadow-md z-40 text-customYellow slide-down">
          <ul className="flex flex-col items-center space-y-2 py-3 font-poppins">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <div className="flex justify-between items-center px-4">
                  <a
                    href={item.slug}
                    onClick={(e) => handleNavigation(e, item.slug)}
                    className={`block text-left py-2 text-sm w-full ${
                      location.pathname === item.slug ? 'font-bold' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="text-customYellow focus:outline-none"
                    >
                      {activeDropdown === item.name ? <FaTimes size={16} /> : <FaBars size={16} />}
                    </button>
                  )}
                </div>

                {item.dropdown && activeDropdown === item.name && (
                  <ul className="bg-customBlue pl-6">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.slug}
                          onClick={(e) => handleNavigation(e, subItem.slug)}
                          className={`block py-2 text-sm ${
                            location.pathname === subItem.slug ? 'font-bold' : ''
                          }`}
                        >
                          {subItem.name}
                        </a>

                        {subItem.subDropdown && (
                          <ul className="bg-blue-700 pl-6">
                            {subItem.subDropdown.map((subSubItem) => (
                              <li key={subSubItem.name}>
                                <a
                                  href={subSubItem.slug}
                                  onClick={(e) => handleNavigation(e, subSubItem.slug)}
                                  className={`block py-2 text-sm ${
                                    location.pathname === subSubItem.slug ? 'font-bold' : ''
                                  }`}
                                >
                                  {subSubItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
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
