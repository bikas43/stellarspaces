import React from 'react';
import './LandingPage3.css';
import LandingPageBackgroundImage from '../../Images/Properties/Appartment.webp';

const landingPageData = {
    title: "Welcome to Steller Spaces",
    subText: {
      part1: "Your Gateway to Exceptional Living. Whether you're seeking a dream home or a smart investment, we’re here to guide you. Explore our listings and find the perfect space today!",
    //   part2: " | DEVELOPING | ",
    //   part3: "MARKETING",
    },
    visualElements: [
      {
        imgSrc: require('../../Images/Properties/BrajoNiwas.webp'),
        title: "Duplex",
      },
      {
        imgSrc: require('../../Images/Properties/Duplex.webp'),
        title: "Appartment",
      },
      {
        imgSrc: require('../../Images/Properties/LingarajTribhuvan.png'),
        title: "Land",
      },
      {
        imgSrc: require('../../Images/Properties/Shop.webp'),
        title: "Proporty Sell",
      },
    ],
  };

const LandingPage3 = () => {
    return (
        <div className="landing-page3">
            <img
                className="landing-page3-background-img"
                src={LandingPageBackgroundImage}
                alt=""
            />

            <div className="landing-page3-background-overlay" />

            <div className="landing-page3-section-1">
                <h1 className="landing-page3-text-wrapper-title">{landingPageData.title}</h1>
                <p className="landing-page3-designing-developing-marketing">
                    <span className="landing-page3-text-wrapper-1">{landingPageData.subText.part1}</span>
                    <span className="landing-page3-text-wrapper-2">{landingPageData.subText.part2}</span>
                    <span className="landing-page3-text-wrapper-3">{landingPageData.subText.part3}</span>
                </p>
            </div>

            <div className="landing-page3-section-2">
                <div className="landing-page3-visual">
                    {landingPageData.visualElements.map((element, index) => (
                        <div className="landing-page3-visual-img-container" key={index}>
                            <img src={element.imgSrc} alt={element.title} />
                            <div className="landing-page3-visual-img-container-text">
                                <p>{element.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage3;
