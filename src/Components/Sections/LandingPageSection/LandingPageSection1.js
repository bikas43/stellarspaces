import React from 'react';
import InfoCard1 from '../../../Assets/Cards/InfoCard1';
import './LandingPageSection1.css';

const LandingPageSection1 = () => {
  const products = [
    {
      id: 1,
      title: 'Desirable Location and Connectivity',
      description: `Emphasize the property's strategic position near key facilities such as schools, hospitals, shopping centers, and transportation hubs, ensuring convenience and accessibility.`,
      link: '/',
    },
    {
      id: 2,
      title: 'Strong Investment Growth',
      description: `Highlight the potential for value appreciation over time, making the property a sound investment. Focus on trends in the area showing consistent growth or future development plans that may increase property values.`,
      link: '/',
    },
    {
      id: 3,
      title: 'Modern Comforts and Amenities',
      description: `Feature the inclusion of contemporary amenities like smart home systems, eco-friendly installations, recreational facilities, and communal spaces that enhance residents' lifestyles.`,
      link: '/',
    },
    {
      id: 4,
      title: 'Safety and Community Environment',
      description: `Promote the security features, including gated access and surveillance, while also underlining the sense of community that comes with shared spaces and neighborhood connections.`,
      link: '/',
    },
  ];


  return (
    <div className='LandingPageSection1-container'>
      {products.map((product, index) => {

        return (
          <div 
            key={product.id} 
            className='LandingPageSection1-container-card'
          >
            <InfoCard1
              title={product.title}
              description={product.description}
              link={product.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LandingPageSection1;
