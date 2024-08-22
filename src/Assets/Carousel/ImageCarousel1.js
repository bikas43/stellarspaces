import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel1.css';

const ImageCarousel1 = ({
  images,
  autoPlayInterval = 3000,
  effect = 'slide',
  controls = 'thumbnails', // Options: "thumbnails", "buttons", "dots", "buttons-dots", "none"
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);
  const totalImages = images.length;
  const extendedImages = [images[totalImages - 1], ...images, images[0]]; // Cloning first and last images

  useEffect(() => {
    if (!autoPlayInterval) return;
    const interval = setInterval(() => nextImage(), autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  useEffect(() => {
    if (effect !== 'slide') return;

    // When transitioning, set the index without transition
    const handleWrapAround = () => {
      if (currentImageIndex === 0) {
        setTimeout(() => {
          setCurrentImageIndex(totalImages);
          setIsTransitioning(false); // Disable transition after wrapping
        }, 500); // Match this delay with the transition duration
      } else if (currentImageIndex === totalImages + 1) {
        setTimeout(() => {
          setCurrentImageIndex(1);
          setIsTransitioning(false); // Disable transition after wrapping
        }, 500); // Match this delay with the transition duration
      }
    };

    if (isTransitioning) {
      handleWrapAround();
    }
  }, [currentImageIndex, isTransitioning, totalImages, effect]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const renderControls = () => {
    switch (controls) {
      case 'thumbnails':
        return renderThumbnails();
      case 'dots':
        return renderDots();
      case 'buttons':
        return renderButtons();
      case 'buttons-dots':
        return (
          <div className="render-buttons">
            {renderButtons()}
            {renderDots()}
          </div>
          
        );
      default:
        return null;
    }
  };

  const renderButtons = () => (
    <div>
      <button onClick={prevImage} className="carousel-control prev">&#10094;</button>
      <button onClick={nextImage} className="carousel-control next">&#10095;</button>
      </div>
  );

  const renderDots = () => (
    <div className="carousel-dots">
      {images.map((_, index) => (
        <span
          key={index}
          className={`carousel-dot ${index + 1 === currentImageIndex ? 'active' : ''}`}
          onClick={() => goToImage(index + 1)}
        ></span>
      ))}
    </div>
  );

  const renderThumbnails = () => (
    <div className="carousel-thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`thumbnail-${index}`}
          className={`carousel-thumbnail ${index + 1 === currentImageIndex ? 'active' : ''}`}
          onClick={() => goToImage(index + 1)}
        />
      ))}
    </div>
  );

  const renderCarouselEffect = () => {
    switch (effect) {
      case 'slide':
        return (
          <SlideEffect
            images={extendedImages}
            currentImageIndex={currentImageIndex}
            slideRef={slideRef}
            isTransitioning={isTransitioning}
            onTransitionEnd={handleTransitionEnd}
          />
        );
      case 'fade':
        return (
          <FadeEffect
            images={images}
            currentImageIndex={currentImageIndex}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="carousel-container">
      {renderCarouselEffect()}
      {renderControls()}
    </div>
  );
};

const SlideEffect = ({ images, currentImageIndex, slideRef, isTransitioning, onTransitionEnd }) => (
  <div
    className="carousel-slide"
    ref={slideRef}
    style={{ 
      transform: `translateX(-${currentImageIndex * 100}%)`,
      transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
    }}
    onTransitionEnd={onTransitionEnd}
  >
    {images.map((image, index) => (
      <img key={index} src={image} alt={`slide-${index}`} className="carousel-image" />
    ))}
  </div>
);

const FadeEffect = ({ images, currentImageIndex }) => (
  <div className="carousel-fade">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`slide-${index}`}
        className={`carousel-image fade ${index === (currentImageIndex - 1) % images.length ? 'active' : ''}`}
      />
    ))}
  </div>
);

export default ImageCarousel1;
