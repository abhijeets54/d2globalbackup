import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About Us', slug: '/about-us' },
    { name: 'Study Abroad', slug: '/study-abroad', dropdown: [
        { name: 'Study in UK', slug: '/study-abroad/uk' },
        { name: 'Study in Canada', slug: '/study-abroad/canada' },
        { name: 'Study in Australia', slug: '/study-abroad/australia' },
        { name: 'Study in New Zealand', slug: '/study-abroad/nz' },
        { name: 'Study in USA', slug: '/study-abroad/usa' },
      ]
    },
    { name: 'Visa', slug: '/visa', dropdown: [
        { name: 'Visitor Visa', slug: '/visa/visitor' },
        { name: 'Study Visa', slug: '/visa/study' },
        { name: 'Family Visa', slug: '/visa/family' },
        { name: 'Work Visa', slug: '/visa/work' },
      ]
    },
    { name: 'Training', slug: '/training', dropdown: [
        { name: 'IELTS', slug: '/training/ielts' },
        { name: 'PTE', slug: '/training/pte' },
      ]
    },
    { name: 'Contact Us', slug: '/contact-us' },
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
    <header className='shadow bg-stone-50 fixed top-0 left-0 w-full z-50'>
      <Container>
        <nav className='py-3 flex justify-between items-center'>
          <div className='mr-3 ml-5 w-18 h-18'>
            <button onClick={() => navigate('/')} className='focus:outline-none'>
              <Logo className='w-full h-full object-contain' />
            </button>
          </div>

          <div className='lg:hidden mr-5'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul className='hidden lg:flex ml-auto'>
            {navItems.map((item, index) => (
              <li key={item.name} className='relative'>
                <button
                  onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                  className={`inline-block px-6 py-2 duration-200 hover:underline hover:text-blue-500 ${
                    location.pathname === item.slug ? 'bg-transparent border-2 border-gray-800 text-black' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </button>

                {item.dropdown && activeDropdown === index && (
                  <ul className='absolute left-0 mt-1 w-40 bg-white shadow-lg z-50'>
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <button
                          onClick={() => handleNavigation(subItem.slug)}
                          className='block px-4 py-2 hover:underline hover:text-blue-500 text-gray-800 w-full text-left'
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
            <ul className='lg:hidden absolute top-16 left-0 w-full bg-stone-50 shadow-md flex flex-col items-center space-y-4 py-6 z-40'>
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <button
                    onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                    className={`inline-block px-6 py-2 duration-200 hover:underline hover:text-blue-500 ${
                      location.pathname === item.slug ? 'bg-transparent border-2 border-gray-800 text-black' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className='bg-white shadow-lg z-50 w-full'>
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className='block px-4 py-2 hover:underline hover:text-blue-500 text-gray-800 w-full text-left'
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
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
