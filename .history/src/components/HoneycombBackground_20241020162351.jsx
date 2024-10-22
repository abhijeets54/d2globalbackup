import React from 'react';

const HoneycombBackground = ({ children }) => {
  const hexagonPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" fill="rgba(255, 255, 200, 0.2)" />
    </svg>
  `;

  const encodedPattern = encodeURIComponent(hexagonPattern);

  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodedPattern}")`,
        backgroundSize: '100px 100px',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default HoneycombBackground;