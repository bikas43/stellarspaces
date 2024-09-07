import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ImageCarousel3.css';
import PdpIconBathFill from '../../Assets/Icons/PdpIconBathFill';
import PdpIconBedFill from '../../Assets/Icons/PdpIconBedFill';
import PdpIconSizeFill from '../../Assets/Icons/PdpIconSizeFill';
import PdpIconRupeeOutline from '../../Assets/Icons/PdpIconRupeeOutline';

const ImageCarousel3 = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateWrapperWidth = useCallback(() => {
    if (wrapperRef.current) {
      const offset = wrapperRef.current.offsetWidth / (isMobile ? 1 : 4);
      wrapperRef.current.style.transform = `translateX(-${currentIndex * offset}px)`;
    }
  }, [currentIndex, isMobile]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
      updateWrapperWidth();
    }, 100);

    window.addEventListener('resize', handleResize);
    updateWrapperWidth();

    return () => window.removeEventListener('resize', handleResize);
  }, [updateWrapperWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= properties.length - (isMobile ? 1 : 4) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? properties.length - (isMobile ? 1 : 4) : prevIndex - 1
    );
  };

  return (
    <div className="image-carousel-container">
      <div className="carousel-wrapper" ref={wrapperRef}>
        {properties.map((property, index) => (
          <div key={index} className="carousel-card">
            <div className="card-image">
              <img src={property.image} alt={property.title} />
              <div className="card-badges">
                {property.isFeatured && <span className="badge featured">FEATURED</span>}
                {property.isForRentSale === 'Sale' && (
                  <span className="badge for-sale">FOR SALE</span>
                )}
              </div>
              <div className="card-price">
                <PdpIconRupeeOutline className="icon-price" />
                {property.isForRentSale === 'Sale'
                  ? property.price
                  : `${property.rentPrice} / month`}
              </div>
            </div>
            <div className="card-content">
              <h3>{property.propertyName}</h3>
              <h5>
                {property.title} - {property.type}
              </h5>
              <div className="card-icons">
                <span>
                  <PdpIconBedFill className="icon" /> {property.bedrooms}
                </span>
                <span>
                  <PdpIconBathFill className="icon" /> {property.bathrooms}
                </span>
                <span>
                  <PdpIconSizeFill className="icon" /> {property.area} SqFt
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="carousel-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="carousel-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export default ImageCarousel3;
