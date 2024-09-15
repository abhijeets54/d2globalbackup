// src/components/Layout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/Donate');
  };

  return (
    <div>
      <Outlet />
     
    </div>
  );
};

export default Layout;
