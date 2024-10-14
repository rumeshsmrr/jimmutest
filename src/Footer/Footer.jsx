import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/jimmuB.png";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Solutions</h2>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Home1</a></li>
            <li><a href="#" className="footer-link">Home2</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Cantact Us</a></li>
            <li><a href="#" className="footer-link">Career</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Learn</h2>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#" className="footer-link">Ebooks</a></li>
          </ul>
        </div>

        <div className="footer-section last">
          <h2 className="footer-heading">Follow Us</h2>
          <ul className="footer-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <FaFacebook className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <FaTwitter className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <FaInstagram className="icon-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-seperator"></div>

      <div className="footer-bottom">
        <p>&copy; WebMinds 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
