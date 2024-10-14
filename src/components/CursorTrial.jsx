import React, { useEffect, useState } from 'react';
import '../css/CursorTrial.css'; // Import external CSS

const CursorTrail = () => {
  const [trailStyle, setTrailStyle] = useState({
    left: 0,
    top: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrailStyle({
        left: e.clientX + 'px',
        top: e.clientY + 'px',
        opacity: 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail" style={trailStyle}></div>
  );
};

export default CursorTrail;
