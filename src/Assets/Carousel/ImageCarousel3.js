import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ImageCarousel3.css';
import PdpIconBathFill from '../../Assets/Icons/PdpIconBathFill';
import PdpIconBedFill from '../../Assets/Icons/PdpIconBedFill';
import PdpIconSizeFill from '../../Assets/Icons/PdpIconSizeFill';
import PdpIconRupeeOutline from '../../Assets/Icons/PdpIconRupeeOutline';

const ImageCarousel3 = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);

  const updateWrapperWidth = useCallback(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(-${currentIndex * (wrapperRef.current.offsetWidth / 4)}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      updateWrapperWidth();
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedResize);

    updateWrapperWidth();

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [updateWrapperWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= properties.length - 4 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? properties.length - 4 : prevIndex - 1));
  };

  return (
    <div className="ImageCarousel3-container">
      <div className="ImageCarousel3-carousel-wrapper" ref={wrapperRef}>
        {properties.map((property, index) => (
          <div key={index} className="ImageCarousel3-carousel-card">
            <div className="ImageCarousel3-card-image">
              <img src={property.image} alt={property.title} />
              <div className="ImageCarousel3-card-badges">
                {property.isFeatured && <span className="ImageCarousel3-badge featured">FEATURED</span>}
                {property.isForRentSale === 'Sale' && <span className="ImageCarousel3-badge for-sale">FOR SALE</span>}
                {property.isForRentSale === 'Rent' && <span className="ImageCarousel3-badge for-rent">FOR RENT</span>}
              </div>
              <div className="ImageCarousel3-card-price">
                <PdpIconRupeeOutline className="pdp-icon-price" />
                {property.isForRentSale === 'Sale' ? property.price : property.rentPrice} 
                {property.isForRentSale === 'Rent' && ' / month'}
              </div>
            </div>
            <div className="ImageCarousel3-card-content">
              <h3>{property.title}</h3>
              <p>{property.type}</p>
              <div className="ImageCarousel3-card-icons">
                <span><PdpIconBedFill className="pdp-icon" /> {property.bedrooms}</span>
                <span><PdpIconBathFill className="pdp-icon" /> {property.bathrooms}</span>
                <span><PdpIconSizeFill className="pdp-icon" /> {property.area} SqFt</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ImageCarousel3-button-container">
        <button className="ImageCarousel3-carousel-button" onClick={handlePrev}>Prev</button>
        <button className="ImageCarousel3-carousel-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

// Debounce function for improved performance
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export default ImageCarousel3;
