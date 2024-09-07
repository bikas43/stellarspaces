import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TopNavBar1.css';

function TopNavBar1({ logo, menuItems }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

    const handleMenuClick = (route) => {
        if (route === '/') {
            localStorage.clear();
            window.location.reload();
        } else {
            navigate(route);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const renderMenuItems = (menuItems) => {
        return menuItems.map((item, index) => (
            <div
                key={index}
                className={`menu-item ${location.pathname.startsWith(item.route) ? 'active' : ''}`}
                onClick={() => !item.submenu && handleMenuClick(item.route)}
            >
                {item.label}
                {item.submenu && item.submenu.length > 0 && (
                    <span className="arrow"></span>
                )}
                <div className="underline" />
                {item.submenu && item.submenu.length > 0 && (
                    <div className="submenu">
                        {item.submenu.map((subItem, subIndex) => (
                            <div
                                key={subIndex}
                                className="submenu-item"
                                onClick={() => handleMenuClick(subItem.route)}
                            >
                                {subItem.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className="navbar-content">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={logo} alt="Stellar Spaces Logo" />
                </div>

                {/* Hamburger Menu */}
                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>

                {/* Menu */}
                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    {renderMenuItems(menuItems)}
                </div>
            </div>
        </div>
    );
}


export default TopNavBar1;
