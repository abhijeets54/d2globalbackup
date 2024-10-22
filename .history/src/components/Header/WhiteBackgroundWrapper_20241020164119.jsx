import React from 'react';

const WhiteBackgroundWrapper = ({ children }) => (
  <div style={{
    backgroundColor: 'white',
    margin: '10px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  }}>
    {children}
  </div>
);

export default WhiteBackgroundWrapper;