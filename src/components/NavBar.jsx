import React from 'react';
import '../css/NavBar.css'; // Import the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#services" className="navbar-link">Our Services</a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
