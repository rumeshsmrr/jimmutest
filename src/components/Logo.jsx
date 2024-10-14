import React from 'react';
import '../css/Logo.css'; // Import the external CSS file

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="src/assets/jimmuB.png" // Replace with the actual path to your logo image
        alt="Logo"
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
