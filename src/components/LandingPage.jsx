import React, { useState, useRef } from 'react';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import HeroText from './HeroText.jsx';
import NavBar from './NavBar.jsx';
import Logo from './Logo.jsx';
import '../css/LandingPage.css'; // Import the external CSS file
import CursorTrail from './CursorTrial.jsx';


// Array of images
const images = [image1, image2, image3, image4];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);

  // Handle image change on click
  const handleImageChange = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.opacity = 0; // Fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        imageContainerRef.current.style.opacity = 1; // Fade in
      }, 300); // Match with CSS transition duration
    }
  };

  return (
    <>
      <CursorTrail />
    <Logo/>
    <div
      ref={imageContainerRef}
      className="landing-page-container"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
      onClick={handleImageChange}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.01)'; // Scale up
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Scale back
      }}
    >
      <NavBar/>

      <div className="landing-page-overlay" />
      {/* HeroText is centered using flexbox */}
      <div style={{ zIndex: 1 }}> {/* Ensures HeroText appears above the overlay */}
      <HeroText
          title="Welcome to JIMMU"
          subtitle="JIMMU staff carries over 30 years experience in managing High Net Worth Divorce <br/> investigations
          utilization of our skills and experience, we can manage 
          all the aspects of a <br/> High Net Worth Divorces with reactive and proactive methods"
          buttonText="Call Us Now"
          onButtonClick={() => alert('Button clicked!')}
        />
      </div>
    </div>
    </>
  );
};

export default LandingPage;
