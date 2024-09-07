import React from 'react';
import './PropertyCard.css';


const PropertyCard = ({ image, title, propertyCount }) => {
  return (
    <div className="property-card">
    <img src={image} alt=""/>
      <div className="property-overlay">
        <h2>{title}</h2>
        <p>{propertyCount} PROPERTIES</p>
      </div>
    </div>
  );
};

export default PropertyCard;
