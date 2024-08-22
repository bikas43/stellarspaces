import React from 'react';
import './PdpSections1.css';
import { useScrollReveal } from '../../Functions/useScrollReveal';
import SvgLandBuy from '../../Assets/Icons/LandBuy';
import SvgPropertyBuy from '../../Assets/Icons/PropertyBuy';
import SvgLandSell from '../../Assets/Icons/LandSell';
import SvgPropertySell from '../../Assets/Icons/PropertySell';
import SvgSupportLeady from '../../Assets/Icons/SupportLeady';

const PdpSections1 = () => {
    const { isRevealed, elementRef } = useScrollReveal(0.6);
    const styles = {
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0)' : 'translateY(80px)',
        transition: 'opacity 0.6s ease, transform .6s ease',
      };
    const iconsList = [
        { name: 'Land Buy', component: SvgLandBuy },
        { name: 'Property Buy', component: SvgPropertyBuy },
        { name: 'Land Sell', component: SvgLandSell },
        { name: 'Property Sell', component: SvgPropertySell },
        { name: 'Need Help!', component: SvgSupportLeady }
    ];

    return (
        <div className='PdpSections1-container'>
            <div className='PdpSections1-background' />

            <div className='PdpSections1-content'>
                <div className='PdpSections1-container-skew'>
                    <div className="PdpSections1-container-skew-object"  ref={elementRef} style={styles}>
                        {/* Add your content here */}
                        <h3>Stellar space offers a wide range of property deals <br />to assist you to get your dreams </h3>
                        <div className="PdpSections1-container-skew-object-icons-container">
                            {iconsList.map((icon, index) => (
                                <div key={index} className='PdpSections1-container-skew-object-icons'>
                                    <icon.component />
                                    <p>{icon.name}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PdpSections1;
