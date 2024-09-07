import React from 'react';
import './LandingPage2.css';
import LandingPageBackgroundImage from '../../Images/Properties/Appartment.webp';

const landingPageData = {
  title: "Stellar Spaces",
  subText: {
    part1: "DESIGNING",
    part2: " | DEVELOPING | ",
    part3: "MARKETING",
  },
  visualElements: [
    {
      imgSrc: require('../../Images/Properties/BrajoNiwas.webp'),
      title: "Designing",
    },
    {
      imgSrc: require('../../Images/Properties/Duplex.webp'),
      title: "Development",
    },
    {
      imgSrc: require('../../Images/Properties/LingarajTribhuvan.png'),
      title: "Marketing",
    },
    {
      imgSrc: require('../../Images/Properties/Shop.webp'),
      title: "Public Relation",
    },
  ],
};

const LandingPage2 = () => {
  return (
    <div className="landing-page2">
      <img
        className="landing-page2-background-img"
        src={LandingPageBackgroundImage}
        alt=""
      />

      <div className="landing-page2-background-overlay" />

      <div className="landing-page-section-1">
        <h1 className="text-wrapper-title">{landingPageData.title}</h1>
        <p className="designing-developing-marketing">
          <span className="text-wrapper-1">{landingPageData.subText.part1}</span>
          <span className="text-wrapper-2">{landingPageData.subText.part2}</span>
          <span className="text-wrapper-3">{landingPageData.subText.part3}</span>
        </p>
      </div>

      <div className="landing-page-section-2">
        <div className="landing-page-visual">
          {landingPageData.visualElements.map((element, index) => (
            <div className="landing-page-visual-img-container" key={index}>
              <img src={element.imgSrc} alt={element.title} />
              <div className="landing-page-visual-img-container-text">
                <p>{element.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
