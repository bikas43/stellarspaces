import React from 'react';
import './Footer.css';
import PdpIconHomeFill from '../Icons/PdpIconHomeFill'
import PdpIconPhoneringingFill from '../Icons/PdpIconHomeFill'
import PdpIconEnvolopeFill from '../Icons/PdpIconEnvolopeFill'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about-site">
                    <h3>About Site</h3>
                    <p>
                    Stellar Spaces is a modern real estate website designed to provide a seamless experience for property buyers, sellers, and investors. Specializing in the sale and purchase of land, residential properties, apartments, and commercial spaces, the website serves as a comprehensive platform for all real estate needs.                    </p>
                    <a href="#" className="read-more">Read more</a>
                </div>
                <div className="footer-section contact-us">
                    <h3>Contact Us</h3>
                    <p>
                        <PdpIconHomeFill className='contact-us-icon'/> A-48, Lingaraj Vihar, Pokharipur
                    </p>
                    <p>
                    <PdpIconPhoneringingFill className='contact-us-icon'/> +91 89260 73911
                    </p>
                    <p>
                    <PdpIconEnvolopeFill className='contact-us-icon'/> contact@stellarspaces.com
                    </p>
                </div>
                <div className="footer-section newsletter">
                    <h3>Newsletter</h3>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Submit</button>
                    </form>
                    <p className='footer-section-newsletter-p'>
                        Designed and Developed by <a href="https://pattanaikdatapoint.com">PDP</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
