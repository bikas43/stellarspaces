import React from 'react'
import ImageCarousel3 from '../../../Assets/Carousel/ImageCarousel3'
import './LandingPageSection0.css'
import ProportyImage1 from '../../../Assets/Carousel/3d-electric-car-building.jpg'
import ProportyImage2 from '../../../Assets/Carousel/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg'
import ProportyImage3 from '../../../Assets/Carousel/analog-landscape-city-with-buildings.jpg'
import ProportyImage4 from '../../../Images/Properties/LingarajTribhuvan.png'
import ProportyImage5 from '../../../Images/Properties/Saraswati-Ratna-Kunja.webp'
import ProportyImage6 from '../../../Images/Properties/BrajoNiwas.webp'
const LandingPageSection0 = () => {

    const properties = [
        {
            image: ProportyImage4,
            title: '3 BHK',
            price: '1.5 cr',
            rentPrice:'10,000',
            bedrooms: 4,
            bathrooms: 2,
            area: 1200,
            type: 'Appartment',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' 'Rent' or 'Sale'
        },
        {
            image: ProportyImage5,
            title: '2 BHK',
            price: '876,000',
            bedrooms: 3,
            bathrooms: 2,
            area: 1370,
            type: 'APARTMENT',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },
        {
            image: ProportyImage6,
            title: '5 BHK',
            price: '540,000',
            bedrooms: 5,
            bathrooms: 4,
            area: 2999,
            type: 'Duplex',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },
        {
            image: ProportyImage5,
            title: '3 BHK',
            price: '540,000',
            rentPrice:'5,400',
            bedrooms: 3,
            bathrooms: 2,
            area: 1725,
            type: 'STUDIO',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },
        {
            image: ProportyImage5,
            title: '3 BHK',
            price: '876,000',
            bedrooms: 3,
            bathrooms: 3,
            area: 2620,
            type: 'APARTMENT',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },
        {
            image: ProportyImage5,
            title: '3 BHK',
            price: '540,000',
            rentPrice:'5,400',
            bedrooms: 3,
            bathrooms: 3,
            area: 2586,
            type: 'APARTMENT',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },
        {
            image: ProportyImage5,
            title: '3 BHK',
            price: '876,000',
            bedrooms: 3,
            bathrooms: 3,
            area: 1733,
            type: 'APARTMENT',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },
        {
            image: ProportyImage5,
            title: '4 BHK',
            price: '540,000',
            bedrooms: 4,
            bathrooms: 3,
            area: 2999,
            type: 'APARTMENT',
            isFeatured: true,
            isForRentSale: 'Sale', // 'Rent' or 'Sale'
        },

    ];

    return (
        <div className='LandingPageSection0'>
        <h1>Latest & Featured Properties</h1>  
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, molestias iure labore soluta laudantium deleniti quae. Modi esse nihil praesentium id impedit atque? Repudiandae culpa error nisi dolore perferendis. Blanditiis.</p>
            <ImageCarousel3 properties={properties} />
        </div>
    )
}

export default LandingPageSection0
