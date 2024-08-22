import React from 'react';
import TopNavBar1 from '../Assets/NavBar/TopNavBar1';
import logo from '../Images/Logo/logo-color.png';

const menuItems = [
    { id: 'home', label: 'Home', route: '/home' },
    {
        id: 'properties',
        label: 'Properties',
        route: '/properties',
       submenu: [
            { label: 'Land', route: '/Land' },
            { label: 'Simplex', route: '/Simplex' },
            { label: 'Duplex', route: '/Duplex' },
            { label: 'Appartment', route: '/Appartment' },
        ]
    },
    {
        id: 'services',
        label: 'Services',
        route: '/services',
        submenu: [
            { label: 'Buy or Sell Consultation', route: '/BuyorSellConsultation' },
            { label: 'Property Registration', route: '/PropertyRegistration' },
            { label: 'Building Construction', route: '/BuildingConstruction' },
            { label: 'Building Re-Construction', route: '/BuildingReConstruction' },
            { label: 'Building Modification', route: '/BuildingModification' },
        ]
    },
    {
        id: 'productdelear',
        label: 'Products',
        route: '/products',
        // submenu: [
        //     { label: 'Buy or Sell Consultation', route: '/PropertyConsultation' },
        //     { label: 'Property Registration', route: '/PropertyRegistration' },
        //     { label: 'Building Construction', route: '/Building Construction' },
        //     { label: 'Building Re-Construction', route: '/BuildingReConstruction' },
        //     { label: 'Building Modification', route: '/BuildingModification' },
        // ]
    },
   
    {
        id: 'about-us',
        label: 'About Us',
        route: '/about-us',
        submenu: [
            { label: 'About Us', route: '/about_us' },
            { label: 'Contact Us', route: '/contact_us' },
            { label: 'Gallery', route: '/gallery' }
        ]
    }
];

function NavigationBar() {
    

    return (
        <TopNavBar1
            logo={logo}
            menuItems={menuItems}
            erEmail to UpperNavbar
        />
    );
}

export default NavigationBar;
