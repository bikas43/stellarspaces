import React from 'react';
import './InfoCard1.css';

const InfoCard1 = ({ title, description, link }) => {
  return (
    <div className="info-card-1-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="explore-link">
        Explore More
      </a>
    </div>
  );
};

export default InfoCard1;
