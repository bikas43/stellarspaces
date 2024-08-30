import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ image, title, propertyCount }) => {
  return (
    <div className="property-card" style={{ backgroundImage: `url(${image})`, height:'auto'}}>
      <div className="property-overlay">
        <h2>{title}</h2>
        <p>{propertyCount} PROPERTIES</p>
      </div>
    </div>
  );
};

export default PropertyCard;
