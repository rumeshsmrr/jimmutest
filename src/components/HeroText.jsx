import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import '../css/HeroText.css'; // Import the external CSS file

const HeroText = ({ title, subtitle, buttonText, onButtonClick }) => {
  // Define animation variants for title, subtitle, and button
  const textVariants = {
    hidden: { opacity: 0, y: 50 },  // Start with text hidden and below
    visible: { opacity: 1, y: 0 },  // Move up and become visible
  };

  return (
    <div className="hero-text-container">
      {/* Title with animation */}
      <motion.h1
        className="hero-text-title"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth ease-in effect
        dangerouslySetInnerHTML={{ __html: title }} // Allows HTML inside the title
      ></motion.h1>

      {/* Divider between title and subtitle */}
      <motion.div
        className="hero-text-divider"
        initial={{ width: 0 }}  // Divider starts invisible (width 0)
        animate={{ width: '80%' }}  // Animate divider to grow
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }} // Slight delay
      ></motion.div>

      {/* Subtitle with animation */}
      <motion.p
        className="hero-text-subtitle"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }} // Delay for subtitle
        dangerouslySetInnerHTML={{ __html: subtitle }} // Allows HTML inside the subtitle
      ></motion.p>

      {/* Button with animation */}
      {buttonText && (
        <motion.button
          className="hero-text-button"
          whileHover={{ scale: 1.05 }} // Hover effect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }} // Button fades in last
          onClick={onButtonClick}
        >
          {buttonText}
        </motion.button>
      )}
    </div>
  );
};

export default HeroText;
