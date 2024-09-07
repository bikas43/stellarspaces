import React from 'react';
import './ContactBar.css';
import PdpIconWhatsaap from '../../Assets/Icons/PdpIconWhatsaap';
import PdpIconPhoneringingOutline from '../../Assets/Icons/PdpIconPhoneringingOutline';

const ContactBar = () => {
    return (
        <div className="contact-bar">
            <div className="contact-item">
                <a href="https://wa.me/+918926073911" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <PdpIconWhatsaap className="contact-icon-whatssap"/>
                    <span className="contact-text">Whatsaap Chat</span>
                </a>
            </div>
            <div className="contact-item">
                <a href="tel:+918926073911" className="contact-link">
                    <PdpIconPhoneringingOutline className="contact-icon-mobile"/>
                    <span className="contact-text">+91 89260 73911</span>
                </a>
            </div>
        </div>
    );
};

export default ContactBar;
