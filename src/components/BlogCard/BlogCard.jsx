import React, { useState } from 'react';
import './BlogCard.css'; // Assuming you have the renamed CSS saved in BlogCard.css
import PropTypes from 'prop-types';

const BlogCard = ({ imageUrl, title, date, excerpt }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expansion

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion state
  };

  return (
    <div className={`card-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-image-link">
        <img
          src={imageUrl}
          alt={title}
          className={`card-image ${isExpanded ? 'expanded' : ''}`} // Add class conditionally
        />
      </div>
      <div className="card-content">
        <div className="card-title-link">
          <div className={`card-title ${isExpanded ? 'expanded' : ''}`}>{title}</div> {/* Add class conditionally */}
        </div>
        <span className="post-meta">
          <span className="inner-meta">
            <span className="post-date">
              <time>{date}</time>
            </span>
          </span>
        </span>
        <p className={`card-excerpt ${isExpanded ? 'expanded' : ''}`}>{excerpt}</p> {/* Add class conditionally */}
        <div className="read-more-button" onClick={handleReadMoreClick}>
          <i className="fa czico-110-link-symbol" aria-hidden="true"></i>
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span> {/* Toggle button text */}
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default BlogCard;
