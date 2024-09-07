import React from 'react';
import PropertyCard from '../../../Assets/Cards/PropertyCard';
import './PropertyGrid.css';
import PropertyGrid0 from '../../../Images/Properties/pexels-eberhardgross-1624496.jpg';
import PropertyGrid1 from '../../../Images/Properties/Appartment.webp';
import PropertyGrid2 from '../../../Images/Properties/Villa.webp';
import PropertyGrid3 from '../../../Images/Properties/SingleFamilyHome.webp';
import PropertyGrid4 from '../../../Images/Properties/room-2.jpg';
import PropertyGrid5 from '../../../Images/Properties/Shop.webp';
import PropertyGrid6 from '../../../Images/Properties/Office.webp';
import PropertyGrid7 from '../../../Images/Properties/Condo.webp';
import PropertyGrid8 from '../../../Images/Properties/Land.webp';
import PropertyGrid9 from '../../../Images/Properties/new-buildings-with-green-areas.jpg';


const propertyData = [
  { image: PropertyGrid0, title: 'Apartment', propertyCount: 17 },
  { image: PropertyGrid2, title: 'Villa', propertyCount: 10 },
  { image: PropertyGrid3, title: 'Single Family Home', propertyCount: 10 },
  { image: PropertyGrid4, title: 'Studio', propertyCount: 3 },
  { image: PropertyGrid5, title: 'Shop', propertyCount: 3 },
  { image: PropertyGrid6, title: 'Office', propertyCount: 3 },
  { image: PropertyGrid7, title: 'Condo', propertyCount: 1 },
  { image: PropertyGrid8, title: 'Lot', propertyCount: 1 },
  { image: PropertyGrid9, title: 'Multi Family Home', propertyCount: 1 },
];

const PropertyGrid = () => {
  return (
    <div className="property-grid-container">
      <div className="property-grid">
        {propertyData.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            propertyCount={property.propertyCount}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
