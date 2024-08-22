import React from 'react';
import './LandingPage1.css';
import '../../Global.css';
import ImageCarousel1 from '../Carousel/ImageCarousel1';
import ImageCarouselimage1 from '../Carousel/analog-landscape-city-with-buildings.jpg';
import ImageCarouselimage2 from '../Carousel/3d-electric-car-building.jpg';
import ImageCarouselimage3 from '../Carousel/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg';
import ImageCarouselimage4 from '../Carousel/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg';


const LandingPage1 = () => {
    const title = "Stellar Spaces";
    const images = [ImageCarouselimage3,ImageCarouselimage2,ImageCarouselimage1,ImageCarouselimage4];

    return (
        <div className='landing-page-1'>
            <div className="landing-page-1-background-image">
                <ImageCarousel1
                images={images}
                autoPlayInterval={4000}
                effect="fade" // Optional: 'slide' or 'fade' (default is 'slide')
                controls="none" // You can switch to "buttons", "dots", "buttons-dots", "thumbnails", or "none"
            />
            <div className="landing-page-1-background-image-filter"></div>

            </div>
            <div className="landing-page-1-content">
                <div className="landing-page-1-content-left">
                    <h1>
                        {title.split('').map((letter, index) => (
                            letter === ' ' ?
                                <span key={index} className="space"></span> :
                                <span key={index}>{letter}</span>
                        ))}
                    </h1>
                    <h3>Your Gateway to Exceptional Living</h3>
                </div>
                <div className="landing-page-1-content-right">
                </div>
            </div>
        </div>
    );
}

export default LandingPage1;
