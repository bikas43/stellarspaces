import React from 'react';
import './LandingPage1.css';
import '../../Global.css';
import LandingPageBackgroundImage from './security-survelance.jpg'

const LandingPage1 = () => {
    const title = "JSS Industries";

    return (
        <div className='landing-page-1'>
            <div className="landing-page-1-background-image">
                <img src={LandingPageBackgroundImage} alt="" />
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
                    <h3>Secure Life Digitally</h3>
                </div>
                <div className="landing-page-1-content-right">
                    asd
                </div>
            </div>
        </div>
    );
}

export default LandingPage1;
